package com.chinaias.controller.purchaseOrder;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chinaias.entity.HalfProduct;
import com.chinaias.entity.Material;
import com.chinaias.entity.QoLine;
import com.chinaias.entity.po.ERP_PO_OUTORDER_PACKAGE;
import com.chinaias.entity.po.ERP_PO_PACKAGE;
import com.chinaias.entity.po.G_PO_DISTRIBUTIONS;
import com.chinaias.entity.po.G_PO_HEADERS;
import com.chinaias.entity.po.G_PO_LINES;
import com.chinaias.entity.po.G_PURCHASE_INFO;
import com.chinaias.entity.po.PoDistributions;
import com.chinaias.entity.po.PoHeader;
import com.chinaias.entity.po.PoLine;
import com.chinaias.entity.po.PoLineOutOrder;
import com.chinaias.entity.po.PoOrder;
import com.chinaias.entity.so.SoLine;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IPurchaseOrderService;
import com.chinaias.util.Tools;
import com.chinaias.webservice.erp.OutputParameters;
import com.chinaias.webservice.erp.P_REQUEST_DATA;
import com.chinaias.webservice.erp.RequestERP;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;
@Controller
@Scope("prototype") 
public class PurchaseOrderContraoller {

	@Resource
	private IBaseService<PoHeader> baseService;

	@Resource
	private IBaseService<SoLine> baseServiceSoLine;
	@Resource
	private IPurchaseOrderService purchaseOrderService;
	
	@RequestMapping(value="/getPurchaseOrderHistory.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getPurchaseOrderHistory(PoHeader poHeader) {
		List<PoHeader> poHeaderList = baseService.findAll("from PoHeader");
		JSONArray jsonArr = JSONArray.fromObject(poHeaderList);
		return jsonArr.toString();
	}
	
	@RequestMapping(value="/getPurchaseOrderByHeaderId.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getPurchaseOrderByHeaderId(PoHeader poHeader) {
//		PoOrder poOrder = purchaseOrderService.getPoOrderByHeaderId(poHeader.getHeaderId());临时需要生成空的采购订单---2017-10-21
//		JSONObject jsonArr = JSONObject.fromObject(poOrder);
//		return jsonArr.toString();
		
		poHeader.setHeaderId(Tools.getUUID());
		PoOrder poOrder = new PoOrder();
		PoLine poLine = new PoLine();
		poLine.setHeaderID(poHeader.getHeaderId());
		poLine.setLineNum(String.valueOf(0));
		poLine.setContractNo("");
		poLine.setWipEntityName("");
		poLine.setAccessExplain("");
		List<PoLine> poLineList = new ArrayList<PoLine>();
		poLineList.add(poLine);
		poOrder.setPoHeader(poHeader);
		poOrder.setPoLineList(poLineList);
		JSONObject jsonArr = JSONObject.fromObject(poOrder);
		return jsonArr.toString();
	}
	

	@RequestMapping(value="/getPurchaseOrderSoLine.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getPurchaseOrderSoLine(SoLine soLine) {
		List<SoLine> soLineList = baseServiceSoLine.findAll("from SoLine");
		JSONArray jsonArr = JSONArray.fromObject(soLineList);
		return jsonArr.toString();
	}
	
	@RequestMapping(value="/generatePoOrder.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String generatePoOrder(String json) {
		JSONArray jsonArrParam = JSONArray.fromObject(json);
		Object[] ol = jsonArrParam.toArray();
		List<SoLine> qoLineList = new ArrayList<SoLine>();
		for(Object o: ol){
			JSONObject obj = JSONObject.fromObject(o);
			String[] dateFormats = new String[] {"yyyy/MM/dd"};  
			JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(dateFormats));  
			SoLine soLine = (SoLine) JSONObject.toBean(obj, SoLine.class);
			qoLineList.add(soLine);
		}
		List<PoOrder> poOrderList =  purchaseOrderService.generatePoOrder( qoLineList);
		JSONArray jsonArr = JSONArray.fromObject(poOrderList);
		return jsonArr.toString();
	}
	
	@RequestMapping(value="/savePoOrder.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String savePoOrder(String json) {
		JSONObject jsonObject = JSONObject.fromObject(json);
		PoOrder poOrder = (PoOrder) JSONObject.toBean(jsonObject, PoOrder.class);
		JSONArray jsonArr = jsonObject.getJSONArray("poLineList");
		
		Object[] ol = jsonArr.toArray();
		List<PoLine> poLineList = new ArrayList<PoLine>();
		int lineNum = 0;
		for(Object o: ol){
			
			JSONObject obj = JSONObject.fromObject(o);
			if(obj.isNullObject()){
				continue;
			}
			String[] dateFormats = new String[] {"yyyy/MM/dd"};  
			JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(dateFormats));  
			PoLine poLine = (PoLine) JSONObject.toBean(obj, PoLine.class);
			poLine.setLineNum(String.valueOf(lineNum));
			poLineList.add(poLine);
			lineNum++;
		}
		poOrder.setPoLineList(poLineList);
		poOrder = purchaseOrderService.savePoOrder(poOrder);
		jsonObject = JSONObject.fromObject(poOrder);
		
		return jsonObject.toString();
	}
	
	@RequestMapping(value="/sendPurchaseOrderByHeaderId.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String sendPurchaseOrderByHeaderId(PoHeader poHeader) {
		PoOrder poOrder = purchaseOrderService.getPoOrderByHeaderId(poHeader.getHeaderId());
		P_REQUEST_DATA p_REQUEST_DATA = new P_REQUEST_DATA();
		ERP_PO_PACKAGE eRP_PO_PACKAGE = new ERP_PO_PACKAGE();
		G_PO_DISTRIBUTIONS g_PO_DISTRIBUTIONS = new G_PO_DISTRIBUTIONS();
		G_PO_HEADERS g_PO_HEADERS = new G_PO_HEADERS();
		G_PO_LINES g_PO_LINES = new G_PO_LINES();
		//处理
		poOrder.getPoHeader().setImportId("1");
		poOrder.getPoHeader().setHeaderId(null);
		int i = 1;
		for(PoLine poLine :poOrder.getPoLineList()){
			poLine.setHeaderID(null);
			poLine.setLineId(null);
			poLine.setLineNum(String.valueOf(i));
			poLine.setImportId("1");
			i++;
		}
		
		PoDistributions poDistributions = new PoDistributions();
		poDistributions.setImportId("1");
		poDistributions.setDistributionNum("1");
		poDistributions.setLineNum("1");
		poDistributions.setProject("S0003");
		poDistributions.setQuantityOrdered("5");
		poDistributions.setShipmentNum1("1");
		List<PoDistributions> poDistributionsList = new ArrayList<PoDistributions>();
		poDistributionsList.add(poDistributions);
		poOrder.setPoDistributionsList(poDistributionsList);
		
		g_PO_HEADERS.setPoHeader(poOrder.getPoHeader());
		g_PO_LINES.setPoLineList(poOrder.getPoLineList());
		g_PO_DISTRIBUTIONS.setPoDistributions(poOrder.getPoDistributionsList());
		eRP_PO_PACKAGE.setG_PO_DISTRIBUTIONS(g_PO_DISTRIBUTIONS);
		eRP_PO_PACKAGE.setG_PO_HEADERS(g_PO_HEADERS);
		eRP_PO_PACKAGE.setG_PO_LINES(g_PO_LINES);
		
		p_REQUEST_DATA.setpARAMETER(eRP_PO_PACKAGE);
		OutputParameters op = RequestERP.Request("PO_ORDER_IMPORT", p_REQUEST_DATA);
		JSONObject jsonArr = JSONObject.fromObject(op);
		return jsonArr.toString();
	}
	
	@RequestMapping(value="/sendOutsidePurchaseOrderByHeaderId.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	@ResponseBody public String sendOutsidePurchaseOrderByHeaderId(@RequestBody List<PoLineOutOrder> poLineOutOrderList) {
		for (int i = 0; i < poLineOutOrderList.size(); i++) {
			poLineOutOrderList.get(i).setImportId("1");
			poLineOutOrderList.get(i).setSourceCode("PRICE_PURCHASE");
			poLineOutOrderList.get(i).setSourceHeaderId("12");
			poLineOutOrderList.get(i).setSourceLineId("0012");
		}
		P_REQUEST_DATA p_REQUEST_DATA = new P_REQUEST_DATA();
		ERP_PO_OUTORDER_PACKAGE eRP_PO_OUTORDER_PACKAGE = new ERP_PO_OUTORDER_PACKAGE();
		G_PURCHASE_INFO g_PURCHASE_INFO = new G_PURCHASE_INFO();
		g_PURCHASE_INFO.setPoLineOutOrderList(poLineOutOrderList);
		eRP_PO_OUTORDER_PACKAGE.setG_PURCHASE_INFO(g_PURCHASE_INFO);
		p_REQUEST_DATA.setpARAMETER(eRP_PO_OUTORDER_PACKAGE);
		OutputParameters op = RequestERP.Request("OUTSIDE_PO_IMPORT", p_REQUEST_DATA);
		JSONObject jsonArr = JSONObject.fromObject(op);
		return jsonArr.toString();
	}
	
	@RequestMapping(value="/getPoSerialNumber.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getPoSerialNumber(PoOrder poOrder) {
		String poSerialNumber = "P17000001";
		poSerialNumber = purchaseOrderService.getPoOrderReturnOrderNumber(poOrder);
//		根据订单类型查询数据库中该类型订单的订单号，取最大值+1
		
//		将拼好的最大新订单号赋到实体类中，再存入数据库
		String result = "{'flag':false,'msg':''}";
		try{
			poSerialNumber = purchaseOrderService.getPoOrderReturnOrderNumber(poOrder);
			poOrder.getPoHeader().setDocumentNum(poSerialNumber);
			purchaseOrderService.saveNewPoOrder(poOrder);
			result = "{'flag':true,'msg':'"+poSerialNumber+"'}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;   
	}
	
}
