package com.chinaias.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.Material;
import com.chinaias.service.IMaterialService;

@Service
public class MaterialService implements IMaterialService{
	@Resource
	 private IBaseDao<Material> baseDao;
	public String save(Material t){
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		if(t.getListID()==null||"".equals(t.getListID())){
			String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
			t.setListID(uuid1);
		}
		t.setId(uuid);
		baseDao.save(t);
		return t.getListID();
	}
	
	public List<Material> getMaterialListByListid(String listID){
		List<Material> cartonList = new ArrayList<Material>();
		String queryString = "from Material where listID='"+listID+"'";
		cartonList = baseDao.findAll(queryString);
		return cartonList;
	}
	
}
