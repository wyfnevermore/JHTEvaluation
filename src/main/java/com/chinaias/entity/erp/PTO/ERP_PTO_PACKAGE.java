package com.chinaias.entity.erp.PTO;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="PARAMETER")
public class ERP_PTO_PACKAGE {
	private G_PTO_INFO g_PTO_INFO;

	@XmlElement(name = "G_PTO_INFO")
	public G_PTO_INFO getG_PTO_INFO() {
		return g_PTO_INFO;
	}

	public void setG_PTO_INFO(G_PTO_INFO g_PTO_INFO) {
		this.g_PTO_INFO = g_PTO_INFO;
	}
	
}
