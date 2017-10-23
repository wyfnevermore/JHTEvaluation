package com.chinaias.controller.JobOrder;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chinaias.entity.erp.MDS.ERP_MDS_PACKAGE;
import com.chinaias.entity.erp.MDS.G_MDS_ITEM_INFO;
import com.chinaias.entity.erp.MDS.MDS_ITEM;
import com.chinaias.entity.jo.JoHeader;
import com.chinaias.entity.jo.JoLine;
import com.chinaias.entity.jo.JoOrder;
import com.chinaias.entity.po.ERP_PO_PACKAGE;
import com.chinaias.entity.po.G_PO_DISTRIBUTIONS;
import com.chinaias.entity.po.G_PO_HEADERS;
import com.chinaias.entity.po.G_PO_LINES;
import com.chinaias.entity.po.PoDistributions;
import com.chinaias.entity.po.PoHeader;
import com.chinaias.entity.po.PoLine;
import com.chinaias.entity.po.PoOrder;
import com.chinaias.entity.so.ERP_PROJECT_PACKAGE;
import com.chinaias.entity.so.G_PROJECT_INFO;
import com.chinaias.entity.so.SoLine;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IJobOrderService;
import com.chinaias.webservice.erp.OutputParameters;
import com.chinaias.webservice.erp.P_REQUEST_DATA;
import com.chinaias.webservice.erp.RequestERP;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;
@Controller
@Scope("prototype") 
public class JobOrderHistoryController {


	@Resource
	private IBaseService<JoHeader> baseService;
	@Resource
	private IJobOrderService jobOrderService;
	@RequestMapping(value="/getJobOrderHistory.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getJobHeaderListByJobHeader(JoHeader joHeader) {
		System.out.println("from JoHeader where seq="+joHeader.getSeq());
		List<JoHeader> joHeaderList = baseService.findAll("from JoHeader where seq="+joHeader.getSeq());
		JSONArray jsonArr = JSONArray.fromObject(joHeaderList);
		//JSONObject jsonObj = JSONObject.fromObject(joHeaderList);
		return jsonArr.toString();
	}
	
	@RequestMapping(value="/getJobOrderByHeaderId.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getJobOrderByHeaderId(JoHeader joHeader) {
		JoOrder joOrder = jobOrderService.getJobOrderByHeaderId(joHeader.getHeaderId());
		//JSONArray jsonArr = JSONArray.fromObject(joHeaderList);
		JSONObject jsonObj = JSONObject.fromObject(joOrder);
		return jsonObj.toString();
	}
	
	@RequestMapping(value="/saveJoOrder.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String saveJoOrder(String json) {
		JSONObject jsonObject = JSONObject.fromObject(json);
		String[] dateFormats = new String[] {"yyyy/MM/dd"};  
		JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(dateFormats));  
		JoOrder joOrder = (JoOrder) JSONObject.toBean(jsonObject, JoOrder.class);
		JSONArray jsonArr = jsonObject.getJSONArray("joLineList");
		
		Object[] ol = jsonArr.toArray();
		List<JoLine> joLineList = new ArrayList<JoLine>();
		for(Object o: ol){
			JSONObject obj = JSONObject.fromObject(o);
			JoLine joLine = (JoLine) JSONObject.toBean(obj, JoLine.class);
			joLineList.add(joLine);
		}
		joOrder.setJoLineList(joLineList);
		
		jobOrderService.saveJoOrder(joOrder);
		
		return jsonObject.toString();
	}
	
	@RequestMapping(value="/sendMDSByJSONArray.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String sendMDSByJoLineId(String json) {
		
		JSONArray jsonArray = JSONArray.fromObject(json);
		Object[] ol = jsonArray.toArray();
		List<MDS_ITEM> mdsList = new ArrayList<MDS_ITEM>();
		for(Object o: ol){
			JSONObject obj = JSONObject.fromObject(o);
			String[] dateFormats = new String[] {"yyyy/MM/dd"};  
			JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(dateFormats));  
			MDS_ITEM mDS_ITEM = (MDS_ITEM) JSONObject.toBean(obj, MDS_ITEM.class);
			mdsList.add(mDS_ITEM);
		}
		G_MDS_ITEM_INFO g_MDS_ITEM_INFO = new G_MDS_ITEM_INFO();
		g_MDS_ITEM_INFO.setmDS_ITEM(mdsList);
		ERP_MDS_PACKAGE eRP_MDS_PACKAGE = new ERP_MDS_PACKAGE();
		eRP_MDS_PACKAGE.setG_MDS_ITEM_INFO(g_MDS_ITEM_INFO);
		P_REQUEST_DATA p_REQUEST_DATA = new P_REQUEST_DATA();
		
		p_REQUEST_DATA.setpARAMETER(eRP_MDS_PACKAGE);
		OutputParameters op = RequestERP.Request("MDS_IMPORT", p_REQUEST_DATA);
		JSONObject jsonArr = JSONObject.fromObject(op);
		return jsonArr.toString();
	}
	
	
	
	
}
