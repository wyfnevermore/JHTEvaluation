package com.chinaias.service.impl;

import org.springframework.stereotype.Service;

import com.chinaias.entity.QoLine;
import com.chinaias.service.IQuatationOrderService;

@Service
public class QuatationOrderService implements IQuatationOrderService {
	private enum BusinessType {	//业务类型【加工 、分销、经销、代理】
		  PROCESSING_EXPORT,
		  PROCESSING_DOMESTIC, 
		  DISTRIBUTION_EXPORT, 
		  DISTRIBUTION_DOMESTIC, 
		  SELL_ON_COMMISSION,
		  AGENCY,
		  T2S
	} 
	private BusinessType getEnumBusinessType(QoLine qoLine){
		BusinessType bt = BusinessType.SELL_ON_COMMISSION;
		return bt;
	}
	@Override
	public QoLine setLegalEntityAndOther(QoLine qoLine) {
		// TODO Auto-generated method stub
		BusinessType bussinessType = getEnumBusinessType(qoLine);
		switch(bussinessType){
			case PROCESSING_EXPORT:{//加工出口
				if(false){//物料属于   机器设备  钢铁构件

					qoLine.setLegalEntity("OU_WG");	//WG-WT
					qoLine.setBusinessType("WG-WT_公司间交易");
					qoLine.setPriceTable("JHT STANDARD PRICE LIST_USD");
					qoLine.setQoWarehouse("INV_WG");
				}else{
					qoLine.setLegalEntity("OU_WT");
					qoLine.setBusinessType("WT_自营出口");
					qoLine.setPriceTable("JHT STANDARD PRICE LIST_USD");
					qoLine.setQoWarehouse("INV_WT");
				}
				break;
			}
			case PROCESSING_DOMESTIC:{//加工内销
				break;
			}
			case DISTRIBUTION_EXPORT:{//分销出口  
				//不在ERP生成销售订单
				break;
			}
			case DISTRIBUTION_DOMESTIC:{//分销内销
				break;
			}
			case SELL_ON_COMMISSION:{//经销出口
				if(false){//物料属于AB分类或 分类属于C类整批出运
					
					qoLine.setLegalEntity("OU_WG");
					qoLine.setBusinessType("WG-WT_公司间交易");
					qoLine.setPriceTable("JHT STANDARD PRICE LIST_USD");
					qoLine.setQoWarehouse("INV_WG");
				}else{
					qoLine.setLegalEntity("OU_WT");
					qoLine.setBusinessType("WT_自营出口");
					qoLine.setPriceTable("JHT STANDARD PRICE LIST_USD");
					qoLine.setQoWarehouse("INV_WT");
				}
				break;
			}
			case AGENCY:{//代理出口
				qoLine.setLegalEntity("OU_WT");
				qoLine.setBusinessType("WT_代理出口");
				qoLine.setPriceTable("JHT STANDARD PRICE LIST_USD");
				qoLine.setQoWarehouse("INV_WT");
				break;
			}
			case T2S:{
				qoLine.setLegalEntity("OU_T2S");
				qoLine.setBusinessType("T2S_国内贸易");
				qoLine.setPriceTable("JHT STANDARD PRICE LIST_CNY");
				qoLine.setQoWarehouse("INV_T2S");
				break;
			}
			
		}
		return qoLine;
	}

}
