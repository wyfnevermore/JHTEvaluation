package com.chinaias.service;

import java.util.List;

import com.chinaias.entity.QoLine;
import com.chinaias.entity.po.PoOrder;
import com.chinaias.entity.so.SoLine;

public interface IPurchaseOrderService {
	public List<PoOrder> generatePoOrder(List<SoLine> soLineList);
	public PoOrder getPoOrderByHeaderId(String headerId);
	public PoOrder savePoOrder(PoOrder poOrder);
	public void saveNewPoOrder(PoOrder poOrder);
	public String getPoOrderReturnOrderNumber(PoOrder poOrder);
}
