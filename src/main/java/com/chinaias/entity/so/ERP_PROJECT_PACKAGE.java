package com.chinaias.entity.so;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="PARAMETER")
public class ERP_PROJECT_PACKAGE {
	private G_PROJECT_INFO g_PROJECT_INFO;

	@XmlElement(name = "G_PROJECT_INFO")
	public G_PROJECT_INFO getG_PROJECT_INFO() {
		return g_PROJECT_INFO;
	}

	public void setG_PROJECT_INFO(G_PROJECT_INFO g_PROJECT_INFO) {
		this.g_PROJECT_INFO = g_PROJECT_INFO;
	}
	
	
}
