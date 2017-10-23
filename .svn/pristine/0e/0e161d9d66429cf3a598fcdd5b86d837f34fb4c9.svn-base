package com.chinaias.controller.evaluation;

import java.util.List;

import javax.annotation.Resource;

import org.aspectj.weaver.loadtime.Agent;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chinaias.entity.EvalDetail;
import com.chinaias.entity.OtherCost;
import com.chinaias.entity.PrePaid;
import com.chinaias.entity.AgentCost;
import com.chinaias.entity.Carton;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IEvalDetailService;
import com.chinaias.service.IOtherCostService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@Scope("prototype") 
public class OtherCostController {
	@Resource
	private IBaseService<EvalDetail> baseService;
	@Resource
	private IEvalDetailService evalDetailService;
	@Resource
	private IOtherCostService otherCostService;
	
	@RequestMapping("/otherCost.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("otherCost");
		return mav;
	}
	
	@RequestMapping(value="/otherCostSave.do",method=RequestMethod.POST)
	@ResponseBody
	public String otherCostSave(@RequestBody List<OtherCost> otherCostList,String evalDetailID,String resultOtherJson) {
		String result = "{'flag':false,'msg':''}";
		OtherCost otherCost = new OtherCost();
		try{
			//存otherCost中otherCostList
			String otherlistId = this.otherCostService.save(otherCostList.get(0));
			for(int i=1;i<otherCostList.size();i++){
				otherCost = otherCostList.get(i);
				otherCost.setListID(otherlistId);
				this.otherCostService.save(otherCost);
			}
				//存otherListID进明细表
				EvalDetail evalDetail =new EvalDetail();
				evalDetail = this.baseService.findById(EvalDetail.class,evalDetailID);
				evalDetail.setOtherCostID(otherlistId);
				evalDetail.setResultOtherJson(Float.parseFloat(resultOtherJson));
				this.baseService.update(evalDetail);
				result = "{'flag':true,'msg':''}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;       	    	
	}
	
	@RequestMapping(value="/evalDeUpdate4Other.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")
	@ResponseBody
	public String evalDeUpdate4Other(EvalDetail evalDetail) {
		String result = "{'flag':false,'msg':''}";
		try{
			EvalDetail evalDetailInit = new EvalDetail();
			evalDetailInit = evalDetailService.findById(evalDetail.getId());
			evalDetailInit.setOtherCostID(evalDetail.getOtherCostID());
			evalDetailService.updateEvalDetail(evalDetailInit);
			result = "{'flag':true,'msg':''}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;        	    	
	}
	
	@RequestMapping(value="/prepaidCostSave.do",method=RequestMethod.POST)
	@ResponseBody
	public String prepaidCostSave(@RequestBody List<PrePaid> prepaidCostList,String evalDetailID,String resultPrepaidJson) {
		String result = "{'flag':false,'msg':''}";
		PrePaid prepaid = new PrePaid();
		try{
			//存prepaid中PrepaidList
			String prepaidlistId = this.otherCostService.savePrepaid(prepaidCostList.get(0));
			for(int i=1;i<prepaidCostList.size();i++){
				prepaid = prepaidCostList.get(i);
				prepaid.setListID(prepaidlistId);
				this.otherCostService.savePrepaid(prepaid);
			}
				//存prepaidlistId进明细表
				EvalDetail evalDetail =new EvalDetail();
				evalDetail = this.baseService.findById(EvalDetail.class,evalDetailID);
				evalDetail.setPrepaidListID(prepaidlistId);
				evalDetail.setResultPrepaidJson(Float.parseFloat(resultPrepaidJson));
				this.baseService.update(evalDetail);
				result = "{'flag':true,'msg':''}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;       	    	
	}
	
	@RequestMapping(value="/agentCostSave.do",method=RequestMethod.POST)
	@ResponseBody
	public String agentCostSave(String evalDetailID,String resultAgentJson) {
		String result = "{'flag':false,'msg':''}";
		try{
			resultAgentJson = new String(resultAgentJson.getBytes("ISO-8859-1"),"UTF-8");
			//存agentJson进明细表
			EvalDetail evalDetail =new EvalDetail();
			evalDetail = this.baseService.findById(EvalDetail.class,evalDetailID);
			evalDetail.setResultAgentJson(resultAgentJson);
			this.baseService.update(evalDetail);
			result = "{'flag':true,'msg':''}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;       	    	
	}
	
	@RequestMapping(value="/getOtherCostListByListid.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getOtherCostListByListid(String listID) {
		String result = "{'flag':false,'msg':''}";
		try{
			List<OtherCost> otherCostList = this.otherCostService.getOtherCostListByListid(listID);
			JSONObject jobj = new JSONObject();
			jobj.accumulate("flag", true);
			jobj.accumulate("msg", JSONArray.fromObject(otherCostList));
			result = jobj.toString();
		}catch (Exception e) {
			e.printStackTrace();
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
		}
		return result;
	}

}
