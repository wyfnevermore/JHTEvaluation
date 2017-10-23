package com.chinaias.entity.po;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_PO_DISTRIBUTIONS")
public class G_PO_DISTRIBUTIONS {
	private List<PoDistributions> poDistributions;

	@XmlElement(name = "PO_DISTRIBUTION")
	public List<PoDistributions> getPoDistributions() {
		return poDistributions;
	}

	public void setPoDistributions(List<PoDistributions> poDistributions) {
		this.poDistributions = poDistributions;
	}
	
	
}
