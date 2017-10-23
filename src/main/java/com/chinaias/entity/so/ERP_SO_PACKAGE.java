package com.chinaias.entity.so;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="PARAMETER")
public class ERP_SO_PACKAGE {
	private SoOrder soOrder;

	@XmlElement(name = "G_OE_ORDER_INFO")
	public SoOrder getSoOrder() {
		return soOrder;
	}

	public void setSoOrder(SoOrder soOrder) {
		this.soOrder = soOrder;
	}
}
