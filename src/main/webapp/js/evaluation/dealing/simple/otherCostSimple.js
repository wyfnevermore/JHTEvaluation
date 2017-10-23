/**
 * 获取其他费用
 * @returns
 */
function getOtherCost(){
	var costResult=[];
	var valueTrs = $("#costSel").find("tr");
	for(var x=1;x<valueTrs.length-1;x++){
		var costTds = $("#costSel").find("tr")[x].children;
		costResult.push({"costName":costTds[0].children[0].value,"totalCost":costTds[1].children[0].value,"flatOutCount":costTds[2].children[0].value,
			"unitCost":costTds[3].children[0].value});
	}
	return costResult;
}

/*
 * 获取测算结果，毛利数据
 */
function getGrossProfit(){
	//计算测算结果
	var evalDataListFromCal;
	$.ajax({
		type : "POST",
		async : false,
		url : "/JHTEvaluation/generEvalResult.do",
		data : {'evalDetailID':evalDetailID},
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				evalDataListFromCal = jsonObj.msg;
			}else{
				alert(jsonObj.msg);
			}
		}
	});
	window.parent.otherCostToNext(evalDataListFromCal);
	var transId = "grossProfit";
    window.parent.tabIframe(transId);
}

function otherCostToHireCost(){
    var transId = "commission";
    window.parent.tabIframe(transId);
}

function genOtherCost(){
	var otherRes = 0;
	var tempVal;
	for(var i=0;i<$("#otherCost")[0].children.length;i++){
		tempVal = $("#otherCost")[0].children[i].children[3].children[0].value;
		if(tempVal!=""){
			otherRes+=parseFloat(tempVal);
		}
	}
	$("#otherCostTotal")[0].children[0].children[3].innerText = otherRes.toFixed(2);
}

function saveOther2DB(){
	var flag = false;
	var resultOtherJson = $("#otherCostTotal")[0].children[0].children[3].innerText;
	var otherCostData = getOtherCost();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/otherCostSave.do?evalDetailID="+evalDetailID+"&resultOtherJson="+resultOtherJson+"&",
		data : JSON.stringify(otherCostData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if (jsonObj.flag) {
				flag = true;
				alert("其他费用测算保存成功!");
			} else {
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

function saveEvalDetail(){
	if(opraType=="view"){
		otherCostToHireCost();
		return;
	}
	if(!myValidate("otherCostForm")){
		alert("请检查输入内容");
		return;
	}
	if(!saveOther2DB()){
		return;
	}
	window.parent.$otherCost_result = $("#otherCostTotal")[0].children[0].children[3].innerText;
	otherCostToHireCost();
}

//新增一行
function addOtherCost(){
	var html = "<tr><td><input type=\"text\" name=\"costType\" class=\"form-control\" value=\"\" data-required=\"true\"></td>"
		      +"<td><input name=\"costValue\" type=\"text\" class=\"form-control parsley-validated\" data-required=\"true\" data-type=\"number\" onblur=\"calFormulaResult(this)\"></td>"
		      +"<td><input name=\"number\" type=\"text\" class=\"form-control parsley-validated\" value=\"\" data-required=\"true\" data-type=\"number\" onblur=\"calFormulaResult(this)\"></td>"
		      +"<td><input name=\"number\" type=\"text\" class=\"form-control parsley-validated\" value=\"\" data-required=\"true\" data-type=\"number\" onfocus=\"this.blur()\"></td>"
		      +"<td><div class=\"btn-group\"><a href=\"javascript:addOtherCost();\" ><i class=\"fa fa-plus\"></i></a></div>"
		      +"<div style=\"float:right\"><a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a></div></td></tr>";
		      
//通过表体id把显示文本显示到网页中
	$("#otherCost").append(html);
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

//下拉框
function typeContent(obj){
  var Tds = $(obj)[0].parentNode.parentNode.children;
  var num = Tds[0].children[0].value;
  for(var q = 1;q < Tds.length-1;q++){
    Tds[q].children[0].value = "";
  }
  if(num != 0){
    for(var i = 3;i < Tds.length-1;i++){
      Tds[i].children[0].style.visibility= "hidden";
    }
  }else{
	  for(var i = 1;i < Tds.length-1;i++){
	      Tds[i].children[0].style.visibility= "visible";
	    }
  }
}

function calFormulaResult(obj){
	tr = $(obj).closest("tr");
	var fenzi = $(tr.find("td:eq(1)")[0].children[0]).val();
	var fenmu = $(tr.find("td:eq(2)")[0].children[0]).val();
	if(fenzi!="" && fenmu!=""){
		try{
			var result = eval('('+fenzi/fenmu+')');
			$(tr.find("td:eq(3)")[0].children[0]).val(result.toFixed(2));
			genOtherCost();
		}catch(e){
			alert("请检查输入值！");
		}
	}else{
		$(tr.find("td:eq(3)")[0].children[0]).val("");
		genOtherCost();
	}
}

////////////////////////////////page review///////////////////////////////////////
function reviewPage(){
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/getOtherCostListByListid.do?listID="+window.parent.evalHeadData.evalDetail.otherCostID,
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
	$("#otherCostTotal").find("tr:eq(0)").find("td:eq(3)").text(window.parent.$otherCost_result);
}

function viewPage(jsonData){
	$("#otherCost").empty();
	var html = "";
	for(var i=0;i<jsonData.length;i++){
		html += "<tr><td><input type=\"text\" name=\"costType\" class=\"form-control\" value=\""+jsonData[i].costName+"\" data-required=\"true\"></td>"
		      +"<td><input name=\"costValue\" type=\"text\" class=\"form-control parsley-validated\" value=\""+jsonData[i].totalCost+"\" data-required=\"true\" data-type=\"number\" onblur=\"calFormulaResult(this)\"></td>"
		      +"<td><input name=\"number\" type=\"text\" class=\"form-control parsley-validated\" value=\""+jsonData[i].flatOutCount+"\" data-required=\"true\" data-type=\"number\" onblur=\"calFormulaResult(this)\"></td>"
		      +"<td><input name=\"number\" type=\"text\" class=\"form-control parsley-validated\" value=\""+jsonData[i].unitCost+"\" data-required=\"true\" data-type=\"number\" onfocus=\"this.blur()\"></td>"
		      +"<td><div class=\"btn-group\"><a href=\"javascript:addOtherCost();\" ><i class=\"fa fa-plus\"></i></a></div>"
		      +"<div style=\"float:right\"><a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a></div></td></tr>";
	}
	//通过表体id把显示文本显示到网页中
	$("#otherCost").append(html);
}

function editPage(jsonData){
	
}
////////////////////////////////////////////////////////////////////////////

$(function() {
	if(opraType=="view"||opraType=="edit"){
		reviewPage();
	}


});