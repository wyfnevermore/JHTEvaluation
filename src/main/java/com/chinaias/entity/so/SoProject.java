package com.chinaias.entity.so;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "SO_Project", schema = "jhteval")
@XmlRootElement(name="PROJECT")
public class SoProject {

	private java.lang.String projectId;
	private java.lang.String projectOrgName;
	private java.lang.String projectName;
	private java.lang.String projectType;
	//库存组织标志
	private java.lang.String invWgFlag;
	private java.lang.String invT2sFlag;
	private java.lang.String invWmFlag;
	private java.lang.String invDjFlag;
	private java.lang.String backupCustomer;
	private java.lang.String departmentName;
	private java.lang.String projectNumber;
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

	@XmlElement(name="PROJECT_NUMBER")
	public java.lang.String getProjectNumber() {
		return projectNumber;
	}
	public void setProjectNumber(java.lang.String projectNumber) {
		this.projectNumber = projectNumber;
	}

	@Id
	public java.lang.String getProjectId() {
		return projectId;
	}
	public void setProjectId(java.lang.String projectId) {
		this.projectId = projectId;
	}
	@XmlElement(name="ORG_NAME")
	public java.lang.String getProjectOrgName() {
		return projectOrgName;
	}
	public void setProjectOrgName(java.lang.String projectOrgName) {
		this.projectOrgName = projectOrgName;
	}
	
	@XmlElement(name="PROJECT_NAME")
	public java.lang.String getProjectName() {
		return projectName;
	}
	public void setProjectName(java.lang.String projectName) {
		this.projectName = projectName;
	}
	
	@XmlElement(name="PROJECT_TYPE")
	public java.lang.String getProjectType() {
		return projectType;
	}
	public void setProjectType(java.lang.String projectType) {
		this.projectType = projectType;
	}
	
	@XmlElement(name="INV_WG_FLAG")
	public java.lang.String getInvWgFlag() {
		return invWgFlag;
	}
	public void setInvWgFlag(java.lang.String invWgFlag) {
		this.invWgFlag = invWgFlag;
	}
	
	@XmlElement(name="INV_T2S_FLAG")
	public java.lang.String getInvT2sFlag() {
		return invT2sFlag;
	}
	public void setInvT2sFlag(java.lang.String invT2sFlag) {
		this.invT2sFlag = invT2sFlag;
	}
	
	@XmlElement(name="INV_WM_FLAG")
	public java.lang.String getInvWmFlag() {
		return invWmFlag;
	}
	public void setInvWmFlag(java.lang.String invWmFlag) {
		this.invWmFlag = invWmFlag;
	}
	
	@XmlElement(name="INV_DJ_FLAG")
	public java.lang.String getInvDjFlag() {
		return invDjFlag;
	}
	public void setInvDjFlag(java.lang.String invDjFlag) {
		this.invDjFlag = invDjFlag;
	}
	
	@XmlElement(name="BACKUP_CUSTOMER")
	public java.lang.String getBackupCustomer() {
		return backupCustomer;
	}
	public void setBackupCustomer(java.lang.String backupCustomer) {
		this.backupCustomer = backupCustomer;
	}
	
	@XmlElement(name="DEPARTMENT_NAME")
	public java.lang.String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(java.lang.String departmentName) {
		this.departmentName = departmentName;
	}


}
