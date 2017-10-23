/***********************************************************************
 * Module:  QoAudit.java
 * Author:  afg_s
 * Purpose: Defines the Class QoAudit
 ***********************************************************************/
package com.chinaias.entity;
import java.util.*;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "QO_AUDIT", schema = "jhteval")
/** @pdOid 639ce681-d0e2-49fd-a061-af744a053506 */
public class QoAudit {
   /** @pdOid 3cf768a7-d1ee-4384-b3fd-19797d1712df */
   private java.lang.String auditId;
   /** 报价单头ID
    * 
    * @pdOid f9482b68-636d-4638-95fe-713b4324df61 */
   private java.lang.String qoHeaderId;
   /** 申请人
    * 
    * @pdOid 0ad9d93d-5a74-43ed-9026-bcc61f881e05 */
   private java.lang.String applicant;
   /** 申请时间
    * 
    * @pdOid ea97a8ee-90ee-4e84-8997-b77ecb1bfc28 */
   private java.util.Date applicantTime;
   /** 第一审批人
    * 
    * @pdOid 25d00850-c0f9-4d25-8ff0-216c855689a7 */
   private java.lang.String firstAuditUserId;
   /** @pdOid a5e35569-f0aa-44c5-8708-3e7fa964a08a */
   private int firstAuditStatus;
   /** @pdOid 44ce3a48-9001-4d50-99c1-28bcca19a73e */
   private java.util.Date firstAuditTime;
   /** @pdOid b0675580-e693-4742-b0f8-4766b168a0c3 */
   private java.lang.String firstAuditRemark;
   /** @pdOid ea854996-1bfa-4e2d-b786-7233eaf20a76 */
   private float firstAuditPrice;
   /** @pdOid 53ed4d11-7f9f-4c63-b892-9e4b7e7c0960 */
   private java.lang.String secAuditUserId;
   /** @pdOid cf3e49ad-7ee2-444f-97d5-2907d406e440 */
   private int secAuditStatus;
   /** @pdOid f7931a86-2e0d-4ade-9419-239e23c402cc */
   private java.util.Date secAuditTime;
   /** @pdOid ebc6dc00-d19e-4f21-9e93-f30149f22d97 */
   private java.lang.String secAuditRemark;
   /** @pdOid c48e9979-1755-4711-8867-631210f3276f */
   private float secAuditPrice;
   /** @pdOid 65dd8f92-7edf-4a2f-9b53-a69a325d23b6 */
   private java.lang.String thirdAuditUserId;
   /** @pdOid 212f8c9c-624d-4cdc-8697-98c5fbeb6fd5 */
   private int thirdAuditStatus;
   /** @pdOid fc7c5fbe-ff66-4f86-83ce-7df2ac082650 */
   private java.util.Date thirdAuditTime;
   /** @pdOid 9e057b6d-dff2-4d0e-928f-1b2bdd4f4884 */
   private java.lang.String thirdAuditRemark;
   /** @pdOid 93a69def-09ef-4fd5-a920-2413231456d6 */
   private float thirdAuditPrice;
   
   @Id
   /** @pdOid 59fade98-19fc-428f-9344-da0e4f6dda3b */
   public java.lang.String getAuditId() {
      return auditId;
   }
   
   /** @param newAuditId
    * @pdOid 91db346a-d95b-4059-b0f4-29e026c44bc4 */
   public void setAuditId(java.lang.String newAuditId) {
      auditId = newAuditId;
   }
   
   /** @pdOid 82112923-dcf1-4c05-848a-2b77a2c53eb0 */
   public java.lang.String getQoHeaderId() {
      return qoHeaderId;
   }
   
   /** @param newQoHeaderId
    * @pdOid 0db9107f-70ae-4669-a8f7-3fd06966c402 */
   public void setQoHeaderId(java.lang.String newQoHeaderId) {
      qoHeaderId = newQoHeaderId;
   }
   
   /** @pdOid 098c0ec1-6856-4f52-980b-8bdc9f64c4b1 */
   public java.lang.String getApplicant() {
      return applicant;
   }
   
   /** @param newApplicant
    * @pdOid df17a484-45e5-492d-808c-0eb6b056e264 */
   public void setApplicant(java.lang.String newApplicant) {
      applicant = newApplicant;
   }
   
   /** @pdOid 301d25c0-676a-4a46-97d5-4b90c5cd3a03 */
   public java.util.Date getApplicantTime() {
      return applicantTime;
   }
   
   /** @param newApplicantTime
    * @pdOid 42569229-c936-4849-a728-d959f9f4bbf5 */
   public void setApplicantTime(java.util.Date newApplicantTime) {
      applicantTime = newApplicantTime;
   }
   
   /** @pdOid 25a51985-1ee7-4e17-b38d-454f5b2cd957 */
   public java.lang.String getFirstAuditUserId() {
      return firstAuditUserId;
   }
   
   /** @param newFirstAuditUserId
    * @pdOid c92d7a24-0ce4-48cf-ae24-32112f3d386f */
   public void setFirstAuditUserId(java.lang.String newFirstAuditUserId) {
      firstAuditUserId = newFirstAuditUserId;
   }
   
   /** @pdOid d11894db-d0d6-4bf7-a3da-235f29b7d0f9 */
   public int getFirstAuditStatus() {
      return firstAuditStatus;
   }
   
   /** @param newFirstAuditStatus
    * @pdOid b0d21475-ab52-4ae8-a428-d4eb21bff8d5 */
   public void setFirstAuditStatus(int newFirstAuditStatus) {
      firstAuditStatus = newFirstAuditStatus;
   }
   
   /** @pdOid 3aaf8d0e-35c6-4201-8fab-d5d3d62829eb */
   public java.util.Date getFirstAuditTime() {
      return firstAuditTime;
   }
   
   /** @param newFirstAuditTime
    * @pdOid d7775349-5ad6-4b6c-8ee0-488c236fe3f8 */
   public void setFirstAuditTime(java.util.Date newFirstAuditTime) {
      firstAuditTime = newFirstAuditTime;
   }
   
   /** @pdOid 754c6af2-ec68-4c23-a9e8-f9ea03d02501 */
   public java.lang.String getFirstAuditRemark() {
      return firstAuditRemark;
   }
   
   /** @param newFirstAuditRemark
    * @pdOid cea520eb-9de4-4b20-b598-0b9d9da30da0 */
   public void setFirstAuditRemark(java.lang.String newFirstAuditRemark) {
      firstAuditRemark = newFirstAuditRemark;
   }
   
   /** @pdOid 1b5a236a-29fa-40af-a162-ab5042e81bd4 */
   public float getFirstAuditPrice() {
      return firstAuditPrice;
   }
   
   /** @param newFirstAuditPrice
    * @pdOid b865c684-3cfc-4d29-8dbb-0fe324dcca63 */
   public void setFirstAuditPrice(float newFirstAuditPrice) {
      firstAuditPrice = newFirstAuditPrice;
   }
   
   /** @pdOid af50c087-0229-4f72-a2ec-d9e135bbefa1 */
   public java.lang.String getSecAuditUserId() {
      return secAuditUserId;
   }
   
   /** @param newSecAuditUserId
    * @pdOid 296fc58a-e13d-4982-a3eb-084cce14512e */
   public void setSecAuditUserId(java.lang.String newSecAuditUserId) {
      secAuditUserId = newSecAuditUserId;
   }
   
   /** @pdOid 94879163-b9b9-4d31-a7d4-812948a429cf */
   public int getSecAuditStatus() {
      return secAuditStatus;
   }
   
   /** @param newSecAuditStatus
    * @pdOid fdfcda7b-12cb-4cb7-a71f-051174087a9d */
   public void setSecAuditStatus(int newSecAuditStatus) {
      secAuditStatus = newSecAuditStatus;
   }
   
   /** @pdOid d3d806d5-3b55-4da3-b29e-f01e43e3d32c */
   public java.util.Date getSecAuditTime() {
      return secAuditTime;
   }
   
   /** @param newSecAuditTime
    * @pdOid 1558eaf6-a57a-45ef-adf2-cad94133de1a */
   public void setSecAuditTime(java.util.Date newSecAuditTime) {
      secAuditTime = newSecAuditTime;
   }
   
   /** @pdOid 6e41f3d6-0f21-4e2e-8de0-745fd1bc3a11 */
   public java.lang.String getSecAuditRemark() {
      return secAuditRemark;
   }
   
   /** @param newSecAuditRemark
    * @pdOid b2104f88-59ce-457d-913a-14603e8dd88c */
   public void setSecAuditRemark(java.lang.String newSecAuditRemark) {
      secAuditRemark = newSecAuditRemark;
   }
   
   /** @pdOid 00cc8118-553f-4fd5-af45-0bfbfbe161ad */
   public float getSecAuditPrice() {
      return secAuditPrice;
   }
   
   /** @param newSecAuditPrice
    * @pdOid d4d86bee-1da1-4552-aa00-327acb8b77ca */
   public void setSecAuditPrice(float newSecAuditPrice) {
      secAuditPrice = newSecAuditPrice;
   }
   
   /** @pdOid f8cb00f9-f656-429f-bdf3-4ed614dbb42c */
   public java.lang.String getThirdAuditUserId() {
      return thirdAuditUserId;
   }
   
   /** @param newThirdAuditUserId
    * @pdOid d02210a4-9d64-46f8-912d-e3ab247fae27 */
   public void setThirdAuditUserId(java.lang.String newThirdAuditUserId) {
      thirdAuditUserId = newThirdAuditUserId;
   }
   
   /** @pdOid eb7a739d-c16d-4f0b-a8df-b836b4f7415c */
   public int getThirdAuditStatus() {
      return thirdAuditStatus;
   }
   
   /** @param newThirdAuditStatus
    * @pdOid 341b252e-7205-45ab-b0e9-173f19126c96 */
   public void setThirdAuditStatus(int newThirdAuditStatus) {
      thirdAuditStatus = newThirdAuditStatus;
   }
   
   /** @pdOid e0ba9ad4-b02f-43ff-8148-e3d9c3afba58 */
   public java.util.Date getThirdAuditTime() {
      return thirdAuditTime;
   }
   
   /** @param newThirdAuditTime
    * @pdOid 8000d46c-964a-4fba-aee5-e4527627ed29 */
   public void setThirdAuditTime(java.util.Date newThirdAuditTime) {
      thirdAuditTime = newThirdAuditTime;
   }
   
   /** @pdOid 399fe2af-bd6f-417c-abe3-0039cb49deca */
   public java.lang.String getThirdAuditRemark() {
      return thirdAuditRemark;
   }
   
   /** @param newThirdAuditRemark
    * @pdOid 604f0895-2455-433c-9f73-12206f8cf1e4 */
   public void setThirdAuditRemark(java.lang.String newThirdAuditRemark) {
      thirdAuditRemark = newThirdAuditRemark;
   }
   
   /** @pdOid 4a3c5dbf-ccc5-4300-b944-0c350b85183b */
   public float getThirdAuditPrice() {
      return thirdAuditPrice;
   }
   
   /** @param newThirdAuditPrice
    * @pdOid bb16a4f0-94dd-41ee-a5b5-1b33d8d55e78 */
   public void setThirdAuditPrice(float newThirdAuditPrice) {
      thirdAuditPrice = newThirdAuditPrice;
   }

}