package com.chinaias.entity.po;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_PO_HEADERS")
public class G_PO_HEADERS {
	private PoHeader poHeader;

	@XmlElement(name = "PO_HEADER")
	public PoHeader getPoHeader() {
		return poHeader;
	}

	public void setPoHeader(PoHeader poHeader) {
		this.poHeader = poHeader;
	}

}
