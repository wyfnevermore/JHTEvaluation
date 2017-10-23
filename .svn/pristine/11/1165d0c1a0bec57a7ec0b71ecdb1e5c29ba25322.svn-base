package com.chinaias.controller.evaluation;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chinaias.entity.EvalDetail;
import com.chinaias.entity.GrossProfit;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IEvalDetailService;
import com.chinaias.service.IGrossProfitService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@Scope("prototype") 
public class GrossProfitController {
	@Resource
	private IBaseService<EvalDetail> baseService;
	@Resource
	private IGrossProfitService grossProfitService;
	@Resource
	private IEvalDetailService evalDetailService;
	
	@RequestMapping("/grossProfit.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("grossProfit");
		return mav;
	}
	
	@RequestMapping(value="/grossProfitSave.do",method=RequestMethod.POST)
	@ResponseBody
	public String otherCostSave(@RequestBody List<GrossProfit> GrossProfitList,String evalDetailID) {
		String result = "{'flag':false,'msg':''}";
		GrossProfit grossProfit = new GrossProfit();
		try{
			//存otherCost中otherCostList
			String grossProfitlListId = this.grossProfitService.saveReturnID(GrossProfitList.get(0));
			for(int i=1;i<GrossProfitList.size();i++){
				grossProfit = GrossProfitList.get(i);
				grossProfit.setListID(grossProfitlListId);
				this.grossProfitService.addGrossProfit(grossProfit);
			}
				//存otherListID进明细表
				EvalDetail evalDetail =new EvalDetail();
				evalDetail = this.baseService.findById(EvalDetail.class,evalDetailID);
				evalDetail.setGrossProfitListID(grossProfitlListId);
				this.baseService.update(evalDetail);
				result = "{'flag':true,'msg':''}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;       	    	
	}
	
	@RequestMapping(value="/grossProfitSaveForAgent.do",method=RequestMethod.POST)
	@ResponseBody
	public String grossProfitSaveForAgent(String evalDetailID,String grossProfitData) {
		String result = "{'flag':false,'msg':''}";
		try{
			grossProfitData = new String(grossProfitData.getBytes("ISO-8859-1"),"UTF-8");
				//存otherListID进明细表
			EvalDetail evalDetail =new EvalDetail();
			evalDetail = this.baseService.findById(EvalDetail.class,evalDetailID);
			evalDetail.setResultAgentGrossJson(grossProfitData);
			this.baseService.update(evalDetail);
			result = "{'flag':true,'msg':''}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;       	    	
	}
	
	@RequestMapping(value="/getGrossListByListid.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getGrossListByListid(String listID) {
		String result = "{'flag':false,'msg':''}";
		try{
			List<GrossProfit> grossProfitList = this.grossProfitService.getGrossListByListid(listID);
			JSONObject jobj = new JSONObject();
			jobj.accumulate("flag", true);
			jobj.accumulate("msg", JSONArray.fromObject(grossProfitList));
			result = jobj.toString();
		}catch (Exception e) {
			e.printStackTrace();
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
		}
		return result;
	}
	
	
}
