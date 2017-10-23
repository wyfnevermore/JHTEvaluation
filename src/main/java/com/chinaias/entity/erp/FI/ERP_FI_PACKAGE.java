package com.chinaias.entity.erp.FI;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="PARAMETER")
public class ERP_FI_PACKAGE {
	private G_FORECAST_ITEM_INFO g_FORECAST_ITEM_INFO;

	@XmlElement(name = "G_FORECAST_ITEM_INFO")
	public G_FORECAST_ITEM_INFO getG_FORECAST_ITEM_INFO() {
		return g_FORECAST_ITEM_INFO;
	}

	public void setG_FORECAST_ITEM_INFO(G_FORECAST_ITEM_INFO g_FORECAST_ITEM_INFO) {
		this.g_FORECAST_ITEM_INFO = g_FORECAST_ITEM_INFO;
	}
	
	
}
