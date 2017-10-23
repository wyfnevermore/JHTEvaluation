package com.chinaias.entity.erp.FI;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="FORECAST_ITEM")
public class FORECAST_ITEM {
	private String IMPORT_ID;
	private String SOURCE_CODE;
	private String ORGANIZATION_CODE;
	private String FORECASTS;
	private String ITEM_NUMBER;
	private String FORECAST_DATE;
	private String QUANTITY;
	private String PROJECT_NUMBER;
	private String SOURCE_HEADER_ID;
	private String SOURCE_LINE_ID;

	@XmlElement(name = "IMPORT_ID")
	public String getIMPORT_ID() {
		return IMPORT_ID;
	}

	public void setIMPORT_ID(String iMPORT_ID) {
		IMPORT_ID = iMPORT_ID;
	}

	@XmlElement(name = "SOURCE_CODE")
	public String getSOURCE_CODE() {
		return SOURCE_CODE;
	}

	public void setSOURCE_CODE(String sOURCE_CODE) {
		SOURCE_CODE = sOURCE_CODE;
	}

	@XmlElement(name = "ORGANIZATION_CODE")
	public String getORGANIZATION_CODE() {
		return ORGANIZATION_CODE;
	}

	public void setORGANIZATION_CODE(String oRGANIZATION_CODE) {
		ORGANIZATION_CODE = oRGANIZATION_CODE;
	}

	@XmlElement(name = "FORECASTS")
	public String getFORECASTS() {
		return FORECASTS;
	}

	public void setFORECASTS(String fORECASTS) {
		FORECASTS = fORECASTS;
	}

	@XmlElement(name = "ITEM_NUMBER")
	public String getITEM_NUMBER() {
		return ITEM_NUMBER;
	}

	public void setITEM_NUMBER(String iTEM_NUMBER) {
		ITEM_NUMBER = iTEM_NUMBER;
	}

	@XmlElement(name = "FORECAST_DATE")
	public String getFORECAST_DATE() {
		return FORECAST_DATE;
	}

	public void setFORECAST_DATE(String fORECAST_DATE) {
		FORECAST_DATE = fORECAST_DATE;
	}

	@XmlElement(name = "QUANTITY")
	public String getQUANTITY() {
		return QUANTITY;
	}

	public void setQUANTITY(String qUANTITY) {
		QUANTITY = qUANTITY;
	}

	@XmlElement(name = "PROJECT_NUMBER")
	public String getPROJECT_NUMBER() {
		return PROJECT_NUMBER;
	}

	public void setPROJECT_NUMBER(String pROJECT_NUMBER) {
		PROJECT_NUMBER = pROJECT_NUMBER;
	}

	@XmlElement(name = "SOURCE_HEADER_ID")
	public String getSOURCE_HEADER_ID() {
		return SOURCE_HEADER_ID;
	}

	public void setSOURCE_HEADER_ID(String sOURCE_HEADER_ID) {
		SOURCE_HEADER_ID = sOURCE_HEADER_ID;
	}

	@XmlElement(name = "SOURCE_LINE_ID")
	public String getSOURCE_LINE_ID() {
		return SOURCE_LINE_ID;
	}

	public void setSOURCE_LINE_ID(String sOURCE_LINE_ID) {
		SOURCE_LINE_ID = sOURCE_LINE_ID;
	}

}
