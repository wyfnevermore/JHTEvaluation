package com.chinaias.service.impl;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.EvalResult;
import com.chinaias.entity.Page;
import com.chinaias.service.IBaseService;
@Service
public class BaseService<T> implements IBaseService<T> {
	 @Resource
	 private IBaseDao<T> baseDao;
	 
	 
	public void save(T t) {
		 this.baseDao.save(t);
	}

	public void delete(Class<T> clazz,Serializable id) {
		 this.baseDao.delete(clazz,id);
	}
 
	public void update(T t) {
		 this.baseDao.update(t);
	}

	 
	public List findAll(String queryString) {
		 
		return this.baseDao.findAll(queryString);
	}

 
	public T findById(Class clazz, Serializable id) {
		 
		return (T) this.baseDao.findById(clazz, id);
	}
	public List<T> findOnlyValue(Class<T> clazz,String sqlString){
		
		return this.baseDao.findOnlyValue(clazz,sqlString);
	}
	public List<T> findByProperty(Class<T> clazz,String propertyName, Object value){
		
		return this.baseDao.findByProperty(clazz, propertyName, value);
	}
	public Page findByMap(Class<T> clazz,Map<String,String> map,Page page){
		return this.baseDao.findByMap(clazz, map,page);
	}
	
	public Page find(Class<T> clazz,Page page){
		return this.baseDao.find(clazz,page);
	}
	
	//根据创建时间降序排
	public Page findOrderByTime(Class<T> clazz,Page page){
		return this.baseDao.findOrderByTime(clazz,page);
	}
	
}
