package com.chinaias.entity.erp.MDS;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_MDS_ITEM_INFO")
public class G_MDS_ITEM_INFO {
	private List<MDS_ITEM> mDS_ITEM;

	@XmlElement(name = "MDS_ITEM")
	public List<MDS_ITEM> getmDS_ITEM() {
		return mDS_ITEM;
	}

	public void setmDS_ITEM(List<MDS_ITEM> mDS_ITEM) {
		this.mDS_ITEM = mDS_ITEM;
	}
	
}
