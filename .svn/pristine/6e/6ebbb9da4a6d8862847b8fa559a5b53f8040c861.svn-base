/**
全局变量如下
 */
var state = 0;//1为新增，2为编辑
var tr ="";


var productTypeSelFlag = true;//用来判断是否是点击选中的而不是手输的
function changeProductTypeSelFlag(flag){
	productTypeSelFlag = flag;
	if(!flag){
		$("#HSCode").val("");
		$("#drawBackRate").val("");
	}
}
var factorySelFlag = true;//用来判断是否是点击选中的而不是手输的
function changeFactorySelFlag(flag){
	if($("#factory").val()==''){
		factorySelFlag = true;
	}else{
		factorySelFlag = flag;
	}
}
var productNameSelFlag = true;
function changeProductNameSelFlag(flag){
	productNameSelFlag = flag;
}

function changeManual(){
	if($("#manual").is(':checked')){
		$("#productName").unbind("keyup").unbind("compositionend");
		productNameSelFlag = true;
	}else{
		bindSearchEl($("#productName"),path+"/dataBase-config/eval-productName.data",changeProductNameSelFlag,null,"name",["sku","name"],237);
		productNameSelFlag = false;
	}
}

function delBodyRow(obj){
	if($(obj).parents("tbody").children().length>1){
		var res = confirm('确认要删除吗？');  
		if(res == true){  
			$(obj).parents("tr").remove();  
		}
    }
}

function typeToHs(param){
	$("#HSCode").val(param.hSNumber);
	$("#drawBackRate").val(param.drawBackRate);
}

function addProduct(){
	state = 1;
	$("#chengpin").modal("show");
}

function updateProductdWin(obj){
	state = 2;
	//获取选中的行
	tr = $(obj).closest("tr");
	$("#productName").val(tr.find("td:eq(0)").html());
	$("#productSize").val(tr.find("td:eq(1)").html());
	$("#chengpinCost").val(tr.find("td:eq(2)").html());
	$("#factory").val(tr.find("td:eq(3)").html());
	$("#productType").val(tr.find("td:eq(4)").html());
	$("#deliverPattern").val(tr.find("td:eq(5)").html());
	$("#drawBackRate").val(tr.find("td:eq(6)").html());
	$("#productDescribe").val(tr.find("td:eq(7)").html());
	$("#HSCode").val(tr.find("td:eq(8)").html());
	$("#chengpin").modal("show");
}

//半成品测算时，点击确定的时候，根据state是1还是2判断是编辑还是新增
function updateProduct(){
	if(!productNameSelFlag||!productTypeSelFlag||!factorySelFlag){
		if(!productNameSelFlag){
			$("#productName").addClass('parsley-error');
		}else{
			$("#productName").removeClass('parsley-error');
		}
		if(!productTypeSelFlag){
			$("#productType").addClass('parsley-error');
		}else{
			$("#productType").removeClass('parsley-error');
		}
		if(!factorySelFlag){
			$("#factory").addClass('parsley-error');
		}else{
			$("#factory").removeClass('parsley-error');
		}
		alert("请选择下拉列表中的数据，不能手输");
		return;
	}else{
		$("#productType").removeClass('parsley-error');
		$("#factory").removeClass('parsley-error');
	}
	//弹出框输入值校验
	if(!myValidate("chengpinForm")){
		alert("请检查输入内容");
		return;
	}
	if($("#productSize").val()==""){
		$("#productSize").addClass('parsley-error');
		alert("请检查输入内容");
		return;
	}else{
		$("#productSize").removeClass('parsley-error');
	}
	if($("#deliverPattern").val()==""){
		$("#deliverPattern").addClass('parsley-error');
		alert("请检查输入内容");
		return;
	}else{
		$("#deliverPattern").removeClass('parsley-error');
	}
	
	$("#chengpin").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	if(state == 1){
		var html = "<tr><td>"+$("#productName").val()+"</td>"
			+"<td>"+$("#productSize").val()+"</td>"
		    +"<td>"+$("#chengpinCost").val()+"</td>"
		    +"<td>"+$("#factory").val()+"</td>"
		    +"<td hidden='hidden'>"+$('#productType').val()+"</td>"
		    +"<td>"+$("#deliverPattern").val()+"</td>"
		    +"<td>"+$("#drawBackRate").val()+"</td>"
		    +"<td>"+$("#productDescribe").val()+"</td>"
		    +"<td hidden='hidden'>"+$("#HSCode").val()+"</td>"
		    +"<td><div style＝'float:left;' class='btn-group'><a onClick='addProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div>&nbsp;"
			+"<a onClick='delRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a>&nbsp;"
			+"<div style＝'float:right;' class='btn-group'> <a onClick='updateProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td>"
			+"</tr>";
		$("#tbodyId").append(html);
	}else if(state == 2){
		tr.find("td:eq(0)").text($("#productName").val()); 
		tr.find("td:eq(1)").text($("#productSize").val());
		tr.find("td:eq(2)").text($("#chengpinCost").val()); 
		tr.find("td:eq(3)").text($("#factory").val()); 
		tr.find("td:eq(4)").text($('#productType').val());
		tr.find("td:eq(5)").text($("#deliverPattern").val());
		tr.find("td:eq(6)").text($("#drawBackRate").val());
		tr.find("td:eq(7)").text($("#productDescribe").val());
		tr.find("td:eq(8)").text($("#HSCode").val());
	}
}

function genMaterialCostJson(){
	var material_result = {};
	var valueTrs = $("#tbodyId").find("tr");
	for(var i=0;i<valueTrs.length;i++){
		var materResultTmp={"cost":valueTrs[i].children[2].innerHTML,"size":valueTrs[i].children[1].innerHTML,"drawBackRate":valueTrs[i].children[6].innerHTML};
		material_result[valueTrs[i].children[0].innerHTML]=materResultTmp;
	}
	return material_result;
}

/**
 * 获取拼接table里所有数据存到数据库
 */
function getMaterialCost(){
	var materialResult = [];
	var valueTrs = $("#tbodyId").find("tr");
	for(var i=0;i<valueTrs.length;i++){
		var cartonTds = valueTrs[i].children;
		materialResult.push({"productName":cartonTds[0].innerText,"productSize":cartonTds[1].innerText,"productCost":cartonTds[2].innerText,
			"productType":cartonTds[3].innerText,"factory":cartonTds[4].innerText,"factQuoteFactor":cartonTds[5].innerText,
			"drawBackRate":cartonTds[6].innerText,"productDesc":cartonTds[7].innerText,"hsCode":cartonTds[8].innerText});
	}
	return materialResult;
}

function getExcelHPJsonStr(){
	var materialResult = [];
	var valueTrs = $("#tbodyId").find("tr");
	for(var i=0;i<valueTrs.length;i++){
		var cartonTds = valueTrs[i].children;
		materialResult.push({"spec":cartonTds[1].innerText,"detail":[{"hpName":cartonTds[0].innerText,
			"materailDesc":cartonTds[7].innerText,"cutLength":"","cutWidth":"",
			"cutHeight":"","cutOther":"","materialLoss":"",
			"combingLoss":"","materialUnitLoss":"",
			"cost":cartonTds[2].innerText,"remark":"","classify":""}]});
	}
	return JSON.stringify(materialResult);
}


//===================================================保存并进入下一步部分Start==========================================================

//点击进入运杂费测算的方法
function MaterialToTransport(){
    var transId = "expenses";
    window.parent.tabIframe(transId);
}

//填组件成本比例到maching
function setCompRatio2mach(){
	var totalObj = {};
	var keyTmp = "";
	var valueTmp = 0;
	$("#specItem0").find("tbody:eq(0)").find("tr").each(function(){
		keyTmp = $(this).find("td:eq(0)").text();
		valueTmp = parseFloat($(this).find("td:eq(6)").text());
		if(totalObj.hasOwnProperty(keyTmp)){
			totalObj[keyTmp] = totalObj[keyTmp] + valueTmp;
		}else{
			totalObj[keyTmp] = valueTmp;
		}
	});
	window.parent.setCompPieData2Mach(totalObj);
}

function saveProduct2DB(){
	var flag = false;
	var resultMaterialJson = JSON.stringify(genMaterialCostJson());
	var materialData = getMaterialCost();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/productSave.do?evalDetailID="+evalDetailID+"&resultMaterialJson="+encodeURI(resultMaterialJson)+"&",
		data : JSON.stringify(materialData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				flag = true;
				alert("产品测算保存成功！");
			}else{
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

//存入数据库
function saveEvalDetail(){
	if(opraType=="view"){
		MaterialToTransport();
		return;
	}
	if($("#tbodyId").find("tr:eq(0)").find("td:eq(6)").text()==""){
		alert("数据未填充完整，请编辑！");
		return;
	}
	
	if(!saveProduct2DB()){
		return;
	}
	
	window.parent.$material_result = genMaterialCostJson();
	setCompRatio2mach();
	
	MaterialToTransport();
}
//===================================================保存并进入下一步部分End==========================================================

//删除一行
function delRow(obj){
	  var res = confirm('确认要删除吗？');  
      if(res == true){  
          $(obj).parents("tr").remove();  
      }   
}

////////////////////////////////page review///////////////////////////////////////
function reviewPage(){
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/getProductListByListid.do?listID="+window.parent.evalHeadData.evalDetail.compListID,
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
	$("#tbodyId").empty();
	var html = "";
	for(var i=0;i<jsonData.length;i++){
		html += "<tr><td>"+jsonData[i].productName+"</td>"
		+"<td>"+jsonData[i].productSize+"</td>"
	    +"<td>"+jsonData[i].productCost+"</td>"
	    +"<td>"+jsonData[i].factory+"</td>"
	    +"<td hidden='hidden'>"+jsonData[i].productType+"</td>"
	    +"<td>"+jsonData[i].factQuoteFactor+"</td>"
	    +"<td>"+jsonData[i].drawBackRate+"</td>"
	    +"<td>"+jsonData[i].productDesc+"</td>"
	    +"<td hidden='hidden'>"+jsonData[i].hsCode+"</td>"
	    +"<td><div style＝'float:left;' class='btn-group'><a onClick='addProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div>&nbsp;"
		+"<a onClick='delRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a>&nbsp;"
		+"<div style＝'float:right;' class='btn-group'> <a onClick='updateProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td>"
		+"</tr>";
	}
	//通过表体id把显示文本显示到网页中
	$("#tbodyId").append(html);
	setCompRatio2mach();
}

function editPage(jsonData){
	
}
////////////////////////////////////////////////////////////////////////////

$(function() {
	bindSearchEl($("#productType"),path+"/dataBase-config/eval_productType.data",changeProductTypeSelFlag,typeToHs,"productType",["typeNumber","productType"],237);
	bindSearchEl($("#factory"),path+"/dataBase-config/eval-factory.data",changeFactorySelFlag,null,"name",["code","name"],237);
	bindSearchEl($("#productName"),path+"/dataBase-config/eval-productName.data",changeProductNameSelFlag,null,"name",["sku","name"],237);
	
	if(opraType=="view"||opraType=="edit"){
		reviewPage();
	}
});