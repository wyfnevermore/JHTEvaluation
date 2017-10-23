<!DOCTYPE html>
<html lang="zh-CN">
  <head>
  	<title>from-data</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="Script/assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="Script/assets/bootstrap-table/src/bootstrap-table.css">
    <link rel="stylesheet" href="Script/assets/examples.css">
    <script src="Script/assets/jquery.min.js"></script>
    <script src="Script/assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="Script/assets/bootstrap-table/src/bootstrap-table.js"></script>
  </head>

  <body>
	<form id="testForm" class="form-horizontal" style="padding: 20px 100px 5px 5px; width: 100%; height: 100px;" role="form">
		<div class="form-group">
			<label class="col-sm-1 control-label text-right">测算单号：</label>
			<div class="col-sm-1">
				<input type="text" name="evalListID" class="form-control">
			</div>
			<label class="col-sm-1 control-label text-right">测算人：</label>
			<div class="col-sm-1">
				<input type="text" name="createPersonID" class="form-control ">
			</div>
			<label class="col-sm-1 control-label text-right">客户：</label>
			<div class="col-sm-1">
				<input type="text" name="customerID" class="form-control ">
			</div>
			<label class="col-sm-1 control-label text-right">产品类型：</label>
			<div class="col-sm-1">
				<select class="input-sm form-control input-s-sm inline">
					<option value="0">化纤制连衣裙</option>
					<option value="1">全棉漂白布或半漂布</option>
					<option value="2">全棉斜纹布</option>
				</select>
			</div>
			<label class="col-sm-1 control-label text-right">产品名称：</label>
			<div class="col-sm-1">
				<input type="text" name="productName" class="form-control ">
			</div>
			<div class="col-sm-2">
				<a class="btn btn-primary" id="evalQuery" onclick="Query();">查找</a>
			</div>
		</div>
	</form>

	<div class="container" style="width: 100%; height: 80%;">
		<table id="table">
			<thead>
				<tr>
					<th data-field="id" style="width: 80px;"></th>
					<th data-field="evalListID" style="width: 100px;">测算单号</th>
					<th data-field="evalVersionID" style="width: 100px;">版本号</th>
					<th data-field="createPersonID" style="width: 100px;">报价人</th>
					<th data-field="customerID" style="width: 100px;">客户</th>
					<th data-field="productName" style="width: 100px;">产品名称</th>
					<th data-field="createTime" style="width: 100px;">创建日期</th>
					<th data-field="evalListStatus" style="width: 100px;">测算状态</th>
				</tr>
			</thead>
		</table>
		<footer class="panel-footer">
			<div class="row">
				<div class="col-sm-4 hidden-xs"></div>
				<div class="col-sm-4 text-center">
					<small class="text-muted inline m-t-sm m-b-sm">showing 20-30 of 50 items</small>
				</div>
				<div class="col-sm-4 text-right text-center-xs">
					<ul class="pagination pagination-sm m-t-none m-b-none">
						<li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
						<li><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">5</a></li>
						<li><a href="#"><i class="fa fa-chevron-right"></i></a></li>
					</ul>
				</div>
			</div>
		</footer>
	</div>

	<script>
		var $table = $('#table');
		$(function() {
			$.ajax({
				type : "POST",
				data : $("#testForm").serialize(),
				async : false,
				url : "/JHTEvaluation/QueryEval.do",
				dataType : "json",
				success : function(data) {
					$table.bootstrapTable({
						data : data
					});
				}
			});
		});

		function Query() {
			$.ajax({
				type : "POST",
				data : $("#testForm").serialize(),
				async : false,
				url : "/JHTEvaluation/QueryEval.do",
				dataType : "json",
				success : function(data) {
					$table.bootstrapTable({
						data : data
					});
				}
			});
		}
	</script>
  </body>
</html>
