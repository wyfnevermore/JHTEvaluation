package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
/** 代垫费用 */
@Entity
@Table(name = "EV_PREPAID", schema = "jhteval")
public class PrePaid {
   public String id;
   public String listID;
   public String name;
   /** 费用 */
   public float cost;
   
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
   
   public String getName() {
      return name;
   }
   
   public void setName(String newName) {
      name = newName;
   }
   
   public float getCost() {
      return cost;
   }
   
   public void setCost(float newCost) {
      cost = newCost;
   }

}