package com.chinaias.entity.so;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_OE_ORDER_INFO")
public class SoOrder {
	private SoHeader soHeader;
	private List<SoLine> soLineList;
	private List<SoCommissions> soCommissionsList;
	
	@XmlElement(name = "ORDER_HEADER")
	public SoHeader getSoHeader() {
		return soHeader;
	}
	public void setSoHeader(SoHeader soHeader) {
		this.soHeader = soHeader;
	}
	
	@XmlElement(name = "ORDER_LINE")
	public List<SoLine> getSoLineList() {
		return soLineList;
	}
	public void setSoLineList(List<SoLine> soLineList) {
		this.soLineList = soLineList;
	}
	
	@XmlElement(name = "OE_COMMISSIONS")
	public List<SoCommissions> getSoCommissionsList() {
		return soCommissionsList;
	}
	public void setSoCommissionsList(List<SoCommissions> soCommissionsList) {
		this.soCommissionsList = soCommissionsList;
	}
	
	
}
