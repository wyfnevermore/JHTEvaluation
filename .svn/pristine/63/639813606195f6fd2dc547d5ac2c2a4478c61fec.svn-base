package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** 佣金表 */
@Entity
@Table(name = "EV_COMMISSION", schema = "jhteval")
public class Commission {
   /** 佣金ID */
   public String id;
   /** 佣金清单ID */
   public String listID;
   /** 提佣顺序 */
   public String takeDrawOrder;
   /** 提佣人信息 */
   public String takeDrawPerson;
   /** 提佣率 */
   public float takeDrawRate;
   
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
   
   public String getTakeDrawOrder() {
      return takeDrawOrder;
   }
   
   public void setTakeDrawOrder(String newTakeDrawOrder) {
      takeDrawOrder = newTakeDrawOrder;
   }
   
   public String getTakeDrawPerson() {
      return takeDrawPerson;
   }
   
   public void setTakeDrawPerson(String newTakeDrawPerson) {
      takeDrawPerson = newTakeDrawPerson;
   }
   
   public float getTakeDrawRate() {
      return takeDrawRate;
   }
   
   public void setTakeDrawRate(float newTakeDrawRate) {
      takeDrawRate = newTakeDrawRate;
   }

}