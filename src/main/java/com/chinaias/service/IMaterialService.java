package com.chinaias.service;

import java.util.List;

import com.chinaias.entity.Material;

public interface IMaterialService{
	public String save(Material t);
	public List<Material> getMaterialListByListid(String listID);
}
