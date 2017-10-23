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
    });
    
    if(opraType=="view"||opraType=="edit"){
		reviewPage();
	}
});

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
		html += "<tr><td>" + jsonData[i].tradeForm
		+ "</td><td>"+jsonData[i].transportModel+"</td><td>"+jsonData[i].destination+"</td><td>"+jsonData[i].shipment+"</td><td>" +jsonData[i].deliverType
		+ "</td><td>" +jsonData[i].volumeRange + "</td><td>" + jsonData[i].priceParameter
		+ "</td><td>" +jsonData[i].cartonLength + "</td><td>" +jsonData[i].cartonWidth+ "</td><td>" +jsonData[i].cartonHeight
		+ "</td><td>" + jsonData[i].numInCarton + "</td><td>" +jsonData[i].unitVolume
		+ "</td><td>" +jsonData[i].unitTransCost+"</td><td><a onClick=\"getTransport(this)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></td></tr>";
	}
	//通过表体id把显示文本显示到网页中
	$("#transportData").append(html);
}

function editPage(jsonData){
	
}


//模态框确定按钮
function updateTransport(){
	if($("#pricingPara").val()==""||$("#volume").val()==""){
		if($("#pricingPara").val()==""){
			$("#pricingPara").addClass('parsley-error');
		}else{
			$("#pricingPara").removeClass('parsley-error');
		}
		if($("#volume").val()==""){
			$("#volume").addClass('parsley-error');
		}else{
			$("#volume").removeClass('parsley-error');
		}
		alert("请检查输入内容");
		return;
	}else{
		$("#pricingPara").removeClass('parsley-error');
		$("#volume").removeClass('parsley-error');
	}
	
	$("#atForm").submit();
	var mixf = $("input").hasClass('parsley-error');
	if(!mixf){
		$("#addTransport").modal("hide");
		$(".modal-backdrop").remove();
		$("body").removeClass('modal-open');
	}else{
		return;
	}
	tr.find("td:eq(0)").text(window.parent.evalHeadData["tradeForm"]);
	tr.find("td:eq(1)").text($("#transType").find("option:selected").text()); 
	tr.find("td:eq(2)").text($("#destination").find("option:selected").text()); 
	tr.find("td:eq(3)").text($("#shipmentType").find("option:selected").text()); 
	tr.find("td:eq(4)").text($("#ftDeliveryType").find("option:selected").text()); 
	tr.find("td:eq(5)").text($("#volumeRange").val()); 
	tr.find("td:eq(6)").text($("#pricingPara").val());
	tr.find("td:eq(7)").text($("#cartonLen").val());
	tr.find("td:eq(8)").text($("#cartonWidth").val());
	tr.find("td:eq(9)").text($("#cartonHeight").val());
	tr.find("td:eq(10)").text($("#numInBoxes").val());
	tr.find("td:eq(11)").text($("#volume").val());
	tr.find("td:eq(12)").text($("#unitFreight").val());
}

function getTransport(obj) {
	tr = $(obj).closest("tr");
	if(tr.find("td:eq(0)").html()==""){
		initValue();
		var	unitFreight="";
		if($("#pricingPara").val()!="" && $("#volume").val()!=""){
			unitFreight=($("#volume").val())*($("#pricingPara").val());
			$("#unitFreight").val(unitFreight);
		}else{
			$("#unitFreight").val("");
		}
	}else{
		//获取列值，赋值给弹出框
		var temp_html="";
		for(var i=0;i<transTypeInit.length;i++){
			 temp_html+="<option value='"+transTypeInit[i]+"'>"+transTypeInit[i]+"</option>";   
		}
	    $("#transType").html(temp_html);
		$("#transType").val(tr.find("td:eq(1)").html());
		destination();
		$("#destination").val(tr.find("td:eq(2)").html()); 
		shipmentType();
		$("#shipmentType").val(tr.find("td:eq(3)").html()); 
		ftDeliveryType();
		$("#ftDeliveryType").val(tr.find("td:eq(4)").html()); 
		volumeRange();
		$("#volumeRange").val(tr.find("td:eq(5)").html());
		$("#pricingPara").val(tr.find("td:eq(6)").html());
		$("#cartonLen").val(tr.find("td:eq(7)").html());
		$("#cartonWidth").val(tr.find("td:eq(8)").html());
		$("#cartonHeight").val(tr.find("td:eq(9)").html());
		$("#numInBoxes").val(tr.find("td:eq(10)").html());
		$("#volume").val(tr.find("td:eq(11)").html());
		$("#unitFreight").val(tr.find("td:eq(12)").html());
	}
	$("#addTransport").modal("show");
}

//计算单位运费
function changeUnit(){	
	var	unitFreight="";
	if($("#pricingPara").val()!="" && $("#volume").val()!=""){
		unitFreight=($("#volume").val())*($("#pricingPara").val());
		$("#unitFreight").val(unitFreight);
	}else{
		$("#unitFreight").val("");
	}
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
	changeUnit();
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
    });
}


function transCostToOtherCost(){
    var transId = "otherCost";
    window.parent.tabIframe(transId);
}

function getTransportCost(){
	var transportResult=[];
	var valueTrs = $("#transportTable").find("tr");
	for(var i=1;i<valueTrs.length;i++){
		var transportTds = valueTrs[i].children;
		transportResult.push({"tradeForm":transportTds[0].innerText,"transportModel":transportTds[1].innerText,"destination":transportTds[2].innerText,
			"shipment":transportTds[3].innerText,"deliverType":transportTds[4].innerText,"volumeRange":transportTds[5].innerText,
			"priceParameter":transportTds[6].innerText,"cartonLength":transportTds[7].innerText,"cartonWidth":transportTds[8].innerText,
			"cartonHeight":transportTds[9].innerText,"numInCarton":transportTds[10].innerText,"unitVolume":transportTds[11].innerText,
			"unitTransCost":transportTds[12].innerText});
	}
	return transportResult;
}

function saveTrans2DB(){
	var flag = false;
	var resultTransJson = JSON.stringify($("#transportData").find("tr").eq(0).children("td").eq(12).text());
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
function saveTransportCost(){
	if(opraType=="view"){
		transCostToOtherCost();
		return;
	}
	//运杂费判断单位运费是否为空，为空需要先编辑
	var TransportValue = $("#transportData").find("tr").eq(0).children("td").eq(12).text();
	if(TransportValue==""){
		alert("数据未填充完整，请编辑！");
		return;
	}
	
	if(!saveTrans2DB()){
    	return;
    }
	
	window.parent.$transport_result=TransportValue;
	transCostToOtherCost();
}
