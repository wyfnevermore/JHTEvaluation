package com.chinaias.entity.erp.PTO;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="PTO_INFO")
public class PTO_INFO {
	private String IMPORT_ID;
	private String SOURCE_CODE;
	private String ORDER_NUMBER;
	private String LINE_NUMBER;
	private String COMPONENT_SEQ;
	private String ITEM_NUMBER;
	private String ENGLISH_ITEM_DESC;
	private String COMPONENT_QUANTITY;
	private String COMPONENT_COST_SCALE;
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
	@XmlElement(name = "ORDER_NUMBER")
	public String getORDER_NUMBER() {
		return ORDER_NUMBER;
	}
	public void setORDER_NUMBER(String oRDER_NUMBER) {
		ORDER_NUMBER = oRDER_NUMBER;
	}
	@XmlElement(name = "LINE_NUMBER")
	public String getLINE_NUMBER() {
		return LINE_NUMBER;
	}
	public void setLINE_NUMBER(String lINE_NUMBER) {
		LINE_NUMBER = lINE_NUMBER;
	}
	@XmlElement(name = "COMPONENT_SEQ")
	public String getCOMPONENT_SEQ() {
		return COMPONENT_SEQ;
	}
	public void setCOMPONENT_SEQ(String cOMPONENT_SEQ) {
		COMPONENT_SEQ = cOMPONENT_SEQ;
	}
	@XmlElement(name = "ITEM_NUMBER")
	public String getITEM_NUMBER() {
		return ITEM_NUMBER;
	}
	public void setITEM_NUMBER(String iTEM_NUMBER) {
		ITEM_NUMBER = iTEM_NUMBER;
	}
	@XmlElement(name = "ENGLISH_ITEM_DESC")
	public String getENGLISH_ITEM_DESC() {
		return ENGLISH_ITEM_DESC;
	}
	public void setENGLISH_ITEM_DESC(String eNGLISH_ITEM_DESC) {
		ENGLISH_ITEM_DESC = eNGLISH_ITEM_DESC;
	}
	@XmlElement(name = "COMPONENT_QUANTITY")
	public String getCOMPONENT_QUANTITY() {
		return COMPONENT_QUANTITY;
	}
	public void setCOMPONENT_QUANTITY(String cOMPONENT_QUANTITY) {
		COMPONENT_QUANTITY = cOMPONENT_QUANTITY;
	}
	@XmlElement(name = "COMPONENT_COST_SCALE")
	public String getCOMPONENT_COST_SCALE() {
		return COMPONENT_COST_SCALE;
	}
	public void setCOMPONENT_COST_SCALE(String cOMPONENT_COST_SCALE) {
		COMPONENT_COST_SCALE = cOMPONENT_COST_SCALE;
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
