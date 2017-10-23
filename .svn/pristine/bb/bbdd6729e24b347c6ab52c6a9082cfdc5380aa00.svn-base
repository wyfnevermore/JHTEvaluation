package com.chinaias.service.impl;

import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.Commission;
import com.chinaias.service.IComissionService;

@Service
public class ComissionService implements IComissionService{
	@Resource
	 private IBaseDao<Commission> baseDao;
	
	//新增
		public String addCommission(Commission Commission) {
			String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
			Commission.setId(uuid);
			try {
				this.baseDao.save(Commission);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return "";
		}
	
	//新增返回listid
		public String saveReturnID(Commission t){
			String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
			if(t.getListID()==null||"".equals(t.getListID())){
				String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
				t.setListID(uuid1);
			}
			t.setId(uuid);
			baseDao.save(t);
			return t.getListID();
		}
}
