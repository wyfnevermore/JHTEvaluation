package com.chinaias.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.AgentCost;
import com.chinaias.entity.Carton;
import com.chinaias.entity.OtherCost;
import com.chinaias.entity.PrePaid;
import com.chinaias.service.IOtherCostService;


@Service
public class OtherCostService implements IOtherCostService{
	@Resource
	 private IBaseDao<OtherCost> baseDao;
	@Resource
	 private IBaseDao<PrePaid> baseDao2;
	@Resource
	 private IBaseDao<AgentCost> baseDao3;
	
	public String save(OtherCost t){
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		if(t.getListID()==null||"".equals(t.getListID())){
			String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
			t.setListID(uuid1);
		}
		t.setId(uuid);
		baseDao.save(t);
		return t.getListID();
	}
	
	public String savePrepaid(PrePaid t){
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		if(t.getListID()==null||"".equals(t.getListID())){
			String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
			t.setListID(uuid1);
		}
		t.setId(uuid);
		baseDao2.save(t);
		return t.getListID();
	}
	
	public String saveAgentCost(AgentCost t){
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		if(t.getListID()==null||"".equals(t.getListID())){
			String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
			t.setListID(uuid1);
		}
		t.setId(uuid);
		baseDao3.save(t);
		return t.getListID();
	}
	
	public List<OtherCost> getOtherCostListByListid(String listID){
		List<OtherCost> otherCostList = new ArrayList<OtherCost>();
		String queryString = "from OtherCost where listID='"+listID+"'";
		otherCostList = baseDao.findAll(queryString);
		return otherCostList;
	}
	
}
