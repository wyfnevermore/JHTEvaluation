package com.chinaias.entity.po;

import java.util.List;

public class PoOrder {
	private PoHeader poHeader;
	private List<PoLine> poLineList;
	private List<PoDistributions> poDistributionsList;
	
	
	public PoHeader getPoHeader() {
		return poHeader;
	}
	public void setPoHeader(PoHeader poHeader) {
		this.poHeader = poHeader;
	}
	public List<PoLine> getPoLineList() {
		return poLineList;
	}
	public void setPoLineList(List<PoLine> poLineList) {
		this.poLineList = poLineList;
	}
	public List<PoDistributions> getPoDistributionsList() {
		return poDistributionsList;
	}
	public void setPoDistributionsList(List<PoDistributions> poDistributionsList) {
		this.poDistributionsList = poDistributionsList;
	}
	
	
}
