package com.chinaias.entity.po;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/***********************************************************************
 * Module:  PoHeader.java
 * Author:  afg_s
 * Purpose: Defines the Class PoHeader
 ***********************************************************************/

@Entity
@Table(name = "PO_HEADER", schema = "jhteval")
/** @pdOid 2324e7be-c6d7-4372-be95-a8c713ecf832 */
@XmlRootElement(name="PO_HEADER")
public class PoHeader {
   /** @pdOid df3e75bd-c68c-4225-88eb-4178c22facc5 */
   private java.lang.String headerId;
   /** 业务实体
    * 
    * @pdOid 981c74d3-eb40-4230-be2d-b4609bfafb1d */
   private java.lang.String orgCode;
   /** PO版本
    * 
    * @pdOid e5986826-417b-4a3a-a89b-664b9f44230c */
   private java.lang.String documentNum;
   /** 采购员名称
    * 
    * @pdOid c100784d-e2d3-4e61-8468-1e07b898cc6d */
   private java.lang.String agentName;
   /** 供应商名称
    * 
    * @pdOid 3bce027d-a480-475a-b8f9-e85839f55671 */
   private java.lang.String vendorName;
   /** 供应商联系人
    * 
    * @pdOid 9666db6b-ef2e-4c54-957f-4ba38658b872 */
   private java.lang.String vendorContact;
   /** 币种
    * 
    * @pdOid eb203072-a1b0-4a18-9414-14ef757884ab */
   private java.lang.String currencyCode;
   /** 摘要
    * 
    * @pdOid 020bbdbb-608d-417e-abde-4f3550bc0556 */
   private java.lang.String comments;
   /** 说明弹性域3
    * 
    * @pdOid e4ca028a-ff1d-41ba-b3df-1f53dc2578b2 */
   private java.lang.String attribute3;
   /** 说明弹性域4
    * 
    * @pdOid 8e873a0a-b83d-4f4c-b00b-031fc99c1f66 */
   private java.lang.String attribute4;
   /** 说明弹性域5
    * 
    * @pdOid 32d10360-cd36-4387-b1c4-63b4df6faf6c */
   private java.lang.String attribute5;
   /** 说明弹性域6
    * 
    * @pdOid e9daea22-6198-46ad-870e-127f06b90962 */
   private java.lang.String attribute6;
   /** 说明弹性域13
    * 
    * @pdOid 52a42472-19ce-4383-bac0-b4a9a0dc9560 */
   private java.lang.String attribute13;
   /** IMPORT_ID ERP接口用字段
    * 
    * @pdOid 52a42472-19ce-4383-bac0-b4a9a0dc9560 */
   private java.lang.String importId;
   @Transient
   @XmlElement(name="IMPORT_ID")
   public java.lang.String getImportId() {
	return importId;
}

public void setImportId(java.lang.String importId) {
	this.importId = importId;
}

/** @pdOid 6e99122c-514e-41a1-9a53-85507b228363 */

   @Id
   public java.lang.String getHeaderId() {
      return headerId;
   }
   
   /** @param newHeaderId
    * @pdOid 880f0848-c401-44cd-8b37-d0f60d44a89e */
   public void setHeaderId(java.lang.String newHeaderId) {
      headerId = newHeaderId;
   }
   
   /** @pdOid 378f724e-9cad-45f7-8853-2b00cf436705 */
   @XmlElement(name="ORG_CODE")
   public java.lang.String getOrgCode() {
      return orgCode;
   }
   
   /** @param newOrgCode
    * @pdOid 1fc37776-2cfc-4e85-b89e-0c54cc72e02c */
   public void setOrgCode(java.lang.String newOrgCode) {
      orgCode = newOrgCode;
   }
   
   /** @pdOid 187ef194-f01b-480d-a07d-c2d383a104fa */
   @XmlElement(name="DOCUMENT_NUM")
   public java.lang.String getDocumentNum() {
      return documentNum;
   }
   
   /** @param newDocumentNum
    * @pdOid 58b7709c-6970-4cd9-a002-19ddc42b6e65 */
   public void setDocumentNum(java.lang.String newDocumentNum) {
      documentNum = newDocumentNum;
   }
   
   /** @pdOid 89adf9f4-463d-4f23-a479-294761723d4a */
   @XmlElement(name="AGENT_NAME")
   public java.lang.String getAgentName() {
      return agentName;
   }
   
   /** @param newAgentName
    * @pdOid 1ada5006-c820-4036-bf2f-a39a8ebb4874 */
   public void setAgentName(java.lang.String newAgentName) {
      agentName = newAgentName;
   }
   
   /** @pdOid d66232f3-98d7-49ac-afc0-f5934d3b5207 */
   @XmlElement(name="VENDOR_NAME")
   public java.lang.String getVendorName() {
      return vendorName;
   }
   
   /** @param newVendorName
    * @pdOid 6798afc8-fa5f-4ae7-b587-a82a9b804c7e */
   public void setVendorName(java.lang.String newVendorName) {
      vendorName = newVendorName;
   }
   
   /** @pdOid 35d0ff21-6749-436b-98dc-3a39502c51b6 */
   @XmlElement(name="VENDOR_CONTACT")
   public java.lang.String getVendorContact() {
      return vendorContact;
   }
   
   /** @param newVendorContact
    * @pdOid f26a6c99-0562-4def-b376-48acf253ec8d */
   public void setVendorContact(java.lang.String newVendorContact) {
      vendorContact = newVendorContact;
   }
   
   /** @pdOid b5fe9d77-9181-4468-ae1b-58eafd8f4783 */
   @XmlElement(name="CURRENCY_CODE")
   public java.lang.String getCurrencyCode() {
      return currencyCode;
   }
   
   /** @param newCurrencyCode
    * @pdOid 3502bc48-d5d0-4ecc-b567-998cc8e63fe1 */
   public void setCurrencyCode(java.lang.String newCurrencyCode) {
      currencyCode = newCurrencyCode;
   }
   
   /** @pdOid eb8b548c-dd61-4201-8a42-732ba9b9573a */
   @XmlElement(name="COMMENTS")
   public java.lang.String getComments() {
      return comments;
   }
   
   /** @param newComments
    * @pdOid 86b3dfe7-f428-455b-bde6-a73270478bda */
   public void setComments(java.lang.String newComments) {
      comments = newComments;
   }
   
   /** @pdOid 23f81186-a350-41cb-93be-304abf1b8651 */
   @XmlElement(name="ATTRIBUTE3")
   public java.lang.String getAttribute3() {
      return attribute3;
   }
   
   /** @param newAttribute3
    * @pdOid 4a184c9e-0d92-4440-9392-8c97c34cfe62 */
   public void setAttribute3(java.lang.String newAttribute3) {
      attribute3 = newAttribute3;
   }
   
   /** @pdOid 36561f20-7a32-4332-87b0-c497e1acd1b1 */
   @XmlElement(name="ATTRIBUTE4")
   public java.lang.String getAttribute4() {
      return attribute4;
   }
   
   /** @param newAttribute4
    * @pdOid 614c453e-b370-4024-b1e6-f176465cdd34 */
   public void setAttribute4(java.lang.String newAttribute4) {
      attribute4 = newAttribute4;
   }
   
   /** @pdOid f18965cb-9392-451f-addb-e75b68e72f9c */
   @XmlElement(name="ATTRIBUTE5")
   public java.lang.String getAttribute5() {
      return attribute5;
   }
   
   /** @param newAttribute5
    * @pdOid e0cc3571-0388-430e-98c2-20288d1b67e5 */
   public void setAttribute5(java.lang.String newAttribute5) {
      attribute5 = newAttribute5;
   }
   
   /** @pdOid 9335928e-e90f-4a0b-9363-4f971703bc26 */
   @XmlElement(name="ATTRIBUTE6")
   public java.lang.String getAttribute6() {
      return attribute6;
   }
   
   /** @param newAttribute6
    * @pdOid 35a5099f-73bc-4fc7-9c78-7f08a31028b7 */
   public void setAttribute6(java.lang.String newAttribute6) {
      attribute6 = newAttribute6;
   }
   
   /** @pdOid db2cb0e3-c723-4e3f-8bd8-9ad386e0d701 */
   @XmlElement(name="ATTRIBUTE13")
   public java.lang.String getAttribute13() {
      return attribute13;
   }
   
   /** @param newAttribute13
    * @pdOid 0fe5c5a8-1aff-495f-ba8f-ff497f834a9d */
   public void setAttribute13(java.lang.String newAttribute13) {
      attribute13 = newAttribute13;
   }

}