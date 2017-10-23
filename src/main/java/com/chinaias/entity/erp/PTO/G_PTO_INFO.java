package com.chinaias.entity.erp.PTO;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_PTO_INFO")
public class G_PTO_INFO {
	private List<PTO_INFO> pTO_INFO;

	@XmlElement(name = "PTO_INFO")
	public List<PTO_INFO> getpTO_INFO() {
		return pTO_INFO;
	}

	public void setpTO_INFO(List<PTO_INFO> pTO_INFO) {
		this.pTO_INFO = pTO_INFO;
	}
	
}
