package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** 图片*/
@Entity
@Table(name = "EV_PIC", schema = "jhteval")
public class Pic {
   /** 图片ID*/
   public String id;
   /** 列表ID */
   public String listID;
   /** 名称 */
   public String name;
   /** 地址*/
   public String address;
   /** 描述 */
   public String describe;
   public String baseCode;
   
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
   
   public String getAddress() {
      return address;
   }
   
   public void setAddress(String newAddress) {
      address = newAddress;
   }
   
   public String getDescribe() {
      return describe;
   }
   
   public void setDescribe(String newDescribe) {
      describe = newDescribe;
   }
   
   public String getBaseCode() {
      return baseCode;
   }
   
   public void setBaseCode(String newBaseCode) {
      baseCode = newBaseCode;
   }

}