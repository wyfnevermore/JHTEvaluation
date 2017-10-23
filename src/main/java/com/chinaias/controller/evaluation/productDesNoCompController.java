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
import com.chinaias.service.IBaseService;
import com.chinaias.service.IEvalDetailService;

@Controller
@Scope("prototype") 
public class productDesNoCompController {
	@Resource
	private IBaseService<EvalDetail> baseService;
	@Resource
	private IEvalDetailService evalDetailService;
	
	@RequestMapping("/productDesNoComp.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("productDesNoComp");
		return mav;
	}
	
	
	@RequestMapping(value="/evalDetailUpdate4NoComp.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")
	@ResponseBody
	public String evalDetailUpdate4NoComp(EvalDetail evalDetail) {
		String result = "{'flag':false,'msg':''}";
		try{
			EvalDetail evalDetailInit = new EvalDetail();
			evalDetailInit = evalDetailService.findById(evalDetail.getId());
			evalDetailInit.setWorkDesc(evalDetail.getWorkDesc());
			evalDetailInit.setPackageDesc(evalDetail.getPackageDesc());
			evalDetailInit.setEvalRemark(evalDetail.getEvalRemark());
			evalDetailService.updateEvalDetail(evalDetailInit);
			result = "{'flag':true,'msg':''}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;        	    	
	}

	
	
	
}
