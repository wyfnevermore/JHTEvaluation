package com.chinaias.service.impl;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.EvalDetail;
import com.chinaias.service.IEvalDetailService;

@Service
public class EvalDetailService extends BaseService<EvalDetail> implements IEvalDetailService{

	@Resource
	 private IBaseDao<EvalDetail> baseDao;
	
	
	//新增
	public boolean addEvalDetail(EvalDetail evalDetail) {
		boolean flag = true;
		if(evalDetail!=null){
			try {
				this.baseDao.save(evalDetail);
			} catch (Exception e) {
				flag = false;
				e.printStackTrace();
			}
		 }
		else{
			return false;
		}
		return flag;
	}
	
	public void updateEvalDetail(EvalDetail evalDetail){
		this.baseDao.update(evalDetail);
	}
	
	public EvalDetail findById(String id){
		return this.baseDao.findById(EvalDetail.class, id);
	}
	
	//新增返回UUID
	public String addEDReturnUUID(EvalDetail evalDetail) {
		 String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
		 evalDetail.setId(uuid);
		 this.baseDao.save(evalDetail);
		 return uuid;
	}
	
	public List<EvalDetail> getEvalDetailByDetailID(String evalDetailID){
		String sqlString = "from EvalDetail where id='"+evalDetailID+"'";
		return this.baseDao.findAll(sqlString);
	}
}
