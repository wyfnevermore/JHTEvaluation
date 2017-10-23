package com.chinaias.dao.impl;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.EvalResult;
import com.chinaias.entity.Page;
import com.chinaias.entity.QoLine;
import com.chinaias.util.JsonDateValueProcessor;
import com.chinaias.util.Tools;

import net.sf.json.JsonConfig;


@Repository
public class BaseDao<T> implements IBaseDao<T> {
	@Resource
	private SessionFactory sessionFactory;
	// 实体类类型(由构造方法自动赋值)
	//	    private Class<T> entityClass;
	//
	//	    // 构造方法，根据实例类自动获取实体类类型
	//	    public BaseDao() {
	//	        this.entityClass = null;
	//	        Class c = getClass();
	//	        Type t = c.getGenericSuperclass();
	//	        if (t instanceof ParameterizedType) {
	//	            Type[] p = ((ParameterizedType) t).getActualTypeArguments();
	//	            this.entityClass = (Class<T>) p[0];
	//	        }
	//	    } 
	public void flush() {
		sessionFactory.getCurrentSession().flush();
	}

	public void save(T t){
		sessionFactory.getCurrentSession().save(t);
		this.flush(); 
	} 

	public void delete( Class<T> clazz,Serializable id){
		T t = findById(clazz,id);
		if (t != null)
			sessionFactory.getCurrentSession().delete(t);
		else
			new RuntimeException("删除失败").printStackTrace(); 
		this.flush(); 
	}

	public void update(T t){
		sessionFactory.getCurrentSession().update(t);
		this.flush();
	}

	public List<T> findAll(String queryString){
		return sessionFactory.getCurrentSession().createQuery(queryString).list();
	}

	//通过ip获取信息
	public T findById(Class<T> clazz, Serializable id)
	{
		return (T) sessionFactory.getCurrentSession().get(clazz,id);
	}

	public List<T> findByProperty(Class<T> clazz,String propertyName, Object value)
	{ 
		Criteria criteria =sessionFactory.getCurrentSession().createCriteria(clazz);
		if (value!=null){
			//add加入条件实例
			criteria.add(Restrictions.eq(propertyName,value));
		}
		return criteria.list();
		//		String queryString = "from "+Class<T>+" as model where model."
		//				+ propertyName + "= ";
		//return sessionFactory.getCurrentSession().createQuery(queryString).list();
	}

	public List<T> findOnlyValue(Class<T> clazz,String sqlString){
		sessionFactory.getCurrentSession().createSQLQuery(sqlString).addEntity(clazz);
		return  sessionFactory.getCurrentSession().createSQLQuery(sqlString).list(); 
	}
	

	public Page findByMap(Class<T> clazz,Map<String,String> map,Page page){
		try {
			Criteria criteria = sessionFactory.getCurrentSession().createCriteria(clazz);
			for(String key:map.keySet()){
				String value=map.get(key);
				if (Tools.isNotNullOrEmpty(value)&&key.contains("-")){  
					String[] keys=key.split("-"); 
					if("Start".equals(keys[1])){
						SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
						Date date=sdf.parse(value+" 00:00:00");
						criteria.add(Restrictions.ge(keys[0], date));
					}
					else if("End".equals(keys[1])){
						SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
						Date date=sdf.parse(value+" 23:59:59");
						criteria.add(Restrictions.le(keys[0], date)); 
					}
					else if("Text".equals(keys[1])){
						criteria.add(Restrictions.like(keys[0], "%"+value+"%")); 
					}
					else{
						criteria.add(Restrictions.eq(keys[0], value)); 
						
						/*if(clazz.equals("component")){
							criteria.add(Restrictions.eq("compStatus","1")); 
						}*/
					}
				} 
			}	
			int count =	((Long)criteria.setProjection(Projections.rowCount())
					.uniqueResult()).intValue();
			criteria.setProjection(null);
			page.setTotal(count);// 总记录数
			int pagenum = count / page.getPagesize();
			if (count % page.getPagesize() != 0)
				pagenum += 1;
			page.setPagecount(pagenum);// 总页数
			int startNo = (page.getCurpage() - 1) * page.getPagesize();

			int endNo = page.getPagesize();	//每页有几条
			criteria.setFirstResult(startNo);
			criteria.setMaxResults(endNo);
			page.setRows(criteria.list());
			return page; 
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		} 

	}
	
	
	public Page find(Class<T> clazz,Page page){
		try {
			Criteria criteria = sessionFactory.getCurrentSession().createCriteria(clazz);
			int count =	((Long)criteria.setProjection(Projections.rowCount()).uniqueResult()).intValue();
			criteria.setProjection(null);
			page.setTotal(count);// 总记录数
			int pagenum = count / page.getPagesize();
			if (count % page.getPagesize() != 0)
				pagenum += 1;
			page.setPagecount(pagenum);// 总页数
			int startNo = (page.getCurpage() - 1) * page.getPagesize();
			int endNo = page.getPagesize();	//每页有几条
			criteria.setFirstResult(startNo);
			criteria.setMaxResults(endNo);
			//criteria.addOrder(Order.desc("createTime"));
			page.setRows(criteria.list());
			return page; 
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		} 
	}
	
	public Page findOrderByTime(Class<T> clazz,Page page){
		try {
			Criteria criteria = sessionFactory.getCurrentSession().createCriteria(clazz);
			int count =	((Long)criteria.setProjection(Projections.rowCount()).uniqueResult()).intValue();
			criteria.setProjection(null);
			page.setTotal(count);// 总记录数
			int pagenum = count / page.getPagesize();
			if (count % page.getPagesize() != 0)
				pagenum += 1;
			page.setPagecount(pagenum);// 总页数
			int startNo = (page.getCurpage() - 1) * page.getPagesize();
			int endNo = page.getPagesize();	//每页有几条
			criteria.setFirstResult(startNo);
			criteria.setMaxResults(endNo);
			criteria.addOrder(Order.desc("createTime"));
			page.setRows(criteria.list());
			return page; 
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		} 
	}
	
/*
	@Override
	public com.chinaias.dao.Page findByMap(Class<T> clazz, Map<String, String> map, com.chinaias.dao.Page page) {
		// TODO Auto-generated method stub
		return null;
	}
*/
}
