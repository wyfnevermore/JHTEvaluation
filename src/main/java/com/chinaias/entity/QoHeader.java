package com.chinaias.entity;

/***********************************************************************
 * Module:  QoHeader.java
 * Author:  afg_s
 * Purpose: Defines the Class QoHeader
 ***********************************************************************/

import java.util.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Formula;


@Entity
@Table(name = "QO_Header", schema = "jhteval")
/** @pdOid 5369c883-9b07-4252-9c87-a0bd206afabb */
public class QoHeader {
	/** @pdOid b8c12a39-7ae6-46ce-8ecf-ca35d5862bda */
	private java.lang.String headerId;
	/** 客户ID
	 * 
	 * @pdOid 9fed007f-5ab3-40cc-bb22-45444dde3ec9 */
	private java.lang.String customId;

	private java.lang.String qoutationNumber;


	/** 询价人
	 * 
	 * @pdOid 2508d781-b8c3-4e62-b43d-24bec9bc7ee7 */
	private java.lang.String inquirer;
	/** 币种
	 * 
	 * @pdOid f90ecae8-7c18-447d-93a2-fd33992c4916 */
	private java.lang.String qoCurrency;


	/** 贸易形式
	 * 
	 * @pdOid 30ef345f-3df0-4a2c-b612-b6c0d3a156df */
	private java.lang.String tradeForm;
	/** 创建时间
	 * 
	 * @pdOid 1562efe0-f3ee-4194-904a-4e8e4dcaac61 */
	private java.util.Date createTime;
	/** 报价时间
	 * 
	 * @pdOid ca4a66cf-2385-4524-ab4b-6d676c970290 */
	private java.util.Date qoutationTime;
	/** 状态
	 * 
	 * @pdOid 15233a85-1c05-4536-9985-b08f17a6b280 */
	private String qoStatus;
	public String getQoStatus() {
		return qoStatus;
	}

	public void setQoStatus(String qoStatus) {
		this.qoStatus = qoStatus;
	}

	/** 版本号
	 * 
	 * @pdOid 8a625139-6571-48df-bf68-b412e3d6b0b0 */
	private Integer qoVersion;

	/** 创建人ID
	 * 
	 * @pdOid 15f95608-2e9c-4370-8fc7-a89ee410cdb0 */
	private java.lang.String createUserId;

	private java.lang.String salesOrderNum;

	private java.lang.String preparationNum;

	/** 测算单号
	 * 
	 * @pdOid 15fc047b-6abd-45e1-9553-4c7b3214ae07 */
	private java.lang.String evaluationNumber;
	/** 原材料描述
	 * 
	 * @pdOid 13857a25-bff3-4fe5-8d8c-3bea0b6aafcd */
	private java.lang.String materialDes;

	/** 规格
	 * 
	 * @pdOid e44986c1-b272-4a8d-9d2d-e7d70617adcf */
	private java.lang.String specification;

	/** 执行单价
	 * 
	 * @pdOid f3f7f891-747a-4012-880a-5dedcc14657e */
	private Float performPrice;

	private java.lang.String productName;

	@Formula("(select t.productName from qo_line t where t.headerId=headerId )")
	public java.lang.String getProductName() {
		return productName;
	}

	public void setProductName(java.lang.String productName) {
		this.productName = productName;
	}

	@Formula("(select t.evaluationNumber from qo_line t where t.headerId=headerId )")
	public java.lang.String getEvaluationNumber() {
		return evaluationNumber;
	}

	public void setEvaluationNumber(java.lang.String evaluationNumber) {
		this.evaluationNumber = evaluationNumber;
	}

	@Formula("(select t.materialDes from qo_line t where t.headerId=headerId )")
	public java.lang.String getMaterialDes() {
		return materialDes;
	}

	public void setMaterialDes(java.lang.String materialDes) {
		this.materialDes = materialDes;
	}

	@Formula("(select t.specification from qo_line t where t.headerId=headerId )")
	public java.lang.String getSpecification() {
		return specification;
	}

	public void setSpecification(java.lang.String specification) {
		this.specification = specification;
	}

	@Formula("(select t.performPrice from qo_line t where t.headerId=headerId )")
	public Float getPerformPrice() {
		return performPrice;
	}

	public void setPerformPrice(Float performPrice) {
		this.performPrice = performPrice;
	}

	@Id
	/** @pdOid e6e3fda7-4067-41a5-adb7-1b0d9b52988f */
	public java.lang.String getHeaderId() {
		return headerId;
	}

	/** @param newHeaderId
	 * @pdOid f566a758-2968-4c9b-852f-56b0c4ee99a4 */
	public void setHeaderId(java.lang.String newHeaderId) {
		headerId = newHeaderId;
	}

	public java.lang.String getQoCurrency() {
		return qoCurrency;
	}

	public void setQoCurrency(java.lang.String qoCurrency) {
		this.qoCurrency = qoCurrency;
	}


	public Integer getQoVersion() {
		return qoVersion;
	}

	public void setQoVersion(Integer qoVersion) {
		this.qoVersion = qoVersion;
	}
	/** @pdOid 0599f08a-87be-4483-9a1d-afd835b63ca5 */
	public java.lang.String getCustomId() {
		return customId;
	}

	/** @param newCustomId
	 * @pdOid 79180418-6104-402b-b69c-3eb1bfd8b054 */
	public void setCustomId(java.lang.String newCustomId) {
		customId = newCustomId;
	}

	/** @pdOid bcf21cb0-b521-4552-b2ea-4f67d1dd672b */
	public java.lang.String getInquirer() {
		return inquirer;
	}

	/** @param newInquirer
	 * @pdOid c788258a-f312-48ca-b7aa-6332cd417bde */
	public void setInquirer(java.lang.String newInquirer) {
		inquirer = newInquirer;
	}

	/** @pdOid e33e859f-486f-469a-b81c-d608ce170c11 */
	public java.lang.String getTradeForm() {
		return tradeForm;
	}

	/** @param newTradeForm
	 * @pdOid d30c9f37-ca98-406b-9c61-355d492fe963 */
	public void setTradeForm(java.lang.String newTradeForm) {
		tradeForm = newTradeForm;
	}

	/** @pdOid c5566f4d-807d-4248-96fc-4a186ff8aec4 */
	public java.util.Date getCreateTime() {
		return createTime;
	}

	/** @param newCreateTime
	 * @pdOid e78cbf69-9a59-4198-8467-73bed6dd9a69 */
	public void setCreateTime(java.util.Date newCreateTime) {
		createTime = newCreateTime;
	}

	/** @pdOid 486234c4-4d53-4c62-afbc-15da86dd2f82 */
	public java.util.Date getQoutationTime() {
		return qoutationTime;
	}

	/** @param newQoutationTime
	 * @pdOid b20a3795-5656-4f26-8ba3-9ad72bddf350 */
	public void setQoutationTime(java.util.Date newQoutationTime) {
		qoutationTime = newQoutationTime;
	}

	public java.lang.String getQoutationNumber() {
		return qoutationNumber;
	}

	public void setQoutationNumber(java.lang.String qoutationNumber) {
		this.qoutationNumber = qoutationNumber;
	}

	/** @pdOid c7d77313-3f21-433a-8dfd-576963dde791 */
	public java.lang.String getCreateUserId() {
		return createUserId;
	}

	/** @param newCreateUserId
	 * @pdOid 705a9a4c-4023-4b26-b96f-c762c2a81f69 */
	public void setCreateUserId(java.lang.String newCreateUserId) {
		createUserId = newCreateUserId;
	}

	public java.lang.String getSalesOrderNum() {
		return salesOrderNum;
	}

	public void setSalesOrderNum(java.lang.String salesOrderNum) {
		this.salesOrderNum = salesOrderNum;
	}

	public java.lang.String getPreparationNum() {
		return preparationNum;
	}

	public void setPreparationNum(java.lang.String preparationNum) {
		this.preparationNum = preparationNum;
	}


}