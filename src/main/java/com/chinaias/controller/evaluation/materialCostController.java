package com.chinaias.controller.evaluation;

import java.util.List;

import javax.annotation.Resource;

import org.aspectj.weaver.ast.Var;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chinaias.entity.EvalDetail;
import com.chinaias.entity.HalfProduct;
import com.chinaias.entity.Material;
import com.chinaias.entity.Product;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IEvalDetailService;
import com.chinaias.service.IHalfProductService;
import com.chinaias.service.IMaterialService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@Scope("prototype") 
public class materialCostController {
	@Resource
	private IBaseService<EvalDetail> baseService;
	@Resource
	private IMaterialService materialService;
	@Resource
	private IHalfProductService halfProductService;
	@Resource
	private IEvalDetailService evalDetailService;
	
	
	@RequestMapping("/materialCost.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("materialCost");
		return mav;
	}
	
	@RequestMapping(value="/materialSave.do",method=RequestMethod.POST)
	@ResponseBody
	public String materialSave(@RequestBody List<Material> materialList) {
		String result = "{'flag':false,'msg':''}";
		try{
			String listId = this.materialService.save(materialList.get(0));
			Material materialTmpc = new Material();
			for(int i=1;i<materialList.size();i++){
				materialTmpc = materialList.get(i);
				materialTmpc.setListID(listId);
				this.materialService.save(materialTmpc);
			}
			result = "{'flag':true,'msg':'"+listId+"'}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;        	    	
	}
	
	@RequestMapping(value="/halfProductSave.do",method=RequestMethod.POST)
	@ResponseBody
	public String halfProductSave(@RequestBody List<HalfProduct> halfProductList) {
		String result = "{'flag':false,'msg':''}";
		try{
			String listId = this.halfProductService.save(halfProductList.get(0));
			HalfProduct halfProductTmpc = new HalfProduct();
			for(int i=1;i<halfProductList.size();i++){
				halfProductTmpc = halfProductList.get(i);
				halfProductTmpc.setListID(listId);
				this.halfProductService.save(halfProductTmpc);
			}
			result = "{'flag':true,'msg':'"+listId+"'}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;        	    	
	}
	
	@RequestMapping(value="/evalDetailUpdate4Material.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")
	@ResponseBody
	public String evalDetailUpdate4Material(EvalDetail evalDetail) {
		String result = "{'flag':false,'msg':''}";
		try{
			EvalDetail evalDetailInit = new EvalDetail();
			evalDetailInit = evalDetailService.findById(evalDetail.getId());
			evalDetailInit.setMaterialListID(evalDetail.getMaterialListID());
			evalDetailInit.setHalfProdListID(evalDetail.getHalfProdListID());
			evalDetailInit.setResultMaterialJson(evalDetail.getResultMaterialJson());
			evalDetailService.updateEvalDetail(evalDetailInit);
			result = "{'flag':true,'msg':''}";
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;        	    	
	}
//存产品经销。分销。代理
	@RequestMapping(value="/productSave.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")
	@ResponseBody
	public String productSave(@RequestBody List<Product> productList,String evalDetailID,String resultMaterialJson) {
		String result = "{'flag':false,'msg':''}";
		Product product = new Product();
		try {
			//存product中productList
			String productListId = this.halfProductService.savePdReturnID(productList.get(0));
			for(int i=1;i<productList.size();i++){
				product = productList.get(i);
				product.setListID(productListId);
			    this.halfProductService.addProduct(product); 
			}
			
			//新建明细表，存productListID进明细表
			EvalDetail evalDetail =new EvalDetail();
			evalDetail.setId(evalDetailID);
			evalDetail.setCompListID(productListId);//产品listid临时先存做组件listid
			evalDetail.setResultMaterialJson(new String(resultMaterialJson.getBytes("ISO-8859-1"),"UTF-8"));
			this.evalDetailService.addEvalDetail(evalDetail);
			result = "{'flag':true,'msg':''}";
		} catch (Exception e) {
			e.printStackTrace();
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
		}
		return result;           	    	
	}
	
	@RequestMapping(value="/getMaterialListByListid.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getMaterialListByListid(String listID) {
		String result = "{'flag':false,'msg':''}";
		try{
			List<Material> materialList = this.materialService.getMaterialListByListid(listID);
			JSONObject jobj = new JSONObject();
			jobj.accumulate("flag", true);
			jobj.accumulate("msg", JSONArray.fromObject(materialList));
			result = jobj.toString();
		}catch (Exception e) {
			e.printStackTrace();
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
		}
		return result;
	}
	
	@RequestMapping(value="/getProductListByListid.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getProductListByListid(String listID) {
		String result = "{'flag':false,'msg':''}";
		try{
			List<Product> productList = this.halfProductService.getProductListByListid(listID);
			JSONObject jobj = new JSONObject();
			jobj.accumulate("flag", true);
			jobj.accumulate("msg", JSONArray.fromObject(productList));
			result = jobj.toString();
		}catch (Exception e) {
			e.printStackTrace();
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
		}
		return result;
	}
	
	@RequestMapping(value="/getHPListByListid.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String getHPListByListid(String listID) {
		String result = "{'flag':false,'msg':''}";
		try{
			List<HalfProduct> hpList = this.halfProductService.getHPListByListid(listID);
			JSONObject jobj = new JSONObject();
			jobj.accumulate("flag", true);
			jobj.accumulate("msg", JSONArray.fromObject(hpList));
			result = jobj.toString();
		}catch (Exception e) {
			e.printStackTrace();
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
		}
		return result;
	}
}
