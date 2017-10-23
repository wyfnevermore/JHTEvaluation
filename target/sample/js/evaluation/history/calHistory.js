var _parent$ = window.parent.document;
function reviewCal(rowObj,opraType){
	$("#navId",_parent$).find("li[class='active']").removeClass("active");
	$("#histest",_parent$).addClass("active");
	if(rowObj.businessType == "dealing" || rowObj.businessType == "processing" ){
		location.href = path+"/jsp/evaluation/calculation.jsp?busyType="+rowObj.businessType+"&opraType="+opraType+"&rowObjStr="+encodeURI(JSON.stringify(rowObj));
	}else{
		location.href = path+"/jsp/evaluation/calculationSimple.jsp?busyType="+rowObj.businessType+"&opraType="+opraType+"&rowObjStr="+encodeURI(JSON.stringify(rowObj));
	}
}

function copyCal(rowObj){
	
}




function initTable(){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/eval_history.data"; 
    var $table = $('#calHistoryTable');  
   
   $table.bootstrapTable({  
	   url:"/JHTEvaluation/getEvalHistoryByPram.do",  
       method: 'post',      //请求方式（*）  
       //toolbar: '#toolbar',    //工具按钮用哪个容器  
       striped: true,      //是否显示行间隔色  
       cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）  
       pagination: true,     //是否显示分页（*）  
       sortable: false,      //是否启用排序  
       sortOrder: "asc",     //排序方式  
       contentType: "application/x-www-form-urlencoded",
       pageNumber:1,      //初始化加载第一页，默认第一页  
       pageSize: 10,      //每页的记录行数（*）  
       pageList: [5, 10, 20, 50, 100],  //可供选择的每页的行数（*）
       undefinedText: "-",
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
       clickToSelect: false,    //是否启用点击选中行  
       uniqueId: "id",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
         
       sidePagination: "server", //服务端处理分页  
	       columns: [  
	         {checkbox:true, align: 'center',valign: 'middle'},
	         {title: '测算单号',field: 'calListID',align: 'center',valign: 'middle'},
	         {title: '版本号',field: 'versionB',align: 'center',valign: 'middle'},
	         {title: '报价人',width:100,field: 'quotePerson',align: 'center',valign: 'middle'}, 
	         {title: '报价货币',width:80,field: 'quoteCurrency',align: 'center',valign: 'middle'},
	         {title: '报价汇率',visible: false,field: 'quotationRate',align: 'center',valign: 'middle'},
	         {title: '贸易形式',visible: false,field: 'tradeForm', align: 'center',valign: 'middle'}, 
	         {title: '客户',field: 'custom', align: 'center',valign: 'middle'},  
	         {title: '产品名称',field: 'productName',align: 'center',valign: 'middle'},
	         {title: '产品类型',visible: false,field: 'productType',align: 'center',valign: 'middle'},
	         {title: 'HS索引',visible: false,field: 'hsCode',align: 'center',valign: 'middle'},
	         {title: '国家',visible: false,field: 'country',align: 'center',valign: 'middle'},
	         {title: '退税税率（%）',visible: false,field: 'drawBackRate',align: 'center',valign: 'middle'},
	         {title: '是否手动',visible: false,field: 'manual',align: 'center',valign: 'middle'},
	         {title: '是否套件',visible: false,field: 'isConComponent',align: 'center',valign: 'middle'},
	         {title: '做工描述',visible: false,field: 'workDesc',align: 'center',valign: 'middle'},
	         {title: '包装描述',visible: false,field: 'packageDesc',align: 'center',valign: 'middle'},
	         {title: '测算备注',visible: false,field: 'evalRemark',align: 'center',valign: 'middle'},
	         {title: '创建日期',field: 'createTime',align: 'center',valign: 'middle'},
	         {title: '测算状态',width:80,field: 'calState',align: 'center',valign: 'middle'},
	         {title: '其他Json',visible: false,field: 'otherJson',align: 'center',valign: 'middle'},
	         {title: '操作',width:80,align: 'center',valign: 'middle',formatter:formatOperat}
	 ]   
     });  
}

function formatOperat(value,row,index){
	return[
		'<a title="查看" href="javascript:void(0)" class="active" onClick=\'reviewCal('+JSON.stringify(row)+',"view")\' ><i class="fa fa-arrows text-active" ></i></a>&nbsp'
		+'<a title="复制" href="javascript:void(0)" class="active" onClick=\'copyCal('+JSON.stringify(row)+')\' ><i class="fa fa-copy text-active"></i></a>&nbsp'
		+'<a title="编辑" href="javascript:void(0)" class="active" onClick=\'reviewCal('+JSON.stringify(row)+',"edit")\' ><i class="fa fa-edit text-active"></i></a>'];
}


$(function() {
	initTable();
});