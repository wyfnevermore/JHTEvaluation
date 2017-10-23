package com.chinaias.entity.pc;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="G_JOB_INFO")
public class PcOrder {
	private PcJobInfo pcJobInfo;
	private List<PcCompInfo> pcCompInfoList;
	private List<PcResourceInfo> pcResourceInfoList;
	
	@XmlElement(name = "JOB_INFO")
	public PcJobInfo getPcJobInfo() {
		return pcJobInfo;
	}
	public void setPcJobInfo(PcJobInfo pcJobInfo) {
		this.pcJobInfo = pcJobInfo;
	}
	@XmlElement(name = "COMP_INFO")
	public List<PcCompInfo> getPcCompInfoList() {
		return pcCompInfoList;
	}
	public void setPcCompInfoList(List<PcCompInfo> pcCompInfoList) {
		this.pcCompInfoList = pcCompInfoList;
	}
	@XmlElement(name = "RESOURCE_INFO")
	public List<PcResourceInfo> getPcResourceInfoList() {
		return pcResourceInfoList;
	}
	public void setPcResourceInfoList(List<PcResourceInfo> pcResourceInfoList) {
		this.pcResourceInfoList = pcResourceInfoList;
	}
	
	
	
}
