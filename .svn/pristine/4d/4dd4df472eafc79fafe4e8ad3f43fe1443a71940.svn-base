<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
<script type="text/javascript" src="<%=path%>/js/evaluation/processing/transportCost.js"></script>
<script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
<script type="text/javascript">
var evalDetailID = window.parent.evalDetailID;
var opraType = window.parent.opraType;
</script>

</head>
<body>
	<section class="panel panel-default">
		<div class="tab-pane" style="height:auto;min-height:500px;" >
			<table class="table table-striped b-t b-light text-sm" id="transportTable">
				<thead>
					<tr>
						<th>成品规格</th>
						<th>贸易形式</th>
						<th>运输方式</th>
						<th>目的地（国家/港口）</th>
						<th>发运方式</th>
						<th>工厂交货方式</th>
						<th>单批货量范围</th>
						<th>核价参数(￥)</th>
						<th>单位体积（立方）</th>
						<th>单位运费(¥)</th>
						<th style="width: 80px;">操作</th>
					</tr>
				</thead>
				<tbody id="transportData">
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
						<td><div  class="btn-group"> <a  onClick="addTransportRow()" href="javascript:void(0)" ><i class="fa fa-plus"></i> </a>
							</div> <a onclick="delRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>
							<div  class="btn-group"> <a onClick="getTransport(this)" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-pencil"></i></a>
							</div></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div style="float: right">
            <a href="javascript:saveTransportCost();" class="btn btn-s-md btn-primary" >进入其他费用测算</a>
          </div>
	</section>

	<!--运杂费测算中的编辑弹窗  -->
	<div class="modal fade" id="addTransport">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
					<form id="atForm" class="form-horizontal"  data-validate="parsley" method="post" onsubmit="return false">
						<table style="text-align: right;"
							class="table table-striped b-t b-light text-sm">
							<tbody id="ttbody">
								<tr>
									<td><label>成品规格：</label></td>
									<td><select class="input-sm form-control inline" name="productSpec" id="productSpec" onchange="changeUnit();">
											<option value="S/B" selected>S/B</option>
											<option value="D/B">D/B</option>
											<option value="Q/B">Q/B</option>
											<option value="K/B">K/B</option>
									</select></td>
									<td><label>运输方式：</label></td>
									<td><select class="input-sm form-control inline" name="transType" id="transType"></select></td>
								</tr>
								<tr>
									<td><label>目的地（国家/港口）：</label></td>
									<td><select class="input-sm form-control inline"  name="destination"  id="destination"></select></td>
									<td><label>发送方式：</label></td>
									<td><select class="input-sm form-control inline" name="shipmentType" id="shipmentType" ></select></td>
								</tr>
								<tr>
									<td><label>工厂交货方式：</label></td>
									<td><select class="input-sm form-control inline" name="ftDeliveryType" id="ftDeliveryType"></select></td>
									<td><label>单批货量范围：</label></td>
									<td><select class="input-sm form-control inline" name="volumeRange" id="volumeRange"></select></td>
								</tr>
								<tr>
									<td><label id="pricingParaLabel">核价参数(￥)：</label></td>
									<td><input type="text" class="form-control" name="pricingPara" id="pricingPara" data-type="number" data-required="true" onblur="calculValue(this)"></td>
									<td><label>单位体积（立方）：</label></td>
									<td><input type="text" class="form-control" name="unitCubeQt" id="unitCubeQt" data-type="number" data-required="true" onblur="calculValue(this)"></td>
								</tr>
								<tr>
									<td><label>单位运费(￥)：</label></td>
									<td><input type="text" class="form-control" name="unitFreight" id="unitFreight" data-type="number" data-required="true"></td>
									<td></td>
									<td></td>
								</tr>

							</tbody>
						</table>

						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:void(0);" onClick="updateTransport();"  class="btn btn-default btn-sm">确定</a>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
