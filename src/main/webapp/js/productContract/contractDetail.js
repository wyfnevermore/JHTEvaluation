//var path = "<%=path%>";

$(function() {
	getContractLineHistory();
	
});  

//删除一行
function delRow(obj){
	if($(obj).parents("tbody").children().length>1){
		var res = confirm('确认要删除吗？');  
		if(res == true){  
			$(obj).parents("tr").remove();  
		}
	}	
}

function getContractLineHistory(){

  var data = $("#ContractLineHistorySearchForm").serialize();
  var url = "/JHTEvaluation/getContractLineHistory.do";
  $.post(url , {} ,function(json){
    initTable($.parseJSON(json));
    console.log(json);
  });
}

function initTable(json){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/eval_contractDetail.data"; 
   var $table = $('#contractDetail');  
   
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
       uniqueId: "projectID",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
         
      // sidePagination: "server", //服务端处理分页  
             columns: [  
                       {checkbox:true, align: 'center',valign: 'middle'},
                     {title: '项目号',field: 'projectID',align: 'center',valign: 'middle'},
                     {title: '产品名称',field: 'materialName',align: 'center',valign: 'middle'},
                     {title: '发送日期',field: 'deliveryDate',align: 'center',valign: 'middle'},  
                     {title: '用户名称',field: 'custmerName', align: 'center',valign: 'middle'},  
                     {title: '生产数量',field: 'produceNum',align: 'center',valign: 'middle'},  
                     {title: '运输方式',field: 'tradeForm',align: 'center'},
                     {title: '部门',field: 'department', align: 'center',valign: 'middle'},  
                     {title: '操作', field: 'id',align: 'center',formatter:function(value,index){  
                    	  var e = '<a title="查看" href=""  class="active"><i class="fa fa-eye"></i></a> ';  
                              return e;  
                          } } 
             ]  
     });  
}  