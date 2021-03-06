$(function() {
	var path = "/JHTEvaluation";
	function getGrossProfitRate(param){
		customName = JSON.parse(param).customName;//获取客户全称
	}
	bindSearchEl($("#customer"),path+"/dataBase-config/eval-customerData.data",null,getGrossProfitRate,"brifeName",["customID","brifeName"],220);

	
	initTable();
	var docWidth = $(document).width();
  var docHeight = $(document).height();
	var textWidth = $("#login_title").width(); 
  var logoWidth = $("#login_logo").width();
  $("#login_header").css("height",(docHeight*0.5));
  $("#login_header").css("margin-top",(0));
	//$("#login_title").css("margin-left",(docWidth-(43+logoWidth))/2-textWidth/2);


  var textHeight = $("#login_title").width();
  $("#right_Login_Alert").css("height",(docHeight*0.5));


  
  var rightAlertWidth = $("#right_Login_Alert").width();          
  angle.style.height = $("#right_Login_Alert").height()+"px";
  angle.style.width = $("#right_Login_Alert").width()+"px";

  
  

  var leftImgHeight = $("#login_img").height(); 
  $("#left_img").css("margin-top",((textHeight)/2)-(leftImgHeight/2));
  
});

//创建销售订单
function sendToSales(obj){
	var tr = $(obj).closest("tr");
	var sharePriceV = tr.find("td:eq(2)").html();
	if(tr.find("td:eq(5)").html() == "已审批"){
		location.href = "/JHTEvaluation/jsp/salesOrder/importSales.jsp?sharePriceV="+sharePriceV;
	}
	else{
		alert("该条报价需要先进行审批！");
		return;
	}
}

function initTable(){  
   var $table = $('#hisSharePrice');  
   
   $table.bootstrapTable({  
       url:"/JHTEvaluation/queryQoHeader.do",  
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
       uniqueId: "headerId",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  	
         
       sidePagination: "server", //服务端处理分页  
             columns: [
            	 	{title: 'headerid',field: 'headerId', visible: false, align: 'center',valign: 'middle'},   
                       {title: '报价单号',field: 'qoutationNumber', align: 'center',valign: 'middle'},   
                     {title: '版本号',field: 'qoVersion',align: 'center',valign: 'middle'},  
                     {title: '报价人',field: 'createUserId',align: 'center',valign: 'middle'},
                     {title: '客户',field: 'customId',align: 'center',valign: 'middle'},  
                     {title: '创建日期',field: 'createTime', align: 'center',valign: 'middle',
                    	 formatter: function (value, row, index) {
                             return changeDateFormat(value)
                         } 
                     },
                     {title: '报价状态',field: 'qoStatus',align: 'center',valign: 'middle'},
                     {title: '销售订单次数',field: 'salesOrderNum',align: 'center',valign: 'middle'},
                     {title: '备库订单次数',field: 'preparationNum',align: 'center',valign: 'middle'},
                     {title: '操作', field: 'id',align: 'center',formatter:function(value,row,index){  
                      var e = '<a title="查看/编辑" onClick=\'updateSharePrice('+JSON.stringify(row)+')\' href="javaScript:void();"  class="active"><i class="fa fa-pencil"></i></a> ';  
                      var d = '  <a title="复制" href="javaScript:void(0);" onclick=\'copySharePrice('+JSON.stringify(row)+')\' class="active" ><i class="fa fa-copy text-active"></i></a>&nbsp;'
                    	  +'<a title="下载" href="javaScript:void(0);" onClick="preview(this);" class="active"><i class="fa fa-download"></i></a>&nbsp;'
                    	  +'<a title="创建销售/备库订单" href="javaScript:void(0);" onclick="sendToSales(this);" class="active"><i class="fa fa-pencil-square-o"></i></a></td>'; 
                           return e+d;  
                       } } 
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

//////////////////////////////////////////////查看/编辑，复制/下载////////////////////////////////////////////
//复制，入库并使数据加1
function copySharePrice(obj){
	var sharePriceHeader = {"evaluationNumber":obj.evaluationNumber,"qoVersion":obj.qoVersion,
			"createUserId":obj.createUserId,"customId":obj.customId,"createTime":new Date(),"tradeForm":obj.tradeForm,
			"qoStatus":"已生成","salesOrderNum":obj.salesOrderNum,"preparationNum":obj.preparationNum,"inquirer":obj.inquirer,
			"qoCurrency":obj.qoCurrency,"qoutationTime":obj.qoutationTime};
	
	//保存头信息
		$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/saveQoHeaderInPr.do",
		data :  JSON.stringify(sharePriceHeader),
		dataType : "text",
		success : function(json) {
			alert("复制成功！");
			initTable();
		}
	});
		window.location.reload();
}

//编辑
var headerId = "";
function updateSharePrice(obj){
	//0的情况为草稿状态
	headerId = obj.headerId;
	$("#tradeForm").find("option[value = '"+obj.tradeForm+"']").attr("selected","selected");
	$("#qoCurrency").find("option[value = '"+obj.qoCurrency+"']").attr("selected","selected");
	$("#qoutationNumber").val(obj.qoutationNumber);
	$("#qoVersion").val(obj.qoVersion);
	$("#createUserId").val(obj.createUserId);
	$("#customId").val(obj.customId);
	$("#inquirer").val(obj.inquirer);
	//$("#evaluationNumber").val(obj.evaluationNumber);
	
	//差一个报价时间
	$('#qoutationTime').datetimepicker({
		format: 'yyyy-mm-dd hh:ii',//日期的格式
		startDate:'1900-01-01',//选择器的开始日期
		autoclose:true,//日期选择完成后是否关闭选择框
		bootcssVer:3,//显示向左向右的箭头
		language:'cn',//语言
		minView:0,//表示日期选择的最小范围，默认是hour
		initialDate:new Date(obj.qoutationTime),
	});
	var date = new Date(obj.qoutationTime);
	
	$("#qoutationTime").attr("value",date.Format("yyyy-MM-dd hh:mm"));
	if(obj.qoStatus=="已生成" || obj.qoStatus=="待审批"){
		$("#qoutationNumber").attr("disabled",'disabled');
	}else if(obj.qoStatus=="已审批"){
		$("#qoutationNumber").attr("disabled",'disabled');
		//$("#evaluationNumber").attr("disabled",'disabled');
		$("#tradeForm").attr("disabled",'disabled');
		$("#qoCurrency").attr("disabled",'disabled');
		$("#createUserId").attr("disabled",'disabled');
		$("#customId").attr("disabled",'disabled');
		$("#inquirer").attr("disabled",'disabled');
		$("#qoutationTime").attr("disabled",'disabled');
	}
	$("#sharePrice").modal('show');
}

//编辑里面的确定按钮
function saveSharePrice(){
	var sharePriceHeader = {"qoutationNumber":$("#qoutationNumber").val(),"qoVersion":$("#qoVersion").val(),
			"createUserId":$("#createUserId").val(),"customId":$("#customId").val(),"tradeForm":$("#tradeForm").find("option:selected").text(),
			"qoStatus":"已生成","salesOrderNum":1,"preparationNum":1,"inquirer":$("#inquirer").val(),
			"qoCurrency":$("#qoCurrency").find("option:selected").text(),"qoutationTime":new Date($("#qoutationTime").val())};
	//更新头信息
	$.ajax({
		type : "POST",
		async : false,
		contentType : 'application/json;charset=utf-8',
		url : "/JHTEvaluation/updateQoHeaderInPr.do?headerId="+headerId,
		data :  JSON.stringify(sharePriceHeader),
		dataType : "text",
		success : function(json) {
			alert(json);
			initTable();
			window.location.reload();
		}
	});
	$("#sharePrice").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
}



//下载
function preview(obj){
	$(obj).attr("href","http://115.29.198.253:8080/JHTEvaluation/priceShare.xlsx");
}

//时间格式化
Date.prototype.Format = function(fmt)     
{   
//author:wangweizhen  
  var o = {     
    "M+" : this.getMonth()+1,                 //月份     
    "d+" : this.getDate(),                    //日  
    "h+" : this.getHours(),                   //小时     
    "m+" : this.getMinutes(),                 //分     
    "s+" : this.getSeconds(),                 //秒     
    "q+" : Math.floor((this.getMonth()+3)/3), //季度     
    "S"  : this.getMilliseconds()             //毫秒     
  };     
  if(/(y+)/.test(fmt))     
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));     
  for(var k in o)     
    if(new RegExp("("+ k +")").test(fmt))     
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));     
  return fmt;     
}; 



