package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** 组件 */
@Entity
@Table(name = "EV_COMPONENT", schema = "jhteval")
public class Component {
   public String id;
   public String listID;
   /** 组件序号 */
   public String compNo;
   /** 组件名称 */
   public String compName;
   /** 组件比例 */
   public float compRatio;
   /** 组件数量 */
   public int compCount;
   /** 花型json数据 */
   public String patternJson;
   /** 网型json数据 */
   public String netTypeJson;
   /** 规格Json数据 */
   public String specJson;
   /** 规格尺寸的其他 */
   public String specSizeOtherName;
   
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
   
   public String getCompNo() {
      return compNo;
   }
   
   public void setCompNo(String newCompNo) {
      compNo = newCompNo;
   }
   
   public String getCompName() {
      return compName;
   }
   
   public void setCompName(String newCompName) {
      compName = newCompName;
   }
   
   public float getCompRatio() {
      return compRatio;
   }
   
   public void setCompRatio(float newCompRatio) {
      compRatio = newCompRatio;
   }
   
   public int getCompCount() {
      return compCount;
   }
   
   public void setCompCount(int newCompCount) {
      compCount = newCompCount;
   }
   
   public String getPatternJson() {
      return patternJson;
   }
   
   public void setPatternJson(String newPatternJson) {
      patternJson = newPatternJson;
   }
   
   public String getNetTypeJson() {
      return netTypeJson;
   }
   
   public void setNetTypeJson(String newNetTypeJson) {
      netTypeJson = newNetTypeJson;
   }
   
   public String getSpecJson() {
      return specJson;
   }
   
   public void setSpecJson(String newSpecJson) {
      specJson = newSpecJson;
   }
   
   public String getSpecSizeOtherName() {
      return specSizeOtherName;
   }
   
   public void setSpecSizeOtherName(String newSpecSizeOtherName) {
      specSizeOtherName = newSpecSizeOtherName;
   }

}