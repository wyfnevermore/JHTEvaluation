package com.chinaias.service;

import java.util.List;

import com.chinaias.entity.HalfProduct;
import com.chinaias.entity.Product;

public interface IHalfProductService{
	public String save(HalfProduct t);
	
	public String savePdReturnID(Product t);
	public String addProduct(Product product);
	
	public List<Product> getProductListByListid(String listID);
	
	public List<HalfProduct> getHPListByListid(String listID);
}
