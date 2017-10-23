/**
 * 获取佣金费用
 * @returns
 */
function getCost(){
	var hireResult=[];
	var valueTrs = $("#hireSel").find("tr");
	for(var x=1;x<valueTrs.length;x++){
		var hireTds = $("#hireSel").find("tr")[x].children;
	    hireResult.push({"takeDrawNum":hireTds[0].children[0].value,"takeDrawPerson":hireTds[1].children[0].value,"takeDrawRate":hireTds[2].children[0].value});
	}
	return hireResult;
}

function getCost4DB(){
	var hireResult=[];
	var valueTrs = $("#hireSel").find("tr");
	for(var x=1;x<valueTrs.length;x++){
		var hireTds = $("#hireSel").find("tr")[x].children;
	    hireResult.push({"takeDrawOrder":hireTds[0].children[0].value,"takeDrawPerson":hireTds[1].children[0].value,"takeDrawRate":hireTds[2].children[0].value});
	}
	return hireResult;
}

//模拟tab效果
function HireCostToGrossProfit(){
    var transId = "grossProfit";
    window.parent.tabIframe(transId);
}

function saveCommission2DB(){
	var flag = false;
	var resultHireJson = JSON.stringify(getCost());
	var commissionData = getCost4DB();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/hireCostSave.do?evalDetailID="+ evalDetailID+"&resultHireJson="+resultHireJson+"&",
		data : JSON.stringify(commissionData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('(' + json + ')');
			if (jsonObj.flag) {
				flag = true;
				alert("佣金测算保存成功!");
			} else {
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

function saveEvalDetail(){
	if(opraType=="view"){
		HireCostToGrossProfit();
		return;
	}
	/*	var trList = $("#hireSel").children("tr");
	 for (var i=0;i<trList.length;i++) {
		  var tdArr = trList.eq(i).find("td");
		  var selectText = tdArr.eq(0).find("option:selected").text();
		  alert(selectText);
		  for (var j=i;j<trList.length-i;j++) {
			  var tdArr1 = trList.eq(j).find("td");
			  var selectText1 = tdArr1.eq(0).find("option:selected").text();  
			  if(selectText==selectText1){
				  alert("提佣人出现重复！");
				  return;
			  }
		  }
	 }*/
	
	//校验输入框
	if(!myValidate("hireCostForm")){
		alert("请检查输入内容");
		return;
	}
	
//	$("#hireCostForm").submit();
//	var mixf = !$("#hireCostForm input").hasClass('parsley-error');
//	if(!mixf){
//		return ;
//	}

	if(!saveCommission2DB()){
		return;
	}
	var hireData = getCost();
	window.parent.$hireCost_result = hireData;
	HireCostToGrossProfit();
}



//新增一行
function addHireRow(){
	 var rows =$("#hireSel tr").length;
	var html = "<tr><td><select style=\"width:150px;\" class=\"input-sm form-control input-s-sm inline\">"
      +"<option value=\"0\">第一提佣人</option>" 
      +"<option value=\"1\">第二提佣人</option>"
      +"<option value=\"2\">第三提佣人</option>"
	  +"<option value=\"3\">返点率</option></select></td>"
      +"<td><input type=\"text\" style=\"text-align:center;\" class=\"form-control\" data-required=\"true\"></td>"
      +"<td><input type=\"text\" style=\"text-align:center;\" class=\"form-control\" data-required=\"true\" data-type=\"number\"></td>"
      +"<td><div class=\"btn-group\"><a href=\"javascript:addHireRow()\"><i class=\"fa fa-plus\"></i> </a></div>"
      +"<div style=\"float:right\"><a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a></div></td></tr>";
//通过表体id把显示文本显示到网页中
	if(rows<5){
	$("#hireData").append(html);
	}
	else{
		alert("最多添加4行!");
		return;
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



//下拉框
function typeContent(){
	  var tradeFormValue =  $("#tradeForm").val();
	  $("#quotationRate").val(tradeFormValue);
  }

////////////////////////////////page review///////////////////////////////////////
function reviewPage(){
	var jsonData = window.parent.evalHeadData.evalDetail.resultHireJson;
	if(opraType=="view"){
		viewPage(jsonData);
	}else if(opraType=="edit"){
		editPage(jsonData);
	}
}

function viewPage(jsonData){
	$("#hireData").empty();
	var html = "";
	for(var i=0;i<jsonData.length;i++){
		html += "<tr><td><select style=\"width:150px;\" class=\"input-sm form-control input-s-sm inline\">"
		      +"<option value=\"第一提佣人\""+(jsonData[i].takeDrawNum=="第一提佣人"?"selected":"")+">第一提佣人</option>" 
		      +"<option value=\"第二提佣人\""+(jsonData[i].takeDrawNum=="第二提佣人"?"selected":"")+">第二提佣人</option>"
		      +"<option value=\"第三提佣人\""+(jsonData[i].takeDrawNum=="第三提佣人"?"selected":"")+">第三提佣人</option>"
			  +"<option value=\"返点率\""+(jsonData[i].takeDrawNum=="返点率"?"selected":"")+">返点率</option></select></td>"
		      +"<td><input type=\"text\" style=\"text-align:center;\" class=\"form-control\" value='"+jsonData[i].takeDrawPerson+"' data-required=\"true\"></td>"
		      +"<td><input type=\"text\" style=\"text-align:center;\" class=\"form-control\" value='"+jsonData[i].takeDrawRate+"' data-required=\"true\" data-type=\"number\"></td>"
		      +"<td><div class=\"btn-group\"><a href=\"javascript:addHireRow()\"><i class=\"fa fa-plus\"></i> </a></div>"
		      +"<div style=\"float:right\"><a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a></div></td></tr>";
	}
	//通过表体id把显示文本显示到网页中
	$("#hireData").append(html);
}

function editPage(jsonData){
	
}
////////////////////////////////////////////////////////////////////////////

$(function() {
	if(opraType=="view"||opraType=="edit"){
		reviewPage();
	}

});