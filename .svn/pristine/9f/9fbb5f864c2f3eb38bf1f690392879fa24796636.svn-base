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
<script type="text/javascript" src="<%=path%>/js/evaluation/agent/productDescription.js"></script>
	<script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
<script>
	var path = "<%=path%>";
	var evalDetailID = window.parent.evalDetailID;
	var evalHeadData = window.parent.evalHeadData;
	var eval_colorCost = {};
	/* $.getJSON (path+"/dataBase-config/eval-colorCost.data",function (jsonObj){
		eval_colorCost = jsonObj;
	}); */
</script>
</head>
<body>
	<div>
		<form class="form-horizontal" id="compoForm" data-validate="parsley" method="post" onsubmit="return false">
			<section style="height:auto;min-height:500px;" class="panel panel-default">
				<div class="panel-body">
					<div class="form-group pull-in clearfix">
						<table style="width:300px;">
							<tr>
								<td style="width:40%"><label style="margin-left: 15px;" class="control-label">成品名称：</label></td>
								<td width="60%"><input id="productNameEver1" type="text" class="form-control" onfocus="this.blur()"></td>
							</tr>
						</table>
						<!--组件  -->
						<div style="width: 60%; float: left; margin: 10px 0px 0px 10px">
							<table id="compoSel" class="table table-striped b-t b-light text-sm">
								<thead id="compHead">
									<tr>
										<th style="width:70px;">组件序列</th>
										<th>组件名称</th>
										<th>数量</th>
										<th style="width:120px;">组件成本比例(%)</th>
										<th style="width:70px;">颜色选择</th>
										<th style="width:70px;">花型选择</th>
										<th style="width:70px;">规格选择</th>
										<th style="width:70px;">操作</th>
									</tr>
								</thead>
								<tbody id="compBody">
									<tr>
										<td>组件1</td>
										<td hidden="hidden"><input type="hidden"/></td>
										<td hidden="hidden"><input type="hidden"/></td>
										<td hidden="hidden"><input type="hidden"/></td>
										<td><input type="text" class="form-control" data-required="true"></td>
										<td><input type="text" class="form-control" data-required="true" data-type="number"></td>
										<td><input type="text" class="form-control"></td>
										<td><a onclick="showColorForm(this)" href="javascript:void(0)" class="btn btn-sm btn-icon btn-danger"><i class="fa fa-plus"></i></a></td>
										<td><a onclick="showPatternForm(this)" href="javascript:void(0)" class="btn btn-sm btn-icon btn-danger" data-toggle="modal"><i class="fa fa-plus"></i></a></td>
										<td><a onclick="showSpecForm(this)" href="javascript:void(0)" class="btn btn-sm btn-icon btn-danger" data-toggle="modal"><i class="fa fa-plus"></i></a></td>
										<td><div class="btn-group"><a onclick="addCompRow()" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-plus"></i> </a></div>
								          <a  href="javascript:void(0)" data-toggle="modal"><i class="fa fa-minus"></i></a></td>
								    <td hidden="hidden"><input type="hidden"/></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div style="width: 37%; float: right; padding:20px;">
							<table>
								<tr>
									<td style="width: 10%; min-width: 80px;"><label style="margin-left: 15px;" class="control-label">做工描述：</label></td>
									<td width="42%"><textarea id="workDesc" class="form-control" value="床单上14CM卡夫" rows="2"></textarea></td>
								</tr>
								<tr><td></td></tr>
								<tr>
									<td style="width: 10%; min-width: 80px;"><label style="margin-left: 15px;" class="control-label">包装描述：</label></td>
									<td width="22%"><textarea id="packageDesc" class="form-control" rows="2"></textarea></td>
								</tr>
								<tr><td></td></tr>
								<tr>
									<td style="width: 10%; min-width: 80px;"><label
										style="margin-left: 15px;" class="control-label">测算备注：</label></td>
									<td width="22%"><textarea id="evalRemark" class="form-control" value="床单上14CM卡夫" rows="2"></textarea></td>
								</tr>
							</table>
						</div>
					</div>
					
					<div class="line line-dashed line-lg pull-in"></div>
				</div>
			</section>
			<div style="float: right">
              <a href="javascript:saveEvalDetail();" class="btn btn-s-md btn-primary" >进入材料成本测算</a>
            </div>
		</form>
	</div>

	<!--点击+出弹窗 颜色选择 -->
	<div class="modal fade" id="modal-form">
		<div class="modal-dialog" style="width: 450px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<div>
						<table id="colorSel" style="text-align: center;" class="table table-striped b-t b-light text-sm">
							<thead id="colorSelHead">
								<tr>
									<th width="70px;">&nbsp;</th>
									<th width="70px;">浅</th>
									<th width="70px;">中</th>
									<th width="70px;">深</th>
									<th width="70px;">其他</th>
									<th >操作</th>
								</tr>
								<tr>
									<th width="70px;"><img src="<%=path%>/images/colorLabel.png" style="width:80%;height:25%"></th>
									<th width="70px;"><input type="text" class="form-control"></th>
									<th width="70px;"><input type="text" class="form-control"></th>
									<th width="70px;"><input type="text" class="form-control"></th>
									<th width="70px;"></th>
									<th></th>
								</tr>
							</thead>	
							<tbody id="colorSelBody">
								<tr>
									<td><input name="colorName" placeholder="颜色" type="text" class="form-control"></td>
									<td><input type="text" class="form-control"></td>
									<td><input type="text" class="form-control"></td>
									<td><input type="text" class="form-control"></td>
									<td><input name="otherCheckBox" style="margin-bottom:5px;" type="checkbox"></td>
									<td></td>
								</tr>
							</tbody>
							<tbody>
								<tr id="baseTr">
									<td><a href="javaScript:addRows();" class="btn btn-sm btn-icon btn-danger">+</a></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
						</div>
						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javaScript:getColor();" class="btn btn-default btn-sm">确定</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	
	<!--点击+出弹窗 组件1 花型选择 -->
	<div class="modal fade" id="modal-form1">
		<div class="modal-dialog" style="width: 500px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<div>
							<table id="patternSel" style="text-align: center;" class="table table-striped b-t b-light text-sm">
							<thead>
							<tr>
								<th width="70px;">&nbsp;</th>
								<th width="70px;">&nbsp;</th>
								<th width="50px;">平网</th>
								<th width="70px;">圆网64CM</th>
								<th width="70px;">圆网91CM</th>
								<th width="70px"><input type="text" id="patternInput" value="其他" class="form-control"></th>
								<th >操作</th>
							</tr>
						</thead>	
								<tr>
									<td>正面</td>
									<td><select style="margin-left:5px;width:70px;height:30px;" class="input-sm form-control input-s-sm inline">
										<option value="A版">A版</option>
										<option value="B版">B版</option>
										<option value="C版">C版</option>
									</select></td>
									<td><input type="checkbox" name="options"></td>
									<td><input type="checkbox" name="options"></td>
									<td><input type="checkbox" name="options"></td>
									<td><input  type="checkbox" name="options"></td>
									<td></td>
								</tr>
								<tr>
									<td>反面</td>
									<td><select style="margin-left:5px;width: 70px;height:30px;" class="input-sm form-control input-s-sm inline">
										<option value="A版">A版</option>
										<option value="B版">B版</option>
										<option value="C版">C版</option>
									</select></td>
									<td><input type="checkbox" name="options"></td>
									<td><input type="checkbox" name="options"></td>
									<td><input type="checkbox" name="options"></td>
									<td><input  type="checkbox" name="options"></td>
									<td></td>
								</tr>
								<tr>
									<td><a href="javaScript:void(0);" onclick="patternAddRows(this);" class="btn btn-sm btn-icon btn-danger">+</a></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</table>
						</div>
						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" onClick="getPattern()" herf="javaScript:void(0);" class="btn btn-default btn-sm">确定</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!--规格弹出框 组件1-->
	<div class="modal fade" id="modal-form2">
		<div class="modal-dialog" style="width: 500px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<div>
						<table id="specSel" style="text-align: center;" class="table table-striped b-t b-light text-sm">
						<thead>
							<tr>
								<th>&nbsp;</th>
								<th>规格</th>
								<th>长(CM)</th>
								<th>宽(CM)</th>
								<th>高(CM)</th>
								<th><input type="text" name="specOtherName" value="其他" class="form-control"></th>
								<th width="55px">操作</th>
							</tr>
						</thead>
						<tbody id="specBody">
							<tr>
								<td><input type="checkbox" name="options"></td>
								<td><input type="text" class="form-control" value="S/B"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="options"></td>
								<td><input type="text" class="form-control" value="D/B"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="options"></td>
								<td><input type="text" class="form-control" value="Q/B"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="options"></td>
								<td><input type="text" class="form-control" value="K/B"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td><input type="text" class="form-control"></td>
								<td></td>
							</tr>
						</tbody>
						<tbody>
							<tr>
							<td><a onclick="specAddRows(this);" href="javaScript:void(0);" class="btn btn-sm btn-icon btn-danger">+</a></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							</tr>
						</tbody>
					</table>
						</div>
						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" onClick="getSpec()" href="javaScript:void(0);" class="btn btn-default btn-sm">确定</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>
