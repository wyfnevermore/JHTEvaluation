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
	<link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
	<script src="<%=path%>/Script/jquery.min.js"></script>
	<script src="<%=path%>/Script/app.v2.js"></script>
	<script type="text/javascript" src="<%=path%>/Script/bootstrap.min.js"></script>
	<script src="<%=path%>/js/likeSearchInput.js"></script>
	<script src="<%=path%>/js/purchaseOrder/purchaseOrder.js"></script>
	<script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
	<script type="text/javascript">
		var path = "<%=path%>";
	</script>
</head>
<body>
	<div>
		<section class="scrollable padder">
			<div class="m-b-md">
				<h3 class="m-b-none">创建采购订单</h3>
			</div>
			<div id="calForm" class="m-b-sm">
				<section style="width: 100%;" class="panel panel-default">
					<header class="panel-heading">
						<div class="panel-body">
							<ul class="nav nav-tabs nav-justified" id="tabUl">
							</ul>
						</div>
					</header>
					
					<div style="" class="panel-body">
						<div class="tab-content" id="tabDivs">
							
					</div>
					
					
						<div style=" margin-right: 20px; float: right">
						    
							<a class="btn btn-s-md btn-primary-W" style="width:60px;display:inline" href="javaScript:void(0);" onclick="saveOrder();">保存订单</a>
							&nbsp;&nbsp;<a class="btn btn-s-md btn-primary-W" style="width:60px;display:inline" href="javaScript:void(0);" onclick="uploadOrder();">上传订单</a>
							&nbsp;&nbsp;<a id="outOrderBtn" class="btn btn-s-md btn-primary-W" style="width:60px;display:none" href="javaScript:void(0);" onclick="uploadOutOrder();">上传外协订单</a>
						</div>
					</div>
				</section>
			</div> 
			
			<!--添加修改销售订单行信息  -->
			<div class="modal fade" id="addPurchase">
				<div class="modal-dialog" style="width: 800px">
					<div class="modal-content">
						<div class="modal-body">
							<div class="row">
								<form id="purchaseForm" class="form-horizontal"  data-validate="parsley" method="post" onsubmit="return false">
									<table style="text-align: right;"
									class="table table-striped b-t b-light text-sm">
									<tbody id="atbody">
										<tr>	
											<td><label>物料编码：</label></td>
											<td><input type="text" name="itemNumber" id="materielNum" class="form-control" data-required="true"></td>
											<td><label>单位：</label></td>
											<td><input type="text" name="unitOfMeasure" id="department" class="form-control" data-required="true"></td>
										</tr>
										<tr>
											<td><label>数量：</label></td>
											<td><input type="text" name="quantity" id="materielNumer"  value="" class="form-control" data-type="number" data-required="true"></td>
											<td><label>单价：</label></td>
											<td><input type="text" name="unitPrice" id="unitPrice" class="form-control" data-type="number" data-required="true"></td>
										</tr>
										<tr>
											<td><label>行类型：</label></td>
											<td><input type="text" name="lineType" id="rowType" class="form-control" data-required="true"></td>
											<td><label>发运行号：</label></td>
											<td><input type="text" name="shipmentNum" id="shipmentNum" class="form-control" data-required="true"></td>
										</tr>
										<tr>
										    <td><label >税率：</label></td>
											<td><input type="text" name="lineAttribute1" id="ratio" value="" class="form-control" data-type="number" data-required="true"></td>
											<td><label>含税价格：</label></td>
											<td><input type="text" name="lineAttribute3" id="ratioPrice" value="" class="form-control" data-type="number" data-required="true"></td>
										</tr>
										<tr>
										    <td><label>项目：</label></td>
											<td><input type="text" name="lineAttribute4" id="project" value="" class="form-control" data-required="true"></td>
									        <td><label>辅料说明：</label></td>
											<td><input type="text" name="accessExplain" id="accessExplain" value="" class="form-control" data-required="true"></td>
									        
									    </tr>
									    <tr hidden="hidden">
									        <td><label>加工合同号：</label></td>
											<td><input type="text" name="contractNo" id="contractNo" value="" class="form-control" data-required="true"></td>
										    <td><label>EBS工单号：</label></td>
											<td><input type="text" name="wipEntityName" id="wipEntityName" value="" class="form-control" data-required="true"></td>
									        
									    </tr>
									</tbody>
								</table>

								<div>
									<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:void(0);" onClick="updatePurchase();"  class="btn btn-default btn-sm">确定</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
	</html>