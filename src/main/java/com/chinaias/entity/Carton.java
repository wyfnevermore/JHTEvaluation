package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** 纸箱测算 */
@Entity
@Table(name = "EV_CARTON", schema = "jhteval")
public class Carton {
   public String id;
   public String listID;
   public String spec;
   /** 成品长  */
   public float productLength;
   /** 成品宽 */
   public float productWidth;
   public float productHeight;
   public float cartontLength;
   public float cartontWidth;
   /** 成品高 */
   public float cartontHeight;
   /** 入箱件数 */
   public float countInCarton;
   /** 单位体积 */ 
   public float unitVolume;
   /** 纸箱单价 */
   public float cartonPrice;
   /** 单位纸箱成本 */
   public float unitCartonCost;
   /** 单位衬板成本 */
   public float unitPanelCost;
   /** 报价成本 */
   public float cost;
   /** 计算公式表达式 */
   public String formulaExpress;
   /** 计算公式值 */
   public String formulaVal;
   
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
   
   public float getProductLength() {
      return productLength;
   }
   
   public void setProductLength(float newProductLength) {
      productLength = newProductLength;
   }
   
   public float getProductWidth() {
      return productWidth;
   }
   
   public void setProductWidth(float newProductWidth) {
      productWidth = newProductWidth;
   }
   
   public float getProductHeight() {
      return productHeight;
   }
   
   public void setProductHeight(float newProductHeight) {
      productHeight = newProductHeight;
   }
   
   public float getCartontLength() {
      return cartontLength;
   }
   
   public void setCartontLength(float newCartontLength) {
      cartontLength = newCartontLength;
   }
   
   public float getCartontWidth() {
      return cartontWidth;
   }
   
   public void setCartontWidth(float newCartontWidth) {
      cartontWidth = newCartontWidth;
   }
   
   public float getCartontHeight() {
      return cartontHeight;
   }
   
   public void setCartontHeight(float newCartontHeight) {
      cartontHeight = newCartontHeight;
   }
   
   public float getCountInCarton() {
      return countInCarton;
   }
   
   public void setCountInCarton(float newCountInCarton) {
      countInCarton = newCountInCarton;
   }
   
   public float getUnitVolume() {
      return unitVolume;
   }
   
   public void setUnitVolume(float newUnitVolume) {
      unitVolume = newUnitVolume;
   }
   
   public float getCartonPrice() {
      return cartonPrice;
   }
   
   public void setCartonPrice(float newCartonPrice) {
      cartonPrice = newCartonPrice;
   }
   
   public float getUnitCartonCost() {
      return unitCartonCost;
   }
   
   public void setUnitCartonCost(float newUnitCartonCost) {
      unitCartonCost = newUnitCartonCost;
   }
   
   public float getUnitPanelCost() {
      return unitPanelCost;
   }
   
   public void setUnitPanelCost(float newUnitPanelCost) {
      unitPanelCost = newUnitPanelCost;
   }
   
   public float getCost() {
      return cost;
   }
   
   public void setCost(float newCost) {
      cost = newCost;
   }
   
   public String getFormulaExpress() {
      return formulaExpress;
   }
   
   public void setFormulaExpress(String newFormulaExpress) {
      formulaExpress = newFormulaExpress;
   }
   
   public String getFormulaVal() {
      return formulaVal;
   }
   
   public void setFormulaVal(String newFormulaVal) {
      formulaVal = newFormulaVal;
   }

}