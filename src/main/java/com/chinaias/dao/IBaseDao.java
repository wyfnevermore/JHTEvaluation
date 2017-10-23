package com.chinaias.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.chinaias.entity.EvalResult;
import com.chinaias.entity.Page;

public interface IBaseDao<T>{
	public void save(T t);  
	public void delete(Class<T> clazz,Serializable id);  
	public void update(T t);
	public List<T> findAll(String queryString);
	public  T findById(Class<T> clazz, Serializable id);
	public List<T> findByProperty(Class<T> clazz,String propertyName, Object value) ;
	public List<T>  findOnlyValue(Class<T> clazz,String sqlString);
	public Page findByMap(Class<T> clazz,Map<String,String> map,Page page);
	public Page find(Class<T> clazz, Page page);
	public Page findOrderByTime(Class<T> clazz, Page page);
}
