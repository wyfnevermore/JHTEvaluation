package com.chinaias.entity.so;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;


/***********************************************************************
 * Module:  SoHeader.java
 * Author:  afg_s
 * Purpose: Defines the Class SoHeader
 ***********************************************************************/

@Entity
@Table(name = "SO_HEADER", schema = "jhteval")
@XmlRootElement(name="ORDER_HEADER")
public class SoHeader {
	 private java.lang.String importId;
	 private java.lang.String sourceCode;
	 private java.lang.String sourceHeaderId;
	 private java.lang.String projectId;
	 
	 public java.lang.String getProjectId() {
		return projectId;
	}

	public void setProjectId(java.lang.String projectId) {
		this.projectId = projectId;
	}

	@Transient
	 @XmlElement(name="SOURCE_CODE")
	 public java.lang.String getSourceCode() {
		return sourceCode;
	}

	public void setSourceCode(java.lang.String sourceCode) {
		this.sourceCode = sourceCode;
	}

	@Transient
	 @XmlElement(name="SOURCE_HEADER_ID")
	public java.lang.String getSourceHeaderId() {
		return sourceHeaderId;
	}

	public void setSourceHeaderId(java.lang.String sourceHeaderId) {
		this.sourceHeaderId = sourceHeaderId;
	}

	@Transient
	 @XmlElement(name="IMPORT_ID")
	public java.lang.String getImportId() {
		return importId;
	}

	public void setImportId(java.lang.String importId) {
		this.importId = importId;
	}

	private java.lang.String headerId;
   /** 业务实体
    * 
    * @pdOid b5cc49fc-a1d4-48aa-9efe-0826e4aebe0c */
   private java.lang.String orgName;
   /** 订单类型
    * 
    * @pdOid 9acba3aa-28a9-4fc0-8c9a-9fc2c145b4e7 */
   private java.lang.String orderType;
   /** 订单编号
    * 
    * @pdOid cb0cb7de-2e66-469f-901b-eee5a50cc183 */
   private java.lang.String orderNumber;
   /** @pdOid 3086a598-1211-4ff3-8f8c-45bdbd209175 */
  
   /** 客户编码
    * 
    * @pdOid f666eea0-10f2-4ee6-9e77-a037f505b1a7 */
   private java.lang.String customerNumber;
   /** 客户地址
    * 
    * @pdOid 6ada6589-3f66-46cf-ab88-9fd5a609b1e6 */
   private java.lang.String customerAddress;
   /** 订购日期
    * 
    * @pdOid a9658646-f668-445a-8cb3-bf495b28bf1a */
   private java.lang.String orderDate;
   /** 价目表
    * 
    * @pdOid 360e10b5-90ab-47e9-9113-350af6ffc70d */
   private java.lang.String priceList;
   /** 销售员员工号
    * 
    * @pdOid 3193b5e6-0414-4a84-a5cb-bb06bef61125 */
   private java.lang.String salePersonNumber;
   /** 币种
    * 
    * @pdOid ff342c90-f4ba-4e84-93f8-8a52aabb5bc0 */
   private java.lang.String currencyCode;
   /** 付款条件
    * 
    * @pdOid ae70decc-4f36-41d8-8b8c-4325d2db04d4 */
   private java.lang.String paymentTerm;
   /** 发运方式
    * 
    * @pdOid 15d31a05-0f60-4f94-9483-487199e5f723 */
   private java.lang.String shipMethod;
   /** 仓库
    * 
    * @pdOid 156f1dc1-2afc-486d-91cd-74d07ae4bdc2 */
   private java.lang.String shipFrom;
   /** 项目
    * 
    * @pdOid d30275a0-e974-4da3-bc97-8e7e77cdd175 */
   private java.lang.String projectNumber;
   /** 任务
    * 
    * @pdOid 262699b0-ee4c-4d9d-98d2-223f6e9be190 */
   private java.lang.String taskNumber;
   /** 部门
    * 
    * @pdOid 13bdcf5a-1a87-44f8-8feb-ec6abd0330e2 */
   private java.lang.String departmentName;
   /** 贸易条款
    * 
    * @pdOid 9621be30-5034-414e-a326-03a0e54a4f4e */
   private java.lang.String tradeTerm;
   /** 折扣率
    * 
    * @pdOid a4c89094-1d0d-422c-b498-357e1cb14095 */
   private java.lang.String discountRate;
   
	  private Integer so_Status;
	  public Integer getSo_Status() {
		return so_Status;
	}

	public void setSo_Status(Integer so_Status) {
		this.so_Status = so_Status;
	}

	public Integer getPo_Status() {
		return po_Status;
	}

	public void setPo_Status(Integer po_Status) {
		this.po_Status = po_Status;
	}

	public Integer getJo_Status() {
		return jo_Status;
	}

	public void setJo_Status(Integer jo_Status) {
		this.jo_Status = jo_Status;
	}

	private Integer po_Status;
	  private Integer jo_Status;
	
	 @XmlElement(name="ORG_NAME")
   public java.lang.String getOrgName() {
      return orgName;
   }
   
   public void setOrgName(java.lang.String newOrgName) {
      orgName = newOrgName;
   }
   
   @XmlElement(name="ORDER_TYPE")
   public java.lang.String getOrderType() {
      return orderType;
   }
   
   /** @param newOrderType
    * @pdOid 81e839f1-9a32-416b-858b-0ad10bb50985 */
   public void setOrderType(java.lang.String newOrderType) {
      orderType = newOrderType;
   }
   
   @XmlElement(name="ORDER_NUMBER")
   /** @pdOid 107f7f4c-8ce4-4f18-9d59-522e4deb48e4 */
   public java.lang.String getOrderNumber() {
      return orderNumber;
   }
   
   /** @param newOrderNumber
    * @pdOid a62d6a85-36ed-41f3-ac00-8ba5ce8a388f */
   public void setOrderNumber(java.lang.String newOrderNumber) {
      orderNumber = newOrderNumber;
   }
   
   /** @pdOid 46912df2-3424-4903-832e-79316ac29099 */

   @Id
   public java.lang.String getHeaderId() {
      return headerId;
   }
   
   /** @param newHeaderId
    * @pdOid 82891d4a-4d10-409f-9846-35409e55bebf */
   public void setHeaderId(java.lang.String newHeaderId) {
      headerId = newHeaderId;
   }
   
   @XmlElement(name="CUSTOMER_NUMBER")
   /** @pdOid e59ac360-b3b2-47b7-b33e-bac8a9cebd7a */
   public java.lang.String getCustomerNumber() {
      return customerNumber;
   }
   
   /** @param newCustomerNumber
    * @pdOid 67be299a-3549-49bb-b8e1-ce5ef0b24b2e */
   public void setCustomerNumber(java.lang.String newCustomerNumber) {
      customerNumber = newCustomerNumber;
   }
   
   @XmlElement(name="CUSTOMER_ADDRESS")
   /** @pdOid 5332f95b-2091-48ad-adbc-893121e9f8db */
   public java.lang.String getCustomerAddress() {
      return customerAddress;
   }
   
   /** @param newCustomerAddress
    * @pdOid ed250faa-2c1b-4bc0-99ee-b8cfa8300699 */
   public void setCustomerAddress(java.lang.String newCustomerAddress) {
      customerAddress = newCustomerAddress;
   }
   
   @XmlElement(name="ORDER_DATE")
   /** @pdOid d1b5b90b-2568-41ad-9426-048bf4d10525 */
   public java.lang.String getOrderDate() {
      return orderDate;
   }
   
   /** @param newOrderDate
    * @pdOid 99348014-27e8-4c13-a196-a3fbce9e5d7d */
   public void setOrderDate(java.lang.String newOrderDate) {
      orderDate = newOrderDate;
   }
   
   @XmlElement(name="PRICE_LIST")
   /** @pdOid 7c1306e6-f895-41a1-bb78-809fd064b37b */
   public java.lang.String getPriceList() {
      return priceList;
   }
   
   /** @param newPriceList
    * @pdOid 2b54138b-9aeb-46e5-a31a-5b6978b8b273 */
   public void setPriceList(java.lang.String newPriceList) {
      priceList = newPriceList;
   }
   
   @XmlElement(name="SALE_PERSON_NUMBER")
   /** @pdOid ce5e71f9-28f9-4fff-971a-b06af29ce940 */
   public java.lang.String getSalePersonNumber() {
      return salePersonNumber;
   }
   
   /** @param newSalePersonNumber
    * @pdOid 67d958e4-1db3-4b46-9c46-c3214ef33367 */
   public void setSalePersonNumber(java.lang.String newSalePersonNumber) {
      salePersonNumber = newSalePersonNumber;
   }
   
   @XmlElement(name="CURRENCY_CODE")
   /** @pdOid acd04a28-58c5-4a4c-90c4-beb6e8f4c495 */
   public java.lang.String getCurrencyCode() {
      return currencyCode;
   }
   
   /** @param newCurrencyCode
    * @pdOid a80822bb-2ad5-472d-8761-e8f1a53b4f3d */
   public void setCurrencyCode(java.lang.String newCurrencyCode) {
      currencyCode = newCurrencyCode;
   }
   
   @XmlElement(name="PAYMENT_TERM")
   /** @pdOid 9836fe2a-5079-486b-907d-bd0c474e1b51 */
   public java.lang.String getPaymentTerm() {
      return paymentTerm;
   }
   
   /** @param newPaymentTerm
    * @pdOid 276c7777-1d0f-4adf-af6f-71c3b4a94a9e */
   public void setPaymentTerm(java.lang.String newPaymentTerm) {
      paymentTerm = newPaymentTerm;
   }
   
   @XmlElement(name="SHIP_METHOD")
   /** @pdOid d139d017-b350-4d46-98fd-9ebe65c78c4d */
   public java.lang.String getShipMethod() {
      return shipMethod;
   }
   
   /** @param newShipMethod
    * @pdOid de363d95-7768-4c67-b080-3183162b84ad */
   public void setShipMethod(java.lang.String newShipMethod) {
      shipMethod = newShipMethod;
   }
   
   @XmlElement(name="SHIP_FROM")
   /** @pdOid 2e83c189-bc40-42e3-92fa-7294bcbb54ea */
   public java.lang.String getShipFrom() {
      return shipFrom;
   }
   
   /** @param newShipFrom
    * @pdOid 23f2fa9a-9e01-4f2f-8220-f88a9731a68a */
   public void setShipFrom(java.lang.String newShipFrom) {
      shipFrom = newShipFrom;
   }
   
   @XmlElement(name="PROJECT_NUMBER")
   /** @pdOid 106c2259-1963-4025-9042-23f6854b73cc */
   public java.lang.String getProjectNumber() {
      return projectNumber;
   }
   
   
   /** @param newProjectNumber
    * @pdOid 8ae79e95-6733-4073-8565-6ac11fd483f4 */
   public void setProjectNumber(java.lang.String newProjectNumber) {
      projectNumber = newProjectNumber;
   }
   
   @XmlElement(name="TASK_NUMBER")
   /** @pdOid 5d9e4c22-4d48-405d-9d6c-706aaaaed2c2 */
   public java.lang.String getTaskNumber() {
      return taskNumber;
   }
   
   /** @param newTaskNumber
    * @pdOid 90031b43-0974-4d89-ade3-7fa86a857dfd */
   public void setTaskNumber(java.lang.String newTaskNumber) {
      taskNumber = newTaskNumber;
   }
   
   @XmlElement(name="DEPARTMENT_NAME")
   /** @pdOid cae45963-8676-466c-9556-6918fc8b4f72 */
   public java.lang.String getDepartmentName() {
      return departmentName;
   }
   
   /** @param newDepartmentName
    * @pdOid dad00346-975c-4cc0-ab15-ad691c5df222 */
   public void setDepartmentName(java.lang.String newDepartmentName) {
      departmentName = newDepartmentName;
   }
   
   @XmlElement(name="TRADE_TERM")
   /** @pdOid f77e0ee8-c7e4-41ae-839a-9c3ab1d28d7f */
   public java.lang.String getTradeTerm() {
      return tradeTerm;
   }
   
   /** @param newTradeTerm
    * @pdOid ceb7ad54-e728-461d-9776-02d22f8ede56 */
   public void setTradeTerm(java.lang.String newTradeTerm) {
      tradeTerm = newTradeTerm;
   }
   
   @XmlElement(name="DISCOUNT_RATE")
   /** @pdOid 0c3c494e-84f0-4151-ad8d-99130e95fe9d */
   public java.lang.String getDiscountRate() {
      return discountRate;
   }
   
   /** @param newDiscountRate
    * @pdOid 74d25296-5d3e-4c68-be96-0e289b996011 */
   public void setDiscountRate(java.lang.String newDiscountRate) {
      discountRate = newDiscountRate;
   }

}