package com.chinaias.entity.erp.POF;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_PURCHASE_INFO")
public class G_PURCHASE_INFO {
	private List<PURCHASE> pURCHASEList;

	@XmlElement(name = "PURCHASE")
	public List<PURCHASE> getpURCHASEList() {
		return pURCHASEList;
	}

	public void setpURCHASEList(List<PURCHASE> pURCHASEList) {
		this.pURCHASEList = pURCHASEList;
	}
	
}
