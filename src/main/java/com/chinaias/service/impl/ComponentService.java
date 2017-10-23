package com.chinaias.service.impl;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.Component;
import com.chinaias.service.IComponentService;

@Service
public class ComponentService implements IComponentService{
	@Resource
	 private IBaseDao<Component> baseDao;
	public String save(Component t){
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		if(t.getListID()==null||"".equals(t.getListID())){
			String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
			t.setListID(uuid1);
		}
		t.setId(uuid);
		t.patternJson = "'"+t.patternJson+"'";
		t.specJson = "'"+t.specJson+"'";
		t.netTypeJson = "'"+t.netTypeJson+"'";
		baseDao.save(t);
		return t.getListID();
	}
	
	public List<Component> getCompListByDetailID(String evalDetailID){
		String sqlString = "from Component where listID=(select compListID from EvalDetail where id='"+evalDetailID+"')";
		return this.baseDao.findAll(sqlString);
	}
	
}
