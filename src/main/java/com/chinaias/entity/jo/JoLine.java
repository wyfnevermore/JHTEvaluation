package com.chinaias.entity.jo;

/***********************************************************************
 * Module:  JoLine.java
 * Author:  afg_s
 * Purpose: Defines the Class JoLine
 ***********************************************************************/

import java.util.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** @pdOid bf237321-7f63-4acd-bb91-a212c59f5bc3 */@Entity
@Table(name = "JO_LINE", schema = "jhteval")
public class JoLine {
   /** @pdOid 0fd0d8e8-8bac-4857-9f62-ea9fe0be4e61 */
   private java.lang.String lineId;
   /** @pdOid 370c809d-0260-4808-a3f3-9275f5a9de64 */
   private java.lang.String headerId;
   /** @pdOid 9733d2d8-a4a7-45f4-a61f-54b1e3f9cebc */
   private java.lang.String materialName;
   /** @pdOid 8fd0cd4a-f476-4ce6-bbb0-6439fde395d8 */
   private java.lang.String materialSku;
   /** 数量
    * 
    * @pdOid 163c1875-60cc-4a49-b70e-8c4fff63386b */
   private float quantity;
   /** 产出率
    * 
    * @pdOid 0fb606a8-760d-4dfe-aa1f-1c045555994a */
   private float productivity;
   
   /** @pdOid 615846d4-6b06-4f1c-ae42-2994df93a479 */
   @Id
   public java.lang.String getLineId() {
      return lineId;
   }
   
   /** @param newLineId
    * @pdOid b041900d-090e-4144-999b-f68aeca826c5 */
   public void setLineId(java.lang.String newLineId) {
      lineId = newLineId;
   }
   
   /** @pdOid 231c021a-7406-4bf8-97ef-aed0ec6457e5 */
   public java.lang.String getHeaderId() {
      return headerId;
   }
   
   /** @param newHeaderId
    * @pdOid 9bcc9057-d116-4473-a7f5-c0448958d436 */
   public void setHeaderId(java.lang.String newHeaderId) {
      headerId = newHeaderId;
   }
   
   /** @pdOid 08d12c35-761b-4692-9d31-daa9ac84cfa2 */
   public java.lang.String getMaterialName() {
      return materialName;
   }
   
   /** @param newMaterialName
    * @pdOid c21de652-2df5-44a1-904f-9302052e547e */
   public void setMaterialName(java.lang.String newMaterialName) {
      materialName = newMaterialName;
   }
   
   /** @pdOid 1b704c93-a004-4b3e-ae9d-2f772182e123 */
   public java.lang.String getMaterialSku() {
      return materialSku;
   }
   
   /** @param newMaterialSku
    * @pdOid f44de953-8e7d-4421-9ca6-c8d4b0d04bc7 */
   public void setMaterialSku(java.lang.String newMaterialSku) {
      materialSku = newMaterialSku;
   }
   
   /** @pdOid f29bbe6d-7e98-4bf2-b937-8568ce901bd3 */
   public float getQuantity() {
      return quantity;
   }
   
   /** @param newQuantity
    * @pdOid 73807a54-8a60-4cb1-9991-7a2f73455762 */
   public void setQuantity(float newQuantity) {
      quantity = newQuantity;
   }
   
   /** @pdOid 66a4fded-47eb-48f8-972b-7721d78c62ee */
   public float getProductivity() {
      return productivity;
   }
   
   /** @param newProductivity
    * @pdOid 87e5b270-e765-408c-91f9-8f24efba43e0 */
   public void setProductivity(float newProductivity) {
      productivity = newProductivity;
   }

}