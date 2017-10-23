package com.chinaias.controller.evaluation;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.Component;
import com.chinaias.service.IMachingService;

@Controller
@Scope("prototype") 
public class machingController {
	@Resource
	private IBaseDao<Component> componentDao;
	@Resource
	private IMachingService machingService;;
	
	@RequestMapping("/maching.do")
	public ModelAndView Dictionary() throws Exception { 
		ModelAndView mav = new ModelAndView(); 
		mav.setViewName("maching");
		return mav;
	}
	@RequestMapping(value="/exportEvalExcel.do")
	public String exportEvalExcel(HttpServletRequest request, HttpServletResponse response,
			String excelHeadJosnStr,String excelMaterialJosnStr,String excelCompJosnStr,
			String excelHPJsonStr,String excelCartonJsonStr,String excelResultJsonStr){
		String resourcePath = machingController.class.getResource("/").toString().substring(6);
		String excelResPath = resourcePath + "evalModule.xls";
		System.out.println("exportExcel Module---"+excelResPath);
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
		String timeStamp = df.format(new Date());
		String url = resourcePath + "excel/"+timeStamp+".xls";
		try{
			machingService.copyFile(excelResPath,url,true);
			excelHeadJosnStr = new String(excelHeadJosnStr.getBytes("ISO-8859-1"),"UTF-8");
			excelMaterialJosnStr = new String(excelMaterialJosnStr.getBytes("ISO-8859-1"),"UTF-8");
			excelCompJosnStr = new String(excelCompJosnStr.getBytes("ISO-8859-1"),"UTF-8");
			excelHPJsonStr = new String(excelHPJsonStr.getBytes("ISO-8859-1"),"UTF-8");
			excelCartonJsonStr = new String(excelCartonJsonStr.getBytes("ISO-8859-1"),"UTF-8");
			excelResultJsonStr = new String(excelResultJsonStr.getBytes("ISO-8859-1"),"UTF-8");
			machingService.excelInsertContent(url,excelHeadJosnStr,excelMaterialJosnStr,excelCompJosnStr,excelHPJsonStr,excelCartonJsonStr,excelResultJsonStr);
			response.setContentType("application/force-download");// 设置强制下载不打开
			response.setCharacterEncoding("utf-8");
			response.setHeader("Content-Disposition", "attachment;fileName="+timeStamp+".xls");
			InputStream inputStream = new FileInputStream(new File(url));
			OutputStream os = response.getOutputStream();
			byte[] b =new byte[2048];	
			int length;
			while ((length = inputStream.read(b)) > 0) {
				os.write(b, 0, length);
			}
			os.close();
			inputStream.close();
		} catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	
	
	
}
