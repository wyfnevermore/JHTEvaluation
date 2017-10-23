package com.chinaias.controller.salesOrder;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;

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

import com.alibaba.fastjson.JSON;
import com.chinaias.entity.Page;
import com.chinaias.entity.QoHeader;
import com.chinaias.entity.QoLine;
import com.chinaias.entity.so.SoHeader;
import com.chinaias.entity.so.SoLine;
import com.chinaias.entity.so.SoOrder;
import com.chinaias.service.IBaseService;
import com.chinaias.service.ISalesOrderService;

import net.sf.json.JSONArray;

@Controller
@Scope("prototype") 
public class ImportSalesController {

	@RequestMapping("/importSales.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("importSales");
		return mav;
	}

	@Resource
	private IBaseService<QoHeader> baseService;
	@Resource
	private IBaseService<SoHeader> baseServiceSH;
	@Resource
	private IBaseService<SoLine> baseServiceSL;
	@Resource
	private ISalesOrderService baseServiceSoOrder;

	//查询头信�?
	@RequestMapping(value="/importQueryQoHeader.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody Page importQueryQoHeader(Integer pageSize, Integer pageNumber,HttpServletRequest request,
            HttpServletResponse response) {
		Page page=new Page();
		page.setCurpage(pageNumber);
		page.setPagesize(pageSize);
		page = this.baseService.findOrderByTime(QoHeader.class,page);
		return  page; 
	}

	//创建�?售订�?
	@RequestMapping(value="/createSalesOrder.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  
	public @ResponseBody String createSalesOrder(@RequestBody List<QoLine> qoLineList, String deliveryMethod, String provenance,
			String destination, String packageDes ) throws UnsupportedEncodingException {
		deliveryMethod =  new String(deliveryMethod.getBytes("ISO-8859-1"),"UTF-8");
		provenance =  new String(provenance.getBytes("ISO-8859-1"),"UTF-8");
		destination =  new String(destination.getBytes("ISO-8859-1"),"UTF-8");
		packageDes =  new String(packageDes.getBytes("ISO-8859-1"),"UTF-8");
		
		List<SoOrder> soOrderList= this.baseServiceSoOrder.generateSoOrder(qoLineList, deliveryMethod, provenance, destination, packageDes);
		
		String soOrderJson=JSON.toJSONString(soOrderList);
		System.out.println(soOrderJson);
		//soOrderJson = new String(soOrderJson.getBytes("ISO-8859-1"),"UTF-8");
		
		return  soOrderJson; 
	}

	







}
