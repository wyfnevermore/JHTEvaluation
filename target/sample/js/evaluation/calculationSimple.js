var productSku="";
var customerId="";
var evalDetailID = "";
var USDquotationRate;//美元对人民币汇率
var customName = "";//用来传值

var customSelFlag = true;//用来判断是否是点击选中的而不是手输的
function changeCustomSelFlag(flag){
	customSelFlag = flag;
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
		url : "/JHTEvaluation/addEvalHistory.do?businessType="+busyType+"&customCode="+$("#custom").attr("mCode")+"&otherJson="+otherJson+"&",
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
	 $("#quoteRate").val(tradeFormValue);
}


//进入成品描述
function enterMaching(){
	if(opraType=="view"||opraType=="edit"){
//		var otherJson = eval('('+rowObj["otherJson"]+')');
		var otherJson = rowObj["otherJson"];
		customName = otherJson.customName;
		grossProfitRate = otherJson.grossProfitRate;
		USDquotationRate = otherJson.USDquotationRate;
		var url;
		if(busyType=="dealingSimple"){
			url = path+"/jsp/evaluation/dealing/simple/machingSimple.jsp";
		}else{
			url = path+"/jsp/evaluation/"+busyType+"/maching.jsp";
		}
	  	var evalHeadData = "{'quoteCurrency':'"+$("#quoteCurrency").find("option:selected").text()
	  						+"','tradeForm':'"+rowObj["tradeForm"]
	  						+"','quotationRate':'"+rowObj["quoteRate"]
	  						+"','customerID':'"+rowObj["custom"]
	  						+"','customerWholeName':'"+customName
	  						+"','country':'"+rowObj["country"]
	  						+"','grossProfitRate':'"+grossProfitRate
	  						+"','USDquotationRate':'"+USDquotationRate
	  						+"'}";
	//暂时注释	location.href = url+ "?multiComp="+$("#isConComponent").is(':checked')+ "&evalDetailID="+evalDetailID+ "&evalHeadData="+evalHeadData;
	  	location.href = url+ "?evalDetailID="+rowObj["evalDetailID"]+ "&evalHeadData="+encodeURI(evalHeadData)+"&opraType="+opraType;
	  	return;
	}
	//点击加工button后保存form数据
//    uploadPicture();//暂时
	if(!customSelFlag){
		if(!customSelFlag){
			$("#custom").addClass('parsley-error');
		}else{
			$("#custom").removeClass('parsley-error');
		}
		alert("请选择下拉列表中的数据，不能手输");
		return;
	}else{
		$("#custom").removeClass('parsley-error');
	}
	
	if(!myValidate("calculForm")){
		alert("请检查输入内容");
		return;
	}
	addEvalDetail(); 
	
	var url;
	if(busyType=="dealingSimple"){
		url = path+"/jsp/evaluation/dealing/simple/machingSimple.jsp";
	}else{
		url = path+"/jsp/evaluation/"+busyType+"/maching.jsp";
	}
  	var evalHeadData = "{'quoteCurrency':'"+$("#quoteCurrency").find("option:selected").text()
  						+"','tradeForm':'"+$("#tradeForm").find("option:selected").text()
  						+"','quotationRate':'"+$("#quoteRate").val()
  						+"','customerID':'"+$("#custom").val()
  						+"','customerWholeName':'"+customName
  						+"','country':'"+$("#country").val()
  						+"','grossProfitRate':'"+grossProfitRate
  						+"','USDquotationRate':'"+USDquotationRate
  						+"'}";
//暂时注释	location.href = url+ "?multiComp="+$("#isConComponent").is(':checked')+ "&evalDetailID="+evalDetailID+ "&evalHeadData="+evalHeadData;
  	location.href = url+ "?evalDetailID="+evalDetailID+ "&evalHeadData="+encodeURI(evalHeadData);
} 
  
/*
 * 复制或查看时，恢复页面数据
 * @returns
 */
function reviewPage(){
	$.each(rowObj,function(name,value){
		$("#"+name).val(value);
	});
}

$(function() {
	function getGrossProfitRate(param){
		grossProfitRate = param.grossProfitRate;
		customName = param.customName;//获取客户全称
		var selectedCountryName = param.country;//获取国家
		$("#country").val(selectedCountryName);
	}
	bindSearchEl($("#custom"),path+"/dataBase-config/eval-customerData.data",changeCustomSelFlag,getGrossProfitRate,"brifeName",["code","brifeName"],220);
	
	
	//国家
//	$.getJSON(path + "/dataBase-config/eval_country.data", function(data) {
//		var countryName = data;
//		var temp_html2;
//		$.each(countryName, function(i, country) {
//			temp_html2 += "<option value='" + country.countryValue + "'>" + country.countryName + "</option>";
//		});
//		$("#country").html(temp_html2);
//	});
	
	//报价货币
	$.getJSON(path+"/dataBase-config/eval_quoteCurrency.data",function(data){
		var areaJson = data;
		var temp_html;
		if(busyType=="distribution"){
			$.each(areaJson,function(i,quoteCurrency){
				if(quoteCurrency.quoteCurrency=="USD"){
					USDquotationRate = quoteCurrency.quotationRate;
					temp_html+="<option value='"+quoteCurrency.quoteCurrency+"' quotationRate='1'>"+quoteCurrency.quoteCurrency+"</option>";
				}else{
					temp_html+="<option value='"+quoteCurrency.quoteCurrency+"' quotationRate='"+(1/(parseFloat(USDquotationRate))).toFixed(2)+"'>"+quoteCurrency.quoteCurrency+"</option>";
				}
			});
		}else{
			$.each(areaJson,function(i,quoteCurrency){
				if(quoteCurrency.quoteCurrency=="USD"){
					USDquotationRate = quoteCurrency.quotationRate;
				}
				temp_html+="<option value='"+quoteCurrency.quoteCurrency+"' quotationRate='"+quoteCurrency.quotationRate+"'>"+quoteCurrency.quoteCurrency+"</option>";
			});
		}
		$("#quoteCurrency").html(temp_html);
		$("#quoteRate").val($("#quoteCurrency").find("option:eq(0)").attr("quotationRate"));
	});
	
	//贸易形式
	$.getJSON(path + "/dataBase-config/eval-tradeForm.data",function(data){
		var tradeForm = data;
		var temp_html3;
		$.each(tradeForm,function(i, obj){
			temp_html3+="<option value='"+obj.tradeFormt+"'>"+obj.tradeFormt+"</option>";
		});
		$("#tradeForm").html(temp_html3);
	});
	
	if(opraType=="edit"||opraType=="view"){
		reviewPage();
	}
});