package com.chinaias.entity.so;


/***********************************************************************
 * Module:  SoCommissions.java
 * Author:  afg_s
 * Purpose: Defines the Class SoCommissions
 ***********************************************************************/

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "SO_Commissions", schema = "jhteval")
@XmlRootElement(name="OE_COMMISSIONS")
/** @pdOid 87f9e6e8-1a8e-4e5d-86b9-fd1fcf074ebe */
public class SoCommissions {
   /** @pdOid 4402908b-2bf6-40d3-847c-8def5f758d0a */
   private java.lang.String commissionsId;
   /** 业务实体*/
   private java.lang.String orgName;
   /** 销售订单编号
    * 
    * @pdOid a3ea7060-7dd6-413a-8e2c-1e5e0869ea55 */
   private java.lang.String orderNumber;
   /** 销售订单行号
    * 
    * @pdOid 464d31a2-4f8c-4f19-88fa-7ebf32e1ff2b */
   private java.lang.String lineNum;
   /** 单据类型(头:HDR 行: LINE)
    * 
    * @pdOid aae05a01-a7a3-40db-b016-a6bfeaada861 */
   private java.lang.String sourceDocType;
   /** 佣金序号
    * 
    * @pdOid 464a271e-352b-48a3-9c29-6fcad7fd1bcc */
   private java.lang.String commissionLineNum;
   /** 佣金类型
    * 
    * @pdOid b11139ec-da1d-4862-acbf-b0efcfc476d6 */
   private java.lang.String commissionTypeName;
   /** 佣金比率
    * 
    * @pdOid e02e33ba-d7ed-4e1c-b2b4-f281c9db8aaa */
   private java.lang.String commissionRate;
   /** 佣金单价
    * 
    * @pdOid de4398ea-0971-4d10-81c3-fbfa2d1ba1d0 */
   private java.lang.String commissionPrice;
   /** 佣金收取方
    * 
    * @pdOid 5f991174-78c7-451e-8ab5-864ace74d4d0 */
   private java.lang.String vendorName;
   
   /** @pdOid 8167b5ea-bd85-44be-8a68-c7296330408f */
   private java.lang.String headerId;
   
   /** IMPORT_ID ERP接口用字段 */
   private java.lang.String importId;
   
   /** SOURCE_CODE ERP接口用字段*/
   private java.lang.String sourceCode;
   
   /** SOURCE_LINE_ID ERP接口用字段*/
   private java.lang.String sourceLineId;
   
   /** SOURCE_LINE_ID ERP接口用字段*/
   private java.lang.String sourceHeaderId;

	@Transient
	@XmlElement(name="SOURCE_HEADER_ID")
	public java.lang.String getSourceHeaderId() {
	return sourceHeaderId;
}

public void setSourceHeaderId(java.lang.String sourceHeaderId) {
	this.sourceHeaderId = sourceHeaderId;
}

	@Transient
	@XmlElement(name="IMPORT_ID")
	public java.lang.String getImportId() {
		return importId;
	}
	
	public void setImportId(java.lang.String importId) {
		this.importId = importId;
	}
	
	@Transient
	@XmlElement(name="SOURCE_CODE")
	public java.lang.String getSourceCode() {
		return sourceCode;
	}
	
	public void setSourceCode(java.lang.String sourceCode) {
		this.sourceCode = sourceCode;
	}
	
	@Transient
	@XmlElement(name="SOURCE_LINE_ID")
	public java.lang.String getSourceLineId() {
		return sourceLineId;
	}
	
	public void setSourceLineId(java.lang.String sourceLineId) {
		this.sourceLineId = sourceLineId;
	}
   
   @Id
   public java.lang.String getCommissionsId() {
      return commissionsId;
   }
   
   /** @param newCommissionsId */
   public void setCommissionsId(java.lang.String newCommissionsId) {
      commissionsId = newCommissionsId;
   }
   
   @XmlElement(name="ORG_NAME")
   public java.lang.String getOrgName() {
      return orgName;
   }
   
   /** @param newOrgName */
   public void setOrgName(java.lang.String newOrgName) {
      orgName = newOrgName;
   }
   
   @XmlElement(name="OE_ORDER_NUMBER")
   public java.lang.String getOrderNumber() {
      return orderNumber;
   }
   
   /** @param newOrderNumber */
   public void setOrderNumber(java.lang.String newOrderNumber) {
      orderNumber = newOrderNumber;
   }
   
   @XmlElement(name="OE_LINE_NUMBER")
   public java.lang.String getLineNum() {
      return lineNum;
   }
   
   /** @param newLineNum */
   public void setLineNum(java.lang.String newLineNum) {
      lineNum = newLineNum;
   }
   
   @XmlElement(name="SOURCE_DOC_TYPE")
   public java.lang.String getSourceDocType() {
      return sourceDocType;
   }
   
   /** @param newSourceDocType */
   public void setSourceDocType(java.lang.String newSourceDocType) {
      sourceDocType = newSourceDocType;
   }
   
   @XmlElement(name="COMMISSION_LINE_NUM")
   public java.lang.String getCommissionLineNum() {
      return commissionLineNum;
   }
   
   /** @param newCommissionLineNum */
   public void setCommissionLineNum(java.lang.String newCommissionLineNum) {
      commissionLineNum = newCommissionLineNum;
   }
   
   @XmlElement(name="COMMISSION_TYPE_NAME")
   public java.lang.String getCommissionTypeName() {
      return commissionTypeName;
   }
   
   /** @param newCommissionTypeName*/
   public void setCommissionTypeName(java.lang.String newCommissionTypeName) {
      commissionTypeName = newCommissionTypeName;
   }
   
   @XmlElement(name="COMMISSION_RATE")
   public java.lang.String getCommissionRate() {
      return commissionRate;
   }
   
   /** @param newCommissionRate */
   public void setCommissionRate(java.lang.String newCommissionRate) {
      commissionRate = newCommissionRate;
   }
   
   @XmlElement(name="COMMISSION_PRICE")
   public java.lang.String getCommissionPrice() {
      return commissionPrice;
   }
   
   /** @param newCommissionPrice */
   public void setCommissionPrice(java.lang.String newCommissionPrice) {
      commissionPrice = newCommissionPrice;
   }
   
   @XmlElement(name="VENDOR_NAME")
   public java.lang.String getVendorName() {
      return vendorName;
   }
   
   /** @param newVendorName */
   public void setVendorName(java.lang.String newVendorName) {
      vendorName = newVendorName;
   }
   
   @XmlElement(name="SOURCE_HEADER_ID")
   public java.lang.String getHeaderId() {
      return headerId;
   }
   
   /** @param newHeaderId */
   public void setHeaderId(java.lang.String newHeaderId) {
      headerId = newHeaderId;
   }

}