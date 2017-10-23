package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** 产品（经销simple。分销。代理）*/
@Entity
@Table(name = "EV_PRODUCT", schema = "jhteval")
public class Product {
   /** id */
   public String id;
   /** 材料清单*/
   public String listID;
   /** 产品名称 */
   public String productName;
   /** 产品尺寸 */
   public String productSize;
   /** 产品价格 */
   public float productCost;
   /** 产品类型 */
   public String productType;
   /** 参考工厂 */
   public String factory;
   /** 工厂报价条件 */
   public String factQuoteFactor;
   /** 退税率 */
   public float drawBackRate;
   /** 产品描述*/
   public String productDesc;
   /** hs索引 */
   public String hsCode;
   
   @Id
   public String getId() {
      return id;
   }
   
   public void setId(String newId) {
      id = newId;
   }
   
   public String getListID() {
      return listID;
   }
   
   public void setListID(String newListID) {
      listID = newListID;
   }
   
   public String getProductName() {
      return productName;
   }
   
   public void setProductName(String newProductName) {
      productName = newProductName;
   }
   
   public String getProductSize() {
      return productSize;
   }
   
   public void setProductSize(String newProductSize) {
      productSize = newProductSize;
   }
   
   public float getProductCost() {
      return productCost;
   }
   
   public void setProductCost(float newProductCost) {
      productCost = newProductCost;
   }
   
   public String getProductType() {
      return productType;
   }
   
   public void setProductType(String newProductType) {
      productType = newProductType;
   }
   
   public String getFactory() {
      return factory;
   }
   
   public void setFactory(String newFactory) {
      factory = newFactory;
   }
   
   public String getFactQuoteFactor() {
      return factQuoteFactor;
   }
   
   public void setFactQuoteFactor(String newFactQuoteFactor) {
      factQuoteFactor = newFactQuoteFactor;
   }
   
   public float getDrawBackRate() {
      return drawBackRate;
   }
   
   public void setDrawBackRate(float newDrawBackRate) {
      drawBackRate = newDrawBackRate;
   }
   
   public String getProductDesc() {
      return productDesc;
   }
   
   public void setProductDesc(String newProductDesc) {
      productDesc = newProductDesc;
   }
   
   public String getHsCode() {
      return hsCode;
   }
   
   public void setHsCode(String newHsCode) {
      hsCode = newHsCode;
   }

}