//var path = "<%=path%>";

$(function() {
	initTable();
});  
  
//生成工单
function createJOrder(){
	$("#jobOrder").modal('show');
	}

function initTable(){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/eval_gatherDetail.data"; 
   var $table = $('#purchaseSell');  
   
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
       uniqueId: "evalID",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
         
      // sidePagination: "server", //服务端处理分页  
             columns: [  
                     {checkbox:true, align: 'center',valign: 'middle'},
                     {title: '测算单号',field: 'evalID',align: 'center',valign: 'middle'},
                     {title: '成品描述',field: 'productDesc',align: 'center',valign: 'middle'},
                     {title: '规格',field: 'spec',align: 'center',valign: 'middle'},
                     {title: '客户名称',field: 'custmerName',align: 'center',valign: 'middle'},  
                     {title: '报价单价',field: 'unitPrice', align: 'center',valign: 'middle'},  
                     {title: '报价版本',field: 'offerVersion',align: 'center',valign: 'middle'}, 
                     {title: '操作', field: 'id',align: 'center',formatter:function(value,index){  
                         var d = '<a title="生成工单" href="javaScript:createJOrder();" class="active"><i class="fa fa-file-o"></i></a>';
                              return d;  
                          } } 
             ]  
     });  
}  