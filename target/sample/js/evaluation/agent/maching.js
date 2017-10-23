/**
 * 保存测算结果和历史测算
 * @returns
 */
function saveEvalList(){
	//保存EV_EVALRESULT表，按规格保存多条
	
	//保存EV_EVALLIST表
	
}


/********跳转到下一页*********/
/***tab切换逻辑***/
function tabIframe(transId){
	var activeTab = $("#"+transId);
	//先把之前tab的active和内容div的active删掉
	for(var j=0;j<8;j++){
		$($("#iframes")[0].children[j]).removeClass("active");
		$($("#tabUl")[0].children[j]).removeClass("active");
	}
	var transLiId = transId+"1";
	var activeLi = $("#"+transLiId);
	activeLi.addClass("active");
	activeTab.addClass("active");
}
/***tab切换逻辑***/

function productDesNoCompToNext(transData){
	$("#materialCostFrame")[0].contentWindow.getInitData(transData);
}

function getProductCost2Agent(transData){
	$("#agentFrame")[0].contentWindow.initAgentTable(transData);
}

function otherCostToNext(transData){
	$("#grossProfitFrame")[0].contentWindow.initGrossProfitTable(transData);
}

function grossProfitToNext(transData){
	$("#evalResultBody").empty();
	$("#evalResultBody").append(transData);
}

function material2GrossProfit(transData){
	$("#grossProfitFrame")[0].contentWindow.initGrossProfitTable(transData);
}

//设置材料成本测算中的组件下拉框
function setCompSelect2Material(componetList){
	$("#materialCostFrame")[0].contentWindow.setCompSelect(componetList);
}

function setCompRatio2ProDes(totalObj){
	$("#productDescFrame")[0].contentWindow.setCompRatio(totalObj);
}

function setCompPieData2Mach(totalObj){
	var leftTitlesArr = [];
	var PieDataArr = [];
	
	for(var key in totalObj){
		leftTitlesArr.push(key);
		
		var item = {};
		item['value'] = totalObj[key];
		item['name'] = key;
		PieDataArr.push(item);
	}
	
	echart_option.legend.data=leftTitlesArr;
	echart_option.series[0].data=PieDataArr;
	
	var myChart = echarts.init(document.getElementById('ePieChart'));
	myChart.setOption(echart_option);
}

function getEvalDetailDB(){
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/getEvalDetailByDetailID.do?evalDetailID="+evalDetailID,
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				var jsonData = jsonObj.msg;
				evalHeadData["evalDetail"] = jsonData;
				$material_result = jsonData.resultMaterialJson;
				$agentCost_result = jsonData.resultAgentJson;
			}else{
				alert(jsonObj.msg);
			}
		}
	});
}

/********跳转到下一页*********/

$(function() {
	//预览头信息填充
	$.each(evalHeadData,function(name,value){
		$("#"+name).html(value);
	});
	if(evalHeadData.quoteCurrency == "USD"){
		 $("#machingTable").find("tr")[0].children[1].textContent = "测算报价（USD）";
		 $("#machingTable").find("tr")[0].children[3].textContent = "执行金额（USD）";
	 }
	function getExcelHeadJosnStr(){
		var result = "{'productName':'',"
		   + "'tradeForm':'" + evalHeadData.tradeForm + "'"
		   +"}";
		return result; 
	}
	function getExcelResultJsonStr(){
		 var resultJosn = {};
		 resultJosn["material"] = "{}";
		 resultJosn["carton"] = "{}";
		 resultJosn["transport"] = "{}";
		 resultJosn["other"] = $agentCost_result;
		 resultJosn["hire"] = "{}";
		 return JSON.stringify(resultJosn);
	 }
	
	$('#download').click(function() {
		$('#download').attr('href','/JHTEvaluation/exportEvalExcel.do?excelHeadJosnStr='+encodeURI(getExcelHeadJosnStr())
				+ "&excelMaterialJosnStr=" + encodeURI("[]")
				+ "&excelCompJosnStr=" + encodeURI("[]")
				+ "&excelHPJsonStr=" + encodeURI($("#materialCostFrame")[0].contentWindow.getExcelHPJsonStr())
				+ "&excelCartonJsonStr=" + encodeURI("[]")
				+ "&excelResultJsonStr=" + encodeURI(getExcelResultJsonStr())
				);
	});
	
	//复制和查看的页面恢复
	if(opraType=="edit"||opraType=="view"){
		getEvalDetailDB();
	}
});