package com.chinaias.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.sound.sampled.Line;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.chinaias.util.Tools;
import com.chinaias.entity.EvalDetail;
import com.chinaias.entity.QoLine;
import com.chinaias.entity.po.PoHeader;
import com.chinaias.entity.po.PoLine;
import com.chinaias.entity.po.PoOrder;
import com.chinaias.entity.so.SoHeader;
import com.chinaias.entity.so.SoLine;
import com.chinaias.entity.so.SoOrder;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IPurchaseOrderService;
@Service
public class PurchaseOrderService implements IPurchaseOrderService {

	@Resource
	private IBaseService<SoLine> baseServiceSoLine;
	@Resource
	private IBaseService<PoLine> baseServicePoLine;
	@Resource
	private IBaseService<PoHeader> baseServicePoHeader;
	@Resource
	private IBaseService<SoHeader> baseServiceSoHeader;
	@Override
	public List<PoOrder> generatePoOrder( List<SoLine> soLineList) {
		// TODO Auto-generated method stub
		List<PoOrder> poOrderList = new ArrayList<PoOrder>();

		for (SoLine soLine : soLineList) {
			boolean flag = false;
			for (PoOrder poOrder : poOrderList) {
				if (poOrder.getPoHeader().getVendorName().equals(soLine.getSupplier())) {
					// 相同供应商
					flag = true;
					
					PoLine poLine = new PoLine();
					poLine.setLineId(Tools.getUUID());
					/**
					 * 行号*/
					poLine.setLineNum(String.valueOf(poOrder.getPoLineList().size()));
					/**
					 * 发运行号*/
					poLine.setShipmentNum("");//补
					/**
					 * 物料编码*/
					poLine.setItemNumber(soLine.getProductSKU());
					/**
					 * 单位*/
					poLine.setUnitOfMeasure(soLine.getItemUom());
					/**
					 * 数量*/
					//SoLine soLine = baseServiceSoLine.findById(SoLine.class, qoLine.getLineId());//注入 , findBy qoLine.getLineId()
					poLine.setQuantity(soLine.getOrderQuantity());//销售订单
					/**
					 * 单价*/
					poLine.setUnitPrice(String.valueOf(soLine.getPrice()));
					/**
					 * 行类型*/
					poLine.setLineType("");//如果报价平台做费用型的采购订单，比如：费用化的辅料，这时传“费用”。否则默认为“货物”，报价平台不要传
					/**
					 * 税率*/
					poLine.setLineAttribute1("");//补
					/**
					 * 含税价格*/
					poLine.setLineAttribute3("");//补
					/**
					 * 项目*/
					
					poLine.setLineAttribute4(soLine.getProjectNumber());//销售订单
					poLine.setHeaderID(poOrder.getPoHeader().getHeaderId());
					baseServicePoLine.save(poLine);//===>入库
					poOrder.getPoLineList().add(poLine);

					break;
				} 
				
			}
			
			if(!flag) {
				// 不同供应商
				PoHeader poHeader = new PoHeader();

				poHeader.setHeaderId(Tools.getUUID());
				/** 业务实体 */
				poHeader.setOrgCode(soLine.getOrgCode());
				/** PO版本 */
				poHeader.setDocumentNum("");// 采购订单号
				/** 采购员名称 */
				poHeader.setAgentName("");// 操作者名字，可以改，补
				/** 供应商名称 */
				poHeader.setVendorName(soLine.getSupplier());
				/** 供应商联系人 */
				poHeader.setVendorContact("");// 补
				/** 币种 */
				poHeader.setCurrencyCode(soLine.getCurrencyCode());
				/** 摘要 */
				poHeader.setComments("");// 补
				/** 说明弹性域3 */
				poHeader.setAttribute3("");// 补
				/** 说明弹性域4 */
				poHeader.setAttribute4("");// 补
				/** 说明弹性域5 */
				poHeader.setAttribute5("");// 补
				/** 说明弹性域6 */
				poHeader.setAttribute6("");// 补
				/** 说明弹性域13 */
				poHeader.setAttribute13("");// 补
				baseServicePoHeader.save(poHeader); //==>入库
				List<PoLine> poLineList = new ArrayList<PoLine>();
				PoLine poLine = new PoLine();
				poLine.setLineId(Tools.getUUID());
				/**
				 * 行号*/
				poLine.setLineNum(String.valueOf(0));
				/**
				 * 发运行号*/
				poLine.setShipmentNum("");//补
				/**
				 * 物料编码*/
				poLine.setItemNumber(soLine.getProductSKU());
				/**
				 * 单位*/
				poLine.setUnitOfMeasure(soLine.getItemUom());
				/**
				 * 数量*/
				//SoLine soLine = baseServiceSoLine.findById(SoLine.class, qoLine.getLineId());//注入 , findBy qoLine.getLineId()
				poLine.setQuantity(soLine.getOrderQuantity());//销售订单
				/**
				 * 单价*/
				poLine.setUnitPrice(String.valueOf(soLine.getPrice()));
				/**
				 * 行类型*/
				poLine.setLineType("");//如果报价平台做费用型的采购订单，比如：费用化的辅料，这时传“费用”。否则默认为“货物”，报价平台不要传
				/**
				 * 税率*/
				poLine.setLineAttribute1("");//补
				/**
				 * 含税价格*/
				poLine.setLineAttribute3("");//补
				/**
				 * 项目*/
				
				poLine.setLineAttribute4(soLine.getProjectNumber());//销售订单
				poLine.setHeaderID(poHeader.getHeaderId());
				baseServicePoLine.save(poLine);//===>入库
				poLineList.add(poLine);
				PoOrder poOrder = new PoOrder();
		//		poOrder.setPoDistributionsList(poDistributionsList);
				poOrder.setPoHeader(poHeader);
				poOrder.setPoLineList(poLineList);
				poOrderList.add(poOrder);
			}
		}
		
		return poOrderList;
	}
	@Override
	public PoOrder getPoOrderByHeaderId(String headerId) {
		PoOrder poOrder= new PoOrder();
		PoHeader poHeader = baseServicePoHeader.findById(PoHeader.class, headerId);
		List<PoLine> poLineList = baseServicePoLine.findAll("from PoLine where headerId='"+headerId+"'");
		poOrder.setPoHeader(poHeader);
		poOrder.setPoLineList(poLineList);
		return poOrder;
	}
	@Override
	public PoOrder savePoOrder(PoOrder poOrder) {
		List<PoHeader> poHeaderList = baseServicePoHeader.findAll("from PoHeader where headerId='"+poOrder.getPoHeader().getHeaderId()+"'");
		if (poHeaderList.size()>0) {//更新
			if("".equals(poHeaderList.get(0).getDocumentNum())){
				String documentNum = "";
				//如果有了第一条数据，取数据库最大的采购单号，加一赋给新的采购单
				//业务实体
			    String orgName = poOrder.getPoHeader().getOrgCode().replace("OU_", "");
			    //订单类型首字母
			    String firstWord = "P";
			    //年份
				Calendar c = Calendar.getInstance();//可以对每个时间域单独修改
				int yearVal = c.get(Calendar.YEAR); 
				String year = String.valueOf(yearVal);
				year = year.substring(year.length()-2,year.length());
				
				String orderType = orgName+firstWord+year;
				documentNum = Tools.getSerialNumber(orderType);
				poOrder.getPoHeader().setDocumentNum(documentNum);
			}
			PoHeader poHeader = new PoHeader();
			PoHeader poHeaderNow = new PoHeader();
			poHeader = poHeaderList.get(0);
			poHeaderNow = poOrder.getPoHeader();
			poHeader.setOrgCode(poHeaderNow.getOrgCode());
			poHeader.setAgentName(poHeaderNow.getAgentName());
			poHeader.setDocumentNum(poHeaderNow.getDocumentNum());
			poHeader.setVendorName(poHeaderNow.getVendorName());
			poHeader.setVendorContact(poHeaderNow.getVendorContact());
			poHeader.setCurrencyCode(poHeaderNow.getCurrencyCode());
			poHeader.setComments(poHeaderNow.getComments());
			poHeader.setAttribute3(poHeaderNow.getAttribute3());
			poHeader.setAttribute4(poHeaderNow.getAttribute4());
			poHeader.setAttribute5(poHeaderNow.getAttribute5());
			poHeader.setAttribute6(poHeaderNow.getAttribute6());
			poHeader.setAttribute13(poHeaderNow.getAttribute13());
			baseServicePoHeader.update(poHeader);
			for(PoLine poLine : poOrder.getPoLineList()){
				if(poLine.getLineId() == null||poLine.getLineId().equals("")){
					poLine.setLineId(Tools.getUUID());
					poLine.setHeaderID(poOrder.getPoHeader().getHeaderId());
					baseServicePoLine.save(poLine);
				}else{
					List<PoLine> poLines =  baseServicePoLine.findAll("from PoLine where lineId='"+poLine.getLineId()+"'");
					PoLine poLine2 = poLines.get(0);
					poLine2.setLineNum(poLine.getLineNum());
					poLine2.setShipmentNum(poLine.getShipmentNum());
					poLine2.setItemNumber(poLine.getItemNumber());
					poLine2.setUnitOfMeasure(poLine.getUnitOfMeasure());
					poLine2.setQuantity(poLine.getQuantity());
					poLine2.setUnitPrice(poLine.getUnitPrice());
					poLine2.setLineType(poLine.getLineType());
					poLine2.setLineAttribute1(poLine.getLineAttribute1());
					poLine2.setLineAttribute3(poLine.getLineAttribute3());
					poLine2.setLineAttribute4(poLine.getLineAttribute4());
					poLine2.setLineAttribute1(poLine.getLineAttribute1());
					poLine2.setContractNo(poLine.getContractNo());
					poLine2.setWipEntityName(poLine.getWipEntityName());
					baseServicePoLine.update(poLine2);
				}
			}
		}else if(poHeaderList.size()==0){//新增
			String documentNum = "";
			//如果有了第一条数据，取数据库最大的采购单号，加一赋给新的采购单
			//业务实体
		    String orgName = poOrder.getPoHeader().getOrgCode().replace("OU_", "");
		    //订单类型首字母
		    String firstWord = "P";
		    //年份
			Calendar c = Calendar.getInstance();//可以对每个时间域单独修改
			int yearVal = c.get(Calendar.YEAR); 
			String year = String.valueOf(yearVal);
			year = year.substring(year.length()-2,year.length());
			
			String orderType = orgName+firstWord+year;
			documentNum = Tools.getSerialNumber(orderType);
			poOrder.getPoHeader().setDocumentNum(documentNum);
			baseServicePoHeader.save(poOrder.getPoHeader());
			for(PoLine poLine : poOrder.getPoLineList()){
				poLine.setLineId(Tools.getUUID());
				poLine.setHeaderID(poOrder.getPoHeader().getHeaderId());
				baseServicePoLine.save(poLine);
			}
		}
		return poOrder;
	}
	
	@Override
	public void saveNewPoOrder(PoOrder poOrder) {
		// TODO Auto-generated method stub
		baseServicePoHeader.save(poOrder.getPoHeader());
	}
	
	@Override
	public String getPoOrderReturnOrderNumber(PoOrder poOrder) {
		String OrderNo = "";
		List<PoHeader> poHeaders = baseServicePoHeader.findAll("from PoHeader where orderNumber = (select max(orderNumber) from PoHeader)");

		//		
//		SoOrder soOrder= new SoOrder();
//		SoHeader soHeader = baseServiceSoHeader.findById(SoHeader.class, headerId);
//		List<SoLine> soLineList = baseServiceSoLine.findAll("from SoHeader where headerId='"+headerId+"'");
//		soOrder.setSoHeader(soHeader);
//		soOrder.setSoLineList(soLineList);
		
		
		return OrderNo;
	}

}