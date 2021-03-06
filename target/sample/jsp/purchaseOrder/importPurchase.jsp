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
<script src="<%=path%>/js/purchaseOrder/importPurchase.js"></script>
<script src="<%=path%>/Script/bootstrap-table.js"></script>
<script type="text/javascript">
var sharePriceV = "<%=sharePriceV%>";
</script>
</head>
<body>
  <div>
    <section class="scrollable padder">
    <div class="m-b-md">
      <h3 class="m-b-none">导入采购成品</h3>
    </div>
    <div id="calForm" class="m-b-sm">
      <form class="form-horizontal" data-validate="parsley" method="post" onsubmit="return false">
        <section class="panel panel-default">
		<header class="panel-heading"> </header>
        <div class="panel-body">
          <div style="width: 67%; float: left; min-width: 700px;">
            <div class="line line-dashed line-lg pull-in"></div>
            
            <div class="line line-dashed line-lg pull-in"></div>
            <div style="width: 100%; float: left; margin: 10px 0px 0px 10px">
              采购订单类型：<input type="radio" name="type" id="radiojx" checked="" /><label for="radiojx">经销</label>&nbsp;&nbsp;<input type="radio" name="type" id="radiocg"/><label for="radiocg">常规</label>&nbsp;&nbsp;<input type="radio" name="type" id="radiofcg"/><label for="radiofcg">非常规</label>&nbsp;&nbsp;
              <table  style="text-align: center;" class="table table-striped b-t b-light text-sm">
                <thead>
                  <tr>
                    <th>项目号</th>
                    <th>销售订单号</th>
                    <th>成品描述</th>
                    <th>规格</th>
                    <th>成品SKU</th>
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
                    <td><a onClick="addPurchase();" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>&nbsp;
              			<a onClick="delRow(this)" href="javaScript:;"><i class="fa fa-minus"></i></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style="width: 40%; float: right">
            <div class="mySlideWrap">
              <div id='mysite-slideshow'></div>
            </div>
            <div style="margin-bottom: 400px; margin-right: 0px; float: right">
              <a  href="javaScript:void(0);" onclick="createPurchase();" class="btn btn-s-md btn-primary" >手动生成采购订单</a>
            </div>
          </div>
        </div>
        </section>
      </form>
    </div>
    </section>
  </div>

  <div class="modal fade" id="addPurchase">
    <div class="modal-dialog" style="width:850px; height: 650px;">
      <div style="background-color: #ffffff; width: 100%; height: 640px;overflow:auto;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
        	<table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody id="addma1">
                <tr>
                  <td width="80px;"><label>项目号：</label></td>
                  <td><input type="text" class="form-control"></td>
                  <td width="80px;"><label>销售订单号：</label></td>
                  <td><input type="text" class="form-control"></td>
                  <td width="80px;"><label>成品SKU：</label></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><a href="#" style="width:60px;height:40px;"class="btn btn-s-md btn-default">筛选</a></td>
                </tr> 
              </tbody>
            </table>
			<section class="panel panel-default">
	          <div class="table-responsive">
                <table id="purchaseTable" style="width: 100%;border-collapse: collapse;table-layout: fixed;" class="table table-striped b-t b-light text-sm">
                
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
  
   
</body>
</html>