package com.chinaias.controller.salesOrder;

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

import com.chinaias.entity.Page;
import com.chinaias.entity.so.SoHeader;
import com.chinaias.entity.so.SoLine;
import com.chinaias.service.IBaseService;

import net.sf.json.JSONArray;

@Controller
@Scope("prototype") 
public class SalesHistoryContrller {

	@Resource
	private IBaseService<SoHeader> baseService;
	@Resource
	private IBaseService<SoLine> baseServiceSoLine;
	
	@RequestMapping("/salesHistory.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("salesHistory");
		return mav;
	}
	
	
	@RequestMapping(value="/querySalesHistory.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody Page querySalesHistory(Integer pageSize, Integer pageNumber,HttpServletRequest request,
            HttpServletResponse response) {
		Page page=new Page();
		page.setCurpage(pageNumber);
		page.setPagesize(pageSize);
		page = this.baseService.find(SoHeader.class,page);
		return  page; 
	}
	
	@RequestMapping(value="/getSoLineByHeaderId.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String getSoLineByHeaderId(SoHeader soHeader) {
		List<SoLine> soLineList = baseServiceSoLine.findAll("from SoLine where headerId='"+soHeader.getHeaderId()+"'");
		JSONArray jsonArr = JSONArray.fromObject(soLineList);
		return jsonArr.toString();
	}


}
