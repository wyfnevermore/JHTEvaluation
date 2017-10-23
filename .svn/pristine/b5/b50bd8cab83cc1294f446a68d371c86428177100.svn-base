package com.chinaias.controller.sharePrice;

import java.util.Calendar;
import java.util.Date;
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
import com.chinaias.entity.Page;
import com.chinaias.entity.QoHeader;
import com.chinaias.service.IBaseService;
import com.chinaias.util.JsonDateValueProcessor;
import com.chinaias.util.Tools;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;

@Controller
@Scope("prototype") 
public class priceHistoryController {

	@RequestMapping("/priceHistory.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("priceHistory");
		return mav;
	}

	@Resource
	private IBaseService<QoHeader> baseService;

	//查询头信息
//	@RequestMapping(value="/queryQoHeader.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
//	public 	@ResponseBody String  queryQoHeader() {
//		String queryString = "from QoHeader";
//		List<QoHeader> list = this.baseService.findAll(queryString);
//		JsonConfig config = new JsonConfig();  
//		JsonDateValueProcessor jsonValueProcessor = new JsonDateValueProcessor();  
//		config.registerJsonValueProcessor(Date.class, jsonValueProcessor);  
//		net.sf.json.JSONArray jsonArray = net.sf.json.JSONArray.fromObject(list,config);
//
//		System.out.println(jsonArray.toString());
//		if(jsonArray.equals("")){
//			return null;
//		}else{
//			return jsonArray.toString();
//		}
	
	@RequestMapping(value="/queryQoHeader.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody Page queryQoHeader(Integer pageSize, Integer pageNumber,HttpServletRequest request,
            HttpServletResponse response) {
		Page page=new Page();
		page.setCurpage(pageNumber);
		page.setPagesize(pageSize);
		page = this.baseService.findOrderByTime(QoHeader.class,page);
		return  page; 
	}


	//复制保存头信息
	@RequestMapping(value="/saveQoHeaderInPr.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String  saveQoHeaderInPr( @RequestBody QoHeader qoHeader) {
		//保存行信息
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
		qoHeader.setHeaderId(uuid);
		//订单号=业务实体+订单类型首字母+年份+6位数字
		String qoutationNumber = qoHeader.getQoutationNumber();
		if(qoutationNumber == null || "".equals(qoutationNumber)) {
			//取数据库最大的单号，加一赋给新的采购单
		    //订单类型首字母
		    String firstWord = "Q";
		    //年份
			Calendar c = Calendar.getInstance();//可以对每个时间域单独修改
			int yearVal = c.get(Calendar.YEAR); 
			String year = String.valueOf(yearVal);
			year = year.substring(year.length()-2,year.length());
			
			String orderType = firstWord+year;
			qoutationNumber = Tools.getSerialNumber(orderType);
			qoHeader.setQoutationNumber(qoutationNumber);
		}
		//newHeaderId = uuid;
		this.baseService.save(qoHeader);
		return "复制成功";
	}

	//更新头信息
		@RequestMapping(value="/updateQoHeaderInPr.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
		public @ResponseBody String  updateQoHeaderInPr(@RequestBody QoHeader qoHeader,String headerId) {
			//保存行信息
			QoHeader qoHeader1 = this.baseService.findById(QoHeader.class,headerId);
			qoHeader1.setCreateTime(new Date());
			qoHeader1.setCreateUserId(qoHeader.getCreateUserId());
			qoHeader1.setCustomId(qoHeader.getCustomId());
			//qoHeader1.setEvaluationNumber(qoHeader.getEvaluationNumber());
			qoHeader1.setInquirer(qoHeader.getInquirer());
			qoHeader1.setQoCurrency(qoHeader.getQoCurrency());
			qoHeader1.setQoStatus(qoHeader.getQoStatus());
			qoHeader1.setQoutationNumber(qoHeader.getQoutationNumber());
			qoHeader1.setQoutationTime(qoHeader.getQoutationTime());
			qoHeader1.setQoVersion(qoHeader.getQoVersion());
			qoHeader.setCreateTime(new Date());
			
			this.baseService.update(qoHeader1);
			return "编辑成功";
		}

	


}
