package com.chinaias.entity.erp.POF;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="PARAMETER")
public class ERP_POF_PACKAGE {
	private G_PURCHASE_INFO g_PURCHASE_INFO;

	@XmlElement(name = "G_PURCHASE_INFO")
	public G_PURCHASE_INFO getG_PURCHASE_INFO() {
		return g_PURCHASE_INFO;
	}

	public void setG_PURCHASE_INFO(G_PURCHASE_INFO g_PURCHASE_INFO) {
		this.g_PURCHASE_INFO = g_PURCHASE_INFO;
	}
	
}
