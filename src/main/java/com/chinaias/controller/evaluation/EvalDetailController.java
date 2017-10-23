package com.chinaias.controller.evaluation;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chinaias.entity.EvalDetail;
import com.chinaias.entity.EvalHistory;
import com.chinaias.entity.Pic;
import com.chinaias.service.IBaseService;
import com.chinaias.service.IEvalDetailService;
import com.chinaias.service.IEvalHistoryService;
import com.chinaias.util.Tools;
import com.sun.jersey.core.util.Base64;

import net.sf.json.JSONObject;

@Controller
@Scope("prototype") 
public class EvalDetailController {


	@Resource
	private IBaseService<EvalDetail> baseService;
	@Resource
	private IBaseService<Pic> basePicService;
	@Resource
	private IEvalDetailService iEvalDetailService;
	@Resource
	private IEvalHistoryService iEvalHistoryService;

	@RequestMapping("/calculation.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("calculation");
		return mav;
	}
	
	@RequestMapping(value="/addEvalHistory.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String addEvalHistory(EvalHistory evalHistory) {
		String evalDetailIDStr = UUID.randomUUID().toString().trim().replaceAll("-", "");
		evalHistory.setEvalDetailID(evalDetailIDStr);
		evalHistory.setListID(Tools.getUUID());
		//订单号=业务实体+订单类型首字母+年份+6位数字
		String listID = evalHistory.getListID();
		if(listID == null || "".equals(listID)) {
			//取数据库最大的单号，加一赋给新的采购单
			//业务实体
//		    String orgName = evalHistory.getBusinessType();
			String orgName = "";
		    //订单类型首字母
		    String firstWord = "C";
		    //年份
			Calendar c = Calendar.getInstance();//可以对每个时间域单独修改
			int yearVal = c.get(Calendar.YEAR); 
			String year = String.valueOf(yearVal);
			year = year.substring(year.length()-2,year.length());
			
			String orderType = orgName+firstWord+year;
			listID = Tools.getSerialNumber(orderType);
			evalHistory.setListID(listID);
		}
		Boolean flag=	this.iEvalHistoryService.addEvalHistoryReID(evalHistory);
		String result = "";
		if(!flag){
			result = "{'flag':false,'msg':'新增失败'}";
		}else{
			result = "{'flag':true,'msg':'"+evalDetailIDStr+"'}";
		}
		return result;
	}

	//新增并返回UUID
	@RequestMapping(value="/addEvalDetail.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")  
	public @ResponseBody String addEvalDetail(EvalDetail evalDetail) {
		String result=	this.iEvalDetailService.addEDReturnUUID(evalDetail);

		if(result==null){
			return "未获取Id,新增失败！";
		}
		return result;
	}


	//base64上传图片
	@RequestMapping(value="/uploadImg.do",method=RequestMethod.POST,produces="application/text;charset=utf-8") 
	public @ResponseBody String uploadImg(@RequestBody List<Object> baseFile,String evalDetailID,HttpServletRequest request){
		//要上传服务器上的路径
		String path = request.getSession().getServletContext().getRealPath("uploadImg");
		/*System.out.println(path);*/
		Base64 base64 =  new Base64();
		String address = "";
		String imageName ="";
		String[] imageInfo = new String[baseFile.size()];

		//日期目录名
		String folderName="";
		String nowDate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());

		//遍历upload文件下目录名
		File file = new File(path);
		String [] fileList = file.list();
		if(fileList.length!=0){
			for(int i=0;i<fileList.length;i++){
				System.out.println(fileList[i].substring(0, fileList[i].length()-5));
				if(fileList[i].substring(0, fileList[i].length()-5).equals(nowDate)){
					folderName = fileList[i];
				}
				else{
					folderName =nowDate +"-pic";
					File filefolder = new File(path+"//"+folderName);
					filefolder.mkdir();
				}
			}
		}
		else{
			folderName =nowDate +"-pic";
			File filefolder = new File(path+"//"+folderName);
			filefolder.mkdir();
			/*System.out.println(filefolder.getPath());*/
		}

		//list读出来，转string数组
		for(int i=0;i<baseFile.size();i++){
			imageInfo[i]=baseFile.get(i).toString();
		}

		String[] imageNames = new String[baseFile.size()];
		//file 为前台隐藏域里面的字符串
		if(imageInfo!= null && imageInfo.length!=0){
			int index = 0;

			//获取第一个里面的url
			for (String base64Str : imageInfo) {
				String img = base64Str.substring(0, 143);
				String rgex = "id=(.*?)url";
				String pImgId = getSubUtilSimple(img,rgex);
				String imgId = pImgId.substring(0, pImgId.length()-2);
				//base64 解码
				String base64Str1 = base64Str.substring(143, base64Str.length()-2);
				String base64Str2 = base64Str1.substring(23, base64Str1.length());
				byte[] byteArray = base64.decode(base64Str2);
				// 调整异常数据  
				for (byte b : byteArray) {
					if(b<0)
						b+=256;
				}
				//上传的目录地址
				imageName = this.getImageName();
				address = path+File.separator+folderName+File.separator+imageName;
				/*System.out.println("2313"+address);*/
				try {
					//通过流的方式上传到服务器上的目录
					OutputStream out = new FileOutputStream(address);
					out.write(byteArray);
					out.close();
				} catch (Exception e) {
					e.printStackTrace();
					System.out.println(imageNames[0]); 
				}
				imageNames[index] = address;
				index ++ ;
				//存信息进数据库
				Pic pic= new Pic();
				pic.setId(imgId);
				pic.setAddress(address);
				pic.setName(imageName);
				this.basePicService.save(pic);
			}
			//存CartonListID进明细表
			EvalDetail evalDetail =new EvalDetail();
			evalDetail = this.baseService.findById(EvalDetail.class,evalDetailID);
			this.baseService.update(evalDetail);
		}
		System.out.println(imageNames[0]); 
		return "上传成功！";
	}

	/**
	 * 根据系统规则得到图片名称
	 */
	public String getImageName(){

		return UUID.randomUUID().toString()+".jpg";
	}


	//正则表达式匹配两个指定字符串中间的内容 
	public static String getSubUtilSimple(String soap,String rgex){  
		Pattern pattern = Pattern.compile(rgex);// 匹配的模式  
		Matcher m = pattern.matcher(soap);  
		while(m.find()){  
			return m.group(1);  
		}  
		return "";  
	}

	
	 //查询
	@RequestMapping(value="/getEvalDetailByDetailID.do",method=RequestMethod.POST,produces="application/text;charset=utf-8")
	@ResponseBody
	public String getEvalDetailByDetailID(String evalDetailID) {
		String result = "{'flag':false,'msg':''}";
		try{
			List<EvalDetail> detail = new ArrayList<EvalDetail>();
			detail = iEvalDetailService.getEvalDetailByDetailID(evalDetailID);
			
			JSONObject jobj = new JSONObject();
			jobj.accumulate("flag", true);
			jobj.accumulate("msg", JSONObject.fromObject(detail.get(0)));
			result = jobj.toString();
		}catch(Exception e){
			result = "{'flag':false,'msg':'"+e.getMessage()+"'}";
			e.printStackTrace();
		}
		return result;   
	}
}