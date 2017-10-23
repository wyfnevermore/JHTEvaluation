package com.chinaias.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.QoHeader;
import com.chinaias.entity.jo.JoHeader;
import com.chinaias.entity.jo.JoLine;
import com.chinaias.entity.jo.JoOrder;
import com.chinaias.entity.po.PoLine;
import com.chinaias.entity.po.PoOrder;
import com.chinaias.service.IJobOrderService;
import com.chinaias.util.Tools;
@Service
public class JobOrderService  extends BaseService<QoHeader> implements IJobOrderService{
	@Resource
	private IBaseDao<JoHeader> baseDao;
	@Resource
	private IBaseDao<JoLine> joLineDao;
	@Override
	public List<JoHeader> getJobOrderByJOObject(JoHeader joHeader) {
		
		return baseDao.findAll("from JoHeader");
	}
	
	public JoOrder getJobOrderByHeaderId(String HeaderId){
		JoOrder joOrder = new JoOrder();
		JoHeader joHeader = baseDao.findById(JoHeader.class, HeaderId);
		List<JoLine> joLineList = joLineDao.findByProperty(JoLine.class, "headerId", HeaderId);
		joOrder.setJoHeader(joHeader);
		joOrder.setJoLineList(joLineList);
		return joOrder;
	}
	
	@Override
	public void saveJoOrder(JoOrder joOrder){
		// TODO Auto-generated method stub
		String headerId = Tools.getUUID();
		joOrder.getJoHeader().setHeaderId(headerId);
		baseDao.save(joOrder.getJoHeader());
		for(JoLine joLine : joOrder.getJoLineList()){
			joLine.setLineId(Tools.getUUID());
			joLine.setHeaderId(headerId);
			joLineDao.save(joLine);
		}
	}

}
