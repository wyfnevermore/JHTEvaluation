package com.chinaias.controller.prossingCompent;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chinaias.entity.jo.JoHeader;
import com.chinaias.entity.jo.JoOrder;
import com.chinaias.entity.pc.ERP_JOB_PACKAGE;
import com.chinaias.entity.pc.PcCompInfo;
import com.chinaias.entity.pc.PcJobInfo;
import com.chinaias.entity.pc.PcOrder;
import com.chinaias.entity.pc.PcResourceInfo;
import com.chinaias.entity.so.SoLine;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IProcessingContractService;
import com.chinaias.service.ISalesOrderService;
import com.chinaias.util.Tools;
import com.chinaias.webservice.erp.OutputParameters;
import com.chinaias.webservice.erp.P_REQUEST_DATA;
import com.chinaias.webservice.erp.RequestERP;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.JSONUtils;
@Controller
@Scope("prototype") 
public class CreateProssingCompent {
		@Resource
		private IBaseService<SoLine> baseService;
		@Resource
		private IBaseService<JoHeader> baseServiceJoHeader;
		@Resource
		private IBaseService<PcCompInfo> baseServicePcCompInfo;
		@Resource
		private ISalesOrderService salesOrderService;
		@Resource
		private IProcessingContractService processingContractService;
		
		@Resource
		private IBaseService<PcJobInfo> pcJobInfoService;
		@Resource
		private IBaseService<PcCompInfo> pcCompInfoService;
		@Resource
		private IBaseService<PcResourceInfo> pcResourceInfoService;
		@RequestMapping(value="/getSOLine.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
		public @ResponseBody String getSOLine(SoLine soLine) {
			String sql = "from SoLine";
			if(soLine.getHeaderId()!=null){
				sql = "from SoLine where headerId='"+soLine.getHeaderId()+"'";
				
			}
			List<SoLine> soLineList = baseService.findAll(sql);
			JSONArray jsonArr = JSONArray.fromObject(soLineList);
			return jsonArr.toString();
		}
		
		@RequestMapping(value="/getJobOrdersByEvalationNumber.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
		public @ResponseBody String getJobOrders(SoLine soLine) {
			List<JoOrder> joOrderList = salesOrderService.generateJoOrders(soLine.getEvaluationOrderNumber(), soLine.getHeaderId(), soLine.getLineId());
			
			JSONArray jsonArr = JSONArray.fromObject(joOrderList);
			return jsonArr.toString();
		}
		

		
		@RequestMapping(value="/getContractHistory.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
		public @ResponseBody String getContractHistory(SoLine soLine) {
			List<JoOrder> joOrderList = salesOrderService.generateJoOrders(soLine.getEvaluationOrderNumber(), soLine.getHeaderId(), soLine.getLineId());
	
			JSONArray jsonArr = JSONArray.fromObject(joOrderList);
			return jsonArr.toString();
		}
		
		

		@RequestMapping(value="/getContractLineHistory.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
		public @ResponseBody String getContractLineHistory(JoHeader joHeader) {
			System.out.println("from JoHeader where seq="+joHeader.getSeq());
			List<JoHeader> joHeaderList = baseServiceJoHeader.findAll("from JoHeader");
			JSONArray jsonArr = JSONArray.fromObject(joHeaderList);
			return jsonArr.toString();
		}
		
		
		
		@SuppressWarnings("unchecked")
		@RequestMapping(value="/contractInfoSave.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")
		@ResponseBody
		public String contractInfoSave(String josnStr) {
			String result = "{'flag':true,'msg':''}";
			try{
				josnStr = new String(josnStr.getBytes("ISO-8859-1"),"UTF-8");
				String[] dateFormats = new String[] {"yyyy-MM-dd"};
				JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(dateFormats));
				
				//取数据库最大的单号，加一赋给新的采购单
				//业务实体
			    String orgName = "";
			    //订单类型首字母
			    String firstWord = "M";
			    //年份
				Calendar c = Calendar.getInstance();//可以对每个时间域单独修改
				int yearVal = c.get(Calendar.YEAR); 
				String year = String.valueOf(yearVal);
				year = year.substring(year.length()-2,year.length());
				
				String orderType = orgName+firstWord+year;
				String processContractNum = Tools.getSerialNumber(orderType);
				
				JSONArray jsonArray = JSONArray.fromObject(josnStr);
				for(int i=0;i<jsonArray.size();i++){
					JSONObject jsonObject = jsonArray.getJSONObject(i);
					JSONObject headObj = jsonObject.getJSONObject("head");
					JSONArray lineObj = jsonObject.getJSONArray("line");
					JSONArray operationCodeObj = jsonObject.getJSONArray("operationCode");
					PcJobInfo pcJobInfo = (PcJobInfo) JSONObject.toBean(headObj, PcJobInfo.class);
					pcJobInfo.setProcessContractNum(processContractNum);
					List<PcCompInfo> pcCompInfoList = JSONArray.toList(lineObj, new PcCompInfo(), new JsonConfig());
					List<PcResourceInfo> pcResourceInfoList = JSONArray.toList(operationCodeObj, new PcResourceInfo(), new JsonConfig());
					processingContractService.contractInfoSave(pcJobInfo,pcCompInfoList,pcResourceInfoList);
				}
				result = "{'flag':true,'msg':'"+processContractNum+"'}";
			}catch(Exception e){
				result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
				e.printStackTrace();
			}
			return result;        	    	
		}
		
		
		@RequestMapping(value="/uploadContractAfterSave.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")
		@ResponseBody
		public String uploadContractAfterSave(String processContractNum) {
			String result = "{'flag':true,'msg':''}";
			int SCount = 0;
			int ECount = 0;
			String EMessage = "";
			try{
				List<PcJobInfo> jobInfoList = new ArrayList<PcJobInfo>();
				jobInfoList = pcJobInfoService.findAll("from PcJobInfo where processContractNum = '"+processContractNum+"'");
				for(int k=0;k<jobInfoList.size();k++){
					PcJobInfo pcJobInfo =jobInfoList.get(k);
					List<PcCompInfo> pcCompInfoList = pcCompInfoService.findAll("from PcCompInfo where processContractNum = '"+pcJobInfo.getProcessContractNum()+"'");
					List<PcResourceInfo> pcResourceInfoList = pcResourceInfoService.findAll("from PcResourceInfo where processContractNum = '"+pcJobInfo.getProcessContractNum()+"'");
					
					
					pcJobInfo.setImportId("2");
					pcJobInfo.setSourceCode("JOB_IMPORT");
					pcJobInfo.setSourceHeaderId("1");
					pcJobInfo.setSourceLineId("1");
					pcJobInfo.setJobInfoId(null);
					pcJobInfo.setOrganizationId(null);//库存组织去掉
					pcJobInfo.setMaterialFee(null);//材料费去掉
					pcJobInfo.setSingleProductTime(null);//单产品生产工时去掉
					pcJobInfo.setFlowerPattern(null);//花型去掉
					
					
					for(int i=0;i<pcCompInfoList.size();i++){
						pcCompInfoList.get(i).setImportId("2");
						pcCompInfoList.get(i).setSourceCode("JOB_IMPORT");
						pcCompInfoList.get(i).setSourceHeaderId("1");
						pcCompInfoList.get(i).setSourceLineId("1");
						pcCompInfoList.get(i).setProcessContractNum(null);
						pcCompInfoList.get(i).setCompInfoId(null);
						pcCompInfoList.get(i).setMaterialCosts(null);//单产品生产工时去掉
					}
					
					for(int i=0;i<pcResourceInfoList.size();i++){
						pcResourceInfoList.get(i).setImportId("2");
						pcResourceInfoList.get(i).setSourceCode("JOB_IMPORT");
						pcResourceInfoList.get(i).setSourceHeaderId("1");
						pcResourceInfoList.get(i).setSourceLineId("1");
						pcResourceInfoList.get(i).setProcessContractNum(null);
						pcResourceInfoList.get(i).setResourceInfoId(null);
						
					}
					
					
					P_REQUEST_DATA p_REQUEST_DATA = new P_REQUEST_DATA();
					ERP_JOB_PACKAGE eRP_JOB_PACKAGE = new ERP_JOB_PACKAGE();
					PcOrder pcOrder = new PcOrder();
					pcOrder.setPcJobInfo(pcJobInfo);
					pcOrder.setPcCompInfoList(pcCompInfoList);
					pcOrder.setPcResourceInfoList(pcResourceInfoList);
					eRP_JOB_PACKAGE.setPcOrder(pcOrder);
					p_REQUEST_DATA.setpARAMETER(eRP_JOB_PACKAGE);
					OutputParameters op = RequestERP.Request("JOB_IMPORT", p_REQUEST_DATA);
					if(op.getXRETURNCODE().getValue().equals("S")){
						SCount++;
					}else{
						ECount++;
						EMessage+=op.getXRESPONSEDATA().getValue();
					}
				}
				result = "{'flag':true,'msg':'成功"+SCount+"条,失败"+ECount+"条,失败消息："+EMessage+"'}";
			}catch(Exception e){
				result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
				e.printStackTrace();
			}
			return result;        	    	
		}
		
		
		
}