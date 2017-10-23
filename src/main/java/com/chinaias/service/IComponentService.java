package com.chinaias.service;

import java.util.List;

import com.chinaias.entity.Component;

public interface IComponentService{
	public String save(Component t);
	public List<Component> getCompListByDetailID(String evalDetailID);
}
