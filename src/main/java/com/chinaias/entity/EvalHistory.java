package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** 测算历史 */
@Entity
@Table(name = "EV_EVALHISTORY", schema = "jhteval")
public class EvalHistory {
   /** ID */
   public String id;
   /** 测算单号 */
   public String listID;
   /** 业务类型 */
   public String businessType;
   /** 版本号 */
   public String versionB;
   /** 报价人code  */
   public String quotePersonCode;
   /** 报价人  */
   public String quoteperson;
   /** 是否含组件
    *   */
   public String isContentComp;
   /** 是否手动  */
   public String manual;
   /** 退税率 */
   public float drawBackRate;
   /** 国家Code  */
   public String countryCode;
   public String country;
   public String hsCode;
   /** 产品类型code */
   public String productTypeCode;
   /** 产品类型  */
   public String productType;
   /** 报价汇率 */
   public float quoteRate;
   /** 贸易形式 */
   public String tradeForm;
   /** 报价货币 */
   public String quoteCurrency;
   /** 客户code  */
   public String customCode;
   /** 客户 */
   public String custom;
   /** 产品SKU */
   public String productSKU;
   /** 产品名称 */
   public String productName;
   /** 创建日期 */
   public java.util.Date createTime;
   /** 测算状态 */
   public String calState;
   /** 测算明细  */
   public String evalDetailID;
   /** 测算单预览 */
   public String evalResultListID;
   /** 图片 */
   public String picListID;
   /**存的其他数据（现有1.客户全称2.客户预算毛利率3.美元汇率） */
   public String otherJson;
   
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
   
   public String getBusinessType() {
      return businessType;
   }
   
   public void setBusinessType(String newBusinessType) {
      businessType = newBusinessType;
   }
   
   public String getVersionB() {
      return versionB;
   }
   
   public void setVersionB(String newVersion) {
	   versionB = newVersion;
   }
   
   public String getQuotePersonCode() {
      return quotePersonCode;
   }
   
   public void setQuotePersonCode(String newQuotePersonCode) {
      quotePersonCode = newQuotePersonCode;
   }
   
   public String getQuoteperson() {
      return quoteperson;
   }
   
   public void setQuoteperson(String newQuoteperson) {
      quoteperson = newQuoteperson;
   }
   
   public String getIsContentComp() {
      return isContentComp;
   }
   
   public void setIsContentComp(String newIsContentComp) {
      isContentComp = newIsContentComp;
   }
   
   public String getManual() {
      return manual;
   }
   
   public void setManual(String newManual) {
      manual = newManual;
   }
   
   public float getDrawBackRate() {
      return drawBackRate;
   }
   
   public void setDrawBackRate(float newDrawBackRate) {
      drawBackRate = newDrawBackRate;
   }
   
   public String getCountryCode() {
      return countryCode;
   }
   
   public void setCountryCode(String newCountryCode) {
      countryCode = newCountryCode;
   }
   
   public String getCountry() {
      return country;
   }
   
   public void setCountry(String newCountry) {
      country = newCountry;
   }
   
   public String getHsCode() {
      return hsCode;
   }
   
   public void setHsCode(String newHsCode) {
      hsCode = newHsCode;
   }
   
   public String getProductTypeCode() {
      return productTypeCode;
   }
   
   public void setProductTypeCode(String newProductTypeCode) {
      productTypeCode = newProductTypeCode;
   }
   
   public String getProductType() {
      return productType;
   }
   
   public void setProductType(String newProductType) {
      productType = newProductType;
   }
   
   public float getQuoteRate() {
      return quoteRate;
   }
   
   public void setQuoteRate(float newQuoteRate) {
      quoteRate = newQuoteRate;
   }
   
   public String getTradeForm() {
      return tradeForm;
   }
   
   public void setTradeForm(String newTradeForm) {
      tradeForm = newTradeForm;
   }
   
   public String getQuoteCurrency() {
      return quoteCurrency;
   }
   
   public void setQuoteCurrency(String newQuoteCurrency) {
      quoteCurrency = newQuoteCurrency;
   }
   
   public String getCustomCode() {
      return customCode;
   }
   
   public void setCustomCode(String newCustomCode) {
      customCode = newCustomCode;
   }
   
   public String getCustom() {
      return custom;
   }
   
   public void setCustom(String newCustom) {
      custom = newCustom;
   }
   
   public String getProductSKU() {
      return productSKU;
   }
   
   public void setProductSKU(String newProductSKU) {
	   productSKU = newProductSKU;
   }
   
   public String getProductName() {
      return productName;
   }
   
   public void setProductName(String newProductName) {
      productName = newProductName;
   }
   
   public java.util.Date getCreateTime() {
      return createTime;
   }
   
   public void setCreateTime(java.util.Date newCreateTime) {
      createTime = newCreateTime;
   }
   
   public String getCalState() {
      return calState;
   }
   
   public void setCalState(String newCalState) {
      calState = newCalState;
   }
   
   public String getEvalDetailID() {
      return evalDetailID;
   }
   
   public void setEvalDetailID(String newEvalDetailID) {
      evalDetailID = newEvalDetailID;
   }
   
   public String getEvalResultListID() {
      return evalResultListID;
   }
   
   public void setEvalResultListID(String newEvalResultListID) {
      evalResultListID = newEvalResultListID;
   }
   
   public String getPicListID() {
      return picListID;
   }
   
   public void setPicListID(String newPicListID) {
      picListID = newPicListID;
   }

	public String getOtherJson() {
		return otherJson;
	}
	
	public void setOtherJson(String otherJson) {
		this.otherJson = otherJson;
	}

}