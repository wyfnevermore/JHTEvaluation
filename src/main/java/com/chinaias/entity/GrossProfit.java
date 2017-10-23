package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** 毛利 */
@Entity
@Table(name = "EV_GROSSPROFIT", schema = "jhteval")
public class GrossProfit {
   /** 毛利ID */
   public String id;
   /** 毛利清单ID */
   public String listID;
   /** 规格  */
   public String spec;
   /** 客户预算毛利率  */
   public float expectedProfitRate;
   /** 产品成本 */
   public float productCost;
   /** 产品测算成本  */
   public float productEvalCost;
   /** 测算报价 */
   public float quotePrice;
   /** 执行金额 */
   public float implementPrice;
   /** 执行毛利率 */
   public float imptProfitRate;
   /** 执行毛利额（$） */
   public float imptProfitCost;
   /** 执行价格降幅 */
   public float implPriceCut;
   /** 产品尺寸  */
   public String productSize;
   /** 产品名称  */
   private String productName;
   
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
   
   public String getSpec() {
      return spec;
   }
   
   public void setSpec(String newSpec) {
      spec = newSpec;
   }
   
   public float getExpectedProfitRate() {
      return expectedProfitRate;
   }
   
   public void setExpectedProfitRate(float newExpectedProfitRate) {
      expectedProfitRate = newExpectedProfitRate;
   }
   
   public float getProductCost() {
      return productCost;
   }
   
   public void setProductCost(float newProductCost) {
      productCost = newProductCost;
   }
   
   public float getProductEvalCost() {
      return productEvalCost;
   }
   
   public void setProductEvalCost(float newProductEvalCost) {
      productEvalCost = newProductEvalCost;
   }
   
   public float getQuotePrice() {
      return quotePrice;
   }
   
   public void setQuotePrice(float newQuotePrice) {
      quotePrice = newQuotePrice;
   }
   
   public float getImplementPrice() {
      return implementPrice;
   }
   
   public void setImplementPrice(float newImplementPrice) {
      implementPrice = newImplementPrice;
   }
   
   public float getImptProfitRate() {
      return imptProfitRate;
   }
   
   public void setImptProfitRate(float newImptProfitRate) {
      imptProfitRate = newImptProfitRate;
   }
   
   public float getImptProfitCost() {
      return imptProfitCost;
   }
   
   public void setImptProfitCost(float newImptProfitCost) {
      imptProfitCost = newImptProfitCost;
   }
   
   public float getImplPriceCut() {
      return implPriceCut;
   }
   
   public void setImplPriceCut(float newImplPriceCut) {
      implPriceCut = newImplPriceCut;
   }
   
   public String getProductSize() {
      return productSize;
   }
   
   public void setProductSize(String newProductSize) {
      productSize = newProductSize;
   }

public String getProductName() {
	return productName;
}

public void setProductName(String productName) {
	this.productName = productName;
}
   
}