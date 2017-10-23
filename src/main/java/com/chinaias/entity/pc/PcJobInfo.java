package com.chinaias.entity.pc;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import com.chinaias.util.XMLDateAdaptor;

@Entity
@Table(name = "PC_JOB_INFO", schema = "jhteval")
@XmlRootElement(name="JOB_INFO")
public class PcJobInfo {
   private String jobInfoId;
   /** 库存组织 */
   private String organizationId;
   /** 工单号 */
   private String jobName;
   /** 装配件 */
   private String assemblyItem;
   /** 数量 */
   private int startQuantity;
   /** 起始时间 */
   private java.util.Date schduledStartDate;
   /** 项目 */
   private String projectNumber;
   /** 加工合同号 */
   private String processContractNum;
   /** 材料费 */
   private String materialFee;
   /** 加工费 */
   private float processFee;
   /** 加工商 */
   private String processName;
   /** 网型 */
   private String meshType;
   /** 销售订单号 */
   private String orderNumber;
   /** 单产品生产工时 */
   private String singleProductTime;
   /** 花型 */
   private String flowerPattern;
	/** 车间 */
	private String workshop;
	/** 加工产品类别 */
	private String processProductType;
   
	@XmlElement(name = "WORKSHOP")
	public String getWorkshop() {
		return workshop;
	}

	public void setWorkshop(String workshop) {
		this.workshop = workshop;
	}

	@XmlElement(name = "PROCESS_PRODUCT_TYPE")
	public String getProcessProductType() {
		return processProductType;
	}

	public void setProcessProductType(String processProductType) {
		this.processProductType = processProductType;
	}
   @Id
   public String getJobInfoId() {
      return jobInfoId;
   }
   
   public void setJobInfoId(String newJobInfoId) {
      jobInfoId = newJobInfoId;
   }
   
   @XmlElement(name="ORGANIZATION_ID")
   public String getOrganizationId() {
      return organizationId;
   }
   
   public void setOrganizationId(String newOrganizationId) {
      organizationId = newOrganizationId;
   }
   
   @XmlElement(name="JOB_NAME")
   public String getJobName() {
      return jobName;
   }
   
   public void setJobName(String newJobName) {
      jobName = newJobName;
   }
   
   @XmlElement(name="ASSEMBLY_ITEM")
   public String getAssemblyItem() {
      return assemblyItem;
   }
   
   public void setAssemblyItem(String newAssemblyItem) {
      assemblyItem = newAssemblyItem;
   }
   
   @XmlElement(name="START_QUANTITY")
   public int getStartQuantity() {
      return startQuantity;
   }
   
   public void setStartQuantity(int newStartQuantity) {
      startQuantity = newStartQuantity;
   }
   
   @XmlElement(name="SCHDULED_START_DATE")
   @XmlJavaTypeAdapter(XMLDateAdaptor.class)
   public java.util.Date getSchduledStartDate() {
      return schduledStartDate;
   }
   
   public void setSchduledStartDate(java.util.Date newSchduledStartDate) {
      schduledStartDate = newSchduledStartDate;
   }
   
   @XmlElement(name="PROJECT_NUMBER")
   public String getProjectNumber() {
      return projectNumber;
   }
   
   public void setProjectNumber(String newProjectNumber) {
      projectNumber = newProjectNumber;
   }
   
   @XmlElement(name="PROCESS_CONTRACT_NUM")
   public String getProcessContractNum() {
      return processContractNum;
   }
   
   public void setProcessContractNum(String newProcessContractNum) {
      processContractNum = newProcessContractNum;
   }
   
   @XmlElement(name="MATERIAL_FEE")
   public String getMaterialFee() {
      return materialFee;
   }
   
   public void setMaterialFee(String newMaterialFee) {
      materialFee = newMaterialFee;
   }
   
   @XmlElement(name="PROCESS_FEE")
   public float getProcessFee() {
      return processFee;
   }
   
   public void setProcessFee(float newProcessFee) {
      processFee = newProcessFee;
   }
   
   @XmlElement(name="PROCESS_NAME")
   public String getProcessName() {
      return processName;
   }
   
   public void setProcessName(String newProcessName) {
      processName = newProcessName;
   }
   
   @XmlElement(name="MESH_TYPE")
   public String getMeshType() {
      return meshType;
   }
   
   public void setMeshType(String newMeshType) {
      meshType = newMeshType;
   }
   
   @XmlElement(name="ORDER_NUMBER")
   public String getOrderNumber() {
      return orderNumber;
   }
   
   public void setOrderNumber(String newOrderNumber) {
      orderNumber = newOrderNumber;
   }
   
   @XmlElement(name="SINGLE_PRODUCT_TIME")
   public String getSingleProductTime() {
      return singleProductTime;
   }
   
   public void setSingleProductTime(String newSingleProductTime) {
      singleProductTime = newSingleProductTime;
   }
   
   @XmlElement(name="FLOWER_PATTERN")
   public String getFlowerPattern() {
      return flowerPattern;
   }
   
   public void setFlowerPattern(String newFlowerPattern) {
      flowerPattern = newFlowerPattern;
   }
   
   
	private String importId;
	@Transient
	@XmlElement(name = "IMPORT_ID")
	public String getImportId() {
		return importId;
	}
	public void setImportId(String importId) {
		this.importId = importId;
	}

	private String sourceCode;
	@Transient
	@XmlElement(name = "SOURCE_CODE")
	public String getSourceCode() {
		return sourceCode;
	}
	public void setSourceCode(String sourceCode) {
		this.sourceCode = sourceCode;
	}
	

	private String sourceHeaderId;
	@Transient
	@XmlElement(name = "SOURCE_HEADER_ID")
	public String getSourceHeaderId() {
		return sourceHeaderId;
	}
	public void setSourceHeaderId(String sourceHeaderId) {
		this.sourceHeaderId = sourceHeaderId;
	}
	

	private String sourceLineId;
	@Transient
	@XmlElement(name = "SOURCE_LINE_ID")
	public String getSourceLineId() {
		return sourceLineId;
	}
	public void setSourceLineId(String sourceLineId) {
		this.sourceLineId = sourceLineId;
	}

}