
var addOrUpdate = "add";
var nextLineNo = 2;

function changeMaterialPrice(paramJson){
	$("#materielPrice").val(paramJson.price);
}

$(function() {
	//空销售订单
var path = "/JHTEvaluation";
bindSearchEl($("#compName1"),path+"/dataBase-config/eval-materialName.data",null,null,"sku",["sku","name"],295);
bindSearchEl($("#compName2"),path+"/dataBase-config/eval-materialName.data",null,null,"sku",["sku","name"],295);
bindSearchEl($("#compName3"),path+"/dataBase-config/eval-materialName.data",null,null,"sku",["sku","name"],295);
if(salesOrder == null){
	var tabName="订单0";
	$("#addTabs").append('<li class="active"><a href="#specItem0" data-toggle="tab">'+tabName+'</a></li>');
	$("#specItem0").addClass("active");
	$("#specItem0").find("input[name='orderDate']").datetimepicker({
		format: 'yyyy-mm-dd hh:ii:ss',//日期的格式
		startDate:'1900-01-01',//选择器的开始日期
		autoclose:true,//日期选择完成后是否关闭选择框
		bootcssVer:3,//显示向左向右的箭头
		language:'cn',//语言
		minView:0,//表示日期选择的最小范围，默认是hour
		initialDate:new Date(),
	});

	bindSearchEl($("#materielNum"),path+"/dataBase-config/eval-materialName.data",null,changeMaterialPrice,"sku",["sku","name"],295);
	bindSearchEl($("#materielUnit"),path+"/dataBase-config/salesList/eval_materielUnit.data",null,null,"sku",["sku","name"],295);
	bindSearchEl($("#specItem0").find("input[name='departmentName']"),path+"/dataBase-config/eval_department.data",null,null,"name",["name"],295);

	//销售员工连接员工库
	var transportJson;
	var finalJson = [];
	$.getJSON(path+"/dataBase-config/eval_employee.data",function(data){
		transportJson = data;
		$.each(transportJson, function (i, obj) {
			if(obj.job == "销售" ){
				finalJson.push(obj);
			}
		}); 
	});
	bindSearchEl($("#specItem0").find("input[name='salePersonNumber']"),finalJson,null,null,"number",["number","name","job"],295);
	//可会进行连接客户库
	bindSearchEl($("#specItem0").find("input[name='customerNumber']"),path+"/dataBase-config/eval-customerData.data",null,changeCustomer,"brifeName",["code","brifeName"],220);
	//中间商,和客户类似
	var middleJson;
	var json = [];
	$.getJSON(path+"/dataBase-config/eval-customerData.data",function(data){
		middleJson = data;
		$.each(middleJson, function (i, obj) {
			if(obj.middleNumber != "" ){
				json.push(obj);
			}
		}); 
	});
	bindSearchEl($("#specItem0").find("input[name='middleman']"),json,null,null,"brifeName",["code","brifeName"],220);
	$.getJSON(path + "/dataBase-config/eval-tradeForm.data",function(data){
		var tradeForm = data;
		var temp_html3;
		$.each(tradeForm,function(i, obj){
			temp_html3+="<option value='"+obj.tradeFormt+"'>"+obj.tradeFormt+"</option>";
		});
		$("#specItem0").find("select[name='tradeTerm']").html(temp_html3);
	});

	//交易币种
	$.getJSON(path + "/dataBase-config/eval_quoteCurrency.data",function(data){
		var tradeForm = data;
		var temp_html3;
		$.each(tradeForm,function(i, obj){
			temp_html3+="<option value='"+obj.quoteCurrencyName+"'>"+obj.quoteCurrencyName+"</option>";
		});
		$("#specItem0").find("select[name='currencyCode']").html(temp_html3);
	});
	return;
}

	//非空的销售订单
	//var jsonData = JSON.parse(salesOrder);
	//可能多个对象
	var initHtml = $("#specItem0").clone();
	for(var i=0,l=salesOrder.length;i<l;i++){
		var tabName="订单"+i;
		var html = initHtml;
		var id = "specItem"+i;
		if(i==0){
			$("#addTabs").append('<li class="active"><a href="#specItem'+i+'" data-toggle="tab">'+tabName+'</a></li>');
			$("#specItem0").addClass("active");
		}else{
			$("#addTabs").append('<li><a href="#specItem'+i+'" data-toggle="tab">'+"订单"+i+'</a></li>');
			html.attr('id',id);
			$("#tabDivs").append(initHtml);
		}
		$("#"+id).find("input[name='orderDate']").datetimepicker({
			format: 'yyyy-mm-dd hh:ii:ss',//日期的格式
			startDate:'1900-01-01',//选择器的开始日期
			autoclose:true,//日期选择完成后是否关闭选择框
			bootcssVer:3,//显示向左向右的箭头
			language:'cn',//语言
			minView:0,//表示日期选择的最小范围，默认是hour
			initialDate:new Date(),
		});
		
		$.getJSON(path + "/dataBase-config/eval-tradeForm.data",function(data){
			var tradeForm = data;
			var temp_html3;
			$.each(tradeForm,function(i, obj){
				temp_html3+="<option value='"+obj.tradeFormt+"'>"+obj.tradeFormt+"</option>";
			});
			$("#"+id).find("select[name='tradeTerm']").html(temp_html3);
		});

			//交易币种
			$.getJSON(path + "/dataBase-config/eval_quoteCurrency.data",function(data){
				var tradeForm = data;
				var temp_html3;
				$.each(tradeForm,function(i, obj){
					temp_html3+="<option value='"+obj.quoteCurrencyName+"'>"+obj.quoteCurrencyName+"</option>";
				});
				$("#"+id).find("select[name='currencyCode']").html(temp_html3);
			});
			
		//先存一下headerId，隐藏的input里，后面修改用到
			if(salesOrder[i]["soHeader"]["orderNumber"]!=""){
				$("#"+id).find("label[name='orderNumber']").text(salesOrder[i]["soHeader"]["orderNumber"]);
			}

		$("#"+id).find("input[name='headerId']").val(salesOrder[i]["soHeader"]["headerId"]);
		//头信息
		$("#"+id).find("input[name='orgName']").val(salesOrder[i]["soHeader"]["orgName"]);
		$("#"+id).find("select[name='paymentTerm']").val(salesOrder[i]["soHeader"]["paymentTerm"]);
		$("#"+id).find("select[name='orderType']").find("option:selected").text(salesOrder[i]["soHeader"]["orderType"]);
		$("#"+id).find("input[name='customerNumber']").val(salesOrder[i]["soHeader"]["customerNumber"]);
		$("#"+id).find("input[name='customerAddress']").val(salesOrder[i]["soHeader"]["customerAddress"]);
		$("#"+id).find("input[name='salePersonNumber']").val(salesOrder[i]["soHeader"]["salePersonNumber"]);
		$("#"+id).find("input[name='orderDate']").val(salesOrder[i]["soHeader"]["orderDate"]);
		$("#"+id).find("select[name='currencyCode']").find("option:selected").text(salesOrder[i]["soHeader"]["currencyCode"]);
		$("#"+id).find("select[name='shipMethod']").find("option:selected").text(salesOrder[i]["soHeader"]["shipMethod"]);
		$("#"+id).find("input[name='shipFrom']").val(salesOrder[i]["soHeader"]["shipFrom"]);
		var arrayList = ["KJDS1700001","HWZY1700001","P10900001","0"];
		if($.inArray(salesOrder[i]["soHeader"]["projectNumber"], arrayList) > -1){
			$("#"+id).find("select[name='projectNumber']").val(salesOrder[i]["soHeader"]["projectNumber"]);
		}else{
			$("#"+id).find("select[name='projectNumber']").val("0");
		}
		$("#"+id).find("input[name='departmentName']").val(salesOrder[i]["soHeader"]["shipFrom"]);
		$("#"+id).find("select[name='tradeTerm']").find("option:selected").text(salesOrder[i]["soHeader"]["tradeTerm"]);  
		$("#"+id).find("input[name='discountRate']").val(salesOrder[i]["soHeader"]["discountRate"]);
	   //行信息
		//salesOrder[i]["soLineList"][j]["itemNumber"]
		for(var j=0;j<salesOrder[i]["soLineList"].length;j++){
			var html = "<tr><td style=\"display:none;\">"+salesOrder[i]["soLineList"][j]["lineId"]+"</td><td>1011</td><td>" +salesOrder[i]["soLineList"][j]["orderQuantity"]
			+ "</td><td>" +salesOrder[i]["soLineList"][j]["requestDate"]
			+ "</td><td>" + salesOrder[i]["soLineList"][j]["custPoNumber"] + "</td><td>" + salesOrder[i]["soLineList"][j]["enProductName"]
			+ "</td><td>" + salesOrder[i]["soLineList"][j]["calculatePrice"]+ "</td><td><div class=\"btn-group\"><a onclick=\"addSalesOrder()\" href=\"javascript:void(0);\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;&nbsp;<div class=\"btn-group\"><a onClick=\"getSalesOrder(this)\" href=\"javascript:void(0)\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
			//通过表体id把显示文本显示到网页中
			$("#"+id).find("tbody[name='salesTbody']").append(html);
			//先存一遍行信息
			$.ajax({
				type : "POST",
				async : false,
				contentType : 'application/json;charset=utf-8',
				url : "/JHTEvaluation/saveInitSoLine.do?headerId="+$("#"+id).find("input[name='headerId']").val(),
				data :  JSON.stringify(salesOrder[i]["soLineList"][j]),
				dataType : "text",
				success : function(json) {
				}
			});
		}
		//salesOrder[i]["soCommissionsList"][m]["orgName"]
		//佣金行信息

		for(var m=0;m<salesOrder[i]["soCommissionsList"].length;m++){
			var html = "<tr><td style=\"display:none;\">"+salesOrder[i]["soCommissionsList"][m]["commissionsId"]+"</td><td>OU_WG</td><td>" + salesOrder[i]["soCommissionsList"][m]["sourceDocType"]
					+ "</td><td>" + salesOrder[i]["soCommissionsList"][m]["commissionLineNum"]+ "</td><td>" +salesOrder[i]["soCommissionsList"][m]["commissionTypeName"]
					+ "</td><td>" + salesOrder[i]["soCommissionsList"][m]["commissionRate"] + "</td><td>" + salesOrder[i]["soCommissionsList"][m]["commissionPrice"]
					+ "</td><td>" + salesOrder[i]["soCommissionsList"][m]["vendorName"] +"</td><td><div class=\"btn-group\"><a onclick=\"addHireCost()\" href=\"javascript:void(0);\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;&nbsp;<div class=\"btn-group\"><a onClick=\"getHireCost(this)\" href=\"javascript:void(0)\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
			//佣金行先保存进数据库
			$("#"+id).find("tbody[name='hireTbody']").append(html);
			$.ajax({
				type : "POST",
				async : false,
				contentType : 'application/json;charset=utf-8',
				url : "/JHTEvaluation/saveInitSoCom.do?headerId="+$("#"+id).find("input[name='headerId']").val(),
				data :  JSON.stringify(salesOrder[i]["soCommissionsList"][m]),
				dataType : "text",
				success : function(json) {
			}
			});
		}
		
		//初始化项目信息
		$.ajax({
			type : "POST",
			async : false,
			contentType : 'application/json;charset=utf-8',
			url : "/JHTEvaluation/queryProjectById.do?projectId="+salesOrder[i]["soHeader"]["projectId"],
			dataType : "text",
			success : function(json) {
			var jsonObj = eval('(' + json + ')');
			var html = "<tr><td style=\"display:none;\">"+jsonObj["projectId"]+"</td><td>"+jsonObj["projectOrgName"]+"</td><td>" + jsonObj["projectName"]
			+ "</td><td>" + jsonObj["projectType"]+ "</td><td>" +jsonObj["projectNumber"]
			+ "</td><td>" + jsonObj["invWgFlag"] + "</td><td>" + jsonObj["invT2sFlag"]
			+ "</td><td>" + jsonObj["invWmFlag"] +"</td><td>" + jsonObj["invDjFlag"]
			+"</td><td>" + jsonObj["backupCustomer"] +"</td><td>" + jsonObj["departmentName"]
			+"</td><td><div  class=\"btn-group\"> <a href=\"javascript:void(0)\" onclick=\"getProject(this);\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
			$("#"+id).find("tbody[name='projectTbody']").append(html);
		}
		});
		
		bindSearchEl($("#materielNum"),path+"/dataBase-config/eval-materialName.data",null,changeMaterialPrice,"sku",["sku","name"],295);
		bindSearchEl($("#materielUnit"),path+"/dataBase-config/salesList/eval_materielUnit.data",null,null,"sku",["sku","name"],295);
		bindSearchEl($("#"+id).find("input[name='departmentName']"),path+"/dataBase-config/eval_department.data",null,null,"name",["name"],295);
		
		//销售员工连接员工库
		var transportJson;
		var finalJson = [];
		$.getJSON(path+"/dataBase-config/eval_employee.data",function(data){
			transportJson = data;
			 $.each(transportJson, function (i, obj) {
				 if(obj.job == "销售" ){
						 finalJson.push(obj);
				 }
		     }); 
	    });
		bindSearchEl($("#"+id).find("input[name='salePersonNumber']"),finalJson,null,null,"number",["number","name","job"],295);
		//可会进行连接客户库
		bindSearchEl($("#"+id).find("input[name='customerNumber']"),path+"/dataBase-config/eval-customerData.data",null,changeCustomer,"brifeName",["code","brifeName"],220);
		//中间商,和客户类似
		var middleJson;
		var json = [];
		$.getJSON(path+"/dataBase-config/eval-customerData.data",function(data){
			middleJson = data;
			 $.each(middleJson, function (i, obj) {
				 if(obj.middleNumber != "" ){
					 json.push(obj);
				 }
		     }); 
	    });
		bindSearchEl($("#"+id).find("input[name='middleman']"),json,null,null,"brifeName",["code","brifeName"],220);
	}	
});

//客户联动地址
function changeCustomer(paramJson){
	var tps = $("#tabDivs").find("div[class='tab-pane active']");
	tps.find("input[name='customerAddress']").val(paramJson.address);
}


//添加项目
function addProject(){
	
	if($("#tabDivs").find("div[class='tab-pane active']").find("tbody[name='projectTbody']").children().length>1){
		alert("只能添加一条项目信息！");
		return false;
	}else{
		addOrUpdate = "add";
		$("#addProject").modal("show");
	}
}



function delRow(obj){
	if($(obj).parents("tbody").children().length>1){
		var res = confirm('确认要删除吗？');  
		if(res == true){  
			$(obj).parents("tr").remove(); 
			$("#specItem0").find("tbody[name='salesTbody']").find("tr").each(function(){
				var curLineNo = parseInt($(this).find("td:eq(0)").text());
				if(curLineNo>(nextLineNo-2)){
					$(this).find("td:eq(0)").text(curLineNo-1);
				}
			});
			nextLineNo--;
		}
	}	
}

/*
 * 计算佣金 
 * @param 
 * 公式：佣金收取单价 = 测算单价 * 比率
 * @returns
 */
function calCommissionVal(obj){
	if($(obj).val()==""||$("#evalUnitPrice").val()==""){
		$(obj).parent().parent().find("td:eq(5) input").val("");
		return;
	}
	var result =parseFloat($(obj).val())*parseFloat($("#evalUnitPrice").val())/100;
	$(obj).parent().parent().find("td:eq(5) input").val(result.toFixed(2))
}

/*
 * 填完测算单价时自动计算
 * @param 
 * 
 * @returns
 */
function calCommission(obj){
	var valueTrs = $("#atbody").find("tr");
	var tds;
	for(var i=4;i<valueTrs.length;i++){
		tds = valueTrs[i].children;
		if($(obj).val()==""){
			if(tds[3].children[0].value !="" && tds[5].children[0].value !=""){
				$(obj).val((parseFloat(tds[5].children[0].value)/parseFloat(tds[3].children[0].value)*100).toFixed(2));
			}
		}else{
			if(tds[3].children[0].value !="" && tds[5].children[0].value == ""){
				tds[5].children[0].value = (parseFloat(tds[3].children[0].value)*parseFloat($(obj).val())/100).toFixed(2);
			}else if(tds[5].children[0].value !="" && tds[3].children[0].value ==""){
				tds[3].children[0].value = (parseFloat(tds[5].children[0].value)/parseFloat($(obj).val())*100).toFixed(2);
			}else if(tds[5].children[0].value =="" && tds[3].children[0].value ==""){
				return;
			}else{
				tds[5].children[0].value = (parseFloat(tds[3].children[0].value)*parseFloat($(obj).val())/100).toFixed(2);
			}
		}
	}
}

function calCommissionRate(obj){
	if($(obj).val()==""||$("#evalUnitPrice").val()==""){
		$(obj).parent().parent().find("td:eq(3) input").val("");
		return;
	}
	var result =parseFloat($(obj).val())/parseFloat($("#evalUnitPrice").val())*100;
	$(obj).parent().parent().find("td:eq(3) input").val(result.toFixed(2))
}

//添加订单信息
function addSalesOrder(){
	$("#atbody").find("tr").find("input").each(function(){
		$(this).val("");
	});
	addOrUpdate = "add";
	$("#commissionType").val($("select[name=commissionTypeUp]").val());
	if($("select[name=commissionTypeUp]").val() == "比率"){
		$("#commissionRate1").val($("input[name=commissionRate1]").val());
		$("#commissionRate2").val($("input[name=commissionRate2]").val());
		$("#commissionRate3").val($("input[name=commissionRate3]").val());
		$("#commissionRate4").val($("input[name=commissionRate4]").val());
		$("#commissionRate5").val($("input[name=commissionRate5]").val());
	}else if($("select[name=commissionTypeUp]").val() == "固定值"){
		$("#commissionValue1").val($("input[name=commissionRate1]").val());
		$("#commissionValue2").val($("input[name=commissionRate2]").val());
		$("#commissionValue3").val($("input[name=commissionRate3]").val());
		$("#commissionValue4").val($("input[name=commissionRate4]").val());
		$("#commissionValue5").val($("input[name=commissionRate5]").val());
	}
	$("#commissionName1").val($("input[name=commissionName1]").val());
	$("#commissionName2").val($("input[name=commissionName2]").val());
	$("#commissionName3").val($("input[name=commissionName3]").val());
	$("#commissionName4").val($("input[name=commissionName4]").val());
	$("#commissionName5").val($("input[name=commissionName5]").val());
	$("#addSalesOrder").modal("show");
}

function changeCommissionType(){
	if($("select[name=commissionTypeUp]").val() == "比率"){
		$("label[name=commissionChanged1]").text("第一佣金比率:");
		$("label[name=commissionChanged2]").text("第二佣金比率:");
		$("label[name=commissionChanged3]").text("第三佣金比率:");
		$("label[name=commissionChanged4]").text("第四佣金比率:");
		$("label[name=commissionChanged5]").text("第五佣金比率:");
	}else if($("select[name=commissionTypeUp]").val() == "固定值"){
		$("label[name=commissionChanged1]").text("第一佣金单价:");
		$("label[name=commissionChanged2]").text("第二佣金单价:");
		$("label[name=commissionChanged3]").text("第三佣金单价:");
		$("label[name=commissionChanged4]").text("第四佣金单价:");
		$("label[name=commissionChanged5]").text("第五佣金单价:");
	}
}

//添加佣金行信息
function addHireCost(){
	addOrUpdate = "add";
	$("#addHireCost").modal("show");
}

//点击佣金信息编辑的小按钮
function getHireCost(obj) {
	addOrUpdate = "update";
	//获取选中的行
	tr = $(obj).closest("tr");
	//点击编辑其实是从数据库里调出来，再给页面赋值
	var soComissionsId = tr.find("td:eq(0)").html();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/querySoComById.do?soComissionsId="+soComissionsId,
		dataType : "text",
		success : function(json) {
			if(json==null){
				alert("无该条数据！");
				return;
			}
		var jsonObj = JSON.parse(json);
		$("#orgName").find("option:selected").val(jsonObj["orgName"]);
		$("#sourceDocType").val(jsonObj["sourceDocType"]);
		$("#commissionLineNum").find("option:selected").text(jsonObj["commissionLineNum"]);
		$("#commissionTypeName").val(jsonObj["commissionTypeName"]);
		$("#commissionRate").val(jsonObj["commissionRate"]);
		$("#commissionPrice").val(jsonObj["commissionPrice"]);
		$("#vendorName").val(jsonObj["vendorName"]);
		$("#lineNum").find("option:selected").text(jsonObj["lineNum"]);
		}
	});	
	$("#addHireCost").modal("show");
}


//点击编辑的小按钮
function getSalesOrder(obj) {
	tr = $(obj).closest("tr");
	if($(obj).parent().parent().find("td:eq(1)").val()==""){
		addOrUpdate = "update";
		$("#commissionType").val($("select[name=commissionTypeUp]").val());
		if($("select[name=commissionTypeUp]").val() == "比率"){
			$("#commissionRate1").val($("input[name=commissionRate1]").val());
			$("#commissionRate2").val($("input[name=commissionRate2]").val());
			$("#commissionRate3").val($("input[name=commissionRate3]").val());
			$("#commissionRate4").val($("input[name=commissionRate4]").val());
			$("#commissionRate5").val($("input[name=commissionRate5]").val());
		}else if($("select[name=commissionTypeUp]").val() == "固定值"){
			$("#commissionValue1").val($("input[name=commissionRate1]").val());
			$("#commissionValue2").val($("input[name=commissionRate2]").val());
			$("#commissionValue3").val($("input[name=commissionRate3]").val());
			$("#commissionValue4").val($("input[name=commissionRate4]").val());
			$("#commissionValue5").val($("input[name=commissionRate5]").val());
		}
		$("#commissionName1").val($("input[name=commissionName1]").val());
		$("#commissionName2").val($("input[name=commissionName2]").val());
		$("#commissionName3").val($("input[name=commissionName3]").val());
		$("#commissionName4").val($("input[name=commissionName4]").val());
		$("#commissionName5").val($("input[name=commissionName5]").val());
		$("#addSalesOrder").modal("show");
		return;
	}
	addOrUpdate = "update";
	//获取选中的行
	$("#addSalesOrder").modal("show");
  
	$("#requestDate").datetimepicker({
		format: 'yyyy-mm-dd',//日期的格式
		startDate:'1900-01-01',//选择器的开始日期
		autoclose:true,//日期选择完成后是否关闭选择框
		bootcssVer:3,//显示向左向右的箭头
		language:'cn',//语言
		minView:2,//表示日期选择的最小范围，默认是hour
		initialDate:new Date(),
	});
	//获取列值，赋值给弹出框
	$("#materielNum").val(tr.find("td:eq(1)").html());
	$("#orderNum").val(tr.find("td:eq(2)").html());
	$("#requestDate").val(tr.find("td:eq(3)").html());
	$("#custmerPONum").val(tr.find("td:eq(4)").html());
	$("#englishName").val(tr.find("td:eq(5)").html());
	$("#evalUnitPrice").val(tr.find("td:eq(6)").html());
	$("#materielUnit").val(tr.find("td:eq(7)").html());
	$("#brandTerminal").val(tr.find("td:eq(8)").html());
	$("#clientTerminal").val(tr.find("td:eq(9)").html());
	$("#orderType").val(tr.find("td:eq(10)").html());
	$("#commissionType").val(tr.find("td:eq(11)").html());
	
	$("#commissionName1").val(tr.find("td:eq(12)").html());
	$("#commissionRate1").val(tr.find("td:eq(13)").html());
	$("#commissionValue1").val(tr.find("td:eq(14)").html());
	$("#commissionName2").val(tr.find("td:eq(15)").html());
	$("#commissionRate2").val(tr.find("td:eq(16)").html());
	$("#commissionValue2").val(tr.find("td:eq(17)").html());
	$("#commissionName3").val(tr.find("td:eq(18)").html());
	$("#commissionRate3").val(tr.find("td:eq(19)").html());
	$("#commissionValue3").val(tr.find("td:eq(20)").html());
	$("#commissionName4").val(tr.find("td:eq(21)").html());
	$("#commissionRate4").val(tr.find("td:eq(22)").html());
	$("#commissionValue4").val(tr.find("td:eq(23)").html());
	$("#commissionName5").val(tr.find("td:eq(24)").html());
	$("#commissionRate5").val(tr.find("td:eq(25)").html());
	$("#commissionValue5").val(tr.find("td:eq(26)").html());
	
	$("#compName1").val(tr.find("td:eq(27)").html());
	$("#compCount1").val(tr.find("td:eq(28)").html());
	$("#compRatio1").val(tr.find("td:eq(29)").html());
	$("#compName2").val(tr.find("td:eq(30)").html());
	$("#compCount2").val(tr.find("td:eq(31)").html());
	$("#compRatio2").val(tr.find("td:eq(32)").html());
	$("#compName3").val(tr.find("td:eq(33)").html());
	$("#compCount3").val(tr.find("td:eq(34)").html());
	$("#compRatio3").val(tr.find("td:eq(35)").html());
}



//行信息里点击添加或编辑里的确定按钮
function updateSalesOrder(){
	$("#asoForm").submit();
	var mixf = $("#asoForm input").hasClass('parsley-error');
	if(mixf){
		return;
	}
	$("#addSalesOrder").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	var tps = $("#tabDivs").find("div[class='tab-pane active']");
	var headerId = tps.find("input[name='headerId']").val();
	if(addOrUpdate == "add"){
		var html = "<tr><td>" +nextLineNo
		+ "</td><td>" +$("#materielNum").val()
		+ "</td><td>" +$("#orderNum").val()
		+ "</td><td>"  +$("#requestDate").val()
		+ "</td><td>" + $("#custmerPONum").val() 
		+ "</td><td>" +$("#englishName").val()
		+ "</td><td>" +$("#evalUnitPrice").val()
		+ "</td><td hidden='hidden'>" +$("#materielUnit").val()
		+ "</td><td hidden='hidden'>" +$("#brandTerminal").val()
		+ "</td><td hidden='hidden'>" +$("#clientTerminal").val()
		+ "</td><td hidden='hidden'>" +$("#orderType").val() + "</td><td hidden='hidden'>" +$("#commissionType").val()
		+ "</td><td hidden='hidden'>" +$("#commissionName1").val() + "</td><td hidden='hidden'>" +$("#commissionRate1").val() + "</td><td hidden='hidden'>" +$("#commissionValue1").val()
		+ "</td><td hidden='hidden'>" +$("#commissionName2").val() + "</td><td hidden='hidden'>" +$("#commissionRate2").val() + "</td><td hidden='hidden'>" +$("#commissionValue2").val()
		+ "</td><td hidden='hidden'>" +$("#commissionName3").val() + "</td><td hidden='hidden'>" +$("#commissionRate3").val() + "</td><td hidden='hidden'>" +$("#commissionValue3").val()
		+ "</td><td hidden='hidden'>" +$("#commissionName4").val() + "</td><td hidden='hidden'>" +$("#commissionRate4").val() + "</td><td hidden='hidden'>" +$("#commissionValue4").val()
		+ "</td><td hidden='hidden'>" +$("#commissionName5").val() + "</td><td hidden='hidden'>" +$("#commissionRate5").val() + "</td><td hidden='hidden'>" +$("#commissionValue5").val()
		+ "</td><td hidden='hidden'>" +$("#compName1").val() + "</td><td hidden='hidden'>" +$("#compCount1").val() + "</td><td hidden='hidden'>" +$("#compRatio1").val()
		+ "</td><td hidden='hidden'>" +$("#compName2").val() + "</td><td hidden='hidden'>" +$("#compCount2").val() + "</td><td hidden='hidden'>" +$("#compRatio2").val()
		+ "</td><td hidden='hidden'>" +$("#compName3").val() + "</td><td hidden='hidden'>" +$("#compCount3").val() + "</td><td hidden='hidden'>" +$("#compRatio3").val()
		+"</td><td><div class=\"btn-group\"><a onclick=\"addSalesOrder()\" href=\"javascript:void(0);\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;&nbsp;<div class=\"btn-group\"><a onClick=\"getSalesOrder(this)\" href=\"javascript:void(0)\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#tabDivs").find("div[class='tab-pane active']").find("tbody[name='salesTbody']").append(html);
		nextLineNo++;
		
	}else if(addOrUpdate == "update"){
		tr.find("td:eq(1)").text($("#materielNum").val()); 
		tr.find("td:eq(2)").text($("#orderNum").val()); 
		tr.find("td:eq(3)").text($("#requestDate").val()); 
		tr.find("td:eq(4)").text($("#custmerPONum").val()); 
		tr.find("td:eq(5)").text($("#englishName").val()); 
		tr.find("td:eq(6)").text($("#evalUnitPrice").val());
		tr.find("td:eq(7)").text($("#materielUnit").val());
		tr.find("td:eq(8)").text($("#brandTerminal").val());
		tr.find("td:eq(9)").text($("#clientTerminal").val());
		tr.find("td:eq(10)").text($("#orderType").val());
		tr.find("td:eq(11)").text($("#commissionType").val());
		tr.find("td:eq(12)").text($("#commissionName1").val());
		tr.find("td:eq(13)").text($("#commissionRate1").val());
		tr.find("td:eq(14)").text($("#commissionValue1").val());
		tr.find("td:eq(15)").text($("#commissionName2").val());
		tr.find("td:eq(16)").text($("#commissionRate2").val());
		tr.find("td:eq(17)").text($("#commissionValue2").val());
		tr.find("td:eq(18)").text($("#commissionName3").val());
		tr.find("td:eq(19)").text($("#commissionRate3").val());
		tr.find("td:eq(20)").text($("#commissionValue3").val());
		tr.find("td:eq(21)").text($("#commissionName4").val());
		tr.find("td:eq(22)").text($("#commissionRate4").val());
		tr.find("td:eq(23)").text($("#commissionValue4").val());
		tr.find("td:eq(24)").text($("#commissionName5").val());
		tr.find("td:eq(25)").text($("#commissionRate5").val());
		tr.find("td:eq(26)").text($("#commissionValue5").val());
		tr.find("td:eq(27)").text($("#compName1").val());
		tr.find("td:eq(28)").text($("#compCount1").val());
		tr.find("td:eq(29)").text($("#compRatio1").val());
		tr.find("td:eq(30)").text($("#compName2").val());
		tr.find("td:eq(31)").text($("#compCount2").val());
		tr.find("td:eq(32)").text($("#compRatio2").val());
		tr.find("td:eq(33)").text($("#compName3").val());
		tr.find("td:eq(34)").text($("#compCount3").val());
		tr.find("td:eq(35)").text($("#compRatio3").val());
	}
}


//yongjing点击添加或编辑里的确定按钮
function updateHireCost(){
	$("#hireCostForm").submit();
	var mixf = $("#hireCostForm input").hasClass('parsley-error');
	if(mixf){
		return;
	}
	$("#addHireCost").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	var tps = $("#tabDivs").find("div[class='tab-pane active']");
	var headerId = tps.find("input[name='headerId']").val();
	if(addOrUpdate == "add"){
		var commissionId = "";
		$.ajax({
			type : "POST",
			async : false,
			url : "/JHTEvaluation/saveSoCommission.do?headerId="+tps.find("input[name='headerId']").val(),
			data :  $("#hireCostForm").serializeArray(),
			dataType : "text",
			success : function(json) {
				commissionId = json;
				alert("新增成功！");
			}
		});
		
		var html = "<tr><td style=\"display:none;\">"+commissionId+"</td><td>" + $("#orgName").val()
		+ "</td><td>" +$("#sourceDocType").find("option:selected").text()
		+ "</td><td>" +$("#commissionLineNum").val() + "</td><td>" +$("#commissionTypeName").val()
		+ "</td><td>" + $("#commissionRate").val() + "</td><td>" +$("#commissionPrice").val()
		+ "</td><td>" +$("#vendorName").val()+"</td><td><div class=\"btn-group\"><a onclick=\"addHireCost()\" href=\"javascript:void(0);\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;&nbsp;<div class=\"btn-group\"><a onClick=\"getHireCost(this)\" href=\"javascript:void(0)\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#tabDivs").find("div[class='tab-pane active']").find("tbody[name='hireTbody']").append(html);
		
		
		
	}else if(addOrUpdate == "update"){
		
		//获取第一行的id
		var soCommissionsId = tr.find("td:eq(0)").text();
		$.ajax({
			type : "POST",
			async : false,
			url : "/JHTEvaluation/updateSoCommission.do?headerId="+tps.find("input[name='headerId']").val()+"&soCommissionsId="+soCommissionsId,
			data :  $("#hireCostForm").serializeArray(),
			dataType : "text",
			success : function(json) {
				alert(json);
			}
		});
		
		tr.find("td:eq(1)").text($("#orgName").val()); 
		tr.find("td:eq(2)").text($("#sourceDocType").val()) ; 
		tr.find("td:eq(3)").text($("#commissionLineNum").val()) ; 
		tr.find("td:eq(4)").text($("#commissionTypeName").val()) ; 
		tr.find("td:eq(5)").text($("#commissionRate").val()) ; 
		tr.find("td:eq(6)").text($("#commissionPrice").val()) ; 
		tr.find("td:eq(7)").text($("#vendorName").val()) ; 
	}
}

function getSoHeaderJson(){
	var tps = $("#tabDivs").find("div[class='tab-pane active']");
	var soHeader = {
			"paymentTerm":tps.find("select[name='paymentTerm']").val(),
		"orgName":tps.find("*[name='orgName']").val(),
		"orderType":tps.find("*[name='orderType']").find("option:selected").text(),
		"customerNumber":tps.find("input[name='customerNumber']").val(),
		"customerAddress":tps.find("input[name='customerAddress']").val(),
		"salePersonNumber":tps.find("input[name='salePersonNumber']").val(),
		"orderDate":tps.find("input[name='orderDate']").val(),
		"currencyCode":tps.find("*[name='currencyCode']").val(),
		"shipMethod":tps.find("*[name='shipMethod']").find("option:selected").text(),
		"shipFrom":tps.find("*[name='shipFrom']").find("option:selected").text(),
		"projectNumber":tps.find("select[name='projectNumber']").val(),
		"departmentName":tps.find("input[name='departmentName']").val(),
		"tradeTerm":tps.find("select[name='tradeTerm']").val(),
		"discountRate":tps.find("input[name='discountRate']").val(),"projectId":"2018"};
	return soHeader;
}

function getSalesLinesJson(){
	var salesLinesJsonArray = [];
	$("#specItem0").find("tbody[name='salesTbody']").find("tr").each(function(){
		var salesLinesJsonObj = {};
		salesLinesJsonObj["lineNum"] = $(this).find("td:eq(0)").text();
		salesLinesJsonObj["itemNumber"] = $(this).find("td:eq(1)").text();
		salesLinesJsonObj["orderQuantity"] = $(this).find("td:eq(2)").text();
		salesLinesJsonObj["requestDate"] = $(this).find("td:eq(3)").text();
		salesLinesJsonObj["custPoNumber"] = $(this).find("td:eq(4)").text();
		salesLinesJsonObj["enProductName"] = $(this).find("td:eq(5)").text();
		salesLinesJsonObj["calculatePrice"] = $(this).find("td:eq(6)").text();
		salesLinesJsonObj["itemUom"] = $(this).find("td:eq(7)").text();
		salesLinesJsonObj["brandTerminal"] = $(this).find("td:eq(8)").text();
		salesLinesJsonObj["customerTerminal"] = $(this).find("td:eq(9)").text();
		salesLinesJsonArray.push(salesLinesJsonObj);
	});
	return salesLinesJsonArray;
}

function getCommissonLinesJson(){
	var commissonJsonArray = [];
	//先取头
	var maxCommissionCount = 1;//记录填写几个提佣人
	for(var i=1;i<6;i++){
		if($("#headForm input[name='commissionRate"+i+"']").val()!=""){
			maxCommissionCount = i;
			var commissonJsonHeadObj = {};
			commissonJsonHeadObj["orgName"] = $("#headForm *[name='orgName']").val();
			commissonJsonHeadObj["lineNum"] = "";
			commissonJsonHeadObj["sourceDocType"] = $("#headForm *[name='danjuleixing']").val();
			commissonJsonHeadObj["commissionLineNum"] = i+"";
			commissonJsonHeadObj["commissionTypeName"] = $("#headForm *[name='commissionTypeUp']").val();
			if($("#headForm *[name='commissionTypeUp']").val()=="比率"){
				commissonJsonHeadObj["commissionRate"] = $("#headForm *[name='commissionRate"+i+"']").val();
				commissonJsonHeadObj["commissionPrice"] = "";
			}else{
				commissonJsonHeadObj["commissionRate"] = "";
				commissonJsonHeadObj["commissionPrice"] = $("#headForm *[name='commissionRate"+i+"']").val();
			}
			commissonJsonHeadObj["vendorName"] = $("#headForm *[name='commissionName"+i+"']").val();
			commissonJsonArray.push(commissonJsonHeadObj);
		}
	}
	//再取行
	$("#specItem0").find("tbody[name='salesTbody']").find("tr").each(function(){
		if($(this).find("td:eq(10)").text()=="LINE"){
			for(var j=1;j<maxCommissionCount+1;j++){
				var commissonJsonObj = {};
				commissonJsonObj["orgName"] = $("#headForm *[name='orgName']").val();
				commissonJsonObj["lineNum"] = $(this).find("td:eq(0)").text();
				commissonJsonObj["sourceDocType"] = "LINE";
				commissonJsonObj["commissionLineNum"] = j+"";
				commissonJsonObj["commissionTypeName"] = $(this).find("td:eq(11)").text();
				commissonJsonObj["commissionRate"] = $(this).find("td:eq("+(3*j+10)+")").text();
				commissonJsonObj["commissionPrice"] = $(this).find("td:eq("+(3*j+11)+")").text();
				commissonJsonObj["vendorName"] = $(this).find("td:eq("+(3*j+9)+")").text();
				commissonJsonArray.push(commissonJsonObj);
			}
		}
	});
	return commissonJsonArray;
}

function getProjectJosnObj(){
	var projectJosnObj = {};
	var tds = $("#specItem0").find("tbody[name='projectTbody']").find('tr:eq(0)')[0];
	projectJosnObj["projectOrgName"]=$(tds).find("td:eq(0)").text();
	projectJosnObj["projectName"]=$(tds).find("td:eq(1)").text();
	projectJosnObj["projectType"]=$(tds).find("td:eq(2)").text();
	projectJosnObj["projectNumber"]=$(tds).find("td:eq(3)").text();
	projectJosnObj["invWgFlag"]=$(tds).find("td:eq(4)").text();
	projectJosnObj["invT2sFlag"]=$(tds).find("td:eq(5)").text();
	projectJosnObj["invWmFlag"]=$(tds).find("td:eq(6)").text();
	projectJosnObj["invDjFlag"]=$(tds).find("td:eq(7)").text();
	projectJosnObj["backupCustomer"]=$(tds).find("td:eq(8)").text();
	projectJosnObj["departmentName"]=$(tds).find("td:eq(9)").text();
	return projectJosnObj;
}


//保持订单
function saveOrder(){
	$("#headForm").submit();
	var mixf1 = $("#headForm input").hasClass('parsley-error');
	var flag2 = $("#specItem0").find("tbody[name='salesTbody']").find("tr:eq(0)").find("td:eq(0)").text();
	var flag3 = $("#specItem0").find("tbody[name='projectTbody']").find("tr:eq(0)").find("td:eq(0)").text();
	if(mixf1||(flag2=="")||(flag3=="")){
		alert("请补充订单信息");
		return;
	}
	
	var soHeaderJson = getSoHeaderJson();
	var salesLinesJson = getSalesLinesJson();
	var commissonLinesJson = getCommissonLinesJson();
	var projectJosnObj = getProjectJosnObj();
	var tps = $("#tabDivs").find("div[class='tab-pane active']");
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/saveSalesOrder.do?salesOrderLineData="+JSON.stringify(salesLinesJson)+"&commissionData="+JSON.stringify(commissonLinesJson)+"&projectData="+JSON.stringify(projectJosnObj)+"&",
		data : JSON.stringify(soHeaderJson),
		dataType : "text",
		success : function(json) {
			if(json.indexOf("失败")>-1){
				alert(json);
			}else{
				var josnObj = eval('('+json+')');
				tps.find("label[name='orderNumber']").text(josnObj.orderNumber);
				headIdRe = josnObj.headerId;
			}	
			alert("保存成功！");
			
			
		}
	});
}


function getCompJosnList(){
	var compJosnList = [];
	$("#specItem0").find("tbody[name='salesTbody']").find("tr").each(function(){
		if($(this).find("td:eq(27)").text()!=""&&$(this).find("td:eq(28)").text()!=""&&$(this).find("td:eq(29)").text()!=""){
			var compJosnObj1 = {};
			compJosnObj1["LINE_NUMBER"] = $(this).find("td:eq(0)").text();
			compJosnObj1["ITEM_NUMBER"] = $(this).find("td:eq(27)").text();
			compJosnObj1["COMPONENT_SEQ"] = "1";
			compJosnObj1["COMPONENT_QUANTITY"] = $(this).find("td:eq(28)").text();
			compJosnObj1["COMPONENT_COST_SCALE"] = $(this).find("td:eq(29)").text();
			compJosnList.push(compJosnObj1);
		}
		if($(this).find("td:eq(30)").text()!=""&&$(this).find("td:eq(31)").text()!=""&&$(this).find("td:eq(32)").text()!=""){
			var compJosnObj2 = {};
			compJosnObj2["LINE_NUMBER"] = $(this).find("td:eq(0)").text();
			compJosnObj2["ITEM_NUMBER"] = $(this).find("td:eq(30)").text();
			compJosnObj2["COMPONENT_SEQ"] = "2";
			compJosnObj2["COMPONENT_QUANTITY"] = $(this).find("td:eq(31)").text();
			compJosnObj2["COMPONENT_COST_SCALE"] = $(this).find("td:eq(32)").text();
			compJosnList.push(compJosnObj2);
		}
		if($(this).find("td:eq(33)").text()!=""&&$(this).find("td:eq(34)").text()!=""&&$(this).find("td:eq(35)").text()!=""){
			var compJosnObj3 = {};
			compJosnObj3["LINE_NUMBER"] = $(this).find("td:eq(0)").text();
			compJosnObj3["ITEM_NUMBER"] = $(this).find("td:eq(33)").text();
			compJosnObj3["COMPONENT_SEQ"] = "3";
			compJosnObj3["COMPONENT_QUANTITY"] = $(this).find("td:eq(34)").text();
			compJosnObj3["COMPONENT_COST_SCALE"] = $(this).find("td:eq(35)").text();
			compJosnList.push(compJosnObj3);
		}
	});
	return compJosnList;
}

//上传订单与其他系统对接上传
function uploadOrder(){
	var tps = $("#tabDivs").find("div[class='tab-pane active']");
	var headerId = tps.find("input[name='headerId']").val();
	$.ajax({
		type : "POST",
		async : false,
		url : "/JHTEvaluation/sendSalesOrderByHeaderId.do?headerId=test0001&compJosnList="+JSON.stringify(getCompJosnList()),
		dataType : "text",
		success : function(tip) {
			alert(tip);
		}
	});
}

//更新项目确定按钮
function updateProject(){
	//获取第一行的id
	var invWgFlag = "N";
	var invT2sFlag = "N";
	var invWmFlag = "N";
	var invDjFlag = "N";
	if($("#wgFlag").find("option:selected").val() =="invWgFlag"){
		invWgFlag = "Y";
	}else if($("#wgFlag").find("option:selected").val() =="invT2sFlag"){
		invT2sFlag = "Y";
	}else if($("#wgFlag").find("option:selected").val() =="invWmFlag"){
		invWmFlag = "Y";
	}else if($("#wgFlag").find("option:selected").val() =="invDjFlag"){
		invDjFlag = "Y";
	}
	tr.find("td:eq(0)").text($("#projectOrgName").val()); 
	tr.find("td:eq(1)").text($("#projectName").val()); 
	tr.find("td:eq(2)").text($("#projectType").val()); 
	tr.find("td:eq(3)").text($("#projectNumber").val()); 
	tr.find("td:eq(4)").text(invWgFlag); 
	tr.find("td:eq(5)").text(invT2sFlag); 
	tr.find("td:eq(6)").text(invWmFlag);  
	tr.find("td:eq(7)").text(invDjFlag); 
	tr.find("td:eq(8)").text($("#backupCustomer").val()); 
	tr.find("td:eq(9)").text($("#departmentName").val()); 
	
	$("#addProject").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
}



//点击佣金信息编辑的小按钮
function getProject(obj) {
	//获取选中的行
	tr = $(obj).closest("tr");
	if(tr.find("td:eq(0)").text()==""){
		$("#addProject").modal("show");
		return;
	}
	$("#projectName").val(tr.find("td:eq(1)").text());
	$("#projectType").val(tr.find("td:eq(2)").text());
	$("#projectOrgName").val(tr.find("td:eq(0)").text());
	$("#projectNumber").val(tr.find("td:eq(3)").text());
	if(tr.find("td:eq(4)").text()=="Y"){
		$("#invWgFlag").val("invWgFlag");
	}
	if(tr.find("td:eq(5)").text()=="Y"){
		$("#invWgFlag").val("invT2sFlag");
	}
	if(tr.find("td:eq(6)").text()=="Y"){
		$("#invWgFlag").val("invWmFlag");
	}
	if(tr.find("td:eq(7)").text()=="Y"){
		$("#invWgFlag").val("invDjFlag");
	}
	$("#backupCustomer").val(tr.find("td:eq(8)").text());
	$("#departmentName").val(tr.find("td:eq(9)").text());
	$("#addProject").modal("show");
}