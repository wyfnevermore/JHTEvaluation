<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%String path=request.getContextPath(); 
String sharePriceV = (String)request.getParameter("sharePriceV");
%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Insert title here</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">  
<title>JHT测算平台 | Web Application</title>
<link rel="stylesheet" type="text/css" href="<%=path%>/css/slideshow.css">
<link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
<link rel='stylesheet' href="<%=path%>/css/bootstrap-datetimepicker.min.css" type='text/css'>
<script src="<%=path%>/Script/jquery.min.js"></script>
<script src="<%=path%>/js/pictureHandle.js"></script>
<script src="<%=path%>/Script/app.v2.js"></script>
<script src="<%=path%>/js/slideshow-jq.js"></script>
<script src="<%=path%>/js/salesOrder/importSales.js"></script>
<script type="text/javascript" src="<%=path%>/Script/bootstrap.min.js"></script>
<script src="<%=path%>/Script/bootstrap-table.js"></script>
<script src="<%=path%>/js/likeSearchInput.js"></script>
<script type="text/javascript" src="<%=path%>/Script/datepicker/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script type="text/javascript">
var sharePriceV = "<%=sharePriceV%>";

function onclickUpFile(){
	  $("#upFile").click();
	}

	var photosOriginal = [];
	var photos = [];

	function updateImg(img,imgId){
	  photos.push({"url":img , "width":332 ,"height":250 ,"caption":"<a href='javascript:deleteImg("+imgId+")'>删除</a>&nbsp;&nbsp;<a href='javascript:onclickUpFile()'>添加</a>","id":imgId});
	  wSlideshow.updatePhotos("mysite", photos)
	}
	function deleteImg(id){
	  var index = 0;
	  var len = photos.length;
	  jQuery.each(photos , function(i , photo){
	    if(photo.id == id){
	      index = i;
	      return false;
	    }
	  });
	  if(index != 0 && index != ( photos.length - 1)){
	    var temp = photos.slice(0,index);
	    photos = temp.concat(photos.slice(index+1,photos.length));
	    temp = photosOriginal.slice(0,index);
	    photosOriginal = temp.concat(photosOriginal.slice(index,photosOriginal.length));
	  }else if(index == 0){
	    photos.shift();
	    photosOriginal.shift();
	  }else{
	    photos.pop();
	    photosOriginal.pop();
	  }
	  wSlideshow.updatePhotos("mysite", (len != 1) ? photos:[{"url":"<%=path%>/images/image.png","width":"332","height":"250","caption":"<a href='javascript:onclickUpFile()'>上传图片</a>"}]);
	}
	(function($){
	  function init(){
	    jQuery(".mySlideWrap").css({"width":jQuery(".mySlideWrap").parent().width()});
	    wSlideshow.render({
	        elementID:"mysite",//Dom 渲染的容器
	        nav:"double_thumbnails",//看你是否需要有导航功能如果参数配置参数:[none,double_thumbnails] 则会显示图片导航条
	        navLocation:"left", //自定标题的位置参数:[top,bottomm,left,right]
	        captionLocation:"bottom",//自定标题的位置参数:[top,bottom]
	        transition:"fade",//自定效果参数:[top,bottom]slide fade] 
	        autoplay:"1",//自定义auto play 的次数
	        speed:"5",
	        aspectRatio:"auto",
	        showControls:"true",
	        randomStart:"false",
	        images:[
	        {"url":"<%=path%>/images/image.png","width":"332","height":"250","caption":"<a href='javascript:onclickUpFile()'>上传图片</a>"}
	        ]//定义图片url caption widh height 
	      })
	  }
	  $ ? $(init) : document.observe('dom:loaded', init)
	})(window._W && _W.$)






</script>
</head>
<body>
  <div>
    <section class="scrollable padder">
    <div class="m-b-md">
      <h3 class="m-b-none">导入销售成品</h3>
    </div>
    <div id="calForm" class="m-b-sm">
      <form class="form-horizontal" data-validate="parsley" method="post" onsubmit="return false" id="sharePriceForm">
        <section class="panel panel-default">
		<header class="panel-heading"> </header>
        <div class="panel-body">
          <div style="width: 73%; float: left; min-width: 700px;">
            <div class="line line-dashed line-lg pull-in"></div>
            <div style="width: 100%; float: left; margin: 10px 0px 0px 10px">
            
             <div class="form-group">
              <table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody >
                <tr>
                  <td width="80px;"><label>客户：</label></td>
                  <td><input id="customerID" type="text" class="form-control"></td>
                  <td width="80px;"><label>币种：</label></td>
                  <td><select id="currency"  class="form-control">
	                  </select></td> 
	              <td width="80px;"><label>贸易形式：</label></td>
                  <td><select id="tradeForm" class="form-control">
	                  </select></td>
                  <td width="80px;"><label>总金额：</label></td>
                  <td ><input type="text" class="form-control"></td>
                </tr> 
                <tr>
                 <td width="80px;"><label>起始国家：</label></td>
                  <td><label style="float:left;">中国</label></td>
                  <td width="80px;"><label>发运方式：</label></td>
                  <td><select id="deliveryMethod"  class="form-control">
	                    <option value="国际海运">国际海运</option>
	                    <option value="国内公路">国内公路</option>
	                    <option value="国际空运">国际空运</option>
	                    <option value="国际铁路">国际铁路</option>
	                  </select></td>
	              <td width="80px;"><label>始发地：</label></td>
                  <td><input id="provenance" type="text" class="form-control"></td>
                  <td width="80px;"><label>目的地：</label></td>
                  <td><input id="destination" type="text" class="form-control"></td> 
                </tr>
                 <tr>
                  <td width="80px;"><label>包装描述：</label></td>
                  <td><input id="packageDes" type="text" class="form-control"></td>
                 <td width="80px;"><label></label></td>
                  <td></td>
	              <td></td>
	              <td></td>
	              <td></td>
	              <td></td>
                </tr>
              </tbody>
            </table>
             </div>
             
             
              <table  style="text-align: center;" class="table table-striped b-t b-light text-sm">
                <thead>
                  <tr>
                    <th style="display:none;"></th>
                    <th>报价单号</th>
                    <th>报价版本</th>
                    <th>成品名称</th>
                    <th></th>
                    <th>物料描述</th>
                    <th>规格</th>
                    <th>数量</th>
                    <th>单位</th>
                    <th>单价</th>
                    <th>金额</th>
                    <th>交货日期</th>
                    <th>备注</th>
                    <th style="width:80px;">操作</th>
                  </tr>
                </thead>
                <tbody id="sptbody">
                  <tr>
                    <td style="display:none;"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a title="替换料"><i class="fa fa-mail-reply-all"></i></a></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href="javaScript:addSales();"><i class="fa fa-plus"></i></a>
              			<a onClick="delRow(this)" href="javaScript:;"><i class="fa fa-minus"></i></a>
              			<a title="替换料" ><i class="fa fa-mail-reply-all"></i></a>
              			<a title="复制" ><i class="fa fa-copy"></i></a></td>
                  </tr>
                </tbody>	
              </table>
            </div>
          </div>
          <div style="width: 25%; float: right">
            <div class="mySlideWrap">
              <div id='mysite-slideshow'></div>
            </div>
            <div style="margin-bottom: 400px; margin-right: 0px; float: right">
            <a href="javascript:onclickUpFile()" style="display:none;">上传图片<input type="file" id="upFile" /></a> 
              <a  href="javaScript:void(0);" onclick="initSalesOrder();" style="display:inline;" class="btn btn-s-md btn-primary" >生成空销售订单</a>
              <a  href="javaScript:void(0);" style="display:inline;" onclick="createSalesOrder();" class="btn btn-s-md btn-primary" >下一步</a>
            </div>
          </div>
        </div>
        </section>
      </form>
    </div>
    </section>
  </div>

  <div class="modal fade" id="addSales">
    <div class="modal-dialog" style="width:850px; height: 650px;">
      <div style="background-color: #ffffff; width: 100%; height: 640px;overflow:auto;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
          <table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody >
                <tr>
                  <td width="80px;"><label>测算单号：</label></td>
                  <td><input id="customerID" type="text" class="form-control"></td>
                  <td width="80px;"><label>成品名称：</label></td>
                  <td><input type="text" class="form-control"></td> 
                <td width="80px;"><label>规格：</label></td>
                  <td ><select class="form-control">
                     <option value="0">S/B</option>
                     <option value="1">Q/B</option>
                    </select></td>
                </tr> 
               
                 <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                <td><a href="#" style="width:60px;height:40px;"class="btn btn-s-md btn-default">筛选</a></td>
                </tr>
              </tbody>
            </table>
        	<table style="text-align: right;" class="table b-t b-light text-sm">
            </table>
			<section class="panel panel-default">
	          <div class="table-responsive">
                <table id="salesOrderTable" style="width: 100%;border-collapse: collapse;table-layout: fixed;" class="table table-striped b-t b-light text-sm">
                
                </table>
              </div>
           
              </section>	
              <div style=" margin-right: 20px; float: right">
            	<a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="updateSales();">确认添加</a>
               </div> 
        </div>
      
      </div>
    </div>
  </div>
  
  <!--替换料  -->
  <div class="modal fade" id="replaceMateriel">
    <div class="modal-dialog" style="width:850px; height: 450px;">
      <div style="background-color: #ffffff; width: 100%; height: 440px;overflow:auto;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
       
        <section class="panel panel-default">
		<header><h4>物料清单</h4></header>
		<div style="height:300px" class="panel-body">
		<div class="tab-content" id="tabDivs">
			<div class="tab-pane active" style="" id="specItem0">
			   <table id="MaterielTable" class="table table-striped b-t b-light text-sm">
             <tbody id = "materBody">
             </tbody>
             </table>
             </div>
             </div>
             </div>
             </section>
            
            <div style=" margin-right: 20px; float: right">
            	<a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="replaceBing();">确定</a>
               </div> 
         </div>
      </div>
    </div>
  </div>
  
  <!--替换  -->
  <div class="modal fade" id="replaceMater">
    <div class="modal-dialog" style="width:850px; height: 450px;">
      <div style="background-color: #ffffff; width: 100%; height: 440px;OVERFLOW-Y: scroll; OVERFLOW-X:hidden;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
       
        <section class="panel panel-default">
        <header><h4>可替换的物料</h4></header>
		<div style="height:300px" class="panel-body">
		<div class="row text-sm wrapper">
              <table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody id="addma1">
                <tr>
                  <td width="100px;"><label>物料SKU：</label></td>
                  <td width="200px;"><input type="text" class="form-control"></td>
                  <td><a href="#" style="width:50px;height:35px;"class="btn btn-s-md btn-default"><span style="font-size:20px">筛选</span></a></td>
                </tr> 
              </tbody>
            </table>
        </div>
		<div class="tab-content" id="tabDivs">
			<div class="tab-pane active" style="" id="specItem0">
			   <table id="MaterTable" class="table table-striped b-t b-light text-sm">
             </table>
               
             </div>
        </div>
        </div>
        <div style=" margin-right: 20px; margin-top: 10px;float: right">
            	<a class="btn btn-s-md btn-primary-W" style="width:60px;float: right" href="javaScript:void(0);" onclick="closeReplace();">替换</a>
         </div> 
        </section>
         </div>
      </div>
    </div>
  </div>
  
   <!--替换  物料清单2层-->
  <div class="modal fade" id="replaceMater1">
    <div class="modal-dialog" style="width:850px; height: 450px;">
      <div style="background-color: #ffffff; width: 100%; height: 440px;OVERFLOW-Y: scroll; OVERFLOW-X:hidden;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
       
        <section class="panel panel-default">
        <header><h4>物料清单</h4></header>
		<div style="height:300px" class="panel-body">
		<div class="tab-content" id="tabDivs">
			<div class="tab-pane active" style="" id="specItem0">
			   <table id="MaterTable" class="table table-striped b-t b-light text-sm">
               <thead>
               <tr>
                <th>物料SKU</th>
                <th>物料描述</th>
                <th>物料名称</th>
                <th></th>
                </tr>
               </thead>
               <tbody>
               <tr>
               <td>10221</td>
               <td>棉被</td>
               <td>填充棉</td>
               <td><a title="替换" href="javaScript:showReplace2();"><i class="fa fa-mail-reply-all"></i></a> </td>
               </tr>
               
               </tbody>
             </table>
           
                    
             </div>
        </div>
        </div>
        <div style=" margin-right: 20px; margin-top: 10px;float: right">
            	<a class="btn btn-s-md btn-primary-W" style="width:60px;float: right" href="javaScript:void(0);" onclick="closeReplace();">替换</a>
         </div> 
        </section>
         </div>
      </div>
    </div>
  </div>
  
   <!--替换  3层-->
  <div class="modal fade" id="replaceMater2">
    <div class="modal-dialog" style="width:850px; height: 450px;">
      <div style="background-color: #ffffff; width: 100%; height: 440px;OVERFLOW-Y: scroll; OVERFLOW-X:hidden;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
       
        <section class="panel panel-default">
        <header><h4>可替换的物料</h4></header>
		<div style="height:300px" class="panel-body">
		<div class="row text-sm wrapper">
              <table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody id="addma1">
                <tr>
                  <td width="100px;"><label>物料SKU：</label></td>
                  <td width="200px;"><input type="text" class="form-control"></td>
                  <td><a href="#" style="width:50px;height:35px;"class="btn btn-s-md btn-default"><span style="font-size:20px">筛选</span></a></td>
                </tr> 
              </tbody>
            </table>
        </div>
		<div class="tab-content" id="tabDivs">
			<div class="tab-pane active" style="" id="specItem0">
			   <table id="MaterTable" class="table table-striped b-t b-light text-sm">
            <thead>
               <tr>
                <th>物料SKU</th>
                <th>物料名称</th>
                </tr>
               </thead>
               <tbody>
               <tr>
               <td>10221</td>
               <td>填充棉</td>
               </tr>
               
               </tbody>
             </table>
               
             </div>
        </div>
        </div>
        <div style=" margin-right: 20px; margin-top: 10px;float: right">
            	<a class="btn btn-s-md btn-primary-W" style="width:60px;float: right" href="javaScript:void(0);" onclick="closeReplace();">替换</a>
         </div> 
        </section>
         </div>
      </div>
    </div>
  </div>
  
  
</body>
</html>