<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%String path=request.getContextPath(); %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Insert title here</title>
<meta charset="utf-8" />
<title>JHT测算平台 | Web Application</title>
<meta name="description"
  content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav" />
<meta name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1" />
<link rel="stylesheet" type="text/css" href="<%=path%>/css/slideshow.css">
<link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
<style type="text/css">

ul li{
  list-style:none;
  margin:0.2em;
  float:left;
}

ul li a{
  text-decoration:none;
  color:#000;
  background:#ffc;
  display:block;
  height:13em;
  width:30em;
  padding:1em;
  -moz-box-shadow:50px 5px 7px rgba(33,33,33,1);
  -webkit-box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  -moz-transition:-moz-transform .15s linear;
  -o-transition:-o-transform .15s linear;
  -webkit-transition:-webkit-transform .15s linear;
  -webkit-transform: rotate(0deg);
  -o-transform: rotate(-6deg);
  -moz-transform:rotate(-6deg);
}

ul li h2{
  font-size:140%;
  font-weight:bold;
  padding-bottom:3px;
}

ul li p{
  font-family:"YouYuan";
  font-size:100%;
}

ul li a:hover,ul li a:focus{
  box-shadow:10px 10px 7px rgba(0,0,0,.7);
  -moz-box-shadow:10px 10px 7px rgba(0,0,0,.7);
  -webkit-box-shadow: 10px 10px 7px rgba(0,0,0,.7);
  -webkit-transform: scale(1.25);
  -moz-transform: scale(1.25);
  -o-transform: scale(1.25);
  position:relative;
  z-index:5;
}

ol{text-align:center;}
ol li{display:inline;padding-right:1em;}
ol li a{color:#fff;}
</style>

<script src="<%=path%>/Script/jquery.min.js"></script>
<script src="<%=path%>/js/pictureHandle.js"></script>
<script src="<%=path%>/js/slideshow-jq.js"></script>
<script src="<%=path%>/Script/app.v2.js"></script>
<script src="<%=path%>/js/likeSearchInput.js"></script>
<script type="text/javascript">



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
    <section class="scrollable padder"> <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen" data-target="#nav"></a>
    <div class="m-b-md">
      <h3 class="m-b-none">报价单审批</h3>
    </div>
    <div id="calForm" class="m-b-sm">
      <form class="form-horizontal" data-validate="parsley">
        <section class="panel panel-default"> <header
          class="panel-heading">  </header>
        <div class="panel-body">
          <div style="width: 67%; float: left; min-width: 700px;">
            <div class="line line-dashed line-lg pull-in"></div>
            <div class="form-group">
              <label class="col-sm-2-W control-label" style="font-weight:bold;">客户：</label>
              <label class="col-sm-2-W control-label">客户A</label>
              <label class="col-sm-2-W control-label">&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <label class="col-sm-2-W control-label" style="font-weight:bold;">报价主题：</label>
              <label class="col-sm-2-W control-label">XXXX报价</label>
            </div>
            
            <div class="line line-dashed line-lg pull-in"></div>
            <div style="width: 100%; float: left; margin: 10px 0px 0px 10px">
              <table style="text-align: center;"
                class="table table-striped b-t b-light text-sm">
                <thead>
                  <tr>
                    <th>成本名称</th>
                    <th>测算版本</th>
                    <th>规格</th>
                    <th>单价(￥)</th>
                    <th>执行单价(￥)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>空调被
                    </td>
                    <td>V2
                    </td>
                    <td>S/B
                    </td>
                    <td>20.41
                    </td>
                    <td><input type="text" style="width:100px;text-align:center;margin:0 auto;" class="form-control"></td>
                  </tr>
                  <tr>
                    <td>床单</td>
                    <td>V2
                    </td>
                    <td>D/B
                    </td>
                    <td>22.42
                    </td>
                    <td><input type="text" style="width:100px;text-align:center;margin:0 auto;" class="form-control"></td>
                  </tr>
                  <tr>
                    <td>被套</td>
                    <td>V1
                    </td>
                    <td>S/B
                    </td>
                    <td>18.22
                    </td>
                    <td><input type="text" style="width: 100px;text-align:center;margin:0 auto;" class="form-control"></td>
                  </tr>
                  <tr>
                    <td>床笠</td>
                    <td>V2</td>
                    <td>Q/B</td>
                    <td>14.41</td>
                    <td><input type="text" style="width: 100px;text-align:center;margin:0 auto;" class="form-control"></td>
                  </tr>
                  <tr>
                    <td>审批人备注：</td>
                    <td colspan="4"><input type="text" style="text-align:center;margin:0 auto;" class="form-control"></td>
                  </tr>
                </tbody>
              </table>  
            </div>
            <div style="width: 350px;height:150px; float: left; margin: 5px 0px 0px 5px;">
	             <ul>
				    <li>
				      <a>
				        <h2>提交人备注：</h2>
				            <p>空调被：关于空调被报价的一些影响因素，来自报价单备注。</p>
				            <p>床单：关于床单报价的一些影响因素，来自报价单备注。</p>
				            <p>被套：关于被套报价的一些影响因素，来自报价单备注。</p>
				            <p>床笠：关于床笠报价的一些影响因素，来自报价单备注。</p>
				      </a>
				    </li>
				  </ul>
            </div>
          </div>
          <div style="width: 32%; float: right;">
            <div class="mySlideWrap">
              <div id='mysite-slideshow'></div>
            </div>
            <div style=" bottom:80px;right: 30px; " ul="bottom: 30px";>
              <a href="javascript:onclickUpFile()" style="display: none;">上传图片<input type="file" id="upFile" /></a> 
              <a href="#modal-form" class="btn btn-s-md btn-primary">通过审核</a>
              <a href="#modal-form" class="btn btn-s-md btn-primary">拒绝审核</a>
            </div>
          </div>
        </div>
        </section>
      </form>
    </div>
    </section>
  </div>

  
</body>
</html>