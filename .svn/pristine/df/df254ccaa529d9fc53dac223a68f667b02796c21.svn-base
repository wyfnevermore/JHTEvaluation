/**
 * 获取颜色选择
 * @returns
 */
function getColor(){
	if(!checkColor()) return;
	
	var otherCheckBoxChecked = false;
	$("#colorSel").find("input[name='otherCheckBox']").each(function(){
		if($(this).prop('checked')){
			otherCheckBoxChecked = true;
			return false;
		}
	});
	window.parent.colorOtherCheckChecked = otherCheckBoxChecked;
	if(otherCheckBoxChecked){
		return;
	}
	
	var colorResult=[];
	var colorCost=0;
	
	var degreeList =["浅","中","深"];
	var degreeOtherName = $("#colorSel").find("tr:first").find("th:eq(4)").find("input").val();
	if(degreeOtherName!=""){
		degreeList.push(degreeOtherName);
	}
	
	var valueTrs = $("#colorSelBody").find("tr");
	var valueTemp = "";
	var colorTmp = "";
	var degreeTmp = "";
	var fenzi = 0;
	var fenmu = 0;
	eval_colorCost["浅"] = $("#colorSel").find("tr:eq(1)").find("th:eq(1)").find("input").val();
	eval_colorCost["中"] = $("#colorSel").find("tr:eq(1)").find("th:eq(2)").find("input").val();
	eval_colorCost["深"] = $("#colorSel").find("tr:eq(1)").find("th:eq(3)").find("input").val();
	for(var i=0;i<valueTrs.length;i++){
		if($(valueTrs[i]).find("td:eq(0)").find("input").length>0){
			colorTmp = $(valueTrs[i]).find("td:eq(0)").find("input").val();
		}else{
			colorTmp = $(valueTrs[i]).find("td:eq(0)").text();
		}
		for(var j=1;j<4;j++){
			valueTemp = valueTrs[i].children[j].children[0].value;
			if(valueTemp!=""){
				degreeTmp = degreeList[j-1];
				colorResult.push({"pattern":colorTmp,"depth":degreeTmp,"entryValue":valueTemp});
				fenzi += parseFloat(valueTemp)*parseFloat(eval_colorCost[degreeTmp]);
				fenmu += parseFloat(valueTemp);
			}
		}
	}
	window.parent.dyeCost = eval(fenzi/fenmu).toFixed(2);//染色的加权平均费用
	$('#modal-form').modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	return colorResult;
}

//校验颜色选择
function checkColor(){
	var hasValFlag = false;
	var checkFlag = true;
	var colorValueFlag = true;
	//1.判断输入颜色名称是否为空
	var colorNameFlag = true;
	$("#colorSelBody").find("input[name='colorName']").each(function(){
		if($(this).val()==""){
			$(this).addClass('parsley-error');
			colorNameFlag = false;
		}else{
			$(this).removeClass('parsley-error');
		}
	});
	if(!colorNameFlag){
		alert("请出入颜色名称或删除该行");
		return;
	}
	//2.判断值输入区是否为空 判断颜色价格是否输入
	var otherCheckBoxChecked = false;
	$("#colorSel").find("input[name='otherCheckBox']").each(function(){
		if($(this).prop('checked')){
			otherCheckBoxChecked = true;
			return false;
		}
	});
	if(!otherCheckBoxChecked){
		var colorCostArray = [];
		colorCostArray.push($("#colorSel").find("tr:eq(1)").find("th:eq(1)").find("input").val());
		colorCostArray.push($("#colorSel").find("tr:eq(1)").find("th:eq(2)").find("input").val());
		colorCostArray.push($("#colorSel").find("tr:eq(1)").find("th:eq(3)").find("input").val());
		
		var reg = /^\+?[1-9][0-9]*$/;
		
		$("#colorSelBody tr").each(function(){
			var colorInputTds = $(this).find("td input");
			for(var i=1;i<4;i++){
				if($(colorInputTds[i]).attr("name")!="colorName" && $(colorInputTds[i]).attr("name")!="otherCheckBox"){
					if($(colorInputTds[i]).val()!=""){
						hasValFlag = true;
						if(colorCostArray[i-1]==""){
							alert("请补充价格");
							colorValueFlag = false;
							return false;
						}
					}
					if($(colorInputTds[i]).val()!="" && !reg.test($(colorInputTds[i]).val())){
						checkFlag=false;
						return false;
					}
				}
			}
		});
		if(!checkFlag||!hasValFlag){
			alert("请输入颜色数量，并且为数字！");
			return false;
		}
	}
	if(otherCheckBoxChecked || (checkFlag && hasValFlag && colorValueFlag)){
		$('#modal-form').modal("hide");
		$(".modal-backdrop").remove();
		$("body").removeClass('modal-open');
		return true;
	}
}

//校验gui ge选择
function checkPattern(){
	// 遍历所有input，现在不要求有判断了
	var isInput1Null=true;
	var isInputNull=true;
	var flag = false;
	$("#patternSel input:checkbox").each(function(){
		if($(this).prop('checked')){
			// 判断抬头input是否为空
			if(!$(this).parents("tr").find("td:eq(5)").find("checkbox").is(':checked')){
				if($("#patternInput").val()==""){
					isInput1Null = false;
				}
			// 判断规格是否为空
				if($(this).parents("tr").find("td:eq(0)").find("input").val()=="" ){
					$(this).parents("tr").find("td:eq(0)").find("input").addClass('parsley-error');
					isInputNull = false;
				}else{
					if($(this).parents("tr").find("td:eq(0)").find("input").hasClass('parsley-error'))
					{
						$(this).parents("tr").find("td:eq(0)").find("input").removeClass('parsley-error');
					}
				}
				if($(this).parents("tr").find("td:eq(1)").find("input").val()=="" ){
					$(this).parents("tr").find("td:eq(1)").find("input").addClass('parsley-error');
					isInputNull = false;
				}else{
					if($(this).parents("tr").find("td:eq(1)").find("input").hasClass('parsley-error'))
					{
						$(this).parents("tr").find("td:eq(1)").find("input").removeClass('parsley-error');
					}
				}
			}
		}
	})
	
	if(!isInput1Null ){
		$("#patternInput").addClass('parsley-error');
		alert("请检查输入内容");
		return false;
	}
	else{
		if($("#patternInput").hasClass('parsley-error')){
			$("#patternInput").removeClass('parsley-error');
		}
	}
	if(!isInputNull){
		alert("请检查输入内容");
		return false;
	}
	$('#modal-form1').modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	return true;
}

//校验规格选择
function checkSpec(){
	var flag=true;
	var flag1=false;
	var flag2=true;
	var flag3=true;//验证其他规格的名称
	var reg = /^\+?[1-9][0-9]*$/;
	var valueTrs = $("#specSel").find("tr");
	var tds;
	for(var i=1;i<valueTrs.length;i++){
		//行元素
		tds = valueTrs[i].children;
		//选中状态
		if(tds[0].children[0].checked){
			flag1=true;
			if(tds[1].children[0].value==""){
				flag2 = false;
			}
			if(tds[2].children[0].value==""){
				flag = false;
				break;
			}
			else if(!reg.test(tds[2].children[0].value)){
				flag = false;
				break;
			}
			if(tds[5].children[0].value!="" && !reg.test(tds[5].children[0].value)){
				flag = false;
				break;
			}
			if(tds[5].children[0].value!="" && $(valueTrs[0]).find("th:eq(5)").find("input").val()==""){
				flag3 = false;
				break;
			}
		}
	}
	if(!flag2){
		alert("请补充规格名称");
		return false;
	}
	if(!flag || !flag1){
		alert("请至少补充长度数据,格式为数字！");
		return false;
	}
	if(!flag3){
		alert("请补充完整标题行");
		return false;
	}
	else{
		$('#modal-form2').modal("hide");
		$(".modal-backdrop").remove();
		$("body").removeClass('modal-open');
		return true;
	}
}

/**
 * 获取花型选择
 * @returns
 */
function getPattern(){
	var patternResult=[];
	var valueTrs = $("#patternSel").find("tr");
	var colomnsCount = valueTrs[0].children.length-3;
	var tdtmp;
	for(var i=1;i<valueTrs.length-1;i++){
		var protoTypeTd = valueTrs[i].children[1].children[0];
		for(var j=2;j<colomnsCount+2;j++){
			tdtmp = valueTrs[i].children[j].children[0];
			if(tdtmp.checked){
				patternResult.push({"netType":tdtmp.attributes.net.value,"protoType":protoTypeTd.options[protoTypeTd.selectedIndex].innerText,"halfProduct":tdtmp.attributes.halfProduct.value});
			}
		}
	}
	$('#modal-form1').modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	return patternResult;
}

/**
 * 获取要传到材料成本测算里面的数据，后面要传入材料成本测算
 * @returns
 */
function getTransData(){
	var specTransData = getSpec();
	var transData = [];
	transData.push({"spec":specTransData[0].specName,"halfProductClassify":""+evalHeadData.productName,"materailDescribe":""});
	return transData;
}



//获取规格选择
function setSpecParent(){
	//var specJson = {"S/B":{"Length":"1","Width":"2","Height":"3"},"D/B":{"Length":"4","Width":"5","Height":"6"}};
	// 获取长宽高
	var specJson ={};
	var valueTrs = $("#specSel").find("tr");
	var tds;
	for(var i=1;i<valueTrs.length-1;i++){
		tds = valueTrs[i].children;
		var specTmp = tds[1].children[0].value;
		if(tds[0].children[0].checked){
			specJson[specTmp] = {"Length":tds[2].children[0].value,"Width":tds[3].children[0].value,"Height":tds[4].children[0].value,"other":tds[5].children[0].value};
		}
	}
	window.parent.specSel= specJson;
}


/**
 * 获取规格选择
 * @returns
 */
function getSpec(){
	if(!checkSpec()) return;
	var specResult=[];
	var valueTrs = $("#specSel").find("tr");
	var tds;
	for(var i=1;i<valueTrs.length-1;i++){
		tds = valueTrs[i].children;
		if(tds[0].children[0].checked){
			specResult.push({"specName":tds[1].children[0].value,"length":tds[2].children[0].value,"width":tds[3].children[0].value,"height":tds[4].children[0].value,"other":tds[5].children[0].value});
		}
	}
	$('#modal-form2').modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	return specResult;
}

function descToMaterial(){
	var transData = getTransData();
	window.parent.productDesNoCompToNext(transData);
    var transId = "materialCost";
    window.parent.tabIframe(transId);
}
function setCompSelect2Material(){
	window.parent.setCompSelect2Material([evalHeadData.productName]);
}

//保存进入材料核算
function saveEvalDetail(){
	if(!checkColor()||!checkSpec()){
		return;
	}
	getColor();
	setSpecParent();
	setCompSelect2Material();
	descToMaterial();
	return;//暂时
	var patternListID;
	var netTypeListID;
	var specListID;
	var ifContibue = true;
	//存颜色
	var colorData = selColor();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/colorSave4NoComp.do",
		data : JSON.stringify(colorData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				patternListID = jsonObj.msg;
			}else{
				ifContibue = false;
				alert(jsonObj.msg);
			}
		}
	});
	if(!ifContibue){
		return;
	}
	
	//存花型
	var patternData = getPattern();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/netTypeSave4NoComp.do",
		data : JSON.stringify(patternData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				netTypeListID = jsonObj.msg;
			}else{
				ifContibue = false;
				alert(jsonObj.msg);
			}
		}
	});
	if(!ifContibue){
		return;
	}
	
	//存规格
	var specData = getSpec();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/specSave4NoComp.do",
		data : JSON.stringify(specData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				specListID = jsonObj.msg;
			}else{
				ifContibue = false;
				alert(jsonObj.msg);
			}
		}
	});
	if(!ifContibue){
		return;
	}
	
	//存测算信息
	var evalDetailData = {"evalDetailID":evalDetailID,"patternListID":patternListID,"netTypeListID":netTypeListID,"specListID":specListID,"workDesc":$("#workDesc").val(),"packageDesc":$("#packageDesc").val(),"evalRemark":$("#evalRemark").val()};
	$.ajax({
		type : "POST",
		async : false,
		url : "/JHTEvaluation/evalDetailUpdate4NoComp.do",
		data : evalDetailData,
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				alert("报价成品描述保存成功!");
			}else{
				alert(jsonObj.msg);
			}
		}
	});
	
}


//花型新增一行
function addRows(){
	var html = "<tr><td><input placeholder=\"颜色\" type=\"text\" name=\"colorName\" class=\"form-control\"></td>"
			+"<td><input type=\"text\" class=\"form-control\"></td>"
			+"<td><input type=\"text\" class=\"form-control\"></td>"
			+"<td><input type=\"text\" class=\"form-control\"></td>"
			+"<td></td>"
			+"<td><a onClick=\"deleteRows(this);\" href=\"javaScript:void(0);\" class=\"btn btn-sm btn-icon btn-success\">-</a></td></tr>";
	$("#colorSelBody").append(html);
}

//花型删除一行
function deleteRows(obj){
	$(obj).parents("tr").remove();
}

//网型新增一行
function patternAddRows(obj){
	var html = '<tr><td><input type="text" class="form-control"></td>'
			+'<td><input type="text" class="form-control"></td>'
			+'<td><input type="checkbox" name="options"></td>'
			+'<td><input type="checkbox" name="options"></td>'
			+'<td><input type="checkbox" name="options"></td>'
			+'<td><input type="checkbox" name="options"></td>'
			+'<td><a onClick="patternDelRows(this);" href="javaScript:void(0);" class="btn btn-sm btn-icon btn-success">-</a></td></tr>';
	$(obj).parents("tr").before(html);
}

//网型删除一行
function patternDelRows(obj){
	$(obj).parents("tr").remove();
}

//规格中新增一行
function specAddRows(obj){
	var html = '<tr><td><input type="checkbox" name="options"></td>'
			+'<td><input type="text" class="form-control"></td>'
			+'<td><input type="text" class="form-control"></td>'
			+'<td><input type="text" class="form-control"></td>'
			+'<td><input type="text" class="form-control"></td>'
			+'<td><input type="text" class="form-control"></td>'
			+'<td><a onClick="specDelRows(this);" href="javaScript:void(0);" class="btn btn-sm btn-icon btn-success">-</a></td></tr>';
	$("#specBody").append(html);
}

//规格删除一行
function specDelRows(obj){
	$(obj).parents("tr").remove();
}

$(function() {
	if(typeof(evalHeadData)!="undefined" && evalHeadData!={}){
		$("#productNameEver").val(evalHeadData.productName);
	}

});