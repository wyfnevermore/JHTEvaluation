package com.chinaias.controller.salesOrder;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;
import com.chinaias.entity.pc.PcJobInfo;
import com.chinaias.entity.po.ERP_PO_PACKAGE;
import com.chinaias.entity.so.ERP_PROJECT_PACKAGE;
import com.chinaias.entity.so.ERP_SO_PACKAGE;
import com.chinaias.entity.so.G_PROJECT_INFO;
import com.chinaias.entity.so.SoCommissions;
import com.chinaias.entity.so.SoHeader;
import com.chinaias.entity.so.SoLine;
import com.chinaias.entity.so.SoOrder;
import com.chinaias.entity.so.SoProject;
import com.chinaias.service.IBaseService;
import com.chinaias.service.ISalesOrderService;
import com.chinaias.util.Tools;
import com.chinaias.webservice.erp.OutputParameters;
import com.chinaias.webservice.erp.P_REQUEST_DATA;
import com.chinaias.webservice.erp.RequestERP;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@Scope("prototype") 
public class SalesOrderController {

	@Resource
	private IBaseService<SoHeader> baseService;
	@Resource
	private IBaseService<SoLine> baseServiceSL;
	@Resource
	private IBaseService<SoCommissions> baseServiceSC;
	@Resource
	private IBaseService<SoProject> baseServiceSP;
	@Resource
	private ISalesOrderService salesOrderService;

	//public static String allUseHeaderId = "";

	@RequestMapping("/salesOrder.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("salesOrder");
		return mav;
	}

	//查询销售订单头
	@RequestMapping(value="/querySoHeader.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String querySoHeader(String headerId) {
		SoHeader soHeader = this.baseService.findById(SoHeader.class, headerId);
		JSONObject soHeaderJson = JSONObject.fromObject(soHeader); 
		return  soHeaderJson.toString(); 
	}


	//查询销售订单行
	@RequestMapping(value="/querySoLine.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String querySoLine(String headerId) {
		List<SoLine> soLine = this.baseServiceSL.findByProperty(SoLine.class, "headerId", headerId);
		//list转json
		String soLineJson=JSON.toJSON(soLine).toString();
		return  soLineJson.toString(); 
	}

	//查询佣金行
	@RequestMapping(value="/querySoCommission.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String querySoCommission(String headerId) {
		List<SoCommissions> soCommissions = this.baseServiceSC.findByProperty(SoCommissions.class, "headerId", headerId);
		//list转json
		String soLineJson=JSON.toJSON(soCommissions).toString();
		return  soLineJson.toString(); 
	}

	//通过id查询佣金行
	@RequestMapping(value="/querySoComById.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String querySoComById(String soComissionsId) {
		SoCommissions soCommission = this.baseServiceSC.findById(SoCommissions.class, soComissionsId);
		JSONObject jsonObject = JSONObject.fromObject(soCommission);
		return  jsonObject.toString(); 
	}
	
	
	
	@RequestMapping(value="/queryProjectById.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String queryProjectById(String projectId) {
		SoProject soProject = this.baseServiceSP.findById(SoProject.class, projectId);
		JSONObject jsonObject = JSONObject.fromObject(soProject);
		return  jsonObject.toString(); 
	}
	
	
	
//	//显示销售订单行
//		@RequestMapping(value="/queryProject.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
//		public @ResponseBody String queryProject(String projectId) {
//			SoProject soProject = this.baseServiceSP.findById(SoProject.class,projectId);
//			JSONObject jsonObject = JSONObject.fromObject(soProject);
//			return  jsonObject.toString(); 
//		}
//	


	//保存销售订单头
	@RequestMapping(value="/saveSoHeader.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String saveSoHeader(@RequestBody SoHeader soHeader) {
		//sendProjectById("");
	   String orderNumber = soHeader.getOrderNumber();
		if(orderNumber == null || "".equals(orderNumber)) {//订单号=业务实体+订单类型首字母+年份+6位数字
			//取数据库最大的单号，加一赋给新的采购单
			//业务实体
		    String orgName = soHeader.getOrgName().substring("OU_".length());
		    //订单类型首字母
		    String firstWord = "S";
		    //年份
			Calendar c = Calendar.getInstance();//可以对每个时间域单独修改
			int yearVal = c.get(Calendar.YEAR); 
			String year = String.valueOf(yearVal);
			year = year.substring(year.length()-2,year.length());
			
			String orderType = orgName+firstWord+year;
			orderNumber = Tools.getSerialNumber(orderType);
			soHeader.setOrderNumber(orderNumber);
		}
		
		SimpleDateFormat df1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		soHeader.setPo_Status(1);
		soHeader.setJo_Status(1);
		soHeader.setSo_Status(1);
		soHeader.setOrderDate(df1.format(new Date()));
		this.baseService.save(soHeader);
		return  "保存成功!"; 
	}
	
	@RequestMapping(value="/saveSalesOrder.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String saveSalesOrder(@RequestBody SoHeader soHeader,String projectData,String salesOrderLineData,String commissionData) {
	    String result = "";
	    String orderNumber ="";
		try{
	    	projectData = new String(projectData.getBytes("ISO-8859-1"),"UTF-8");
	    	salesOrderLineData = new String(salesOrderLineData.getBytes("ISO-8859-1"),"UTF-8");
	    	commissionData = new String(commissionData.getBytes("ISO-8859-1"),"UTF-8");
	    	
	    	//存项目
	    	JSONObject projectObject = JSONObject.fromObject(projectData);
	    	SoProject soProject = (SoProject) JSONObject.toBean(projectObject, SoProject.class);
	    	soProject.setProjectId(Tools.getUUID());
	    	this.baseServiceSP.save(soProject);
	    	
	    	//存头
	    	 orderNumber = soHeader.getOrderNumber();
			if(orderNumber == null || "".equals(orderNumber)) {//订单号=业务实体+订单类型首字母+年份+6位数字
				//取数据库最大的单号，加一赋给新的采购单
				//业务实体
			    String orgName = soHeader.getOrgName().substring("OU_".length());
			    //订单类型首字母
			    String firstWord = "S";
			    //年份
				Calendar c = Calendar.getInstance();//可以对每个时间域单独修改
				int yearVal = c.get(Calendar.YEAR); 
				String year = String.valueOf(yearVal);
				year = year.substring(year.length()-2,year.length());
				
				String orderType = orgName+firstWord+year;
				orderNumber = Tools.getSerialNumber(orderType);
				soHeader.setOrderNumber(orderNumber);
			}
			
			SimpleDateFormat df1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			soHeader.setPo_Status(1);
			soHeader.setJo_Status(1);
			soHeader.setSo_Status(1);
			soHeader.setHeaderId(Tools.getUUID());
			soHeader.setOrderDate(df1.format(new Date()));
			soHeader.setProjectId(soProject.getProjectId());
			this.baseService.save(soHeader);
			
			//存销售订单行信息
			JSONArray lineArray = JSONArray.fromObject(salesOrderLineData);
			for(int i=0;i<lineArray.size();i++){
				JSONObject line = lineArray.getJSONObject(i); // 遍历 jsonarray 数组，把每一个对象转成 json 对象
				SoLine soLine = new SoLine();
				soLine.setLineId(Tools.getUUID());
				soLine.setItemNumber(line.get("itemNumber").toString());
				soLine.setOrderQuantity(line.get("orderQuantity").toString());
				soLine.setItemUom(line.get("itemUom").toString());
				soLine.setRequestDate(line.get("requestDate").toString());
				soLine.setCustPoNumber(line.get("custPoNumber").toString());
				soLine.setBrandTerminal(line.get("brandTerminal").toString());
				soLine.setCustomerTerminal(line.get("customerTerminal").toString());
				soLine.setEnProductName(line.get("enProductName").toString());
				soLine.setCalculatePrice(line.get("calculatePrice").toString());
				this.baseServiceSL.save(soLine);
			}
			
			//存佣金
			JSONArray commissionArray = JSONArray.fromObject(commissionData);
			for(int i=0;i<commissionArray.size();i++){
				JSONObject line = commissionArray.getJSONObject(i); // 遍历 jsonarray 数组，把每一个对象转成 json 对象
				SoCommissions soCommissions = new SoCommissions();
				soCommissions.setCommissionsId(Tools.getUUID());
				soCommissions.setOrgName(line.get("orgName").toString());
				soCommissions.setLineNum(line.get("lineNum").toString());
				soCommissions.setSourceDocType(line.get("sourceDocType").toString());
				soCommissions.setCommissionLineNum(line.get("commissionLineNum").toString());
				soCommissions.setCommissionTypeName(line.get("commissionTypeName").toString());
				soCommissions.setCommissionRate(line.get("commissionRate").toString());
				soCommissions.setCommissionPrice(line.get("commissionPrice").toString());
				soCommissions.setVendorName(line.get("vendorName").toString());
				this.baseServiceSC.save(soCommissions);
			}
			result = "{'headerId':'"+soHeader.getHeaderId()+"','orderNumber':'"+orderNumber+"'}";
	    }catch(Exception e){
	    	result = "保存失败";
	    	e.printStackTrace();
	    }
		result = "{'headerId':'123','orderNumber':'456'}";
		return result;
	}
	
	
	//保存销售订单头
		@RequestMapping(value="/saveEmptySoHeader.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
		public @ResponseBody String saveEmptySoHeader(@RequestBody SoHeader soHeader,String lineId,String commissionId,String projectId) {
		   String orderNumber = soHeader.getOrderNumber();
			if(orderNumber == null || "".equals(orderNumber)) {//订单号=业务实体+订单类型首字母+年份+6位数字
				//取数据库最大的单号，加一赋给新的采购单
				//业务实体
			    String orgName = soHeader.getOrgName().substring("OU_".length());
			    //订单类型首字母
			    String firstWord = "S";
			    //年份
				Calendar c = Calendar.getInstance();//可以对每个时间域单独修改
				int yearVal = c.get(Calendar.YEAR); 
				String year = String.valueOf(yearVal);
				year = year.substring(year.length()-2,year.length());
				
				String orderType = orgName+firstWord+year;
				orderNumber = Tools.getSerialNumber(orderType);
				soHeader.setOrderNumber(orderNumber);
			}
			String headerId = Tools.getUUID();
			soHeader.setHeaderId(headerId);
			//将Id插入header
			soHeader.setProjectId(projectId);
			SimpleDateFormat df1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			soHeader.setPo_Status(1);
			soHeader.setJo_Status(1);
			soHeader.setSo_Status(1);
			soHeader.setOrderDate(df1.format(new Date()));
			this.baseService.save(soHeader);
			
			//插人line
			String []lines = lineId.split(",");
			for(int i=0;i<lines.length;i++){
				SoLine soLine = this.baseServiceSL.findById(SoLine.class, lines[i]);
				soLine.setHeaderId(headerId);
				this.baseServiceSL.update(soLine);
			}
			
			//插人commission
			String []commissions = commissionId.split(",");
			for(int i=0;i<commissions.length;i++){
				SoCommissions Commissions = this.baseServiceSC.findById(SoCommissions.class, commissions[i]);
				Commissions.setHeaderId(headerId);
				this.baseServiceSC.update(Commissions);
			}
			
			return  "保存成功!"; 
		}


	//保存销售订单行
	@RequestMapping(value="/saveSoLine.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String saveSoLine(@RequestBody SoLine soLine) {
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
		soLine.setLineId(uuid);
		this.baseServiceSL.save(soLine);
		return  uuid; 
	}

	//保存项目行
	@RequestMapping(value="/saveProject.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String saveProject( SoProject soProject,String WgFlag) {
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
		soProject.setProjectId(uuid);
		if(WgFlag.equals("invWgFlag")){
			soProject.setInvWgFlag("Y");
			soProject.setInvDjFlag("N");
			soProject.setInvT2sFlag("N");
			soProject.setInvWmFlag("N");
		}else if(WgFlag.equals("invDjFlag")){
			soProject.setInvWgFlag("N");
			soProject.setInvDjFlag("Y");
			soProject.setInvT2sFlag("N");
			soProject.setInvWmFlag("N");
		}else if(WgFlag.equals("invT2sFlag")){
			soProject.setInvWgFlag("N");
			soProject.setInvDjFlag("N");
			soProject.setInvT2sFlag("Y");
			soProject.setInvWmFlag("N");
		}else if(WgFlag.equals("InvWmFlag")){
			soProject.setInvWgFlag("N");
			soProject.setInvDjFlag("N");
			soProject.setInvT2sFlag("N");
			soProject.setInvWmFlag("Y");
		}

		this.baseServiceSP.save(soProject);
		return  uuid;  
	}
		
	//初始保存销售订单行
	@RequestMapping(value="/saveInitSoLine.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String saveInitSoLine(@RequestBody SoLine soLine,String headerId) {
		soLine.setHeaderId(headerId);
		this.baseServiceSL.save(soLine);
		return  ""; 
	}

	//初始保存销售订单行
	@RequestMapping(value="/saveInitSoCom.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String saveInitSoCom(@RequestBody SoCommissions soCom,String headerId) {
		soCom.setHeaderId(headerId);
		this.baseServiceSC.save(soCom);
		return  ""; 
	}

	//更新销售订单行
	@RequestMapping(value="/updateSoLine.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String updateSoLine(@RequestBody SoLine soLine,String soLineId) {
		System.out.println(soLineId);
		SoLine newSoLine = this.baseServiceSL.findById(SoLine.class, soLineId);
		boolean flag = false;
		if(newSoLine == null){
			flag = true;
			newSoLine = new SoLine();
		}
		System.out.println(newSoLine.getLineId());
		newSoLine.setLineId(soLineId);
		newSoLine.setBrandTerminal(soLine.getBrandTerminal());
		newSoLine.setCalculatePrice(soLine.getCalculatePrice());
		newSoLine.setCustomerTerminal(soLine.getCustomerTerminal());
		newSoLine.setCustPoNumber(soLine.getCustPoNumber());
		newSoLine.setItemNumber(soLine.getItemNumber());
		newSoLine.setItemUom(soLine.getItemUom());
		newSoLine.setHeaderId(soLine.getHeaderId());
		newSoLine.setEnProductName(soLine.getEnProductName());
		newSoLine.setRequestDate(soLine.getRequestDate());
		newSoLine.setOrderNumber(soLine.getOrderNumber());
		if(flag){

			this.baseServiceSL.save(newSoLine);
		}else{

			this.baseServiceSL.update(newSoLine);
		}
		return  "更新成功！"; 
	}


	//保存佣金行
	@RequestMapping(value="/saveSoCommission.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String saveSoCommission( SoCommissions soCommissions,String headerId) {
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
		soCommissions.setCommissionsId(uuid);
		soCommissions.setHeaderId(headerId);
		this.baseServiceSC.save(soCommissions);
		return  uuid;
	}



	//更新项目
	@RequestMapping(value="/updateSoProject.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String updateSoProject( SoProject soProject,String projectId,String WgFlag) {
	
		SoProject project =this.baseServiceSP.findById(SoProject.class, projectId);
		if(WgFlag.equals("invWgFlag")){
			project.setInvWgFlag("Y");
			project.setInvDjFlag("N");
			project.setInvT2sFlag("N");
			project.setInvWmFlag("N");
		}else if(WgFlag.equals("invDjFlag")){
			project.setInvWgFlag("N");
			project.setInvDjFlag("Y");
			project.setInvT2sFlag("N");
			project.setInvWmFlag("N");
		}else if(WgFlag.equals("invT2sFlag")){
			project.setInvWgFlag("N");
			project.setInvDjFlag("N");
			project.setInvT2sFlag("Y");
			project.setInvWmFlag("N");
		}else if(WgFlag.equals("InvWmFlag")){
			project.setInvWgFlag("N");
			project.setInvDjFlag("N");
			project.setInvT2sFlag("N");
			project.setInvWmFlag("Y");
		}
		
		project.setProjectNumber(soProject.getProjectNumber());
		project.setProjectOrgName(soProject.getProjectOrgName());
		project.setProjectName(soProject.getProjectName());
		project.setProjectType(soProject.getProjectType());
		project.setBackupCustomer(soProject.getBackupCustomer());
		project.setDepartmentName(soProject.getDepartmentName());
		this.baseServiceSP.update(project);
		
		return  "更新成功！"; 
	}

	//更新佣金行
		@RequestMapping(value="/updateSoCommission.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
		public @ResponseBody String updateSoCommission( SoCommissions soCommission,String headerId,String soCommissionsId) {
		
			SoCommissions soCommissions =this.baseServiceSC.findById(SoCommissions.class, soCommissionsId);
			
			    soCommissions.setHeaderId(headerId);	
				soCommissions.setCommissionLineNum(soCommission.getCommissionLineNum());
				soCommissions.setOrgName(soCommission.getOrgName());
				soCommissions.setSourceDocType(soCommission.getSourceDocType());
				soCommissions.setCommissionRate(soCommission.getCommissionRate());
				soCommissions.setCommissionTypeName(soCommission.getCommissionTypeName());
				soCommissions.setVendorName(soCommission.getVendorName());
				soCommissions.setCommissionPrice(soCommission.getCommissionPrice());
				soCommissions.setLineNum(soCommission.getLineNum());
				//soCommissions.setOrderNumber(soCommission.getOrderNumber());
				this.baseServiceSC.update(soCommissions);
			
			return  "更新成功！"; 
		}
	


	@RequestMapping(value="/sendSalesOrderByHeaderId.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String sendSalesOrderByHeaderId(String headerId,String compJosnList) {
		//判断是否入库
		SoHeader soHeader = this.baseService.findById(SoHeader.class,headerId);
		if(soHeader==null){
			return "库里无该条销售订单数据！";
		}
		String tips = sendProjectById(soHeader.getProjectId());
		JSONObject jsonObject = JSONObject.fromObject(tips);
		String value = jsonObject.getString("XRESPONSEDATA");
		JSONObject jsonObject1 = JSONObject.fromObject(value);
		String value1 = jsonObject1.getString("value");
		//获取两字符串间的字符
		String tip = Tools.getSubUtilSimple(value1,"<IMPORT_STATUS>(.*?)</IMPORT_STATUS>");
		System.out.println(tip);
		if(!tip.equals("S")){
			return "项目信息上传失败:"+value;
		}else{
			System.out.println("项目信息上传成功！");
		}
		
		
		//销售订单上传
		SoOrder soOrder = salesOrderService.getSoOrderByHeaderId(headerId);
		P_REQUEST_DATA p_REQUEST_DATA = new P_REQUEST_DATA();
		ERP_SO_PACKAGE eRP_SO_PACKAGE = new ERP_SO_PACKAGE();
		SoOrder g_OE_ORDER_INFO = new SoOrder();
		SoHeader solesHeader = soOrder.getSoHeader();
		List<SoLine> solesLines = soOrder.getSoLineList();
		List<SoCommissions> solesCommissions = soOrder.getSoCommissionsList();
		solesHeader.setHeaderId(null);
		solesHeader.setSo_Status(null);
		solesHeader.setPo_Status(null);
		solesHeader.setJo_Status(null);
		for(int i=0;i<solesLines.size();i++) {
			solesLines.get(i).setEvaluationOrderNumber(null);
			solesLines.get(i).setProductName(null);
			solesLines.get(i).setMaterialDes(null);
			solesLines.get(i).setSpecification(null);
			solesLines.get(i).setUnitPrice(null);
			solesLines.get(i).setRemark(null);
			solesLines.get(i).setEvaluationLineId(null);
			solesLines.get(i).setHeaderId(null);
			solesLines.get(i).setProjectNumber(null);
			solesLines.get(i).setProductSKU(null);
			solesLines.get(i).setCurrencyCode(null);
			solesLines.get(i).setOrderNumber(null);
			solesLines.get(i).setSupplier(null);
			solesLines.get(i).setOrgCode(null);
			solesLines.get(i).setDeliveryDate(null);
		}
		for(int i=0;i<solesCommissions.size();i++) {
			solesCommissions.get(i).setHeaderId(null);
		}
		g_OE_ORDER_INFO.setSoHeader(soOrder.getSoHeader());
		g_OE_ORDER_INFO.setSoLineList(soOrder.getSoLineList());
		g_OE_ORDER_INFO.setSoCommissionsList(soOrder.getSoCommissionsList());
		eRP_SO_PACKAGE.setSoOrder(g_OE_ORDER_INFO);
		p_REQUEST_DATA.setpARAMETER(eRP_SO_PACKAGE);
		OutputParameters op = RequestERP.Request("OE_ORDER_IMPORT", p_REQUEST_DATA);
		JSONObject jsonArr = JSONObject.fromObject(op);
		
		return jsonArr.toString();
	}
	
	//project
	public  String sendProjectById(String id) {
		id="2018";
		SoProject soProject = baseServiceSP.findById(SoProject.class,id);
		soProject.setImportId("1");
		soProject.setSourceCode("OA_PROJECT");
		soProject.setSourceHeaderId("1");
		soProject.setSourceLineId("1");
		soProject.setProjectId(null);
		P_REQUEST_DATA p_REQUEST_DATA = new P_REQUEST_DATA();
		ERP_PROJECT_PACKAGE eRP_PROJECT_PACKAGE = new ERP_PROJECT_PACKAGE();
		G_PROJECT_INFO g_PROJECT_INFO = new G_PROJECT_INFO();
		
		
		g_PROJECT_INFO.setSoProject(soProject);
		eRP_PROJECT_PACKAGE.setG_PROJECT_INFO(g_PROJECT_INFO);
		p_REQUEST_DATA.setpARAMETER(eRP_PROJECT_PACKAGE);
		OutputParameters op = RequestERP.Request("JOB_IMPORT", p_REQUEST_DATA);
		JSONObject jsonArr = JSONObject.fromObject(op);
		return jsonArr.toString();
		
	}
	

}
