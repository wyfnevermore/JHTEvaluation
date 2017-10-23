package com.chinaias.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.Carton;
import com.chinaias.entity.EvalDetail;
import com.chinaias.entity.OtherCost;
import com.chinaias.service.ICartonService;

@Service
public class CartonService extends BaseService<Carton> implements ICartonService {

	@Resource
	private IBaseDao<Carton> baseDao;

	//新增
	public String addCarton(Carton carton) {
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
		carton.setId(uuid);
		try {
			this.baseDao.save(carton);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}

	
	//新增返回UUID
	public String addCartonReturnUUID(Carton carton ) {
		 String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
			carton.setId(uuid);
		 try {
			this.baseDao.save(carton);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 return uuid;
	}
		
	//新增返回cartonlistid
	public String saveReturnCID(Carton carton){
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		if(carton.getListID()==null||"".equals(carton.getListID())){
			String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
			carton.setListID(uuid1);
		}
		carton.setId(uuid);
		baseDao.save(carton);
		return carton.getListID();
	}
	
	public List<Carton> getCartonListByListid(String listID){
		List<Carton> cartonList = new ArrayList<Carton>();
		String queryString = "from Carton where listID='"+listID+"'";
		cartonList = baseDao.findAll(queryString);
		return cartonList;
	}
}
