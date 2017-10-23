
var salesJson=[];
//添加
function addSales(){
	initTable();
	$("#addSales").modal('show');
}


//替换料
function replaceMateriel(){
	if($("#sptbody").children().length>1){
		initMateriel();
		initProduct();
		//判断物料类型，去除经销下的替换按钮
		$("#materBody").find("tr").each(function(){
	        var tdArr = $(this).children();
	        var mtype = tdArr.eq(4).html();
	        if(mtype == "经销"){
	        	tdArr.eq(5).html("");
	        }
	    });
		
		$("#replaceMateriel").modal('show');
	}
	else if($("#sptbody").children().length==1){
		if($("#sptbody").find("td:eq(0)").html()!=""){
			initMateriel();
			initProduct();
			$("#materBody").find("tr").each(function(){
		        var tdArr = $(this).children();
		        var mtype = tdArr.eq(4).html();
		        if(mtype == "经销"){
		        	tdArr.eq(5).html("");
		        }
		    });
			$("#replaceMateriel").modal('show');
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
var sharePriceV = "V2";
//点击确认添加
function updateSales(){
	//读json文件，执行毛利率-客户毛利率>5 
	
	selectData = $('#salesOrderTable').bootstrapTable('getSelections');  
	$("#addSales").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	$.each(selectData, function (i, obj) {
		//总计 = 执行价格*数量
		var totalNum =  obj.implUnitPrice * obj.number;
		var html = "<tr><td>" + obj.evalNumber+"</td><td>"+sharePriceV+"</td><td>"+obj.productName+"</td><td style=\"width:50px\"><a title=\"替换料\" onClick=\"replace(this);\" href=\"javaScript:void(0);\"><i class=\"fa fa-mail-reply-all\"></i></a>"
		+ "</td><td>"+obj.materielDesc+ "</td><td>"+obj.spec+"</td><td>"+obj.number+"</td><td>"+obj.unit
		+"</td><td>"+obj.unitPrice+"</td><td>"+obj.price+"</td><td>"+obj.deliveryDate+"</td><td><input type=\"text\" class=\"form-control\">"
		+ "</td><td><a onclick=\"addSales();\" href=\"javaScript:void(0);\"><i class=\"fa fa-plus\"></i></a>&nbsp;<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i>" 
		+"</a>&nbsp;<a title=\"替换料\" href=\"javaScript:replaceMateriel()\"><i class=\"fa fa-mail-reply-all\"></i></a>&nbsp;<a title=\"复制\" onClick=\"copyProduct(this);\" href=\"javaScript:void(0);\"><i class=\"fa fa-copy\"></i></a></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#sptbody").append(html);
	});

}

//复制
function copyProduct(obj){
	$(obj).parents("tr").after($(obj).parents("tr").clone());
}

//替换料里面的确定按钮
function replaceBing(){
	$("#replaceMateriel").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');	
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

function initTable(){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/eval_salesOrder.data"; 
   var $table = $('#salesOrderTable');  
   
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
       uniqueId: "id",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
         
      // sidePagination: "server", //服务端处理分页  
             columns: [  
                       {checkbox:true, align: 'center',valign: 'middle'},
                       {title: 'id',field: 'id', visible: false, align: 'center',valign: 'middle'},   
                       {title: '测算单号',field: 'evalNumber',align: 'center',valign: 'middle'},
                       {title: '成品名称',field: 'productName',align: 'center',valign: 'middle'}, 
                       {title: '物料描述',field: 'materielDesc', align: 'center',valign: 'middle'},  
                       {title: '规格',field: 'spec', align: 'center',valign: 'middle'},  
                       {title: '数量',field: 'number',align: 'center',valign: 'middle'},  
                       {title: '单位',field: 'unit',align: 'center'},
                       {title: '单价',field: 'unitPrice',align: 'center',valign: 'middle'}, 
                       {title: '金额',field: 'price',align: 'center',valign: 'middle'}, 
                       {title: '交货时间',field: 'deliveryDate',align: 'center',valign: 'middle'}
             ]  
     });  
} 

//替换
var tr="";
function replace(obj){
	initReplaceM();
	tr = $(obj).closest("tr");
	$("#replaceMater").modal('show');
}
//成品替换里的替换按钮
function closeReplace(){
	//获取物料描述只能替换一个
	//selectData = $('#MaterTable').bootstrapTable('getSelections');  
	//获取一行
	var tdArr = $("#MaterTable").find("tr").eq(1).find("td");
	var value = tdArr.eq(1).html();
	tr.find("td:eq(2)").html(value);
	$("#replaceMater").modal("hide");
	//$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
}


//物料列表
function initMateriel(){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/salesList/eval_materielList.data"; 
  var $table = $('#MaterielTable');  
  
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
      pageSize: 5,      //每页的记录行数（*）  
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
      uniqueId: "MaterielSKU",      //每一行的唯一标识，一般为主键列  
     // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
        
     // sidePagination: "server", //服务端处理分页  
            columns: [  
                    {title: '物料SKU',field: 'MaterielSKU',align: 'center',valign: 'middle'},
                    {title: '物料描述',field: 'materielDesc',align: 'center',valign: 'middle'},
                    {title: '物料名称',field: 'materielName',align: 'center',valign: 'middle'}, 
                    {title: '', field: 'MaterielSKU',align: 'center',formatter:function(value,index){  
                        var c = ' <a title="替换" href="javaScript:replace();"><i class="fa fa-mail-reply-all"></i></a>';
                             return c;
                         } 
                    },
                    {title: '物料类型',field: 'materielType', align: 'center',valign: 'middle'},
                    {title: '', field: 'MaterielSKU',align: 'center',formatter:function(value,index){  
                        var d = ' <a title="替换" href="javaScript:replaceMateriel1();"><i class="fa fa-mail-reply-all"></i></a>';
                             return d;
                         } 
                    } 
            ]  
    });  
}  

//替换料
function replaceMateriel1(){
		//initMateriel();
	//initProduct();
		$("#replaceMater1").modal('show');
	
}

//替换料第二层
function showReplace2(){
	//initReplaceM();
	$("#replaceMater2").modal('show');
}

//初始化成品列表
function initProduct(){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/salesList/eval_productList.data"; 
 var $table = $('#productTable');  
 
 $table.bootstrapTable({  
     url: url,   
     method: 'get',      //请求方式（*）  
     //toolbar: '#toolbar',    //工具按钮用哪个容器  
     striped: true,      //是否显示行间隔色  
     cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）  
     pagination: false,     //是否显示分页（*）  
     sortable: false,      //是否启用排序  
     sortOrder: "asc",     //排序方式  
     //queryParams: queryParams,//传递参数（*）  
     pageNumber:1,      //初始化加载第一页，默认第一页  
     pageSize: 5,      //每页的记录行数（*）  
     pageList: [5, 10, 20, 50, 100],  //可供选择的每页的行数（*）
     pagination: true, //分页
     paginationLoop:false,
     paginationPreText:'上一页',
     paginationNextText:'下一页',
     singleSelect: false,
     minimumCountColumns: 2,    //最少允许的列数  
     clickToSelect: true,    //是否启用点击选中行  
     uniqueId: "serialNumber",      //每一行的唯一标识，一般为主键列  
    // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
       
    // sidePagination: "server", //服务端处理分页  
           columns: [  
                   {title: '成品序号',field: 'serialNumber',align: 'center',valign: 'middle'},
                   {title: '成品描述',field: 'productDesc',align: 'center',valign: 'middle'},
                   {title: '原成品名称',field: 'rawProduct',align: 'center',valign: 'middle'},  
                   {title: '替换成品名称',field: 'replaceProduct',align: 'center',valign: 'middle'},  
                   {title: '物料名称',field: 'bindingMateriel', align: 'center',valign: 'middle'},
                   {title: '操作', field: 'serialNumber',align: 'center',formatter:function(value,index){  
                       var d = ' <a title="替换" href="javaScript:replace();"><i class="fa fa-mail-reply-all"></i></a>&nbsp;&nbsp;'
                    	   +'<a title="绑定" href="javaScript:binding();" class="active"><i class="fa fa-bold"></i></a>&nbsp;';
                            return d;  
                        } }
           ]  
   });  
} 


function initReplaceM(){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/salesList/eval_replaceMateriel.data"; 
 var $table = $('#MaterTable');  
 
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
     pageSize: 5,      //每页的记录行数（*）  
     pageList: [5, 10, 20, 50, 100],  //可供选择的每页的行数（*）
     pagination: true, //分页
     paginationLoop:false,
     paginationPreText:'上一页',
     paginationNextText:'下一页',
     singleSelect: false,
     minimumCountColumns: 2,    //最少允许的列数  
     clickToSelect: true,    //是否启用点击选中行  
     uniqueId: "materielSKU",      //每一行的唯一标识，一般为主键列  
    // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
       
    // sidePagination: "server", //服务端处理分页  
           columns: [  
        	   	   {title: '物料SKU',field: 'materielSKU',align: 'center',valign: 'middle'},
                   {title: '物料名称',field: 'materielName',align: 'center',valign: 'middle'},
                  
           ]  
   });  
} 


//预览
function perview(obj){
	$(obj).attr("href","http://115.29.198.253:8080/JHTEvaluation/priceShare.xlsx");
	
}
/*//关闭绑定窗口
function closeBinding(){
	$("#bindingMater").modal("hide");
	//$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
}

//绑定
function binding(){
	//获取父物料清单的table
	$("#mtbody").empty();
	$("#materBody").find("tr").each(function(){
		 var tdArr = $(this).children();
		 var html = '';
		html ="<tr><td><input type=\"checkbox\"></td><td>" + tdArr.eq(0).html()
		+ "</td><td>"+tdArr.eq(1).html()+"</td><td>"+tdArr.eq(2).html()+"</td><td>"+tdArr.eq(3).html()+"</td></tr>";
		$("#mtbody").append(html);
	});
	$("#bindingMater").modal('show');
}

*/

