package com.chinaias.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.Commission;
import com.chinaias.entity.EvalDetail;
import com.chinaias.entity.EvalHistory;
import com.chinaias.entity.HalfProduct;
import com.chinaias.entity.Material;
import com.chinaias.entity.QoHeader;
import com.chinaias.entity.QoLine;
import com.chinaias.entity.Transport;
import com.chinaias.entity.jo.JoHeader;
import com.chinaias.entity.jo.JoLine;
import com.chinaias.entity.jo.JoOrder;
import com.chinaias.entity.po.PoHeader;
import com.chinaias.entity.po.PoLine;
import com.chinaias.entity.po.PoOrder;
import com.chinaias.entity.so.SoCommissions;
import com.chinaias.entity.so.SoHeader;
import com.chinaias.entity.so.SoLine;
import com.chinaias.entity.so.SoOrder;
import com.chinaias.service.IBaseService;
import com.chinaias.service.ISalesOrderService;
import com.chinaias.util.Tools;

import net.sf.json.JSONArray;

@Service
public class SalesOrderService implements ISalesOrderService {
	// private

	@Resource
	private IBaseDao<EvalHistory> baseDao;

	@Resource
	private IBaseDao<EvalDetail> baseDaoDetail;

	@Resource
	private IBaseDao<Commission> baseDaoCom;

	@Resource
	private IBaseDao<HalfProduct> baseDaoHalfProduct;
	@Resource
	private IBaseDao<Material> baseDaoMaterial;
	
	@Resource
	private IBaseService<SoLine> baseServiceSoLine;
	@Resource
	private IBaseService<SoHeader> baseServiceSoHeader;
	@Resource
	private IBaseService<SoCommissions> baseServiceSoCommissions;
	
	@Override
	public List<JoOrder> generateJoOrders(String evalationNumber, String soHeaderId, String soLineId) {
		// TODO Auto-generated method stub
		List<JoOrder> joOrderList = new ArrayList<JoOrder>();
		JoHeader joHeader = new JoHeader();

		/* get evalation product to generate first level BOM */
		System.out.println(evalationNumber);
		EvalHistory evalHistory = baseDao.findById(EvalHistory.class, evalationNumber); // 注入
																						// ，findBy
		// evalationNumber
		joHeader.setDepartment("业务部");
		String joHeaderId = Tools.getUUID();
		joHeader.setHeaderId(joHeaderId); // UUID
		joHeader.setMaterialName(evalHistory.getProductName());
		joHeader.setMaterialSku(evalHistory.getProductSKU());
		joHeader.setSeq(0);
		joHeader.setSoHeaderId(soHeaderId);
		joHeader.setSoLineId(soLineId);
		joHeader.setStatus(0);
		joHeader.setCreateTime(new Date());

		System.out.println(evalHistory.getEvalDetailID());
		/* get evalation half product to generate first level BOM */
		EvalDetail evalDetail = baseDaoDetail.findById(EvalDetail.class, evalHistory.getEvalDetailID()); // 注入
																											// ，findBy
		// evalHistory.getEvalDetailID()
		List<HalfProduct> halfProductList = baseDaoHalfProduct
				.findAll("from HalfProduct where listid='" + evalDetail.getHalfProdListID() + "'"); // 注入
		// ，findBy
		// evalDetail.getHalfProdListID()

		List<JoLine> joLineList = new ArrayList<JoLine>();
		for (HalfProduct halfProduct : halfProductList) {
			JoLine joLine = new JoLine();
			joLine.setHeaderId(joHeaderId);
			joLine.setLineId(Tools.getUUID());
			joLine.setMaterialName(halfProduct.getHpName());
			joLine.setMaterialSku("SKU1111112");
			joLine.setProductivity(0);
			joLine.setQuantity(halfProduct.getMaterialLoss());
			joLineList.add(joLine);
		}

		JoOrder joOrder = new JoOrder();
		joOrder.setJoHeader(joHeader);
		joOrder.setJoLineList(joLineList);
		joOrderList.add(joOrder);

		/* get evalation material to generate second level BOM */
		List<Material> materialList = baseDaoMaterial
				.findAll("from HalfProduct where listid='" + evalDetail.getMaterialListID() + "'"); // 注入
																									// ，findBy
		// evalDetail.getMaterialListID()
		for (int i = 0; i < materialList.size(); i++) {
			Material material = materialList.get(i);
			if (!material.getMaterialJson().isEmpty()) { // 包含加工物料
				String joSubHeaderId = Tools.getUUID();
				joHeader.setHeaderId(joSubHeaderId); // UUID
				joHeader.setMaterialName(material.getMaterialName());
				joHeader.setMaterialSku("");
				joHeader.setSeq(1 + i);
				joHeader.setSoHeaderId(soHeaderId);
				joHeader.setSoLineId(soLineId);
				joHeader.setStatus(0);
				joHeader.setCreateTime(new Date());
				joLineList.clear();

				// [{"type":"原材料","name":"100%C/平纹/40*40/133*95/85\"/喷气","isManual":false,"price":"11.50","factory":"工厂11"}]
				JSONArray materialJsonArr = JSONArray.fromObject(material.getMaterialJson());
				for (int j = 0; j < materialJsonArr.size(); i++) {

					JoLine joLine = new JoLine();
					joLine.setHeaderId(joSubHeaderId);
					joLine.setLineId(Tools.getUUID());
					joLine.setMaterialName(materialJsonArr.getJSONObject(j).getString("name"));
					joLine.setMaterialSku(materialJsonArr.getJSONObject(j).getString("sku"));
					joLine.setProductivity(0);
					joLine.setQuantity(0);
					joLineList.add(joLine);
				}
				joOrder.setJoHeader(joHeader);
				joOrder.setJoLineList(joLineList);
				joOrderList.add(joOrder);
			}

		}

		return joOrderList;
	}

	@Override
	public List<SoOrder> generateSoOrder(List<QoLine> qoLineList, String deliveryMethod, String provenance,
			String destination, String packageDes) {
		// TODO Auto-generated method stub
		List<SoOrder> soOrderList = new ArrayList<SoOrder>();
		for (QoLine qoLine : qoLineList) {
			boolean flag = false;
			for (SoOrder soOrder : soOrderList) {
				if (soOrder.getSoHeader().getOrgName().equals(qoLine.getLegalEntity())
						&& soOrder.getSoHeader().getOrderType().equals(qoLine.getOrderType())) {
					// 同一实体 头不变，行插入

					// 订单行
					SoLine soLine = new SoLine();

					/** @pdOid 03dfa68d-f318-4528-bd66-f94a0a41c227 */
					soLine.setLineId(Tools.getUUID());
					/** 行号 */
					soLine.setLineNum(String.valueOf(soOrder.getSoLineList().size()));
					/** 物料编码 */
					soLine.setItemNumber(qoLine.getProductSku());
					/** 订单数量 */
					soLine.setOrderQuantity(String.valueOf(qoLine.getQoQuantity()));
					/** 物料单位 */
					soLine.setItemUom(qoLine.getQoUnit());
					/** 价格 */
					soLine.setPrice("");// 不要传
					/** 请求日期 */
					soLine.setRequestDate("");// 补
					/** 客户PO编码 */
					soLine.setCustPoNumber("");// 补
					/** 公司间结算价 */
					soLine.setInternalPrice(""); // 不要传
					/** 品牌终端 */
					soLine.setBrandTerminal("");
					/** 客户终端 */
					soLine.setCustomerTerminal("");
					/** 英文品名 */
					soLine.setEnProductName("");// 补 ，从物料编码中带出，否则出运时需要手写
					/** 测算单价 */
					soLine.setCalculatePrice(String.valueOf(qoLine.getPerformPrice()));
					/** 成本比例 */
					soLine.setCostRate("");// 不要了
					/** 报关单价 */
					soLine.setClearancePrice("");// 不要了
					/** 测算单号 */
					soLine.setEvaluationOrderNumber(qoLine.getEvaluationNumber());
					/** 成品名称 */
					soLine.setProductName(qoLine.getProductName());
					/** 物料描述 */
					soLine.setMaterialDes(qoLine.getProductDes());
					/** 规格 */
					soLine.setSpecification(qoLine.getSpecification());
					/** 单位价格 */
					soLine.setUnitPrice(qoLine.getPerformPrice());
					/** 交货日期 */
					soLine.setDeliveryDate(qoLine.getDeliveryData());
					/** 备注 */
					soLine.setRemark(qoLine.getQoRemark());
					soOrder.getSoLineList().add(soLine);

					// 佣金行
					SoCommissions soCommissions = new SoCommissions();
					List<EvalHistory> evalHistoryList = this.baseDao.findByProperty(EvalHistory.class, "listID",
							qoLine.getEvaluationNumber());
					for (EvalHistory evalHistory : evalHistoryList) {
						EvalDetail evalDetail = new EvalDetail(); // 注入 ，findBy
																	// evalHistory.getEvalDetailID()
						evalDetail = this.baseDaoDetail.findById(EvalDetail.class, evalHistory.getEvalDetailID());

						List<Commission> commissionList = new ArrayList<Commission>(); // 注入
																						// ，findBy
																						// evalDetail.getCommissionListID()
						commissionList = this.baseDaoCom.findByProperty(Commission.class, "ListID",
								evalDetail.getCommissionListID());
						for (Commission commission : commissionList) {
							soCommissions.setCommissionsId(Tools.getUUID());
							/** 业务实体 */
							soCommissions.setOrgName(qoLine.getLegalEntity());
							/** 销售订单编号 */
							soCommissions.setOrderNumber("");// 生成销售订单时补充
							/** 销售订单行号 */
							soCommissions.setLineNum(String.valueOf(soOrder.getSoLineList().size()));
							/** 单据类型(头:HDR 行: LINE) */
							soCommissions.setSourceDocType("LINE");
							/** 佣金序号 */
							soCommissions.setCommissionLineNum(commission.getTakeDrawOrder());
							/** 佣金类型 */
							soCommissions.setCommissionTypeName("比率");
							/** 佣金比率 */
							soCommissions.setCommissionRate(String.valueOf(commission.getTakeDrawRate()));
							/** 佣金单价 */
							soCommissions.setCommissionPrice("");// 无
							/** 佣金收取方 */
							soCommissions.setVendorName(commission.getTakeDrawPerson());

							soOrder.getSoCommissionsList().add(soCommissions);
						}

					}
					flag = true;
					break;
				}

			}
			if (!flag) {
				// 不同实体

				// 订单头

				List<EvalHistory> evalHistoryList = this.baseDao.findByProperty(EvalHistory.class, "listID",
						qoLine.getEvaluationNumber());
				for (EvalHistory evalHistory : evalHistoryList) {
					// 注入 ，findBy evalationNumber
					// evalationNumber
					SoOrder soOrder = new SoOrder();
					SoHeader soHeader = new SoHeader();
					/** 项目id */
					soHeader.setProjectId("2018");
					/** 业务实体 */
					soHeader.setOrgName(qoLine.getLegalEntity());
					/** 订单类型 */
					soHeader.setOrderType(qoLine.getOrderType());
					/** 订单编号 */
					soHeader.setOrderNumber("");// 补
					/**  */
					soHeader.setHeaderId(Tools.getUUID());
					/** 客户编码 */
					soHeader.setCustomerNumber(evalHistory.getCustomCode());
					/** 客户地址 */
					soHeader.setCustomerAddress(""); // 补
					/** 订购日期 */
					soHeader.setOrderDate(Tools.getFormatCurrentDateStr(null));// 下销售订单的日期
					/** 价目表 */
					soHeader.setPriceList(qoLine.getPriceTable());
					/** 销售员员工号 */
					soHeader.setSalePersonNumber("");// 补
					/** 币种 */
					soHeader.setCurrencyCode(evalHistory.getQuoteCurrency());
					/** 付款条件 */
					soHeader.setPaymentTerm("");// ?
					/** 发运方式 */
					soHeader.setShipMethod(deliveryMethod);
					/** 仓库 */
					soHeader.setShipFrom(qoLine.getQoWarehouse());
					/** 项目 */
					soHeader.setProjectNumber("");// 补
					/** 任务 */
					soHeader.setTaskNumber("");// 补
					/** 部门 */
					soHeader.setDepartmentName("业务部");// 补
					/** 贸易条款 */
					soHeader.setTradeTerm(evalHistory.getTradeForm());
					/** 折扣率 */
					soHeader.setDiscountRate("");

					// 订单行
					List<SoLine> soLineList = new ArrayList<SoLine>();
					SoLine soLine = new SoLine();

					/** @pdOid 03dfa68d-f318-4528-bd66-f94a0a41c227 */
					soLine.setLineId(Tools.getUUID());
					/** 行号 */
					soLine.setLineNum("0");
					/** 物料编码 */
					soLine.setItemNumber(qoLine.getProductSku());
					/** 订单数量 */
					soLine.setOrderQuantity(String.valueOf(qoLine.getQoQuantity()));
					/** 物料单位 */
					soLine.setItemUom(qoLine.getQoUnit());
					/** 价格 */
					soLine.setPrice("");// 不要传
					/** 请求日期 */
					soLine.setRequestDate("");// 补
					/** 客户PO编码 */
					soLine.setCustPoNumber("");// 补
					/** 公司间结算价 */
					soLine.setInternalPrice(""); // 不要传
					/** 品牌终端 */
					soLine.setBrandTerminal("");
					/** 客户终端 */
					soLine.setCustomerTerminal("");
					/** 英文品名 */
					soLine.setEnProductName("");// 补 ，从物料编码中带出，否则出运时需要手写
					/** 测算单价 */
					soLine.setCalculatePrice(String.valueOf(qoLine.getPerformPrice()));
					/** 成本比例 */
					soLine.setCostRate("");// 不要了
					/** 报关单价 */
					soLine.setClearancePrice("");// 不要了
					/** 测算单号 */
					soLine.setEvaluationOrderNumber(qoLine.getEvaluationNumber());
					/** 成品名称 */
					soLine.setProductName(qoLine.getProductName());
					/** 物料描述 */
					soLine.setMaterialDes(qoLine.getProductDes());
					/** 规格 */
					soLine.setSpecification(qoLine.getSpecification());
					/** 单位价格 */
					soLine.setUnitPrice(qoLine.getPerformPrice());
					/** 交货日期 */
					soLine.setDeliveryDate(qoLine.getDeliveryData());
					/** 备注 */
					soLine.setRemark(qoLine.getQoRemark());
					soLineList.add(soLine);

					// 拥金行
					List<SoCommissions> soCommissionsList = new ArrayList<SoCommissions>();

					// EvalHistory evalHistory1 = new EvalHistory();
					EvalDetail evalDetail = new EvalDetail(); // 注入 ，findBy
					evalDetail = this.baseDaoDetail.findById(EvalDetail.class, evalHistory.getEvalDetailID());
					// 注入 ，findBy evalationNumber
					List<Commission> commissionList = new ArrayList<Commission>(); // 注入
																					// ，findBy
																					// evalDetail.getCommissionListID()
					commissionList = this.baseDaoCom.findByProperty(Commission.class, "listID",
							evalDetail.getCommissionListID());

					for (Commission commission : commissionList) {
						SoCommissions soCommissions = new SoCommissions();
						soCommissions.setCommissionsId(Tools.getUUID());
						/** 业务实体 */
						soCommissions.setOrgName(qoLine.getLegalEntity());
						/** 销售订单编号 */
						soCommissions.setOrderNumber("");// 生成销售订单时补充
						/** 销售订单行号 */
						soCommissions.setLineNum(String.valueOf(0));
						/** 单据类型(头:HDR 行: LINE) */
						soCommissions.setSourceDocType("LINE");
						/** 佣金序号 */
						soCommissions.setCommissionLineNum(commission.getTakeDrawOrder());
						/** 佣金类型 */
						soCommissions.setCommissionTypeName("比率");
						/** 佣金比率 */
						soCommissions.setCommissionRate(String.valueOf(commission.getTakeDrawRate()));
						/** 佣金单价 */
						soCommissions.setCommissionPrice("");// 无
						/** 佣金收取方 */
						soCommissions.setVendorName(commission.getTakeDrawPerson());

						soCommissionsList.add(soCommissions);
					}

					soOrder.setSoHeader(soHeader);
					soOrder.setSoLineList(soLineList);
					soOrder.setSoCommissionsList(soCommissionsList);
					soOrderList.add(soOrder);
				}

			}
		}
		return soOrderList;
	}
	
	
	@Override
	public SoOrder getSoOrderByHeaderId(String headerId) {
		SoOrder soOrder= new SoOrder();
		SoHeader soHeader = baseServiceSoHeader.findById(SoHeader.class, headerId);
		List<SoLine> soLineList = baseServiceSoLine.findAll("from SoLine where headerId='"+headerId+"'");
		List<SoCommissions> soCommissionsList = baseServiceSoCommissions.findAll("from SoCommissions where headerId='"+headerId+"'");
		soOrder.setSoHeader(soHeader);
		soOrder.setSoLineList(soLineList);
		soOrder.setSoCommissionsList(soCommissionsList);
		return soOrder;
	}
	
	@Override
	public String getSoOrderReturnOrderNumber(SoOrder soOrder) {
		String OrderNo = "";
		List<SoHeader> soHeaders = baseServiceSoHeader.findAll("from SoHeader where orderNumber = (select max(orderNumber) from SoHeader)");

		//		
//		SoOrder soOrder= new SoOrder();
//		SoHeader soHeader = baseServiceSoHeader.findById(SoHeader.class, headerId);
//		List<SoLine> soLineList = baseServiceSoLine.findAll("from SoHeader where headerId='"+headerId+"'");
//		soOrder.setSoHeader(soHeader);
//		soOrder.setSoLineList(soLineList);
		
		
		return soOrder.getSoHeader().getOrderNumber();
	}

}
