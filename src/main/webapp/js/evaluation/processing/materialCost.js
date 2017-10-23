/**
全局变量如下
 */
var state = 0;//1为新增，2为编辑
var materialNo = 2;//材料的id序号
var tabGuidArray = ["specItem0"];
var tabGuidMap = {};

var tbodyId = "specItem0";//这玩意其实不是tbody的ID，是当前选中的tab下的div的ID
var isMaterialFirstRow;//是否是操作材料第一行的标记
var selMaterialFromObj;//弹出选择物料弹出框时，用来记录从哪个元素点击的
var selMaterialFromType;//弹出选择物料弹出框时，用来记录从半成品还是加工费弹出的
var curSpecSelName = "D/B";//当前操作的规格
var processClassifyDB = []; //取自数据库的加工分类
var processInfoDB = {}; //取自数据库的加工信息（单价、伸缩率、一等品率）
var processClassifyHtml = "<option value='手输加工分类'>手输加工分类</option>";
var processClassifyFengzhiDB = []; //缝制-取自数据库的加工分类
var processInfoFengzhiDB = {}; //缝制-取自数据库的加工信息（单价、伸缩率、一等品率、说明）
var processClassifyFengzhiHtml = "<option value='手输加工分类'>手动输入分类</option>";

var materialName1Flag = true;//采购中的物料名称
function changeMaterialName1Flag(flag){
	materialName1Flag = flag;
	if(!flag){
		$("#materialPrice1").val("");
		$("#materialPrice1").attr("mCode","");
	}
}
var referFacHalfProdFlag = true;//半成品的参考工厂
function changeReferFacHalfProdFlag(flag){
	referFacHalfProdFlag = flag;
}
var materialNameFlag = true;//加工中的物料名称
function changeMaterialNameFlag(flag){
	materialNameFlag = flag;
	if(!flag){
		$("#materialPrice").val("");
		$("#materialPrice").attr("mCode","");
	}
}
var processNameFengzhiFlag = true;//加工-缝制的加工名称
function changeProcessFengzhiFlag(flag){
	if(!flag){
		$("#processCost").val("");
		$("#processDesc").val("");
		$("#processFactory").val("");
	}
	processNameFengzhiFlag = flag;
}

//===================================================材料部分Start==========================================================
function changeMaterial1Price(paramJson){
	$("#materialPrice1").val(paramJson.price);
	$("#materialPrice1").attr("mCode",paramJson.sku);
}

function changeMaterialPrice(paramJson){
	$("#materialPrice").val(paramJson.price);
	$("#materialPrice").attr("mCode",paramJson.sku);
}

function changePdMaterialPrice(paramJson,el){//原材料名称绑定的下拉框方法
	el.parents("tr").find("input[name='productCost']").val(paramJson.price);
	el.parents("tr").find("td:eq(6)").text(paramJson.sku);
}

function jxMaterialManual(){
	if($("#jingXiaoIsManual").is(':checked')){
		$("#materialPrice1").attr("mCode","");
		$("#materialName1").unbind("keyup").unbind("compositionend");
		materialName1Flag = true;
	}else{
		bindSearchEl($("#materialName1"),path+"/dataBase-config/eval-materialName.data",changeMaterialName1Flag,changeMaterial1Price,"name",["sku","name"],308);
		materialName1Flag = false;
	}
}
function hhMaterialManual(){
	if($("#isManual").is(':checked')){
		$("#materialPrice").attr("mCode","");
		$("#materialName").unbind("keyup").unbind("compositionend");
		materialNameFlag = true;
	}else{
		bindSearchEl($("#materialName"),path+"/dataBase-config/eval-materialName.data",changeMaterialNameFlag,changeMaterialPrice,"name",["sku","name"],308);
		materialNameFlag = false;
	}
}

function pdMaterialManual(){//原材料名称“手动”勾选与否触发的方法
	$("#materialBody").find("input[name='materialNameC']").each(function(){
		if($(this).is(':checked')){
			$(this).parents("tr").find("input[name='productName']").unbind("keyup").unbind("compositionend");
			$(this).parents("tr").find("td:eq(6)").text("");
		}else{
			bindSearchEl($(this).parents("tr").find("input[name='productName']"),path+"/dataBase-config/eval-materialName.data",null,changePdMaterialPrice,"name",["sku","name"],308);
		}
	});
}

function changeProcessInfo(param,el){
	el.parents("tr").find("input[name='processValueInput']").val(param.cost);
	el.parents("tr").find("input[name='firstRate']").val(param.firstRate);
	el.parents("tr").find("input[name='expansionRateInput']").val(param.expansionRate);
	el.parents("tr").find("input[name='factoryInput']").val(param.factory);
}
function changeProcessFengzhiInfo(param,el){
	$("#processCost").val(param.cost);
	$("#processDesc").val(param.processDesc);
	$("#processFactory").val(param.factory);
	calProcessCost();
}

function changeProcessClassify(obj){
	$(obj).parents("tr").find("input").each(function(){
		$(this).val("");
	});
	var processNameInputObj = $(obj).parents("tr").find("input[name=processNameInput]");
	if($(obj).parents("tr").find("select[name='MachType']").val()=="手输加工分类"){
		processNameInputObj.unbind("keyup").unbind("compositionend");
		return;
	}
	if(!window.parent.colorOtherCheckChecked && $(obj).parents("tr").find("select[name='MachType']").val().indexOf("染色")>-1){
		$(obj).parents("tr").find("input[name='processValueInput']").val(window.parent.dyeCost);
		processNameInputObj.unbind("keyup").unbind("compositionend");
		return;
	}else{
		var processInfoTmp = processInfoDB[$(obj).parents("tr").find("select[name='MachType']").val()];
		bindSearchEl(processNameInputObj,processInfoTmp,null,changeProcessInfo,"processName",["processName"],313);
	}
}

function changeFengzhiClassify(obj){
	$(obj).parents("tr").find("input").each(function(){
		$(this).val("");
	});
	calProcessCost();
	if($("#classifyType").val()=="手输加工分类"){
		$("#processName").unbind("keyup").unbind("compositionend");
		processNameFengzhiFlag = true;
		return;
	}
	var processInfoTmp = processInfoFengzhiDB[$("#classifyType").val()];
	bindSearchEl($("#processName"),processInfoTmp,changeProcessFengzhiFlag,changeProcessFengzhiInfo,"processName",["processName"],313);
}

//增加，删除，编辑
//新增上部table
function addMaterial(){
	state = 1;
	//获取选中的行
//	tr = $(obj).closest("tr");
//	if((tr.find("td:eq(5)").html()=="")&&(tr.find("td:eq(0)").html()=="物料1")){
//		alert("初始行,请先完成编辑再添加其他行");
//		return;
//	}
	$("#handleType").modal("show");
}

//编辑当前行
var tr ="";
function updateMaterialWindow(obj,isFirstRow){
	isMaterialFirstRow = isFirstRow;
	state = 2;//编辑
	//获取选中的行
	tr = $(obj).closest("tr");
	if(isMaterialFirstRow && tr.find("td:eq(3)").html()==""){
		//物料的第一行（此时为初始进入）
		$("#handleType").modal("show");
		return;
	}
	if(tr.find("td:eq(3)").html()=="采购"){
		//获取列值，赋值给弹出框
		$("#materialClassify1").val(tr.find("td:eq(1)").html());
		$("#materialName1").val(tr.find("td:eq(2)").html());
		$("#materialPrice1").val(tr.find("td:eq(4)").html());
		$("#remark1").val(tr.find("td:eq(5)").html());
		$("#jingXiaoIsManual").prop("checked",eval(tr.find("td:eq(6)").html()));
		jxMaterialManual();
		$("#jingxiao").modal('show'); 
	}else{
		//获取列值，赋值给弹出框
		$("#materialClassify").val(tr.find("td:eq(1)").html());
		$("#materialName").val(tr.find("td:eq(2)").html());
		$("#isManual").prop("checked",eval(tr.find("td:eq(6)").html()));
		$("#remark").val(tr.find("td:eq(5)").html());
		$("#materialBody").empty();
		var josnData = eval('('+tr.find("td:eq(9)")[0].children[0].value+')');
		var html = "";
		for(var i=0;i<josnData.length;i++){
			isCheckedR = josnData[i].isManual?"checked":"";
			html = html + '<tr><td width="440px;"><input type="text" name="productName" placeholder="原材料名称" value="'+josnData[i].name+'" class="form-control"></td>'
			  +'<td width="43px;" style="text-align:left"><input type="checkbox" '+isCheckedR+' class="parsley-validated" name="materialNameC" onchange="pdMaterialManual()">手动<a onclick="openMaterialCalSelModal(this,\'fromProcess\')" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></td>'
			  +'<td><input type="text" placeholder="原材料单价(￥)" value="'+josnData[i].price+'" class="form-control" data-type="number"></td>'
			  +'<td style="text-align:left;"><a onClick="materialPrice4Process(this)" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>'
			  +'<td><input style="float:left;width:35%" type="text" name="productLossUp" value="'+josnData[i].unitLoss+'" placeholder="单耗" class="form-control" data-type="number">'
			  +'<a onclick="materialPrice4Process(this)" href="javascript:void(0)"><i style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>'
			  +'<input style="float:right;width:55%" type="text" placeholder="参考工厂" value="'+josnData[i].factory+'" class="form-control" ></td>'
			  +'<td><div style="float:left;"><div  class="btn-group"><a href="javaScript:materialBodyAdd();"><i class="fa fa-plus"></i></a></div>'
			  +'<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>'
			  +'</div></td>'
			  +'<td hidden="hidden">'+josnData[i].sku+'</td>'
			  +'</tr>';
		}
		$("#materialBody").append(html);
		
		pdMaterialManual();
		
		$("#processBody").empty();
		josnData = eval('('+tr.find("td:eq(10)")[0].children[0].value+')');
		html = "";
		for(var i=0;i<josnData.length;i++){
			var processClassifyHtmlTmp = processClassifyHtml;
			processClassifyHtmlTmp = processClassifyHtmlTmp.replace("value='"+josnData[i].classify+"'","value='"+josnData[i].classify+"' selected");
			html = html + '<tr>'
			+'<td ><select  style="width:28%;float:left;" placeholder="加工类型" name="MachType" style="width:50px;" class="input-sm inline" onchange="changeProcessClassify(this)">'+processClassifyHtmlTmp+'</select>'
			+'<input style="width:72%;float:right;" type="text" name="processNameInput" placeholder="加工名称" value="'+josnData[i].name+'" class="form-control" onblur="getRanseCost(this)"></td>'
			+'<td  colspan="2">'
			+'<input type="text" style="float:left;width:45%" name="expansionRateInput" placeholder="损耗1" value="'+josnData[i].expansionRate+'" class="form-control">'
			+'<a onClick="selFormulaEle4ProcessBodyS(this,\'formulaInput1\',\'formulaInput2\')" href="javascript:void(0)"><i style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>'
			+'<input style="float:right;width:45%" type="text" name="firstRate" placeholder="损耗2" value="'+josnData[i].firstRate+'" class="form-control"></td>'
			+ '<td style="text-align:left;"><a onClick="selFormulaEle4ProcessBodyY(this,\'formulaInput1\',\'formulaInput2\')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td><td>'
			+'<input  style="float:left;width:35%" type="text" name="processValueInput" placeholder="单价(￥)" value="'+josnData[i].price+'" class="form-control" data-type="number">'
			+'<a onClick="materialPrice4ProcessBody(this)" href="javascript:void(0)"><i  style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>'
			+'<input style="float:right;width:55%" type="text" name="factoryInput" placeholder="参考工厂" value="'+josnData[i].factory+'" class="form-control" ></td>'
			+'<td style="width:30px;"><div style="float:right;"><div class="btn-group"><a href="javaScript:processBodyAdd();"><i class="fa fa-plus"></i></a></div>'
			+'&nbsp;<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>'
			+'</div></td></tr>';
		}
		$("#processBody").append(html);
		$("#processBody").find("input[name='processNameInput']").each(function(){
			if(typeof($._data($(this)[0], "events"))=="undefined"){
				bindSearchEl($(this),processInfoDB[processClassifyDB[0]],null,changeProcessInfo,"processName",["processName"],313);
			}
		});
		if(html==""){
			html = '<tr>'
				+'<td ><select  style="width:28%;float:left;" placeholder="加工类型" name="MachType" style="width:50px;" class="input-sm inline" onchange="changeProcessClassify(this)">'+processClassifyHtml+'</select>'
				+'<input style="width:72%;float:right;" type="text" name="processNameInput" placeholder="加工名称" class="form-control" onblur="getRanseCost(this)"></td>'
				+'<td  colspan="2">'
				+'<input type="text" style="float:left;width:45%" name="expansionRateInput" placeholder="损耗1" class="form-control">'
				+'<a onClick="selFormulaEle4ProcessBodyS(this,\'formulaInput1\',\'formulaInput2\')" href="javascript:void(0)"><i style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>'
				+'<input style="float:right;width:45%" type="text" name="firstRate" placeholder="损耗2" class="form-control"></td>'
				+ '<td style="text-align:left;"><a onClick="selFormulaEle4ProcessBodyY(this,\'formulaInput1\',\'formulaInput2\')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td><td>'
				+'<input  style="float:left;width:35%" type="text" name="processValueInput" placeholder="单价(￥)" class="form-control" data-type="number">'
				+'<a onClick="materialPrice4ProcessBody(this)" href="javascript:void(0)"><i  style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>'
				+'<input style="float:right;width:55%" type="text" name="factoryInput" placeholder="参考工厂" class="form-control" ></td>'
				+'<td style="width:30px;"><div style="float:right;"><div class="btn-group"><a href="javaScript:processBodyAdd();"><i class="fa fa-plus"></i></a></div>'
				+'&nbsp;<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>'
				+'</div></td></tr>';
			$("#processBody").append(html);
		}
		
		$("#otherBody").empty();
		josnData = eval('('+tr.find("td:eq(11)")[0].children[0].value+')');
		html = "";
		for(var i=0;i<josnData.length;i++){
			html = html + '<tr><td><input type="text" placeholder="其他" value="'+josnData[i].name+'" class="form-control" ></td>'
			  +'<td></td>'
			  +'<td><input type="text" placeholder="单价(￥)" value="'+josnData[i].price+'" class="form-control" data-type="number" data-required="false"></td>'
			  +'<td style="text-align:left;"><a onClick="materialPrice4Process(this)" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>'
			  +'<td><div style="float:left;"><div  class="btn-group"><a href="javaScript:otherBodyAdd();" data-toggle="modal"><i class="fa fa-plus"></i></a></div>'
			  +'<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>'
			  +'</div></td></tr>';
		}
		if(html==""){
			html = '<tr><td><input type="text" placeholder="其他" value="" class="form-control" ></td>'
			  +'<td></td>'
			  +'<td><input type="text" placeholder="单价(￥)" value="" class="form-control" data-type="number" data-required="false"></td>'
			  +'<td style="text-align:left;"><a onClick="materialPrice4Process(this)" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>'
			  +'<td><div style="float:left;"><div  class="btn-group"><a href="javaScript:otherBodyAdd();" data-toggle="modal"><i class="fa fa-plus"></i></a></div>'
			  +'<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>'
			  +'</div></td></tr>';
		}
		$("#otherBody").append(html);
		
		$("#formulaInput1").val(tr.find("td:eq(7)")[0].children[0].value);
		$("#formulaInput2").val(tr.find("td:eq(8)")[0].children[0].value);
		$("#materialPrice").val(tr.find("td:eq(4)").html());
		hhMaterialManual();
		$("#hunhe").modal('show'); 
	}
}

function showModal(){
	var modalType = $("#modalType").val();
	if(modalType=="jingxiao"){
		$("#jingxiao").find("input").each(function(){//先全部清空
			$(this).removeAttr("checked");
			$(this).val("");
		});
		bindSearchEl($("#materialName1"),path+"/dataBase-config/eval-materialName.data",changeMaterialName1Flag,changeMaterial1Price,"name",["sku","name"],308);
		$("#"+modalType).modal('show'); 
	}else{
		bindSearchEl($("#materialName"),path+"/dataBase-config/eval-materialName.data",changeMaterialNameFlag,changeMaterialPrice,"name",["sku","name"],308);
		$("#hunhe").modal('show'); 
	}
}

//材料测算时，点击确定的时候，根据state是1还是2判断是编辑还是新增
function updateMaterial(){
	if(state == 1){
		//弹出输入值校验
		var modalFormIdVal = "";
		if($("#modalType").val()=="jingxiao"){
			modalFormIdVal = "jingxiaoForm";
		}else{
			modalFormIdVal = "hunheForm";
		}
		
		if(!myValidate(modalFormIdVal)){
			alert("请检查输入内容");
			return;
		}
		var html;
		if($("#modalType").val()=="jingxiao"){
			if(!materialName1Flag){
				$("#materialName1").addClass('parsley-error');
				alert("请选择下拉列表中的数据，不能手输");
				return;
			}else{
				$("#materialName1").removeClass('parsley-error');
			}
			html = "<tr><td>物料"+materialNo+"</td>"
		    +"<td>"+$("#materialClassify1").val()+"</td>"
		    +"<td>"+$("#materialName1").val()+"</td>"
		    +"<td>采购</td>"
		    +"<td>"+$("#materialPrice1").val()+"</td>"
		    +"<td>"+$("#remark1").val()+"</td>"
		    +"<td style='display:none;'>"+$("#jingXiaoIsManual")[0].checked+"</td>"
		    +"<td style='display:none;'></td>"
		    +"<td style='display:none;'></td>"
		    +"<td style='display:none;'></td>"
		    +"<td style='display:none;'></td>"
		    +"<td style='display:none;'></td>"
		    +"<td style='display:none;'>"+$("#materialPrice1").attr("mCode")+"</td>"
			+"<td><div style＝\"float:left;\" class=\"btn-group\"><a onClick=\"addMaterial()\" href=\"javascript:void(0)\"><i class=\"fa fa-plus\"></i> </a></div>"
			+"&nbsp<a onClick='delBodyRow(this)' href='javascript:;'><i class=\"fa fa-minus\"></i></a>"
			+"&nbsp<div style＝\"float:right;\" class=\"btn-group\"> <a onClick=\"updateMaterialWindow(this,false)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
		//通过表体id把显示文本显示到
		}else{
			if(!materialNameFlag){
				$("#materialName").addClass('parsley-error');
				alert("请选择下拉列表中的数据，不能手输");
				return;
			}else{
				$("#materialName").removeClass('parsley-error');
			}
			var materialJsonData = [];
			var valueTrs = $("#materialBody").find("tr");//原材料名称类型
			var tds;
			for(var i=0;i<valueTrs.length;i++){
				tds = valueTrs[i].children;
				if(tds[0].children[0].value!=""){
					materialJsonData.push({"type":"原材料","name":tds[0].children[0].value,"isManual":tds[1].children[0].checked,"price":tds[2].children[0].value,"factory":tds[4].children[2].value,"unitLoss":tds[4].children[0].value,"sku":tds[6].innerText});
				}
			}
			var materialJsonStr = JSON.stringify(materialJsonData);
			
			var processJsonData = [];
			var valueTrs1 = $("#processBody").find("tr");
			for(var i=0;i<valueTrs1.length;i++){
				var priceTmp = $(valueTrs1[i]).find("input[name='processValueInput']").val();
				if(priceTmp!=""){
					processJsonData.push({"type":"加工","classify":$(valueTrs1[i]).find("select[name='MachType']").val(),"name":$(valueTrs1[i]).find("input[name='processNameInput']").val(),"expansionRate":$(valueTrs1[i]).find("input[name='expansionRateInput']").val(),"firstRate":$(valueTrs1[i]).find("input[name='firstRate']").val(),"price":priceTmp,"factory":$(valueTrs1[i]).find("input[name='factoryInput']").val()});
				}
			}
			var processJsonStr = JSON.stringify(processJsonData);
			
			var otherJsonData = [];
			var valueTrs2 = $("#otherBody").find("tr");
			var tds2;
			for(var i=0;i<valueTrs2.length;i++){
				tds2 = valueTrs2[i].children;
				if(tds2[2].children[0].value!=""){
					otherJsonData.push({"type":"其他","name":tds2[0].children[0].value,"price":tds2[2].children[0].value});
				}
			}
			var otherJsonStr = JSON.stringify(otherJsonData);
			
			
			html = "<tr><td>物料"+materialNo+"</td>"
		    +"<td>"+$("#materialClassify").val()+"</td>"
		    +"<td>"+$("#materialName").val()+"</td>"
		    +"<td>"+$("#modalType").find("option:selected").text()+"</td>"
		    +"<td>"+$("#materialPrice").val()+"</td>"
		    +"<td>"+$("#remark").val()+"</td>"
		    +"<td hidden='hidden'>"+$("#isManual")[0].checked+"</td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算表达式' value='"+$("#formulaInput1").val()+"'></td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算公式值' value='"+$("#formulaInput2").val()+"'></td>"
		    +"<td hidden='hidden'><input type='hidden' name='原材料JSON' value='"+materialJsonStr+"'></td>"
		    +"<td hidden='hidden'><input type='hidden' name='加工JSON' value='"+processJsonStr+"'></td>"
		    +"<td hidden='hidden'><input type='hidden' name='其他JSON' value='"+otherJsonStr+"'></td>"
		    +"<td hidden='hidden'>"+$("#materialPrice").attr("mCode")+"</td>"
			+"<td><div style＝\"float:left;\" class=\"btn-group\"><a onClick=\"addMaterial()\" href=\"javascript:void(0)\"><i class=\"fa fa-plus\"></i> </a></div>"
			+"&nbsp<a onClick='delBodyRow(this)' href='javascript:;'><i class=\"fa fa-minus\"></i></a>"
			+"&nbsp<div style＝\"float:right;\" class=\"btn-group\"> <a onClick=\"updateMaterialWindow(this,false)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
		//通过表体id把显示文本显示到网页中
		}
		$("#materialHead").append(html);
		materialNo++;
	}else if(state == 2){
		if(tr.find("td:eq(3)").html()=="采购" || (isMaterialFirstRow&&$("#modalType").val()=="jingxiao")){
			if(!materialName1Flag){
				$("#materialName1").addClass('parsley-error');
				alert("请选择下拉列表中的数据，不能手输");
				return;
			}else{
				$("#materialName1").removeClass('parsley-error');
			}
			if(!myValidate("jingxiaoForm")){
				alert("请检查输入内容");
				return;
			}
			tr.find("td:eq(1)").text($("#materialClassify1").val()); 
			tr.find("td:eq(2)").text($("#materialName1").val());
			tr.find("td:eq(3)").text("采购"); 
			tr.find("td:eq(4)").text($("#materialPrice1").val());
			tr.find("td:eq(5)").text($("#remark1").val());
			tr.find("td:eq(6)").text($("#jingXiaoIsManual")[0].checked);
			tr.find("td:eq(12)").text($("#materialPrice1").attr("mCode"));
		}else{
			if(!materialNameFlag){
				$("#materialName").addClass('parsley-error');
				alert("请选择下拉列表中的数据，不能手输");
				return;
			}else{
				$("#materialName").removeClass('parsley-error');
			}
			if(!myValidate("hunheForm")){
				alert("请检查输入内容");
				return;
			}
			var materialJsonData = [];
			var valueTrs = $("#materialBody").find("tr");//原材料名称类型
			var tds;
			for(var i=0;i<valueTrs.length;i++){
				tds = valueTrs[i].children;
				if(tds[0].children[0].value!=""){
					materialJsonData.push({"type":"原材料","name":tds[0].children[0].value,"isManual":tds[1].children[0].checked,"price":tds[2].children[0].value,"factory":tds[4].children[2].value,"unitLoss":tds[4].children[0].value,"sku":tds[6].innerText});
				}
			}
			var materialJsonStr = JSON.stringify(materialJsonData);
			
			var processJsonData = [];
			var valueTrs1 = $("#processBody").find("tr");
			for(var i=0;i<valueTrs1.length;i++){
				var priceTmp = $(valueTrs1[i]).find("input[name='processValueInput']").val();
				if(priceTmp!=""){
					processJsonData.push({"type":"加工","classify":$(valueTrs1[i]).find("select[name='MachType']").val(),"name":$(valueTrs1[i]).find("input[name='processNameInput']").val(),"expansionRate":$(valueTrs1[i]).find("input[name='expansionRateInput']").val(),"firstRate":$(valueTrs1[i]).find("input[name='firstRate']").val(),"price":priceTmp,"factory":$(valueTrs1[i]).find("input[name='factoryInput']").val()});
				}
			}
			var processJsonStr = JSON.stringify(processJsonData);
			
			var otherJsonData = [];
			var valueTrs2 = $("#otherBody").find("tr");
			var tds2;
			for(var i=0;i<valueTrs2.length;i++){
				tds2 = valueTrs2[i].children;
				if(tds2[2].children[0].value!=""){
					otherJsonData.push({"type":"其他","name":tds2[0].children[0].value,"price":tds2[2].children[0].value});
				}
			}
			var otherJsonStr = JSON.stringify(otherJsonData);
			
			tr.find("td:eq(1)").text($("#materialClassify").val()); 
			tr.find("td:eq(2)").text($("#materialName").val()); 
			if(isMaterialFirstRow && tr.find("td:eq(3)").html()==""){
				tr.find("td:eq(3)").text($("#modalType").find("option:selected").text());
			}
			tr.find("td:eq(4)").text($("#materialPrice").val());
			tr.find("td:eq(5)").text($("#remark").val());
			tr.find("td:eq(6)").text($("#isManual")[0].checked);
			tr.find("td:eq(7)")[0].children[0].value = $("#formulaInput1").val();
			tr.find("td:eq(8)")[0].children[0].value = $("#formulaInput2").val();
			tr.find("td:eq(9)")[0].children[0].value = materialJsonStr;
			tr.find("td:eq(10)")[0].children[0].value = processJsonStr;
			tr.find("td:eq(11)")[0].children[0].value = otherJsonStr;
			tr.find("td:eq(12)").text($("#materialPrice").attr("mCode"));
		}
	}
	$("#jingxiao").modal("hide");
	$("#hunhe").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
}

//------------------------------ 增加、删除行------------------------
function materialBodyAdd(){
	$("#materialBody").append('<tr><td width="440px;"><input name="productName" type="text" placeholder="原材料名称" class="form-control"></td>'
		  +'<td width="43px;" style="text-align:left"><input type="checkbox" class="parsley-validated" name="materialNameC" onchange="pdMaterialManual()">手动<a onclick="openMaterialCalSelModal(this,\'fromProcess\')" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></td>'
		  +'<td><input type="text" name="productCost" placeholder="原材料单价(￥)" class="form-control" data-type="number"></td>'
		  +'<td style="text-align:left;"><a onclick="materialPrice4Process(this)" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>'
		  +'<td><input style="float:left;width:35%" type="text" name="productLossUp"  placeholder="单耗" class="form-control" data-type="number">'
		  +'<a onclick="materialPrice4Process(this)" href="javascript:void(0)"><i style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>'
		  +'<input style="float:right;width:55%" type="text" placeholder="参考工厂" class="form-control" ></td>'
		  +'<td><div style="float:left;"><div  class="btn-group"><a href="javaScript:materialBodyAdd();"><i class="fa fa-plus"></i></a></div>'
		  +'<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>'
		  +'</div></td>'
		  +'<td hidden="hidden"></td>'
		  +'</tr>');
	
	pdMaterialManual();
}

function processBodyAdd(){
	var htmlStr = '<tr>'
		+'<td ><select  style="width:28%;float:left;" placeholder="加工类型" name="MachType" style="width:50px;" class="input-sm inline" onchange="changeProcessClassify(this)">'+processClassifyHtml+'</select>'
		+'<input style="width:72%;float:right;" type="text" name="processNameInput" placeholder="加工名称" class="form-control"></td>'
		+'<td  colspan="2">'
		+'<input type="text" style="float:left;width:45%" name="expansionRateInput" placeholder="损耗1" class="form-control">'
		+'<a onClick="selFormulaEle4ProcessBodyS(this,\'formulaInput1\',\'formulaInput2\')" href="javascript:void(0)"><i style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>'
		+'<input style="float:right;width:45%" type="text" name="firstRate" placeholder="损耗2" class="form-control"></td>'
		+ '<td style="text-align:left;"><a onClick="selFormulaEle4ProcessBodyY(this,\'formulaInput1\',\'formulaInput2\')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td><td>'
		+'<input  style="float:left;width:35%" type="text" name="processValueInput" placeholder="单价(￥)" class="form-control" data-type="number">'
		+'<a onClick="materialPrice4ProcessBody(this)" href="javascript:void(0)"><i  style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>'
		+'<input style="float:right;width:55%" type="text" name="factoryInput" placeholder="参考工厂" class="form-control" ></td>'
		+'<td style="width:30px;"><div style="float:right;"><div class="btn-group"><a href="javaScript:processBodyAdd();"><i class="fa fa-plus"></i></a></div>'
		+'&nbsp;<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>'
		+'</div></td></tr>';
	$("#processBody").append(htmlStr);
	$("#processBody").find("input[name='processNameInput']").each(function(){
		if(typeof($._data($(this)[0], "events"))=="undefined"){
			bindSearchEl($(this),processInfoDB[processClassifyDB[0]],null,changeProcessInfo,"processName",["processName"],313);
		}
	});
}

function otherBodyAdd(){
	$("#otherBody").append('<tr><td><input type="text" placeholder="其他" class="form-control" ></td>'
	  +'<td></td>'
	  +'<td><input type="text" placeholder="单价(￥)" class="form-control" data-type="number" data-required="false"></td>'
	  +'<td style="text-align:left;"><a onClick="materialPrice4Process(this)" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>'
	  +'<td><div style="float:left;"><div  class="btn-group"><a href="javaScript:otherBodyAdd();" data-toggle="modal"><i class="fa fa-plus"></i></a></div>'
	  +'<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>'
	  +'</div></td></tr>');
}

function delBodyRow(obj){
	if($(obj).parents("tbody").children().length>1){
		var res = confirm('确认要删除吗？');  
		if(res == true){  
			$(obj).parents("tr").remove();
			calTotalCost();
		}
    }
}

//------------------------------ 增加、删除行 End---------------------


//===================================================材料部分End========================================================



//===================================================加工部分Start==========================================================

/**
获取报价成品描述带过来的数据
*/
var halfProductTdData;
function getInitData(transData){
	//初始化复制下拉框
	$("#dropdown").find("option").each(function(){
		if($(this).text()!="复制"){
			$(this).remove();
		}
	});
	if(typeof(window.parent.specSel)!="undefined"){
		for(var data in window.parent.specSel){
			$("#dropdown").append("<option value='"+data+"'>"+data+"</option>"); 
		}
	}
	
	halfProductTdData = transData;
	if(halfProductTdData.length<0){
		return;
	}
	getTbodyId("specItem0");
	curSpecSelName = halfProductTdData[0].spec;
	$("#addTabs")[0].children[1].childNodes[0].text = halfProductTdData[0].spec;
	$($("#specItem0")[0].children[0].children[1]).empty();
	var html = "";
	for(var i=0;i<halfProductTdData.length;i++){
		//html = html + "<tr><td>"+halfProductTdData[i].spec+"</td><td>"+halfProductTdData[i].halfProductClassify+"</td><td>"+halfProductTdData[i].materailDescribe+"</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><div style＝'float:left;' class='btn-group'><a onClick='addHalfProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div><a onClick='delRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a><div style＝'float:right;' class='btn-group'> <a onClick='updateHalfProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td></tr>";
		html = html + "<tr><td>"+halfProductTdData[i].spec+"</td><td>"+halfProductTdData[i].halfProductClassify+"</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td hidden='hidden'><input type='hidden' name='参考工厂' value=''></td><td hidden='hidden'><input type='hidden' name='规格其他' value=''></td><td hidden='hidden'><input type='hidden' name='裁片其他' value=''></td><td hidden='hidden'><input type='hidden' name='选择物料json' value='{}'></td><td hidden='hidden'><input type='hidden' name='计算表达式' value=''></td><td hidden='hidden'><input type='hidden' name='计算公式值' value=''></td><td><div style＝'float:left;' class='btn-group'><a onClick='addHalfProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div><a onClick='delBodyRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a><div style＝'float:right;' class='btn-group'> <a onClick='updateHalfProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td><td hidden='hidden'><input type='hidden' name='类型' value='主料耗料'></td></tr>";
	}
	$($("#specItem0")[0].children[0].children[1]).append(html);
	$("#specItem0").find("tbody:eq(1)").find("tr:eq(0)").find("td:eq(11)").text("0.00");
	tabGuidArray = ["specItem0"];
	$("#addTabs").children().each(function(i,obj){
		if(i==1){
			$(this).addClass("active");
		}
		if(i>1){
			$(this).remove();
		}
	});
	$("#tabDivs").children().each(function(){
		if($(this).attr("id")!="specItem0"){
			$(this).remove();
		}else{
			$(this).addClass("active");
		}
	});
}

function setCompSelect(componetList){
	$("#halfProductClassify").empty();
	$("#hpcompjiagong").empty();
	$("#hpcompfuliao").empty();
	for(var i=0;i<componetList.length;i++){
		$("#halfProductClassify").append("<option value='"+componetList[i]+"'>"+ componetList[i]+ "</option>");
		$("#hpcompjiagong").append("<option value='"+componetList[i]+"'>"+ componetList[i]+ "</option>");
		$("#hpcompfuliao").append("<option value='"+componetList[i]+"'>"+ componetList[i]+ "</option>");
	}
}

function showCostType(){
	var costTypeSel = $("#costTypeSel").val();
	if(costTypeSel=="jiagongfei"){
		$("#"+costTypeSel).modal('show');
	}else if(costTypeSel=="fuliao"){
		$("#fuliao").modal('show'); 
	}else{
		var multiComp = true;
		if(typeof(window.parent.multiComp)!="undefined"){
			multiComp = window.parent.multiComp;
		}
		if(multiComp || typeof(window.parent.specSel)=="undefined" || !window.parent.specSel.hasOwnProperty(curSpecSelName)){
			$("#specLength").val("");
			$("#specWidth").val("");
			$("#specHeight").val("");
		}else{
			$("#specLength").val(window.parent.specSel[curSpecSelName]["Length"]);
			$("#specWidth").val(window.parent.specSel[curSpecSelName]["Width"]);
			$("#specHeight").val(window.parent.specSel[curSpecSelName]["Height"]);
		}
		$("#banchengpin").modal('show');
	}
}


//新增下部table
function addHalfProduct(){
	state = 1;
	$("#costType").modal("show");
}

function updateHalfProductdWin(obj){
	state = 2;
	//获取选中的行
	tr = $(obj).closest("tr");
	var tr_hpType = tr.find("td:last").children().val();
	if(tr.find("td:last").children().val()=="加工费"){
		$("#hpcompjiagong").val(tr.find("td:eq(1)").html());
		var josnData = eval('('+tr.find("td:eq(13)")[0].children[0].value+')');
		$("#classifyType").val(josnData[0].classifyType);
		$("#processName").val(josnData[0].processName);
		$("#processCost").val(josnData[0].processCost);
		$("#processFactory").val(josnData[0].processFactory);
		$("#processDesc").val(josnData[0].processDesc);
		if($("#classifyType").val()!="手输加工分类"){
			var processInfoTmp = processInfoFengzhiDB[$("#classifyType").val()];
			bindSearchEl($("#processName"),processInfoTmp,changeProcessFengzhiFlag,changeProcessFengzhiInfo,"processName",["processName"],313);
		}
		$("#processOtherEle").empty();
		var html = "";
		for(var i=1;i<josnData.length;i++){
			html = html + '<tr><td colspan="2"><input type="text" placeholder="其他" value="'+josnData[i].processName+'" class="form-control" ></td>'
				  +'<td><input type="text" placeholder="单价(￥)" value="'+josnData[i].processCost+'" onBlur="calProcessCost();" class="form-control" data-type="number" data-required="false"></td>'
				  +'<td colspan="2" style="text-align:left"><a onclick="addMoreFromProcess(this);" href="javaScript:void();"><i class="fa fa-plus"></i></a>'
					+'<a onclick="delRow(this)" href="javascript:void(0);"><i class="fa fa-minus"></i></a>'
					+'</td>'
					+'</tr>';
		}
		if(html==""){
			html = '<tr><td colspan="2"><input type="text" placeholder="其他" value="" class="form-control" ></td>'
			  +'<td><input type="text" placeholder="单价(￥)" value="" class="form-control" onBlur="calProcessCost();" data-type="number" data-required="false"></td>'
			  +'<td colspan="2" style="text-align:left"><a onclick="addMoreFromProcess(this);" href="javaScript:void();"><i class="fa fa-plus"></i></a>'
				+'<a onclick="delRow(this)" href="javascript:void(0);"><i class="fa fa-minus"></i></a>'
				+'</td>'
				+'</tr>';
		}
		$("#processOtherEle").append(html);
		$("#processingCost").val(tr.find("td:eq(11)").html());
		$("#processRemark").val(tr.find("td:eq(12)").html());
		$("#jiagongfei").modal("show");
	}else if(tr.find("td:last").children().val()=="辅料耗料"){
		//获取列值，赋值给弹出框
		var josnData;
		if(tr.find("td:eq(16)").length>0){
			josnData = eval('('+tr.find("td:eq(16)")[0].children[0].value+')');
		}else{
			josnData = [];
		}
		$("#hpcompfuliao").val(tr.find("td:eq(1)").html());
		$("#material4m").val(josnData[0].materalName);
		$("#materialPrice4m").val(josnData[0].materalCost);
		$("#materialConsum4m").val(tr.find("td:eq(7)").html()); 
		$("#mRemark4m").val(tr.find("td:eq(12)").html());
		$("#calculExpression4m").val(tr.find("td:eq(17)")[0].children[0].value);
		$("#calculFormula4m").val(tr.find("td:eq(18)")[0].children[0].value);
		$("#fuliao").modal("show");
	}else if(tr.find("td:last").children().val()=="主料耗料"){
		//获取列值，赋值给弹出框
		var josnData;
		if(tr.find("td:eq(16)").length>0){
			josnData = eval('('+tr.find("td:eq(16)")[0].children[0].value+')');
		}else{
			josnData = [];
		}
		$("#halfProductClassify").val(tr.find("td:eq(1)").html());
		$("#referenceFactoryHalfProduct").val(tr.find("td:eq(13)")[0].children[0].value);
		$("#materailDescribe").val(tr.find("td:eq(2)").html());
		$("#remarkHalfProduct").val(tr.find("td:eq(12)").html());
		$("#materialLoss").val(tr.find("td:eq(7)").html());
		$("#shrinkageRate").val(tr.find("td:eq(8)").html());
		$("#cardingLoss").val(tr.find("td:eq(9)").html());
		$("#productLossDown").val(tr.find("td:eq(10)").html());
		var multiComp = true;
		if(typeof(window.parent.multiComp)!="undefined"){
			multiComp = window.parent.multiComp;
		}
		if(!multiComp || typeof(window.parent.specSel)=="undefined" || !window.parent.specSel.hasOwnProperty(curSpecSelName)){
			$("#specLength").val("");
			$("#specWidth").val("");
			$("#specHeight").val("");
		}else{
			$("#specLength").val(window.parent.specSel[curSpecSelName]["Length"]);
			$("#specWidth").val(window.parent.specSel[curSpecSelName]["Width"]);
			$("#specHeight").val(window.parent.specSel[curSpecSelName]["Height"]);
		}
		$("#specOther").val(tr.find("td:eq(14)")[0].children[0].value);
		$("#cutLength").val(tr.find("td:eq(3)").html());
		$("#cutWidth").val(tr.find("td:eq(4)").html());
		$("#cutHeight").val(tr.find("td:eq(5)").html());
		$("#cutOther").val(tr.find("td:eq(15)")[0].children[0].value);
		$("#selMaterialBody").empty();
		var mhtml = "";
		for(var i=0;i<josnData.length;i++){
			mhtml = mhtml + '<tr> <td style="text-align: right;width:120px;"><label>选择物料：</label></td>'
				+'<td colspan="3"><input type="text" value="'+josnData[i].materalName+'" class="form-control" data-required="true"></td>'
				+'<td style="text-align:left"><a onclick="openMaterialCalSelModal(this,\'fromHP\')" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></td>'
				+'<td hidden="hidden"><label>选择物料：</label></td>'
				+'<td><input type="text" value="'+josnData[i].materalCost+'" class="form-control" data-required="true" data-type="number"></td>'
				+'<td style="text-align:left"><a onClick="selFormulaEle(this,\'formulaBanExp\',\'formulaBanVal\')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>'
				+'<td colspan="2" style="text-align:left"><a onclick="addMoreFromHP(this);" href="javaScript:void();"><i class="fa fa-plus"></i></a>'
				+'<a onclick="delBodyRow(this)" href="javascript:void(0);"><i class="fa fa-minus"></i></a>'
				+'</td>'
				+'<td hidden="hidden">'+josnData[i].sku+'</td>'
				+'</tr>';
		}
		if(mhtml == ""){
			mhtml = '<tr> <td style="text-align: right;width:120px;"><label>选择物料：</label></td>'
			+'<td colspan="3"><input type="text" value=\"\" class="form-control" data-required="true"></td>'
			+'<td style="text-align:left"><a onclick="openMaterialCalSelModal(this,\'fromHP\')" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></td>'
			+'<td hidden="hidden"><label>选择物料：</label></td>'
			+'<td><input type="text" value=\"\" class="form-control" data-required="true" data-type="number"></td>'
			+'<td style="text-align:left"><a onClick="selFormulaEle(this,\'formulaBanExp\',\'formulaBanVal\')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>'
			+'<td colspan="2" style="text-align:left"><a onclick="addMoreFromHP(this);" href="javaScript:void();"><i class="fa fa-plus"></i></a>'
			+'<a onclick="delBodyRow(this)" href="javascript:void(0);"><i class="fa fa-minus"></i></a>'
			+'</td>'
			+'<td hidden="hidden"></td>'
			+'</tr>';
		}
		$("#selMaterialBody").append(mhtml);
		$("#formulaBanExp").val(tr.find("td:eq(17)")[0].children[0].value);
		$("#formulaBanVal").val(tr.find("td:eq(18)")[0].children[0].value);
		$("#materialPrice4HP").val(tr.find("td:eq(11)").html());
		$("#banchengpin").modal("show");
	}
}

//半成品测算时，点击确定的时候，根据state是1还是2判断是编辑还是新增
function updateHalfProduct(){
	if(state == 1){
		var html;
		if($("#costTypeSel").val()=="jiagongfei"){
			if(!processNameFengzhiFlag){
				$("#processName").addClass('parsley-error');
				alert("请选择下拉列表中的数据，不能手输");
				return
			}else{
				$("#processName").removeClass('parsley-error');
			}
			//弹出框输入值校验
			if(!myValidate("jiagongfeiForm")){
				alert("请检查输入内容");
				return;
			}
			var processOtherJsonData = [];
			processOtherJsonData.push({"classifyType":$("#classifyType").val(),"processName":$("#processName").val(),"processCost":$("#processCost").val(),"processFactory":$("#processFactory").val(),"processDesc":$("#processDesc").val()});
			var processTrs = $("#processOtherEle").find("tr");
			for(var i=0;i<processTrs.length;i++){
				if(processTrs[i].children[1].children[0].value!=""){
					processOtherJsonData.push({"processName":processTrs[i].children[0].children[0].value,"processCost":processTrs[i].children[1].children[0].value});
				}
			}
			var processOtherJsonStr = JSON.stringify(processOtherJsonData);
			html = "<tr><td>"+curSpecSelName+"</td>"
		    +"<td>"+$("#hpcompjiagong").val()+"</td>"
		    +"<td>加工费</td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td>"+$("#processingCost").val()+"</td>"
		    +"<td>"+$("#processRemark").val()+"</td>"
		    +"<td hidden='hidden'><input type='hidden' name='加工费json' value='"+processOtherJsonStr+"'/></td>"
		    +"<td><div style＝'float:left;' class='btn-group'><a onClick='addHalfProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div>"
			+"<a onClick='delBodyRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a>"
			+"<div style＝'float:right;' class='btn-group'> <a onClick='updateHalfProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td>"
			+"<td hidden='hidden'><input type='hidden' name='类型' value='加工费'></td></tr>";
		//通过表体id把显示文本显示到
		}else if($("#costTypeSel").val()=="fuliao"){
			//弹出框输入值校验
			if(!myValidate("fuliaoForm")){
				alert("请检查输入内容");
				return;
			}
			var selMaterialJSON = [];
			selMaterialJSON.push({"materalName":""+$("#material4m").val()+"","materalCost":""+$("#materialPrice4m").val()+""});
			var selMaterialJSONStr = JSON.stringify(selMaterialJSON);
			html = "<tr><td>"+curSpecSelName+"</td>"
		    +"<td>"+$("#hpcompfuliao").val()+"</td>"
		    +"<td>辅料耗料</td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td>"+$("#materialConsum4m").val()+"</td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td>"+$("#mCost4m").val()+"</td>"
		    +"<td>"+$("#mRemark4m").val()+"</td>"
		    +"<td hidden='hidden'><input type='hidden' name='参考工厂'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='规格其他'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='占位' /></td>"
		    +"<td hidden='hidden'><input type='hidden' name='选择物料json' value='"+selMaterialJSONStr+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算表达式' value='"+$("#calculExpression4m").val()+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算公式' value='"+$("#calculFormula4m").val()+"'/></td>"
		    +"<td><div style＝'float:left;' class='btn-group'><a onClick='addHalfProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div>"
			+"<a onClick='delBodyRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a>"
			+"<div style＝'float:right;' class='btn-group'> <a onClick='updateHalfProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td>"
			+"<td hidden='hidden'><input type='hidden' name='类型' value='辅料耗料'></td></tr>";
		//通过表体id把显示文本显示到
		}else if($("#costTypeSel").val()=="banchengpin"){
			if(!referFacHalfProdFlag && $("#referenceFactoryHalfProduct").val()!=""){
				$("#referenceFactoryHalfProduct").addClass('parsley-error');
				alert("请选择下拉列表中的数据，不能手输");
				return;
			}else{
				$("#referenceFactoryHalfProduct").removeClass('parsley-error');
			}
			//弹出框输入值校验
			if(!myValidate("banchengpinForm")){
				alert("请检查输入内容");
				return;
			}
			var selMaterialJSON = [];
			var hpTrs = $("#selMaterialBody").find("tr");
			for(var i=0;i<hpTrs.length;i++){
				selMaterialJSON.push({"materalName":hpTrs[i].children[1].children[0].value,"materalCost":hpTrs[i].children[4].children[0].value,"sku":hpTrs[i].children[7].innerText});
			}
			var selMaterialJSONStr = JSON.stringify(selMaterialJSON);
			html = "<tr><td>"+curSpecSelName+"</td>"
		    +"<td>"+$("#halfProductClassify").val()+"</td>"
		    +"<td>"+$("#materailDescribe").val()+"</td>"
		    +"<td>"+$("#cutLength").val()+"</td>"
		    +"<td>"+$("#cutWidth").val()+"</td>"
		    +"<td>"+$("#cutHeight").val()+"</td>"
		    +"<td>"+$("#cutOther").val()+"</td>"
		    +"<td>"+$("#materialLoss").val()+"</td>"
		    +"<td>"+$("#shrinkageRate").val()+"</td>"
		    +"<td>"+$("#cardingLoss").val()+"</td>"
		    +"<td>"+$("#productLossDown").val()+"</td>"
		    +"<td>"+$("#materialPrice4HP").val()+"</td>"
		    +"<td>"+$("#remarkHalfProduct").val()+"</td>"
		    +"<td hidden='hidden'><input type='hidden' name='参考工厂' value='"+$("#referenceFactoryHalfProduct").val()+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='规格其他' value='"+$("#specOther").val()+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='裁片其他' value='"+$("#cutOther").val()+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='选择物料json' value='"+selMaterialJSONStr+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算表达式' value='"+$("#formulaBanExp").val()+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算公式值' value='"+$("#formulaBanVal").val()+"'/></td>"
		    +"<td><div style＝'float:left;' class='btn-group'><a onClick='addHalfProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div>"
			+"<a onClick='delBodyRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a>"
			+"<div style＝'float:right;' class='btn-group'> <a onClick='updateHalfProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td>"
			+"<td hidden='hidden'><input type='hidden' name='类型' value='主料耗料'></td></tr>";
		//通过表体id把显示文本显示到网页中
		}
		$("#banchengpin").modal("hide");
		$("#jiagongfei").modal("hide");
		$("#fuliao").modal("hide");
		$(".modal-backdrop").remove();
		$("body").removeClass('modal-open');
		$($("#"+tbodyId)[0].children[0].children[1]).append(html);
	}else if(state == 2){
		if(tr.find("td:last").children().val()=="加工费"){
			if(!processNameFengzhiFlag){
				$("#processName").addClass('parsley-error');
				alert("请选择下拉列表中的数据，不能手输");
				return
			}else{
				$("#processName").removeClass('parsley-error');
			}
			//弹出框输入值校验
			if(!myValidate("jiagongfeiForm")){
				alert("请检查输入内容");
				return;
			}
			
//			$("#jiagongfeiForm").submit();
//			var mixf = $("#jiagongfeiForm input").hasClass('parsley-error');
//			if(mixf){
//				return;
//			}
			$("#jiagongfei").modal("hide");
			$(".modal-backdrop").remove();
			$("body").removeClass('modal-open');
			
			var processOtherJsonData = [];
			processOtherJsonData.push({"classifyType":$("#classifyType").val(),"processName":$("#processName").val(),"processCost":$("#processCost").val(),"processFactory":$("#processFactory").val(),"processDesc":$("#processDesc").val()});
			var processTrs = $("#processOtherEle").find("tr");
			for(var i=0;i<processTrs.length;i++){
				if(processTrs[i].children[1].children[0].value!=""){
					processOtherJsonData.push({"processName":processTrs[i].children[0].children[0].value,"processCost":processTrs[i].children[1].children[0].value});
				}
			}
			var processOtherJsonStr = JSON.stringify(processOtherJsonData);
			tr.find("td:eq(0)").text(curSpecSelName);
			tr.find("td:eq(1)").text($("#hpcompjiagong").val());
			tr.find("td:eq(11)").text($("#processingCost").val());
			tr.find("td:eq(12)").text($("#processRemark").val());
			tr.find("td:eq(13)")[0].children[0].value = processOtherJsonStr;
		}else if(tr.find("td:last").children().val()=="辅料耗料"){
			//弹出框输入值校验
			if(!myValidate("fuliaoForm")){
				alert("请检查输入内容");
				return;
			}
			
//			$("#fuliaoForm").submit();
//			var mixf = $("#fuliaoForm input").hasClass('parsley-error');
//			if(mixf){
//				return;
//			}
			$("#fuliao").modal("hide");
			$(".modal-backdrop").remove();
			$("body").removeClass('modal-open');
			
			var selMaterialJSON = [];
			selMaterialJSON.push({"materalName":""+$("#material4m").val()+"","materalCost":""+$("#materialPrice4m").val()+""});
			var selMaterialJSONStr = JSON.stringify(selMaterialJSON);
			
			tr.find("td:eq(0)").text(curSpecSelName);
			tr.find("td:eq(1)").text($("#hpcompfuliao").val());
			tr.find("td:eq(7)").text($("#materialConsum4m").val());
			tr.find("td:eq(11)").text($("#mCost4m").val());
			tr.find("td:eq(12)").text($("#mRemark4m").val());
			tr.find("td:eq(16)")[0].children[0].value = selMaterialJSONStr;
			tr.find("td:eq(17)")[0].children[0].value = $("#calculExpression4m").val();
			tr.find("td:eq(18)")[0].children[0].value = $("#calculFormula4m").val();
		}else if(tr.find("td:last").children().val()=="主料耗料"){
			if(!referFacHalfProdFlag && $("#referenceFactoryHalfProduct").val()!=""){
				$("#referenceFactoryHalfProduct").addClass('parsley-error');
				alert("请选择下拉列表中的数据，不能手输");
				return;
			}else{
				$("#referenceFactoryHalfProduct").removeClass('parsley-error');
			}
			//弹出框输入值校验
			if(!myValidate("banchengpinForm")){
				alert("请检查输入内容");
				return;
			}
			
//			$("#banchengpinForm").submit();
//			var mixf = $("#banchengpinForm input").hasClass('parsley-error');
//			if(mixf){
//				return;
//			}
			$("#banchengpin").modal("hide");
			$(".modal-backdrop").remove();
			$("body").removeClass('modal-open');
			
			var selMaterialJSON = [];
			var hpTrs = $("#selMaterialBody").find("tr");
			for(var i=0;i<hpTrs.length;i++){
				selMaterialJSON.push({"materalName":hpTrs[i].children[1].children[0].value,"materalCost":hpTrs[i].children[4].children[0].value,"sku":hpTrs[i].children[7].innerText});
			}
			var selMaterialJSONStr = JSON.stringify(selMaterialJSON);
			tr.find("td:eq(0)").text(curSpecSelName); 
			tr.find("td:eq(1)").text($("#halfProductClassify").val()); 
			tr.find("td:eq(2)").text($("#materailDescribe").val()); 
			tr.find("td:eq(3)").text($("#cutLength").val());
			tr.find("td:eq(4)").text($("#cutWidth").val()); 
			tr.find("td:eq(5)").text($("#cutHeight").val()); 
			tr.find("td:eq(6)").text($("#cutOther").val());
			tr.find("td:eq(7)").text($("#materialLoss").val());
			tr.find("td:eq(8)").text($("#shrinkageRate").val());
			tr.find("td:eq(9)").text($("#cardingLoss").val());
			tr.find("td:eq(10)").text($("#productLossDown").val()); 
			tr.find("td:eq(11)").text($("#materialPrice4HP").val());
			tr.find("td:eq(12)").text($("#remarkHalfProduct").val());
			tr.find("td:eq(13)")[0].children[0].value = $("#referenceFactoryHalfProduct").val();
			tr.find("td:eq(14)")[0].children[0].value = $("#specOther").val();
			tr.find("td:eq(15)")[0].children[0].value = $("#cutOther").val();
			tr.find("td:eq(16)")[0].children[0].value = selMaterialJSONStr;
			tr.find("td:eq(17)")[0].children[0].value = $("#formulaBanExp").val();
			tr.find("td:eq(18)")[0].children[0].value = $("#formulaBanVal").val();
		}
	}
	calTotalCost();
}



//下部tab，新增tab
function addTabs() {
	var isRepeated = false;
	var tabNam= $("#dropdown option:selected").text();
	if(tabNam == "复制"){
		return;
	}
	var spec;
	for(var p=1;p<tabGuidArray.length+1;p++){//判断是否重复
		spec = $('#addTabs')[0].children[p].children[0].innerText;
		if(spec == tabNam){
			isRepeated = true;
		}
	}
	if(!isRepeated){
		addSpecTab();
		curSpecSelName = tabNam;
	}else{
		alert("规格重复");
	}
}

function addSpecTab(){
	//先把之前tab的active和内容div的active删掉
	for(var j=0;j<tabGuidArray.length;j++){
		var formerId = tabGuidArray[j];  
		$("#"+formerId).removeClass("active");
		$($('#addTabs')[0].children[j+1]).removeClass("active");
	}
	//复制一个div,并顺序赋上id
	var html = $("#specItem0").clone();
	var id = "specItem"+GUID();
	html.attr('id',id);
	html.addClass("active");
	var tabName= $("#dropdown option:selected").text();
	$("#tabDivs").append(html);
	$('#addTabs').append('<li class="active"><a onclick="getTbodyId(\''+id+'\')" href="#'+id+'" data-toggle="tab">'+tabName+'<span><i onclick="delTabById(\''+id+'\',this);" style="margin-left:20px;cursor:pointer" class="fa fa-times"></i></span></a></li>');
	getTbodyId(id);
	tabGuidArray.push(id);
	//第一列的规格赋上选中的值
	var valueTrs = $("#"+id)[0].children[0].children[1].children;
	for(var i=0;i<valueTrs.length;i++){
		var tds = valueTrs[i].children;
		tds[0].childNodes[0].data = tabName;
	}
}

function getTbodyId(obj){
	tbodyId = obj+"";
	$("#addTabs").find("li").each(function(){
		if($(this).find("a").length > 0){
			if($(this).find("a").attr("href").substring(1)==tbodyId){
				curSpecSelName = $(this).find("a").text();
				return;
			}
		}
	});
	if(opraType=="view"){
		calTotalCost();
	}
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
					$($('#addTabs')[0].children[i+1]).removeClass("active");
				}
				$("#specItem0").addClass("active");
				$($('#addTabs')[0].children[1]).addClass("active");
			} 
		}
	}  
}  


function calProcessCost(){
	var totalResult = 0;
	var processCostVal = $("#processCost").val()==""?0:$("#processCost").val();
	totalResult += parseFloat(processCostVal);
	var processOtherTrs = $("#processOtherEle").find("tr");
	for(var i=0;i<processOtherTrs.length;i++){
		if(processOtherTrs[i].children[1].children[0].value!=""){
			totalResult += parseFloat(processOtherTrs[i].children[1].children[0].value);
		}
	}
	$("#processingCost").val(totalResult);
}

//计算总成本
function calTotalCost(){
	var unitCosts =[];
	var totalCost = 0;
	var valueTrs = $("#"+tbodyId)[0].children[0].children[1].children;
	for(var i=0;i<valueTrs.length;i++){
		var tds = valueTrs[i].children;
		if(tds[11].innerHTML!=""){
			totalCost = totalCost + parseFloat(tds[11].innerHTML);
		}
	}
	$("#"+tbodyId)[0].children[0].children[2].children[0].children[11].innerText = totalCost.toFixed(2);
}

var haoliao = 0;
var chengben;
function openMaterialCalSelModal(obj,fromType){
	selMaterialFromObj = obj;
	selMaterialFromType = fromType;
	chengben = obj.previousSibling;
	haoliao = obj.parentNode.previousElementSibling.innerText;
	$("#materialGetFromTop").empty();
	var valueTrs = $("#materialHead").find("tr");
	var tds;
	var html = "";
	for(var i=0;i<valueTrs.length;i++){
		tds = valueTrs[i].children;
		html = html + "<tr> <td><input type='checkbox'></td><td>"+tds[0].innerText+"</td><td>"+tds[1].innerText+"</td><td>"+tds[2].innerText+"</td><td>"+tds[3].innerText+"</td><td>"+tds[4].innerText+"</td><td hidden='hidden'>"+tds[12].innerText+"</td></tr>"
	}
	$("#materialGetFromTop").append(html);
	$("#materialCalSel").modal("show");
}

function fillSelMaterial(){
	$("#materialCalSel").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	var valueTrs = $("#materialGetFromTop").find("tr");
	var calValue = 0;
	for(var i=0;i<valueTrs.length;i++){
		tds = valueTrs[i].children;
		if(tds[0].children[0].checked){
			if(selMaterialFromType=="fromHP"){
				selMaterialFromObj.parentNode.previousElementSibling.children[0].value=tds[3].innerText;
				selMaterialFromObj.parentNode.nextElementSibling.nextElementSibling.children[0].value=tds[5].innerText;
				$(selMaterialFromObj).parents("tr").find("td:eq(7)").text(tds[6].innerText);
			}else if(selMaterialFromType=="fromProcess"){//上面的加工调用
				selMaterialFromObj.parentNode.previousElementSibling.children[0].value=tds[3].innerText;
				selMaterialFromObj.parentNode.nextElementSibling.children[0].value=tds[5].innerText;
				$(selMaterialFromObj).parents("tr").find("td:eq(6)").text(tds[6].innerText);
			}else if(selMaterialFromType=="fromMaterial"){
				selMaterialFromObj.parentNode.previousElementSibling.children[0].value=tds[3].innerText;
				$("#materialPrice4m").val(tds[5].innerText);
				$(selMaterialFromObj).parents("tr").find("td:eq(6)").text(tds[6].innerText);
			}
			break;
		}
	}
}

/**
 * 半成品选择物料复制
 */
function addMoreFromHP(obj){
	var html = '<tr> <td style="text-align: right;width:120px;"><label>选择物料：</label></td>'
		+'<td colspan="3"><input type="text" class="form-control" data-required="true"></td>'
		+'<td style="text-align:left"><a onclick="openMaterialCalSelModal(this,\'fromHP\')" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></td>'
		+'<td hidden="hidden"><label>选择物料：</label></td>'
		+'<td><input type="text" class="form-control" data-required="true" data-type="number"></td>'
		+'<td style="text-align:left"><a onClick="selFormulaEle(this,\'formulaBanExp\',\'formulaBanVal\')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>'
		+'<td colspan="2" style="text-align:left"><a onclick="addMoreFromHP(this);" href="javaScript:void();"><i class="fa fa-plus"></i></a>'
		+'<a onclick="delBodyRow(this)" href="javascript:void(0);"><i class="fa fa-minus"></i></a>'
		+'</td>'
		+'<td hidden="hidden"></td>'
		+'</tr>';
	$(html).insertAfter($(obj.parentNode.parentNode));
}

/**
 * 加工的其他复制
 */
function addMoreFromProcess(obj){
	var html = '<tr><td colspan="2"><input type="text" placeholder="其他" class="form-control" ></td>'
	  +'<td><input type="text" placeholder="单价(￥)" onBlur="calProcessCost();" class="form-control" data-required="false" data-type="number"></td>'
	  +'<td colspan="2" style="text-align:left"><a onclick="addMoreFromProcess(this);" href="javaScript:void();"><i class="fa fa-plus"></i></a>'
		+'<a onclick="delRow(this)" href="javascript:void(0);"><i class="fa fa-minus"></i></a>'
		+'</td>'
		+'</tr>';
	$(html).insertAfter($(obj.parentNode.parentNode));
}


//===================================================加工部分End========================================================

//===================================================保存并进入下一步部分Start==========================================================

/**
 * 获取材料数据
 * @returns
 */
function getMaterialData(){
	var materialResult=[];
	var valueTrs = $("#materialTable").find("tr");
	var tds;
	for(var i=1;i<valueTrs.length;i++){
		tds = valueTrs[i].children;
		materialResult.push({"materialNo":tds[0].innerText,"materialName":tds[2].innerText,"materialDesc":tds[1].innerText,
			"processType":tds[3].innerText,"materialCost":tds[4].innerText,"remark":tds[5].innerText,"manual":tds[6].innerText,
			"formulaExpress":tds[7].childNodes[0].value,"formulaVal":tds[8].childNodes[0].value,"materialJson":tds[9].childNodes[0].value,
			"processJson":tds[10].childNodes[0].value,"otherJson":tds[11].childNodes[0].value,"sku":tds[12].innerText});
	}
	return materialResult;
}

function getExcelHeadJosnStr(){
	var result = "{'productName':'" + window.parent.evalHeadData.productName + "',"
	   + "'tradeForm':'" + window.parent.evalHeadData.tradeForm + "'"
	   +"}";
	return result;
}

function getExcelMaterialJosnStr(){
	var materialResult=[];
	var valueTrs = $("#materialTable").find("tr");
	var tds;
	for(var i=1;i<valueTrs.length;i++){
		tds = valueTrs[i].children;
		if(tds[1].innerText.indexOf("主料")>-1){
			materialResult.push({"materialName":tds[2].innerText,"materialDesc":tds[1].innerText,"materialCost":tds[4].innerText});
		}
	}
	var result = JSON.stringify(materialResult);
	return result;
}

function getExcelHPJsonStr(){
	var halfProductResult=[];
	var specItemNum = $("#tabDivs")[0].children.length;
	for(var d=0;d<tabGuidArray.length;d++){
		var id = tabGuidArray[d];
		var valueTrs = $("#"+id).find("tr");
		var tds;
		var specVal = valueTrs[1].children[0].innerText;
		var partJson = {"spec":specVal};
		var partDetailJson = [];
		for(var i=1;i<valueTrs.length-1;i++){
			tds = valueTrs[i].children;
			partDetailJson.push({"hpName":tds[1].innerText,
				"materailDesc":tds[2].innerText,"cutLength":tds[3].innerText,"cutWidth":tds[4].innerText,
				"cutHeight":tds[5].innerText,"cutOther":tds[6].innerText,"materialLoss":tds[7].innerText,
				"combingLoss":tds[9].innerText,"materialUnitLoss":tds[10].innerText,
				"cost":tds[11].innerText,"remark":tds[12].innerText,"classify":tds[20].childNodes[0].value
				});
		}
		partJson["detail"] = partDetailJson;
		halfProductResult.push(partJson);
	}
	return JSON.stringify(halfProductResult);
}

/**
 * 获取半成品数据
 * @returns
 */
function getHalfProductData(){
	var halfProductResult=[];
	var specItemNum = $("#tabDivs")[0].children.length;
	for(var d=0;d<tabGuidArray.length;d++){
		var id = tabGuidArray[d];
		var valueTrs = $("#"+id).find("tr");
		var tds;
		for(var i=1;i<valueTrs.length-1;i++){
			tds = valueTrs[i].children;
			if($(valueTrs[i]).find("td:last").find("input").val() == "加工费"){
				halfProductResult.push({"spec":tds[0].innerText,"hpName":tds[1].innerText,
					"cost":tds[11].innerText,"remark":tds[12].innerText,"processCostJson":tds[13].childNodes[0].value,
					"classify":"加工费"
					});
			}else if($(valueTrs[i]).find("td:last").find("input").val() == "辅料耗料"){
				halfProductResult.push({"spec":tds[0].innerText,"hpName":tds[1].innerText,"materialLoss":tds[7].innerText,
					"cost":tds[11].innerText,"remark":tds[12].innerText,"selMaterialJson":tds[16].childNodes[0].value,
					"formulaExpress":tds[17].childNodes[0].value,"formulaVal":tds[18].childNodes[0].value,
					"classify":tds[20].childNodes[0].value
					});
			}else if($(valueTrs[i]).find("td:last").find("input").val() == "主料耗料"){
				halfProductResult.push({"spec":tds[0].innerText,"hpName":tds[1].innerText,
					"materailDesc":tds[2].innerText,"cutLength":tds[3].innerText,"cutWidth":tds[4].innerText,
					"cutHeight":tds[5].innerText,"cutOther":tds[6].innerText,"materialLoss":tds[7].innerText,
					"shrink":tds[8].innerText,"combingLoss":tds[9].innerText,"materialUnitLoss":tds[10].innerText,
					"cost":tds[11].innerText,"remark":tds[12].innerText,"factory":tds[13].childNodes[0].value,
					"specOther":tds[14].innerText,"cutOther":tds[15].innerText,"selMaterialJson":tds[16].childNodes[0].value,
					"formulaExpress":tds[17].childNodes[0].value,"formulaVal":tds[18].childNodes[0].value,
					"classify":tds[20].childNodes[0].value
					});
			}
		}
	}
	return halfProductResult;
}

//点击进入纸箱成本测算的方法
function MaterialToCarton(){
    var transId = "carton";
    window.parent.tabIframe(transId);
}

function genMaterialCost(){
	var materialRes = {};
	for(var i=1;i<$("#addTabs")[0].children.length;i++){
		var itemId = "";
		var itemSpec = "";
		var itemCost = "";
		itemId = $("#addTabs")[0].children[i].children[0].hash;
		itemSpec = $("#addTabs")[0].children[i].children[0].innerText;
		itemCost = $(itemId)[0].children[0].children[2].children[0].children[11].innerText;
		materialRes[itemSpec] = itemCost;
	}
	return materialRes;
}

//编辑状态下回填组件成本比例
function setCompRatio2ProDes(){
	var totalObj = {};
	var keyTmp = "";
	var valueTmp = 0;
	$("#specItem0").find("tbody:eq(0)").find("tr").each(function(){
		keyTmp = $(this).find("td:eq(1)").text();
		valueTmp = parseFloat($(this).find("td:eq(11)").text());
		if(totalObj.hasOwnProperty(keyTmp)){
			totalObj[keyTmp] = totalObj[keyTmp] + valueTmp;
		}else{
			totalObj[keyTmp] = valueTmp;
		}
	});
	if(opraType=="view"||opraType=="edit"){
		window.parent.setCompPieData2Mach(totalObj);
	}else{
		if(window.parent.multiComp){
			window.parent.setCompRatio2ProDes(totalObj);
		}else{
			var myJson = {};
			myJson[keyTmp]=totalObj[keyTmp];
			window.parent.setCompPieData2Mach(myJson);
		}
	}
}


function saveMaterialList(){
	var materialListID = "";
	//存材料
	var materialData = getMaterialData();
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/materialSave.do",
		data : JSON.stringify(materialData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				materialListID = jsonObj.msg;
			}else{
				ifContibue = false;
				alert(jsonObj.msg);
			}
		}
	});
	return materialListID;
}

function saveHfList(){
	//存半成品
	var halfProductData = getHalfProductData();
	var hfListID = "";
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/halfProductSave.do",
		data : JSON.stringify(halfProductData),
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				hfListID = jsonObj.msg;
			}else{
				ifContibue = false;
				alert(jsonObj.msg);
			}
		}
	});
	return hfListID;
}

function updateEvalDetail(materialListID,hfListID){
	var flag = false;
	var resultMaterialJson = JSON.stringify(genMaterialCost());
	//存测算信息
	var evalDetailData = {"id":evalDetailID,"materialListID":materialListID,"halfProdListID":hfListID,"resultMaterialJson":resultMaterialJson};
	$.ajax({
		type : "POST",
		async : false,
		url : "/JHTEvaluation/evalDetailUpdate4Material.do",
		data : evalDetailData,
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				flag = true;
				alert("材料成本测算保存成功!");
			}else{
				alert(jsonObj.msg);
			}
		}
	});
	return flag;
}

//存入数据库
function saveEvalDetail(){
	if(opraType=="view"){
		MaterialToCarton();
		return;
	}
	var hfFirstRowFlag = true;
	var tableEles = $('#tabDivs').find('table');
	for(var i=0;i<tableEles.length;i++){
		if($(tableEles[i]).find("tr").eq(1).children("td").eq(11).text()==""){
			hfFirstRowFlag = false;
			break;
		}
	}
	if(!hfFirstRowFlag){
		alert("数据未填充完整，请编辑！");
		return;
	}
	
	var materialListID = saveMaterialList();
	if(materialListID == ""){
		return;
	}
	var hfListID = saveHfList();
	if(hfListID == ""){
		return;
	}
	if(!updateEvalDetail(materialListID,hfListID)){
		return;
	}
	
	//多组件时，回填组件成本比例
	setCompRatio2ProDes();
	
	MaterialToCarton();
	
	window.parent.$material_result = genMaterialCost();
}
//===================================================保存并进入下一步部分End==========================================================

//删除一行
function delRow(obj){
	if($(obj).parents("tbody").children().length>1){
		var res = confirm('确认要删除吗？');  
		if(res == true){  
			$(obj).parents("tr").remove();  
			calProcessCost();
		}   
	}
}


//------------------------------ 公式 ------------------------------//
function selFormulaEle4ProcessBodyS(obj,formulaBanExp,formulaBanVal){
	var inputValue = $(obj).parents("tr").find("input[name='expansionRateInput']").val();
	var labelValue = "损耗1("+inputValue+")";
	if(inputValue==""){
		return;
	}
	$("#"+formulaBanExp).val($("#"+formulaBanExp).val()+labelValue);
	$("#"+formulaBanVal).val($("#"+formulaBanVal).val()+inputValue);
}
function selFormulaEle4ProcessBodyY(obj,formulaBanExp,formulaBanVal){
	var inputValue = $(obj).parents("tr").find("input[name='firstRate']").val();
	var labelValue = "损耗2("+inputValue+")";
	if(inputValue==""){
		return;
	}
	$("#"+formulaBanExp).val($("#"+formulaBanExp).val()+labelValue);
	$("#"+formulaBanVal).val($("#"+formulaBanVal).val()+inputValue);
}

function materialPrice4ProcessBody(obj){
	var inputValue = $(obj).parents("tr").find("input[name='processValueInput']").val();
	var lableValue = "单价("+inputValue+")";
	if(inputValue==""){
		return;
	}
	$("#formulaInput1").val($("#formulaInput1").val()+lableValue);
	$("#formulaInput2").val($("#formulaInput2").val()+inputValue);
}



function selFormulaEle(obj,formulaBanExp,formulaBanVal){
	var lableValue = $(obj)[0].parentNode.previousElementSibling.previousElementSibling.innerText;
	lableValue = lableValue.replace(":","");
	lableValue = lableValue.replace("：","");
	
	var inputValue = $(obj)[0].parentNode.previousElementSibling.childNodes[0].value;
	if(inputValue==""){
		return;
	}
	$("#"+formulaBanExp).val($("#"+formulaBanExp).val()+lableValue);
	$("#"+formulaBanVal).val($("#"+formulaBanVal).val()+inputValue);
}

function materialPrice4Process(obj){
	if($(obj)[0].parentNode.children[0].placeholder == "单耗"){
		var lableValue = $(obj)[0].parentNode.children[0].placeholder;
		var inputValue = $(obj)[0].parentNode.children[0].value;
		if(lableValue==""||inputValue==""){
			return;
		}
		$("#formulaInput1").val($("#formulaInput1").val()+lableValue);
		$("#formulaInput2").val($("#formulaInput2").val()+inputValue);
	}else{
		var lableValue = $(obj)[0].parentNode.parentNode.children[0].children[0].value;
		var inputValue = $($(obj)[0].parentNode.previousElementSibling.children[0]).val();
		if(lableValue==""||inputValue==""){
			return;
		}
		$("#formulaInput1").val($("#formulaInput1").val()+lableValue);
		$("#formulaInput2").val($("#formulaInput2").val()+inputValue);
	}
}

function formulaCalAdd(formulaBanExp,formulaBanVal){
	$("#"+formulaBanExp).val($("#"+formulaBanExp).val()+"+");
	$("#"+formulaBanVal).val($("#"+formulaBanVal).val()+"+");
}
function formulaCalReduce(formulaBanExp,formulaBanVal){
	$("#"+formulaBanExp).val($("#"+formulaBanExp).val()+"-");
	$("#"+formulaBanVal).val($("#"+formulaBanVal).val()+"-");
}
function formulaCalMultiply(formulaBanExp,formulaBanVal){
	$("#"+formulaBanExp).val($("#"+formulaBanExp).val()+"*");
	$("#"+formulaBanVal).val($("#"+formulaBanVal).val()+"*");
}
function formulaCalDivide(formulaBanExp,formulaBanVal){
	$("#"+formulaBanExp).val($("#"+formulaBanExp).val()+"/");
	$("#"+formulaBanVal).val($("#"+formulaBanVal).val()+"/");
}
function formulaCalrBacketL(formulaBanExp,formulaBanVal){
	$("#"+formulaBanExp).val($("#"+formulaBanExp).val()+"(");
	$("#"+formulaBanVal).val($("#"+formulaBanVal).val()+"(");
}
function formulaCalrBacketR(formulaBanExp,formulaBanVal){
	$("#"+formulaBanExp).val($("#"+formulaBanExp).val()+")");
	$("#"+formulaBanVal).val($("#"+formulaBanVal).val()+")");
}
function clearFormulaInput(formulaBanExp,formulaBanVal){
	$("#"+formulaBanExp).val("");
	$("#"+formulaBanVal).val("");
}

function calFormulaResult(formulaBanVal,materialPrice){
	if($("#"+formulaBanVal).val()!=""){
		try{
			var result = eval('('+$("#"+formulaBanVal).val()+')');
			$("#"+materialPrice).val(result.toFixed(2));
		}catch(e){
			alert("请检查计算公式！");
		}
	}
}
//------------------------------ 公式End ------------------------------//

function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function GUID() {
   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


////////////////////////////////page review///////////////////////////////////////
function reviewPage(){
	//上面的
	$.ajax({
		type : "POST",
		async : true,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/getMaterialListByListid.do?listID="+window.parent.evalHeadData.evalDetail.materialListID,
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				var jsonData = jsonObj.msg;
				if(opraType=="view"){
					viewMaterialPage(jsonData);
				}else if(opraType=="edit"){
					copyMaterialPage(jsonData);
				}
			}else{
				alert(jsonObj.msg);
			}
		}
	});
	//下面的
	$.ajax({
		type : "POST",
		async : true,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/getHPListByListid.do?listID="+window.parent.evalHeadData.evalDetail.halfProdListID,
		dataType : "text",
		success : function(json) {
			var jsonObj = eval('('+json+')');
			if(jsonObj.flag){
				var jsonData = jsonObj.msg;
				if(opraType=="view"){
					viewHPPage(jsonData);
				}else if(opraType=="edit"){
					copyHPPage(jsonData);
				}
			}else{
				alert(jsonObj.msg);
			}
		}
	});
}

function viewMaterialPage(jsonData){
	$("#materialHead").empty();
	var html = "";
	for(var i=0;i<jsonData.length;i++){
		html += "<tr><td>"+jsonData[i].materialNo+"</td>"
	    +"<td>"+jsonData[i].materialDesc+"</td>"
	    +"<td>"+jsonData[i].materialName+"</td>"
	    +"<td>"+jsonData[i].processType+"</td>"
	    +"<td>"+jsonData[i].materialCost+"</td>"
	    +"<td>"+jsonData[i].remark+"</td>"
	    +"<td hidden='hidden'>"+jsonData[i].manual+"</td>"
	    +"<td hidden='hidden'><input type='hidden' name='计算表达式' value='"+jsonData[i].formulaExpress+"'></td>"
	    +"<td hidden='hidden'><input type='hidden' name='计算公式值' value='"+jsonData[i].formulaVal+"'></td>"
	    +"<td hidden='hidden'><input type='hidden' name='原材料JSON' value='"+jsonData[i].materialJson+"'></td>"
	    +"<td hidden='hidden'><input type='hidden' name='加工JSON' value='"+jsonData[i].processJson+"'></td>"
	    +"<td hidden='hidden'><input type='hidden' name='其他JSON' value='"+jsonData[i].otherJson+"'></td>"
	    +"<td hidden='hidden'>"+jsonData[i].sku+"</td>"
		+"<td><div style＝\"float:left;\" class=\"btn-group\"><a onClick=\"addMaterial()\" href=\"javascript:void(0)\"><i class=\"fa fa-plus\"></i> </a></div>"
		+"&nbsp<a onClick='delBodyRow(this)' href='javascript:;'><i class=\"fa fa-minus\"></i></a>"
		+"&nbsp<div style＝\"float:right;\" class=\"btn-group\"> <a onClick=\"updateMaterialWindow(this,false)\" href=\"javascript:void(0)\" data-toggle=\"modal\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
	}
	//通过表体id把显示文本显示到网页中
	$("#materialHead").append(html);
	
	setCompRatio2ProDes();
}

function copyMaterialPage(jsonData){
	
}

function viewHPPage(jsonData){
	//step1:清除tabLabel,从第1个开始
	$("#addTabs").children().each(function(i,obj){
		if(i>0){
			$(this).remove();
		}
	});
	//step2:清除tab content,从第二个开始
	$("#specItem0").find("tbody:eq(0)").empty();
	$("#tabDivs").children().each(function(){
		if($(this).attr("id")!="specItem0"){
			$(this).remove();
		}else{
			$(this).addClass("active");
		}
	});
	//step3:清除规格下拉框
	$("#dropdown").find("option").each(function(){
		if($(this).text()!="复制"){
			$(this).remove();
		}
	});
	//step4:恢复tab content
	tabGuidMap = {};
	$("#specItem0").removeClass("active");
	var htmlInit = $("#specItem0").clone();
	
	for(var i=0;i<jsonData.length;i++){
		var tabName = jsonData[i].spec;
		var curid = "specItem0";
		if(!tabGuidMap.hasOwnProperty(tabName)){
			//新增规label和content  填充一行数据
			if(jQuery.isEmptyObject(tabGuidMap)){
				tabGuidMap[tabName]="specItem0";
				curid = "specItem0";
				$('#addTabs').append('<li class="active"><a onclick="getTbodyId(\'specItem0\')" href="#specItem0" data-toggle="tab">'+tabName+'</a></li>');
				$("#specItem0").addClass("active");
			}else{
				var id = "specItem"+GUID();
				curid = id;
				tabGuidMap[tabName]=id;
				var html = htmlInit;
				html.attr('id',id);
				$("#tabDivs").append(html);
				$('#addTabs').append('<li><a onclick="getTbodyId(\''+id+'\')" href="#'+id+'" data-toggle="tab">'+tabName+'<span><i onclick="delTabById(\''+id+'\',this);" style="margin-left:20px;cursor:pointer" class="fa fa-times"></i></span></a></li>');
			}
			$("#dropdown").append("<option value='"+tabName+"'>"+tabName+"</option>");
		}else{
			curid = tabGuidMap[tabName];
		}
		var htmlData = "";
		if(jsonData[i].classify=="加工费"){
			htmlData = "<tr><td>"+jsonData[i].spec+"</td>"
		    +"<td>"+jsonData[i].hpName+"</td>"
		    +"<td>加工费</td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td>"+jsonData[i].cost+"</td>"
		    +"<td>"+jsonData[i].remark+"</td>"
		    +"<td hidden='hidden'><input type='hidden' name='加工费json' value='"+JSON.stringify(jsonData[i].processCostJson)+"'/></td>"
		    +"<td><div style＝'float:left;' class='btn-group'><a onClick='addHalfProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div>"
			+"<a onClick='delBodyRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a>"
			+"<div style＝'float:right;' class='btn-group'> <a onClick='updateHalfProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td>"
			+"<td hidden='hidden'><input type='hidden' name='类型' value='加工费'></td></tr>";
		}else if(jsonData[i].classify=="辅料耗料"){
			htmlData = "<tr><td>"+jsonData[i].spec+"</td>"
		    +"<td>"+jsonData[i].hpName+"</td>"
		    +"<td>辅料耗料</td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td>"+jsonData[i].materialLoss+"</td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td></td>"
		    +"<td>"+jsonData[i].cost+"</td>"
		    +"<td>"+jsonData[i].remark+"</td>"
		    +"<td hidden='hidden'><input type='hidden' name='参考工厂'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='规格其他'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='占位' /></td>"
		    +"<td hidden='hidden'><input type='hidden' name='选择物料json' value='"+JSON.stringify(jsonData[i].selMaterialJson)+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算表达式' value='"+jsonData[i].formulaExpress+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算公式' value='"+jsonData[i].formulaVal+"'/></td>"
		    +"<td><div style＝'float:left;' class='btn-group'><a onClick='addHalfProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div>"
			+"<a onClick='delBodyRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a>"
			+"<div style＝'float:right;' class='btn-group'> <a onClick='updateHalfProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td>"
			+"<td hidden='hidden'><input type='hidden' name='类型' value='辅料耗料'></td></tr>";
		}else if(jsonData[i].classify=="主料耗料"){
			htmlData = "<tr><td>"+jsonData[i].spec+"</td>"
		    +"<td>"+jsonData[i].hpName+"</td>"
		    +"<td>"+jsonData[i].materailDesc+"</td>"
		    +"<td>"+jsonData[i].cutLength+"</td>"
		    +"<td>"+jsonData[i].cutWidth+"</td>"
		    +"<td>"+jsonData[i].cutHeight+"</td>"
		    +"<td>"+jsonData[i].cutOther+"</td>"
		    +"<td>"+jsonData[i].materialLoss+"</td>"
		    +"<td>"+jsonData[i].shrink+"</td>"
		    +"<td>"+jsonData[i].combingLoss+"</td>"
		    +"<td>"+jsonData[i].materialUnitLoss+"</td>"
		    +"<td>"+jsonData[i].cost+"</td>"
		    +"<td>"+jsonData[i].remark+"</td>"
		    +"<td hidden='hidden'><input type='hidden' name='参考工厂' value='"+jsonData[i].factory+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='规格其他' value='"+jsonData[i].specOther+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='裁片其他' value='"+jsonData[i].cutOther+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='选择物料json' value='"+JSON.stringify(jsonData[i].selMaterialJson)+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算表达式' value='"+jsonData[i].formulaExpress+"'/></td>"
		    +"<td hidden='hidden'><input type='hidden' name='计算公式值' value='"+jsonData[i].formulaVal+"'/></td>"
		    +"<td><div style＝'float:left;' class='btn-group'><a onClick='addHalfProduct()' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-plus'></i> </a></div>"
			+"<a onClick='delBodyRow(this)' href='javascript:;'><i class='fa fa-minus'></i></a>"
			+"<div style＝'float:right;' class='btn-group'> <a onClick='updateHalfProductdWin(this)' href='javascript:void(0)' data-toggle='modal'><i class='fa fa-pencil'></i></a></div></td>"
			+"<td hidden='hidden'><input type='hidden' name='类型' value='主料耗料'></td></tr>";
		}
		$($("#"+curid)[0].children[0].children[1]).append(htmlData);
	}
	
	calTotalCost();
	setCompRatio2ProDes();
}

function copyHPPage(jsonData){
	
}
////////////////////////////////////////////////////////////////////////////


$(function() {
	bindSearchEl($("#referenceFactoryHalfProduct"),path+"/dataBase-config/eval-factory.data",changeReferFacHalfProdFlag,null,"name",["code","name"],253);
	$.ajaxSettings.async = false;
	$.getJSON(path+"/dataBase-config/eval_processCost.data",function(data){
		$.each(data, function (i, obj) {
			//取加工分类
			var processClassifyTmp = obj.processClassify;
			if($.inArray(processClassifyTmp, processClassifyDB)<0){
				processClassifyDB.push(processClassifyTmp);
			}
			//取加工名称、加工单价、参考工厂、伸缩率、一等品率
			var processNameTmp = obj.processName;
			var costTmp = obj.cost;
			var factoryTmp = obj.factory;
			var expansionRateTmp = obj.expansionRate;
			var firstRateTmp = obj.firstRate;
			var processInfoJsonTmp = {"processName":processNameTmp,"cost":costTmp,"factory":factoryTmp,"expansionRate":expansionRateTmp,"firstRate":firstRateTmp};
			
			var processInfoArrayTmp = [];
			if(typeof(processInfoDB[processClassifyTmp])!="undefined"){
				processInfoArrayTmp = processInfoDB[processClassifyTmp];
			}
			processInfoArrayTmp.push(processInfoJsonTmp);
			processInfoDB[processClassifyTmp] = processInfoArrayTmp;
		});
	});
	
	//加工费下绑定加工分类下拉框
	$.each(processClassifyDB, function(i, processClassifyTmp) {
		processClassifyHtml += "<option value='" + processClassifyTmp + "'>" + processClassifyTmp + "</option>";
	});
	$("#processBody").find("select[name='MachType']").html(processClassifyHtml);

	bindSearchEl($("#materialBody").find("input[name='productName']"),path+"/dataBase-config/eval-materialName.data",null,changePdMaterialPrice,"name",["sku","name"],308);
	
	$.getJSON(path+"/dataBase-config/eval_processFengzhiCost.data",function(data){
		$.each(data, function (i, obj) {
			//取加工分类-缝制
			var processClassifyTmp = obj.processClassify;
			if($.inArray(processClassifyTmp, processClassifyFengzhiDB)<0){
				processClassifyFengzhiDB.push(processClassifyTmp);
			}
			//取加工名称、加工单价、参考工厂、伸缩率、一等品率、说明
			var processNameTmp = obj.processName;
			var costTmp = obj.cost;
			var factoryTmp = obj.factory;
			var expansionRateTmp = obj.expansionRate;
			var firstRateTmp = obj.firstRate;
			var processDescTmp = obj.processDesc;
			var processInfoJsonTmp = {"processName":processNameTmp,"cost":costTmp,"factory":factoryTmp,"expansionRate":expansionRateTmp,"firstRate":firstRateTmp,"processDesc":processDescTmp};
			
			var processInfoArrayTmp = [];
			if(typeof(processInfoFengzhiDB[processClassifyTmp])!="undefined"){
				processInfoArrayTmp = processInfoFengzhiDB[processClassifyTmp];
			}
			processInfoArrayTmp.push(processInfoJsonTmp);
			processInfoFengzhiDB[processClassifyTmp] = processInfoArrayTmp;
		});
	});
	//加工费下绑定加工分类下拉框
	$.each(processClassifyFengzhiDB, function(i, processClassifyTmp) {
		processClassifyFengzhiHtml += "<option value='" + processClassifyTmp + "'>" + processClassifyTmp + "</option>";
	});
	$("#classifyType").html(processClassifyFengzhiHtml);
	if(opraType=="view"||opraType=="edit"){
		reviewPage();
	}
});

