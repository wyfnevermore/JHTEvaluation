<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%String path=request.getContextPath(); 
%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Insert title here</title>
<meta charset="utf-8" />
<title>JHT测算平台 | Web Application</title>
<link rel="stylesheet" type="text/css" href="<%=path%>/css/slideshow.css">
<link rel='stylesheet' href="<%=path%>/css/bootstrap-datetimepicker.min.css" type='text/css'>
<link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
<script src="<%=path%>/Script/jquery.min.js"></script>
<script src="<%=path%>/js/pictureHandle.js"></script>
<script src="<%=path%>/js/pictureHandle2.js"></script>
<script src="<%=path%>/js/slideshow-jq.js"></script>
<script src="<%=path%>/Script/app.v2.js"></script>
<script src="<%=path%>/js/sharePrice/newSharePrice.js"></script>
<script src="<%=path%>/Script/bootstrap-table.js"></script>
<script src="<%=path%>/js/likeSearchInput.js"></script>
<script type="text/javascript" src="<%=path%>/Script/datepicker/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
<script type="text/javascript">

function openExcel(){
	window.open("<%=path%>/jsp/sharePrice/openTemp.jsp?file=priceShare.xlsx");   
}

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
      <h3 class="m-b-none">新建报价单</h3>
    </div>
    <div id="calForm" class="m-b-sm">
      <form class="form-horizontal" data-validate="parsley" method="post" onsubmit="return false" id="sharePriceForm">
        <section class="panel panel-default">
		<header class="panel-heading"> </header>
        <div class="panel-body">
          <div style="width: 73%; float: left; min-width: 700px;">
            <div class="line line-dashed line-lg pull-in"></div>
             <div class="form-group">
              <table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody >
                <tr>
                  <td width="80px;"><label>客户：</label></td>
                  <td width="200px;"><input id="customerID" type="text" class="form-control"></td>
	              <td width="80px;"><label>询价人：</label></td>
	              <td width="200px;"><input id="inquirer" type="text" class="form-control"></td>
	              <td width="80px;"><label>币种：</label></td>
                  <td><select id="currency" style="width:200px;" class="form-control">
	                  </select></td> 
	              <td width="100px;"><label>贸易形式：</label></td>
	              <td><select id="tradeForm" style="width:200px;" class="form-control">
		                  </select></td> 
                  <td></td>
                </tr>
              </tbody>
            </table>
             </div>
            
            <div class="line line-dashed line-lg pull-in"></div>
            <div style="width: 100%; float: left; margin: 10px 0px 0px 10px">
              <table  style="text-align: center;" class="table table-striped b-t b-light text-sm">
                <thead>
                  <tr>
                    <th  style="width:100px">成品名称</th>
                    <th>测算单号</th>
                    <th>测算版本</th>
                    <th>规格</th>
                    <th>执行毛利率</th>
                    <th>测算单价</th>
                    <th>执行单价</th>
                    <th>平摊数量</th>
                    <th>包装描述</th>
                    <th>成品描述</th>
                    <th>原材料描述</th>
                    <th>备注</th>
                    <th style="width:80px;">操作</th>
                  </tr>
                </thead>
                <tbody id="sptbody">
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a title="查看" href=""  class="active"><i class="fa fa-eye"></i></a>&nbsp;
                    <a onClick="addSharePrice();" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>&nbsp;
              			<a onClick="delRow(this)" href="javaScript:;"><i class="fa fa-minus"></i></a>&nbsp;
              			<a title="上传图片" href="javaScript:void(0);"><i class="fa fa-picture-o"></i></a>&nbsp;
              			<a title="补全" href="javaScript:void(0);"><i class="fa fa-paste"></i></a>&nbsp;
              			</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style="width: 25%; float: right">
            <div class="mySlideWrap">
              <div id='mysite-slideshow'></div>
            </div>
            <div style="margin-bottom: 3px; margin-right: 0px; float: right">
              <a href="javascript:onclickUpFile()" style="display:none;">上传图片<input type="file" id="upFile" /></a> 
              <a  onclick="javaScript:preview(this);" class="btn btn-primary" >预览</a> 
              <a  onclick="javaScript:saveSharePrice();" class="btn btn-primary" >保存</a>
              <a  onclick="javaScript:submitOfferList(this);" class="btn btn-primary" >生成报价单</a>
              <a id="submitA" style="display:none;" href="javascript:submitApproval();" class="btn btn-primary">提交审批</a>
            </div>
          </div>
        </div>
        </section>
      </form>
    </div>
    </section>
  </div>

  <div class="modal fade" id="addSharePrice">
    <div class="modal-dialog" style="width:850px; height: 650px;">
      <div style="background-color: #ffffff; width: 100%; height: 640px;overflow:auto;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
        	<table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody>	
               <tr>
                  <td width="80px;"><label>币种：</label></td>
                  <td><label id="currency1" style="float:left"></label></td>
                  <td width="80px;"><label>贸易形式：</label></td>
                  <td><label id="tradeForm1" style="float:left"></label></td>
                  <td width="80px;"><label>规格：</label></td>
                  <td><select style="width:160px;" class="form-control">
	                    <option value="0">S/B</option>
	                    <option value="1">D/B</option>
	                    <option value="2">Q/B</option>
	                  </select></td> 
                </tr> 
                <tr>
                  <td width="80px;"><label>成品名称：</label></td>
                  <td><input type="text" class="form-control"></td>
                  <td width="80px;"><label>客户：</label></td>
                  <td><input id="custom" type="text" class="form-control"></td>
                  <td><label>测算人：</label></td>
                  <td><input type="text" class="form-control"></td>
                </tr> 
                <tr>
                  <td><label>测算时间：</label></td>
                  <td colspan = "2"><input type="text" class="form-control" id="evalStartTime" value="2017-01-01 00:00" style="float:left;width:47%" class="form-control"><label style="margin-top:6px;margin-right:3px;">－</label><input type="text" class="form-control" id="evalEndTime" value="2017-01-01 23:59" style="float:right;width:47%" class="form-control"></td>
                  <td></td>
                  <td></td>
                  <td><a href="#" style="width:60px;height:40px;"class="btn btn-s-md btn-default">筛选</a></td>
                </tr>
              </tbody>
            </table>
			<section class="panel panel-default">
	          <div class="table-responsive">
                <table id="sharePriceTable" style="width: 100%;border-collapse: collapse;table-layout: fixed;" class="table table-striped b-t b-light text-sm">
                
                </table>
              </div>
           
              </section>	
              <div style=" margin-right: 20px; float: right">
            	<a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="updateSharePrice();">加入报价单</a>
               </div> 
        </div>
      
      </div>
    </div>
  </div>
  
  
  <!--补全按钮  -->
   <div class="modal fade" id="completion">
    <div class="modal-dialog" style="width:700px; height: 350px;">
      <div style="background-color: #ffffff; width: 100%; height: 340px;overflow:auto;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
        	<table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody>
               <tr>
                  <td width="80px;"><label>平摊数量：</label></td>
                  <td><input id="flatNum" type="text" class="form-control"></td>
                </tr> 
                <tr>
                   <td width="80px;"><label>包装描述：</label></td>
                  <td><input id="PackageDesc" type="text" class="form-control"></td>
                </tr> 
                <tr>
                  <td  width="80px;"><label>成品描述：</label></td>
                  <td><input id="productDesc" type="text" class="form-control"></td>
                </tr> 
                <tr>
                  <td  width="80px;"><label>原材料描述：</label></td>
                  <td><input id="rawMaterial" type="text" class="form-control"></td>
                </tr>
                 <tr>
                  <td  width="80px;"><label>备注：</label></td>
                  <td><input id="remark" type="text" class="form-control"></td>
                </tr>
              </tbody>
            </table>
              <div style=" margin-right: 20px; float: right">
            	<a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="complCofirm();">补全</a>
               </div> 
        </div>
      
      </div>
    </div>
  </div>
  
  	<!--上传 -->
	<div class="modal fade" id="upload">
		<div class="modal-dialog" style="width: 600px">
			<div class="modal-content">	
				<div class="modal-body">
				 <div class="row">
				   <table style="text-align: right;" class="table b-t b-light text-sm">
                   <tbody>
                   <tr>
                     <td><label style="font-size:15px">客户上传文件：</label></td>
                     <td>
                     <div class="bootstrap-filestyle" style="display: inline;">
                       <input type="file" class="filestyle" data-icon="false" data-classbutton="btn btn-default" data-classinput="form-control inline input-s" id="uploadFile" style="">
</div> 
                     </td>
                   </tr> 
                   </tbody>
                  </table>
					
           			<div style=" margin-top: 20px; float: right">
            	     <a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="uploadPictureBut();">提交</a>
                   </div>
              	
					</div>
					</div>
				</div>
				</div>
			</div>
	
  
   <div class="modal fade" id="priceCheckOut">
    <div class="modal-dialog" style="width:850px; height: 650px;">
      <div style="background-color: #ffffff; width: 100%; height: 640px;" class="modal-content">
         <iframe frameborder="0" style="width: 100%; height: 100%;" src="<%=path%>/jsp/sharePrice/priceCheckOut.jsp"></iframe>
      </div>
    </div>
  </div>
</body>
</html>