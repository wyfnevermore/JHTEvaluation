package com.chinaias.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Service;

import com.chinaias.service.IMachingService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Service
public class MachingService implements IMachingService{
	
	@SuppressWarnings("unused")
	public boolean excelInsertContent(String excelPath,String excelHeadJosnStr,String excelMaterialJosnStr,String excelCompJosnStr,
			String excelHPJsonStr,String excelCartonJsonStr,String excelResultJsonStr){
		try {
			HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(excelPath));
			HSSFCellStyle cellStyle = workbook.createCellStyle();
			cellStyle.setBorderBottom(HSSFCellStyle.BORDER_THIN); //下边框    
			cellStyle.setBorderLeft(HSSFCellStyle.BORDER_THIN);//左边框    
			cellStyle.setBorderTop(HSSFCellStyle.BORDER_THIN);//上边框    
			cellStyle.setBorderRight(HSSFCellStyle.BORDER_THIN);//右边框  
			HSSFSheet sheet = workbook.getSheetAt(0);
			JSONObject excelHeadJosn= JSONObject.fromObject(excelHeadJosnStr);
			JSONArray excelMaterialJosn = JSONArray.fromObject(excelMaterialJosnStr);
			JSONArray excelCompJosn = JSONArray.fromObject(excelCompJosnStr);
			JSONArray excelHPJson = JSONArray.fromObject(excelHPJsonStr);
			JSONArray excelCartonJson = JSONArray.fromObject(excelCartonJsonStr);
			JSONObject excelResultJson= JSONObject.fromObject(excelResultJsonStr);
			//填写头信息
			fillExcelHead(sheet,excelHeadJosn);
			//填写物料信息
			int materialRowAddNo = fillExcelMaterial(sheet,excelMaterialJosn);
			//填写组件信息
			int compRowAddNo = fillExcelComp(sheet,excelCompJosn,materialRowAddNo,excelCartonJson);
			//填写半成品信息
			fillExcelHP(sheet,excelHPJson,excelResultJson,compRowAddNo+materialRowAddNo);
					
			FileOutputStream out = null;
			try {
                out = new FileOutputStream(excelPath);
                workbook.write(out);
                return true;
            } catch (IOException e) {
                e.printStackTrace();
                return false;
            } finally {
                try {
                    out.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
		} catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}
	
	private void fillExcelHead(HSSFSheet sheet,JSONObject excelHeadJosn){
		HSSFRow firstRow = sheet.getRow((short) 0);
		firstRow.getCell((short) 2).setCellValue(excelHeadJosn.getString("productName"));
		//填写贸易术语
		firstRow.getCell((short) 7).setCellValue(excelHeadJosn.getString("tradeForm"));
	}
	
	private int fillExcelMaterial(HSSFSheet sheet,JSONArray excelMaterialJosn){
		if(excelMaterialJosn.size()<1) return 0;
		HSSFRow sourceRow = sheet.getRow((short) 2);
		HSSFRow curRow = sheet.getRow((short) 2);
		HSSFCellStyle sourceCell = sourceRow.getCell(1).getCellStyle();
		if(excelMaterialJosn.size()<3){
			for(int i=2;i<excelMaterialJosn.size()+2;i++){
				curRow = sheet.getRow((short) i);
				curRow.getCell((short) 1).setCellValue(excelMaterialJosn.getJSONObject(i-2).getString("materialDesc"));
				curRow.getCell((short) 3).setCellValue(excelMaterialJosn.getJSONObject(i-2).getString("materialName"));
				curRow.getCell((short) 6).setCellValue(excelMaterialJosn.getJSONObject(i-2).getString("materialCost"));
			}
			return 0;
		}
		if(excelMaterialJosn.size()>2){
			for(int i=2;i<4;i++){
				curRow = sheet.getRow((short) i);
				curRow.getCell((short) 1).setCellValue(excelMaterialJosn.getJSONObject(i-2).getString("materialDesc"));
				curRow.getCell((short) 3).setCellValue(excelMaterialJosn.getJSONObject(i-2).getString("materialName"));
				curRow.getCell((short) 6).setCellValue(excelMaterialJosn.getJSONObject(i-2).getString("materialCost"));
			}
			sheet.shiftRows(4, sheet.getLastRowNum(), excelMaterialJosn.size()-2,true,false);
			for(int i=4;i<excelMaterialJosn.size()+2;i++){
					curRow = sheet.createRow((short) i);
					curRow.setHeight(sourceRow.getHeight());
					createCell(curRow,(short) 1,excelMaterialJosn.getJSONObject(i-2).getString("materialDesc"),sourceCell);
					createCell(curRow,(short) 3,excelMaterialJosn.getJSONObject(i-2).getString("materialName"),sourceCell);
					createCell(curRow,(short) 6,excelMaterialJosn.getJSONObject(i-2).getString("materialCost"),sourceCell);
			}
		}
		return excelMaterialJosn.size()-2;
	}
	
	private int fillExcelComp(HSSFSheet sheet,JSONArray excelCompJosn,int materialRowAddNo,JSONArray excelCartonJson){
		int addRowCount = 0;
		int curRowNo = 6 + materialRowAddNo;
		HSSFRow sourceRow = sheet.getRow((short) curRowNo);
		HSSFRow curRow = null;
		for(int i=0;i<excelCompJosn.size();i++){
			JSONArray sepcJosn = JSONArray.fromObject(excelCompJosn.getJSONObject(i).getString("specJson"));
			for(int j=0;j<sepcJosn.size();j++){
				String specString = "";
				String lenth = sepcJosn.getJSONObject(j).getString("length");
				String width = sepcJosn.getJSONObject(j).getString("width");
				String height = sepcJosn.getJSONObject(j).getString("height");
				String other = sepcJosn.getJSONObject(j).getString("other");
				if(!"".equalsIgnoreCase(lenth)){
					specString = lenth;
				}
				if(!"".equalsIgnoreCase(width)){
					specString = specString + "x" + width;
				}
				if(!"".equalsIgnoreCase(height)){
					specString = specString + "x" + height;
				}
				if(!"".equalsIgnoreCase(other)){
					specString = specString + "x" + other;
				}
				String specNameStr = sepcJosn.getJSONObject(j).getString("specName");
				String cartontLength = "";
				String cartontWidth = "";
				String cartontHeight = "";
				String countInCarton = "";
				for(int k=0;k<excelCartonJson.size();k++){
					if(specNameStr.equals(excelCartonJson.getJSONObject(k).getString("spec"))){
						cartontLength = excelCartonJson.getJSONObject(k).getString("cartontLength");
						cartontWidth = excelCartonJson.getJSONObject(k).getString("cartontWidth");
						cartontHeight = excelCartonJson.getJSONObject(k).getString("cartontHeight");
						countInCarton = excelCartonJson.getJSONObject(k).getString("countInCarton");
						break;
					}
				}
				if(curRowNo==(6 + materialRowAddNo)){
					curRow = sheet.getRow((short) curRowNo);
					curRow.getCell((short) 0).setCellValue(excelCompJosn.getJSONObject(i).getString("compName"));
					curRow.getCell((short) 1).setCellValue(specNameStr);
					curRow.getCell((short) 2).setCellValue(specString);
					curRow.getCell((short) 3).setCellValue(excelCompJosn.getJSONObject(i).getString("compCount"));
					if(i==0){//现在只取第一个组件
						curRow.getCell((short) 4).setCellValue(cartontLength);
						curRow.getCell((short) 5).setCellValue(cartontWidth);
						curRow.getCell((short) 6).setCellValue(cartontHeight);
						curRow.getCell((short) 7).setCellValue(countInCarton);
					}
					curRowNo++;
				}else{
					sheet.shiftRows(curRowNo+1, sheet.getLastRowNum(), 1,true,false);
					curRow = sheet.createRow((short) curRowNo);
					curRow.setHeight(sourceRow.getHeight());
					createCell(curRow,(short) 0,excelCompJosn.getJSONObject(i).getString("compName"),sourceRow.getCell(0).getCellStyle());
					createCell(curRow,(short) 1,sepcJosn.getJSONObject(j).getString("specName"),sourceRow.getCell(1).getCellStyle());
					createCell(curRow,(short) 2,specString,sourceRow.getCell(2).getCellStyle());
					createCell(curRow,(short) 3,excelCompJosn.getJSONObject(i).getString("compCount"),sourceRow.getCell(3).getCellStyle());
					if(i==0){
						createCell(curRow,(short) 4,cartontLength,sourceRow.getCell(4).getCellStyle());
						createCell(curRow,(short) 5,cartontWidth,sourceRow.getCell(5).getCellStyle());
						createCell(curRow,(short) 6,cartontHeight,sourceRow.getCell(6).getCellStyle());
						createCell(curRow,(short) 7,countInCarton,sourceRow.getCell(7).getCellStyle());
					}else{
						createCell(curRow,(short) 4,"",sourceRow.getCell(4).getCellStyle());
						createCell(curRow,(short) 5,"",sourceRow.getCell(5).getCellStyle());
						createCell(curRow,(short) 6,"",sourceRow.getCell(6).getCellStyle());
						createCell(curRow,(short) 7,"",sourceRow.getCell(7).getCellStyle());
					}
					createCell(curRow,(short) 8,"",sourceRow.getCell(8).getCellStyle());
					curRowNo++;
					addRowCount++;
				}
			}
		}
		return addRowCount;
	}
	
	private void fillExcelHP(HSSFSheet sheet,JSONArray excelHPJson,JSONObject excelResultJson,int rowHasAdd){
		int curRowNo = 9 + rowHasAdd;
		HSSFRow sourceRow = sheet.getRow((short) curRowNo);
		HSSFRow curRow = null;
		for(int i=0;i<excelHPJson.size();i++){
			String specString = excelHPJson.getJSONObject(i).getString("spec");
			String materialCost = (String) JSONObject.fromObject(excelResultJson.get("material")).get(specString);
			if("null".equals(materialCost)) materialCost = "";
			String cartonCost = (String) JSONObject.fromObject(excelResultJson.get("carton")).get(specString);
			if("null".equals(cartonCost)) cartonCost = "";
			String transportCost = (String) JSONObject.fromObject(excelResultJson.get("transport")).get(specString);
			if("null".equals(transportCost)) transportCost = "";
			String otherCost = (String) excelResultJson.get("other");
			if("null".equals(otherCost)) otherCost = "";
			JSONArray detailJosn = JSONArray.fromObject(excelHPJson.getJSONObject(i).getString("detail"));
			int firstSpecrRowNo = curRowNo;
			for(int j=0;j<detailJosn.size();j++){
				if(curRowNo==(9 + rowHasAdd)){
					curRow = sheet.getRow((short) curRowNo);
					curRow.getCell((short) 0).setCellValue(detailJosn.getJSONObject(j).getString("hpName"));
					curRow.getCell((short) 1).setCellValue(specString);
					curRow.getCell((short) 2).setCellValue(detailJosn.getJSONObject(j).getString("materailDesc"));
					curRow.getCell((short) 3).setCellValue("");
					curRow.getCell((short) 4).setCellValue("");
					curRow.getCell((short) 5).setCellValue("");
					curRow.getCell((short) 6).setCellValue("");
					curRow.getCell((short) 7).setCellValue(detailJosn.getJSONObject(j).getString("cutLength"));
					curRow.getCell((short) 8).setCellValue(detailJosn.getJSONObject(j).getString("cutWidth"));
					curRow.getCell((short) 9).setCellValue("");
					curRow.getCell((short) 10).setCellValue(detailJosn.getJSONObject(j).getString("materialLoss"));
					curRow.getCell((short) 11).setCellValue("");
					curRow.getCell((short) 12).setCellValue(detailJosn.getJSONObject(j).getString("cost"));
					curRow.getCell((short) 13).setCellValue("");
					curRow.getCell((short) 14).setCellValue(cartonCost);
					curRow.getCell((short) 15).setCellValue(transportCost);
					curRow.getCell((short) 16).setCellValue(otherCost);
					curRow.getCell((short) 17).setCellValue("");
					curRow.getCell((short) 18).setCellValue("");
					curRow.getCell((short) 19).setCellValue("");
					curRow.getCell((short) 20).setCellValue("");
					curRow.getCell((short) 21).setCellValue("");
					curRow.getCell((short) 22).setCellValue("");
					curRowNo++;
				}else{
					curRow = sheet.createRow((short) curRowNo);
					curRow.setHeight(sourceRow.getHeight());
					createCell(curRow,(short) 0,detailJosn.getJSONObject(j).getString("hpName"),sourceRow.getCell(0).getCellStyle());
					if(firstSpecrRowNo == curRowNo){
						createCell(curRow,(short) 1,specString,sourceRow.getCell(1).getCellStyle());
						createCell(curRow,(short) 14,cartonCost,sourceRow.getCell(14).getCellStyle());
						createCell(curRow,(short) 15,transportCost,sourceRow.getCell(15).getCellStyle());
						createCell(curRow,(short) 16,otherCost,sourceRow.getCell(16).getCellStyle());
					}else{
						createCell(curRow,(short) 1,"",sourceRow.getCell(1).getCellStyle());
						createCell(curRow,(short) 14,"",sourceRow.getCell(14).getCellStyle());
						createCell(curRow,(short) 15,"",sourceRow.getCell(15).getCellStyle());
						createCell(curRow,(short) 16,"",sourceRow.getCell(16).getCellStyle());
					}
					createCell(curRow,(short) 2,detailJosn.getJSONObject(j).getString("materailDesc"),sourceRow.getCell(2).getCellStyle());
					createCell(curRow,(short) 3,"",sourceRow.getCell(3).getCellStyle());
					createCell(curRow,(short) 4,"",sourceRow.getCell(4).getCellStyle());
					createCell(curRow,(short) 5,"",sourceRow.getCell(5).getCellStyle());
					createCell(curRow,(short) 6,"",sourceRow.getCell(6).getCellStyle());
					createCell(curRow,(short) 7,detailJosn.getJSONObject(j).getString("cutLength"),sourceRow.getCell(7).getCellStyle());
					createCell(curRow,(short) 8,detailJosn.getJSONObject(j).getString("cutWidth"),sourceRow.getCell(8).getCellStyle());
					createCell(curRow,(short) 9,"",sourceRow.getCell(9).getCellStyle());
					createCell(curRow,(short) 10,detailJosn.getJSONObject(j).getString("materialLoss"),sourceRow.getCell(10).getCellStyle());
					createCell(curRow,(short) 11,"",sourceRow.getCell(11).getCellStyle());
					createCell(curRow,(short) 12,detailJosn.getJSONObject(j).getString("cost"),sourceRow.getCell(12).getCellStyle());
					createCell(curRow,(short) 13,"",sourceRow.getCell(13).getCellStyle());
					createCell(curRow,(short) 17,"",sourceRow.getCell(17).getCellStyle());
					createCell(curRow,(short) 18,"",sourceRow.getCell(18).getCellStyle());
					createCell(curRow,(short) 19,"",sourceRow.getCell(19).getCellStyle());
					createCell(curRow,(short) 20,"",sourceRow.getCell(20).getCellStyle());
					createCell(curRow,(short) 21,"",sourceRow.getCell(21).getCellStyle());
					createCell(curRow,(short) 22,"",sourceRow.getCell(22).getCellStyle());
					curRowNo++;
				}
			}
		}
	}
	
	private void createCell(HSSFRow row,short position,String value,HSSFCellStyle cellStyle) {
		HSSFCell cell = row.createCell(position);
		cell.setCellStyle(cellStyle);
		cell.setCellValue(value);
	}
	
	public boolean copyFile(String srcFileName, String destFileName, boolean overlay) {  
        File srcFile = new File(srcFileName);  
        // 判断目标文件是否存在  
        File destFile = new File(destFileName);  
        if (destFile.exists()) {  
            // 如果目标文件存在并允许覆盖  
            if (overlay) {  
                // 删除已经存在的目标文件，无论目标文件是目录还是单个文件  
                new File(destFileName).delete();  
            }  
        } else {  
            // 如果目标文件所在目录不存在，则创建目录  
            if (!destFile.getParentFile().exists()) {  
                // 目标文件所在目录不存在  
                if (!destFile.getParentFile().mkdirs()) {  
                    // 复制文件失败：创建目标文件所在目录失败  
                    return false;  
                }  
            }  
        }  
        // 复制文件  
        int byteread = 0; // 读取的字节数  
        InputStream in = null;  
        OutputStream out = null;  
        try {  
            in = new FileInputStream(srcFile);  
            out = new FileOutputStream(destFile);  
            byte[] buffer = new byte[1024];  
            while ((byteread = in.read(buffer)) != -1) {  
                out.write(buffer, 0, byteread);  
            }  
            return true;  
        } catch (Exception e) {  
            return false;  
        } finally {  
            try {  
                if (out != null)  
                    out.close();  
                if (in != null)  
                    in.close();  
            } catch (Exception e) {  
                e.printStackTrace();  
            }  
        }  
    }
}
