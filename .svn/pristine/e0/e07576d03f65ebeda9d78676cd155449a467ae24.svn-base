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
import com.chinaias.service.IBaseService;
import com.chinaias.service.ITransportService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@Scope("prototype") 
public class TransCostController {

	@Resource
	private IBaseService<Transport> baseService;
	@Resource
	private ITransportService iTransCostService;
	@Resource
	private IBaseService<EvalDetail> baseService2;

	@RequestMapping("/transportCost.do")
	public ModelAndView transportCost() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("transportCost");
		return mav;
	}
	

	//保存到数据库
		@RequestMapping(value="/transportCostSave.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
		public @ResponseBody String tansportCostSave(@RequestBody List<Transport> freightList,String evalDetailID,String resultTransJson) {
			String result = "{'flag':false,'msg':''}";
			Transport freight = new Transport();
			try {
				//存freight中freightList
				String freightListId = this.iTransCostService.saveReturnID(freightList.get(0));
				for(int i=1;i<freightList.size();i++){
					freight = freightList.get(i);
					freight.setListID(freightListId);
				    this.iTransCostService.addTransport(freight); 
				}
				
				//存FreightListID进明细表
				EvalDetail evalDetail =new EvalDetail();
				evalDetail = this.baseService2.findById(EvalDetail.class,evalDetailID);
				evalDetail.setTransportListID(freightListId);
				evalDetail.setResultTransJson(resultTransJson);
				this.baseService2.update(evalDetail);
				result = "{'flag':true,'msg':''}";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			}
			return result;        	    	
		}
		
		@RequestMapping(value="/getTransportListByListid.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
		public @ResponseBody String getTransportListByListid(String listID) {
			String result = "{'flag':false,'msg':''}";
			try{
				List<Transport> transportList = this.iTransCostService.getTransportListByListid(listID);
				JSONObject jobj = new JSONObject();
				jobj.accumulate("flag", true);
				jobj.accumulate("msg", JSONArray.fromObject(transportList));
				result = jobj.toString();
			}catch (Exception e) {
				e.printStackTrace();
				result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			}
			return result;
		}
	
}
