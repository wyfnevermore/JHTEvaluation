package com.chinaias.entity.pc;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "PC_RESOUCE_INFO", schema = "jhteval")
@XmlRootElement(name="RESOURCE_INFO")
public class PcResourceInfo {
   private String resourceInfoId;
   /** 工序 */
   private String operationCode;
   /** 关联字段，加工合同号 */
   private String processContractNum;
   /** 关联字段，头id*/
   private String jobInfoId;
   
   @Id
   public String getResourceInfoId() {
      return resourceInfoId;
   }
   
   public void setResourceInfoId(String newResourceInfoId) {
      resourceInfoId = newResourceInfoId;
   }
   
   @XmlElement(name="OPERATION_CODE")
   public String getOperationCode() {
      return operationCode;
   }
   
   public void setOperationCode(String newOperationCode) {
      operationCode = newOperationCode;
   }
   
   public String getProcessContractNum() {
      return processContractNum;
   }
   
   public void setProcessContractNum(String newProcessContractNum) {
      processContractNum = newProcessContractNum;
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

	public String getJobInfoId() {
		return jobInfoId;
	}

	public void setJobInfoId(String jobInfoId) {
		this.jobInfoId = jobInfoId;
	}

}