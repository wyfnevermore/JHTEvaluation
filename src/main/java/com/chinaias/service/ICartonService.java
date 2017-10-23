package com.chinaias.service;

import java.util.List;

import com.chinaias.entity.Carton;

public interface ICartonService  extends IBaseService<Carton>{

	public String addCarton(Carton carton);
	public String addCartonReturnUUID(Carton carton ) ;
	public String saveReturnCID(Carton carton);
	public List<Carton> getCartonListByListid(String listID);
}
