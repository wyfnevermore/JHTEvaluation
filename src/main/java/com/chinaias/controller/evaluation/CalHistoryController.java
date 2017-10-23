package com.chinaias.controller.evaluation;

import java.sql.Timestamp;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chinaias.entity.EvalHistory;
import com.chinaias.entity.Page;
import com.chinaias.entity.pc.PcResourceInfo;
import com.chinaias.service.IBaseService;
import com.chinaias.util.DateJsonValueProcessor;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;


@Controller
@Scope("prototype") 
public class CalHistoryController {

	@RequestMapping("/calHistory.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("calHistory");
		return mav;
	}
	
	@Resource
	private IBaseService<EvalHistory> baseService;
	
	@RequestMapping(value="/getEvalHistoryByPram.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String getEvalHistoryByPram(Integer pageSize, Integer pageNumber,HttpServletRequest request,
            HttpServletResponse response) {
		Page page=new Page();
		page.setCurpage(pageNumber);
		page.setPagesize(pageSize);
		page = this.baseService.findOrderByTime(EvalHistory.class,page);
		JsonConfig config = new JsonConfig();  
		config.registerJsonValueProcessor(Timestamp.class, new DateJsonValueProcessor("yyyy-MM-dd HH:mm:ss"));
		String json ="{\"total\":0,\"rows\":[]}";
		try{
			JSONObject jobj = new JSONObject();
			jobj.accumulate("total", page.getTotal());
			jobj.accumulate("rows", JSONArray.fromObject(page.getRows(), config));
			json = jobj.toString();
		}
		catch(Exception e){
			e.printStackTrace(); 
			return json;
		}
		return json;
	}
	
}