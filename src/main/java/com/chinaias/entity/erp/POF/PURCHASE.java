package com.chinaias.entity.erp.POF;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="PURCHASE")
public class PURCHASE {
	private String IMPORT_ID;
	private String SOURCE_CODE;
	private String CONTRACT_NO;
	private String WIP_ENTITY_NAME;
	private String BUYER;
	private String VENDOR_NAME;
	private String VENDOR_SITE_CODE;
	private String UNIT_PRICE;
	private String TAX_CODE;
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
	@XmlElement(name = "CONTRACT_NO")
	public String getCONTRACT_NO() {
		return CONTRACT_NO;
	}
	public void setCONTRACT_NO(String cONTRACT_NO) {
		CONTRACT_NO = cONTRACT_NO;
	}
	@XmlElement(name = "WIP_ENTITY_NAME")
	public String getWIP_ENTITY_NAME() {
		return WIP_ENTITY_NAME;
	}
	public void setWIP_ENTITY_NAME(String wIP_ENTITY_NAME) {
		WIP_ENTITY_NAME = wIP_ENTITY_NAME;
	}
	@XmlElement(name = "BUYER")
	public String getBUYER() {
		return BUYER;
	}
	public void setBUYER(String bUYER) {
		BUYER = bUYER;
	}
	@XmlElement(name = "VENDOR_NAME")
	public String getVENDOR_NAME() {
		return VENDOR_NAME;
	}
	public void setVENDOR_NAME(String vENDOR_NAME) {
		VENDOR_NAME = vENDOR_NAME;
	}
	@XmlElement(name = "VENDOR_SITE_CODE")
	public String getVENDOR_SITE_CODE() {
		return VENDOR_SITE_CODE;
	}
	public void setVENDOR_SITE_CODE(String vENDOR_SITE_CODE) {
		VENDOR_SITE_CODE = vENDOR_SITE_CODE;
	}
	@XmlElement(name = "UNIT_PRICE")
	public String getUNIT_PRICE() {
		return UNIT_PRICE;
	}
	public void setUNIT_PRICE(String uNIT_PRICE) {
		UNIT_PRICE = uNIT_PRICE;
	}
	@XmlElement(name = "TAX_CODE")
	public String getTAX_CODE() {
		return TAX_CODE;
	}
	public void setTAX_CODE(String tAX_CODE) {
		TAX_CODE = tAX_CODE;
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
