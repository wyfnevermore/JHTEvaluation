var addOrUpdate = "add";

/**
 * 获取拼接table里所有数据存到数据库
 */
function getCartonCost(){
	//var costResult=[{"costType":"单位网费","flatScreenCost":"1.11","flatScreenColor":"2.22","rotaryScreenCost":"3.33","rotaryScreenColor":"4.44","minOrderNum":"100","cost":"20.00"}];
	var cartonResult=[];
	var valueTrs = $("#cartonTable").find("tr");
	for(var i=1;i<valueTrs.length;i++){
		var cartonTds = valueTrs[i].children;
		cartonResult.push({"spec":cartonTds[0].innerText,"productLength":cartonTds[1].innerText,"productWidth":cartonTds[2].innerText,
			"productHeight":cartonTds[3].innerText,"cartontLength":cartonTds[4].innerText,"cartontWidth":cartonTds[5].innerText,
			"cartontHeight":cartonTds[6].innerText,"countInCarton":cartonTds[7].innerText,"unitVolume":cartonTds[8].innerText,
			"cartonPrice":cartonTds[9].innerText,"unitCartonCost":cartonTds[10].innerText,"unitPanelCost":cartonTds[11].innerText,
			"cost":cartonTds[12].innerText,"formulaExpress":cartonTds[13].innerText,"formulaVal":cartonTds[11].innerText});
	}
	return cartonResult;
}

function getExcelCartonJsonStr(){
	var cartonResult=[];
	var valueTrs = $("#cartonTable").find("tr");
	for(var i=1;i<valueTrs.length;i++){
		var cartonTds = valueTrs[i].children;
		cartonResult.push({"spec":cartonTds[0].innerText,
			"cartontLength":cartonTds[4].innerText,"cartontWidth":cartonTds[5].innerText,
			"cartontHeight":cartonTds[6].innerText,"countInCarton":cartonTds[7].innerText,
			"cost":cartonTds[12].innerText});
	}
	return JSON.stringify(cartonResult);
}

function cartonToFreight(){
	var transId = "expenses";
	window.parent.tabIframe(transId);
}

/*
 * 传纸箱每个规格对应的单位体积到父页面（maching.jsp）
 */
function setUnitVolume2Parent(){
	var unitVolumeJson = {};
	var trs = $("#cartonData").find("tr");
	for(var i=0;i<trs.length;i++){
		unitVolumeJson[$(trs[i]).find("td:eq(0)").text()]=$(trs[i]).find("td:eq(8)").text();
	}
	window.parent.unitVolume = unitVolumeJson;
}

function genCartonCostResult(){
	var result={};
	var trs = $("#cartonData").find("tr");
	for(var i=0;i<trs.length;i++){
		if(trs[i].children[0].innerText!=""&&trs[i].children[11].innerText!=""){
			result[trs[i].children[0].innerText] = trs[i].children[12].innerText;
		}
	}
	return result;
}

function saveCarton2DB(){
	var flag = false;
	var resultCartonJson = JSON.stringify(genCartonCostResult());
	var cartonData = getCartonCost();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/cartonCostSave.do?evalDetailID="+evalDetailID+"&resultCartonJson="+resultCartonJson+"&",
		data : JSON.stringify(cartonData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				flag = true;
				alert("纸箱成本测算保存成功！");
			}else{
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

//暂停按钮，保存table数据进数据库
function saveCartonCost(){
	if(opraType=="view"){
		cartonToFreight();
		return;
	}
	//纸箱判断第一行报价成本是否为空，为空需要先编辑
	var cartonValue = $('#cartonTable').find("tr").eq(1).children("td").eq(12).text();
	if(cartonValue==""){
		alert("数据未填充完整，请编辑！");
		return;
	}
	if(!saveCarton2DB()){
		return;
	}
	setUnitVolume2Parent();
	window.parent.$carton_result=genCartonCostResult();
	cartonToFreight();
}





var dictText = "";
//查询
function cartonQuery(cartonId){
	$.ajax({
		type: "post",
		async : false,
		url:"/JHTEvaluation/cartonQuery.do?cartonId="+cartonId,
		/* data: $("#"+tableName+"QueryForm").serialize(), */ 
		dataType: "json",
		success: function (json) {
			showData(json);
		}
	});
}

//获取字段表中字段
function getText(value){
	$.ajax({
		type: "post",
		async : false,
		url:"/JHTEvaluation/getText.do?value="+value,
		/* data: $("#"+tableName+"QueryForm").serialize(), */ 
		dataType: "text",
		success: function (text) {
			alert(text);
			dictText=text;
		}
	});
}

/* 显示数据 */
function showData(d) {
	//循环遍历一边d
	for ( var i = 0; i < d.length; i++) {
		getText(d[i].spec);
		var html = "<tr><td style=\"display:none\" >"+d[i].cartonID+"</td><td>" + dictText
		+ "</td><td>	22</td><td>22</td><td>22</td><td>" + d[i].cartonLength
		+ "</td><td>" + d[i].cartonWidth + "</td><td>" + d[i].cartonHeight
		+ "</td><td>" + d[i].qtInCarton + "</td><td>" + d[i].unitVolume
		+ "</td><td>" + d[i].unitCartCost + "</td><td>" + d[i].unitPanelCost
		+ "</td><td>" + d[i].quoteCost + "</td><td><div class=\"btn-group\"><a href=\"#updateCartonCost\" data-toggle=\"modal\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div class=\"btn-group\"><a onClick=\"getCarton(this)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#cartonData").append(html);
	}
}



//新增
function addCarton() {
	$.ajax({
		type : "POST",
		async : false,
		url : "/JHTEvaluation/addCarton.do",
		data : $("#cartonForm").serialize(),
		dataType : "text",
		success : function(uuid) {
			alert(uuid);
			$("#updateCartonCost").modal("hide");
			$(".modal-backdrop").remove();
			$("body").removeClass('modal-open');
			cartonQuery(uuid);
		}
	});
}


////////*******************使用统一button****************************///////////////////////////////

function addCartonCost(){
	addOrUpdate = "add";
	if(typeof(window.parent.specSel)!="undefined"){
		var specJson =window.parent.specSel;
		$("#spec").empty(); 
		for(var data in specJson){
			$("#spec").append("<option value='"+data+"'>"+data+"</option>"); 
		}
	}
	//初始化成品长宽高	应需求暂时注释掉
//	var multiComp = false;
//	if(typeof(window.parent.multiComp)!="undefined"){
//		multiComp = window.parent.multiComp;
//	}
//	if(!multiComp){
//		//初始化成品长宽高
//		var spec= $("#spec").find("option:eq(0)").text();
//		if(typeof(window.parent.specSel)=="undefined" || !window.parent.specSel.hasOwnProperty(spec)){
//			$("#specLength").val("");
//			$("#specWidth").val("");
//			$("#specHeight").val("");
//		}else{
//			var json =window.parent.specSel;
//			$("#specLength").val(json[spec]["Length"]);
//			$("#specWidth").val(json[spec]["Width"]);
//			$("#specHeight").val(json[spec]["Height"]);
//		}
//	}else {
//		$("#specLength").val("");
//		$("#specWidth").val("");
//		$("#specHeight").val("");
//	}
	$("#unitCartonCost").val(cartonUnitPrice);
	$("#updateCartonCost").modal("show");
}


function specOnchange(obj){
	//应需求暂时注释掉
//	var spec= $(obj).find("option:selected").text();
//	if(typeof(window.parent.specSel)=="undefined" || !window.parent.specSel.hasOwnProperty(spec)){
//		$("#specLength").val("");
//		$("#specWidth").val("");
//		$("#specHeight").val("");
//	}else{
//		$("#specLength").val(window.parent.specSel[spec]["Length"]);
//		$("#specWidth").val(window.parent.specSel[spec]["Width"]);
//		$("#specHeight").val(window.parent.specSel[spec]["Height"]);
//	}
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

//点击编辑里确定
var tr ="";
function updateCarton(){
	$("#cartonForm").submit();
	var mixf = !$("#cartonForm input").hasClass('parsley-error');
	if(mixf == true){
		$("#updateCartonCost").modal("hide");
		$(".modal-backdrop").remove();
		$("body").removeClass('modal-open');
	}
	else{
		return ;
	}

	if(addOrUpdate == "add"){
		//新增一行
		$("#addCartonCost").modal("hide");
		$(".modal-backdrop").remove();
		$("body").removeClass('modal-open');
		var html = "<tr><td>" + $("#spec").find("option:selected").text()
		+ "</td><td>"+$("#specLength").val()+"</td><td>"+$("#specWidth").val()+"</td><td>"+$("#specHeight").val()+"</td><td>" +$("#cartonLength").val()
		+ "</td><td>" +$("#cartonWidth").val() + "</td><td>" + $("#cartonHeight").val()
		+ "</td><td>" +$("#qtInCarton").val() + "</td><td>" +$("#unitVolume").val()+ "</td><td>" +$("#unitCartonCost").val()
		+ "</td><td>" + $("#unitCartCost").val() + "</td><td>" +$("#unitPanelCost").val()
		+ "</td><td>" +$("#quoteCost").val()+"</td><td style=\"display:none;\">" +$("#formulaInput1").val()+"</td><td style=\"display:none;\">" +$("#formulaInput2").val()+ "</td><td><div class=\"btn-group\"><a onClick=\"addCartonCost()\" href=\"javascript:void(0)\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div class=\"btn-group\"><a onClick=\"getCarton(this)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#cartonData").append(html);
	}else{
		//修改一行
		tr.find("td:eq(0)").text($("#spec").find("option:selected").text());
		tr.find("td:eq(1)").text($("#specLength").val()) ; 
		tr.find("td:eq(2)").text($("#specWidth").val()) ; 
		tr.find("td:eq(3)").text($("#specHeight").val()) ; 
		tr.find("td:eq(4)").text($("#cartonLength").val()) ; 
		tr.find("td:eq(5)").text($("#cartonWidth").val()) ; 
		tr.find("td:eq(6)").text($("#cartonHeight").val()) ; 
		tr.find("td:eq(7)").text($("#qtInCarton").val()) ; 
		tr.find("td:eq(8)").text($("#unitVolume").val()) ; 
		tr.find("td:eq(9)").text($("#unitCartonCost").val()) ; 
		tr.find("td:eq(10)").text($("#unitCartCost").val()) ; 
		tr.find("td:eq(11)").text($("#unitPanelCost").val()) ; 
		tr.find("td:eq(12)").text($("#quoteCost").val()) ; 
		tr.find("td:eq(13)").text($("#formulaInput1").val()) ; 
		tr.find("td:eq(14)").text($("#formulaInput2").val()) ; 
	}

}

//carton中编辑		
function getCarton(obj) {
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
	$("#unitCartonCost").val(cartonUnitPrice);
	$("#updateCartonCost").modal("show");
	//获取列值，赋值给弹出框
	var spec= tr.find("td:eq(0)").html();
	if(spec==""){
		spec = $("#spec").find("option:eq(0)").text();
	}
	$("#spec").val(spec);
	
//应需求暂时注释掉
//	var multiComp = false;
//	if(typeof(window.parent.multiComp)!="undefined"){
//		multiComp = window.parent.multiComp;
//	}
//	if(!multiComp){
//		if(typeof(window.parent.specSel)=="undefined" || !window.parent.specSel.hasOwnProperty(spec)){
//			$("#specLength").val("");
//			$("#specWidth").val("");
//			$("#specHeight").val("");
//		}else{
//			var json =window.parent.specSel;
//			$("#specLength").val(json[spec]["Length"]);
//			$("#specWidth").val(json[spec]["Width"]);
//			$("#specHeight").val(json[spec]["Height"]);
//		}
//	}else{
//		$("#specLength").val("");
//		$("#specWidth").val("");
//		$("#specHeight").val("");
//	}
	
	$("#specLength").val(tr.find("td:eq(1)").html());
	$("#specWidth").val(tr.find("td:eq(2)").html());
	$("#specHeight").val(tr.find("td:eq(3)").html());
	$("#cartonLength").val(tr.find("td:eq(4)").html());
	$("#cartonWidth").val(tr.find("td:eq(5)").html());
	$("#cartonHeight").val(tr.find("td:eq(6)").html());
	$("#qtInCarton").val(tr.find("td:eq(7)").html());
	$("#unitVolume").val(tr.find("td:eq(8)").html());
//	$("#unitCartonCost").val(tr.find("td:eq(9)").html());
	$("#unitCartCost").val(tr.find("td:eq(10)").html());
	$("#unitPanelCost").val(tr.find("td:eq(11)").html());
	$("#quoteCost").val(tr.find("td:eq(12)").html());
	$("#formulaInput1").val(tr.find("td:eq(13)").html());
	$("#formulaInput2").val(tr.find("td:eq(14)").html());
}

//------------------------------ 公式 ------------------------------//
function selFormulaEle(obj){
	var lableValue = $(obj)[0].parentNode.previousElementSibling.previousElementSibling.innerText;
	lableValue = lableValue.replace(":","");
	lableValue = lableValue.replace("：","");
	var inputValue = $(obj)[0].parentNode.previousElementSibling.childNodes[0].value;
	if(inputValue==""){
		return;
	}
	$("#formulaInput1").val($("#formulaInput1").val()+lableValue);
	$("#formulaInput2").val($("#formulaInput2").val()+inputValue);
}
function formulaCalAdd(){
	$("#formulaInput1").val($("#formulaInput1").val()+"+");
	$("#formulaInput2").val($("#formulaInput2").val()+"+");
}
function formulaCalReduce(){
	$("#formulaInput1").val($("#formulaInput1").val()+"-");
	$("#formulaInput2").val($("#formulaInput2").val()+"-");
}
function formulaCalMultiply(){
	$("#formulaInput1").val($("#formulaInput1").val()+"*");
	$("#formulaInput2").val($("#formulaInput2").val()+"*");
}
function formulaCalDivide(){
	$("#formulaInput1").val($("#formulaInput1").val()+"/");
	$("#formulaInput2").val($("#formulaInput2").val()+"/");
}
function formulaCalrBacketL(){
	$("#formulaInput1").val($("#formulaInput1").val()+"(");
	$("#formulaInput2").val($("#formulaInput2").val()+"(");
}
function formulaCalrBacketR(){
	$("#formulaInput1").val($("#formulaInput1").val()+")");
	$("#formulaInput2").val($("#formulaInput2").val()+")");
}
function clearFormulaInput(){
	$("#formulaInput1").val("");
	$("#formulaInput2").val("");
}
function calFormulaResult(obj){
	try{
		var result = eval('('+$("#formulaInput2").val()+')');
		$(obj)[0].parentNode.previousElementSibling.children[0].value=result;
	}catch(e){
		alert("请检查计算公式！");
	}
}

//计算单位体积（立方）和 单位纸箱成本
function calOther(){
	//计算单位体积（立方）
	var calUnitVol = 0.00;
	if($("#cartonLength").val()!="" && $("#cartonWidth").val()!="" && $("#cartonHeight").val()!="" && $("#qtInCarton").val()!="" ){
		calUnitVol=parseFloat($("#cartonLength").val())*parseFloat($("#cartonWidth").val())*parseFloat($("#cartonHeight").val())/parseFloat($("#qtInCarton").val());
		$("#unitVolume").val(calUnitVol.toFixed(2));
	}else{
		$("#unitVolume").val("");
	}
	
	//计算单位纸箱成本
	var calUnitCartCost = 0.00;
	if($("#cartonLength").val()!="" && $("#cartonWidth").val()!="" && $("#cartonHeight").val()!="" && $("#qtInCarton").val()!="" && $("#unitCartonCost").val()!=""){
		calUnitCartCost=(parseFloat($("#cartonLength").val())+parseFloat($("#cartonWidth").val())+0.08)*(parseFloat($("#cartonWidth").val())+parseFloat($("#cartonHeight").val())+0.05)*parseFloat($("#unitCartonCost").val())*2/parseFloat($("#qtInCarton").val());
		$("#unitCartCost").val(calUnitCartCost.toFixed(2));
	}else{
		$("#unitCartCost").val("");
	}	
}

//计算纸箱单价
function calCartValue(){
	var cartonCost="";
	if($("#unitCartCost").val()!="" && $("#unitPanelCost").val()!="" ){
		cartonCost=parseFloat($("#unitCartCost").val())+parseFloat($("#unitPanelCost").val());
	}		
	$("#quoteCost").val(cartonCost);	
}

//------------------------------ 公式End ------------------------------//

////////////////////////////////page review///////////////////////////////////////
function reviewPage(){
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/getCartonListByListid.do?listID="+window.parent.evalHeadData.evalDetail.cartonListID,
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
	$("#cartonData").empty();
	var html = "";
	for(var i=0;i<jsonData.length;i++){
		html += "<tr><td>" + jsonData[i].spec
		+ "</td><td>"+jsonData[i].productLength+"</td><td>"+jsonData[i].productWidth+"</td><td>"+jsonData[i].productHeight+"</td><td>" +jsonData[i].cartontLength
		+ "</td><td>" +jsonData[i].cartontWidth + "</td><td>" + jsonData[i].cartontHeight
		+ "</td><td>" +jsonData[i].countInCarton + "</td><td>" +jsonData[i].unitVolume+ "</td><td>" +jsonData[i].cartonPrice
		+ "</td><td>" + jsonData[i].unitCartonCost + "</td><td>" +jsonData[i].unitPanelCost
		+ "</td><td>" +jsonData[i].cost+"</td><td style=\"display:none;\">" +jsonData[i].formulaExpress+"</td><td style=\"display:none;\">" +jsonData[i].formulaVal+ "</td><td><div class=\"btn-group\"><a onClick=\"addCartonCost()\" href=\"javascript:void(0)\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div class=\"btn-group\"><a onClick=\"getCarton(this)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
	}
	//通过表体id把显示文本显示到网页中
	$("#cartonData").append(html);
}

function editPage(jsonData){
	
}
////////////////////////////////////////////////////////////////////////////

$(function() {
	//获取纸箱单价
	$.getJSON (path+"/dataBase-config/eval-common/eval-baseInfo.data",function (jsonObj){
		cartonUnitPrice = jsonObj.cartonUnitPrice;
	});
	if(opraType=="view"||opraType=="edit"){
		reviewPage();
	}

});