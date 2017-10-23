/**
 * 获取代理费用
 * @returns
 */
function getAgentCost(){
	var costResult={};
	costResult["costName"]=$("#costName").val();
	costResult["productCost"]=$("#productCost").text();
	costResult["serviceRate"]=$("#serviceRate").val();
	costResult["chargeCost"]=$("#chargeCost").val();
	return costResult;
}

/*
 * 获取测算结果，毛利数据
 */
function getGrossProfit(){
	//计算测算结果
	var evalDataListFromCal;
	$.ajax({
		type : "POST",
		async : false,
		url : "/JHTEvaluation/generEvalResult.do",
		data : {'evalDetailID':evalDetailID},
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				evalDataListFromCal = jsonObj.msg;
			}else{
				alert(jsonObj.msg);
			}
		}
	});
	window.parent.otherCostToNext(evalDataListFromCal);
	var transId = "grossProfit";
    window.parent.tabIframe(transId);
}

function otherCostToGrossProfit(){
    var transId = "grossProfit";
    window.parent.tabIframe(transId);
}

function saveAgent2DB(){
	var flag = false;
	var resultAgentJson = JSON.stringify(getAgentCost());
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/agentCostSave.do?evalDetailID="+evalDetailID+"&resultAgentJson="+encodeURI(resultAgentJson),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if (jsonObj.flag) {
				flag = true;
				alert("代理费用测算保存成功!");
			} else {
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

function saveEvalDetail(){
	if(opraType=="view"){
		otherCostToGrossProfit();
		return;
	}
	if(!myValidate("otherCostForm")){
		alert("请检查输入内容");
		return;
	}
	if(!saveAgent2DB()){
		return;
	}
	window.parent.$agentCost_result = $("#chargeCost")[0].value;
	window.parent.otherCostToNext($("#chargeCost")[0].value);
	otherCostToGrossProfit();
}

//删除一行
function delRow(obj){
	if($(obj).parents("tbody").children().length>1){
		var res = confirm('确认要删除吗？');  
	      if(res == true){  
	          $(obj).parents("tr").remove(); 
	          calFormulaResult();
	      }
	}
}


function calResultInput(){
	var reg=/^[0-9]+([.]{1}[0-9]+){0,1}$/;
	var str=$("#serviceRate").val();
	if(!reg.test(str)){
		$("#serviceRate").addClass("parsley-error");
		return;
	}else{
		$("#serviceRate").removeClass("parsley-error");
	}
	if($("#serviceRate").val()==""){
		$("#chargeCost").val("");
		return;
	}
	var Cost = ($("#serviceRate").val())*parseFloat($("#productCost").text());//执行毛利率
	$("#chargeCost").val(Cost.toFixed(2));
}

function initAgentTable(productCost){
	$("#productCost").text(productCost);
}


////////////////////////////////page review///////////////////////////////////////
function reviewPage(){
	var jsonData = window.parent.evalHeadData.evalDetail.resultAgentJson;
	if(opraType=="view"){
		viewPage(jsonData);
	}else if(opraType=="edit"){
		editPage(jsonData);
	}
}

function viewPage(jsonData){
	$("#productCost").text(jsonData.productCost);
	$("#serviceRate").val(jsonData.serviceRate);
	$("#chargeCost").val(jsonData.chargeCost);
}

function editPage(jsonData){
	
}
////////////////////////////////////////////////////////////////////////////
$(function() {
	if(opraType=="view"||opraType=="edit"){
		reviewPage();
	}

});