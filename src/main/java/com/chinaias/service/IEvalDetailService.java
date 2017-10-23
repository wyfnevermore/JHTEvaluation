package com.chinaias.service;

import java.util.List;

import com.chinaias.entity.EvalDetail;

public interface IEvalDetailService extends IBaseService<EvalDetail>{

	public boolean addEvalDetail(EvalDetail evalDetail);
	public void updateEvalDetail(EvalDetail evalDetail);
	public EvalDetail findById(String id);
	public String addEDReturnUUID(EvalDetail evalDetail);
	public List<EvalDetail> getEvalDetailByDetailID(String evalDetailID);
}
