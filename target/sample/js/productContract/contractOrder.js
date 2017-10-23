var tabGuidArray = ["order1"];
var addOrUpdate = "add";
//删除一行


function delRow(obj){
	if($(obj).parents("tbody").children().length>1){
		var res = confirm('确认要删除吗？');  
		if(res == true){  
			$(obj).parents("tr").remove();  
		}
	}	
}

//添加订单信息
function addContract(obj){
	addOrUpdate = "add";
	tr = $(obj).closest("tr");
	$("#addContract").modal("show");
}


//点击编辑的小按钮
function getContract(obj) {
	addOrUpdate = "update";
	//获取选中的行
	tr = $(obj).closest("tr");
	$("#addContract").modal("show");
	//获取列值，赋值给弹出框
	$("#bomMaterielNum").val(tr.find("td:eq(0)").html());
	$("#bomDosage").val(tr.find("td:eq(1)").html());
	$("#bomOutputRate").val(tr.find("td:eq(2)").html());
	$("#materialCosts").val(tr.find("td:eq(3)").html());
	$("#procedure").val(tr.find("td:eq(4)").html());
}



//点击添加或编辑里的确定按钮
function updateContract(){
	$("#contractForm").submit();
	var mixf = $("#contractForm input").hasClass('parsley-error');
	if(mixf){
		return;
	}
	$("#addContract").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	if(addOrUpdate == "add"){
		var html = "<tr><td>" +$("#bomMaterielNum").val()
		+ "</td><td>" +$("#bomDosage").val()
		+ "</td><td>" +$("#bomOutputRate").val() 
		+ "</td><td>" + $("#materialCosts").val() + "</td><td>" +$("#procedure").val()
		+ "</td><td rel='mdsOrBom'>" + $("#mdsOrbom").val();
		+"</td><td><div class=\"btn-group\"><a onclick=\"addContract(this)\" href=\"javascript:void(0);\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;&nbsp;<div class=\"btn-group\"><a onClick=\"getContract(this)\" href=\"javascript:void(0)\"><i class=\"fa fa-pencil\"></i></a>&nbsp;</div></td></tr>";
		//通过表体id把显示文本显示到网页中
		tr.parent().append(html);
	}else if(addOrUpdate == "update"){
		tr.find("td:eq(0)").text($("#bomMaterielNum").val()); 
		tr.find("td:eq(1)").text($("#bomDosage").val()) ; 
		tr.find("td:eq(2)").text($("#bomOutputRate").val()) ; 
		tr.find("td:eq(3)").text($("#materialCosts").val()) ; 
		tr.find("td:eq(4)").text($("#procedure").val()) ; 
		tr.find("td:eq(5)").text($("#mdsOrbom").val()) ; 
	}
}


var jobInfoId = "";//用于上传合同
//保存订单
function saveContract(){
	$("#commonHead").submit();
	$("#dataForm").submit();
	var mixf1 = $("#commonHead input").hasClass('parsley-error');
	var mixf2 = $("#dataForm input").hasClass('parsley-error');
	var lineFlag = true;
	$("#tabDivs").children().each(function(){
		if($(this).find("tbody:eq(1)").find("tr:eq(0)").find("td:eq(0)").text()==""){
			lineFlag = false;
			return;
		}
	});
	if(mixf1||mixf2||!lineFlag){
		alert("请补充工单信息");
		return;
	}
	var jsonTrans = [];
	$("#tabDivs").children().each(function(){
		var headMsgJsonObj = {};
		var lineMsgJsonObj = [];
		var operationCodeMsgObj=[];
		$("#commonHead").find("input").each(function(){
			headMsgJsonObj[$(this).attr("name")] = $(this).val();
		});
		$(this).find("input").each(function(){
			headMsgJsonObj[$(this).attr("name")] = $(this).val();
		});
		$(this).find("tbody:eq(1)").find("tr").each(function(){
			var lineTmpObj = {};
			var operationCodeObj = {};
			lineTmpObj["componentItem"] = $(this).find("td:eq(0)").text();
			lineTmpObj["quantityPerAssmbly"] = $(this).find("td:eq(1)").text();
			lineTmpObj["componentYieldFactor"] = $(this).find("td:eq(2)").text();
			lineTmpObj["materialCosts"] = $(this).find("td:eq(3)").text();
			operationCodeObj["operationCode"] = $(this).find("td:eq(4)").text();
			lineMsgJsonObj.push(lineTmpObj);
			operationCodeMsgObj.push(operationCodeObj);
		});
		var josn={"head":headMsgJsonObj,"line":lineMsgJsonObj,"operationCode":operationCodeMsgObj};
		jsonTrans.push(josn);
	});
	
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/contractInfoSave.do?josnStr="+JSON.stringify(jsonTrans),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				jobInfoId = jsonObj.msg;
				alert("保存成功");
			}else{
				jobInfoId = "";
				alert(jsonObj.msg);
			}
		}
	});
}

//上传订单与其他系统对接上传
function uploadContractAfterSave(){
	if(jobInfoId==""){
		alert("请先保存合同");
		return;
	}
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/uploadContractAfterSave.do?processContractNum="+jobInfoId,
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			alert(jsonObj.msg);
		}
	});
}

function sendMDSByJoLine(obj){
	tr = $(obj).closest("tr");
	alert(tr.find("td:eq(0)").html());
}

function addTab(){
	//先把之前tab的active和内容div的active删掉
	for(var j=0;j<tabGuidArray.length;j++){
		var formerId = tabGuidArray[j];  
		$("#"+formerId).removeClass("active");
		$($('#addTabs')[0].children[j]).removeClass("active");
	}
	var html = $("#orderInit").clone();
	var id = "order"+GUID();
	html.attr('id',id);
	html.addClass("active");
	$("#tabDivs").append(html);
	$('#addTabs').append('<li class="active"><a href="#'+id+'" data-toggle="tab">工单<span><i onclick="delTabById(\''+id+'\',this);" style="margin-left:20px;cursor:pointer" class="fa fa-times"></i></span></a></li>');
	tabGuidArray.push(id);
}

function delTabById(elementId,obj){  
	if($("#" + elementId).parent().children().length>1){
		var res = confirm('确认要删除吗？'); 
		if(res){
			if($("#" + elementId).length > 0){
				$("#" + elementId).remove(); 
				$(obj).parents('li').remove();
				tabGuidArray.splice($.inArray(elementId,tabGuidArray),1);
				for(var i=0;i<tabGuidArray.length;i++){
					$("#"+tabGuidArray[i]).removeClass("active");
					$($('#addTabs')[0].children[i]).removeClass("active");
				}
				$("#order1").addClass("active");
				$($('#addTabs')[0].children[0]).addClass("active");
			} 
		}
	}  
}

function S4() {
	return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function GUID() {
	return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


function changeMaterialPrice(paramJson,obj){
	$("#materialCosts").val(paramJson.price);
	obj.attr("sku",paramJson.sku);
}
function setAssemblyItem(paramJson,obj){
	obj.attr("sku",paramJson.sku);
}
function setProcessCode(paramJson,obj){
	obj.attr("code",paramJson.code);
}
$(function() {
	$('#orderTime').datetimepicker({
	    format: 'yyyy-mm-dd hh:ii',//日期的格式
	    startDate:'1900-01-01',//选择器的开始日期
	    autoclose:true,//日期选择完成后是否关闭选择框
	    bootcssVer:3,//显示向左向右的箭头
	    language:'cn',//语言
	    minView:0,//表示日期选择的最小范围，默认是hour
	    initialDate:new Date(),
	});
	
	bindSearchEl($("#tabDivs").find("input[name='assemblyItem']"),path+"/dataBase-config/eval-materialName.data",null,setAssemblyItem,"name",["sku","name"]);
	bindSearchEl($("#tabDivs").find("input[name='processName']"),path+"/dataBase-config/eval-factory.data",null,setProcessCode,"name",["code","name"]);
	bindSearchEl($("#bomMaterielNum"),path+"/dataBase-config/eval-materialName.data",null,changeMaterialPrice,"name",["sku","name"]);
	
});

function uploadContractMDS(){
	$("#processContractLines td[rel=mdsOrBom]").each(function(i , td){
		var mdsList = new Array();
		var i = 1;
		if($(td).text() == "MDS"){
			$MDS = $(td).parent()
			var mds = {};
			mds['ORGANIZATION_CODE'] = $("*[name=organizationId]").val();
			mds['MDS_NAME'] = "MDS001";
			mds['ITEM_NUMBER'] = $MDS.find("td:eq(3)").text();
			mds['SCHEDULE_DATE'] = $("#orderTime").val();
			mds['QUANTITY'] = $MDS.find("td:eq(1)").text();
			mds['PROJECT_NUMBER'] = $("*[name=projectNumber]").val();

			mds['IMPROT_ID'] = "1";
			mds['SOURCE_CODE'] = "BJPT_MDS";
			mds['SOURCE_HEADER_ID'] = "";
			mds['SOURCE_LINE_ID'] = i;
			mdsList.push(mds);
			i++;
		}
		var url = "/JHTEvaluation/sendMDSByJSONArray.do";
		$.post(url , {"json":JSON.stringify(mdsList)} , function(json){
			json = $.parseJSON(json);
			if(json.XRETURNCODE.value == "S"){
				alert("上传成功！");
			}else{
				alert("上传失败："+json.XRESPONSEDATA.value);
			}
		})
	})
}


function changeType(obj){
	var selectedText = $(obj).val();
	if(selectedText == "自制"){
		$("#POFeeBtn").hide();
	}else if(selectedText == "外协"){
		$("#POFeeBtn").show();
	}
}

function uploadContractPOFee(){
	var url = "/JHTEvaluation/sendOutsidePurchaseOrderByHeaderId.do";
	$.post(url , {} , function(json){
		json = $.parseJSON(json);
		if(json.XRETURNCODE.value == "S"){
			alert("上传成功！");
		}else{
			alert("上传失败："+json.XRESPONSEDATA.value);
		}
	})
}