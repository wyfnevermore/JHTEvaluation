package com.chinaias.controller.evaluation;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chinaias.entity.Carton;
import com.chinaias.entity.EvalDetail;
import com.chinaias.entity.EvalHistory;
import com.chinaias.entity.OtherCost;
import com.chinaias.service.IBaseService;
import com.chinaias.service.ICartonService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;


@Controller
@Scope("prototype") 
public class CartonController {

	@Resource
	private IBaseService<Carton> baseService;
	@Resource
	private IBaseService<EvalDetail> baseService2;
	@Resource
	private ICartonService iCartonService;



	@RequestMapping("/cartonCost.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("cartonCost");
		return mav;
	}
	
	//新增
	@RequestMapping(value="/addCarton.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String addCarton(Carton carton) {
		String uuid = this.iCartonService.addCartonReturnUUID(carton);
		return uuid; 
	}


	//查询
	@RequestMapping(value="/cartonQuery.do",method=RequestMethod.POST,produces="application/json;charset=utf-8")  

	public @ResponseBody List<Carton> cartonQuery(String cartonId) {
		//String queryString = "from Carton";
		Carton carton = this.baseService.findById(Carton.class, cartonId);
		net.sf.json.JSONArray jsonArray = net.sf.json.JSONArray.fromObject(carton);
		System.out.println(jsonArray.toString());
		if(jsonArray.equals("")){
			return null;
		}else{
			return jsonArray;
		}
	}
	
	
	//保存到数据库
		@RequestMapping(value="/cartonCostSave.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
		public @ResponseBody String cartonCostSave(@RequestBody List<Carton> cartonList,String evalDetailID,String resultCartonJson) {
			String result = "{'flag':false,'msg':''}";
			Carton carton = new Carton();
			try {
				//存carton中cartonList
				String cartonListId = this.iCartonService.saveReturnCID(cartonList.get(0));
				for(int i=1;i<cartonList.size();i++){
					carton = cartonList.get(i);
					carton.setListID(cartonListId);
				    this.iCartonService.addCarton(carton); 
				}
				
				//存CartonListID进明细表
				EvalDetail evalDetail =new EvalDetail();
				evalDetail = this.baseService2.findById(EvalDetail.class,evalDetailID);
				evalDetail.setCartonListID(cartonListId);
				evalDetail.setResultCartonJson(resultCartonJson);
				this.baseService2.update(evalDetail);
				result = "{'flag':true,'msg':''}";
			} catch (Exception e) {
				e.printStackTrace();
				result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			}
			return result;        	    	
		}
	

	/*@RequestMapping(value="/cartonQuery.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody Page cartonQuery(@RequestParam Map<String, String> queryMap,String curpage,String pagesize) {
		Page page=new Page();
		page.setCurpage(curpage);
		page.setPagesize(pagesize);
		page = this.baseService.findByMap(Carton.class, queryMap,page);
		return  page; 
	}*/
		
	@RequestMapping(value="/getCartonListByListid.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getCartonListByListid(String listID) {
		String result = "{'flag':false,'msg':''}";
		try{
			List<Carton> cartonList = this.iCartonService.getCartonListByListid(listID);
			JSONObject jobj = new JSONObject();
			jobj.accumulate("flag", true);
			jobj.accumulate("msg", JSONArray.fromObject(cartonList));
			result = jobj.toString();
		}catch (Exception e) {
			e.printStackTrace();
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
		}
		return result;
	}
}

