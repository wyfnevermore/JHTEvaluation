function cartonToFreight(){
	var transId = "expenses";
	window.parent.tabIframe(transId);
}

//暂停按钮，保存table数据进数据库
function saveCartonCost(){
	//纸箱判断第一行报价成本是否为空，为空需要先编辑
	var cartonValue = $('#cartonData').find("tr:eq(0)").find("td:eq(11)").text();
	if(cartonValue==""){
		alert("数据未填充完整，请编辑！");
		return;
	}
	window.parent.unitVolume = $("#cartonData").find("tr:eq(0)").find("td:eq(7)").text();
	window.parent.$carton_result=cartonValue;
	cartonToFreight();
}

//点击编辑里确定
var tr ="";
function updateCarton(){
	$("#cartonForm").submit();
	var mixf = !$("#cartonForm input").hasClass('parsley-error');
	if(mixf == true){
		$("#updateCartonCost").modal("hide");
		$(".modal-backdrop").remove();
		$("body").removeClass('modal-open');
	}
	else{
		return;
	}
	tr.find("td:eq(0)").text($("#specLength").val()) ; 
	tr.find("td:eq(1)").text($("#specWidth").val()) ; 
	tr.find("td:eq(2)").text($("#specHeight").val()) ; 
	tr.find("td:eq(3)").text($("#cartonLength").val()) ; 
	tr.find("td:eq(4)").text($("#cartonWidth").val()) ; 
	tr.find("td:eq(5)").text($("#cartonHeight").val()) ; 
	tr.find("td:eq(6)").text($("#qtInCarton").val()) ; 
	tr.find("td:eq(7)").text($("#unitVolume").val()) ; 
	tr.find("td:eq(8)").text($("#unitCartonCost").val()) ; 
	tr.find("td:eq(9)").text($("#unitCartCost").val()) ; 
	tr.find("td:eq(10)").text($("#unitPanelCost").val()) ; 
	tr.find("td:eq(11)").text($("#quoteCost").val()) ; 
	tr.find("td:eq(12)").text($("#formulaInput1").val()) ; 
	tr.find("td:eq(13)").text($("#formulaInput2").val()) ; 

}

//carton中编辑		
function getCarton(obj) {
	//获取选中的行
	tr = $(obj).closest("tr");
	$("#updateCartonCost").modal("show");
	//获取列值，赋值给弹出框
	$("#specLength").val(tr.find("td:eq(0)").html());
	$("#specWidth").val(tr.find("td:eq(1)").html());
	$("#specHeight").val(tr.find("td:eq(2)").html());
	$("#cartonLength").val(tr.find("td:eq(3)").html());
	$("#cartonWidth").val(tr.find("td:eq(4)").html());
	$("#cartonHeight").val(tr.find("td:eq(5)").html());
	$("#qtInCarton").val(tr.find("td:eq(6)").html());
	$("#unitVolume").val(tr.find("td:eq(7)").html());
	$("#unitCartonCost").val(tr.find("td:eq(8)").html());
	$("#unitCartCost").val(tr.find("td:eq(9)").html());
	$("#unitPanelCost").val(tr.find("td:eq(10)").html());
	$("#quoteCost").val(tr.find("td:eq(11)").html());
	$("#formulaInput1").val(tr.find("td:eq(12)").html());
	$("#formulaInput2").val(tr.find("td:eq(13)").html());
}

//------------------------------ 公式 ------------------------------//
function selFormulaEle(obj){
	var lableValue = $(obj)[0].parentNode.previousElementSibling.previousElementSibling.innerText;
	lableValue = lableValue.replace(":","");
	lableValue = lableValue.replace("：","");
	var inputValue = $(obj)[0].parentNode.previousElementSibling.childNodes[0].value;
	if(inputValue==""){
		return;
	}
	$("#formulaInput1").val($("#formulaInput1").val()+lableValue);
	$("#formulaInput2").val($("#formulaInput2").val()+inputValue);
}
function formulaCalAdd(){
	$("#formulaInput1").val($("#formulaInput1").val()+"+");
	$("#formulaInput2").val($("#formulaInput2").val()+"+");
}
function formulaCalReduce(){
	$("#formulaInput1").val($("#formulaInput1").val()+"-");
	$("#formulaInput2").val($("#formulaInput2").val()+"-");
}
function formulaCalMultiply(){
	$("#formulaInput1").val($("#formulaInput1").val()+"*");
	$("#formulaInput2").val($("#formulaInput2").val()+"*");
}
function formulaCalDivide(){
	$("#formulaInput1").val($("#formulaInput1").val()+"/");
	$("#formulaInput2").val($("#formulaInput2").val()+"/");
}
function formulaCalrBacketL(){
	$("#formulaInput1").val($("#formulaInput1").val()+"(");
	$("#formulaInput2").val($("#formulaInput2").val()+"(");
}
function formulaCalrBacketR(){
	$("#formulaInput1").val($("#formulaInput1").val()+")");
	$("#formulaInput2").val($("#formulaInput2").val()+")");
}
function clearFormulaInput(){
	$("#formulaInput1").val("");
	$("#formulaInput2").val("");
}
function calFormulaResult(obj){
	try{
		var result = eval('('+$("#formulaInput2").val()+')');
		$(obj)[0].parentNode.previousElementSibling.children[0].value=result;
	}catch(e){
		alert("请检查计算公式！");
	}
}

//计算纸箱单价
function calCartValue(){
	var cartonCost="";
	if($("#unitCartCost").val()!="" && $("#unitPanelCost").val()!="" ){
		cartonCost=parseFloat($("#unitCartCost").val())+parseFloat($("#unitPanelCost").val());
	}		
	$("#quoteCost").val(cartonCost);	
}

//------------------------------ 公式End ------------------------------//

$(function() {


});