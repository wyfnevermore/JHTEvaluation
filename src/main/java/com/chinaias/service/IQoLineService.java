package com.chinaias.service;

import com.chinaias.entity.QoLine;

public interface IQoLineService extends IBaseService<QoLine>{

	public String addQoLine(QoLine qoLine);
	public QoLine setLegalEntityAndOther(QoLine qoLine); //set LegalEntiy OrderTyper PriceTable;
}
