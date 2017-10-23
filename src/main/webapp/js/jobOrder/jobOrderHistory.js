$(document).ready(function(){
	getJobOrderByJoOrder();
});

function getJobOrderByJoOrder(){
	var data = $("#JobOrderHistorySearchForm").serialize();
	var url = "/JHTEvaluation/getJobOrderHistory.do";
	$.post(url , {"seq":1} ,function(json){
		initTable($.parseJSON(json));
		console.log(json);
	});

}

function initTable(json){  
   var $table = $('#contractHistory');  
   
   $table.bootstrapTable({  
       data : json, 
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
                     {title: '工单号',field: 'headerId',align: 'center',valign: 'middle'},
                     {title: '销售订单号',field: 'soHeaderId',align: 'center',valign: 'middle'},
                     {title: '项目号',field: 'soHeaderId',align: 'center',valign: 'middle'},
                     {title: '成品/物料名称',field: 'materialName',align: 'center',valign: 'middle'},
                     {title: '数量',field: 'status',align: 'center',valign: 'middle'},  
                     {title: '加工类型',field: 'materialSku', align: 'center',valign: 'middle'},  
                     {title: '成品分类',field: 'department',align: 'center',valign: 'middle'}, 
                     {title: '需求加工数',field: 'supplier',align: 'center',valign: 'middle'}, 
                     {title: '单位',field: 'soLineId',align: 'center',valign: 'middle'}, 
                     {title: '操作', field: 'headerId',align: 'center',formatter:function(value,index){  
                         var d = '<a title="生成加工合同" href="javaScript:createJOrder();" class="active"><i class="fa fa-file-o"></i></a>';
                              return d;  
                          } } 
             ]  
     });  
}  