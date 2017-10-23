//var path = "<%=path%>";
var saveJoHeader;
var addOrUpdate = "add";
var lineNo = 0;
var tr;
$(function() {
//	initTable();
	$('#createTime').datetimepicker({
	    format: 'yyyy-mm-dd hh:ii',//日期的格式
	    startDate:'1900-01-01',//选择器的开始日期
	    autoclose:true,//日期选择完成后是否关闭选择框
	    bootcssVer:3,//显示向左向右的箭头
	    language:'cn',//语言
	    minView:0,//表示日期选择的最小范围，默认是hour
	    initialDate:new Date(),
	});

});   
  
//生产销售订单
function createContract(){
	if($("#sptbody").children().length>1){
		location.href = "/JHTEvaluation/jsp/productContract/contractOrder.jsp";
	}
	else if($("#sptbody").children().length==1){
		if($("#sptbody").find("td:eq(0)").html()!=""){
			location.href = "/JHTEvaluation/jsp/productContract/contractOrder.jsp";	
		}else{
			alert("没有添加其他工单！");
			return;
		}
	}
	else{
		alert("没有添加其他工单！");
		return;
	}
}


//点击确定
function updateJobOrder(){
	var data = [];
	$("#tabContent").children().each(function(i,obj){
		if($(this).find("input[type='checkbox']").is(':checked')){
			 data =  $(this).attr('name').split(",");
			 var html = "<tr><td>" + data[0]+"</td><td>"+data[1]
				+ "</td><td>"+data[2]+"</td><td><a onClick=\"addJobOrder();\" href=\"javaScript:void(0);\"><i class=\"fa fa-plus\"></i></a>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<a onClick=\"createJobOrder()\" href=\"javaScript:;\"><i class=\"fa fa-pencil\"></i></a></td></tr>";
				//通过表体id把显示文本显示到网页中
				$("#sptbody").append(html);
			}
	});
	//selectData = $('#jobOrderTable').bootstrapTable('getData');  
	$("#createJobOrder").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	
/*	
	$.each(selectData, function (i, obj) {
		var html = "<tr><td>" + obj.productName+"</td><td>"+obj.spec
		+ "</td><td>"+obj.quotedPrice+"</td><td><a onClick=\"addJobOrder();\" href=\"javaScript:void(0);\"><i class=\"fa fa-plus\"></i></a>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a></td></tr>";
		//通过表体id把显示文本显示到网页中
		$("#sptbody").append(html);
	});
*/
}


//生产加工合同 
function checkJobOrder(obj){
	var url = "/JHTEvaluation/getJobOrdersByEvalationNumber.do";
	$.post(url , {"EvaluationOrderNumber":"f0fe6421c51f48c9bb436331782314a8","soHeaderId":"test001","soLineId":"test0001"} , function(json){
		console.log(json);
		var jobOrderList = $.parseJSON(json);

		for(i = 0 ; i < jobOrderList.length ; i++){
			var productName = jobOrderList[i].materialName;
			var productSKU = jobOrderList[i].materialSku;
			var productSpec = "";
			var productPrice = "";
			var value = productName+","+productSpec+","+productPrice;
			var html='<div class="tab-pane"  style="margin-bottom:20px" id="'+productSKU+'" name="'+value+'"> ';
			html +='<table  class="table b-t b-light text-sm">';
			var joLineList = jobOrderList[i].joLineList;
			for (var j = 0; j < joLineList.length; j++) {
				var joLine = joLineList[j];

				html +='<tr><td>'+joLine.materialName+'</td><td></td></tr>';
				html +='<tr><td>用量：</td><td>'+joLine.quantity+'</td></tr>';
				html +='<tr><td>产出率：</td><td>'+joLine.productivity+'</td></tr>';
			}
			html +='</table> <label style="height: 40px;width:150px;float:right;" class="btn btn-sm btn-default"><input type="checkbox">加入生产加工合同 </label></div>';
			//先写个死的
			
			
			$("#tabContent").append(html);
			$("#addTabs").append("<li><a href=\"#"+productSKU+"\" data-toggle=\"tab\">BOM1</a></li>");
		}
		
		
	});
	

}
//添加
function addJobOrder(){
	var url = "/JHTEvaluation/getSOLine.do";
	$.post(url , {} , function(json){
		console.log(json);
		initTable($.parseJSON(json));
	});
	$("#createJobOrder").modal('show');
	
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

function initTable(json){  
	var path = "/JHTEvaluation";
	var url = path+"/dataBase-config/eval_jobOrder.data"; 
    var $table = $('#jobOrderTable');  
   
   $table.bootstrapTable({  
       data: json,   
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
       uniqueId: "remark",      //每一行的唯一标识，一般为主键列  
      // showToggle:false,     //是否显示详细视图和列表视图的切换按钮  
         
      // sidePagination: "server", //服务端处理分页  
             columns: [  
                       {checkbox:true, align: 'center',valign: 'middle',visible:false},
                     {title: '成品SKU',field: 'remark',align: 'center',valign: 'middle'},
                     {title: '成品名称',field: 'productName',align: 'center',valign: 'middle'},
                     {title: '规格',field: 'specification',align: 'center',valign: 'middle'},  
                     {title: '报价',field: 'price', align: 'center',valign: 'middle'},  
                     {title: '操作', field: 'remark',align: 'center',formatter:function(value,index){  
                         var d = ' <a title="工单预览" href="javaScript:void(0);" onClick="checkJobOrder(this);" class="active"><i class="fa fa-file-o"></i></a>&nbsp;&nbsp;<a onclick="addProduct();" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>';
                              return d;  
                       } } 
             ]  
     });  
}  

//点击新增的小按钮(带出来的数据)
function addJoLine(lineNum,obj){
  	addOrUpdate = "add"; 
    if(lineNum>=0){
      addOrUpdate = "update"; 
      tr = lineNum;
      var joLine = saveJoHeader.joLineList[lineNum];
      $("#addJoLine input[name=materialName]").val(joLine.materialName);
      $("#addJoLine input[name=materialSku]").val(joLine.materialSku);
      $("#addJoLine input[name=quantity]").val(joLine.quantity);
      $("#addJoLine input[name=productivity]").val(joLine.productivity);
    }
  	$("#addJoLine").modal('show');
}

//点击编辑的小按钮
function getPurchase(obj) {
	addOrUpdate = "update";
	//获取选中的行
	tr = $(obj).closest("tr");
	$("#addJoLine").modal("show");
	//获取列值，赋值给弹出框
	$("#addJoLine input[name=materialName]").val(tr.find("td:eq(0)").html());
	$("#addJoLine input[name=materialSku]").val(tr.find("td:eq(1)").html());
	$("#addJoLine input[name=quantity]").val(tr.find("td:eq(2)").html());
	$("#addJoLine input[name=productivity]").val(tr.find("td:eq(3)").html());
}

//点击添加或编辑里的确定按钮
function updateJobLineDetail(){
	//$("#purchaseForm").submit();
//	var mixf = $("#purchaseForm input").hasClass('parsley-error');
//	if(mixf){
//		return;
//	}
	$("#addJoLine").modal("hide");
	$(".modal-backdrop").remove();
	$("body").removeClass('modal-open');
	if(addOrUpdate == "add"){
		var html = "<tr><td>" +$("#addJoLine input[name=materialName]").val()
		+ "</td><td>" +$("#addJoLine input[name=materialSku]").val()
		+ "</td><td>" +$("#addJoLine input[name=quantity]").val()
		+ "</td><td>" + $("#addJoLine input[name=productivity]").val()
		+"</td><td><div class=\"btn-group\"><a onclick=\"addJoLine(this)\" href=\"javascript:void(0);\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div class=\"btn-group\"><a onClick=\"getPurchase(this)\" href=\"javascript:void(0)\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
 		//通过表体id把显示文本显示到网页中
 		$("#joLineBody").append(html);
 		var addline = saveJoHeader.joLineList[tr];
 		addline.materialName = $("#addJoLine input[name=materialName]").val();
 		addline.materialSku = $("#addJoLine input[name=materialSku]").val();
 		addline.quantity = $("#addJoLine input[name=quantity]").val();
 		addline.productivity = $("#addJoLine input[name=productivity]").val();
 		
 		saveJoHeader.joLineList.push(addline);
 	}else if(addOrUpdate == "update"){
 		saveJoHeader.joLineList[tr].materialName = $("#addJoLine input[name=materialName]").val();
 	 	saveJoHeader.joLineList[tr].materialSku = $("#addJoLine input[name=materialSku]").val();
 	 	saveJoHeader.joLineList[tr].quantity = $("#addJoLine input[name=quantity]").val();
 	 	saveJoHeader.joLineList[tr].productivity = $("#addJoLine input[name=productivity]").val();

 	    tr = $("#lineContentLineContentLine"+tr);
 		tr.find("td:eq(0)").text($("#addJoLine input[name=materialName]").val()); 
 		tr.find("td:eq(1)").text($("#addJoLine input[name=materialSku]").val()) ; 
 		tr.find("td:eq(2)").text($("#addJoLine input[name=quantity]").val()) ; 
 		tr.find("td:eq(3)").text($("#addJoLine input[name=productivity]").val()) ; 
 	}
 }

function editJobOrder(){
	$("#editLine").empty();
	var data = $("#PurchaseOrderQoLineSearchForm").serialize();
	var url = "/JHTEvaluation/getJobOrderByHeaderId.do";
	$.post(url , {"headerId":"test001"} ,function(json){
		console.log(json);
		layoutEditWindow($.parseJSON(json));
//		initTable($.parseJSON(json));
//		$("#addPurchase").modal('show');
	});
//	return;
	
}

function layoutEditWindow(joOrder){
	saveJoHeader = joOrder;
	$("#editHead").find("tr").each(function(){
		$(this).find("input[name='materialName']").val(joOrder.joHeader.materialName);
		$(this).find("input[name='materialSku']").val(joOrder.joHeader.materialSku);
		$(this).find("input[name='seq']").val(joOrder.joHeader.seq);
		$(this).find("input[name='department']").val(joOrder.joHeader.department);
		$(this).find("input[name='createTime']").val(timeStamp2String(joOrder.joHeader.createTime.time));
		$(this).find("input[name='status']").val(joOrder.joHeader.status);
	});
	
	$lineContentHeader = $("<thead></thead>");
    $lineContentHeaderLine = $("<tr></tr>");

    $lineContentHeaderLine.append("<th>物料名称</th>");
    $lineContentHeaderLine.append("<th>物料SKU</th>");
    $lineContentHeaderLine.append("<th>数量</th>");
    $lineContentHeaderLine.append("<th>产出率</th>");
    $lineContentHeaderLine.append("<th>操作</th>").attr("style","width:80px");

    $lineContentHeader.append($lineContentHeaderLine);
    $("#editLine").append($lineContentHeader);

    $lineContentLineBody = $("<tbody id=\"joLineBody\"></tbody>");
    for (var i = 0; i < joOrder.joLineList.length; i++) {
      var joLine = joOrder.joLineList[i];
      $lineContentLineContentLine = $("<tr></tr>").attr("id","lineContentLineContentLine"+i);
      $lineContentLineContentLine.append($("<td></td>").text(joLine.materialName).attr("name","materialName"));
      $lineContentLineContentLine.append($("<td></td>").text(joLine.materialSku).attr("name","materialSku"));
      $lineContentLineContentLine.append($("<td></td>").text(joLine.quantity).attr("name","quantity"));
      $lineContentLineContentLine.append($("<td></td>").text(joLine.productivity).attr("name","productivity"));
      $lineContentLineContentLine.append("<td><a href=\"javaScript:addJoLine(this);\" ><i class=\"fa fa-plus\"></i></a>&nbsp;<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div  class=\"btn-group\"> <a  href=\"javascript:addJoLine("+i+",this);\"><i class=\"fa fa-pencil\"></i></a></div></td>");
      $lineContentLineBody.append($lineContentLineContentLine);
    }
    $("#editLine").append($lineContentLineBody);
    $("#editWorkOrder").modal('show');
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

function updateJob(){
	  saveJoHeader.joHeader.materialName = $("input[name=materialName]").val();
	  saveJoHeader.joHeader.materialSku = $("input[name=materialSku]").val();
	  saveJoHeader.joHeader.seq = $("input[name=seq]").val();
	  saveJoHeader.joHeader.department = $("input[name=department]").val();
	  saveJoHeader.joHeader.createTime = $("input[name=createTime]").val();
	  saveJoHeader.joHeader.status = $("input[name=status]").val();
	  var url = "/JHTEvaluation/saveJoOrder.do";
	  console.log( JSON.stringify(saveJoHeader) );
	  $.post(url , {"json":JSON.stringify(saveJoHeader)} ,function(json){
	    console.log(json);
	    alert("保存成功！");
	    
	  });
}