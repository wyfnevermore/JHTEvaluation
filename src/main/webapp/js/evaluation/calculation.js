var productNameJson;
var USDquotationRate;//美元对人民币汇率

var productSku="";
var customerId="";
var evalDetailID = "";
var customName = "";//用来传值

var customSelFlag = true;//用来判断是否是点击选中的而不是手输的
function changeCustomSelFlag(flag){
	customSelFlag = flag;
}
var productTypeSelFlag = true;
function changeProductTypeSelFlag(flag){
	productTypeSelFlag = flag;
	if(!flag){
		$("#hsCode").val("");
		$("#drawBackRate").val("");
	}
}
var productNameSelFlag = true;
function changeProductNameSelFlag(flag){
	productNameSelFlag = flag;
}

function changeManual(){
	if($("#manual").is(':checked')){
		$("#productName").attr("mCode","");
		$("#productName").unbind("keyup").unbind("compositionend");
		productNameSelFlag = true;
	}else{
		$("#productName").val("");
		bindSearchEl($("#productName"),path+"/dataBase-config/eval-productName.data",changeProductNameSelFlag,null,"name",["sku","name"],220);
		productNameSelFlag = true;
	}
}


//加工测算单
function addEvalDetail(){
	var otherJson = {};
	otherJson["grossProfitRate"] = grossProfitRate;
	otherJson["customName"] = customName;
	otherJson["USDquotationRate"] = USDquotationRate;
	otherJson = JSON.stringify(otherJson);
	$.ajax({
		type : "POST",
		async : false,
		url : "/JHTEvaluation/addEvalHistory.do?businessType="+busyType+"&productTypeCode="+$("#productType").attr("mCode")+"&customCode="+$("#custom").attr("mCode")+"&productSKU="+$("#productName").attr("mCode")+"&otherJson="+otherJson+"&",
		data :$("#calculForm").serialize(),
		dataType : "text",
		success : function(josnStr) {
			var jsonObj = eval('('+josnStr+')');
			if(jsonObj.flag){
				evalDetailID = jsonObj.msg;
			}
		}
	});
}
	
//绑定change事件，当下拉框内容发生变化时启动事件
function tradeToRate(){
  var tradeFormValue = $('#quoteCurrency option:selected').attr("quotationRate");
  $("#quotationRate").val(tradeFormValue);
}

function typeToHs(param){
	$("#hsCode").val(param.hSNumber);
	$("#drawBackRate").val(param.drawBackRate);
	$("#productType").attr("mCode",param.typeNumber);
}

function getProductCode(param){
	$("#productName").attr("mCode",param.sku);
}

//进入成品描述
function enterMaching(){
	if(opraType=="view"||opraType=="edit"){
//		var otherJson = eval('('+rowObj["otherJson"]+')');
		var otherJson = rowObj["otherJson"];
		customName = otherJson.customName;
		grossProfitRate = otherJson.grossProfitRate;
		USDquotationRate = otherJson.USDquotationRate;
		evalHeadData = "{'quoteCurrency':'"+rowObj["quoteCurrency"]
		+"','tradeForm':'"+rowObj["tradeForm"]
		+"','quotationRate':'"+rowObj["quoteRate"]
		+"','productType':'"+rowObj["productType"]
		+"','hSNumber':'"+rowObj["hsCode"]
		+"','customerID':'"+rowObj["custom"]
		+"','customerWholeName':'"+customName
		+"','country':'"+rowObj["country"]
		+"','drawBackRate':'"+rowObj["drawBackRate"]
		+"','productName':'"+rowObj["productName"]
		+"','grossProfitRate':'"+grossProfitRate
		+"','USDquotationRate':'"+USDquotationRate
		+"'}";
		var url = path+"/jsp/evaluation/"+rowObj["businessType"]+"/maching.jsp";
		location.href = url+ "?multiComp="+(rowObj["isContentComp"]=="true"?true:false)+ "&evalDetailID="+rowObj["evalDetailID"]+ "&evalHeadData="+encodeURI(evalHeadData)+"&opraType="+opraType;
		return;
	}
	if(!customSelFlag||!productTypeSelFlag||!productNameSelFlag){
		if(!customSelFlag){
			$("#custom").addClass('parsley-error');
		}else{
			$("#custom").removeClass('parsley-error');
		}
		if(!productTypeSelFlag){
			$("#productType").addClass('parsley-error');
		}else{
			$("#productType").removeClass('parsley-error');
		}
		if(!productNameSelFlag){
			$("#productName").addClass('parsley-error');
		}else{
			$("#productName").removeClass('parsley-error');
		}
		alert("请选择下拉列表中的数据，不能手输");
		return;
	}else{
		$("#custom").removeClass('parsley-error');
		$("#productType").removeClass('parsley-error');
		$("#productName").removeClass('parsley-error');
	}
	if(!myValidate("calculForm")){
		alert("请检查输入内容");
		return;
	}
	addEvalDetail();
	if(evalDetailID==""){
		alert("保存失败！");
		return;
	}
	if(!uploadPicture()){
		alert("图片保存失败！");
		return;
	}
  	var url = path+"/jsp/evaluation/"+busyType+"/maching.jsp";
  	//var evalHeadData = '"quoteCurrency":'+$("#quoteCurrency").find("option:selected").text()'+', "tradeForm":'+$("#tradeForm").find("option:selected").text()'+', "quotationRate":'+$("#quotationRate").val()'+', "productType":'+$("#productType").find("option:selected").text()'+',"hSNumber":'+$("#hsCode").val()'+', "country":'+$("#country").val()'+', "drawBackRate":'+$("#drawBackRate").val()'+', "productName":'+$("#productName").val();
  	
  	var evalHeadData = "{'quoteCurrency':'"+$("#quoteCurrency").find("option:selected").text()
  						+"','tradeForm':'"+$("#tradeForm").find("option:selected").text()
  						+"','quotationRate':'"+$("#quotationRate").val()
  						+"','productType':'"+$("#productType").val()
  						+"','hSNumber':'"+$("#hsCode").val()
  						+"','customerID':'"+$("#custom").val()
  						+"','customerWholeName':'"+customName
  						+"','country':'"+$("#country").val()
  						+"','drawBackRate':'"+$("#drawBackRate").val()
  						+"','productName':'"+$("#productName").val()
  						+"','grossProfitRate':'"+grossProfitRate
  						+"','USDquotationRate':'"+USDquotationRate
  						+"'}";
//暂时注释	location.href = url+ "?multiComp="+$("#isContentComp").is(':checked')+ "&evalDetailID="+evalDetailID+ "&evalHeadData="+evalHeadData;
  	location.href = url+ "?multiComp="+$("#isContentComp").is(':checked')+ "&evalDetailID="+evalDetailID+ "&evalHeadData="+encodeURI(evalHeadData)+"&opraType="+opraType;
}
/*
 *修改标题 
 * @returns
 */
function changeTitle(){
	if(busyType=="processing"){
		$("#typeShowName").text("加工测算");
	}else if(busyType=="distribution"){
		$("#typeShowName").text("分销测算");
	}else if(busyType=="agent"){
		$("#typeShowName").text("代理测算");
	}else if(busyType=="dealing"){
		$("#typeShowName").text("经销测算");
	}else if(busyType=="onlineBusiness"){
		$("#typeShowName").text("电商测算");
	}else if(busyType=="importTrade"){
		$("#typeShowName").text("进口贸易测算");
	}
}

/*
 * 选择客户后的回调函数 
 * @param param
 * @returns
 */
function getGrossProfitRate(param){
	grossProfitRate = param.grossProfitRate;
	customName = param.customName;//获取客户全称
	var selectedCountryName = param.country;//获取国家
	$("#country").val(selectedCountryName);
	$("#custom").attr("mCode",param.customID);
}
/*
 *组件绑定数据源 
 * @returns
 */
function elBindDataSource(){
	bindSearchEl($("#custom"),path+"/dataBase-config/eval-customerData.data",changeCustomSelFlag,getGrossProfitRate,"brifeName",["code","brifeName"],220);
	bindSearchEl($("#productName"),path+"/dataBase-config/eval-productName.data",changeProductNameSelFlag,getProductCode,"name",["sku","name"],220);
	bindSearchEl($("#productType"),path+"/dataBase-config/eval_productType.data",changeProductTypeSelFlag,typeToHs,"productType",["typeNumber","productType"],220);
	//报价货币
	if(busyType=="distribution"){
		$.getJSON(path+"/dataBase-config/eval_quoteCurrency.data",function(data){
			var areaJson = data;
			$.each(areaJson,function(i,quoteCurrency){
				if(quoteCurrency.quoteCurrency=="USD"){
					USDquotationRate = quoteCurrency.quotationRate;
					var temp_html = "<option value='"+quoteCurrency.quoteCurrency+"' quotationRate='"+quoteCurrency.quotationRate+"'>"+quoteCurrency.quoteCurrency+"</option>";
					$("#quoteCurrency").html(temp_html);
					return false;
				}
			});
		});
		tradeToRate();
	}else{
		$.getJSON(path+"/dataBase-config/eval_quoteCurrency.data",function(data){
			var areaJson = data;
			var temp_html;
			$.each(areaJson,function(i,quoteCurrency){
				if(quoteCurrency.quoteCurrency=="USD"){
					USDquotationRate = quoteCurrency.quotationRate;
				}
				temp_html+="<option value='"+quoteCurrency.quoteCurrency+"' quotationRate='"+quoteCurrency.quotationRate+"'>"+quoteCurrency.quoteCurrencyName+"</option>";
			});
			$("#quoteCurrency").html(temp_html);
			$("#quotationRate").val($("#quoteCurrency").find("option:eq(0)").attr("quotationRate"));
		});
	}
	
	
	//贸易形式
	$.getJSON(path + "/dataBase-config/eval-tradeForm.data",function(data){
		var tradeForm = data;
		var temp_html3;
		$.each(tradeForm,function(i, obj){
			temp_html3+="<option value='"+obj.tradeFormt+"'>"+obj.tradeFormt+"</option>";
		});
		$("#tradeForm").html(temp_html3);
	});
}

/*
 * 复制或查看时，恢复页面数据
 * @returns
 */
function reviewPage(){
	$.each(rowObj,function(name,value){
		if((name == "isContentComp") || (name == "manual")){
			$("#"+name).prop("checked",eval(value));
		}
		else{
			$("#"+name).val(value);
		}
	});
}
  
$(function() {
	changeTitle();
	elBindDataSource();
	if(opraType=="edit"||opraType=="view"){
		reviewPage();
	}
});