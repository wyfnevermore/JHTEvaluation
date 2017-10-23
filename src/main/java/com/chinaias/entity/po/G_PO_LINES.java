package com.chinaias.entity.po;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_PO_LINES")
public class G_PO_LINES {
	private List<PoLine> poLineList;

	@XmlElement(name = "PO_LINE")
	public List<PoLine> getPoLineList() {
		return poLineList;
	}

	public void setPoLineList(List<PoLine> poLineList) {
		this.poLineList = poLineList;
	}
	
	
}
