var addOrUpdate = "add";

var transTypeInit=[];
//目的港口json
var destPortInit ={};
//发送方式
var shipmentTypeInit = {};
//工厂交货方式
var ftDelTypeInit = {};
//单批货量范围
var volumeRangeInit = {};
//核价参数	
var pricingParaRMBInit = {};


////////////////////////////////page review///////////////////////////////////////
function reviewPage(){
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/getTransportListByListid.do?listID="+window.parent.evalHeadData.evalDetail.transportListID,
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				var jsonData = jsonObj.msg;
				if(opraType=="view"){
					viewPage(jsonData);
				}else if(opraType=="edit"){
					editPage(jsonData);
				}
			}else{
				alert(jsonObj.msg);
			}
		}
	});
}

function viewPage(jsonData){
	$("#transportData").empty();
	var html = "";
	for(var i=0;i<jsonData.length;i++){
		html += "<tr><td>" + jsonData[i].spec
		+ "</td><td>"+jsonData[i].tradeForm+"</td><td>" + jsonData[i].transportModel
		+ "</td><td>" + jsonData[i].destination + "</td><td>" + jsonData[i].shipment
		+ "</td><td>" + jsonData[i].deliverType + "</td><td>" +jsonData[i].volumeRange
		+ "</td><td>" + jsonData[i].priceParameter + "</td><td>" +jsonData[i].unitVolume
		+ "</td><td>" +jsonData[i].unitTransCost+ "</td><td><div class=\"btn-group\"><a  onClick=\"addTransportRow()\" href=\"javascript:void(0)\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div class=\"btn-group\"><a onClick=\"getTransport(this)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
	}
	//通过表体id把显示文本显示到网页中
	$("#transportData").append(html);
}

function editPage(jsonData){
	
}
////////////////////////////////////////////////////////////////////////////



/////////////根据贸易形式，客户，国家进行筛选json文件，并赋给全局变量////////////////
$(function() {
	var path = "/JHTEvaluation";
	var tradeFormt = window.parent.evalHeadData.tradeForm;
	var customert = window.parent.evalHeadData.customerID;
//	var countryt = window.parent.evalHeadData.country;
	var transportJson;
	var finalJson = [];
	
	// 遍历json。data数据
	$.ajaxSettings.async = false;
	$.getJSON(path+"/dataBase-config/eval_transport.data",function(data){
		transportJson = data;
		 $.each(transportJson, function (i, obj) {
			 if(obj.customer == customert || obj.customer =="*跳过(不选）"){
				 if(obj.tradeForm == tradeFormt){
					 finalJson.push(obj);
				 }
			 }
	     }); 
		 if(finalJson ==""){
			 alert("当前客户、贸易形式下,没有对应运费核价参数！");
			 window.parent.tarsJson = [];
		 }
		 else{
			 window.parent.tarsJson = finalJson; 
		 }
    });
	
	
	$.each(window.parent.tarsJson, function (i, obj) {
		//取运输方式
		var transTypeTmp = obj.transType;
		if($.inArray(transTypeTmp, transTypeInit)<0){
			if(transTypeTmp.indexOf("海运")>-1){
				transTypeInit.splice(0, 0,transTypeTmp);
			}else{
				transTypeInit.push(obj.transType);
			}
		}
		//取目的港
		var destPortTmp = obj.destPort;
		var destPortArrayTmp = [];
		if(typeof(destPortInit[transTypeTmp])!="undefined"){
			destPortArrayTmp = destPortInit[transTypeTmp];
		}
		if($.inArray(destPortTmp, destPortArrayTmp)<0){
			destPortArrayTmp.push(destPortTmp);
		}
		destPortInit[transTypeTmp] = destPortArrayTmp;
		//取发送方式
		var shipmentTypeTmp = obj.shipmentType;
		var shipmentTypeArrayTmp = [];
		if(typeof(shipmentTypeInit[destPortTmp])!="undefined"){
			shipmentTypeArrayTmp = shipmentTypeInit[destPortTmp];
		}
		if($.inArray(shipmentTypeTmp, shipmentTypeArrayTmp)<0){
			shipmentTypeArrayTmp.push(shipmentTypeTmp);
		}
		shipmentTypeInit[destPortTmp] = shipmentTypeArrayTmp;
		//取工厂交货方式
		var ftDeliveryTypeTmp = obj.ftDeliveryType;
		var ftDeliveryTypeArrayTmp = [];
		if(typeof(ftDelTypeInit[shipmentTypeTmp])!="undefined"){
			ftDeliveryTypeArrayTmp = ftDelTypeInit[shipmentTypeTmp];
		}
		if($.inArray(ftDeliveryTypeTmp, ftDeliveryTypeArrayTmp)<0){
			ftDeliveryTypeArrayTmp.push(ftDeliveryTypeTmp);
		}
		ftDelTypeInit[shipmentTypeTmp] = ftDeliveryTypeArrayTmp;
		//取单批货量范围
		var volumeRangeTmp = obj.volumeRange;
		var volumeRangeArrayTmp = [];
		if(typeof(volumeRangeInit[ftDeliveryTypeTmp])!="undefined"){
			volumeRangeArrayTmp = volumeRangeInit[ftDeliveryTypeTmp];
		}
		if($.inArray(volumeRangeTmp, volumeRangeArrayTmp)<0){
			volumeRangeArrayTmp.push(volumeRangeTmp);
			//取核价参数
			pricingParaRMBInit[volumeRangeTmp]={"pricingParaRMB":obj.pricingParaRMB,"pricingParaRMBUnit":obj.pricingParaRMBUnit};
		}
		volumeRangeInit[ftDeliveryTypeTmp] = volumeRangeArrayTmp;
    });
	
	//选择运输方式改变目的地
    $("#transType").change(function(){
    	destination();
    });
    //选择目的地改变发送方式
    $("#destination").change(function(){
    	shipmentType();
    });
    //选择发送方式改变工厂交货方式
    $("#shipmentType").change(function(){
    	ftDeliveryType();
    });
    //选择工厂交货方式改变单批货量范围
    $("#ftDeliveryType").change(function(){
    	volumeRange();
    });
  //选择单批货量范围改变核价参数
    $("#volumeRange").change(function(){
    	pricingPara();
    	calculValue();
    });
    
    
    if(opraType=="view"||opraType=="edit"){
		reviewPage();
	}
	
});
//新增一行
function addTransportRow(){
	addOrUpdate = "add";
	if(typeof(window.parent.specSel)!="undefined"){
		var productSpecJson =window.parent.specSel;
		$("#productSpec").empty(); 
		for(var data in productSpecJson){
			$("#productSpec").append("<option value='"+data+"'>"+data+"</option>"); 
		}
	}
	initValue();
	
	//根据规格初始化单位立方数量和单位运费计算结果
	var spec= $("#productSpec").find("option:eq(0)").text();
	if(typeof(window.parent.unitVolume)=="undefined" || !window.parent.unitVolume.hasOwnProperty(spec)){
		$("#unitCubeQt").val("");
	}else{
		var json =window.parent.unitVolume;
		$("#unitCubeQt").val(json[spec]);
	}
	$("#addTransport").modal("show");
}


//模态框确定按钮
function updateTransport(){
	$("#atForm").submit();
	if($("#pricingPara").val()!=""){
		if($("#pricingPara").hasClass('parsley-error')){
			$("#pricingPara").removeClass('parsley-error');
		}
	}
	
	var mixf = $("input").hasClass('parsley-error');
	if(!mixf){
		$("#addTransport").modal("hide");
		$(".modal-backdrop").remove();
		$("body").removeClass('modal-open');
	}
	else{
		return;
	}
	//新增状态点击确定
	if(addOrUpdate == "add"){
		var html = "<tr><td>" + $("#productSpec").find("option:selected").text()
		+ "</td><td>"+window.parent.evalHeadData["tradeForm"]+"</td><td>" + $("#transType").find("option:selected").text()
		+ "</td><td>" + $("#destination").find("option:selected").text() + "</td><td>" + $("#shipmentType").find("option:selected").text()
		+ "</td><td>" + $("#ftDeliveryType").find("option:selected").text() + "</td><td>" +$("#volumeRange").val()
		+ "</td><td>" + $("#pricingPara").val() + "</td><td>" +$("#unitCubeQt").val()
		+ "</td><td>" +$("#unitFreight").val()+ "</td><td><div class=\"btn-group\"><a  onClick=\"addTransportRow()\" href=\"javascript:void(0)\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div class=\"btn-group\"><a onClick=\"getTransport(this)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
//		通过表体id把显示文本显示到网页中
		$("#transportData").append(html);
	}
	else{
		//编辑状态点击确定
		tr.find("td:eq(0)").text($("#productSpec").find("option:selected").text());
		tr.find("td:eq(1)").text(window.parent.evalHeadData["tradeForm"]);
		tr.find("td:eq(2)").text($("#transType").find("option:selected").text()) ; 
		tr.find("td:eq(3)").text($("#destination").find("option:selected").text()) ; 
		tr.find("td:eq(4)").text($("#shipmentType").find("option:selected").text()) ; 
		tr.find("td:eq(5)").text($("#ftDeliveryType").find("option:selected").text()) ; 
		tr.find("td:eq(6)").text($("#volumeRange").val()) ; 
		tr.find("td:eq(7)").text($("#pricingPara").val()) ; 
		tr.find("td:eq(8)").text($("#unitCubeQt").val()) ; 
		tr.find("td:eq(9)").text($("#unitFreight").val()) ; 
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


//Transport中编辑,模态框赋值，用于修改		
function getTransport(obj) {
	//获取选中的行
	addOrUpdate = "update";
	if(typeof(window.parent.specSel)!="undefined"){
		var productSpecJson =window.parent.specSel;
		$("#productSpec").empty(); 
		for(var data in productSpecJson){
			$("#productSpec").append("<option value='"+data+"'>"+data+"</option>"); 
		}
	}
	
	tr = $(obj).closest("tr");
	//获取列值，赋值给弹出框
	var spec= tr.find("td:eq(0)").html();
	if(spec==""){
		if(typeof(window.parent.specSel)!="undefined"){
			var productSpecJson =window.parent.specSel;
			$("#productSpec").empty(); 
			for(var data in productSpecJson){
				$("#productSpec").append("<option value='"+data+"'>"+data+"</option>"); 
			}
		}
		initValue();
		var spec= $("#productSpec").find("option:eq(0)").text();
		if(typeof(window.parent.unitVolume)=="undefined" || !window.parent.unitVolume.hasOwnProperty(spec)){
			$("#unitCubeQt").val("");
		}else{
			var json =window.parent.unitVolume;
			$("#unitCubeQt").val(json[spec]);
		}
		var	unitFreight="";
		if($("#pricingPara").val()!="" && $("#unitCubeQt").val()!="" ){
			unitFreight=($("#unitCubeQt").val())*($("#pricingPara").val());
			$("#unitFreight").val(unitFreight);
		}else{
			$("#unitFreight").val("");
		}
	}else{
		$("#productSpec").val(spec);
		var temp_html="";
		for(var i=0;i<transTypeInit.length;i++){
			 temp_html+="<option value='"+transTypeInit[i]+"'>"+transTypeInit[i]+"</option>";   
		}
	    $("#transType").html(temp_html);
		$("#transType").val(tr.find("td:eq(2)").html()); 
		destination();
		$("#destination").val(tr.find("td:eq(3)").html());
		shipmentType();
		$("#shipmentType").val(tr.find("td:eq(4)").html()); 
		ftDeliveryType();
		$("#ftDeliveryType").val(tr.find("td:eq(5)").html()); 
		volumeRange();
		$("#volumeRange").val(tr.find("td:eq(6)").html()); 
		$("#pricingPara").val(tr.find("td:eq(7)").html());
		$("#unitFreight").val(tr.find("td:eq(9)").html());
		//根据规格初始化单位立方数量和单位运费计算结果
		$("#unitCubeQt").val(tr.find("td:eq(8)").html());
		//$("#unitCubeQt").val(window.parent.unitVolume[spec]=="null"?"":window.parent.unitVolume[spec]);
//		if(typeof(window.parent.unitVolume)=="undefined" || !window.parent.unitVolume.hasOwnProperty(spec)){
//			$("#unitCubeQt").val("");
//		}else{
//			$("#unitCubeQt").val(window.parent.unitVolume[spec]);
//		}
//		var	unitFreight="";
//		if($("#pricingPara").val()!="" && $("#unitCubeQt").val()!="" ){
//			unitFreight=($("#unitCubeQt").val())*($("#pricingPara").val());
//			$("#unitFreight").val(unitFreight);
//		}else{
//			$("#unitFreight").val("");
//		}
	}
	
	$("#addTransport").modal("show");
}

//计算单位运费
function calculValue(obj){
	var unitFreight="";
	if($("#pricingPara").val()!="" && $("#unitCubeQt").val()!="" ){
		unitFreight=($("#pricingPara").val())*($("#unitCubeQt").val());
	}		
	$("#unitFreight").val(unitFreight);	
}

//成品规格连带形成单位立方体积
function changeUnit(){
	//step1:单位立方的change逻辑
	var spec= $("#productSpec").find("option:selected").text();
	if(typeof(window.parent.unitVolume)=="undefined" || !window.parent.unitVolume.hasOwnProperty(spec)){
		$("#unitCubeQt").val("");
		$("#unitCubeQt").addClass('parsley-error');
		alert("该规格下未保存单位立方数量");
	}else{
		$("#unitCubeQt").removeClass('parsley-error');
		$("#unitCubeQt").val(window.parent.unitVolume[spec]);
	}
	
	var	unitFreight="";
	if($("#pricingPara").val()!="" && $("#unitCubeQt").val()!="" ){
		$("#pricingPara").removeClass('parsley-error');
		$("#unitCubeQt").removeClass('parsley-error');
		unitFreight=($("#unitCubeQt").val())*($("#pricingPara").val());
	}
	else{
		$("#unitCubeQt").addClass('parsley-error');
		$("#pricingPara").addClass('parsley-error');
	}
	$("#unitFreight").val(unitFreight);
}

///////////////////////////////////////////////////////////////////////////////////////

//目的港口
function destination(){
	if(window.parent.tarsJson.length<1) return;
	var temp_html1="";
	var array = destPortInit[$("#transType").val()];
	for(var i=0;i<array.length;i++ ){ 
		temp_html1+= "<option value='"+array[i]+"'>"+array[i]+"</option>";   
	}
	 $("#destination").html(temp_html1);
	shipmentType();
}
 
//发送方式
 function shipmentType() {
	var temp_html2 = "";
	var array = shipmentTypeInit[$("#destination").val()];
	for (var i = 0; i < array.length; i++) {
		temp_html2 += "<option value='" + array[i] + "'>" + array[i] + "</option>";
	}
	$("#shipmentType").html(temp_html2);
	ftDeliveryType();
}

//工厂交货方式
function ftDeliveryType(){
	var temp_html3 = ""; 
	var array = ftDelTypeInit[$("#shipmentType").val()];
	for(var i=0;i<array.length;i++ ){ 
		temp_html3+= "<option value='"+array[i]+"'>"+array[i]+"</option>";   
	}
		$("#ftDeliveryType").html(temp_html3);
   volumeRange();
}

//单批货量范围
var volumeRange = function() {
	var temp_html4 = "";
	var array = volumeRangeInit[$("#ftDeliveryType").val()];
	for (var i = 0; i < array.length; i++) {
		temp_html4 += "<option value='" + array[i] + "'>" + array[i] + "</option>";
	}
	$("#volumeRange").html(temp_html4);
	pricingPara();
}

//核价参数
var pricingPara = function() {
	$("#pricingPara").val(pricingParaRMBInit[$("#volumeRange").val()]["pricingParaRMB"]);
	$("#pricingParaLabel").text("核价参数("+pricingParaRMBInit[$("#volumeRange").val()]["pricingParaRMBUnit"]+")");
}
 
//下拉框联动
function initValue(){
	var temp_html="";
	for(var i=0;i<transTypeInit.length;i++){
		 temp_html+="<option value='"+transTypeInit[i]+"'>"+transTypeInit[i]+"</option>";   
	}
    $("#transType").html(temp_html);
    //筛选并后续的显示
    destination();
}

/////////////////*************////////////////////////////
 //获取拼接table里所有数据存到数据库
function getTransportCost(){
	var transportResult=[];
	var valueTrs = $("#transportTable").find("tr");
	for(var i=1;i<valueTrs.length;i++){
		var transportTds = valueTrs[i].children;
		transportResult.push({"spec":transportTds[0].innerText,"tradeForm":transportTds[1].innerText,"transportModel":transportTds[2].innerText,
			"destination":transportTds[3].innerText,"shipment":transportTds[4].innerText,"deliverType":transportTds[5].innerText,
			"volumeRange":transportTds[6].innerText,"priceParameter":transportTds[7].innerText,"unitVolume":transportTds[8].innerText,
			"unitTransCost":transportTds[9].innerText});
	}
	return transportResult;
}

function transCostToOtherCost(){
    var transId = "otherCost";
    window.parent.tabIframe(transId);
}

function genTransCostResult(){
	var result={};
	var trs = $("#transportData").find("tr");
	for(var i=0;i<trs.length;i++){
		if(trs[i].children[0].innerText!=""&&trs[i].children[9].innerText!=""){
			result[trs[i].children[0].innerText] = trs[i].children[9].innerText;
		}
	}
	return result;
}

function saveTrans2DB(){
	var flag = false;
	var resultTransJson = JSON.stringify(genTransCostResult());
	var transportData = getTransportCost();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/transportCostSave.do?evalDetailID="+ evalDetailID+"&resultTransJson="+resultTransJson+"&",
		data : JSON.stringify(transportData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('(' + json + ')');
			if (jsonObj.flag) {
				flag = true;
				alert("运杂费测算保存成功!");
			} else {
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

//暂存按钮，保存table数据进数据库
function saveTransportCost() {
	if(opraType=="view"){
		transCostToOtherCost();
		return;
	}
	// 运杂费判断单位运费是否为空，为空需要先编辑
	var TransportValue = $('#transportTable').find("tr").eq(1).children("td")
			.eq(9).text();
	if (TransportValue == "") {
		alert("数据未填充完整，请编辑！");
		return;
	}
    if(!saveTrans2DB()){
    	return;
    }
	window.parent.$transport_result = genTransCostResult();
	transCostToOtherCost();
}
