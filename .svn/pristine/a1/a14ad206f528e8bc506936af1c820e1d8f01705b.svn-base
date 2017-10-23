$(function() {
	var path = "/JHTEvaluation";
	function getGrossProfitRate(param){
		customName = JSON.parse(param).customName;//获取客户全称
	}
	bindSearchEl($("#customerID"),path+"/dataBase-config/eval-customerData.data",null,getGrossProfitRate,"brifeName",["customID","brifeName"],220);
	bindSearchEl($("#custom"),path+"/dataBase-config/eval-customerData.data",null,getGrossProfitRate,"brifeName",["customID","brifeName"],220);

	//贸易形式
	$.getJSON(path + "/dataBase-config/eval-tradeForm.data",function(data){
		var tradeForm = data;
		var temp_html3;
		$.each(tradeForm,function(i, obj){
			temp_html3+="<option value='"+obj.tradeFormt+"'>"+obj.tradeFormt+"</option>";
		});
		$("#tradeForm").html(temp_html3);
	});

	
	//交易币种
	$.getJSON(path + "/dataBase-config/eval_quoteCurrency.data",function(data){
		var quoteCurrency = data;
		var temp_html3;
		$.each(quoteCurrency,function(i, obj){
			temp_html3+="<option value='"+obj.quoteCurrencyName+"'>"+obj.quoteCurrencyName+"</option>";
		});
		$("#currency").html(temp_html3);
	});
});

var selectData=[];

function chackEval(){
	alert("查询到。。");
}

//点击确定
function updateSharePrice(){
	//读json文件，执行毛利率-客户毛利率>5 
	selectData = $('#sharePriceTable').bootstrapTable('getSelections');  
	$("#addSharePrice").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	
	$.each(selectData, function (i, obj) {
		if (obj.productName == null) { 
			obj.productName ="";
		}
		if (obj.listID == null) { 
			obj.listID ="";
		}
		if (obj.versionB == null) { 
			obj.versionB ="";
		}
		var html = "<tr><td>" + obj.productName+"</td><td>"+obj.listID
		+"</td><td>"+obj.versionB+"</td><td>"+obj.spec+"</td><td>"+obj.imptProfitRate+"</td><td>"+obj.quotePrice+"</td><td>"+obj.implementPrice
		+"</td><td>" 
		+"</td><td>" 
		+"</td><td>" 
		+"</td><td>" 
		+"</td><td>" 
		+ "</td><td><a title=\"查看\" href=\"javaScript:chackEval();\"  class=\"active\"><i class=\"fa fa-eye\"></i></a>&nbsp;&nbsp;<a onclick=\"addSharePrice();\" href=\"javaScript:void(0);\"><i class=\"fa fa-plus\"></i></a>"
		+ "&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a>"
		+ "&nbsp;&nbsp;<a title=\"上传图片\" href=\"javaScript:uploadPicture();\"><i class=\"fa fa-picture-o\"></i></a>&nbsp;&nbsp;<a title=\"补全\" onClick=\"completion(this)\" href=\"javaScript:void(0);\"><i class=\"fa fa-paste\"></i></a></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#sptbody").append(html);
	});
}

var tr="";
//补全
function completion(obj){
	tr = $(obj).closest("tr");
	$("#completion").modal('show');
}

//补全上的确定按钮
function complCofirm(){
	tr.find("td:eq(7)").html($("#flatNum").val());
	tr.find("td:eq(8)").html($("#PackageDesc").val());
	tr.find("td:eq(9)").html($("#productDesc").val());
	tr.find("td:eq(10)").html($("#rawMaterial").val());
	tr.find("td:eq(11)").html($("#remark").val());
	$("#completion").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
}

//上传图片
function uploadPicture(){
	$("#upload").modal('show');
}

//上传图片确定按钮
function uploadPictureBut(){
	$("#upload").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
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

//保存
function saveSharePrice(){
	if($("#sptbody").children().length>1 && $('table tr:first td').eq(0).html()!="" ){
	var sharePriceResult = [];
	var valueTrs = $("#sptbody").find("tr");
	var tds;
	for(var i=1;i<valueTrs.length;i++){
		tds = valueTrs[i].children;
		sharePriceResult.push({"productName":tds[0].innerText,"productSku":"111","evaluationNumber":tds[1].innerText,"evaluationVersion":001,
			"specification":tds[3].innerText,"performGrossMargin":12.0,"evaluationPrice":10.0,
			"performPrice":22.0,"splitAmount":10,"packageDes":tds[8].innerText,"productDes":tds[9].innerText,
			"materialDes":tds[10].innerText,"remark":tds[11].innerText});
		}
	
	var sharePriceHeader = {"customId":$("#customerID").val(),"inquirer":$("#inquirer").val(),"qoCurrency":$("#currency").val()
			,"tradeForm":$("#tradeForm").find("option:selected").text(),"createTime":new Date(),"qoutationTime":new Date(),
			"qoStatus":"已生成","qoVersion":0,"createUserId":"10111"};
	
	
	//保存头信息
		$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/saveQoHeader.do",
		data :  JSON.stringify(sharePriceHeader),
		dataType : "text",
		success : function(json) {
		}
	});
		
		//保存行信息
		$.ajax({
			type : "POST",
			async : false,
			contentType : 'application/json;charset=utf-8',
			url : "/JHTEvaluation/saveQoLine.do",
			data : JSON.stringify(sharePriceResult),
			dataType : "text",
			success : function(json) {
				alert(json);
			}
		});
	
		}else{
			alert("请添加数据！");
		}
}

function preview(obj){
	$(obj).attr("href","http://115.29.198.253:8080/JHTEvaluation/priceShare.xlsx");
}

//判断是否需要执行审批
function tipsValue(){
	var tips = 0;
	var path = "/JHTEvaluation";
	var grossProfitRate="";
	//客户的
	var url = path+"/dataBase-config/eval-customerData.data"; 
	$.getJSON(url,function(data){
		var sharePriceJson = data;
		$.each(sharePriceJson, function (i, obj) {
			if(obj.brifeName == $("#customerID").val()){
				grossProfitRate = obj.grossProfitRate;
			}
		});
	}); 
	if(grossProfitRate == ""){
		tips=-1;
		return tips;
	}
	$.each(selectData, function (i, obj) {
		if(Math.abs(obj.implGMarginRate-grossProfitRate)>15){
			tips++;
		}
	});
	return tips;
}

//生成表单
function submitOfferList(obj){
	var tips =  tipsValue();
	if(tips == -1){
		alert("没有对应的客户，请重新填写！");
		return;
	}
	if($("#sptbody").children().length>1 && $('table tr:first td').eq(0).html()!="" ){
		if(tips==0){
			//$(obj).wrap("http://115.29.198.253:8080/JHTEvaluation/priceShare.xlsx");	
			$(obj).attr("href","http://115.29.198.253:8080/JHTEvaluation/priceShare.xlsx");
		}
		else if(tips>0){
			if(typeof($(obj).attr("href"))!="undefined")
			{
				$(obj).removeAttr("href");	
			}
			alert("执行毛利率和客户毛利率的差值大约15，请先审批！");
			//显示审批按钮
			$("#submitA").show();
			return;
		}
	}
	else{
		if(typeof($(obj).attr("href"))!="undefined")
		{
			$(obj).removeAttr("href");	
		}
		alert("没有测试数据！");
		return;
	}
}

//生成报价单
function submitApproval(){
	var tips =  tipsValue();
	if(tips == -1){
		alert("没有对应的客户，请重新填写！");
		return;
	}
	$("#sharePriceForm").submit();
	//alert("21142");
	var mixf = $("#sharePriceForm input").hasClass('parsley-error');
	if(mixf){
		return;
	}
	//大于0，需要提交审批
	if($("#sptbody").children().length>1 && $('table tr:first td').eq(0).html()!="" ){
		if(tips==0){
			alert("执行毛利率和客户毛利率的差值小于或等于5，无需审批！");
			return;
		}
	}
	else{
		alert("没有测试数据！");
		return;
	}

	//提交到历史报价
	var res = confirm('确认要提交审批吗？');  
	if(res == true){  
		alert("提交成功!");
		$("#submitA").hide();
	}
	/*$("#priceCheckOut").modal('show');
	$("#custmerName").text($("#customerID").val());
	$("#sharePrice1").text($("#offerTopic").val());*/

}

//新增并初始化table
function addSharePrice(){
	//需要先填写客户和主题
	if($("#customerID").val()=="" && $("#inquirer").val()==""){
		alert("请先填写客户和询价人！");
		return;
	}

	$("#currency1").html($("#currency").find("option:selected").text());
	$("#tradeForm1").html($("#tradeForm").find("option:selected").text());

	$("#addSharePrice").modal('show');
	// $("#sptbody").html("");
	$('#evalStartTime').datetimepicker({
		format: 'yyyy-mm-dd hh:ii',//日期的格式
		startDate:'1900-01-01',//选择器的开始日期
		autoclose:true,//日期选择完成后是否关闭选择框
		bootcssVer:3,//显示向左向右的箭头
		language:'cn',//语言
		minView:0,//表示日期选择的最小范围，默认是hour
		initialDate:new Date(),
	});
	$('#evalEndTime').datetimepicker({
		format: 'yyyy-mm-dd hh:ii',//日期的格式
		startDate:'1900-01-01',//选择器的开始日期
		autoclose:true,//日期选择完成后是否关闭选择框
		bootcssVer:3,//显示向左向右的箭头
		language:'cn',//语言
		minView:0,//表示日期选择的最小范围，默认是hour
		initialDate :new Date(),
	});
	initTable();
}

function initTable(){  
	var $table = $('#sharePriceTable');  

	$table.bootstrapTable({  
		url:"/JHTEvaluation/queryEvalResult.do",
		//data:jsonData,
		method: 'post',      //请求方式（*）  
		//toolbar: '#toolbar',    //工具按钮用哪个容器  
		striped: true,      //是否显示行间隔色  
		cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）  
		pagination: true,     //是否显示分页（*）  
		sortable: false,      //是否启用排序  
		sortOrder: "asc",     //排序方式 
		contentType: "application/x-www-form-urlencoded",
//		queryParams: function (params) {//自定义参数，这里的参数是传给后台的，我这是是分页用的  
//            return {//这里的params是table提供的  
//            	pageNumber: this.offset,//从数据库第几条记录开始  
//            	pageSize: this.pageNumber//找多少条  
//            };  
//        },//传递参数（*）
		pageNumber:1,      //初始化加载第一页，默认第一页  
		pageSize: 5,      //每页的记录行数（*）  
		undefinedText: "-",
		pageList: [5, 10, 20, 50, 100],  //可供选择的每页的行数（*）
		pagination: true, //分页
		queryParamsType:'',// 设置为 ''  在这种情况下传给服务器的参数为：pageSize,pageNumber
		paginationLoop:false,
		paginationPreText:'上一页',
		paginationNextText:'下一页',
		singleSelect: false,
		//showPaginationSwitch:false,//是否显示数据条数选择框
		//search: true,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端  
		//strictSearch: true,  
		//showColumns: true,     //是否显示所有的列  
		//showRefresh: true,     //是否显示刷新按钮  
		minimumCountColumns: 2,    //最少允许的列数  
		clickToSelect: true,    //是否启用点击选中行  
		uniqueId: "id",      //每一行的唯一标识，一般为主键列  
		// showToggle:false,     //是否显示详细视图和列表视图的切换按钮  

		 sidePagination: "server", //服务端处理分页  
		columns: [
			{checkbox:true, align: 'center',valign: 'middle'},
			{title: 'id',field: 'id', visible: false, align: 'center',valign: 'middle'},   
			{title: '成品名称',field: 'productName',align: 'center',valign: 'middle'},  
			{title: '测算单号',field: 'listID',align: 'center',valign: 'middle'},
			{title: '测算版本',field: 'versionB',align: 'center',valign: 'middle'},  
			{title: '规格',field: 'spec', align: 'center',valign: 'middle'},  
			{title: '测算时间',field: 'createTime',align: 'center',valign: 'middle',
				 formatter: function (value, row, index) {
                     return changeDateFormat(value)} 
			},
			{title: '执行毛利率',field: 'imptProfitRate',align: 'center',valign: 'middle'},  
             {title: '测算单价',field: 'quotePrice',align: 'center'},
             {title: '执行单价',field: 'implementPrice',align: 'center'}
			]  
	});  
}

//修改——转换日期格式(时间戳转换为datetime格式)
function changeDateFormat(cellval) {
    if (cellval != null) {
    	var d = new Date(cellval);
    	return d.toLocaleDateString();
    }
}