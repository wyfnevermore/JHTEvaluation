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
  

//生成工单
function createJOrder(){
	$("#jobOrder").modal('show');
	}

function initTable(){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/eval_businessDepartmentHistory.data"; 
   var $table = $('#contractHistory');  
   
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
       uniqueId: "purchaseOrderID",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
         
      // sidePagination: "server", //服务端处理分页  
             columns: [  
                     {title: '工单号',field: 'contractID',align: 'center',valign: 'middle'},
                     {title: '销售订单号',field: 'BusinessModel',align: 'center',valign: 'middle'},
                     {title: '项目号',field: 'projectNumber',align: 'center',valign: 'middle'},
                     {title: '成品/物料名称',field: 'procedure',align: 'center',valign: 'middle'},
                     {title: '数量',field: 'supplier',align: 'center',valign: 'middle'},  
                     {title: '加工类型',field: 'createTime', align: 'center',valign: 'middle'},  
                     {title: '成品分类',field: 'salesOrderStatus',align: 'center',valign: 'middle'}, 
                     {title: '需求加工数',field: 'supplier',align: 'center',valign: 'middle'}, 
                     {title: '单位',field: 'productName',align: 'center',valign: 'middle'}, 
                     {title: '操作', field: 'id',align: 'center',formatter:function(value,index){  
                         var d = '<a title="生成加工合同" href="javaScript:createJOrder();" class="active"><i class="fa fa-file-o"></i></a>';
                              return d;  
                          } } 
             ]  
     });  
}  