package com.chinaias.entity;

/***********************************************************************
 * Module:  QoLine.java
 * Author:  afg_s
 * Purpose: Defines the Class QoLine
 ***********************************************************************/


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.chinaias.util.JsonDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;


@Entity
@Table(name = "QO_Line", schema = "jhteval")
/** @pdOid 2b67a8f3-b34d-413c-b716-c782a164b067 */
public class QoLine {
   /** @pdOid 7ccfa2a3-1376-454a-bc91-27099a73971f */
   private java.lang.String lineId;
   /** @pdOid 259e81b7-d92b-4c51-8d5b-fcd2c0a06c49 */
   private java.lang.String headerId;
   /** 成品名称
    * 
    * @pdOid 27cef1ff-01e1-431a-84dc-d1f40ec8af54 */
   private java.lang.String productName;
   /** 成品SKU
    * 
    * @pdOid 359bb227-b053-42af-94f5-8b210cec35b8 */
   private java.lang.String productSku;
   /** 测算单号
    * 
    * @pdOid 15fc047b-6abd-45e1-9553-4c7b3214ae07 */
   private java.lang.String evaluationNumber;
   /** 测算版本
    * 
    * @pdOid 88b8beda-9e72-43ad-812e-7db0c14f30af */
   private int evaluationVersion;
   /** 规格
    * 
    * @pdOid e44986c1-b272-4a8d-9d2d-e7d70617adcf */
   private java.lang.String specification;
   /** 执行毛利率
    * 
    * @pdOid 972d95b4-9e96-4419-b8db-9d65bdb8dd2c */
   private Float performGrossMargin;
   /** 测算单价
    * 
    * @pdOid f8b587c1-86eb-43eb-b870-0f6c9e62d4d6 */
   private Float evaluationPrice;
   /** 执行单价
    * 
    * @pdOid f3f7f891-747a-4012-880a-5dedcc14657e */
   private Float performPrice;
   /** 平摊数量
    * 
    * @pdOid d2fd20b9-a4a6-4936-a42f-32d41de34250 */
   private Integer splitAmount;
   /** 包装描述
    * 
    * @pdOid e648cdbe-0870-4a06-9dcb-e2f205f919d2 */
   private java.lang.String packageDes;
   /** 成品描述
    * 
    * @pdOid fa12d02f-b179-4ddf-843d-74fd07680494 */
   private java.lang.String productDes;
   /** 原材料描述
    * 
    * @pdOid 13857a25-bff3-4fe5-8d8c-3bea0b6aafcd */
   private java.lang.String materialDes;
   /** 备注
    * 
    * @pdOid d359cd9e-1b9d-4f22-b25b-597df3916432 */
   private java.lang.String qoRemark;
   /** 图片，JSON
    * 
    * @pdOid 3fdcd887-078e-4a27-ac9b-d545b38be10c */
   private java.lang.String qoPicture;
   /** 销售订单用字段，法律实体
    * 
    * @pdOid 4cf9b6c8-c5cf-4c49-aae6-fd8e69bd9500 */
   private java.lang.String legalEntity;
   /** 销售订单用字段，订单类型
    * 
    * @pdOid 4ca1658d-b264-43cc-8fde-cc1ce8ffbd69 */
   private java.lang.String orderType;
   /** 销售订单用字段，价目表
    * 
    * @pdOid 0b314605-70a5-4946-99d1-81eef9b17ad5 */
   private java.lang.String priceTable;
   /** 销售订单用字段，业务类型【加工 、分销、经销、代理】
    * 
    * @pdOid 9824d117-2a54-4558-b616-e6f261a4b29f */
   private java.lang.String businessType;
   /** 销售订单用字段，仓库
    * 
    * @pdOid 21eb6fc7-409a-43d2-8bef-ab0da00317c7 */
   private java.lang.String qoWarehouse;
   /** 销售订单用，数量
    * 
    * @pdOid db14d315-cc3a-4324-88ba-601caff5b5da */
   private Integer qoQuantity;
   /** 销售订单用，单位
    * 
    * @pdOid 43782344-6df2-4f83-9c0b-34817d3aeaf5 */
   private java.lang.String qoUnit;
   /** 销售订单用，交货日期
    * 
    * @pdOid f87174ee-6a8b-48ea-8378-28446ff925d2 */
   private java.util.Date deliveryData;
   /** 采购订单用，供应商
    * 
    * @pdOid 004acdeb-e4fa-45da-936f-b22e734a9c0a */
   private java.lang.String supplier;
   /** 采购订单用，币种
    * 
    * @pdOid 65cf5122-a56d-4e9b-98d4-6c9380da5c95 */
   private java.lang.String currency;
   
   public java.lang.String getQoRemark() {
	return qoRemark;
}

public void setQoRemark(java.lang.String qoRemark) {
	this.qoRemark = qoRemark;
}

public java.lang.String getQoPicture() {
	return qoPicture;
}

public void setQoPicture(java.lang.String qoPicture) {
	this.qoPicture = qoPicture;
}

public java.lang.String getQoWarehouse() {
	return qoWarehouse;
}

public void setQoWarehouse(java.lang.String qoWarehouse) {
	this.qoWarehouse = qoWarehouse;
}

public Integer getQoQuantity() {
	return qoQuantity;
}

public void setQoQuantity(Integer qoQuantity) {
	this.qoQuantity = qoQuantity;
}

public java.lang.String getQoUnit() {
	return qoUnit;
}

public void setQoUnit(java.lang.String qoUnit) {
	this.qoUnit = qoUnit;
}

@Id
/** @pdOid eca51c9f-6a99-4fdb-a7a4-85b69f92ad9d */
   public java.lang.String getLineId() {
      return lineId;
   }
   
   /** @param newLineId
    * @pdOid 838ca628-a4b2-4551-a3ba-d3dc78177d98 */
   public void setLineId(java.lang.String newLineId) {
      lineId = newLineId;
   }
   
   /** @pdOid fb9ea325-1500-42b5-943c-8acbc025b08c */
   public java.lang.String getHeaderId() {
      return headerId;
   }
   
   /** @param newHeaderId
    * @pdOid dd5936c1-46d9-4a12-a04d-ed23b623f2c0 */
   public void setHeaderId(java.lang.String newHeaderId) {
      headerId = newHeaderId;
   }
   
   /** @pdOid 42063816-8390-46dc-9e7e-48b630819ee8 */
   public java.lang.String getProductName() {
      return productName;
   }
   
   /** @param newProductName
    * @pdOid 558e5c6f-fc94-4cf8-8883-e191ca5ade19 */
   public void setProductName(java.lang.String newProductName) {
      productName = newProductName;
   }
   
   /** @pdOid c5e20e5f-db1c-4ac3-a891-610703f7e696 */
   public java.lang.String getProductSku() {
      return productSku;
   }
   
   /** @param newProductSku
    * @pdOid aeb1161b-d126-4f4a-a28e-d71b97140e8f */
   public void setProductSku(java.lang.String newProductSku) {
      productSku = newProductSku;
   }
   
   /** @pdOid 74a9dc81-6d0b-4f5a-91c7-041ab82240e1 */
   public java.lang.String getEvaluationNumber() {
      return evaluationNumber;
   }
   
   /** @param newEvaluationNumber
    * @pdOid b3f66376-6d0a-4a8d-9f24-2e23bb0cb7da */
   public void setEvaluationNumber(java.lang.String newEvaluationNumber) {
      evaluationNumber = newEvaluationNumber;
   }
   
   /** @pdOid 02ea7b70-c83d-472c-8906-89328ea9ae7f */
   public int getEvaluationVersion() {
      return evaluationVersion;
   }
   
   /** @param newEvaluationVersion
    * @pdOid 3760ba2b-1f51-4f6b-9a15-f39c70508f73 */
   public void setEvaluationVersion(int newEvaluationVersion) {
      evaluationVersion = newEvaluationVersion;
   }
   
   /** @pdOid 2474a9c5-66c9-4b3a-8c66-212702321b26 */
   public java.lang.String getSpecification() {
      return specification;
   }
   
   /** @param newSpecification
    * @pdOid b9088907-8e5f-417a-b40c-840285246959 */
   public void setSpecification(java.lang.String newSpecification) {
      specification = newSpecification;
   }
   
   /** @pdOid c72bbc49-e769-447b-93cf-0aba80daa071 */
   public Float getPerformGrossMargin() {
      return performGrossMargin;
   }
   
   /** @param newPerformGrossMargin
    * @pdOid d8e50be1-edc5-42c6-b814-daaa01176813 */
   public void setPerformGrossMargin(Float newPerformGrossMargin) {
      performGrossMargin = newPerformGrossMargin;
   }
   
   /** @pdOid 85e8335e-1bec-479a-8c29-1cbe4ccd030a */
   public Float getEvaluationPrice() {
      return evaluationPrice;
   }
   
   /** @param newEvaluationPrice
    * @pdOid bf5bb555-cc97-4136-be6b-0daaf5ca06b9 */
   public void setEvaluationPrice(Float newEvaluationPrice) {
      evaluationPrice = newEvaluationPrice;
   }
   
   /** @pdOid 2c9b3cd3-105f-47aa-ae05-add1c08aa4b4 */
   public Float getPerformPrice() {
      return performPrice;
   }
   
   /** @param newPerformPrice
    * @pdOid 6d5d3a58-9b12-4db9-b648-5a73442464e2 */
   public void setPerformPrice(Float newPerformPrice) {
      performPrice = newPerformPrice;
   }
   
   /** @pdOid 3f161dea-ef27-4ad0-a486-b5d8711867d0 */
   public Integer getSplitAmount() {
      return splitAmount;
   }
   
   /** @param newSplitAmount
    * @pdOid a6fad878-7099-47de-a2cc-e809e1b47679 */
   public void setSplitAmount(Integer newSplitAmount) {
      splitAmount = newSplitAmount;
   }
   
   /** @pdOid 997aab21-9059-4312-acf7-9952f4fac040 */
   public java.lang.String getPackageDes() {
      return packageDes;
   }
   
   /** @param newPackageDes
    * @pdOid 2c9b0d9d-d74a-4313-90f1-c05cadc9e6c5 */
   public void setPackageDes(java.lang.String newPackageDes) {
      packageDes = newPackageDes;
   }
   
   /** @pdOid dd3bb207-f539-490f-9cd7-513a2ea6c484 */
   public java.lang.String getProductDes() {
      return productDes;
   }
   
   /** @param newProductDes
    * @pdOid ca1ab11a-fc51-4c48-bc47-2962ce7bb7d6 */
   public void setProductDes(java.lang.String newProductDes) {
      productDes = newProductDes;
   }
   
   /** @pdOid bd8394c3-10d7-4f78-91c6-cfe844203265 */
   public java.lang.String getMaterialDes() {
      return materialDes;
   }
   
   /** @param newMaterialDes
    * @pdOid 4efbc881-15cb-4b16-9485-30c331e154a6 */
   public void setMaterialDes(java.lang.String newMaterialDes) {
      materialDes = newMaterialDes;
   }
   
  
   
   /** @pdOid d65ec810-7f34-4990-92a6-3e65d0f1d3a9 */
   public java.lang.String getLegalEntity() {
      return legalEntity;
   }
   
   /** @param newLegalEntity
    * @pdOid 8acd746f-db1e-48f2-8de4-f499307a19a6 */
   public void setLegalEntity(java.lang.String newLegalEntity) {
      legalEntity = newLegalEntity;
   }
   
   /** @pdOid 69d35e51-dcb1-4f94-83f8-8ef06a57010c */
   public java.lang.String getOrderType() {
      return orderType;
   }
   
   /** @param newOrderType
    * @pdOid 3f1a71f0-dff2-4ac8-b581-777351b56649 */
   public void setOrderType(java.lang.String newOrderType) {
      orderType = newOrderType;
   }
   
   /** @pdOid 145cb348-dcb8-4138-baf8-f7a8caf7e972 */
   public java.lang.String getPriceTable() {
      return priceTable;
   }
   
   /** @param newPriceTable
    * @pdOid f4896613-d8af-48cb-ba50-9ba479bff925 */
   public void setPriceTable(java.lang.String newPriceTable) {
      priceTable = newPriceTable;
   }
   
   /** @pdOid 19d973b1-5f27-47c1-a49c-7b1df9a80f2b */
   public java.lang.String getBusinessType() {
      return businessType;
   }
   
   /** @param newBusinessType
    * @pdOid a0e30584-e976-4c99-bb26-4f792c3bd6ed */
   public void setBusinessType(java.lang.String newBusinessType) {
      businessType = newBusinessType;
   }
   
   
   /** @pdOid f2a420d9-a7b4-4a64-b70b-aca43504aaca *//*
   public java.util.Date getDeliveryDate() {
      return deliveryDate;
   }
   
   *//** @param newDeliveryDate
    * @pdOid d3cdda6f-9f5b-488e-a544-c58d8460bbda *//*
   public void setDeliveryDate(java.util.Date newDeliveryDate) {
      deliveryDate = newDeliveryDate;
   }
   */
   /** @pdOid 3185cd32-7064-47ce-8a6f-7cf7e94d2dcb */
   public java.lang.String getSupplier() {
      return supplier;
   }
   
   @Temporal(TemporalType.TIMESTAMP)
	@JsonSerialize(using=JsonDateSerializer.class)
   public java.util.Date getDeliveryData() {
	return deliveryData;
}

public void setDeliveryData(java.util.Date deliveryData) {
	this.deliveryData = deliveryData;
}

/** @param newSupplier
    * @pdOid 7c070a5e-1ca8-4c40-a3f4-8af91a1d0144 */
   public void setSupplier(java.lang.String newSupplier) {
      supplier = newSupplier;
   }
   
   /** @pdOid 726640d2-a471-4a91-9e31-56b49a7e6027 */
   public java.lang.String getCurrency() {
      return currency;
   }
   
   /** @param newCurrency
    * @pdOid 93da31bf-033b-436f-8eaf-1c16a6c193ca */
   public void setCurrency(java.lang.String newCurrency) {
      currency = newCurrency;
   }

}