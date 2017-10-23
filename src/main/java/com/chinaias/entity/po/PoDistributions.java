package com.chinaias.entity.po;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/***********************************************************************
 * Module:  PoDistributions.java
 * Author:  afg_s
 * Purpose: Defines the Class PoDistributions
 ***********************************************************************/

@Entity
@Table(name = "PO_DISTRIBUTIONS", schema = "jhteval")
/** @pdOid 92b256b4-6e4f-4a4d-ad52-c5c2854d3ea5 */
@XmlRootElement(name="PO_DISTRIBUTION")
public class PoDistributions {
   /** @pdOid b4b08a32-d543-42a6-8336-105070301be2 */
   private java.lang.String distributionsId;
   /** 行号
    * 
    * @pdOid bcacb7d8-c210-4c00-83d1-fb8a21553fad */
   private java.lang.String lineNum;
   /** 发运行编号
    * 
    * @pdOid a7853fe9-d71d-440f-a55e-a91f30b78d7f */
   private java.lang.String shipmentNum1;
   /** 分配行号
    * 
    * @pdOid 9ad66166-f5c4-4b5a-b72c-cc75c8e64e8a */
   private java.lang.String distributionNum;
   /** 数量
    * 
    * @pdOid 11cc9f71-1372-4a67-b38f-9d719d76631b */
   private java.lang.String quantityOrdered;
   /** 项目
    * 
    * @pdOid aaf1320f-733c-4bff-81a8-d592fc7281a7 */
   private java.lang.String project;
   /** 项目
    * 
    * @pdOid aaf1320f-733c-4bff-81a8-d592fc7281a7 */
   private java.lang.String importId;
   
   /** @pdOid 64b2aeed-d4da-46d3-856c-81d930d99773 */

   @Id
   public java.lang.String getDistributionsId() {
      return distributionsId;
   }

   @Transient
   @XmlElement(name="IMPORT_ID")
   public java.lang.String getImportId() {
	return importId;
}

public void setImportId(java.lang.String importId) {
	this.importId = importId;
}

/** @param newDistributionsId
    * @pdOid 843b1ded-6834-4026-ab73-bb749f27cc7f */
   public void setDistributionsId(java.lang.String newDistributionsId) {
      distributionsId = newDistributionsId;
   }
   
   /** @pdOid c9a1f845-4567-42cd-8fde-fdb5f9c18c41 */
   @XmlElement(name="LINE_NUM")
   public java.lang.String getLineNum() {
      return lineNum;
   }
   
   /** @param newLineNum
    * @pdOid 0468ddd3-9873-4551-8f24-0b1cdc8d2bb2 */
   public void setLineNum(java.lang.String newLineNum) {
      lineNum = newLineNum;
   }
   
   /** @pdOid 0f4b91db-4a42-4ae4-b221-2b201819b84c */
   @XmlElement(name="SHIPMENT_NUM")
   public java.lang.String getShipmentNum1() {
      return shipmentNum1;
   }
   
   /** @param newShipmentNum1
    * @pdOid d42ff664-5112-4c71-9d45-51c067b2fc58 */
   public void setShipmentNum1(java.lang.String newShipmentNum1) {
      shipmentNum1 = newShipmentNum1;
   }
   
   /** @pdOid 841bc501-8d0b-49bb-b1f6-84e3b3e45cdd */
   @XmlElement(name="DISTRIBUTION_NUM")
   public java.lang.String getDistributionNum() {
      return distributionNum;
   }
   
   /** @param newDistributionNum
    * @pdOid b2fe0720-2729-4e3d-9ca1-e65c00f0e604 */
   public void setDistributionNum(java.lang.String newDistributionNum) {
      distributionNum = newDistributionNum;
   }
   
   /** @pdOid b5947b97-151f-4e9b-b29d-bd72396cd79a */
   @XmlElement(name="QUANTITY_ORDERED")
   public java.lang.String getQuantityOrdered() {
      return quantityOrdered;
   }
   
   /** @param newQuantityOrdered
    * @pdOid 0da22f36-1c58-4bfa-9a6a-634646ba9564 */
   public void setQuantityOrdered(java.lang.String newQuantityOrdered) {
      quantityOrdered = newQuantityOrdered;
   }
   
   /** @pdOid 7d5b25e9-839e-48db-9934-f10f01897928 */
   @XmlElement(name="PROJECT")
   public java.lang.String getProject() {
      return project;
   }
   
   /** @param newProject
    * @pdOid 4197448b-47cb-4bbb-8480-1e4d764412cc */
   public void setProject(java.lang.String newProject) {
      project = newProject;
   }

}