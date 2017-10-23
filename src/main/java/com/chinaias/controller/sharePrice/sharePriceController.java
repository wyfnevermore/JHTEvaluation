package com.chinaias.controller.sharePrice;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chinaias.entity.EvalHistory;
import com.chinaias.entity.EvalResult;
import com.chinaias.entity.Page;
import com.chinaias.entity.QoHeader;
import com.chinaias.entity.QoLine;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IQoLineService;

@Controller
@Scope("prototype") 
public class sharePriceController {

	@RequestMapping("/newSharePrice.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("newSharePrice");
		return mav;
	}

	@Resource
	private IBaseService<QoHeader> baseService;
	@Resource
	private IBaseService<QoLine> baseService1;
	@Resource
	private IBaseService<EvalHistory> baseService3;
	@Resource
	private IBaseService<EvalResult> baseService4;
	@Resource
	private IQoLineService qoLineService;

	public static String newHeaderId = "";
	//保存行信息
	@RequestMapping(value="/saveQoLine.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  

	public @ResponseBody String saveQoLine(@RequestBody String qoLine) {
		List<QoLine> list = new ArrayList<QoLine>();  
		list = com.alibaba.fastjson.JSONObject.parseArray(qoLine, QoLine.class);

		for(int i=0;i<list.size();i++){
			String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
			list.get(i).setLineId(uuid);
			System.out.println(newHeaderId);
			list.get(i).setHeaderId(newHeaderId);
			this.qoLineService.setLegalEntityAndOther(list.get(i));
			this.baseService1.save(list.get(i));
		}
		return "保存成功！";
	}

	//保存头信息
	@RequestMapping(value="/saveQoHeader.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  

	public @ResponseBody String  saveQoHeader( @RequestBody QoHeader qoHeader) {
		//保存行信息
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
		qoHeader.setHeaderId(uuid);
		//生成的6位随机数作为报价单号
		int qoutationNumber= (int)((Math.random()*9+1)*100000);
		qoHeader.setQoutationNumber(String.valueOf(qoutationNumber));
		newHeaderId = uuid;
		this.baseService.save(qoHeader);
		return "保存成功";
	}

	//查询
	@RequestMapping(value="/queryEvalResult.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody Page queryEvalResult(Integer pageSize, Integer pageNumber,HttpServletRequest request,
            HttpServletResponse response) {
		Page page=new Page();
		page.setCurpage(pageNumber);
		page.setPagesize(pageSize);
		page = this.baseService4.findOrderByTime(EvalResult.class,page);
		return  page; 
	}








}
