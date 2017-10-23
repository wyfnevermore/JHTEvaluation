package com.chinaias.service;

import java.util.List;

import com.chinaias.entity.AgentCost;
import com.chinaias.entity.OtherCost;
import com.chinaias.entity.PrePaid;

public interface IOtherCostService{
	public String save(OtherCost t);
	
	public String savePrepaid(PrePaid t);
	
	public String saveAgentCost(AgentCost t);
	
	public List<OtherCost> getOtherCostListByListid(String listID);
}
