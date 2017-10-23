package com.chinaias.entity.pc;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="PARAMETER")
public class ERP_JOB_PACKAGE {
	private PcOrder pcOrder;
	

	@XmlElement(name = "G_JOB_INFO")
	public PcOrder getPcOrder() {
		return pcOrder;
	}
	public void setPcOrder(PcOrder pcOrder) {
		this.pcOrder = pcOrder;
	}
	
	
}
