package com.chinaias.entity.po;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_PURCHASE_INFO")
public class G_PURCHASE_INFO {
	private List<PoLineOutOrder> poLineOutOrderList;

	@XmlElement(name = "PURCHASE")
	public List<PoLineOutOrder> getPoLineOutOrderList() {
		return poLineOutOrderList;
	}

	public void setPoLineOutOrderList(List<PoLineOutOrder> poLineOutOrderList) {
		this.poLineOutOrderList = poLineOutOrderList;
	}
	
	
}
