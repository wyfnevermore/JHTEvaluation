var addOrUpdate = "add";
var tr ="";
var prodEvalCostRVal = 0.00;//产品测算成本（RMB）
var quotePriceVal = 0.00;//报价金额(RMB)

function changeProfitByProduct(){
	var curSpec = $("#spec").val();
	prodEvalCostRVal = calEvalCostResultBySpec(curSpec);//产品测算成本（RMB）
	var prodEvalCostUVal = (prodEvalCostRVal/parseFloat(window.parent.evalHeadData["USDquotationRate"])).toFixed(2);//产品测算成本（USD）
	quotePriceVal = calQuotePrice(prodEvalCostRVal);//报价金额(RMB)
	
	$("#prodEvalCostR").val(prodEvalCostRVal);
	
	if(evalHeadData.quoteCurrency == "USD"){
		$("#prodEvalCostU").val(prodEvalCostUVal);
		quotePriceVal = (quotePriceVal/parseFloat(window.parent.evalHeadData["USDquotationRate"])).toFixed(2);
		$("#quotePrice").val(quotePriceVal);
	}else{
		$("#prodEvalCostU").val(prodEvalCostRVal);
		$("#quotePrice").val(quotePriceVal);
	}
	
	calValFromImpPrice();
}

/* 根据填写的执行金额 计算其他项
 * 1.执行毛利额（实际为RMB）
 * 2.执行毛利率
 * 3.执行价格降幅
 * @returns
 */
function calValFromImpPrice(){
	if($("#implementPrice").val()==""){
		$("#implGMarginRate").val("");
		$("#implGMarginCostU").val("");
		$("#implPriceCut").val("");
		return;
	}
	var implGMarginCostUVal;
	var implGMarginRateVal;
	var implPriceCutVal;
	if(evalHeadData.quoteCurrency == "USD"){
		implGMarginCostUVal = ((parseFloat($("#implementPrice").val()))-quotePriceVal).toFixed(2);//执行毛利额（实际为USD）
		implGMarginRateVal = (100*implGMarginCostUVal/quotePriceVal).toFixed(2);//执行毛利率
		implPriceCutVal = ((parseFloat($("#implementPrice").val())-quotePriceVal)/parseFloat($("#implementPrice").val())*100).toFixed(2);//执行价格降幅
	}else{
		implGMarginCostUVal = ((parseFloat($("#implementPrice").val()))-prodEvalCostRVal).toFixed(2);//执行毛利额（实际为RMB）
		implGMarginRateVal = (100*implGMarginCostUVal/prodEvalCostRVal).toFixed(2);//执行毛利率
		implPriceCutVal = ((parseFloat($("#implementPrice").val())-quotePriceVal)/parseFloat($("#implementPrice").val())*100).toFixed(2);//执行价格降幅
	}
	$("#implGMarginRate").val(implGMarginRateVal);
	$("#implGMarginCostU").val(implGMarginCostUVal);
	$("#implPriceCut").val(implPriceCutVal);
}

/* 根据填写的执行毛利率 计算其他项
 * 1.执行毛利额（实际为RMB）
 * 2.执行毛利率
 * 3.执行价格降幅
 * @returns
 */
function calValFromImpRate(){
	if($("#implGMarginRate").val()==""){
		$("#implementPrice").val("");
		$("#implGMarginCostU").val("");
		$("#implPriceCut").val("");
		return;
	}
	var implGMarginCostUVal;
	var implGMarginFinalCost;
	var implPriceCutVal;
	if(evalHeadData.quoteCurrency == "USD"){
		implGMarginCostUVal = (parseFloat($("#implGMarginRate").val())/100*quotePriceVal).toFixed(2);//执行毛利额（实际为USD）
		implGMarginFinalCost = parseFloat(quotePriceVal)+parseFloat(implGMarginCostUVal);//执行金额
		implPriceCutVal = ((implGMarginFinalCost-quotePriceVal)/implGMarginFinalCost*100).toFixed(2);//执行价格降幅
	}else{
		implGMarginCostUVal = (parseFloat($("#implGMarginRate").val())/100*prodEvalCostRVal).toFixed(2);//执行毛利额（实际为RMB）
		implGMarginFinalCost = parseFloat(prodEvalCostRVal)+parseFloat(implGMarginCostUVal);//执行金额
		implPriceCutVal = ((implGMarginFinalCost-quotePriceVal)/implGMarginFinalCost*100).toFixed(2);//执行价格降幅
	}
	$("#implementPrice").val(implGMarginFinalCost);
	$("#implGMarginCostU").val(implGMarginCostUVal);
	$("#implPriceCut").val(implPriceCutVal);
}

/*
 * 计算报价金额
 * @param prodEvalCostVal 测算成本(物料成本)
 * @returns 物料成本+运杂费成本+其他费用
 */
function calQuotePrice(prodEvalCostVal){
	var result = parseFloat(prodEvalCostVal);
	if(typeof(window.parent.$agentCost_result)!="undefined" && !isNaN(parseFloat(window.parent.$agentCost_result))){
		result += parseFloat(window.parent.$agentCost_result);
	}
	return parseFloat(result.toFixed(2));
}

/*
 *按规格计算测算成本
 *计算：（物料成本+运杂费成本）
 * @param specSel
 * @returns
 */
function calEvalCostResultBySpec(specSel){
	var result = 0.00;
	result += checkValIsFloat(window.parent.$material_result, specSel);
//	if(typeof(window.parent.$prepaid_result)!="undefined" && !isNaN(parseFloat(window.parent.$prepaid_result))){
//		result += parseFloat(window.parent.$prepaid_result);
//	}
	return parseFloat(result.toFixed(2));
}

/*
 *检查当前规格下各项成本
 *1.各项成本是否保存
 *2.该规格下是否存在费用
 *3.是否为合理数字 
 *
 * @param valueData
 * @param selSpec
 * @returns
 */
function checkValIsFloat(valueData, selSpec){
	if(typeof(valueData)=="undefined" || !valueData.hasOwnProperty(selSpec) || isNaN(parseFloat(valueData[selSpec]))){
		return 0.00;
	}else{
		return parseFloat(valueData[selSpec]);
	}
}

function addGrossProfit(){
	addOrUpdate = "add";
	//初始化
	if(typeof(window.parent.$material_result)!="undefined"){
		var specJson =window.parent.$material_result;
		$("#spec").empty(); 
		for(var data in specJson){
			$("#spec").append("<option value='"+data+"'>"+data+"</option>"); 
		}
	}
	changeProfitByProduct();
	if(typeof(window.parent.evalHeadData)!="undefined" && window.parent.evalHeadData.hasOwnProperty("grossProfitRate")){
		$("#custGMarginRate").val(window.parent.evalHeadData.grossProfitRate);
	}else{
		$("#custGMarginRate").val();
	}
	$("#grossProfitWin").modal("show");
}


function updateGrossPRow(){
	$("#profitForm").submit();
	var mixf = $("#profitForm input").hasClass('parsley-error');
	if(mixf){
		return;
	}
	$("#grossProfitWin").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	if(addOrUpdate == "add"){
		var html = "<tr><td>" + $("#spec").find("option:selected").text()
		+ "</td><td>" +$("#custGMarginRate").val()
		+ "</td><td>" +$("#prodEvalCostR").val() + "</td><td>" + $("#prodEvalCostU").val()
		+ "</td><td>" +$("#quotePrice").val() + "</td><td>" +$("#implementPrice").val()
		+ "</td><td>" + $("#implGMarginRate").val() + "</td><td hidden='hidden'>" +$("#implGMarginCostU").val()
		+ "</td><td hidden='hidden'>" +$("#implPriceCut").val()+ "</td><td><div class=\"btn-group\"><a onclick=\"addGrossProfit()\" href=\"javascript:void(0);\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div class=\"btn-group\"><a onClick=\"getGrossProfit(this)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#grossProfitData").append(html);
	}else if(addOrUpdate == "update"){
		tr.find("td:eq(0)").text($("#spec").find("option:selected").text()); 
		tr.find("td:eq(1)").text($("#custGMarginRate").val()) ; 
		tr.find("td:eq(2)").text($("#prodEvalCostR").val()) ; 
		tr.find("td:eq(3)").text($("#prodEvalCostU").val()) ; 
		tr.find("td:eq(4)").text($("#quotePrice").val()) ; 
		tr.find("td:eq(5)").text($("#implementPrice").val()) ; 
		tr.find("td:eq(6)").text($("#implGMarginRate").val()) ; 
		tr.find("td:eq(7)").text($("#implGMarginCostU").val()) ; 
		tr.find("td:eq(8)").text($("#implPriceCut").val()) ; 
	}
}

//删除一行
function delRow(obj){
	if($(obj).parents("tbody").children().length>1){
		var res = confirm('确认要删除吗？');  
		  if(res == true){  
		      $(obj).parents("tr").remove();  
		  } 
	}
}

function getGrossProfit(obj) {
	addOrUpdate = "update";
	if(typeof(window.parent.$material_result)!="undefined"){
		var specJson =window.parent.$material_result;
		$("#spec").empty(); 
		for(var data in specJson){
			$("#spec").append("<option value='"+data+"'>"+data+"</option>"); 
		}
	}
	//获取选中的行
	tr = $(obj).closest("tr");
	$("#grossProfitWin").modal("show");
	//获取列值，赋值给弹出框
	var specCur = tr.find("td:eq(0)").html();
	if(specCur == ""){
		specCur = $("#spec").find("option:eq(0)").text();
	}
	$("#spec").val(specCur); 
	$("#custGMarginRate").val(tr.find("td:eq(1)").html());
//	$("#prodEvalCostR").val(tr.find("td:eq(2)").html());
//	$("#prodEvalCostU").val(tr.find("td:eq(3)").html());
//	$("#quotePrice").val(tr.find("td:eq(4)").html());
	$("#implementPrice").val(tr.find("td:eq(5)").html());
	$("#implGMarginRate").val(tr.find("td:eq(6)").html());
	$("#implGMarginCostU").val(tr.find("td:eq(7)").html());
	$("#implPriceCut").val(tr.find("td:eq(8)").html());
	if(typeof(window.parent.evalHeadData)!="undefined" && window.parent.evalHeadData.hasOwnProperty("grossProfitRate")){
		$("#custGMarginRate").val(window.parent.evalHeadData.grossProfitRate);
	}else{
		$("#custGMarginRate").val();
	}
	//初始化
	changeProfitByProduct();
}

/**
 * 获取毛利数
 * @returns
 */
function getGrossProfitData(){
	var grossProfitResult = {};
	var valueTrs = $("#grossProfitTable").find("tr");
	var tds;
	tds = valueTrs[1].children;
	grossProfitResult["productCostU"]=tds[1].innerText;
	grossProfitResult["productCost"]=tds[2].innerText;
	grossProfitResult["evalCost"]=tds[3].innerText;
	grossProfitResult["implGMarginRate"]=tds[4].innerText;
	return grossProfitResult;
}

function showResultData(){
	var grossProfitTbEl = $("#grossProfitData");
	var valueTrs = grossProfitTbEl.find("tr");
	var html = "";
	var tdtmp;
	tdtmp = valueTrs[0].children;
	html = "<tr><td>"+tdtmp[1].innerText+"</td><td>"+tdtmp[2].innerText+"</td><td>"+tdtmp[3].innerText+"</td><td>"+tdtmp[4].innerText+"</td></tr>"
	window.parent.grossProfitToNext(html);
	grossToResult();
}

function grossToResult(){
	var transId = "quotation";
    window.parent.tabIframe(transId);
}

function saveGrossProfit2DB(){
	var flag = false;
	// 存其他费用
	var grossProfitData = JSON.stringify(getGrossProfitData());
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/grossProfitSaveForAgent.do?evalDetailID="+ evalDetailID+"&grossProfitData="+encodeURI(grossProfitData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('(' + json + ')');
			if (jsonObj.flag) {
				flag = true;
				alert("毛利测算保存成功!");
			} else {
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

function saveEvalDetail(){
	if(opraType=="view"){
		grossToResult();
		return;
	}
	//毛利判断产品测算成本是否为空，为空需要先编辑
	var profitValue = $('#grossProfitTable').find("tr").eq(1).children("td").eq(2).text();
	if(profitValue==""){
		alert("数据未填充完整，请编辑！");
		return;
	}
	if(!saveGrossProfit2DB()){
		return;
	}
	showResultData();
}

function initGrossProfitTable(transData){
	var material_result = window.parent.$material_result;
	var agentCost_result = window.parent.$agentCost_result;
	valTrs = $("#grossProfitData").find("tr");
	tds = valTrs[0].children;
	if(transData.length > 3){
		tds[3].innerText = transData;
		if(material_result["报关金额(￥)"] != "" && material_result["报关金额($)"] != ""){
			tds[4].innerText = parseFloat(transData)/parseFloat(material_result["报关金额(￥)"])
		}else{
			tds[4].innerText = "";
		}
	}else{
		tds[2].innerText = transData["报关金额(￥)"];
		tds[1].innerText = transData["报关金额($)"];
		if(agentCost_result != "" && typeof(agentCost_result)!="undefined"){
			tds[4].innerText = parseFloat(agentCost_result)/parseFloat(transData["报关金额(￥)"])
		}else{
			tds[4].innerText = "";
		}
	}
	
}

////////////////////////////////page review///////////////////////////////////////
function reviewPage(){
	var jsonData = window.parent.evalHeadData.evalDetail.resultAgentGrossJson;
	if(opraType=="view"){
		viewPage(jsonData);
	}else if(opraType=="edit"){
		editPage(jsonData);
	}
}

function viewPage(jsonData){
	$("#grossProfitData").empty();
	var html = "<tr><td hidden='hidden'>"
	+ "</td><td>" +jsonData.productCostU
	+ "</td><td>" +jsonData.productCost
	+ "</td><td>" +jsonData.evalCost
	+ "</td><td>" +jsonData.implGMarginRate
	+ "</td></tr>";
	//通过表体id把显示文本显示到网页中
	$("#grossProfitData").append(html);
	
	//结果页的恢复
	window.parent.grossProfitToNext(html);
}

function editPage(jsonData){
	
}
////////////////////////////////////////////////////////////////////////////
$(function() {
	if(opraType=="view"||opraType=="edit"){
		reviewPage();
	}
});