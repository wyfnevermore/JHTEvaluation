package com.chinaias.entity.po;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/***********************************************************************
 * Module:  PoLine.java
 * Author:  afg_s
 * Purpose: Defines the Class PoLine
 ***********************************************************************/

@Entity
@Table(name = "PO_LINE", schema = "jhteval")
/** @pdOid 062d08f1-a395-4dc5-879d-99ee601900a2 */
@XmlRootElement(name="PO_LINE")
public class PoLine {
   /** @pdOid d6be4010-b077-4126-b003-56c6a5a9091a */
   private java.lang.String lineId;
   /** 行号
    * 
    * @pdOid aeffe02f-94b1-4ec1-b0cf-a783a250f7ed */
   private java.lang.String lineNum;
   /** 发运行号
    * 
    * @pdOid 217460cd-9331-41ee-aa90-69f2ddb3d923 */
   private java.lang.String shipmentNum;
   /** 物料编码
    * 
    * @pdOid 411da8e3-e963-4d0d-8ae1-7269977e913d */
   private java.lang.String itemNumber;
   /** 单位
    * 
    * @pdOid ba319317-7db1-48cf-8dd1-656d801e5686 */
   private java.lang.String unitOfMeasure;
   /** 数量
    * 
    * @pdOid d3e93ded-0e82-4670-93a0-c4b0948d5cb8 */
   private java.lang.String quantity;
   /** 单价
    * 
    * @pdOid 30e23402-2e3f-4d49-aa83-d94008b2f17b */
   private java.lang.String unitPrice;
   /** 行类型
    * 
    * @pdOid 5236a4f4-e357-47ab-a580-f1b0e9ed446c */
   private java.lang.String lineType;
   /** 税率
    * 
    * @pdOid cf2b8f97-a6fd-43f2-b134-cb74128260ce */
   private java.lang.String lineAttribute1;
   /** 含税价格
    * 
    * @pdOid 7c770621-4784-4a41-9c62-16c31bdf97da */
   private java.lang.String lineAttribute3;
   /** 项目
    * 
    * @pdOid 196c5560-45db-4f58-9299-3950007a7757 */
   private java.lang.String lineAttribute4;
   
   /** 加工合同号
    * 
    * @pdOid 196c5560-45db-4f58-9299-3950007a7757 */
   private java.lang.String contractNo;
   
   /** ebs工单号
    * 
    * @pdOid 196c5560-45db-4f58-9299-3950007a7757 */
   private java.lang.String wipEntityName;
   
   /** 辅料说明
    * 
    * @pdOid 196c5560-45db-4f58-9299-3950007a7757 */
   private java.lang.String accessExplain;
   
   
   /** @pdOid 324e3f84-c96b-484f-9f10-51afecc0308c */
   /** HeaderID
    * 
    * @pdOid 196c5560-45db-4f58-9299-3950007a7757 */
   private java.lang.String HeaderID;
   
   /** @pdOid 324e3f84-c96b-484f-9f10-51afecc0308c */
   /** importId
    * 
    * @pdOid 196c5560-45db-4f58-9299-3950007a7757 */
   private java.lang.String importId;

   @Transient
   @XmlElement(name="IMPORT_ID")
   public java.lang.String getImportId() {
	return importId;
}

public void setImportId(java.lang.String importId) {
	this.importId = importId;
}

public java.lang.String getHeaderID() {
	return HeaderID;
}

public void setHeaderID(java.lang.String headerID) {
	HeaderID = headerID;
}

@Id
   public java.lang.String getLineId() {
      return lineId;
   }
   
   /** @param newLineId
    * @pdOid 48e926fc-c873-40fb-aff8-f03916dac6e3 */
   public void setLineId(java.lang.String newLineId) {
      lineId = newLineId;
   }
   
   /** @pdOid e48da321-d374-4cc8-a938-a6b9679a8727 */
   @XmlElement(name="LINE_NUM")
   public java.lang.String getLineNum() {
      return lineNum;
   }
   
   /** @param newLineNum
    * @pdOid 7458ce64-ed7f-4f11-910f-2953286a1d49 */
   public void setLineNum(java.lang.String newLineNum) {
      lineNum = newLineNum;
   }
   
   /** @pdOid 5481f4cf-73ef-469e-ba31-03a1b27dfcf1 */
   @XmlElement(name="SHIPMENT_NUM")
   public java.lang.String getShipmentNum() {
      return shipmentNum;
   }
   
   /** @param newShipmentNum
    * @pdOid 6e9d94ab-2e4b-49ff-b69d-1339e7b0ced2 */
   public void setShipmentNum(java.lang.String newShipmentNum) {
      shipmentNum = newShipmentNum;
   }
   
   /** @pdOid 7f3af557-d2a3-4727-a791-7fc4ca7f1c23 */
   @XmlElement(name="ITEM_NUMBER")
   public java.lang.String getItemNumber() {
      return itemNumber;
   }
   
   /** @param newItemNumber
    * @pdOid e8e22ebb-6d99-48b1-9d92-c4d04dabe8d6 */
   public void setItemNumber(java.lang.String newItemNumber) {
      itemNumber = newItemNumber;
   }
   
   /** @pdOid 3a842150-900e-4674-a8a7-b6353a4402f7 */
   @XmlElement(name="UNIT_OF_MEASURE")
   public java.lang.String getUnitOfMeasure() {
      return unitOfMeasure;
   }
   
   /** @param newUnitOfMeasure
    * @pdOid c8aa60d1-5273-4ad3-8038-f57ffd36d509 */
   public void setUnitOfMeasure(java.lang.String newUnitOfMeasure) {
      unitOfMeasure = newUnitOfMeasure;
   }
   
   /** @pdOid 2b18a04e-252f-47c6-acdd-d3b2293a57c3 */
   @XmlElement(name="QUANTITY")
   public java.lang.String getQuantity() {
      return quantity;
   }
   
   /** @param newQuantity
    * @pdOid 36a62fb2-2b93-4262-9c59-6346900218f9 */
   public void setQuantity(java.lang.String newQuantity) {
      quantity = newQuantity;
   }
   
   /** @pdOid de90d9f6-2504-48ab-90bd-db67cd12f141 */
   @XmlElement(name="UNIT_PRICE")
   public java.lang.String getUnitPrice() {
      return unitPrice;
   }
   
   /** @param newUnitPrice
    * @pdOid 767e48cc-b2d1-4ed4-82ab-2640e6e635d5 */
   public void setUnitPrice(java.lang.String newUnitPrice) {
      unitPrice = newUnitPrice;
   }
   
   /** @pdOid e19a3acd-24ef-4377-964c-5e87175ecff1 */
   @XmlElement(name="LINE_TYPE")
   public java.lang.String getLineType() {
      return lineType;
   }
   
   /** @param newLineType
    * @pdOid 5ab2287c-aa99-4474-bfcb-df44ccaf1acf */
   public void setLineType(java.lang.String newLineType) {
      lineType = newLineType;
   }
   
   /** @pdOid 4de29bdf-5b12-4972-8d0d-9b98a69d0068 */
   @XmlElement(name="LINE_ATTRIBUTE1")
   public java.lang.String getLineAttribute1() {
      return lineAttribute1;
   }
   
   /** @param newLineAttribute1
    * @pdOid f73c3171-a7f8-4790-9a19-4f9943a57292 */
   public void setLineAttribute1(java.lang.String newLineAttribute1) {
      lineAttribute1 = newLineAttribute1;
   }
   
   /** @pdOid 14f06572-ee37-4b78-8dd5-58aa32eeab30 */
   @XmlElement(name="LINE_ATTRIBUTE3")
   public java.lang.String getLineAttribute3() {
      return lineAttribute3;
   }
   
   /** @param newLineAttribute3
    * @pdOid aea2a591-c835-42c7-b430-afe5d0eb3b0a */
   public void setLineAttribute3(java.lang.String newLineAttribute3) {
      lineAttribute3 = newLineAttribute3;
   }
   
   /** @pdOid 05ef04a1-6ec4-4868-b10e-9f1831fd9252 */
   @XmlElement(name="LINE_ATTRIBUTE4")
   public java.lang.String getLineAttribute4() {
      return lineAttribute4;
   }
   
   /** @param newLineAttribute4
    * @pdOid 6032a570-6c14-4f8b-8e47-6d8166ba958b */
   public void setLineAttribute4(java.lang.String newLineAttribute4) {
      lineAttribute4 = newLineAttribute4;
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

@XmlElement(name="ACCESS_EXPLAIN")
public java.lang.String getAccessExplain() {
	return accessExplain;
}

public void setAccessExplain(java.lang.String accessExplain) {
	this.accessExplain = accessExplain;
}

}