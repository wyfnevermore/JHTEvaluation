package com.chinaias.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.GrossProfit;
import com.chinaias.service.IGrossProfitService;

@Service
public class GrossProfitService implements IGrossProfitService{
	@Resource
	 private IBaseDao<GrossProfit> baseDao;
	
	//新增
			public String addGrossProfit(GrossProfit grossProfit) {
				String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
				grossProfit.setId(uuid);
				try {
					this.baseDao.save(grossProfit);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "";
			}
		
		//新增返回listid
			public String saveReturnID(GrossProfit t){
				String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
				if(t.getListID()==null||"".equals(t.getListID())){
					String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
					t.setListID(uuid1);
				}
				t.setId(uuid);
				baseDao.save(t);
				return t.getListID();
			}
			
			public List<GrossProfit> getGrossListByListid(String listID){
				List<GrossProfit> grossProfitList = new ArrayList<GrossProfit>();
				String queryString = "from GrossProfit where listID='"+listID+"'";
				grossProfitList = baseDao.findAll(queryString);
				return grossProfitList;
			}
	
}
