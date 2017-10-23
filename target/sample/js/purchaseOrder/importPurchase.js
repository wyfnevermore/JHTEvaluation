
var salesJson=[];
//添加
function addPurchase(){

	
	//initTable();
	//$("#addPurchase").modal('show');
	getQoLineList();
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
var SoLineList = new Array();
//点击确定
function updateSales(){
	//读json文件，执行毛利率-客户毛利率>5 
	selectData = $('#purchaseTable').bootstrapTable('getSelections');  
	$("#addPurchase").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	$.each(selectData, function (i, obj) {
/*
{title: '项目号',field: 'lineNum',align: 'center',valign: 'middle'},
                     {title: '销售订单号',field: 'headerId',align: 'center',valign: 'middle'},
                     {title: '成品描述',field: 'productName',align: 'center',valign: 'middle'},  
                     {title: '规格',field: 'specification', align: 'center',valign: 'middle'},  
                     {title: '成品SKU',field: 'lineId',align: 'center',valign: 'middle'} 





                     */
                     obj.deliveryDate = timeStamp2String(obj.deliveryDate.time);
SoLineList.push(obj);

                     var html = "<tr><td>" + obj.projectNumber+"</td><td>"+obj.orderNumber
                     + "</td><td>"+obj.productName+"</td><td>"+obj.specification+"</td><td>"+obj.productSKU
                     + "</td><td><a onclick=\"addPurchase();\" href=\"javaScript:void(0);\"><i class=\"fa fa-plus\"></i></a>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#sptbody").append(html);
	});
}

function getQoLineList(){
	var data = $("#PurchaseOrderQoLineSearchForm").serialize();
	var url = "/JHTEvaluation/getPurchaseOrderSoLine.do";
	$.post(url , {} ,function(json){
		console.log(json);
		initTable($.parseJSON(json));
		$("#addPurchase").modal('show');
	});


}

//生产销售订单
function createPurchase(){
	var param = new Array();
	param.push("c5a89788b2dd407d86efddf760dfce13");
	location.href = "/JHTEvaluation/jsp/purchaseOrder/purchaseOrder.jsp?hids="+JSON.stringify(param);
	return;//临时需要生成空的采购订单---2017-10-21
	if(SoLineList.length < 1){
		alert("请导入采购成品");
		return false;
	}
	
	var url = "/JHTEvaluation/generatePoOrder.do";
	console.log( JSON.stringify(SoLineList) );
	$.post(url , {"json":JSON.stringify(SoLineList)} ,function(json){
		console.log(json);
		var poList = $.parseJSON(json);
		var param = new Array();
		for (var i = 0; i < poList.length; i++) {
			var po = poList[i];
			param.push(po.poHeader.headerId);
		}
		
		if($("#sptbody").children().length>1){
			location.href = "/JHTEvaluation/jsp/purchaseOrder/purchaseOrder.jsp?hids="+JSON.stringify(param);
		}
		else if($("#sptbody").children().length==1){
			if($("#sptbody").find("td:eq(0)").html()!=""){
				location.href = "/JHTEvaluation/jsp/purchaseOrder/purchaseOrder.jsp?hids="+JSON.stringify(param);
			}else{
				alert("没有添加其他测算单！");
				return;
			}
		}
		else{
			alert("没有添加其他测算单！");
			return;
		}
		
	});


	
}


function timeStamp2String(time){
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    //return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
   return year + "/" + month + "/" + date;
}

function initTable(json){  
//	 var methodNameSearch=$("#methodNameSearch").val(); 
//	var requestUrl = "/manage/json/validateMethodDefineSearchList.json?methodNameSearch=" + methodNameSearch;  
var path = "/JHTEvaluation";
var url = path+"/dataBase-config/eval_purchaseOrder1.data"; 
var $table = $('#purchaseTable');  

$table.bootstrapTable({  
       data:json,      //请求方式（*）  
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
       uniqueId: "lineId",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  

      // sidePagination: "server", //服务端处理分页  
      columns: [  
      {checkbox:true, align: 'center',valign: 'middle'},
      {title: '项目号',field: 'projectNumber',align: 'center',valign: 'middle'},
      {title: '销售订单号',field: 'orderNumber',align: 'center',valign: 'middle'},
      {title: '成品描述',field: 'productName',align: 'center',valign: 'middle'},  
      {title: '规格',field: 'specification', align: 'center',valign: 'middle'},  
      {title: '成品SKU',field: 'productSKU',align: 'center',valign: 'middle'} 
      ]  
  });  
}  