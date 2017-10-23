<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%String path=request.getContextPath(); %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title></title>
<link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
<script type="text/javascript" src="<%=path%>/Script/app.v2.js"></script>
<script type="text/javascript" src="<%=path%>/Script/jquery.min.js"></script>
<script type="text/javascript" src="<%=path%>/Script/bootstrap.min.js"></script>
<script src="<%=path%>/js/likeSearchInput.js"></script>
<script type="text/javascript" src="<%=path%>/js/evaluation/distribution/materialCost.js"></script>
<script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
<script type="text/javascript">
	var path="<%=path%>";
	var evalDetailID = window.parent.evalDetailID;
	var opraType = window.parent.opraType;
</script>
</head>
<body>
<section style="height:auto;min-height:500px;" class="panel panel-default">
	<div class="tab-pane" style="height:auto;min-height:500px;" id="specItem0">
	   <table class="table table-striped b-t b-light text-sm">
	         <thead>
	           <tr>
	             <th>产品名称</th>
		     	 <th>产品尺寸</th>
	             <th>产品描述</th>
	             <th>HS索引</th>
	             <th>退税税率(%)</th>
	             <th hidden="hidden">产品类型</th>
	             <th>参考工厂</th>
	             <th style="width:100px;">成本($)</th>
	             <th style="width:80px;">操作</th>
	           </tr>
	         </thead>
	         <tbody id="tbodyId">
	           <tr>
	             <td></td>
		     	 <td></td>
	             <td></td>
	             <td></td>
	             <td></td>
	             <td hidden="hidden"></td>
	             <td></td>
	             <td></td>
				 <td><div style＝"float:left;" class="btn-group"><a onClick="addProduct()"><i class="fa fa-plus"></i> </a></div>
	             <a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>
	             <div style＝"float:right;" class="btn-group"> <a onClick="updateProductdWin(this)" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-pencil"></i></a></div></td>
	           </tr>
	         </tbody>
	         <!-- <tbody id="costToalBody">
	          	<tr>
	             <td>合计</td>
	             <td></td>
	             <td></td>
	             <td></td>
	             <td></td>
	             <td></td>
	             <td hidden="hidden"></td>
	             <td>0.00</td>
	             <td></td>
	           </tr>
	         </tbody> -->
	       </table>
	</div>
</section>
	<div style="float: right">
      <a href="javascript:saveEvalDetail();" class="btn btn-s-md btn-primary" >进入其他费用测算</a>
    </div>
    
	<div class="modal fade" id="chengpin">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<form class="form-horizontal" id="chengpinForm" data-validate="parsley" method="post" onsubmit="return false">
							<table style="text-align: right;" class="table table-striped b-t b-light text-sm">
								<tbody>
									<tr>
										<td style="width: 120px;"><label>产品名称：</label></td>
										<td><input id="productName" name="productName" type="text" class="form-control" data-required="true"></td>
										<td><div style="text-align:left;"><label><input type="checkbox" id="manual" name="manual" onchange="changeManual()"> 手动</label></div></td>
										<td><label>产品类型：</label></td>
										<td><input id="productType" name="productType" type="text" class="form-control" data-required="true"></td>
									</tr>
									<tr>
										<td><label>产品尺寸：</label></td>
										<td><input id="productSize" type="text" class="form-control"  data-required="true" data-type="number"></td>
										<td></td>
										<td><label>HS索引：</label></td>
										<td><input id="HSCode" type="text" class="form-control" data-required="true" onfocus="this.blur()"></td>
										<td></td>
									</tr>
									<tr>
										<td><label>退税税率(%)：</label></td>
										<td><input id="drawBackRate" type="text" class="form-control" data-required="true" onfocus="this.blur()"></td>
										<td></td>
										<td><label>产品描述：</label></td>
										<td><input id="productDescribe" type="text" class="form-control"></td>
									</tr>
									<tr>
										<td><label>参考工厂：</label></td>
										<td><input id="factory" type="text" class="form-control"></td>
										<td></td>
										<td><label>成本($)：</label></td>
										<td><input id="chengpinCost" type="text" class="form-control" data-required="true" data-type="number"></td>
									</tr>
								</tbody>
							</table>
							<div>
								<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:updateProduct();" class="btn btn-default btn-sm">确定</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>
