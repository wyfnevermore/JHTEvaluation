
var salesJson=[];
//添加
function addSales(){
	initTable();
	$("#addSales").modal('show');
}

function changeCustomSelFlag(flag){
	customSelFlag = flag;
}

$(function() {
	var path = "/JHTEvaluation";
	function getGrossProfitRate(param){
		customName = param.customName;//获取客户全称
		$("#country").val(selectedCountryName);
	}
	bindSearchEl($("#customerID"),path+"/dataBase-config/eval-customerData.data",changeCustomSelFlag,null,"brifeName",["code","brifeName"],220);

//	贸易形式
	$.getJSON(path + "/dataBase-config/eval-tradeForm.data",function(data){
		var tradeForm = data;
		var temp_html3;
		$.each(tradeForm,function(i, obj){
			temp_html3+="<option value='"+obj.tradeFormt+"'>"+obj.tradeFormt+"</option>";
		});
		$("#tradeForm").html(temp_html3);
	});

//	交易币种
	$.getJSON(path + "/dataBase-config/eval_quoteCurrency.data",function(data){
		var quoteCurrency = data;
		var temp_html;
		$.each(quoteCurrency,function(i, obj){
			temp_html+="<option value='"+obj.quoteCurrencyName+"'>"+obj.quoteCurrencyName+"</option>";
		});
		$("#currency").html(temp_html);
	});

});


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
		//总计 = 执行价格*数量ß
		var totalNum =  obj.implUnitPrice * obj.number;
		var html = "<tr><td style=\"display:none;\">"+obj.evaluationNumber+"</td><td>" + obj.qoutationNumber+"</td><td>"+obj.qoVersion+"</td><td>"+obj.productName+"</td><td style=\"width:50px\"><a title=\"替换料\" onClick=\"replace(this);\" href=\"javaScript:void(0);\"><i class=\"fa fa-mail-reply-all\"></i></a>"
		+ "</td><td>"+obj.materialDes+ "</td><td>"+obj.specification+"</td><td  width=\"60px;\"><input type=\"text\" class=\"form-control\">"
		+"</td><td  width=\"60px;\"><input type=\"text\" class=\"form-control\">"
		+"</td><td>"+obj.performPrice
		+"</td><td  width=\"60px;\"><input type=\"text\" class=\"form-control\">" 
		+"</td><td  width=\"200px;\"><input name =\"timeInput\" type=\"text\" class=\"form-control\"  value=\"2017-01-01 00:00\"  class=\"form-control\">" 
		+"</td><td width=\"200px;\"><input type=\"text\" class=\"form-control\">"
		+ "</td><td><a onclick=\"addSales();\" href=\"javaScript:void(0);\"><i class=\"fa fa-plus\"></i></a>&nbsp;<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i>" 
		+"</a>&nbsp;<a title=\"替换料\" href=\"javaScript:replaceMateriel()\"><i class=\"fa fa-mail-reply-all\"></i></a>&nbsp;<a title=\"复制\" onClick=\"copyProduct(this);\" href=\"javaScript:void(0);\"><i class=\"fa fa-copy\"></i></a></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#sptbody").append(html);
	});

	$("#sptbody").find("input[name='timeInput']").each(function(){
		$(this).datetimepicker({
			format: 'yyyy-mm-dd hh:ii',//日期的格式
			startDate:'1900-01-01',//选择器的开始日期
			autoclose:true,//日期选择完成后是否关闭选择框
			bootcssVer:3,//显示向左向右的箭头
			language:'cn',//语言
			minView:0,//表示日期选择的最小范围，默认是hour
			initialDate:new Date(),
		});	
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


//生成空的销售订单
function initSalesOrder(){
	location.href = "/JHTEvaluation/jsp/salesOrder/salesOrder.jsp";
}

//生产销售订单，下一步
function createSalesOrder(){
	var destination = $("#destination").val();
	var deliveryMethod =$("#deliveryMethod").find("option:selected").text();
	var provenance = $("#provenance").val();
	var packageDes = $("#packageDes").val();
	
	var salesOrderResult = [];
	
	if($("#sptbody").children().length>1){
		var valueTrs = $("#sptbody").find("tr");
		var tds;
		for(var i=1;i<valueTrs.length;i++){
			tds = valueTrs[i].children;
			salesOrderResult.push({"evaluationNumber":tds[0].innerText,"qoutationNumber":tds[1].innerText,"evaluationVersion":tds[2].innerText,"productName":tds[3].innerText,"materialDes":tds[5].innerText,
				"specification":tds[6].innerText,"qoQuantity":$(tds[7]).find("input").val(),"qoUnit":$(tds[8]).find("input").val(),
				"evaluationPrice":tds[9].innerText,"performPrice":$(tds[10]).find("input").val(),"deliveryData":new Date($(tds[11]).find("input").val()),"qoRemark":$(tds[12]).find("input").val()});
			} 
		//ajax调用后台方法，返回销售订单的实体对象
			$.ajax({
			type : "POST",
			async : false,
			contentType : 'application/json;charset=utf-8',
			url : "/JHTEvaluation/createSalesOrder.do?deliveryMethod="+deliveryMethod+"&provenance="+provenance+"&destination="+destination+"&packageDes="+packageDes+"&",
			data :  JSON.stringify(salesOrderResult),
			dataType : "text",
			success : function(json) {
				//alert(json);
				//var jsonObj = eval('('+json+')');
				//alert(jsonObj);
				location.href = "/JHTEvaluation/jsp/salesOrder/salesOrder.jsp?salesOrderJson="+json;
			}
		});
		
		
	}
	else if($("#sptbody").children().length==1){
		if($("#sptbody").find("td:eq(0)").html()!=""){
			var valueTrs = $("#sptbody").find("tr");
			var tds;
			for(var i=1;i<valueTrs.length;i++){
				tds = valueTrs[i].children;
				salesOrderResult.push({"evaluationNumber":tds[0].innerText,"qoutationNumber":tds[1].innerText,"evaluationVersion":tds[2].innerText,"productName":tds[3].innerText,"materialDes":tds[5].innerText,
					"specification":tds[6].innerText,"qoQuantity":$(tds[7]).find("input").val(),"qoUnit":$(tds[8]).find("input").val(),
					"evaluationPrice":tds[9].innerText,"performPrice":$(tds[10]).find("input").val(),"deliveryData":new Date($(tds[11]).find("input").val()),"qoRemark":$(tds[12]).find("input").val()});
				}
			//ajax调用后台方法，返回销售订单的实体对象
				$.ajax({
				type : "POST",
				async : false,
				contentType : 'application/json;charset=utf-8',
				url : "/JHTEvaluation/createSalesOrder.do?deliveryMethod="+deliveryMethod+"&provenance="+provenance+"&destination="+destination+"&packageDes="+packageDes+"&",
				data :  JSON.stringify(salesOrderResult),
				dataType : "text",
				success : function(json) {
					//alert(json+"11");
					//var jsonObj = eval('('+json+')');
					
					location.href = "/JHTEvaluation/jsp/salesOrder/salesOrder.jsp?salesOrderJson="+json;
				}
			});
			
			
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



//初始化查报价单表
function initTable(){  
   var $table = $('#salesOrderTable');  
   
   $table.bootstrapTable({  
	   url:"/JHTEvaluation/importQueryQoHeader.do",  
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
                       {checkbox:true, align: 'center',valign: 'middle'},
                       {title: 'id',field: 'id', visible: false, align: 'center',valign: 'middle'},   
                       {title: '测算单号',field: 'evaluationNumber',align: 'center',valign: 'middle'},
                       {title: '报价单号',field: 'qoutationNumber',align: 'center',valign: 'middle'},
                       {title: '成品名称',field: 'productName',align: 'center',valign: 'middle'}, 
                       {title: '物料描述',field: 'materialDes', align: 'center',valign: 'middle'},  
                       {title: '规格',field: 'specification', align: 'center',valign: 'middle'},  
                       {title: '报价单价',field: 'performPrice',align: 'center',valign: 'middle'},
                       {title: '报价时间',field: 'qoutationTime',align: 'center',valign: 'middle',
                    	   formatter: function (value, row, index) {
                               return changeDateFormat(value)
                            }
                       }
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

