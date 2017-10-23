package com.chinaias.entity.po;

import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/***********************************************************************
 * Module:  PoLine.java
 * Author:  afg_s
 * Purpose: Defines the Class PoLine
 ***********************************************************************/

//@Entity
/** @pdOid 062d08f1-a395-4dc5-879d-99ee601900a2 */
@XmlRootElement(name="PURCHASE")
public class PoLineOutOrder {
	/** @pdOid 324e3f84-c96b-484f-9f10-51afecc0308c */
   /** importId
    * 
    * @pdOid 196c5560-45db-4f58-9299-3950007a7757 */
   private java.lang.String importId;
   
   /** @pdOid d6be4010-b077-4126-b003-56c6a5a9091a */
   private java.lang.String sourceCode;
   
   /** 加工合同号
    * 
    * @pdOid 196c5560-45db-4f58-9299-3950007a7757 */
   private java.lang.String contractNo;
   
   /** EBS工单号
    * 
    * @pdOid 196c5560-45db-4f58-9299-3950007a7757 */
   private java.lang.String wipEntityName;
   
   /** 采购员
    * 
    * @pdOid aeffe02f-94b1-4ec1-b0cf-a783a250f7ed */
   private java.lang.String buyer;
   
   /** 供应商名称
    * 
    * @pdOid 30e23402-2e3f-4d49-aa83-d94008b2f17b */
   private java.lang.String vendorName;
   
   /** 供应商地点
    * 
    * @pdOid cf2b8f97-a6fd-43f2-b134-cb74128260ce */
   private java.lang.String vendorSiteCode;
   
   /** 外协费用单价
    * 
    * @pdOid cf2b8f97-a6fd-43f2-b134-cb74128260ce */
   private java.lang.String unitPrice;
  
   /** 税码
    * 
    * @pdOid cf2b8f97-a6fd-43f2-b134-cb74128260ce */
   private java.lang.String taxCode;
   
   /** 来源头标识
    * 
    * @pdOid cf2b8f97-a6fd-43f2-b134-cb74128260ce */
   private java.lang.String sourceHeaderId;
   
   /** 来源行标识
    * 
    * @pdOid cf2b8f97-a6fd-43f2-b134-cb74128260ce */
   private java.lang.String sourceLineId;


    @XmlElement(name="IMPORT_ID")
	public java.lang.String getImportId() {
		return importId;
	}
	
	public void setImportId(java.lang.String importId) {
		this.importId = importId;
	}
	
	@XmlElement(name="SOURCE_CODE")
	public java.lang.String getSourceCode() {
		return sourceCode;
	}
	
	public void setSourceCode(java.lang.String sourceCode) {
		this.sourceCode = sourceCode;
	}
	
	@XmlElement(name="CONTRACT_NO")
	public java.lang.String getContractNo() {
		return contractNo;
	}
	
	public void setContractNo(java.lang.String contractNo) {
		this.contractNo = contractNo;
	}
	
	@XmlElement(name="WIP_ENTITY_NAME")
	public java.lang.String getWipEntityName() {
		return wipEntityName;
	}
	
	public void setWipEntityName(java.lang.String wipEntityName) {
		this.wipEntityName = wipEntityName;
	}
	
	@XmlElement(name="BUYER")
	public java.lang.String getBuyer() {
		return buyer;
	}
	
	public void setBuyer(java.lang.String buyer) {
		this.buyer = buyer;
	}
	
	@XmlElement(name="VENDOR_NAME")
	public java.lang.String getVendorName() {
		return vendorName;
	}
	
	public void setVendorName(java.lang.String vendorName) {
		this.vendorName = vendorName;
	}
	
	@XmlElement(name="VENDOR_SITE_CODE")
	public java.lang.String getVendorSiteCode() {
		return vendorSiteCode;
	}
	
	public void setVendorSiteCode(java.lang.String vendorSiteCode) {
		this.vendorSiteCode = vendorSiteCode;
	}
	
	@XmlElement(name="UNIT_PRICE")
	public java.lang.String getUnitPrice() {
		return unitPrice;
	}
	
	public void setUnitPrice(java.lang.String unitPrice) {
		this.unitPrice = unitPrice;
	}
	
	@XmlElement(name="TAX_CODE")
	public java.lang.String getTaxCode() {
		return taxCode;
	}
	
	public void setTaxCode(java.lang.String taxCode) {
		this.taxCode = taxCode;
	}
	
	@XmlElement(name="SOURCE_HEADER_ID")
	public java.lang.String getSourceHeaderId() {
		return sourceHeaderId;
	}
	
	public void setSourceHeaderId(java.lang.String sourceHeaderId) {
		this.sourceHeaderId = sourceHeaderId;
	}
	
	@XmlElement(name="SOURCE_LINE_ID")
	public java.lang.String getSourceLineId() {
		return sourceLineId;
	}
	
	public void setSourceLineId(java.lang.String sourceLineId) {
		this.sourceLineId = sourceLineId;
	}
}