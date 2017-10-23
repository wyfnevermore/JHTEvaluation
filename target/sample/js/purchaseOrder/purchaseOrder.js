//var path = "<%=path%>";
var tr;

(function ($) {
	$.getUrlParam = function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
})(jQuery);
  //添加采购

  $(document).ready(function(){
  	var hids = $.parseJSON($.getUrlParam("hids"));

  	for (var i = 0; i < hids.length; i++) {
  		
  		var url = "/JHTEvaluation/getPurchaseOrderByHeaderId.do";
  		$.post(url , {"headerId":hids[i]} , function (json){
  			console.log(json);
  			layoutPurchaseOrder($.parseJSON(json));
  		});
  	}

  });
  var savePoHeader;
  function layoutPurchaseOrder(poOrder){
  	var poHeader = poOrder.poHeader;
    savePoHeader = poOrder;
    $tabTitle = $("<li></li>").addClass("active");
    $tabTitle.append($("<a/>").text(poHeader.vendorName).attr("href","#"+poHeader.headerId).attr("data-toggle","tab"));
    $("#tabUl").append($tabTitle);

    //注入头信息
    $orderBody = $("<div></div>").attr({"class":"tab-pane active", "id":poHeader.headerId});
    $headerBody = $("<div></div>").append("<div class=\"m-b-md\"> <h4>采购订单头信息</h4></div>");
    $headerBorder = $("<section></section>").attr({"style":"padding:10px;margin-top:10px","class":"panel panel-default"});
    $headerContent = $("<table></table>");

//    $headerContentLine0 = $("<tr></tr>");
//    $headerContentLine0.append($("<td width=8%></td>").append($("<label></label>").text("订单类型:")));
//    $headerContentLine0.append($("<td width=12%></td>").append($('<select onchange="changeType(this)"><option value="自制">自制</option><option value="外协">外协</option></select>').attr({"name":"purchaseType","class":"form-control","value":"自制"})));
//    $headerContentLine0.append($("<td width=12%></td><td width=12%></td><td width=8%></td><td width=12%></td><td width=12%></td><td width=12%>"));
//    $headerContent.append($headerContentLine0);
    
    $headerContentLine1 = $("<tr></tr>");
    $headerContentLine1.append($("<td width=8%></td>").append($("<label></label>").text("业务实体:")));
    $headerContentLine1.append($("<td width=12%></td>").append($('<select><option value="OU_WG">WG 万斯</option><option value="OU_WT">WT 万洋</option><option value="OU_T2S">T2S购物时光</option><option value="OU_DJ">DJ 帝爵</option></select>').attr({"name":"orgCode","class":"form-control","value":poHeader.orgCode})));
    $headerContentLine1.append($("<td width=12%></td>").append($("<label></label>").text("采购订单号：")));
    $headerContentLine1.append($("<td width=12%></td>").append($("<input/>").attr({"name":"documentNum","class":"form-control","value":poHeader.documentNum})));
    $headerContentLine1.append($("<td width=8%></td>").append($("<label></label>").text("采购员名称:")));
    $headerContentLine1.append($("<td width=12%></td>").append($("<input/>").attr({"name":"agentName","class":"form-control","value":poHeader.agentName})));
    $headerContentLine1.append($("<td width=12%></td>").append($("<label></label>").text("供应商名称:")));
    $headerContentLine1.append($("<td width=12%></td>").append($("<input address='' />").attr({"name":"vendorName","class":"form-control","value":poHeader.vendorName})));
    ////供应商取文件数据库
    bindSearchEl($headerContentLine1.find("input[name='vendorName']"),path+"/dataBase-config/eval-factory.data",null,getVendorContact,"name",["code","name"]);
    ////供应商取文件数据库End
    ////采购员取文件数据库
    bindSearchEl($headerContentLine1.find("input[name='agentName']"),path+"/dataBase-config/employee.data",null,null,"name",["code","name"],142);
    ////采购员取文件数据库End
    $headerContent.append($headerContentLine1);

    $headerContentLine2 = $("<tr></tr>");
    $headerContentLine2.append($("<td></td>").append($("<label></label>").text("供应商联系人:")));
    $headerContentLine2.append($("<td></td>").append($("<input/>").attr({"name":"vendorContact","class":"form-control","value":poHeader.vendorContact})));
    $headerContentLine2.append($("<td></td>").append($("<label></label>").text("币种:")));
    ////取币种文件库数据
    var currencyCode_html = "";
    $.ajaxSettings.async = false;
    $.getJSON(path+"/dataBase-config/eval_quoteCurrency.data",function(areaJson){
		$.each(areaJson,function(i,quoteCurrency){
			currencyCode_html+="<option value='"+quoteCurrency.quoteCurrency+"'>"+quoteCurrency.quoteCurrencyName+"</option>";
		});
	});
    ////取币种文件库数据End
    currencyCode_html = "<select>"+currencyCode_html+"</select>";
    $headerContentLine2.append($("<td></td>").append($(currencyCode_html).attr({"name":"currencyCode","class":"form-control","value":poHeader.currencyCode})));
    $headerContentLine2.append($("<td></td>").append($("<label></label>").text("摘要:")));
    $headerContentLine2.append($("<td></td>").append($("<input/>").attr({"name":"comments","class":"form-control","value":poHeader.comments})));
    $headerContentLine2.append($("<td></td>").append($("<label></label>").text("说明弹性域3:")));
    $headerContentLine2.append($("<td></td>").append($("<input/>").attr({"name":"attribute3","class":"form-control","value":poHeader.attribute3})));
    $headerContent.append($headerContentLine2);


    $headerContentLine3 = $("<tr></tr>");
    $headerContentLine3.append($("<td></td>").append($("<label></label>").text("说明弹性域4:")));
    $headerContentLine3.append($("<td></td>").append($("<input/>").attr({"name":"attribute4","class":"form-control","value":poHeader.attribute4})));
    $headerContentLine3.append($("<td></td>").append($("<label></label>").text("说明弹性域5:")));
    $headerContentLine3.append($("<td></td>").append($("<input/>").attr({"name":"attribute5","class":"form-control","value":poHeader.attribute5})));
    $headerContentLine3.append($("<td></td>").append($("<label></label>").text("说明弹性域6:")));
    $headerContentLine3.append($("<td></td>").append($("<input/>").attr({"name":"attribute6","class":"form-control","value":poHeader.attribute6})));
    $headerContentLine3.append($("<td></td>").append($("<label></label>").text("说明弹性域13:")));
    $headerContentLine3.append($("<td></td>").append($("<input/>").attr({"name":"attribute13","class":"form-control","value":poHeader.attribute13})));
    $headerContent.append($headerContentLine3);
    
    $headerBorder.append($headerContent);
    $headerBody.append($headerBorder);

    $orderBody.append($headerBody);



    //注入行信息
    $lineBody = $("<div></div>").append("<div class=\"m-b-md\"> <h4>采购订单行信息</h4></div>");
    $lineBorder = $("<section></section>").attr({"style":"padding:10px;margin-top:10px","class":"panel panel-default"});
    $lineContent = $("<table></table>").addClass("table table-striped b-t b-light text-sm");
    $lineContentHeader = $("<thead></thead>");
    $lineContentHeaderLine = $("<tr></tr>");

    $lineContentHeaderLine.append("<th>物料编码</th>");
    $lineContentHeaderLine.append("<th>单位</th>");
    $lineContentHeaderLine.append("<th>数量</th>");
    $lineContentHeaderLine.append("<th>单价</th>");
    $lineContentHeaderLine.append("<th hidden='hidden'>发运行号</th>");
    $lineContentHeaderLine.append("<th hidden='hidden'>行类型</th>");
    $lineContentHeaderLine.append("<th>税率</th>");
    $lineContentHeaderLine.append("<th>含税价格</th>");
    $lineContentHeaderLine.append("<th>项目</th>");
    $lineContentHeaderLine.append("<th hidden='hidden'>加工合同号</th>");
    $lineContentHeaderLine.append("<th hidden='hidden'>EBS工单号</th>");
    $lineContentHeaderLine.append("<th>辅料说明</th>");
    $lineContentHeaderLine.append("<th>操作</th>").attr("style","width:80px");

    $lineContentHeader.append($lineContentHeaderLine);
    $lineContent.append($lineContentHeader);

    $lineContentLineBody = $("<tbody></tbody>").attr("id","purchaseTbody");
    /*
    $lineContentLineContentLine1 = $("<tr></tr>");
    $lineContentLineContentLine1.append("<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>");
    $lineContentLineContentLine1.append("<td><a href=\"javaScript:addPurchase();\" ><i class=\"fa fa-plus\"></i></a>&nbsp;<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div  class=\"btn-group\"> <a  href=\"javascript:void(0)\"><i class=\"fa fa-pencil\"></i></a></div></td>");
    
    $lineContentLineBody.append($lineContentLineContentLine1);
    */
    for (var i = 0; i < poOrder.poLineList.length; i++) {
      var poLine = poOrder.poLineList[i];
      $lineContentLineContentLine = $("<tr></tr>").attr("id","lineContentLineContentLine"+i);
      $lineContentLineContentLine.append($("<td></td>").text(poLine.itemNumber).attr("name","itemNumber"));
      $lineContentLineContentLine.append($("<td></td>").text(poLine.unitOfMeasure).attr("name","unitOfMeasure"));
      $lineContentLineContentLine.append($("<td></td>").text(poLine.quantity).attr("name","quantity"));
      $lineContentLineContentLine.append($("<td></td>").text(poLine.unitPrice).attr("name","unitPrice"));
      $lineContentLineContentLine.append($("<td hidden='hidden'></td>").text(poLine.shipmentNum).attr("name","shipmentNum"));
      $lineContentLineContentLine.append($("<td hidden='hidden'></td>").text(poLine.lineType).attr("name","lineType"));
      $lineContentLineContentLine.append($("<td></td>").text(poLine.lineAttribute1).attr("name","lineAttribute1"));
      $lineContentLineContentLine.append($("<td></td>").text(poLine.lineAttribute3).attr("name","lineAttribute3"));
      $lineContentLineContentLine.append($("<td></td>").text(poLine.lineAttribute4).attr("name","lineAttribute4"));
      $lineContentLineContentLine.append($("<td hidden='hidden'></td>").text(poLine.contractNo).attr("name","contractNo"));
      $lineContentLineContentLine.append($("<td hidden='hidden'></td>").text(poLine.wipEntityName).attr("name","wipEntityName"));
      $lineContentLineContentLine.append($("<td></td>").text(poLine.accessExplain).attr("name","accessExplain"));
      $lineContentLineContentLine.append("<td><a href=\"javaScript:addPurchase();\" ><i class=\"fa fa-plus\"></i></a>&nbsp;<a href=\"javaScript:delRow(this);\"><i class=\"fa fa-minus\"></i></a>&nbsp;<div  class=\"btn-group\"> <a  href=\"javascript:addPurchase("+i+",this);\"><i class=\"fa fa-pencil\"></i></a></div></td>");

      $lineContentLineBody.append($lineContentLineContentLine);
    }

    $lineContent.append($lineContentLineBody);
    $lineBorder.append($lineContent);
    $lineBody.append($lineBorder);
    $("#tabDivs").append($orderBody);
    $("#tabDivs").append($lineBody);
  }
  
  /*
   * 选择供应商后的回调函数 
   * @param param
   * @returns
   */
  function getVendorContact(param,obj){
	vendorContact = param.contact;
  	$("input[name=vendorContact]").val(vendorContact);
  	obj.attr("address",param.address);
  }
  
  function changeType(obj){
	    var selectedText = $(obj).val();
	    if(selectedText == "自制"){
	    	$("#outOrderBtn")[0].style.display = "none";
	    }else if(selectedText == "外协"){
	    	$("#outOrderBtn")[0].style.display = "inline";
	    }
  }
  
  function addPurchase(lineNum,obj){
  	addOrUpdate = "add"; 
    if(lineNum>=0){
      addOrUpdate = "update"; 
      tr = lineNum;
      var poLine = savePoHeader.poLineList[lineNum];
      console.log(poLine);
      $("#addPurchase input[name=itemNumber]").val(poLine.itemNumber);
      $("#addPurchase input[name=unitOfMeasure]").val(poLine.unitOfMeasure);
      $("#addPurchase input[name=quantity]").val(poLine.quantity);
      $("#addPurchase input[name=unitPrice]").val(poLine.unitPrice);
      $("#addPurchase input[name=shipmentNum]").val(poLine.shipmentNum);
      $("#addPurchase input[name=lineType]").val(poLine.lineType);
      $("#addPurchase input[name=lineAttribute1]").val(poLine.lineAttribute1);
      $("#addPurchase input[name=lineAttribute3]").val(poLine.lineAttribute3); 
      $("#addPurchase input[name=lineAttribute4]").val(poLine.lineAttribute4);
      $("#addPurchase input[name=contractNo]").val(poLine.contractNo);
      $("#addPurchase input[name=wipEntityName]").val(poLine.wipEntityName);
      $("#addPurchase input[name=accessExplain]").val(poLine.accessExplain);
    }
    $("#addPurchase").modal('show');
  }

  function delRow(obj){
  	if($(obj).parents("tbody").children().length>1){
  		var res = confirm('确认要删除吗？');  
  		if(res == true){
        var lineNum =   $(obj).parents("tr").attr("id").substring("lineContentLineContentLine".length);
        console.log(lineNum);
        savePoHeader.poLineList[lineNum] = null;
  			$(obj).parents("tr").remove(); 
  		}
  	}	
  }


 //点击编辑的小按钮
 function getPurchase(obj) {
 	addOrUpdate = "update";
 	//获取选中的行
 	tr = $(obj).closest("tr");
 	$("#addPurchase").modal("show");
 	//获取列值，赋值给弹出框
 	$("#materielNum").val(tr.find("td:eq(0)").html());
 	$("#department").val(tr.find("td:eq(1)").html());
 	$("#materielNumer").val(tr.find("td:eq(2)").html());
 	$("#unitPrice").val(tr.find("td:eq(3)").html());
 	$("#shipmentNum").val(tr.find("td:eq(4)").html());
 	$("#rowType").val(tr.find("td:eq(5)").html());
 	$("#ratio").val(tr.find("td:eq(6)").html());
 	$("#ratioPrice").val(tr.find("td:eq(7)").html());
 	$("#project").val(tr.find("td:eq(8)").html());
 	$("#contractNo").val(tr.find("td:eq(9)").html());
 	$("#wipEntityName").val(tr.find("td:eq(10)").html());
 	$("#accessExplain").val(tr.find("td:eq(11)").html());
 	tr = parseFloat($(obj).closest("tr")[0].id.substr(26));
 }

 
//点击添加或编辑里的确定按钮
function updatePurchase(){
	//$("#purchaseForm").submit();
	var mixf = $("#purchaseForm input").hasClass('parsley-error');
	if(mixf){
    console.log(1);
    return;
  }
  $("#addPurchase").modal("hide");
  $(".modal-backdrop").remove();
  $("body").removeClass('modal-open');
  if(addOrUpdate == "add"){
    console.log(2);
    var html = "<tr id=lineContentLineContentLine"+savePoHeader.poLineList.length+"><td>" +$("#materielNum").val()
    + "</td><td>" +$("#department").val()
    + "</td><td>" +$("#materielNumer").val()
    + "</td><td>" + $("#unitPrice").val() 
    + "</td><td hidden='hidden'>" + $("#shipmentNum").val() 
    + "</td><td hidden='hidden'>" +$("#rowType").val()
    + "</td><td>" +$("#ratio").val()+ "</td><td>" +$("#ratioPrice").val()+ "</td><td>" +$("#project").val()
    + "</td><td hidden='hidden'>" +$("#contractNo").val()
    + "</td><td hidden='hidden'>" +$("#wipEntityName").val()
    + "</td><td>" + $("#accessExplain").val() 
    +"</td><td><div class=\"btn-group\"><a onclick=\"addPurchase()\" href=\"javascript:void(0);\"><i class=\"fa fa-plus\"></i></a></div>&nbsp;&nbsp;<a onClick=\"delRow(this)\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a>&nbsp;&nbsp;<div class=\"btn-group\"><a onClick=\"getPurchase(this)\" href=\"javascript:void(0)\"><i class=\"fa fa-pencil\"></i></a></div></td></tr>";
 		//通过表体id把显示文本显示到网页中
    var poLine = {};
    poLine['unitOfMeasure'] = $("#addPurchase input[name=unitOfMeasure]").val();
    poLine['quantity'] = $("#addPurchase input[name=quantity]").val();
    poLine['unitPrice'] = $("#addPurchase input[name=unitPrice]").val();
    poLine['shipmentNum'] = $("#addPurchase input[name=shipmentNum]").val();
    poLine['lineType'] = $("#addPurchase input[name=lineType]").val();
    poLine['lineAttribute1'] = $("#addPurchase input[name=lineAttribute1]").val();
    poLine['lineAttribute3'] = $("#addPurchase input[name=lineAttribute3]").val();
    poLine['lineAttribute4'] = $("#addPurchase input[name=lineAttribute4]").val();
    poLine['contractNo'] = "";
    poLine['wipEntityName'] = "";
    poLine['accessExplain'] = $("#addPurchase input[name=accessExplain]").val();
    poLine['itemNumber'] = $("#addPurchase input[name=itemNumber]").val();
    poLine['headerID'] = savePoHeader.poHeader.headerId;
    poLine['importId'] = "";
    poLine['lineId'] = "";
    poLine['lineNum'] = "";
    savePoHeader.poLineList.push(poLine);
    $("#purchaseTbody").append(html);
  }else if(addOrUpdate == "update"){
    console.log(3);
//    parseFloat(tr)
    savePoHeader.poLineList[tr]["unitOfMeasure"] = $("#addPurchase input[name=unitOfMeasure]").val();
    savePoHeader.poLineList[tr]["quantity"] = $("#addPurchase input[name=quantity]").val();
    savePoHeader.poLineList[tr]["unitPrice"] = $("#addPurchase input[name=unitPrice]").val();
    savePoHeader.poLineList[tr]["shipmentNum"] = $("#addPurchase input[name=shipmentNum]").val();
    savePoHeader.poLineList[tr]["lineType"] = $("#addPurchase input[name=lineType]").val();
    savePoHeader.poLineList[tr]["lineAttribute1"] = $("#addPurchase input[name=lineAttribute1]").val();
    savePoHeader.poLineList[tr]["lineAttribute3"] = $("#addPurchase input[name=lineAttribute3]").val();
    savePoHeader.poLineList[tr]["lineAttribute4"] = $("#addPurchase input[name=lineAttribute4]").val();
    savePoHeader.poLineList[tr]["contractNo"] = "";
    savePoHeader.poLineList[tr]["wipEntityName"] = "";
    savePoHeader.poLineList[tr]["accessExplain"] = $("#addPurchase input[name=accessExplain]").val();
    savePoHeader.poLineList[tr]["itemNumber"] = $("#addPurchase input[name=itemNumber]").val();
    tr = $("#lineContentLineContentLine"+tr);
    tr.find("td:eq(0)").text($("#materielNum").val()); 
    tr.find("td:eq(1)").text($("#department").val()) ; 
    tr.find("td:eq(2)").text($("#materielNumer").val()) ; 
    tr.find("td:eq(3)").text($("#unitPrice").val()) ; 
    tr.find("td:eq(4)").text($("#shipmentNum").val()) ; 
    tr.find("td:eq(5)").text($("#rowType").val()) ; 
    tr.find("td:eq(6)").text($("#ratio").val()) ; 
    tr.find("td:eq(7)").text($("#ratioPrice").val()) ; 
    tr.find("td:eq(8)").text($("#project").val()); 
    tr.find("td:eq(9)").text($("#contractNo").val()); 
    tr.find("td:eq(10)").text($("#wipEntityName").val()); 
    tr.find("td:eq(11)").text($("#accessExplain").val()); 
  }
}


//保存订单
function saveOrder(){
  savePoHeader.poHeader.orgCode = $("select[name=orgCode]").val();
  savePoHeader.poHeader.documentNum = $("input[name=documentNum]").val();
  savePoHeader.poHeader.agentName = $("input[name=agentName]").val();
  savePoHeader.poHeader.vendorName = $("input[name=vendorName]").val();
  savePoHeader.poHeader.vendorContact = $("input[name=vendorContact]").val();
  savePoHeader.poHeader.currencyCode = $("select[name=currencyCode]").val();
  savePoHeader.poHeader.comments = $("input[name=comments]").val();
  savePoHeader.poHeader.attribute3 = $("input[name=attribute3]").val();
  savePoHeader.poHeader.attribute4 = $("input[name=attribute4]").val();
  savePoHeader.poHeader.attribute5 = $("input[name=attribute5]").val();
  savePoHeader.poHeader.attribute6 = $("input[name=attribute6]").val();
  savePoHeader.poHeader.attribute13 = $("input[name=attribute13]").val();
  var url = "/JHTEvaluation/savePoOrder.do";
  console.log( JSON.stringify(savePoHeader) );
  $.post(url , {"json":JSON.stringify(savePoHeader)} ,function(json){
    console.log("保存返回："+json);
    savePoHeader = $.parseJSON(json);
    alert("保存成功！");
    
  });


}

//上传订单与其他系统对接上传
function uploadOrder(){
  var url = "/JHTEvaluation/sendPurchaseOrderByHeaderId.do";
  $.post(url , {"headerId":savePoHeader.poHeader.headerId} , function (json){
    console.log(json);
    json = $.parseJSON(json);
    if(json.XRETURNCODE.value == "S"){
      alert("上传成功！");
    }else{
      alert("上传失败："+json.XRESPONSEDATA.value);
    }
    //{"XRESPONSEDATA":{"declaredType":"java.lang.String","globalScope":false,"name":{"localPart":"X_RESPONSE_DATA","namespaceURI":"http://xmlns.oracle.com/apps/cux/soaprovider/plsql/cux_ws_server_factory_pkg/invokefmsws/","prefix":""},"nil":false,"scope":"com.chinaias.webservice.erp.OutputParameters","typeSubstituted":false,"value":"\n<G_PO_HEADERS>\n<PO_HEADER>\n<IMPORT_ID>1<\/IMPORT_ID>\n<PO_HEADER_ID>113<\/PO_HEADER_ID>\n<IMPORT_STATUS>S<\/IMPORT_STATUS>\n<IMPORT_MESSAGE>CUX_WS_PO_IMPORT_ONE_SUCCESS<\/IMPORT_MESSAGE>\n<G_PO_LINES>\n<PO_LINE>\n<LINE_NUM>1<\/LINE_NUM>\n<PO_LINE_ID>141<\/PO_LINE_ID>\n<G_PO_LINE_LOCATIONS>\n<PO_LINE_LOCATION>\n<SHIPMENT_NUM>1<\/SHIPMENT_NUM>\n<LINE_LOCATION_ID>141<\/LINE_LOCATION_ID>\n<G_PO_DISTRIBUTIONS>\n<PO_DISTRIBUTION>\n<DISTRIBUTION_NUM>1<\/DISTRIBUTION_NUM>\n<PO_DISTRIBUTION_ID>128<\/PO_DISTRIBUTION_ID>\n<\/PO_DISTRIBUTION>\n<\/G_PO_DISTRIBUTIONS>\n<\/PO_LINE_LOCATION>\n<\/G_PO_LINE_LOCATIONS>\n<\/PO_LINE>\n<\/G_PO_LINES>\n<\/PO_HEADER>\n<\/G_PO_HEADERS>\n"},"XRETURNCODE":{"declaredType":"java.lang.String","globalScope":false,"name":{"localPart":"X_RETURN_CODE","namespaceURI":"http://xmlns.oracle.com/apps/cux/soaprovider/plsql/cux_ws_server_factory_pkg/invokefmsws/","prefix":""},"nil":false,"scope":"com.chinaias.webservice.erp.OutputParameters","typeSubstituted":false,"value":"S"},"XRETURNMESG":{"declaredType":"java.lang.String","globalScope":false,"name":{"localPart":"X_RETURN_MESG","namespaceURI":"http://xmlns.oracle.com/apps/cux/soaprovider/plsql/cux_ws_server_factory_pkg/invokefmsws/","prefix":""},"nil":false,"scope":"com.chinaias.webservice.erp.OutputParameters","typeSubstituted":false,"value":"采购订单导入成功！"}}
  });
}

////上传外协订单与其他系统对接上传
//function uploadOutOrder(){
//	var poLineOutOrderList=[];
//	for (var i = 0; i < savePoHeader.poLineList.length; i++) {
//		var poLineOutOrderObj = {};
//		poLineOutOrderObj['contractNo'] = savePoHeader.poLineList[i].contractNo;
//		poLineOutOrderObj['wipEntityName'] = savePoHeader.poLineList[i].wipEntityName;
//		poLineOutOrderObj['buyer'] = savePoHeader.poHeader.agentName;
//		poLineOutOrderObj['vendorName'] = savePoHeader.poHeader.vendorName;
//		poLineOutOrderObj['vendorSiteCode'] = $("input[name=vendorName]").attr("address");
//		poLineOutOrderObj['unitPrice'] = savePoHeader.poLineList[i].unitPrice;
//		poLineOutOrderObj['taxCode'] = savePoHeader.poLineList[i].lineAttribute1;
//		poLineOutOrderList.push(poLineOutOrderObj);
//	}
//  
//	$.ajax({
//		type : "POST",
//		async : false,
//		contentType : 'application/json;charset=utf-8',
//		url : "/JHTEvaluation/sendOutsidePurchaseOrderByHeaderId.do",
//		data : JSON.stringify(poLineOutOrderList),
//		dataType : "text",
//		success : function(json) {
//			if(json.XRETURNCODE.value == "S"){
//			      alert("上传成功！");
//			    }else{
//			      alert("上传失败："+json.XRESPONSEDATA.value);
//			    }
//		}
//	});
//}

function changeMaterialPrice(paramJson){
	$("#unitPrice").val(paramJson.price);
	$("#rowType").val(paramJson.rowType);
}
$(function() {
////供应商取文件数据库
    bindSearchEl($("#materielNum"),path+"/dataBase-config/eval-materialName.data",null,changeMaterialPrice,"sku",["sku","name"],295);
    ////供应商取文件数据库End
});
