package com.chinaias.webservice.erp;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
@XmlRootElement(name="PARAMETER")
public class PARAMETER {
	private List<ItemUom> itemList;
	@XmlElement(name = "G_INV_UOM_INFO")
	public List<ItemUom> getItemList() {
		return itemList;
	}

	public void setItemList(List<ItemUom> itemList) {
		this.itemList = itemList;
	}
	
}
