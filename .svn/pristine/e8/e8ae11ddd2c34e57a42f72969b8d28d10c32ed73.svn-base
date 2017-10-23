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
import com.chinaias.entity.Transport;
import com.chinaias.entity.Commission;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IEvalDetailService;
import com.chinaias.service.IComissionService;

@Controller
@Scope("prototype") 
public class HireCostController {
	@Resource
	private IBaseService<EvalDetail> baseService;
	@Resource
	private IEvalDetailService evalDetailService;
	@Resource
	private IComissionService hireCostService;
	
	@RequestMapping("/hireCost.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("hireCost");
		return mav;
	}
	
	@RequestMapping(value="/hireCostSave.do",method=RequestMethod.POST)
	public @ResponseBody String hireCostSave(@RequestBody List<Commission> hireCostList,String evalDetailID,String resultHireJson) {
		String result = "{'flag':false,'msg':''}";
		Commission hireCost = new Commission();
		try {
			//存hireCost中hireCostList
			String hireCostListID = this.hireCostService.saveReturnID(hireCostList.get(0));
			for(int i=1;i<hireCostList.size();i++){
				hireCost = hireCostList.get(i);
				hireCost.setListID(hireCostListID);
			    this.hireCostService.addCommission(hireCost); 
			}
			
			//存hireCostListID进明细表
			EvalDetail evalDetail =new EvalDetail();
			evalDetail = this.baseService.findById(EvalDetail.class,evalDetailID);
			evalDetail.setCommissionListID(hireCostListID);
			evalDetail.setResultHireJson(resultHireJson);
			this.baseService.update(evalDetail);
			result = "{'flag':true,'msg':''}";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
		}
		return result;        	    	
	}

}
