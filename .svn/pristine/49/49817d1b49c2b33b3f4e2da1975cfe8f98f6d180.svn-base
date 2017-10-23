package com.chinaias.service.impl;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.EvalHistory;
import com.chinaias.entity.QoHeader;
import com.chinaias.service.IQoHeaderService;

@Service
public class QoHeaderService  extends BaseService<QoHeader> implements IQoHeaderService{

	@Resource
	private IBaseDao<QoHeader> baseDao;
	@Resource
	private IBaseDao<EvalHistory> baseDao1;
	
	
	//新增头信息
	public String addQoLine(QoHeader qoHeader) {
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");  
		qoHeader.setHeaderId(uuid);
		try {
			this.baseDao.save(qoHeader);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}

}
