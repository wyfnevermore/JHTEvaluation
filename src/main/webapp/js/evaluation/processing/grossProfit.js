var addOrUpdate = "add";
var tr ="";
var quotationRateVal = parseFloat(window.parent.evalHeadData["quotationRate"]);//报价汇率
var custGMarginRateVal = parseFloat(window.parent.evalHeadData.grossProfitRate)/100;//客户预算毛利率

/*
 *根据规格计算对应产品成本、产品测算成本 
 * @returns
 */
function changeProfitBySpec(){
	var curSpec = $("#spec").val();
	//1.产品成本（RMB）
	var prodEvalCostRVal = calEvalCostResultBySpec(curSpec);
	$("#prodEvalCostR").val(prodEvalCostRVal);
	//2.产品测算成本
	var prodEvalCostUVal = calprodEvalCostU(prodEvalCostRVal,curSpec);
	$("#prodEvalCostU").val(prodEvalCostUVal);
	//3.测算报价
	var quotePriceVal = valQuotePrice(prodEvalCostRVal,curSpec);
	$("#quotePrice").val(quotePriceVal);
	//4.执行金额和执行毛利率
	calValFromImpPrice();
}

/* 根据填写的执行金额 计算其他项
 * @returns
 */
function calValFromImpPrice(){
	if($("#prodEvalCostU").val()==""||$("#implementPrice").val()==""){
		$("#implGMarginRate").val("");
		$("#implPriceCut").val("");
		return;
	}
	var prodEvalCostUVal = parseFloat($("#prodEvalCostU").val());
	var implementPriceVal = parseFloat($("#implementPrice").val());
	if($("#implementPrice").val()==""){
		$("#implGMarginRate").val("");
		$("#implPriceCut").val("");
		return;
	}
	//1.执行毛利率
	var implGMarginRateVal = (100*(implementPriceVal-prodEvalCostUVal)/prodEvalCostUVal).toFixed(2);//执行毛利率
	$("#implGMarginRate").val(implGMarginRateVal);
	//2.执行价格降幅
	var implPriceCutVal = (100*(implementPriceVal-parseFloat($("#quotePrice").val()))/implementPriceVal).toFixed(2);
	$("#implPriceCut").val(implPriceCutVal);
}

/* 根据填写的执行毛利率 计算其他项
 * @returns
 */
function calValFromImpRate(){
	if($("#implGMarginRate").val()==""||$("#prodEvalCostU").val()==""){
		$("#implementPrice").val("");
		$("#implPriceCut").val("");
		return;
	}
	var implGMarginRateVal = parseFloat($("#implGMarginRate").val())*0.01;//执行毛利率
	var prodEvalCostUVal = parseFloat($("#prodEvalCostU").val());//测算报价
	if($("#implGMarginRate").val()==""){
		$("#implementPrice").val("");
		$("#implPriceCut").val("");
		return;
	}
	//1.执行金额
	var implementPriceVal = ((implGMarginRateVal*prodEvalCostUVal)+prodEvalCostUVal).toFixed(2);
	$("#implementPrice").val(implementPriceVal);
	//2.执行价格降幅
	var implPriceCutVal = ((implementPriceVal-parseFloat($("#quotePrice").val()))/implementPriceVal*100).toFixed(2);
	$("#implPriceCut").val(implPriceCutVal);
}

/*
 * 计算产品测算成本 
 * @param prodEvalCostVal 产品成本
 * 公式：(（（产品成本-产品成本/1.17*退税率）+运杂费+其他费用）/(1-返点率）/（1-第一佣金率）/（1-第二佣金率）)/报价汇率
 * @returns
 */
function calprodEvalCostU(prodEvalCostVal,specSel){
	var result = 0.00;
	var drawBackRateVal = parseFloat(window.parent.evalHeadData["drawBackRate"])/100;//退税率
	var transportVal = checkValIsFloat(window.parent.$transport_result, specSel);//运杂费
	var otherCostVal = 0.00;//其他费用
	if(typeof(window.parent.$otherCost_result)!="undefined" && !isNaN(parseFloat(window.parent.$otherCost_result))){
		otherCostVal = parseFloat(window.parent.$otherCost_result);
	}
	result = ((prodEvalCostVal-prodEvalCostVal/1.17*drawBackRateVal)+transportVal+otherCostVal)/quotationRateVal;
	if(typeof(window.parent.$hireCost_result)=="undefined"){
		return result.toFixed(2);
	}
	var hireCost_result = window.parent.$hireCost_result;
	for(var i=0;i<hireCost_result.length;i++){
		result = result/(1-(parseFloat(hireCost_result[i]["takeDrawRate"])/100));
	}
	return parseFloat(result.toFixed(2));
}

/*
 *计算测算报价
 *公式：（（产品成本-产品成本/1.17*退税率）/（1-客户预算毛利率）+运杂费+其他费用）/(1-返点率）/（1-第一佣金率）/（1-第二佣金率)/报价汇率 
 * @param prodEvalCostVal
 * @returns
 */
function valQuotePrice(prodEvalCostVal,specSel){
	var result = 0.00;
	var drawBackRateVal = parseFloat(window.parent.evalHeadData["drawBackRate"])/100;//退税率
	var transportVal = checkValIsFloat(window.parent.$transport_result, specSel);//运杂费
	var otherCostVal = 0.00;//其他费用
	if(typeof(window.parent.$otherCost_result)!="undefined" && !isNaN(parseFloat(window.parent.$otherCost_result))){
		otherCostVal = parseFloat(window.parent.$otherCost_result);
	}
	result = ((prodEvalCostVal-prodEvalCostVal/1.17*drawBackRateVal)/(1-custGMarginRateVal)+transportVal+otherCostVal)/quotationRateVal;
	if(typeof(window.parent.$hireCost_result)=="undefined"){
		return result.toFixed(2);
	}
	var hireCost_result = window.parent.$hireCost_result;
	for(var i=0;i<hireCost_result.length;i++){
		result = result/(1-(parseFloat(hireCost_result[i]["takeDrawRate"])/100));
	}
	return parseFloat(result.toFixed(2));
}

/*
 *按规格计算 产品成本(RMB)
 *计算：(材料成本+纸箱成本)
 * @param specSel
 * @returns
 */
function calEvalCostResultBySpec(specSel){
	var result = 0.00;
	result += checkValIsFloat(window.parent.$material_result, specSel);
	result += checkValIsFloat(window.parent.$carton_result, specSel);
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
	if(typeof(window.parent.specSel)!="undefined"){
		var specJson =window.parent.specSel;
		$("#spec").empty(); 
		for(var data in specJson){
			$("#spec").append("<option value='"+data+"'>"+data+"</option>"); 
		}
	}
	changeProfitBySpec();
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
	if(typeof(window.parent.specSel)!="undefined"){
		var specJson =window.parent.specSel;
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
	changeProfitBySpec();
}

/**
 * 获取毛利数
 * @returns
 */
function getGrossProfitData(){
	var grossProfitResult = [];
	var valueTrs = $("#grossProfitTable").find("tr");
	var tds;
	for(var i=1;i<valueTrs.length;i++){
		tds = valueTrs[i].children;
		grossProfitResult.push({"spec":tds[0].innerText,"expectedProfitRate":tds[1].innerText,"productCost":tds[2].innerText,
			"productEvalCost":tds[3].innerText,"quotePrice":tds[4].innerText,"implementPrice":tds[5].innerText,
			"imptProfitRate":tds[6].innerText,"imptProfitCost":tds[7].innerText,"implPriceCut":tds[8].innerText});
	}
	return grossProfitResult;
}

function showResultData(){
	var grossProfitTbEl = $("#grossProfitData");
	var valueTrs = grossProfitTbEl.find("tr");
	var html = "";
	var tdtmp;
	for(var i=0;i<valueTrs.length;i++){
		tdtmp = valueTrs[i].children;
		html = html + "<tr><td>"+tdtmp[0].innerText+"</td><td>"+tdtmp[4].innerText+"</td><td>"+tdtmp[1].innerText+"</td><td>"+tdtmp[5].innerText+"</td><td>"+tdtmp[6].innerText+"</td><td>"+tdtmp[8].innerText+"</td></tr>"
	}
	window.parent.grossProfitToNext(html);
}

function grossToResult(){
	var transId = "quotation";
    window.parent.tabIframe(transId);
}

function saveGrossProfit2DB(){
	var flag = false;
	// 存其他费用
	var grossProfitData = getGrossProfitData();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/grossProfitSave.do?evalDetailID="+ evalDetailID,
		data : JSON.stringify(grossProfitData),
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
	grossToResult();
}

function initGrossProfitTable(evalDataListFromCal){
	$("#grossProfitData").empty();
	var html = "";
	for(var i=0;i<evalDataListFromCal.length;i++){
		html = html + "<tr><td>"+evalDataListFromCal[i].spec+"</td><td></td><td>"+evalDataListFromCal[i].evalPrice+"</td><td></td><td></td><td></td><td></td><td></td><td></td><td><div  class='btn-group'><a href='#addGrossProfit' data-toggle='modal'><i class='fa fa-plus'></i> </a></div><a onClick='delRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a><div  class='btn-group'> <a onClick='getGrossProfit(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td></tr>"
	}
	$("#grossProfitData").append(html);
}

function changeCurrencyType(){
	  if(evalHeadData.quoteCurrency == "USD"){
		  $("#grossProfitTable").find("tr")[0].children[3].textContent = "产品测算成本（$）";
		  $("#grossProfitTable").find("tr")[0].children[4].textContent = "测算报价（$）";
		  $("#grossProfitTable").find("tr")[0].children[5].textContent = "执行金额（$）";
		  $("#prodEvalCostU").parents("td").prev()[0].innerText = "产品测算成本（USD）";
		  $("#quotePrice").parents("td").prev()[0].innerText = "测算报价（USD）";
		  $("#implementPrice").parents("td").prev()[0].innerText = "执行金额（USD）";
	  }
}

////////////////////////////////page review///////////////////////////////////////
function reviewPage(){
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/getGrossListByListid.do?listID="+window.parent.evalHeadData.evalDetail.grossProfitListID,
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				var jsonData = jsonObj.msg;
				viewPage(jsonData);
			}else{
				alert(jsonObj.msg);
			}
		}
	});
}

function viewPage(jsonData){
	$("#grossProfitData").empty();
	var html = "";
	var html4ResultPage = "";
	for(var i=0;i<jsonData.length;i++){
		html += "<tr><td>" + jsonData[i].spec
		+ "</td><td>" +jsonData[i].expectedProfitRate
		+ "</td><td>" +jsonData[i].productCost + "</td><td>" + jsonData[i].productEvalCost
		+ "</td><td>" +jsonData[i].quotePrice + "</td><td>" +jsonData[i].implementPrice
		+ "</td><td>" + jsonData[i].imptProfitRate + "</td><td hidden='hidden'>" +jsonData[i].imptProfitCost
		+ "</td><td hidden='hidden'>" +jsonData[i].implPriceCut+ "</td><td><div class=\"btn-group\"><a onclick=\"addGrossProfit()\" href=\"javascript:void(0);\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div class=\"btn-group\"><a onClick=\"getGrossProfit(this)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
		
		html4ResultPage += "<tr><td>"+jsonData[i].spec+"</td><td>"+jsonData[i].quotePrice
						+ "</td><td>"+jsonData[i].expectedProfitRate+"</td><td>"+jsonData[i].implementPrice
						+ "</td><td>"+jsonData[i].imptProfitRate+"</td><td>"+jsonData[i].implPriceCut+"</td></tr>"
	}
	//通过表体id把显示文本显示到网页中
	$("#grossProfitData").append(html);
	
	//结果页的恢复
	window.parent.grossProfitToNext(html4ResultPage);
}
////////////////////////////////////////////////////////////////////////////

$(function() {
  changeCurrencyType();

  if(opraType=="view"||opraType=="edit"){
	  reviewPage();
  }
});