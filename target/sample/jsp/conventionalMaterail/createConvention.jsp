<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%String path=request.getContextPath(); 
String sharePriceV = (String)request.getParameter("sharePriceV");
%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Insert title here</title>
<meta charset="utf-8" />
<title>JHT测算平台 | Web Application</title>
<link rel="stylesheet" type="text/css" href="<%=path%>/css/slideshow.css">
<link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
<script src="<%=path%>/Script/jquery.min.js"></script>
<script src="<%=path%>/Script/app.v2.js"></script>
<script src="<%=path%>/js/convention/createConvention.js"></script>
<script src="<%=path%>/Script/bootstrap-table.js"></script>
<script type="text/javascript">
var sharePriceV = "<%=sharePriceV%>";
</script>
</head>
<body>
  <div>
    <section class="scrollable padder">
    <div class="m-b-md">
      <h3 class="m-b-none">提交用料单</h3>
    </div>
    <div id="calForm" class="m-b-sm">
      <form class="form-horizontal" data-validate="parsley" method="post" onsubmit="return false" id="sharePriceForm">
        <section class="panel panel-default">
		<header class="panel-heading"> </header>
        <div class="panel-body">
          <div style="width: 80%; float: left; min-width: 700px;">
            <div class="line line-dashed line-lg pull-in"></div>
            <div style="width: 100%; float: left; margin: 10px 0px 0px 10px">
            
             <div class="form-group">
              <table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody >
                <tr>
                  <td width="100px;"><label>成品名称：</label></td>
                  <td width="250px;"><input  type="text" class="form-control"></td>
                  <td width="100px;"><label>成品SKU：</label></td>
                  <td width="250px;"><input type="text" class="form-control"></td>
                  <td width="400px;"></td>
                </tr> 
                
              </tbody>
            </table>
             </div>
             
             
              <table  style="text-align: center;" class="table table-striped b-t b-light text-sm">
                <thead>
                  <tr>
                    <th>成品/物料名称</th>
                    <th>SKU</th>
                    <th>数量</th>
                    <th>单位</th>
                    <th>产出率</th>
                   
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
                    <td><a onClick="replace()" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>
              			<a onClick="delRow(this)" href="javaScript:;"><i class="fa fa-minus"></i></a>
                  </tr>
                </tbody>	
              </table>
            </div>
          </div>
          <div style="width: 45%; float: right">
            <div class="mySlideWrap">
              <div id='mysite-slideshow'></div>
            </div>
            <div style="margin-bottom: 400px; margin-right: 0px; float: right">
              <a  href="javaScript:void(0);" onclick="createSalesOrder();" class="btn btn-s-md btn-primary" >提交用料单</a>
            </div>
          </div>
        </div>
        </section>
      </form>
    </div>
    </section>
  </div>

 
  
  <!--替换  -->
  <div class="modal fade" id="replaceMater">
    <div class="modal-dialog" style="width:850px; height: 450px;">
      <div style="background-color: #ffffff; width: 100%; height: 440px;OVERFLOW-Y: scroll; OVERFLOW-X:hidden;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
       
        <section class="panel panel-default">
        <header><h4>物料库</h4></header>
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
            	<a class="btn btn-s-md btn-primary-W" style="width:60px;float: right" href="javaScript:void(0);" onclick="closeReplace();">添加</a>
         </div> 
        </section>
         </div>
      </div>
    </div>
  </div>
  
  
  
</body>
</html>