package com.chinaias.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** 代理费用*/
@Entity
@Table(name = "EV_AGENTCOST", schema = "jhteval")
public class AgentCost {
   /** id */
   public String id;
   /** 清单号 */
   public String listID;
   /** 费用名称*/
   private String costName;
   /** 代理出口金额(￥)*/
   private Float productCost;
   /** 服务费率*/
   private Float serviceRate;
   /** 收费金额(￥)*/
   private Float chargeCost;

   
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

public void setCostName(String costName) {
	this.costName = costName;
}

public Float getProductCost() {
	return productCost;
}

public void setProductCost(Float productCost) {
	this.productCost = productCost;
}

public Float getServiceRate() {
	return serviceRate;
}

public void setServiceRate(Float serviceRate) {
	this.serviceRate = serviceRate;
}

public Float getChargeCost() {
	return chargeCost;
}

public void setChargeCost(Float chargeCost) {
	this.chargeCost = chargeCost;
}
   
   
   

}