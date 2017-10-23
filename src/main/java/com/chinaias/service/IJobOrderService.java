package com.chinaias.service;

import java.util.List;

import com.chinaias.entity.jo.JoHeader;
import com.chinaias.entity.jo.JoOrder;
import com.chinaias.entity.po.PoOrder;

public interface IJobOrderService {
	public List<JoHeader> getJobOrderByJOObject(JoHeader joHeader);
	public JoOrder getJobOrderByHeaderId(String HeaderId);
	public void saveJoOrder(JoOrder joOrder);
}
