package com.chinaias.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.Transport;
import com.chinaias.service.ITransportService;

@Service
public class TransportService extends BaseService<Transport> implements ITransportService{

	@Resource
	private IBaseDao<Transport> baseDao;

	//新增
	public String addTransport(Transport transport) {
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
		transport.setId(uuid);
		try {
			this.baseDao.save(transport);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}
	
	
	//新增返回listid
	public String saveReturnID(Transport transport){
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		if(transport.getListID()==null||"".equals(transport.getListID())){
			String uuid1 = UUID.randomUUID().toString().trim().replaceAll("-", "");
			transport.setListID(uuid1);
		}
		transport.setId(uuid);
		baseDao.save(transport);
		return transport.getListID();
	}
	
	public List<Transport> getTransportListByListid(String listID){
		List<Transport> transportList = new ArrayList<Transport>();
		String queryString = "from Transport where listID='"+listID+"'";
		transportList = baseDao.findAll(queryString);
		return transportList;
	}
}
