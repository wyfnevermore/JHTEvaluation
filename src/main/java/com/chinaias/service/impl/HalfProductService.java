package com.chinaias.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.Carton;
import com.chinaias.entity.HalfProduct;
import com.chinaias.entity.Product;
import com.chinaias.service.IHalfProductService;

@Service
public class HalfProductService implements IHalfProductService{
	@Resource
	private IBaseDao<HalfProduct> baseDao;
	@Resource
	private IBaseDao<Product> baseDao2;
	public String save(HalfProduct t){
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		if(t.getListID()==null||"".equals(t.getListID())){
			String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
			t.setListID(uuid1);
		}
		t.setId(uuid);
		baseDao.save(t);
		return t.getListID();
	}
	
	public String savePdReturnID(Product t){
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		if(t.getListID()==null||"".equals(t.getListID())){
			String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
			t.setListID(uuid1);
		}
		t.setId(uuid);
		baseDao2.save(t);
		return t.getListID();
	}
	
	//新增
		public String addProduct(Product product) {
			String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
			product.setId(uuid);
			try {
				this.baseDao2.save(product);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return "";
		}
		
		public List<Product> getProductListByListid(String listID){
			List<Product> productList = new ArrayList<Product>();
			String queryString = "from Product where listID='"+listID+"'";
			productList = baseDao2.findAll(queryString);
			return productList;
		}
		
		public List<HalfProduct> getHPListByListid(String listID){
			List<HalfProduct> hpList = new ArrayList<HalfProduct>();
			String queryString = "from HalfProduct where listID='"+listID+"'";
			hpList = baseDao.findAll(queryString);
			return hpList;
		}
}
