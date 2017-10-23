package com.chinaias.service.impl;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.EvalHistory;
import com.chinaias.service.IEvalHistoryService;

@Service
public class EvalHistoryService extends BaseService<EvalHistory> implements IEvalHistoryService{

	@Resource
	 private IBaseDao<EvalHistory> baseDao;
	
	
	//新增
	public boolean addEvalHistoryReID(EvalHistory evalHistory) {
		if (evalHistory != null) {
			String idStr = UUID.randomUUID().toString().trim().replaceAll("-", "");
			evalHistory.setId(idStr);
			if ("on".equals(evalHistory.manual)) {
				evalHistory.manual = "true";
			} else {
				evalHistory.manual = "false";
			}
			if ("on".equals(evalHistory.isContentComp)) {
				evalHistory.isContentComp = "true";
			} else {
				evalHistory.isContentComp = "false";
			}
			evalHistory.calState = "编辑";
			evalHistory.versionB = "1";
			evalHistory.createTime = new Date();
			

			this.baseDao.save(evalHistory);
			return true;
		} else {
			return false;
		}
		
	}
	
}
