/**
 * 获取代垫费用
 * @returns
 */
function getPrepaidCost(){
	var costResult=[];
	var valueTrs = $("#costBody").find("tr");
	for(var x=0;x<valueTrs.length;x++){
		var costTds = $("#costBody").find("tr")[x].children;
		costResult.push({"name":costTds[1].children[0].value,"cost":costTds[3].children[0].value});
	}
	return costResult;
}

//删除一行
function delRow(obj){
	if($(obj).parents("tbody").children().length>1){
		var res = confirm('确认要删除吗？');  
		if(res == true){  
			$(obj).parents("tr").remove(); 
			calTotalCost();
		}
	}
}
//添加一行
function addCost(){
	var html = '<tr>'
		+'<td width="120px;"><label>费用名称：</label></td>'
		+'<td width="300px;"><input name="costName" type="text" class="form-control" data-required="true"></td>'
		+'<td width="120px;"><label>金额(￥)：</label></td>'
		+'<td width="120px;"><input name="costValue" type="text" class="form-control" data-required="true" data-type="number" onblur="calResultInput(this)"></td>'
		+'<td width="60px;"><div class="btn-group"><a href="javascript:addCost()" ><i class="fa fa-plus"></i> </a></div>'
		+'<div style="float:right"><a onclick="delRow(this);" href="javascript:;"><i class="fa fa-minus"></i></a></div>'
		+'</td>'
		+'<td></td>'
		+'</tr>';
	$("#costBody").append(html);
}

function calResultInput(obj){
	calTotalCost();
	var reg=/^[0-9]+([.]{1}[0-9]+){0,1}$/;
	var str=$(obj).val();
	if(!reg.test(str)){
		$(obj).addClass("parsley-error");
		return;
	}else{
		$(obj).removeClass("parsley-error");
	}
}

function calTotalCost(){
	var costVals = $("#costBody").find("input[name='costValue']");
	var result = 0;
	var valTmp = 0;
	for(var i=0;i<costVals.length;i++){
		valTmp = isNaN(parseFloat(costVals[i].value))?0:parseFloat(costVals[i].value);
		result += valTmp;
	}
	$("#costTotalBody").find("td[name='costTotalValue']")[0].innerText = result.toFixed(2);
}


function transCostToOtherCost(){
    var transId = "otherCost";
    window.parent.tabIframe(transId);
}

function savePrepaid2DB(){
	var flag = false;
	var resultPrepaidJson = $("#costTotalBody").find("td[name='costTotalValue']")[0].innerText;
	var PrepaidCostData = getPrepaidCost();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/prepaidCostSave.do?evalDetailID="+evalDetailID+"&resultPrepaidJson="+resultPrepaidJson+"&",
		data : JSON.stringify(PrepaidCostData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if (jsonObj.flag) {
				flag = true;
				alert("代垫费用测算保存成功!");
			} else {
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

//暂存按钮，保存table数据进数据库
function saveTransportCost(){
	if(!myValidate("costForm")){
		alert("请检查输入内容");
		return;
	}
	
	if(!savePrepaid2DB()){
		return;
	}
	
	window.parent.$prepaid_result=parseFloat($("#costTotalBody").find("td[name='costTotalValue']")[0].innerText);
	transCostToOtherCost();
}
