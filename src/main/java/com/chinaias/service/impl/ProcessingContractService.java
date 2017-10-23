package com.chinaias.service.impl;

import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaias.dao.IBaseDao;
import com.chinaias.entity.jo.JoOrder;
import com.chinaias.entity.pc.PcCompInfo;
import com.chinaias.entity.pc.PcJobInfo;
import com.chinaias.entity.pc.PcOrder;
import com.chinaias.entity.pc.PcResourceInfo;
import com.chinaias.service.IProcessingContractService;
import com.chinaias.util.Tools;

@Service
public class ProcessingContractService implements IProcessingContractService {

	@Resource
	private IBaseDao<PcJobInfo> pcJobInfoDao;
	@Resource
	private IBaseDao<PcCompInfo> pcCompInfoDao;
	@Resource
	private IBaseDao<PcResourceInfo> pcResourceInfoDao;
	
	@Override
	public List<PcOrder> generatePcOrder(List<JoOrder> joOrderList) {
		// TODO Auto-generated method stub
		List<PcOrder> pcOrderList = new ArrayList<PcOrder>();
		for (JoOrder joOrder : joOrderList) {
			boolean flag = false;
			for (PcOrder pcOrder : pcOrderList) {
				if (pcOrder.getPcJobInfo().getProcessName().equals(joOrder.getJoHeader().getSupplier())) {// 供应商名称
					flag = true;

					break;
				}
			}
			if (!flag) {
				PcOrder pcOrder = new PcOrder();
				PcJobInfo pcJobInfo = new PcJobInfo();
				PcCompInfo pcCompInfo = new PcCompInfo();
				PcResourceInfo pcResourceInfo = new PcResourceInfo();
				pcJobInfo.setJobInfoId(Tools.getUUID());
//				/** 库存组织 */
//				pcJobInfo.setOrganizationId();
//				/** 任务 */
//				pcJobInfo.setJobName();
//				/** 装配件 */
//				pcJobInfo.setAssemblyItem(joOrder.getJoHeader().getMaterialName());
//				/** 数量 */
//				pcJobInfo.setStaRtQuantity();
//				/** 起始时间 */
//				pcJobInfo.setSchduledStartDate();
//				/** 项目 */
//				pcJobInfo.setProjectNumber();
//				/** 加工合同号 */
//				pcJobInfo.setProcessContractNum();
//				/** 材料费 */
//				pcJobInfo.setMaterialFee();
//				/** 加工费 */
//				pcJobInfo.setProcessFee();
//				/** 加工商 */
//				pcJobInfo.setProcessName();
//				/** 网型 */
//				pcJobInfo.setMeshType();
//				/** 销售订单号 */
//				pcJobInfo.setOrderNumber();
//				/** 单产品生产工时 */
//				pcJobInfo.setSingleProductTime();
//				/** 花型 */
//				pcJobInfo.setFlowerPattern();

//				pcOrder.setPcJobInfo(pcJobInfo);
//				pcOrder.setPcCompInfo(pcCompInfo);
//				pcOrder.setPcResourceInfo(pcResourceInfo);
			}
		}

		return null;
	}
	
	@Override
	public String contractInfoSave(PcJobInfo pcJobInfo,List<PcCompInfo> pcCompInfoList,List<PcResourceInfo> pcResourceInfoList){
		String result = "";
		try {
			String processContractNum = pcJobInfo.getProcessContractNum();
			String jobInfoId = Tools.getUUID();
			pcJobInfo.setJobInfoId(jobInfoId);
			pcJobInfo.setProcessContractNum(processContractNum);
			pcJobInfoDao.save(pcJobInfo);
			
			for(int i=0;i<pcCompInfoList.size();i++){
				PcCompInfo pcCompInfo = pcCompInfoList.get(i);
				pcCompInfo.setCompInfoId(Tools.getUUID());
				pcCompInfo.setProcessContractNum(processContractNum);
				pcCompInfo.setJobInfoId(pcJobInfo.getJobInfoId());
				pcCompInfoDao.save(pcCompInfo);
			}
			for(int i=0;i<pcResourceInfoList.size();i++){
				PcResourceInfo pcResourceInfo = pcResourceInfoList.get(i);
				pcResourceInfo.setResourceInfoId(Tools.getUUID());
				pcResourceInfo.setProcessContractNum(processContractNum);
				pcResourceInfo.setJobInfoId(pcJobInfo.getJobInfoId());
				pcResourceInfoDao.save(pcResourceInfo);
			}
			result =  jobInfoId;
		} catch (Exception e) {
			e.printStackTrace();
			return "";
		}
		return result;
	}

}
