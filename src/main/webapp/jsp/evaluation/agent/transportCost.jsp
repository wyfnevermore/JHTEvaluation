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
<script type="text/javascript" src="<%=path%>/js/evaluation/agent/transportCost.js"></script>
<script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
<script type="text/javascript">
var evalDetailID = window.parent.evalDetailID;
</script>

</head>
<body>
	<section class="panel panel-default">
		<div class="tab-pane" style="height:auto;min-height:500px;" >
		  <form id="costForm" class="form-horizontal">
			<table class="table table-striped b-t b-light text-sm">
				<tbody id="costBody">
					<tr>
						<td width="120px;"><label>费用名称：</label></td>
						<td width="300px;"><input name="costName" type="text" class="form-control" data-required="true"></td>
						<td width="120px;"><label>金额(￥)：</label></td>
						<td width="120px;"><input name="costValue" type="text" class="form-control" data-required="true" data-type="number" onblur="calResultInput(this)"></td>
						<td width="60px;"><div class="btn-group"><a href="javascript:addCost()" ><i class="fa fa-plus"></i> </a></div>
					        <div style="float:right"><a onclick="delRow(this);" href="javascript:;"><i class="fa fa-minus"></i></a></div>
					    </td>
					    <td></td>
					</tr>
				</tbody>
				<tbody id="costTotalBody">
					<tr>
						<td><label>合计：</label></td>
						<td></td>
						<td></td>
						<td name="costTotalValue">0.00</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		  </form>
		</div>
		<div style="float: right">
            <a href="javascript:saveTransportCost();" class="btn btn-s-md btn-primary" >进入代理费测算</a>
          </div>
	</section>

</body>
</html>
