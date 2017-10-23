package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** 其他费用*/
@Entity
@Table(name = "EV_OTHERCOST", schema = "jhteval")
public class OtherCost {
   /** id */
   public String id;
   /** 清单号 */
   public String listID;
   /** 费用名称 */
   public String costName;
   /** 合计费用 */
   public String totalCost;
   /** 平摊数量 */
   public int flatOutCount;
   /** 单位费用 */
   public float unitCost;
   
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
   
   public String getCostName() {
      return costName;
   }
   
   public void setCostName(String newCostName) {
      costName = newCostName;
   }
   
   public String getTotalCost() {
      return totalCost;
   }
   
   public void setTotalCost(String newTotalCost) {
      totalCost = newTotalCost;
   }
   
   public int getFlatOutCount() {
      return flatOutCount;
   }
   
   public void setFlatOutCount(int newFlatOutCount) {
      flatOutCount = newFlatOutCount;
   }
   
   public float getUnitCost() {
      return unitCost;
   }
   
   public void setUnitCost(float newUnitCost) {
      unitCost = newUnitCost;
   }

}