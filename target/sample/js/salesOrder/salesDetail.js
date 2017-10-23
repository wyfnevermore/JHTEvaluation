//var path = "<%=path%>";

$(function() {
	initTable();
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
});  
  
  //添加
function addSales(){
	initTable();
	$("#addSales").modal('show');
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

//报价版本
//var sharePriceV = "V2";
//点击确定
function updateSales(){
	//读json文件，执行毛利率-客户毛利率>5 
	selectData = $('#salesOrderTable').bootstrapTable('getSelections');  
	$("#addSales").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	$.each(selectData, function (i, obj) {
		var html = "<tr><td>" + obj.evalNumber+"</td><td>"+obj.productDesc
		+ "</td><td>"+obj.spec+"</td><td>"+obj.custmerName+"</td><td>"+obj.unitPrice+"</td><td>"+sharePriceV
		+ "</td><td><a onclick=\"addSales();\" href=\"javaScript:void(0);\"><i class=\"fa fa-plus\"></i></a>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#sptbody").append(html);
	});

}



//生产销售订单
function createSalesOrder(){
	if($("#sptbody").children().length>1){
		location.href = "/JHTEvaluation/jsp/salesOrder/salesOrder.jsp";
	}
	else if($("#sptbody").children().length==1){
		if($("#sptbody").find("td:eq(0)").html()!=""){
			location.href = "/JHTEvaluation/jsp/salesOrder/salesOrder.jsp";	
		}else{
			alert("没有添加其他测算单！");
			return;
		}
	}
	else{
		alert("没有添加其他测算单！");
		return;
	}
}


//生成工单
function createJOrder(){
	initJobTable();
	$("#jobOrder").modal('show');
	}



//生成加工合同
function createPurOrder(){
	initContractTable();
	$("#buildJobOrder").modal('show');
}

//生成用料
function createMOrder(){
	initContractTable();
	$("#buildMOrder").modal('show');
}


function signBack(){
	$("#signBack").modal('show');
}

function initTable(){  
   var $table = $('#salesHistory');  
   
   $table.bootstrapTable({  
       url:"/JHTEvaluation/querySalesHistory.do",  
       method: 'post',     //请求方式（*）  
		//toolbar: '#toolbar',    //工具按钮用哪个容器  
		striped: true,      //是否显示行间隔色  
		cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）  
		pagination: true,     //是否显示分页（*）  
		sortable: false,      //是否启用排序  
		sortOrder: "asc",     //排序方式 
		contentType: "application/x-www-form-urlencoded",
//		queryParams: function (params) {//自定义参数，这里的参数是传给后台的，我这是是分页用的  
//           return {//这里的params是table提供的  
//           	pageNumber: 1,//从数据库第几条记录开始  
//           	pageSize: 10//找多少条  
//           };  
//       },//传递参数（*）
		pageNumber:1,      //初始化加载第一页，默认第一页  
		pageSize: 10,      //每页的记录行数（*）  
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
       uniqueId: "salesOrderID",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  	
         
       sidePagination: "server", //服务端处理分页  
             columns: [  
                     {title: '订单单号',field: 'orderNumber',align: 'center',valign: 'middle'},
                     {title: '订单类型',field: 'orderType',align: 'center',valign: 'middle'},
                     {title: '客户简称',field: 'customerNumber',align: 'center',valign: 'middle'},
                     {title: '客户地址',field: 'customerAddress',align: 'center',valign: 'middle'},
                     {title: '付款条件',field: 'paymentTerm',align: 'center',valign: 'middle'},
                     {title: '部门',field: 'departmentName',align: 'center',valign: 'middle'},
                     {title: '订单编号',field: 'orderNumber',align: 'center',valign: 'middle'},
                     {title: '贸易条款',field: 'tradeTerm',align: 'center',valign: 'middle'},
                     {title: '折扣率',field: 'discountRate', align: 'center',valign: 'middle'},  
                    /* {title: '生产加工合同状态',field: 'ContractStatus',align: 'center',valign: 'middle'},*/  
             ]  
     });  
} 

//工单点击确定
function updateJobOrder(){
	//selectData = $('#jobOrderTable').bootstrapTable('getData');  
	$("#jobOrder").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	
}

//回签点击确定
function updateSignBack(){
	//selectData = $('#jobOrderTable').bootstrapTable('getData');  
	alert("上传成功！");
	$("#signBack").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	
}

//合同点击确定
function updateContract(){
	//selectData = $('#jobOrderTable').bootstrapTable('getData');  
	alert("生成成功！");
	$("#buildJobOrder").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	
}

//用料单点击确定
function updateMetar(){
	//selectData = $('#jobOrderTable').bootstrapTable('getData');  
	$("#buildMOrder").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	
}


function updateSolesOrder(){
	$("#buildJobOrder").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
}

function initJobTable(){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/eval_jobOrder.data"; 
   var $table = $('#hisOrderTable');  
   
   $table.bootstrapTable({  
       url: url,   
       method: 'get',      //请求方式（*）  
       //toolbar: '#toolbar',    //工具按钮用哪个容器  
       striped: true,      //是否显示行间隔色  
       cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）  
       pagination: true,     //是否显示分页（*）  
       sortable: false,      //是否启用排序  
       sortOrder: "asc",     //排序方式  
       //queryParams: queryParams,//传递参数（*）  
       pageNumber:1,      //初始化加载第一页，默认第一页  
       pageSize: 10,      //每页的记录行数（*）  
       pageList: [5, 10, 20, 50, 100],  //可供选择的每页的行数（*）
       pagination: true, //分页
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
       uniqueId: "productSKU",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
         
      // sidePagination: "server", //服务端处理分页  
             columns: [  
                       {checkbox:true, align: 'center',valign: 'middle',visible:false},
                     {title: '成品SKU',field: 'productSKU',align: 'center',valign: 'middle'},
                     {title: '成品名称',field: 'productName',align: 'center',valign: 'middle'},
                     {title: '规格',field: 'spec',align: 'center',valign: 'middle'},  
                     {title: '报价',field: 'quotedPrice', align: 'center',valign: 'middle'},  
                     {title: '操作', field: 'id',align: 'center',formatter:function(value,index){  
                         var d = ' <a title="工单预览" href="javaScript:void(0);" onClick="checkJobOrder(this);" class="active"><i class="fa fa-file-o"></i></a>&nbsp;&nbsp;<a onclick="addProduct();" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>';
                              return d;  
                       } } 
             ]  
     });  
}  

//工单预览
function checkJobOrder(obj){
	var productName = $(obj).parents("tr").children().eq(1).html();
	var productSKU = $(obj).parents("tr").children().eq(0).html();
	var productSpec = $(obj).parents("tr").children().eq(2).html();
	var productPrice = $(obj).parents("tr").children().eq(3).html();
	var jobOrderInfo = [{"productSKU":"101001","material":"填充棉","Consumption":"10","outputRate":"99.00"}];
	var value = productName+","+productSpec+","+productPrice;
	//先写个死的
	var html='<div class="tab-pane"  style="margin-bottom:20px" id="'+productSKU+'" name="'+value+'"> '
	+'<table  class="table b-t b-light text-sm"><tr><td>物料名称：</td><td>填充棉</td></tr><tr><td>用量：</td><td>2.3</td></tr>'
	+'<tr><td>产出率：</td><td>98.00	</td></tr><tr><td>物料名称：</td><td>花布</td><td></td></tr><tr><td>用量：</td><td>2.3</td></tr>'
	+'<tr><td>产出率：</td><td>97.00	</td></tr></table> '
	+'<label style="height: 40px;width:150px;float:right;" class="btn btn-sm btn-default">'
	+'<span style="font-size:20px">保存工单</span></label></div>';
	$("#tabContent").append(html);
	$("#addTabs").append("<li><a href=\"#"+productSKU+"\" data-toggle=\"tab\">物料1</a></li>");

}

//工单预览
function checkConOrder(obj){
	var productName = $(obj).parents("tr").children().eq(1).html();
	var productSKU = $(obj).parents("tr").children().eq(0).html();
	var productSpec = $(obj).parents("tr").children().eq(2).html();
	var productPrice = $(obj).parents("tr").children().eq(3).html();
	var jobOrderInfo = [{"productSKU":"101001","material":"填充棉","Consumption":"10","outputRate":"99.00"}];
	var value = productName+","+productSpec+","+productPrice;
	//先写个死的
	var html='<div class="tab-pane"  style="margin-bottom:20px" id="'+productSKU+'" name="'+value+'"> '
	+'<table  class="table b-t b-light text-sm"><tr><td>物料名称：</td><td>填充棉</td></tr><tr><td>用量：</td><td>2.3</td></tr>'
	+'<tr><td>产出率：</td><td>98.00	</td></tr><tr><td>物料名称：</td><td>花布</td><td></td></tr><tr><td>用量：</td><td>2.3</td></tr>'
	+'<tr><td>产出率：</td><td>97.00	</td></tr></table> '
	+'<label style="height: 40px;width:150px;float:right;" class="btn btn-sm btn-default">'
	+'<span style="font-size:20px">保存工单</span></label></div>';
	$("#tabContent1").append(html);
	$("#addTabs1").append("<li><a href=\"#"+productSKU+"\" data-toggle=\"tab\">物料1</a></li>");

}

function addProduct(){
	
}

//合同保存
function saveContract(){
	//selectData = $('#jobOrderTable').bootstrapTable('getData');  
	alert("保存成功！");
	
}


//加工合同
function initContractTable(){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/eval_jobOrder.data"; 
   var $table = $('#jobOrderTable');  
   
   $table.bootstrapTable({  
       url: url,   
       method: 'get',      //请求方式（*）  
       //toolbar: '#toolbar',    //工具按钮用哪个容器  
       striped: true,      //是否显示行间隔色  
       cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）  
       pagination: true,     //是否显示分页（*）  
       sortable: false,      //是否启用排序  
       sortOrder: "asc",     //排序方式  
       //queryParams: queryParams,//传递参数（*）  
       pageNumber:1,      //初始化加载第一页，默认第一页  
       pageSize: 10,      //每页的记录行数（*）  
       pageList: [5, 10, 20, 50, 100],  //可供选择的每页的行数（*）
       pagination: true, //分页
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
       uniqueId: "productSKU",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
         
      // sidePagination: "server", //服务端处理分页  
             columns: [  
                       {checkbox:true, align: 'center',valign: 'middle',visible:false},
                     {title: '成品SKU',field: 'productSKU',align: 'center',valign: 'middle'},
                     {title: '成品名称',field: 'productName',align: 'center',valign: 'middle'},
                     {title: '规格',field: 'spec',align: 'center',valign: 'middle'},  
                     {title: '报价',field: 'quotedPrice', align: 'center',valign: 'middle'},  
                     {title: '操作', field: 'id',align: 'center',formatter:function(value,index){  
                         var d = ' <a title="工单预览" href="javaScript:void(0);" onClick="checkConOrder(this);" class="active"><i class="fa fa-file-o"></i></a>&nbsp;&nbsp;<a onclick="addProduct();" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>';
                              return d;  
                       } } 
             ]  
     }); 
   } 