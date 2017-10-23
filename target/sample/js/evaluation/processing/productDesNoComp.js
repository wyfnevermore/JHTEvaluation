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
		var firstColorName = $("#colorSelBody").find("input[name='colorName']").val();
		var otheResult = [{"firstColorName":firstColorName}];
		return otheResult;
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

function getExcelCompJosnStr(){
	var jsonResult=[];
	var jsonObj = {};
	
	var specResult=[];
	var valueTrs = $("#specSel").find("tr");
	var tds;
	for(var i=1;i<valueTrs.length-1;i++){
		tds = valueTrs[i].children;
		if(tds[0].children[0].checked){
			specResult.push({"specName":tds[1].children[0].value,"length":tds[2].children[0].value,"width":tds[3].children[0].value,"height":tds[4].children[0].value,"other":tds[5].children[0].value});
		}
	}
	
	jsonObj["compName"] = evalHeadData.productName;
	jsonObj["compCount"] = "";
	jsonObj["specJson"] = JSON.stringify(specResult);
	jsonResult.push(jsonObj);
	return JSON.stringify(jsonResult);
}

function descToMaterial(){
    var transId = "materialCost";
    window.parent.tabIframe(transId);
}
function setCompSelect2Material(){
	window.parent.setCompSelect2Material([evalHeadData.productName]);
}

function saveComponentList(){
	var flag = false;
	var patternJson = JSON.stringify(getColor());
	var netTypeJson = JSON.stringify(getPattern());
	var specJson = JSON.stringify(getSpec());
	var specSizeOtherName = $("#specSel").find("input[name='specOtherName']").val();
	var comListJson = [{"patternJson":patternJson,"netTypeJson":netTypeJson,"specJson":specJson,
		"specSizeOtherName":specSizeOtherName}];
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/componentSave.do?evalDetailID="+evalDetailID+"&workDesc="+$("#workDesc").val()+"&packageDesc="+$("#packageDesc").val()+"&evalRemark="+$("#evalRemark").val()+"&lightColorVal="+eval_colorCost["浅"]+"&middleColorVal="+eval_colorCost["中"]+"&deepColorVal="+eval_colorCost["深"]+"&",
		data : JSON.stringify(comListJson),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			result = json.msg;
			if(jsonObj.flag){
				flag = true;
			}else{
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

//保存进入材料核算
function saveEvalDetail(){
	if(opraType=="view"){
		descToMaterial();
		return;
	}
	if(!checkColor()||!checkSpec()){
		return;
	}
	if(!saveComponentList()){
		return;
	}
	getColor();
	setSpecParent();
	setCompSelect2Material();
	descToMaterial();
	var transData = getTransData();
	window.parent.productDesNoCompToNext(transData);
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

/*
 * 复制或查看时，恢复页面数据
 * @returns
 */
function reviewPage(){
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/getCompListByDetailID.do?evalDetailID="+evalDetailID,
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
	//<------------------------颜色框----------------------->
	eval_colorCost["浅"] = evalHeadData.evalDetail.lightColorVal;
	eval_colorCost["中"] = evalHeadData.evalDetail.middleColorVal;
	eval_colorCost["深"] = evalHeadData.evalDetail.deepColorVal;
	var colorObj=[];
	if(jsonData[0].colorVal !=""){
		colorObj =  eval('('+jsonData[0].patternJson+')');
		var firstColorName = colorObj[0].pattern;
		if(colorObj[0].hasOwnProperty("firstColorName")){
			$("#colorSelBody").find("input[name='colorName']").val(firstColorName);
			$("#colorSelBody").find("input[name='otherCheckBox']").prop("check",true);
			return;
		}
		var colorKeyVal = {};
		colorKeyVal[firstColorName] = 0;
		$("#colorSelBody").find("input[name='colorName']").val(firstColorName);
		var degreeKeyVal = {"浅":1,"中":2,"深":3};
		var lineNo = 0;//最大行号
		for(var i=0;i<colorObj.length;i++){
			var colorTrs = $("#colorSelBody").find("tr");
			var colorKeyTmp = colorObj[i].pattern;
			var degreeKeyTmp = colorObj[i].depth;
			var entryValueTmp = colorObj[i].entryValue;
			if(colorKeyVal.hasOwnProperty(colorKeyTmp)){
				colorTrs[colorKeyVal[colorKeyTmp]].children[degreeKeyVal[degreeKeyTmp]].children[0].value=entryValueTmp;
			}else{
				var html = "<tr><td><input type=\"text\" value=\""+colorKeyTmp+"\" name=\"colorName\" class=\"form-control\"></td>"
					+"<td><input type=\"text\" class=\"form-control\"></td>"
					+"<td><input type=\"text\" class=\"form-control\"></td>"
					+"<td><input type=\"text\" class=\"form-control\"></td>"
					+"<td></td>"
					+"<td><a onClick=\"deleteRows(this);\" href=\"javaScript:void(0);\" class=\"btn btn-sm btn-icon btn-success\">-</a></td></tr>";
				$("#colorSelBody").append(html);
				lineNo++;
				colorKeyVal[colorKeyTmp] = lineNo;
				colorTrs = $("#colorSelBody").find("tr");
				colorTrs[colorKeyVal[colorKeyTmp]].children[degreeKeyVal[degreeKeyTmp]].children[0].value=entryValueTmp;
			}
		}
		$("#colorSel").find("tr:eq(1)").find("th:eq(1)").find("input").val(eval_colorCost["浅"]);
		$("#colorSel").find("tr:eq(1)").find("th:eq(2)").find("input").val(eval_colorCost["中"]);
		$("#colorSel").find("tr:eq(1)").find("th:eq(3)").find("input").val(eval_colorCost["深"]);
	}
	//<------------------------花型框----------------------->
	var pattern = jsonData[0].netTypeJson;
	var valueTrs = $("#patternSel").find("tr");
	if(pattern !=""){
		var wangxingJson = {"平网":2,"圆网64CM":3,"圆网91CM":4};
		var patternObj = eval('('+pattern+')');
		for(var q=0;q<patternObj.length;q++){//遍历所有存的元素
			for(var i=1;i<valueTrs.length-1;i++){//遍历所有行
				var banxingshuzu = ['A版','B版','C版'];
				if(i==valueTrs.length-2 && (patternObj[q].netType!=valueTrs[i].children[0].innerText || $.inArray(patternObj[q].protoType,banxingshuzu)<0)){
					banxingshuzu.push(patternObj[q].protoType);
					//新画行
					if(!wangxingJson.hasOwnProperty(patternObj[q].halfProduct)){
						wangxingJson[patternObj[q].halfProduct] = 5;
						$("#patternInput").val(patternObj[q].halfProduct);
					}
					var html = '<tr><td><input type="text" class="form-control" value="'+patternObj[q].netType+'"></td>'
						+'<td><input type="text" class="form-control" value="'+patternObj[q].protoType+'"></td>';
					if(wangxingJson[patternObj[q].halfProduct]==2){
						html += '<td><input type="checkbox" name="options" checked></td>';
						html += '<td><input type="checkbox" name="options" ></td>';
						html += '<td><input type="checkbox" name="options" ></td>';
						html += '<td><input type="checkbox" name="options" ></td>';
					}else if(wangxingJson[patternObj[q].halfProduct]==3){
						html += '<td><input type="checkbox" name="options" ></td>';
						html += '<td><input type="checkbox" name="options" checked></td>';
						html += '<td><input type="checkbox" name="options" ></td>';
						html += '<td><input type="checkbox" name="options" ></td>';
					}else if(wangxingJson[patternObj[q].halfProduct]==4){
						html += '<td><input type="checkbox" name="options" ></td>';
						html += '<td><input type="checkbox" name="options" ></td>';
						html += '<td><input type="checkbox" name="options" checked></td>';
						html += '<td><input type="checkbox" name="options" ></td>';
					}else if(wangxingJson[patternObj[q].halfProduct]==5){
						html += '<td><input type="checkbox" name="options" ></td>';
						html += '<td><input type="checkbox" name="options" ></td>';
						html += '<td><input type="checkbox" name="options" ></td>';
						html += '<td><input type="checkbox" name="options" checked></td>';
					}
					html += '<td><a onClick="patternDelRows(this);" href="javaScript:void(0);" class="btn btn-sm btn-icon btn-success">-</a></td></tr>';
					$("#patternSel").find("tr:last").before(html);
					break;
				}
				if(patternObj[q].netType==valueTrs[i].children[0].innerText && $.inArray(patternObj[q].protoType,banxingshuzu)>-1){
					if(wangxingJson.hasOwnProperty(patternObj[q].halfProduct)){
						$(valueTrs[i].children[wangxingJson[patternObj[q].halfProduct]].children).prop("checked",true);
						$(valueTrs[i].children[1].children).val(patternObj[q].protoType);
						break;
					}else{
						wangxingJson[patternObj[q].halfProduct] = 5;
						$("#patternInput").val(patternObj[q].halfProduct);
						$(valueTrs[i].children[5].children).prop("checked",true);
						$(valueTrs[i].children[1].children).val(patternObj[q].protoType);
						break;
					}
					
				}
				
			}
		}
	}
	//<------------------------规格框----------------------->
	var spec = jsonData[0].specJson; //存的规格数据
	var otherSpecName = jsonData[0].specSizeOtherName;//存的其他名称
	if(otherSpecName!=""){
		$("#specSel").find("tr:first").find("th:eq(5)").find("input").val(otherSpecName);
	}
	if(spec!=""){
		var specObj = eval('('+spec+')');
		otherSpecName = specObj[0].other;
		
		//材料里规格长宽高恢复的时候用
		var parentSpecJson = {};
		for(var j=0;j<specObj.length;j++){
			parentSpecJson[specObj[j].specName] = {"Length":specObj[j].length,"Width":specObj[j].width,"Height":specObj[j].height,"other":specObj[j].other};
		}
		window.parent.specSel = parentSpecJson;
		
		for(var q=0;q<specObj.length;q++){//遍历所有元素
			var isFinded = false;
			var valueTrs = $("#specBody").find("tr");
			var tds;
			for(var i=0;i<valueTrs.length;i++){//遍历所有行
				tds = valueTrs[i].children;
				if(tds[1].children[0].value == specObj[q].specName){
					$(tds[0].children[0]).prop("checked",true);
					$(tds[1].children[0]).val(specObj[q].specName);
					$(tds[2].children[0]).val(specObj[q].length);
					$(tds[3].children[0]).val(specObj[q].width);
					$(tds[4].children[0]).val(specObj[q].height);
					$(tds[5].children[0]).val(specObj[q].other);
					isFinded = true;
					break;
				}
			}
			if(!isFinded){
				var html = '<tr><td><input type="checkbox" name="options" checked></td>'
					+'<td><input type="text" value="'+specObj[q].specName+'" class="form-control"></td>'
					+'<td><input type="text" value="'+specObj[q].length+'" class="form-control"></td>'
					+'<td><input type="text" value="'+specObj[q].width+'" class="form-control"></td>'
					+'<td><input type="text" value="'+specObj[q].height+'" class="form-control"></td>'
					+'<td><input type="text" value="'+specObj[q].other+'" class="form-control"></td>'
					+'<td><a onClick="specDelRows(this);" href="javaScript:void(0);" class="btn btn-sm btn-icon btn-success">-</a></td></tr>';
			$("#specBody").append(html);
			}
		}
	}
	
	$("#evalRemark").val(evalHeadData.evalDetail.evalRemark);
	$("#workDesc").val(evalHeadData.evalDetail.workDesc);
	$("#packageDesc").val(evalHeadData.evalDetail.packageDesc);

}



$(function() {
	if(typeof(evalHeadData)!="undefined" && evalHeadData!={}){
		$("#productNameEver").val(evalHeadData.productName);
	}
	//复制和查看的页面恢复
	if(opraType=="edit"||opraType=="view"){
		reviewPage();
	}
});