/**
 * 获取颜色选择
 * @returns
 */
var state = 1;
var compTr;

function getColor(){
	if(!checkColor()) return;
	
	var otherCheckBoxChecked = false;
	$("#colorSel").find("input[name='otherCheckBox']").each(function(){
		if($(this).prop('checked')){
			otherCheckBoxChecked = true;
			return false;
		}
	});
	if($(compTr.children[0]).text()=="组件1"){
		window.parent.colorOtherCheckChecked = otherCheckBoxChecked;
	}
	if(otherCheckBoxChecked){
		var firstColorName = $("#colorSelBody").find("input[name='colorName']").val();
		$(compTr.children[1].children[0]).val(JSON.stringify([{"firstColorName":firstColorName}]));
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
	if(colorResult.length<1){
		$(compTr.children[1].children[0]).val("");
	}else{
		var result = JSON.stringify(colorResult);
		$(compTr.children[1].children[0]).val(result);
	}
	if($(compTr.children[0]).text()=="组件1"){
		window.parent.dyeCost = eval(fenzi/fenmu).toFixed(2);//染色的加权平均费用
	}
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

//校验网型选择
function checkPattern(){
	// 遍历所有input，现在不要求有判断了
	var isInput1Null=true;
	var isInputNull=true;
	var flag = false;
	$("#patternSel input:checkbox").each(function(){
		if($(this).prop('checked')){
			// 判断规格是否为空
			if($(this).parents("tr").find("td:eq(0)").find("input").val()=="" ){
				$(this).parents("tr").find("td:eq(0)").find("input").addClass('parsley-error');
				isInputNull = false;
			}else{
				$(this).parents("tr").find("td:eq(0)").find("input").removeClass('parsley-error');
			}
			if($(this).parents("tr").find("td:eq(1)").find("input").val()=="" ){
				$(this).parents("tr").find("td:eq(1)").find("input").addClass('parsley-error');
				isInputNull = false;
			}else{
				$(this).parents("tr").find("td:eq(1)").find("input").removeClass('parsley-error');
			}
			
			// 判断抬头input是否为空
			if($(this).parents("tr").find("td:eq(5)").find("input").prop('checked')){
				if($("#patternInput").val()==""){
					isInput1Null = false;
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
	if(!checkPattern()){return;}
	var netType;//网型
	var tdtmpTrProtoType;//版型
	var patternResult=[];
	var valueTrs = $("#patternSel").find("tr");
	var colomnsCount = valueTrs[0].children.length-4;//第一行第三列
	//var otherHalfProduct = valueTrs[0].children[5].children[0].value;
	var halfProduct;
	//给前面
	var tdtmp;
	var netNameArray = ['','','平网','圆网64CM','圆网91CM'];
	netNameArray.push($(valueTrs[0]).find("th").eq(5).find("input").val());
	
	for(var i=1;i<valueTrs.length-1;i++){//一行开始，最后一行不算
		for(var j=2;j<6;j++){//一列
			tdtmp = valueTrs[i].children[j].children[0];
			tdtmpTrProtoType = valueTrs[i].children[1].children[0].value;//版面类型
			if($(valueTrs[i]).find("td").eq(0).find("input").length>0){
				netType = $(valueTrs[i]).find("td:eq(0)").find("input").val();
			}else{
				netType = $(valueTrs[i]).find("td:eq(0)").text();
			}
			if(tdtmp.checked){
				patternResult.push({"netType":netType,"protoType":tdtmpTrProtoType,"halfProduct":netNameArray[j]});
			}
		}
	}
	
	$('#modal-form1').modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	if(patternResult.length<1){
		$(compTr.children[2].children[0]).val("");
	}else{
		var result = JSON.stringify(patternResult);
		//compTr.children("td").eq(2).find('input').val(result);
		$(compTr.children[2].children[0]).val(result);
	}
	return patternResult;
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
	var otherValueName = $(valueTrs[0]).find("th:eq(5)").find("input").val();
	for(var i=1;i<valueTrs.length-1;i++){
		tds = valueTrs[i].children;
		if(tds[0].children[0].checked){
			specResult.push({"specName":tds[1].children[0].value,"length":tds[2].children[0].value,"width":tds[3].children[0].value,"height":tds[4].children[0].value,"other":tds[5].children[0].value});
		}
	}
	$('#modal-form2').modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	if(specResult.length<1){
		$(compTr.children[3].children[0]).val("");
	}else{
		var result = JSON.stringify(specResult);
		$(compTr.children[3].children[0]).val(result);
	}
	$(compTr.children[11].children[0]).val(otherValueName);
	return specResult;
}

/**
 * 获取组件
 * @returns
 */
function getComponent(){
	var compoResult=[];
	var valueTrs = $("#compoSel").find("tr");
	var tds;
	for(var i=1;i<valueTrs.length;i++){
		tds = valueTrs[i].children;
		compoResult.push({"compSerialNum":tds[0].innerText,"compName":tds[4].children[0].value,"compNum":tds[5].children[0].value,"specListID":tds[3].children[0].value,"patternListID":tds[1].children[0].value,"netTypeListID":tds[2].children[0].value});
	}
	return compoResult;
}

/**
 * 获取报价成品描述的要传的数据
 * @returns
 */
function getTransData(){
	var compData = getComponent();
	var transData = [];
	var specStr = eval('('+compData[0].specListID+')')[0].specName;
	for (var i=0;i<compData.length;i++){
		transData.push({"spec":specStr,"halfProductClassify":compData[i].compName,"materailDescribe":""});
	}
	return transData;
}

function descToMaterial(){
	var transData = getTransData();
	window.parent.productDesNoCompToNext(transData);
    var transId = "materialCost";
    window.parent.tabIframe(transId);
}

function setSpecParent(){
	//var specJson = {"S/B":{"Length":"1","Width":"2","Height":"3"},"D/B":{"Length":"4","Width":"5","Height":"6"}};
	// 获取长宽高
	var specJson ={};
	var firstSpecObj = eval('('+$("#compBody").find("tr:eq(0)").find("td:eq(3)").children().val()+')');
	for(var i=0;i<firstSpecObj.length;i++){
		specJson[firstSpecObj[i].specName] = {"Length":firstSpecObj[i].length,"Width":firstSpecObj[i].width,"Height":firstSpecObj[i].height,"other":firstSpecObj[i].other};
	}
	window.parent.specSel= specJson;
}
function setCompSelect2Material(){
	var CompSelected = [];
	$("#compBody").find("tr").each(function(){
		CompSelected.push($(this).find("td:eq(4)").children().val());
	});
	window.parent.setCompSelect2Material(CompSelected);
}

//设置组件成本比例
function setCompRatio(totalObj){
	var resultJson = {};
	var totalCount = 0;
	var keyTmp = "";
	var valueTmp = 0;
	var countTmp = 0;
	$("#compBody").find("tr").each(function(){
		keyTmp = $(this).find("td:eq(4)").find("input").val();
		countTmp = parseFloat($(this).find("td:eq(5)").find("input").val());
		if(totalObj.hasOwnProperty(keyTmp)){
			valueTmp = parseFloat(totalObj[keyTmp]);
		}else{
			valueTmp = 0;
		}
		totalCount += valueTmp*countTmp;
		if(resultJson.hasOwnProperty(keyTmp)){
			resultJson[keyTmp] = resultJson[keyTmp] + valueTmp*countTmp;
		}else{
			resultJson[keyTmp] = valueTmp*countTmp;
		}
	});
	$("#compBody").find("tr").each(function(){
		keyTmp = $(this).find("td:eq(4)").find("input").val();
		if(resultJson.hasOwnProperty(keyTmp)){
			$(this).find("td:eq(6)").find("input").val((100*resultJson[keyTmp]/totalCount).toFixed(2));
		}
	});
}

function saveEvalDetail(){
	//校验组件名称和数量
//	$("#compoForm").submit();
//	var mixf = !$("#compoForm input").hasClass('parsley-error');
//	if(!mixf){
//		return;
//	}
	if(!myValidate("compoForm")){
		alert("请检查输入数据");
		return;
	}
	//校验模态框的内容
	var valueTrs = $("#compBody").find("tr");
	var tds;
	for(var i=0;i<valueTrs.length;i++){
		//行元素
		tds = valueTrs[i].children;
		if(i==0){
			if(tds[1].children[0].value=="" || tds[3].children[0].value==""){
				alert("首组件的颜色、规格数据必填！");
				return;
			}
		}
		if(tds[3].children[0].value==""){
			alert("请补充规格数据");
			return;
		}
	}
	
	setSpecParent();
	setCompSelect2Material();
	descToMaterial();
	return;//暂时
	var ifContibue = true;
	//存颜色
	var colorData = getColor();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/colorSave.do",
		data : JSON.stringify(colorData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				$("#compoColor1").val(jsonObj.msg);
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
		url : "/JHTEvaluation/netTypeSave.do",
		data : JSON.stringify(patternData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				$("#compoNet1").val(jsonObj.msg);
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
		url : "/JHTEvaluation/specSave.do",
		data : JSON.stringify(specData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				$("#compoSpec1").val(jsonObj.msg);
			}else{
				ifContibue = false;
				alert(jsonObj.msg);
			}
		}
	});
	if(!ifContibue){
		return;
	}
	
	//存组件
	var compData = getComponent();
	var compListID = "";
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/componentSave.do",
		data : JSON.stringify(compData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				compListID = jsonObj.msg;
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
	var evalDetailData = {"evalDetailID":evalDetailID,"compListID":compListID,"workDesc":$("#workDesc").val(),"packageDesc":$("#packageDesc").val(),"evalRemark":$("#evalRemark").val()};
	$.ajax({
		type : "POST",
		async : false,
		url : "/JHTEvaluation/evalDetailUpdate.do",
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

//显示弹窗
function showColorForm(obj){
	compTr = $(obj).parents("tr")[0];
	//清空白蓝黑后面的自增行
	var colorValueInputTrs = $("#colorSelBody").find("tr");
	for(var i=1;i<colorValueInputTrs.length;i++){
		$(colorValueInputTrs[i]).remove();
	}
	//清空已输入内容
	$("#colorSelBody").find("input").each(function(){
		$(this).val("");
	});
	
	var colorString = compTr.children[1].children[0].value;
	var colorObj=[];
	if(colorString !=""){
		colorObj = eval('('+colorString+')');
	}else{
		$("#modal-form").modal('show');
		return;
	}
	var firstColorName = colorObj[0].pattern;
	if(colorObj[0].hasOwnProperty("firstColorName")){
		$("#colorSelBody").find("input[name='colorName']").val(firstColorName);
		$("#colorSelBody").find("input[name='otherCheckBox']").prop("check",true);
		$("#modal-form").modal('show'); 
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
	$("#modal-form").modal('show'); 
}

function showPatternForm(obj){
	$("#patternSel").find("tr").each(function(){//先全部清空
		if($(this).find("td:eq(0)").find("input").attr("type")=="text"){
			$(this).remove();
		}
	});
	$("#patternSel").find("input").each(function(){//先全部清空
		$(this).removeAttr("checked");
	});
	$("#patternSel").find("select").each(function(){//先全部清空
		$(this).val("A版");
	});
	compTr = $(obj).parents("tr")[0];
	var pattern = compTr.children[2].children[0].value;
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
	$("#modal-form1").modal('show');
}

function showSpecForm(obj){
	var specValueInputTrs = $("#specBody").find("tr");
	for(var i=4;i<specValueInputTrs.length;i++){
		$(specValueInputTrs[i]).remove();
	}
	$("#specBody").find("input").each(function(){//先全部清空
		$(this).removeAttr("checked");
		if($(this).parent()[0].cellIndex!=1){
			$(this).val("");
		}
	});
	compTr = $(obj).parents("tr")[0];
	var spec = compTr.children[3].children[0].value; //存的规格数据
	var otherSpecName = compTr.children[11].children[0].value;//存的其他名称
	if(otherSpecName!=""){
		$("#specSel").find("tr:first").find("th:eq(5)").find("input").val(otherSpecName);
	}
	if(spec!=""){
		var specObj = eval('('+spec+')');
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
	$("#modal-form2").modal('show'); 
}






//新增一行
function addCompRow(){
	state++;
	var compName = "组件"+state;
	var html = "<tr><td>"+compName+"</td>"
      +"<td hidden=\"hidden\"><input type=\"hidden\"/></td>" 
      +"<td hidden=\"hidden\"><input type=\"hidden\" /></td>"
      +"<td hidden=\"hidden\"><input type=\"hidden\" /></td>"
	  +"<td><input type=\"text\" class=\"form-control\" data-required=\"true\"></td>"
	  +"<td><input type=\"text\" class=\"form-control\" data-required=\"true\" data-type=\"number\"></td>"
	  +"<td><input type=\"text\" class=\"form-control\"></td>"
      +"<td><a onclick=\"showColorForm(this)\" href=\"javascript:void(0)\" class=\"btn btn-sm btn-icon btn-danger\"><i class=\"fa fa-plus\"></i></a></td>"
      +"<td><a onclick=\"showPatternForm(this)\" href=\"javascript:void(0)\" class=\"btn btn-sm btn-icon btn-danger\" data-toggle=\"modal\"><i class=\"fa fa-plus\"></i></a></td>"
      +"<td><a onclick=\"showSpecForm(this)\" href=\"javascript:void(0)\" class=\"btn btn-sm btn-icon btn-danger\" data-toggle=\"modal\"><i class=\"fa fa-plus\"></i></a></td>"
      +"<td><div class=\"btn-group\"><a onclick=\"addCompRow()\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-plus\"></i></a></div>"
      +"&nbsp;<a onclick=\"delRow(this)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-minus\"></i></a></td><td hidden=\"hidden\"><input type=\"hidden\"/></td></tr>";
//通过表体id把显示文本显示到网页中
	$("#compBody").append(html);
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




//花型新增一行
function addRows(){
	var html = "<tr><td><input type=\"text\" name=\"colorName\" class=\"form-control\"></td>"
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
		$("#productNameEver1").val(evalHeadData.productName);
	}

});