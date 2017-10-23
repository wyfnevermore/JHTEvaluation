package com.chinaias.entity.so;

/***********************************************************************
 * Module:  SoLine.java
 * Author:  afg_s
 * Purpose: Defines the Class SoLine
 ***********************************************************************/

import java.util.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlElement;


@Entity
@Table(name = "SO_Line", schema = "jhteval")
@XmlRootElement(name="ORDER_LINE")
/** @pdOid 02632f48-9b63-42dd-b9a0-5fe853d22ee4 */
public class SoLine {
	 private java.lang.String sourceHeaderId;
	 private java.lang.String sourceLineId;
	 private java.lang.String importId;
	 private java.lang.String sourceCode;
	 
	 @Transient
	 @XmlElement(name="SOURCE_HEADER_ID")
	 public java.lang.String getSourceHeaderId() {
		return sourceHeaderId;
	}

	public void setSourceHeaderId(java.lang.String sourceHeaderId) {
		this.sourceHeaderId = sourceHeaderId;
	}

	@Transient
	 @XmlElement(name="SOURCE_LINE_ID")
	public java.lang.String getSourceLineId() {
		return sourceLineId;
	}

	public void setSourceLineId(java.lang.String sourceLineId) {
		this.sourceLineId = sourceLineId;
	}

	
	 @Transient
	 @XmlElement(name="IMPORT_ID")
	public java.lang.String getImportId() {
		return importId;
	}

	public void setImportId(java.lang.String importId) {
		this.importId = importId;
	}
	
	 @Transient
	 @XmlElement(name="SOURCE_CODE")
	 public java.lang.String getSourceCode() {
		return sourceCode;
	}

	public void setSourceCode(java.lang.String sourceCode) {
		this.sourceCode = sourceCode;
	}
	
   /** @pdOid 03dfa68d-f318-4528-bd66-f94a0a41c227 */
   private java.lang.String lineId;
   /** 行号
    * 
    * @pdOid 9a3c8434-eb2b-43ed-8de3-6fa1a7a137cb */
   private java.lang.String lineNum;
   /** 物料编码
    * 
    * @pdOid edefaf9f-121b-45c5-b84c-99f174d38f8e */
   private java.lang.String itemNumber;
   /** 订单数量
    * 
    * @pdOid 18473547-f755-40c8-ac66-f0f93985b970 */
   private java.lang.String orderQuantity;
   /** 物料单位
    * 
    * @pdOid 898ca7f5-dddd-4db9-8122-17cc16675071 */
   private java.lang.String itemUom;
   /** 价格
    * 
    * @pdOid 64546766-112b-4e16-a5e7-1336ab4ddbf1 */
   private java.lang.String price;
   /** 请求日期
    * 
    * @pdOid 4029531b-bd1a-4b8e-8758-abf35ce39583 */
   private java.lang.String requestDate;
   /** 客户PO编码
    * 
    * @pdOid b07a9633-2449-4c25-a217-4acb86576a47 */
   private java.lang.String custPoNumber;
   /** 公司间结算价
    * 
    * @pdOid e21cdaad-ac5d-4570-ac27-ee138d89ddde */
   private java.lang.String internalPrice;
   /** 品牌终端
    * 
    * @pdOid 71c90b0a-7c1c-4cb9-84ca-f3f2deee6811 */
   private java.lang.String brandTerminal;
   /** 客户终端
    * 
    * @pdOid 0569fdcc-9a20-47b1-97c7-cb173963a100 */
   private java.lang.String customerTerminal;
   /** 英文品名
    * 
    * @pdOid b2793601-3eed-40e1-9984-27198556fc10 */
   private java.lang.String enProductName;
   /** 测算单价
    * 
    * @pdOid 27a1bd58-b4c3-486c-974a-7f6e49035dce */
   private java.lang.String calculatePrice;
   /** 成本比例
    * 
    * @pdOid d87644e6-075a-486e-8a9a-ba29f8090742 */
   private java.lang.String costRate;
   /** 报关单价
    * 
    * @pdOid 0524d00a-0425-4318-95a4-71b411049f80 */
   private java.lang.String clearancePrice;
   /** 测算单号
    * 
    * @pdOid e0eb6c63-0e33-493d-b92c-cec00386d178 */
   private java.lang.String evaluationOrderNumber;
   /** 成品名称
    * 
    * @pdOid 5aaaca11-8947-4f01-9220-80b0f9fa2e9e */
   private java.lang.String productName;
   /** 物料描述
    * 
    * @pdOid c470f21c-3df1-4f99-b59f-65a5e9b4801f */
   private java.lang.String materialDes;
   /** 规格
    * 
    * @pdOid 6d58f3d1-b2dc-49fd-a19b-f4e00344f37c */
   private java.lang.String specification;
   /** 单位价格
    * 
    * @pdOid fc05df50-bf48-4d40-80a0-6df044ba7453 */
   private Float unitPrice;
   /** 交货日期
    * 
    * @pdOid 0f8a5261-fc5f-438e-959e-40c2779a4eee */
   private java.util.Date deliveryDate;

/** 备注
    * 
    * @pdOid ffb2efaf-2fbe-4460-9391-5ecf43517888 */
   private java.lang.String remark;
   /** 采购订单用，测算单行ID
    * 
    * @pdOid e68295cb-e4d3-40b0-af09-4077233526c5 */
   private java.lang.String evaluationLineId;
   
   /** @pdOid 27aefca0-151f-4c71-a785-fe9026228c99 */
   private java.lang.String headerId;
	/**
	 * 采购订单用，项目号
	 * 
	 * @pdOid e68295cb-e4d3-40b0-af09-4077233526c5
	 */
	private java.lang.String projectNumber;
	/**
	 * 采购订单用，成品 SKU
	 * 
	 * @pdOid e68295cb-e4d3-40b0-af09-4077233526c5
	 */
	private java.lang.String productSKU;
	/**
	 * 采购订单用，销售订单号
	 * 
	 * @pdOid e68295cb-e4d3-40b0-af09-4077233526c5
	 */
	private java.lang.String orderNumber;
	/**
	 * 采购订单用，供应商
	 * 
	 * @pdOid e68295cb-e4d3-40b0-af09-4077233526c5
	 */
	private java.lang.String supplier;
	/**
	 * 采购订单用，业务实体
	 * 
	 * @pdOid e68295cb-e4d3-40b0-af09-4077233526c5
	 */
	private java.lang.String orgCode;
	/**
	 * 采购订单用，币种
	 * 
	 * @pdOid e68295cb-e4d3-40b0-af09-4077233526c5
	 */
	private java.lang.String CurrencyCode;
   
   public java.lang.String getProjectNumber() {
		return projectNumber;
	}

	public void setProjectNumber(java.lang.String projectNumber) {
		this.projectNumber = projectNumber;
	}

	public java.lang.String getProductSKU() {
		return productSKU;
	}

	public void setProductSKU(java.lang.String productSKU) {
		this.productSKU = productSKU;
	}

	public java.lang.String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(java.lang.String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public java.lang.String getSupplier() {
		return supplier;
	}

	public void setSupplier(java.lang.String supplier) {
		this.supplier = supplier;
	}

	public java.lang.String getOrgCode() {
		return orgCode;
	}

	public void setOrgCode(java.lang.String orgCode) {
		this.orgCode = orgCode;
	}

	public java.lang.String getCurrencyCode() {
		return CurrencyCode;
	}

	public void setCurrencyCode(java.lang.String currencyCode) {
		CurrencyCode = currencyCode;
	}

@Id
   /** @pdOid c82d3358-c846-44a6-85f9-91ed6a13fc18 */
   public java.lang.String getLineId() {
      return lineId;
   }
   
   /** @param newLineId
    * @pdOid 8e565b82-81f9-420c-b7fe-6aeafb284ad4 */
   public void setLineId(java.lang.String newLineId) {
      lineId = newLineId;
   }
   
   @XmlElement(name="LINE_NUM")
   /** @pdOid 030785f6-209e-4f94-8f5b-fa259a3b6ef3 */
   public java.lang.String getLineNum() {
      return lineNum;
   }
   
   /** @param newLineNum
    * @pdOid ee1212d0-4763-4fd3-8447-07cbeede1e85 */
   public void setLineNum(java.lang.String newLineNum) {
      lineNum = newLineNum;
   }
   
   @XmlElement(name="ITEM_NUMBER")
   /** @pdOid 95095a9c-7a40-4b91-9c61-2ed1bf2313f2 */
   public java.lang.String getItemNumber() {
      return itemNumber;
   }
   
   /** @param newItemNumber
    * @pdOid 1a1d03f3-f3e9-462a-9b67-80ab2cd6a2db */
   public void setItemNumber(java.lang.String newItemNumber) {
      itemNumber = newItemNumber;
   }
   
   @XmlElement(name="ORDER_QUANTITY")
   /** @pdOid ac7ea50e-c850-4b29-8d9f-62a47ff6f643 */
   public java.lang.String getOrderQuantity() {
      return orderQuantity;
   }
   
   @XmlElement(name="IMPORT_ID")
   public java.util.Date getDeliveryDate() {
		return deliveryDate;
	}
   
	public void setDeliveryDate(java.util.Date deliveryDate) {
		this.deliveryDate = deliveryDate;
	}
   /** @param newOrderQuantity
    * @pdOid 9786e823-3fd0-4d01-a68f-1f9a71491063 */
   public void setOrderQuantity(java.lang.String newOrderQuantity) {
      orderQuantity = newOrderQuantity;
   }
   
   @XmlElement(name="ITEM_UOM")
   /** @pdOid 0a08d7d3-7528-4483-8038-513b640c9b34 */
   public java.lang.String getItemUom() {
      return itemUom;
   }
   
   /** @param newItemUom
    * @pdOid 49cfaed2-e5d3-4717-8b69-0147a8f63138 */
   public void setItemUom(java.lang.String newItemUom) {
      itemUom = newItemUom;
   }
   
   @XmlElement(name="PRICE")
   /** @pdOid e7738cac-a27c-4ff3-95af-7c38f909933a */
   public java.lang.String getPrice() {
      return price;
   }
   
   /** @param newPrice
    * @pdOid 262c7721-b20c-46b0-8c25-e126a3a71d50 */
   public void setPrice(java.lang.String newPrice) {
      price = newPrice;
   }
   
   @XmlElement(name="REQUEST_DATE")
   /** @pdOid bd6655b6-ce9b-49c7-9e08-61b3aa204cd1 */
   public java.lang.String getRequestDate() {
      return requestDate;
   }
   
   /** @param newRequestDate
    * @pdOid c76957cc-821e-48d2-9a3b-77d74cc09c68 */
   public void setRequestDate(java.lang.String newRequestDate) {
      requestDate = newRequestDate;
   }
   
   @XmlElement(name="CUST_PO_NUMBER")
   /** @pdOid b72c9b6c-3178-4a8e-b906-80b9d5467232 */
   public java.lang.String getCustPoNumber() {
      return custPoNumber;
   }
   
   /** @param newCustPoNumber
    * @pdOid f72fe04f-8872-4b6c-9708-2e88e7c521db */
   public void setCustPoNumber(java.lang.String newCustPoNumber) {
      custPoNumber = newCustPoNumber;
   }
   
   @XmlElement(name="INTERNAL_PRICE")
   /** @pdOid e8593da5-58b5-460d-adee-53816315e750 */
   public java.lang.String getInternalPrice() {
      return internalPrice;
   }
   
   /** @param newInternalPrice
    * @pdOid 1cd98669-264f-4abb-8f49-d207f088a716 */
   public void setInternalPrice(java.lang.String newInternalPrice) {
      internalPrice = newInternalPrice;
   }
   
   @XmlElement(name="BRAND_TERMINAL")
   /** @pdOid 64ca28a7-5387-48fb-88ae-32ad9a64444c */
   public java.lang.String getBrandTerminal() {
      return brandTerminal;
   }
   
   /** @param newBrandTerminal
    * @pdOid d101109f-a891-42e6-87ff-0550a70153e8 */
   public void setBrandTerminal(java.lang.String newBrandTerminal) {
      brandTerminal = newBrandTerminal;
   }
   
   @XmlElement(name="CUSTOMER_TERMINAL")
   /** @pdOid fc426608-fd9a-4280-a646-d448f24b4e90 */
   public java.lang.String getCustomerTerminal() {
      return customerTerminal;
   }
   
   /** @param newCustomerTerminal
    * @pdOid 150ebe6c-b340-4aac-bf62-d944b97d3f34 */
   public void setCustomerTerminal(java.lang.String newCustomerTerminal) {
      customerTerminal = newCustomerTerminal;
   }
   
   @XmlElement(name="EN_PRODUCT_NAME")
   /** @pdOid 56ca96a6-4264-4ab1-85c2-f6462ab7c8b0 */
   public java.lang.String getEnProductName() {
      return enProductName;
   }
   
   /** @param newEnProductName
    * @pdOid 77b34705-47ed-4199-872b-e52af6cd2764 */
   public void setEnProductName(java.lang.String newEnProductName) {
      enProductName = newEnProductName;
   }
   
   @XmlElement(name="CALCULATE_PRICE")
   /** @pdOid c936d3f0-5586-4690-9ab9-d180cd2b953e */
   public java.lang.String getCalculatePrice() {
      return calculatePrice;
   }
   
   /** @param newCalculatePrice
    * @pdOid 23e929b7-3e44-48e8-8dd6-81e776e451ac */
   public void setCalculatePrice(java.lang.String newCalculatePrice) {
      calculatePrice = newCalculatePrice;
   }
   
   @XmlElement(name="COST_RATE")
   /** @pdOid 825ff18e-afc9-434c-b633-d98785960ab5 */
   public java.lang.String getCostRate() {
      return costRate;
   }
   
   /** @param newCostRate
    * @pdOid 98c5128d-ebe1-4748-a2c5-8e9a7f56763a */
   public void setCostRate(java.lang.String newCostRate) {
      costRate = newCostRate;
   }
   
   @XmlElement(name="CLEARANCE_PRICE")
   /** @pdOid 43af5143-f056-4c88-9277-b4fa856c9db4 */
   public java.lang.String getClearancePrice() {
      return clearancePrice;
   }
   
   /** @param newClearancePrice
    * @pdOid 99cc00da-cd42-4448-b7cb-e86ec8c347d7 */
   public void setClearancePrice(java.lang.String newClearancePrice) {
      clearancePrice = newClearancePrice;
   }
   
   /** @pdOid 94ad8445-bbf6-4304-9575-5194fc202b12 */
   public java.lang.String getEvaluationOrderNumber() {
      return evaluationOrderNumber;
   }
   
   /** @param newEvaluationOrderNumber
    * @pdOid 0d3b0aae-7f13-4a36-b92c-32eaeb9d9fd8 */
   public void setEvaluationOrderNumber(java.lang.String newEvaluationOrderNumber) {
      evaluationOrderNumber = newEvaluationOrderNumber;
   }
   
   /** @pdOid 6e00466e-237e-4651-8921-6275d32f1f69 */
   public java.lang.String getProductName() {
      return productName;
   }
   
   /** @param newProductName
    * @pdOid 1d41b384-22af-4d1e-baf5-0fae47468bbc */
   public void setProductName(java.lang.String newProductName) {
      productName = newProductName;
   }
   
   /** @pdOid 39a3bf49-5d17-4d76-b2e9-f7f8535203b0 */
   public java.lang.String getMaterialDes() {
      return materialDes;
   }
   
   /** @param newMaterialDes
    * @pdOid 40a4bbc7-8766-4f9e-b025-defeab7b4e6e */
   public void setMaterialDes(java.lang.String newMaterialDes) {
      materialDes = newMaterialDes;
   }
   
   /** @pdOid ad6d4ad5-b940-494e-8b9a-e95448ff572a */
   public java.lang.String getSpecification() {
      return specification;
   }
   
   /** @param newSpecification
    * @pdOid 841070b2-57bc-4d46-bda5-9215f316a8a2 */
   public void setSpecification(java.lang.String newSpecification) {
      specification = newSpecification;
   }
   
   /** @pdOid fb8c2852-122f-4bb1-9a1a-37e98cf362a8 */
   public Float getUnitPrice() {
      return unitPrice;
   }
   
   /** @param newUnitPrice
    * @pdOid cab2026d-b72d-4e53-ac19-73edaf78ddec */
   public void setUnitPrice(Float newUnitPrice) {
      unitPrice = newUnitPrice;
   }
   
   /** @pdOid 90412432-2e24-4ba9-9b14-6d8242d507f1 */
   public java.lang.String getRemark() {
      return remark;
   }
   
   /** @param newRemark
    * @pdOid a171e4d9-1d01-4ce8-84aa-125b3d4647f4 */
   public void setRemark(java.lang.String newRemark) {
      remark = newRemark;
   }
   
   /** @pdOid 888f7a9f-41ad-488e-afd0-6e78a4ee363d */
   public java.lang.String getEvaluationLineId() {
      return evaluationLineId;
   }
   
   /** @param newEvaluationLineId
    * @pdOid 120ccd05-13b3-4397-b25c-a6c44952a930 */
   public void setEvaluationLineId(java.lang.String newEvaluationLineId) {
      evaluationLineId = newEvaluationLineId;
   }
   
   /** @pdOid a2cddcf0-cdde-4a8c-b152-b6477106866c */
   public java.lang.String getHeaderId() {
      return headerId;
   }
   
   /** @param newHeaderId
    * @pdOid 1a6b11ad-80ee-4fa3-9da1-1a01b57b463e */
   public void setHeaderId(java.lang.String newHeaderId) {
      headerId = newHeaderId;
   }

}