package com.chinaias.entity.erp.MDS;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="PARAMETER")
public class ERP_MDS_PACKAGE {
	private G_MDS_ITEM_INFO g_MDS_ITEM_INFO;

	@XmlElement(name = "G_MDS_ITEM_INFO")
	public G_MDS_ITEM_INFO getG_MDS_ITEM_INFO() {
		return g_MDS_ITEM_INFO;
	}

	public void setG_MDS_ITEM_INFO(G_MDS_ITEM_INFO g_MDS_ITEM_INFO) {
		this.g_MDS_ITEM_INFO = g_MDS_ITEM_INFO;
	}
	
}
