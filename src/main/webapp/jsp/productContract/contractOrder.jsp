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
<link rel='stylesheet' href="<%=path%>/css/bootstrap-datetimepicker.min.css" type='text/css'>
<script src="<%=path%>/Script/jquery.min.js"></script>
<script src="<%=path%>/Script/app.v2.js"></script>
<script type="text/javascript" src="<%=path%>/Script/datepicker/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script src="<%=path%>/js/likeSearchInput.js"></script>
<script type="text/javascript" src="<%=path%>/Script/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
<script src="<%=path%>/js/productContract/contractOrder.js"></script>
<script type="text/javascript">
	var path = "<%=path%>";
</script>
</head>
<body>
  <div>
    <section class="scrollable padder">
    <div class="m-b-md">
      <h3 class="m-b-none">创建工单</h3>
    </div>
    <div id="calForm" class="m-b-sm">
    <section style="width: 100%;" class="panel panel-default">
    <form id="commonHead" class="form-horizontal"  data-validate="parsley" method="post" onsubmit="return false">
    <table style="margin:10px 10px 10px 10px;width: 98%">
		<tbody>
			<tr height="30px">
				<td width="8%"><label style="float: right">库存组织:</label></td>
				<td width="4%"><label style="float: left">INV_WG</label></td>
				<td width="8%"><label style="float: right">起始时间:</label></td>
				<td width="12%"><input type="text" class="form-control" id="orderTime" value="2017-01-01" style="float:left;width:150px" class="form-control" name="schduledStartDate" data-required="true"></td>
				<td width="8%"><label style="float: right">加工合同号:</label></td>
				<td width="10%"><label style="float: left"><input type="text" class="form-control parsley-validated" name="processContractNum" data-required="true"></label></td>
				<td width="8%"><label style="float: right">加工商:</label></td>
				<td width="16%"><label style="float: left"><input type="text" class="form-control parsley-validated" name="processName" id="processName" code="" data-required="true"></label></td>
				<td width="8%"><label style="float: right">订单类型:</label></td>
				<td width="6%">
					
					<select onchange="changeType(this)" class="form-control">
						<option value="自制">自制</option><option value="外协">外协</option>
					</select>
				
				</td>
				<td width="12%"><a class="btn btn-s-md btn-primary-W" style="width:60px;float: right" href="javaScript:void(0);" onclick="addTab();">添加工单</a></td>
			</tr>
		</tbody>
	</table>
	</form>
			
	<header class="panel-heading">
		<div class="panel-body">
			<ul class="nav nav-tabs nav-justified" id="addTabs">
				<li class="active"><a href="#order1" data-toggle="tab">工单</a></li>
			</ul>
		</div>
	</header>
			
	<div class="panel-body">
	<form id="dataForm" class="form-horizontal"  data-validate="parsley" method="post" onsubmit="return false">
	  <div class="tab-content" id="tabDivs">
		<div class="tab-pane active" style="" id="order1">
		  <div class="m-b-md"> <h4>工单头信息</h4></div>
		  <table style="width: 90%">
		    <tbody>
		      <tr height="30px">
				<td width="8%"><label style="float: right">工单号:</label></td>
				<td width="12%"><input type="text" class="form-control parsley-validated" name="jobName" data-required="true"></td>
				<td width="8%"><label style="float: right">装配件:</label></td>
				<td width="12%"><input type="text" class="form-control parsley-validated" name="assemblyItem" sku="" data-required="true"></td>
				<td width="8%"><label style="float: right">数量:</label></td>
				<td width="12%"><input type="text" class="form-control parsley-validated" name="startQuantity" data-required="true"></td>
				<td width="8%"><label style="float: right">项目:</label></td>
				<td width="12%"><label style="float: left"><input type="text" class="form-control parsley-validated" name="projectNumber" data-required="true"></label></td>
			  </tr>
			  <tr><td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td></tr>
			  <tr height="30px">
				<td ><label style="float: right">材料费:</label></td>
				<td ><label style="float: left"><input type="text" class="form-control parsley-validated" name="materialFee"></label></td>
				<td ><label style="float: right">加工费:</label></td>
				<td ><label style="float: left"><input type="text" class="form-control parsley-validated" name="processFee" data-required="true"></label></td>
				<td ><label style="float: right">网型:</label></td>
				<td ><label style="float: left"><input type="text" class="form-control parsley-validated" name="meshType" data-required="true"></label></td>
				<td ><label style="float: right">销售订单号:</label></td>
				<td ><label style="float: left"><input type="text" class="form-control parsley-validated" name="orderNumber" data-required="true"></label></td>
			  </tr>
			  <tr><td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td></tr>
			  <tr height="30px">
				<td><label style="float: right"> 单产品生产工时:</label></td>
				<td><label style="float: left"><input type="text" class="form-control parsley-validated" name="singleProductTime"></label></td>
				<td><label style="float: right">花型：</label></td>
				<td><label style="float: left"><input type="text" class="form-control parsley-validated" name="flowerPattern"></label></td>
				<td><label style="float: right"> 车间：</label></td>
				<td><label style="float: left"><input type="text" class="form-control parsley-validated" name="workshop" data-required="true"></label></td>
				<td><label style="float: right"> 加工产品类别：</label></td>
				<td><label style="float: left"><input type="text" class="form-control parsley-validated" name="processProductType" data-required="true"></label></td>
			  </tr>
			</tbody>
		  </table>
		  <section style="width: 90%;margin-top:10px" class="panel panel-default">
			<header><h4>工单行信息</h4></header>
			<div class="tab-pane active">
			   <table class="table table-striped b-t b-light text-sm">
               <thead>
                 <tr>
                   <th>物料编码</th>
                   <th>用量</th>
                   <th>产出率</th>
                   <th>物料成本</th>
                   <th>工序</th>
                   <th>类型(MDS/BOM)</th>
                   <th style="width:85px;">操作</th>
                 </tr>
               </thead>
               <tbody id="processContractLines">
                 <tr>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td><a onClick="addContract(this);" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>&nbsp;
             			<a onClick="delRow(this)" href="javaScript:;"><i class="fa fa-minus"></i></a>&nbsp;
             			<a onClick="getContract(this);" href="javascript:void(0)"><i class="fa fa-pencil"></i></a>&nbsp;
             			</td>
                 </tr>
               </tbody>
             </table>
             </div>
             </section>
		  </div>
		</div>
		
		
			</form>
             
         </div>
		<div style="margin:10px 20px; float: right">
			<a class="btn btn-s-md btn-primary-W" style="width: 60px" href="javaScript:void(0);" onclick="saveContract();">保存合同</a>&nbsp;&nbsp;
			<a class="btn btn-s-md btn-primary-W" style="width: 60px" href="javaScript:void(0);" onclick="uploadContractAfterSave();">上传工单</a>&nbsp;&nbsp;
			<a class="btn btn-s-md btn-primary-W" style="width: 60px" href="javaScript:void(0);" onclick="uploadContractMDS();">上传MDS</a>&nbsp;&nbsp;
			<a class="btn btn-s-md btn-primary-W" style="width: 60px" href="javaScript:void(0);" onclick="uploadContractPOFee();" id="POFeeBtn" style="display: none;">上传加工费</a>
		</div>
	  </section>
      </div>
     </section>
    </div> 
 
 
 
 
 
	 <!--添加修改合同行信息  -->
	 <div class="modal fade" id="addContract">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
					<form id="contractForm" class="form-horizontal"  data-validate="parsley" method="post" onsubmit="return false">
						<table style="text-align: right;"
							class="table table-striped b-t b-light text-sm">
							<tbody id="atbody">
								<tr>	
									<td><label>BOM–物料编码：</label></td>
									<td><input type="text" id="bomMaterielNum" sku="" class="form-control" data-required="true"></td>
									<td><label>BOM–用量：</label></td>
									<td><input type="text" id="bomDosage" class="form-control" data-type="number" data-required="true"></td>
								</tr>
								<tr>
									<td><label>BOM–产出率：</label></td>
									<td><input type="text" id="bomOutputRate"  class="form-control" data-type="number" data-required="true"></td>
									<td><label>BOM-物料成本：</label></td>
									<td><input type="text" id="materialCosts" class="form-control" data-type="number"></td>
								</tr>
								<tr>
									<td><label>工序：</label></td>
									<td><input type="text" class="form-control" id="procedure"  style="float:left;" class="form-control"></td>
									<td><label>类型(MDS/BOM)：</label></td>
									<td><select name="mdsOrbom" id="mdsOrbom" class="form-control" >
										<option value="BOM">BOM</option>
										<option value="MDS">MDS</option>
									</select></td>
								</tr>
							</tbody>
						</table>

						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:void(0);" onClick="updateContract();"  class="btn btn-default btn-sm">确定</a>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	
	<div style="display:none">
		<div class="tab-pane active" style="" id="orderInit">
		  <div class="m-b-md"> <h4>工单头信息</h4></div>
		  <table style="width: 90%">
		    <tbody>
		      <tr height="30px">
				<td width="8%"><label style="float: right">工单号:</label></td>
				<td width="12%"><input type="text" class="form-control parsley-validated" name="jobName" data-required="true"></td>
				<td width="8%"><label style="float: right">装配件:</label></td>
				<td width="12%"><input type="text" class="form-control parsley-validated" name="assemblyItem" sku="" data-required="true"></td>
				<td width="8%"><label style="float: right">数量:</label></td>
				<td width="12%"><input type="text" class="form-control parsley-validated" name="startQuantity" data-required="true"></td>
				<td width="8%"><label style="float: right">项目:</label></td>
				<td width="12%"><label style="float: left"><input type="text" class="form-control parsley-validated" name="projectNumber" data-required="true"></label></td>
			  </tr>
			  <tr><td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td></tr>
			  <tr height="30px">
				<td ><label style="float: right">材料费:</label></td>
				<td ><label style="float: left"><input type="text" class="form-control parsley-validated" name="materialFee"></label></td>
				<td ><label style="float: right">加工费:</label></td>
				<td ><label style="float: left"><input type="text" class="form-control parsley-validated" name="processFee" data-required="true"></label></td>
				<td ><label style="float: right">网型:</label></td>
				<td ><label style="float: left"><input type="text" class="form-control parsley-validated" name="meshType" data-required="true"></label></td>
				<td ><label style="float: right">销售订单号:</label></td>
				<td ><label style="float: left"><input type="text" class="form-control parsley-validated" name="orderNumber" data-required="true"></label></td>
			  </tr>
			  <tr><td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td></tr>
			  <tr height="30px">
				<td><label style="float: right"> 单产品生产工时:</label></td>
				<td><label style="float: left"><input type="text" class="form-control parsley-validated" name="singleProductTime"></label></td>
				<td><label style="float: right">花型：</label></td>
				<td><label style="float: left"><input type="text" class="form-control parsley-validated" name="flowerPattern"></label></td>
				<td><label style="float: right"> 车间：</label></td>
				<td><label style="float: left"><input type="text" class="form-control parsley-validated" name="workshop" data-required="true"></label></td>
				<td><label style="float: right"> 加工产品类别：</label></td>
				<td><label style="float: left"><input type="text" class="form-control parsley-validated" name="processProductType" data-required="true"></label></td>
			  </tr>
			</tbody>
		  </table>
		  <section style="width: 90%;margin-top:10px" class="panel panel-default">
			<header><h4>工单行信息</h4></header>
			<div class="tab-pane active">
			   <table class="table table-striped b-t b-light text-sm">
               <thead>
                 <tr>
                   <th>物料编码</th>
                   <th>用量</th>
                   <th>产出率</th>
                   <th>物料成本</th>
                   <th>工序</th>
                   <th>类型(MDS/BOM)</th>
                   <th style="width:85px;">操作</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td><a onClick="addContract(this);" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>&nbsp;
             			<a onClick="delRow(this)" href="javaScript:;"><i class="fa fa-minus"></i></a>&nbsp;
             			<a onClick="getContract(this);" href="javascript:void(0)"><i class="fa fa-pencil"></i></a>&nbsp;
             			</td>
                 </tr>
               </tbody>
             </table>
             </div>
             </section>
		  </div>
	
	</div>
</body>
</html>