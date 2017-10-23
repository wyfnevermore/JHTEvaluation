package com.chinaias.entity.erp.FI;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_FORECAST_ITEM_INFO")
public class G_FORECAST_ITEM_INFO {
	private List<FORECAST_ITEM> fORECAST_ITEM;

	@XmlElement(name = "FORECAST_ITEM")
	public List<FORECAST_ITEM> getfORECAST_ITEM() {
		return fORECAST_ITEM;
	}

	public void setfORECAST_ITEM(List<FORECAST_ITEM> fORECAST_ITEM) {
		this.fORECAST_ITEM = fORECAST_ITEM;
	}
	
}
