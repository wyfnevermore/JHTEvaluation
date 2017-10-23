package com.chinaias.util;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.RandomAccessFile;
import java.sql.Clob;
import java.sql.Date;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletException;
import javax.sql.rowset.serial.SerialClob;
import javax.sql.rowset.serial.SerialException;

/**
 * @author Z100027
 *
 */

public class Tools {
	//生成单号时使用
	static int cNumber=1;
	static int qNumber=1;
	static int mNumber=1;
	static int jNumber=1;
	static int wgsNumber=1;
	static int wtsNumber=1;
	static int t2sNumber=1;
	static int djsNumber=1;
	static int wgpNumber=1;
	static int wtpNumber=1;
	static int t2pNumber=1;
	static int djpNumber=1;
	
	public static boolean isNotNullOrEmpty(Object value) {
		if (value == null || String.valueOf(value).trim().length() < 1) {
			return false;
		}
		return true;
	}
	public static boolean isNullOrEmpty(Object value) {
		if (value == null || String.valueOf(value).trim().length() < 1) {
			return true;
		}
		return false;
	}
	public static String getDataSize(long size){
		String str="";
		if(size<1024){
			str+=size+"B";
		}
		else if(size<1048576){
			DecimalFormat df=new DecimalFormat("#.000");
			str+=df.format((double)size/1024)+"K";
		}
		else {
			DecimalFormat df=new DecimalFormat("#.000");
			str+=df.format((double)size/1048576)+"M";
		}
		return str;
	}

	public static String clobToString(Clob clob) {

		try {
			return clob.getSubString(1, (int) clob.length());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "";
		}
	}

	public static Clob stringToClob(String str) {
		try {
			return new SerialClob(str.toCharArray());
		} catch (SerialException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	//获取字符串中两字符的值
	public static String getSubUtilSimple(String soap,String rgex){  
		Pattern pattern = Pattern.compile(rgex);// 匹配的模式  
		Matcher m = pattern.matcher(soap);  
		while(m.find()){  
			return m.group(1);  
		}  
		return "";  
	} 
	

	/** 
	 * 压缩文件夹里的文件
	 * 将存放在sourceFilePath目录下的源文件，打包成fileName名称的zip文件，并存放到zipFilePath路径下 
	 * @param sourceFilePath :待压缩的文件路径 
	 * @param zipFilePath :压缩后存放路径 
	 * @param fileName :压缩后文件的名称 
	 * @return 
	 */  
	public static boolean fileToZip(String sourceFilePath,String zipFilePath,String fileName){  
		boolean flag = false;  
		File sourceFile = new File(sourceFilePath);  
		FileInputStream fis = null;  
		BufferedInputStream bis = null;  
		FileOutputStream fos = null;  
		ZipOutputStream zos = null;  

		if(sourceFile.exists() == false){  
			System.out.println("待压缩的文件目录："+sourceFilePath+"不存在.");  
		}else{  
			try {  
				File zipFile = new File(zipFilePath + "/" + fileName );  
				if(zipFile.exists()){  
					System.out.println(zipFilePath + "目录下存在名字为:" + fileName +".zip" +"打包文件.");  
				}else{  
					File[] sourceFiles = sourceFile.listFiles();  
					if(null == sourceFiles || sourceFiles.length<1){  
						System.out.println("待压缩的文件目录：" + sourceFilePath + "里面不存在文件，无需压缩.");  
					}else{  
						fos = new FileOutputStream(zipFile);  
						zos = new ZipOutputStream(new BufferedOutputStream(fos));  
						byte[] bufs = new byte[1024*10];  
						for(int i=0;i<sourceFiles.length;i++){  
							//创建ZIP实体，并添加进压缩包  
							ZipEntry zipEntry = new ZipEntry(sourceFiles[i].getName());  
							zos.putNextEntry(zipEntry);  
							//读取待压缩的文件并写进压缩包里  
							fis = new FileInputStream(sourceFiles[i]);  
							bis = new BufferedInputStream(fis, 1024*10);  
							int read = 0;  
							while((read=bis.read(bufs, 0, 1024*10)) != -1){  
								zos.write(bufs,0,read);  
							}  
						}  
						flag = true;  
					} 
				}  
			} catch (FileNotFoundException e) {  
				e.printStackTrace();  
				throw new RuntimeException(e);  
			} catch (IOException e) {  
				e.printStackTrace();  
				throw new RuntimeException(e);  
			} finally{  
				//关闭流  
				try {  
					if(null != bis) bis.close();  
					if(null != zos) zos.close();  
				} catch (IOException e) {  
					e.printStackTrace();  
					throw new RuntimeException(e);  
				}  
			}  
		}  
		return flag;  
	}  


	/**  解压缩（压缩文件中包含多个文件）可代替上面的方法使用。
	 * ZipInputStream类
	 * 当我们需要解压缩多个文件的时候，ZipEntry就无法使用了，
	 * 如果想操作更加复杂的压缩文件，我们就必须使用ZipInputStream类
	 * */
	public static void ZipContraMultiFile(String zippath ,String outzippath){
		try {
			File file = new File(zippath);
			File outFile = null;
			ZipFile zipFile = new ZipFile(file);
			ZipInputStream zipInput = new ZipInputStream(new FileInputStream(file));
			ZipEntry entry = null;
			InputStream input = null;
			OutputStream output = null;
			while((entry = zipInput.getNextEntry()) != null){
				System.out.println("解压缩" + entry.getName() + "文件");
				outFile = new File(outzippath + File.separator + entry.getName());
				if(!outFile.getParentFile().exists()){
					outFile.getParentFile().mkdir();
				}
				if(!outFile.exists()){
					outFile.createNewFile();
				}
				input = zipFile.getInputStream(entry);
				output = new FileOutputStream(outFile);
				int temp = 0;
				while((temp = input.read()) != -1){
					output.write(temp);
				}

				input.close();
				output.close();
			}
			zipInput.close();
			new FileInputStream(file).close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/** 
	 * 下载打包的文件 
	 * @param file 下载的文件
	 * @param filePath 文件下载的路径
	 * 
	 */ 
	public static void downloadZip(File file,String filePath) { 
		try { 
			// 以流的形式下载文件。 
			BufferedInputStream fis = new BufferedInputStream(new FileInputStream(file.getPath())); 
			byte[] buffer = new byte[fis.available()]; 
			//fis.read(buffer); 
			//fis.close(); 
			// 清空response 
			//response.reset(); 
			int len=fis.read(buffer);
			//OutputStream toClient = new BufferedOutputStream(response.getOutputStream()); 
			BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(new File(filePath+"\\"+"downloadFile.zip")));
			/*response.setContentType("application/octet-stream"); 
			response.setHeader("Content-Disposition", "attachment;filename=" + file.getName()); 
			 */ 
			bos.write(buffer,0,len);
			//toClient1.write(buffer);
			bos.flush();


			fis.close();
			bos.close();
			//toClient.flush(); 
			//toClient.close(); 
		} 
		catch (IOException ex) { 
			ex.printStackTrace(); 
		} 
	} 

	/** 
	 * 将文件写入到zip文件中 
	 * @param inputFile 
	 * @param outputstream 
	 * @throws Exception 
	 */ 
	public static void zipFile(File inputFile, ZipOutputStream outputstream) throws IOException,ServletException 
	{ 
		try{ 
			if(inputFile.exists()) 
			{ 
				if(inputFile.isFile()) 
				{ 
					FileInputStream inStream = new FileInputStream(inputFile); 
					BufferedInputStream bInStream = new BufferedInputStream(inStream); 
					ZipEntry entry = new ZipEntry(inputFile.getName()); 
					outputstream.putNextEntry(entry);

					final int MAX_BYTE = 10 * 1024 *1024; //最大的流为10M 
					long streamTotal = 0; //接受流的容量 
					int streamNum = 0; //流需要分开的数量 
					int leaveByte = 0; //文件剩下的字符数 
					byte[] inOutbyte; //byte数组接受文件的数据 

					streamTotal = bInStream.available(); //通过available方法取得流的最大字符数 
					streamNum = (int)Math.floor(streamTotal / MAX_BYTE); //取得流文件需要分开的数量 
					leaveByte = (int)streamTotal % MAX_BYTE; //分开文件之后,剩余的数量 

					if (streamNum > 0) 
					{ 
						for(int j = 0; j < streamNum; ++j) 
						{ 
							inOutbyte = new byte[MAX_BYTE]; 
							//读入流,保存在byte数组 
							bInStream.read(inOutbyte, 0, MAX_BYTE); 
							outputstream.write(inOutbyte, 0, MAX_BYTE); //写出流 
						} 
					} 
					//写出剩下的流数据 
					inOutbyte = new byte[leaveByte]; 
					bInStream.read(inOutbyte, 0, leaveByte); 
					outputstream.write(inOutbyte); 
					outputstream.closeEntry(); //Closes the current ZIP entry and positions the stream for writing the next entry
					bInStream.close(); //关闭 
					inStream.close(); 
				} 
			} 
			else 
			{ 
				throw new ServletException("文件不存在！"); 
			} 
		} 
		catch(IOException e) 
		{ 
			throw e; 
		} 
	} 



	/**
	 * 字符串转sql.date类型
	 * @param dateStr
	 * @return
	 */
	public static Date stringToSqlDate(String dateStr)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		java.util.Date udate;
		java.sql.Date sdate = null;
		try {
			System.out.println(dateStr);
			if(!dateStr.equals("")){
				udate = sdf.parse(dateStr);
				sdate = new Date(udate.getTime());
			}
			else
			{
				return null;
			}

		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return sdate;
	}
	//获取日期字符串
	public static String getFormatCurrentDateStr(String format){
		if(format == null){
			format = "yyyy-MM-dd HH:mm:ss";
		}
		SimpleDateFormat df = new SimpleDateFormat(format);//设置日期格式
		return df.format(new java.util.Date());// new Date()为获取当前系统时间
	}
	
	//计算文件夹大小
	public static long getDirSize(File dir) {
		if (dir == null) {
			return 0;
		}
		if (!dir.isDirectory()) {
			return 0;
		}
		long dirSize = 0;
		File[] files = dir.listFiles();
		for (File file : files) {
			if (file.isFile()) {
				dirSize += file.length();
			} else if (file.isDirectory()) {
				dirSize += file.length();
				dirSize += getDirSize(file); // 如果遇到目录则通过递归调用继续统计
			}
		}
		return dirSize;
	}

	//创建文件
	public static boolean createFile(File fileName){
		boolean flag=false;
		try{
			if(!fileName.exists()){
				fileName.createNewFile();
				flag = true;
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return true;
	}

	//写入txt
	public static boolean writeTxtFile(String content,File fileName)throws Exception{
		RandomAccessFile mm=null;
		boolean flag=false; 
		FileOutputStream o=null;
		try {
			o = new FileOutputStream(fileName);
			o.write(content.getBytes("UTF-8"));
			o.close();
			//   mm=new RandomAccessFile(fileName,"rw");  
			//   mm.writeBytes(content);  
			flag=true;
		} catch (Exception e) {
			// TODO: handle exception  
			e.printStackTrace();
		}finally{
			if(mm!=null){
				mm.close();
			}
		}
		return flag;
	}

	public static void contentToTxt(String filePath,String content){
		String str = new String();//原有txt内容
		String s1 = new String();//内容更新  
		try {
			File f = new File(filePath);
			if(f.exists()) {
				System.out.print("文件存在");
			}else{
				System.out.print("文件不存在");
				return;
			}
			BufferedReader input = new BufferedReader(new FileReader(f));
			while ((str = input.readLine()) != null) {
				s1 += str + "\n";
			}
			System.out.println(s1);
			input.close();
			s1 += content;
			BufferedWriter output = new BufferedWriter(new FileWriter(f));
			output.write(s1);
			output.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
	//生成UUID
	public static String getUUID() {  
        /*UUID uuid = UUID.randomUUID();  
        String str = uuid.toString();  
        // 去掉"-"符号  
        String temp = str.substring(0, 8) + str.substring(9, 13)  
                + str.substring(14, 18) + str.substring(19, 23)  
                + str.substring(24);  
        return temp;*/  
          
        return UUID.randomUUID().toString().replace("-", "");  
    }  
	
	//b向mb转化
	public static String convertSize(long size){
		if(size < 1024){
			return String.valueOf(size)+ "B";
		} 
		else{
			size=size/1024;
		}
		if (size < 1024) {
			return String.valueOf(size) + "KB";
		}
		else {
			size=size/1024;
		}
		if (size < 1024) {
			size =size*100;
			return String.valueOf((size/100)) + "."+ String.valueOf((size % 100)) + "MB";
		}
		else{//否则如果要以GB为单位的，先除于1024再作同样的处理  
			size = size * 100 / 1024;
			return String.valueOf((size / 100)) + "." + String.valueOf((size % 100)) + "GB";
		}
	}
	
	
	public static String getSerialNumber(String orderType){
		//拼接订单号
		if(orderType.contains("C")) {
			cNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(cNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(cNumber);
		}else if(orderType.contains("Q")) {
			qNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(qNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(qNumber);
		}else if(orderType.contains("M")) {
			mNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(mNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(mNumber);
		}else if(orderType.contains("J") && orderType.length()<4) {
			jNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(jNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(jNumber);
		}else if(orderType.contains("WGS")) {
			wgsNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(wgsNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(wgsNumber);
		}else if(orderType.contains("WTS")) {
			wtsNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(wtsNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(wtsNumber);
		}else if(orderType.contains("T2S")) {
			t2sNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(t2sNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(t2sNumber);
		}else if(orderType.contains("DJS")) {
			djsNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(djsNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(djsNumber);
		}else if(orderType.contains("WGP")) {
			wgpNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(wgpNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(wgpNumber);
		}else if(orderType.contains("WTP")) {
			wtpNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(wtpNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(wtpNumber);
		}else if(orderType.contains("T2P")) {
			t2pNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(t2pNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(t2pNumber);
		}else if(orderType.contains("DJP")) {
			djpNumber++;
			String zeroStr = "";
			for(int i=0; i<6-String.valueOf(djpNumber).length();i++) {
				zeroStr =  zeroStr + "0";
			}
			orderType = orderType + zeroStr + String.valueOf(djpNumber);
		}else{
			orderType = "unKnowType";
		}
		return orderType;
	}
	public static int getLastNum(String resouce){
		if(!"".equals(resouce)){
			return Integer.parseInt(resouce.substring(resouce.length()-6,resouce.length()));
		}else{
			return 0;
		}
	}
}
