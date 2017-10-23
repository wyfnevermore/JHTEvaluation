package com.chinaias.service;

import java.util.List;

import com.chinaias.entity.QoLine;
import com.chinaias.entity.jo.JoOrder;
import com.chinaias.entity.so.SoOrder;

public interface ISalesOrderService {
	
	//点击新增工单时候调用，tabs中的每个工单对应的物料信息
	public List<JoOrder> generateJoOrders(String evalationNumber, String soHeaderId , String soLineId);
	
	//点击销售订单中的下一步时调用，tabs中的每个销售订单列表信息
	public List<SoOrder> generateSoOrder(List<QoLine> qoLineList , String deliveryMethod , String provenance , String destination , String packageDes);
	
	public SoOrder getSoOrderByHeaderId(String headerId);
	
	public String getSoOrderReturnOrderNumber(SoOrder soOrder);

}
