<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%String path=request.getContextPath(); 
String salesOrderJson = (String) request.getParameter("salesOrderJson");
if(salesOrderJson!=null){
	 salesOrderJson = new String(salesOrderJson.getBytes("ISO-8859-1"),"UTF-8");
}
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
	<script type="text/javascript" src="<%=path%>/Script/bootstrap.min.js"></script>
	<script src="<%=path%>/js/likeSearchInput.js"></script>
<script src="<%=path%>/js/salesOrder/salesOrder.js"></script>
<script type="text/javascript" src="<%=path%>/Script/datepicker/bootstrap-datetimepicker.js" charset="UTF-8"></script>
	<script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
<script type="text/javascript">
var salesOrderStr = '<%=salesOrderJson%>';
var salesOrder = {};
if(salesOrderStr!="null"){
	salesOrder = eval('('+salesOrderStr+')');
}else{
	salesOrder = null;
}
var path = "<%=path%>";

</script>
</head>
<body>
  <div>
    <section class="scrollable padder">
    <div class="m-b-md">
      <h3 class="m-b-none">创建销售订单</h3>
    </div>
    <div id="calForm" class="m-b-sm">
    <section style="width: 100%;" class="panel panel-default">
	<header class="panel-heading">
		<div class="panel-body">
			<ul class="nav nav-tabs nav-justified" id="addTabs">
				<!-- <li id="#productDes1" class="active"><a href="#specItem0" data-toggle="tab">WG-WT</a></li> -->
			</ul>
		</div>
	</header>
	
	<div class="panel-body" >
	<div class="tab-content" id="tabDivs">
	<div class="tab-pane" id="specItem0">
		  <div class="m-b-md"> <h4>销售订单头信息</h4></div>
		<form id="headForm" class="form-horizontal"  data-validate="parsley" method="post" onsubmit="return false">  
		<table style="width: 95%">
			<tbody><tr height="30px">
			    <td style="display:none;" width="12%"><input name="headerId" type="text" class="form-control"></td>
				<td width="8%"><label style="float: right">业务实体:</label></td>
				<td width="12%"><select name="orgName"  class="form-control">
	                    <option value="OU_WG">WG 万斯</option>
	                    <option value="OU_WT">WT 万洋</option>
	                    <option value="OU_T2S">T2S购物时光</option>
	                    <option value="OU_DJ">DJ 帝爵</option>
	                  </select></td>
				<td width="8%"><label style="float: right"> 订单类型:</label></td>
				<td width="12%"><select name="orderType"  class="form-control">
									<option value="WT-国内贸易">WT_国内贸易</option>
									<option value="WG-自营出口">WG_自营出口</option>
									<option value="WG-价格调整">WG_价格调整</option>
									<option value="WT-价格调整">WT_价格调整</option>
									<option value="WG-销售退货（有实物）">WG_销售退货（有实物）</option>
									<option value="WG-销售退货（无实物）">WG_销售退货（无实物）</option>
									<option value="WT-销售退货（有实物）">WT_销售退货（有实物）</option>
									<option value="WT-销售退货（无实物）">WT_销售退货（无实物）</option>
									<option value="T2S-WG_公司间交易">T2S-WG_公司间交易</option>
								</select></td>
				<td width="8%"><label style="float: right">客户:</label></td>
				<td width="12%"><input name="customerNumber" type="text" class="form-control" data-required="true"></td>
				<td width="8%"><label style="float: right">客户地址:</label></td>
				<td width="12%"><input name="customerAddress" type="text" class="form-control" data-required="true"></td>
			</tr>
			<tr>
				<td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td>
			</tr>
			<tr height="30px">
				<td><label style="float: right">订购日期:</label></td>
				<td><input type="text" class="form-control" name="orderDate" value="" class="form-control" data-required="true"></td>
				<td><label style="float: right">销售员员工号:</label></td>
				<td><input name="salePersonNumber" type="text" class="form-control" data-required="true"></td>
				<td><label style="float: right">币种:</label></td>
				<td><select name="currencyCode" id="currencyCode" class="form-control" data-required="true"></select>
				</td>
				<td><label style="float: right">付款条件:</label></td>
				<td><select name="paymentTerm" class="form-control" >
						<option value="D/A 60 DAYS">承兑交单 60天</option>
						<option value="D/A 90 DAYS">承兑交单 60天</option>
						<option value="D/P AT SIGHT">DP at sight</option>
						<option value="L/C 120 DAYS">信用证 120天</option>
						<option value="L/C 60 DAYS">信用证 60天</option>
						<option value="L/C 90 DAYS">信用证 90天</option>
						<option value="L/C AT SIGHT">信用证 立即</option>
						<option value="NET 60 DAYS">净额60天到期</option>
						<option value="O/A 60 DAYS">银行保理 60天</option>
						<option value="O/A 90 DAYS">银行保理 90天</option>
						<option value="T/T 150 DAYS">电汇 150天</option>
						<option value="T/T 30 DAYS">电汇 30天</option>
						<option value="T/T 45 DAYS">电汇 45天</option>
						<option value="T/T 47 DAYS">电汇 47天</option>
						<option value="T/T 60 DAYS">电汇 60天</option>
						<option value="T/T 7 DAYS">电汇 7天</option>
						<option value="T/T 70 DAYS">电汇 70天</option>
						<option value="T/T 90 DAYS">电汇 90天</option>
						<option value="T/T AT SIGHT">电汇 立即</option>
					</select></td>
			</tr>
			<tr>
				<td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td>
			</tr>
			<tr>
			<td><label style="float: right">发运方式:</label></td>
			<td><select name="shipMethod" class="form-control" >
					<option value="JHT-BY SEA">海运</option>
					<option value="JHT-BY AIR">空运</option>
				</select></td>
			<td><label style="float: right">仓库:</label></td>
			<td>
				<select name="shipFrom"  class="form-control">
	                     <option value="WG">WG</option>
	                    <option value="WT">WT</option>
	                  </select></td>
			<td><label style="float: right">项目:</label></td>
			<td><select name="projectNumber" class="form-control" onchange="changeProjectNumber()">
			    <option value="0" selected="true" >等同销售订单号</option>
				<option value="KJDS1700001">跨境电商</option>
				<option value="HWZY1700001">海外直邮</option>
				<option value="P10900001">常规备库物料</option>
				</select>
			</td>
			
			<td><label  style="float: right">部门:</label></td>
			<td><input name="departmentName" type="text" class="form-control" data-required="true"></td>
		   </tr>
		   <tr>
			<td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td>
		   </tr>
		   <tr>
			<td><label style="float: right"> 贸易条款:</label></td>
			<td><select name="tradeTerm"  class="form-control"></select></td>
			<td><label style="float: right">折扣率:</label></td>
			<td><input name="discountRate" type="text" class="form-control" data-required="true"></td>
			<td><label style="float: right">中间商:</label></td>
			<td><input name="middleman" type="text" class="form-control" data-required="true"></td>
			<td><label style="float: right">单据类型:</label></td>
			<td><select name="danjuleixing"  class="form-control">
	                    <option value="HER">HER</option>
	                     <option value="LINE">LINE</option>
	                  </select></td>
		   </tr>
		   <tr>
			<td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td>
		   </tr>
		   <tr>
			<td><label style="float: right"> 佣金类型:</label></td>
			<td><select name="commissionTypeUp" onchange="changeCommissionType()" class="form-control">
	                     <option value="比率">比率</option>
	                    <option value="固定值">固定值</option>
	                  </select></td>
			<td><label style="float: right">第一佣金收取方:</label></td>
			<td><input name="commissionName1" type="text" class="form-control" data-required="true"></td>
			<td><label name="commissionChanged1" style="float: right">第一佣金比率:</label></td>
			<td><input name="commissionRate1" type="text" class="form-control" data-required="true"></td>
			<td><label style="float: right">第二佣金收取方:</label></td>
			<td><input name="commissionName2" type="text" class="form-control"></td>
		   </tr>
		   <tr>
			<td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td>
		   </tr>
		   <tr>
		    <td><label name="commissionChanged2" style="float: right">第二佣金比率:</label></td>
			<td><input name="commissionRate2" type="text" class="form-control"></td>
			<td><label style="float: right">第三佣金收取方:</label></td>
			<td><input name="commissionName3" type="text" class="form-control"></td>
			<td><label name="commissionChanged3" style="float: right">第三佣金比率:</label></td>
			<td><input name="commissionRate3" type="text" class="form-control"></td>
			<td><label style="float: right">第四佣金收取方:</label></td>
			<td><input name="commissionName4" type="text" class="form-control"></td>
		   </tr>
		   <tr>
			<td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td>
		   </tr>
		   <tr>
			<td><label name="commissionChanged4" style="float: right">第四佣金比率:</label></td>
			<td><input name="commissionRate4" type="text" class="form-control"></td>
			<td><label style="float: right">第五佣金收取方:</label></td>
			<td><input name="commissionName5" type="text" class="form-control"></td>
			<td><label name="commissionChanged5" style="float: right">第五佣金比率:</label></td>
			<td><input name="commissionRate5" type="text" class="form-control"></td>
			<td><label  style="float: right">销售订单行号:</label></td>
			<td><label  name ="orderNumber" style="float: left"></label></td>
		   </tr>
		</tbody>
		</table>
	</form>
		<section style="width: 95%;margin-top:10px" class="panel panel-default">
		<header><h4>销售订单行信息</h4></header>
		<div style="" class="panel-body">
			   <table class="table table-striped b-t b-light text-sm">
               <thead>
                 <tr>
                   <th>行号</th>
                   <th>物料编码</th>
                   <th>订单数量</th>
                   <th>请求日期</th>
                   <th>客户PO编码</th>
                   <th>英文品名</th>
                   <th>测算单价</th>
                   <th hidden="hidden">物料单位</th>
                   <th hidden="hidden">品牌终端</th>
                   <th hidden="hidden">客户终端</th>
                   
                   <th hidden="hidden">业务实体</th>
                   <th hidden="hidden">单据类型</th>
                   <th hidden="hidden">佣金类型</th>
                   
                   <th hidden="hidden">佣金比率</th>
                   <th hidden="hidden">佣金单价</th>
                   <th hidden="hidden">佣金收取方</th>
                   
                   <th hidden="hidden">组件名称</th>
                   <th hidden="hidden">组件数量</th>
                   <th hidden="hidden">组件成本比例</th>
                   <th style="width:80px;">操作</th>
                 </tr>
               </thead>
               <tbody name="salesTbody">
                 <tr>
                   <td>1</td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td hidden="hidden"></td>
                   <td><a onClick="addSalesOrder();" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>&nbsp;
             			<a onClick="delRow(this)" href="javaScript:;"><i class="fa fa-minus"></i></a>&nbsp;
             			<a onClick="getSalesOrder(this);" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></td>
                 </tr>
               </tbody>
             </table>
             </div>
             </section>
             
                  <section style="width: 95%;" class="panel panel-default">
           		<header><h4>项目信息</h4></header>
           		<div style="" class="panel-body">
           			   <table class="table table-striped b-t b-light text-sm">
                          <thead>
                            <tr>
                              <th>业务实体</th>
                              <th>项目名称</th>
                              <th>项目类型</th>
                              <th>项目编号</th>
                              <th>WG库存组织标志</th>
                              <th>T2S库存组织标志</th>
                              <th>WT库存组织标志</th>
                              <th>DJ库存组织标志</th>
                              <th>非常规备库客户</th>
                              <th>部门</th>
                              <th style="width:80px;">操作</th>
                            </tr>
                          </thead>
                          <tbody name="projectTbody">
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
                             <td>
                             <div  class="btn-group"> <a href="javascript:void(0)" onclick="getProject(this);"><i class="fa fa-pencil"></i></a></div></td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                        </section>
         
           <div style=" margin-right: 20px; float: right">
           <a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);">预览</a>
           <a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" name="save" onclick="saveOrder(this);">保存</a>
            <a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);"  name="sale" onclick="saveOrder(this);" >生成销售订单</a>
   	       <a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" name="prepare"  onclick="saveOrder(this);">生成备库订单</a>
   	       &nbsp;&nbsp;<a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="uploadOrder();">上传订单</a>
           </div>
         
         </div>
        </div>
      </div>
         
        </section>
      </div>
     </section>
    </div> 
 
 <!--添加修改销售订单行信息  -->
 <div class="modal fade" id="addSalesOrder">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
					<form id="asoForm" class="form-horizontal"  data-validate="parsley" method="post" onsubmit="return false">
						<table style="text-align: right;"
							class="table table-striped b-t b-light text-sm">
							<tbody id="atbody">
								<tr>	
									<td><label>物料编码：</label></td>
									<td><input type="text" id="materielNum" class="form-control" data-required="true"></td>
									<td><label>订单数量：</label></td>
									<td><input type="text" id="orderNum" class="form-control" data-type="number" data-required="true"></td>
									<td><label>物料单位：</label></td>
									<td><input type="text" id="materielUnit"  class="form-control"  data-required="true"></td>
								</tr>
								<tr>
									<td><label>测算单价：</label></td>
									<td><input type="text" id="evalUnitPrice" class="form-control" data-type="number" data-required="true" onblur="calCommission(this)"></td>
								    <td><label>请求日期：</label></td>
									<td><input type="text" class="form-control" id="requestDate" value="2017-10-01 00:00" style="float:left;" class="form-control" data-required="true"></td>
									<td><label>客户PO编码：</label></td>
									<td><input type="text" id="custmerPONum" class="form-control"   data-required="true"></td>
								</tr>
								<tr>
									<td><label>品牌终端：</label></td>
									<td><input type="text" id="brandTerminal"  class="form-control" data-required="true"></td>
									<td><label>客户终端：</label></td>
									<td><input type="text" id="clientTerminal" class="form-control"  data-required="true"></td>
									<td><label> 英文品名：</label></td>
									<td><input type="text" id="englishName" class="form-control" data-required="true"></td>
								</tr>
								<tr>
									<td><label>单据类型：</label></td>
									<td><select id="orderType"  class="form-control" data-required="true">
					                    <option value="HER">HER</option>
					                     <option value="LINE">LINE</option>
					                  </select></td>
									<td><label>佣金类型：</label></td>
									<td><select id="commissionType" class="form-control" data-required="true">
					                     <option value="比率">比率</option>
					                    <option value="固定值">固定值</option>
					                  </select></td>
								</tr>
								<tr>
									<td><label>第一佣金收取方：</label></td>
									<td><input type="text" id="commissionName1" class="form-control" data-required="true"></td>
					                <td><label>第一佣金收取比率：</label></td>
									<td><input type="text" id="commissionRate1" class="form-control"   data-required="true" onblur="calCommissionVal(this)"></td>
									<td><label>第一佣金收取单价：</label></td>
									<td><input type="text" id="commissionValue1" class="form-control"   data-required="true" onblur="calCommissionRate(this)"></td>
								</tr>
								<tr>
									<td><label>第二佣金收取方：</label></td>
									<td><input type="text" id="commissionName2" class="form-control"></td>
					                <td><label>第二佣金收取比率：</label></td>
									<td><input type="text" id="commissionRate2" class="form-control" onblur="calCommissionVal(this)"></td>
									<td><label>第二佣金收取单价：</label></td>
									<td><input type="text" id="commissionValue2" class="form-control" onblur="calCommissionRate(this)"></td>
								</tr>
								<tr>
									<td><label>第三佣金收取方：</label></td>
									<td><input type="text" id="commissionName3" class="form-control"></td>
					                <td><label>第三佣金收取比率：</label></td>
									<td><input type="text" id="commissionRate3" class="form-control" onblur="calCommissionVal(this)"></td>
									<td><label>第三佣金收取单价：</label></td>
									<td><input type="text" id="commissionValue3" class="form-control" onblur="calCommissionRate(this)"></td>
								</tr>
								<tr>
									<td><label>第四佣金收取方：</label></td>
									<td><input type="text" id="commissionName4" class="form-control"></td>
					                <td><label>第四佣金收取比率：</label></td>
									<td><input type="text" id="commissionRate4" class="form-control" onblur="calCommissionVal(this)"></td>
									<td><label>第四佣金收取单价：</label></td>
									<td><input type="text" id="commissionValue4" class="form-control" onblur="calCommissionRate(this)"></td>
								</tr>
								<tr>
									<td><label>第五佣金收取方：</label></td>
									<td><input type="text" id="commissionName5" class="form-control"></td>
					                <td><label>第五佣金收取比率：</label></td>
									<td><input type="text" id="commissionRate5" class="form-control" onblur="calCommissionVal(this)"></td>
									<td><label>第五佣金收取单价：</label></td>
									<td><input type="text" id="commissionValue5" class="form-control" onblur="calCommissionRate(this)"></td>
								</tr>
								<tr>
									<td><label>组件1名称：</label></td>
									<td><input type="text" id="compName1" class="form-control" code=""></td>
					                <td><label>组件1数量：</label></td>
									<td><input type="text" id="compCount1" class="form-control"></td>
									<td><label>组件1成本比例：</label></td>
									<td><input type="text" id="compRatio1" class="form-control"></td>
								</tr>
								<tr>
									<td><label>组件2名称：</label></td>
									<td><input type="text" id="compName2" class="form-control" code=""></td>
					                <td><label>组件2数量：</label></td>
									<td><input type="text" id="compCount2" class="form-control"></td>
									<td><label>组件2成本比例：</label></td>
									<td><input type="text" id="compRatio2" class="form-control"></td>
								</tr>
								<tr>
									<td><label>组件3名称：</label></td>
									<td><input type="text" id="compName3" class="form-control" code=""></td>
					                <td><label>组件3数量：</label></td>
									<td><input type="text" id="compCount3" class="form-control"></td>
									<td><label>组件3成本比例：</label></td>
									<td><input type="text" id="compRatio3" class="form-control"></td>
								</tr>
							</tbody>
						</table>

						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:void(0);" onClick="updateSalesOrder();"  class="btn btn-default btn-sm">确定</a>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	
	<!--添加佣金行信息  -->
 <div class="modal fade" id="addHireCost">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
					<form id="hireCostForm" class="form-horizontal"  data-validate="parsley" method="post" onsubmit="return false">
						<table style="text-align: right;"
							class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
                                        <td><label>业务实体：</label></td>
										<td><select id="orgName" name="orgName"
											class="form-control">
												<option value="OU_WG">WG 万斯</option>
												<option value="OU_WT">WT 万洋</option>
												<option value="OU_T2S">T2S购物时光</option>
												<option value="OU_DJ">DJ 帝爵</option>
										</select></td>
										<td><label>销售订单行号：</label></td>
									<td><input type="text" class="form-control" id="lineNum" name="lineNum" data-required="true"></td>
                                 </tr>
								<tr>
								<td><label>单据类型：</label></td>
									<td><select class="input-sm form-control inline" id="sourceDocType" name="sourceDocType" >
									<option>LINE</option>
									<option>HER</option>
									</select></td>
									<td><label>佣金序号：</label></td>
									<td><input type="text" class="form-control" id="commissionLineNum" name="commissionLineNum" data-type="number" data-required="true"></td>
								</tr>
								<tr>
								<td><label>佣金类型：</label></td>
									<td><input type="text" class="form-control"  id="commissionTypeName"  name="commissionTypeName" data-required="true"></td>
									<td><label>佣金比率：</label></td>
									<td><input type="text" class="form-control" id="commissionRate" name="commissionRate" data-type="number" data-required="true"></td>
									
								</tr>
								<tr>
								<td><label> 佣金单价：</label></td>
									<td><input type="text" class="form-control" id="commissionPrice" name="commissionPrice" data-type="number" data-required="true"></td>
									<td><label >佣金收取方：</label></td>
									<td><input type="text" class="form-control" id="vendorName" name="vendorName" data-required="true"></td>
								</tr>
							</tbody>
						</table>

						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:void(0);"  onclick="updateHireCost();" class="btn btn-default btn-sm">确定</a>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	<!--添加项目信息  -->
 <div class="modal fade" id="addProject">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
					<form id="projectForm" class="form-horizontal"  data-validate="parsley" method="post" onsubmit="return false">
						<table style="text-align: right;"
							class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
									<td><label>业务实体：</label></td>
									<td><select id="projectOrgName" name="projectOrgName"
											class="form-control">
									<option value="OU_WG">WG 万斯</option>
									<option value="OU_WT">WT 万洋</option>
									<option value="OU_T2S">T2S购物时光</option>
									<option value="OU_DJ">DJ 帝爵</option>
							</select></td>
									<td><label>项目名称：</label></td>
									<td><input type="text" class="form-control" id="projectName" name="projectName" data-type="number" data-required="true"></td>
									
								</tr>
								<tr>
								<td><label>项目类型：</label></td>
									<td><select class="input-sm form-control inline" id="projectType" name="projectType" >
									<option>自营出口</option>
									<option>出口</option>
									<option>内销</option>
									</select></td>
									<td><label>项目编号：</label></td>
									<td><input type="text" class="form-control" id="projectNumber" name="projectNumber" data-type="number" data-required="true"></td>
								</tr>
								<tr>
								<td><label>库存组织标志：</label></td>
								<td><select class="input-sm form-control inline" id="wgFlag">
									<option value="invWgFlag">WG库存组织标志</option>
									<option value="invT2sFlag">T2S库存组织标志</option>
									<option value="invWmFlag">WT库存组织标志</option>
									<option value="invDjFlag">DJ库存组织标志</option>
									</select></td>
								<td><label >非常规备库客户：</label></td>
								<td><input type="text" class="form-control" id="backupCustomer" name="backupCustomer" data-required="true"></td>
								</tr>
								<tr>
								<td><label >部门：</label></td>
								<td><input type="text" class="form-control" id="departmentName" name="departmentName" data-required="true"></td>
								</tr>
							</tbody>
						</table>

						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:void(0);"  onclick="updateProject();" class="btn btn-default btn-sm">确定</a>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>