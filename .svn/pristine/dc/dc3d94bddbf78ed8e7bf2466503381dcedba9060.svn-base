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
<script type="text/javascript">
	var tabNo = 1;
	//添加tab
	function addTabs(tabName) {
		if (tabName == "dyeing") {
			$('#addTabs')
					.append(
							'<li class=""><a href="#produce1" data-toggle="tab">加工商'+tabNo+'</a></li>');
		} else if (tabName == "sew") {
			$('#addTabs')
					.append(
							'<li class=""><a href="#produce2" data-toggle="tab">加工商'+tabNo+'</a></li>');
		} else if (tabName == "hotMelt") {
			$('#addTabs')
					.append(
							'<li class=""><a href="#produce3" data-toggle="tab">加工商'+tabNo+'</a></li>');
		} else {
			$('#addTabs')
					.append(
							'<li class=""><a href="#produce4" data-toggle="tab">加工商'+tabNo+'</a></li>');
		}
		tabNo++;
	}

	//佣金测算下添加一行
</script>
</head>
<body>
	<section style="height: 900px; min-height: 800px;"
		class="panel panel-default">
		<div class="panel-body">
			<ul class="nav nav-tabs nav-justified" id="addTabs">
				<li class="dropdown"><a style="width: 100px;" href="#"
					class="dropdown-toggle" data-toggle="dropdown">添加<b
						class="caret"></b></a>
					<ul class="dropdown-menu text-left">
						<li><a href="#" onclick="addTabs('dyeing');return false;"
							data-toggle="tab">漂染</a></li>
						<li><a href="#" onclick="addTabs('sew');return false;"
							data-toggle="tab">缝制</a></li>
						<li><a href="#" onclick="addTabs('hotMelt');return false;"
							data-toggle="tab">填充</a></li>
						<li><a href="#" onclick="addTabs('quilting');return false;"
							data-toggle="tab">绗缝</a></li>
					</ul></li>
			</ul>
			<div class="panel-body">
				<div class="tab-content">

					<!--热熔 -->
					<div class="tab-pane" id="produce3">
						<div>
							<form class="form-horizontal" data-validate="parsley">
								<section class="panel panel-default">
									<div class="panel-body">
										<div style="width: 100%; float: left; min-width: 700px;">
											<div class="form-group">
												<label class="col-key-1-Q control-label">工序:</label>
												<div style="float: left;">
													<select style="width: 150px;"
														class="input-sm form-control input-s-sm inline">
														<option value="1">填充-梳理</option>
													</select>
												</div>
												<label style="margin-left: 20px;"
													class="col-key-1-Q control-label">加工商名称：</label>
												<div style="float: left;">
													<input style="width: 150px;" type="text"
														class="form-control parsley-validated">
												</div>

												<label class="col-key-1-Q control-label">工单类型:</label>
												<div style="float: left;">
													<select style="width: 150px;"
														class="input-sm form-control input-s-sm inline">
														<option value="0">外协</option>
													</select>
												</div>
											</div>
											<div class="line line-dashed line-lg pull-in"></div>
										</div>

										<div>
											<table
												style="width: 500px; text-align: center; border-collapse: collapse; table-layout: fixed;"
												class="table table-striped b-t b-light text-sm">
												<thead>
													<tr>
														<th>加工物料名称</th>
														<th>热熔棉230GSM</th>
														<th>物料描述（GSM）</th>
														<th>0.23</th>
													</tr>
													<tr>
														<th>加工物料规格</th>
														<th>主料单价</th>
														<th>辅料单价</th>
														<th>物料单价</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>SB</td>
														<td>8.58</td>
														<td>0.00</td>
														<td>8.58</td>
													</tr>
													<tr>
														<td>DB</td>
														<td>10.98</td>
														<td>0.00</td>
														<td>10.98</td>
													</tr>
													<tr>
														<td>QB</td>
														<td>12.78</td>
														<td>0.00</td>
														<td>12.78</td>
													</tr>
													<tr>
														<td>KB</td>
														<td>10.98</td>
														<td>0.00</td>
														<td>10.98</td>
													</tr>
												</tbody>
											</table>
										</div>

										<div style="margin-top: 20px;">
											<!--主料测算  -->
											<section class="panel panel-default">
												<header class="panel-heading"> 主料测算 </header>
												<div class="table-responsive">
													<table class="table table-striped b-t b-light text-sm">
														<tr>
															<th>规格</th>
															<th>组件名称/面料用途</th>
															<th>加工物料名称</th>
															<th>原料名称</th>
															<th>原料单价</th>
															<th>加工单耗</th>
															<th>单位加工费</th>
															<th>单位物料成本</th>
															<th width="80px;">操作</th>
														</tr>
														<tr>
															<td></td>
															<td></td>
															<td></td>
															<td>中空三维卷曲 7D*64MM 加硅 中化A+ 国产</td>
															<td>7.45</td>
															<td>0.72</td>
															<td>2.17</td>
															<td>7.57</td>
															<td></td>
														</tr>
														<tr>
															<td></td>
															<td></td>
															<td></td>
															<td>中空三维卷曲 7D*64MM 加硅 中化A+ 国产</td>
															<td>9.50</td>
															<td>0.08</td>
															<td>0.24</td>
															<td>1.01</td>
															<td></td>
														</tr>
														<tr>
															<td>SB</td>
															<td>填充物</td>
															<td>热熔棉230GSM</td>
															<td></td>
															<td>6.16</td>
															<td>0.80</td>
															<td>2.41</td>
															<td>8.58</td>
															<td>
																<div style＝"float:left;" class="btn-group">
																	<a data-toggle="modal"><i class="fa fa-plus"></i> </a>
																</div> <a><i class="fa fa-minus"></i></a>
																<div style＝"float:right;" class="btn-group">
																	<a data-toggle="modal"><i class="fa fa-pencil"></i></a>
																</div>
															</td>
														</tr>
													</table>
												</div>
											</section>


											<!--辅料测算 -->
											<section class="panel panel-default">
												<header class="panel-heading"> 辅料测算 </header>
												<div class="table-responsive">
													<table class="table table-striped b-t b-light text-sm">
														<tr>
															<th>成品规格</th>
															<th>辅料1：</th>
															<th>辅料2:</th>
															<th>辅料3：</th>
															<th>成本合计</th>
															<th>报价成本</th>
															<th width="80px;">操作</th>
														</tr>
														<tr>
															<td>SB</td>
															<td></td>
															<td></td>
															<td></td>
															<td>0.00</td>
															<td>0.00</td>
															<td>
																<div style＝"float:left;" class="btn-group">
																	<a href="#updateAccessories" data-toggle="modal"><i
																		class="fa fa-plus"></i> </a>
																</div> <a><i class="fa fa-minus"></i></a>
																<div style＝"float:right;" class="btn-group">
																	<a href="#updateAccessories" data-toggle="modal"><i
																		class="fa fa-pencil"></i></a>
																</div>
															</td>
														</tr>

													</table>
												</div>
											</section>


										</div>
									</div>
								</section>
							</form>
						</div>



					</div>

					<!--絎缝-->
					<div class="tab-pane" id="produce4">
						<div>
							<form class="form-horizontal" data-validate="parsley">
								<section class="panel panel-default">
									<div class="panel-body">
										<div style="width: 100%; float: left; min-width: 700px;">
											<div class="form-group">
												<label class="col-key-1-Q control-label">工序:</label>
												<div style="float: left;">
													<select style="width: 150px;"
														class="input-sm form-control input-s-sm inline">
														<option value="1">缝制-绗缝</option>
													</select>
												</div>
												<label style="margin-left: 20px;"
													class="col-key-1-Q control-label">加工商名称：</label>
												<div style="float: left;">
													<input style="width: 150px;" type="text"
														class="form-control parsley-validated">
												</div>

												<label class="col-key-1-Q control-label">工单类型:</label>
												<div style="float: left;">
													<select style="width: 150px;"
														class="input-sm form-control input-s-sm inline">
														<option value="0">外协</option>
													</select>
												</div>
											</div>
											<div class="line line-dashed line-lg pull-in"></div>
										</div>

										<div>
											<table
												style="width: 500px; text-align: center; border-collapse: collapse; table-layout: fixed;"
												class="table table-striped b-t b-light text-sm">
												<thead>
													<tr>
														<th style="width: 100px;">加工物料名称</th>
														<th style="width: 200px;">7D多针被230gsm</th>
														<th style="width: 100px;">物料描述()</th>
														<th style="width: 100px;"></th>
													</tr>
													<tr>
														<th>加工物料规格</th>
														<th>主料单价</th>
														<th>辅料单价</th>
														<th>物料单价</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>SB</td>
														<td>8.58</td>
														<td>0.00</td>
														<td>8.58</td>
													</tr>
													<tr>
														<td>DB</td>
														<td>10.98</td>
														<td>0.00</td>
														<td>10.98</td>
													</tr>
													<tr>
														<td>QB</td>
														<td>12.78</td>
														<td>0.00</td>
														<td>12.78</td>
													</tr>
													<tr>
														<td>KB</td>
														<td>10.98</td>
														<td>0.00</td>
														<td>10.98</td>
													</tr>
												</tbody>
											</table>
										</div>

										<div style="margin-top: 20px;">
											<!--主料测算  -->
											<section class="panel panel-default">
												<header class="panel-heading"> 主料测算 </header>
												<div class="table-responsive">
													<table class="table table-striped b-t b-light text-sm">
														<tr>
															<th>规格</th>
															<th>组件名称/面料用途</th>
															<th>加工物料名称</th>
															<th>原料名称</th>
															<th>原料单价</th>
															<th>加工单耗</th>
															<th>单位加工费</th>
															<th>单位物料成本</th>
															<th width="80px;">操作</th>
														</tr>
														<tr>
															<td></td>
															<td>面布</td>
															<td></td>
															<td>100%C/平纹/40*40/110*85/224CM/漂白抗菌</td>
															<td>22.40</td>
															<td>1.53</td>
															<td>2.75</td>
															<td>37.06</td>
															<td></td>
														</tr>
														<tr>
															<td></td>
															<td>底布</td>
															<td></td>
															<td>100%C/平纹/40*40/110*85/224CM/漂白抗菌</td>
															<td>22.40</td>
															<td>1.53</td>
															<td></td>
															<td>34.31</td>
															<td></td>
														</tr>
														<tr>
															<td></td>
															<td>填充半成品</td>
															<td></td>
															<td>热熔棉</td>
															<td>8.58</td>
															<td>1.00</td>
															<td></td>
															<td>8.58</td>
															<td></td>
														</tr>
														<tr>
															<td>SB</td>
															<td></td>
															<td>绗缝面料</td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
															<td>
																<div style＝"float:left;" class="btn-group">
																	<a data-toggle="modal"><i class="fa fa-plus"></i> </a>
																</div> <a><i class="fa fa-minus"></i></a>
																<div style＝"float:right;" class="btn-group">
																	<a data-toggle="modal"><i class="fa fa-pencil"></i></a>
																</div>
															</td>
														</tr>
													</table>
												</div>
											</section>

											<!--辅料测算 -->
											<section class="panel panel-default">
												<header class="panel-heading"> 辅料测算 </header>
												<div class="table-responsive">
													<table class="table table-striped b-t b-light text-sm">
														<tr>
															<th>成品规格</th>
															<th>辅料1：</th>
															<th>辅料2:</th>
															<th>辅料3：</th>
															<th>成本合计</th>
															<th>报价成本</th>
															<th width="80px;">操作</th>
														</tr>
														<tr>
															<td>SB</td>
															<td></td>
															<td></td>
															<td></td>
															<td>0.00</td>
															<td>0.00</td>
															<td>
																<div style＝"float:left;" class="btn-group">
																	<a href="#updateAccessories" data-toggle="modal"><i
																		class="fa fa-plus"></i> </a>
																</div> <a><i class="fa fa-minus"></i></a>
																<div style＝"float:right;" class="btn-group">
																	<a href="#updateAccessories" data-toggle="modal"><i
																		class="fa fa-pencil"></i></a>
																</div>
															</td>
														</tr>
													</table>
												</div>
											</section>

										</div>
									</div>
								</section>
							</form>
						</div>



					</div>

					<!--漂白-->
					<div class="tab-pane" id="produce1">
						<div>
							<form class="form-horizontal" data-validate="parsley">
								<section class="panel panel-default">
									<div class="panel-body">

										<div class="panel-body">
											<div style="width: 100%; float: left; min-width: 700px;">
												<div class="form-group">
													<label class="col-key-1-Q control-label">工序:</label>
													<div style="float: left;">
														<select style="width: 150px;"
															class="input-sm form-control input-s-sm inline">
															<option value="1">漂染-漂白</option>
														</select>
													</div>
													<label style="margin-left: 20px;"
														class="col-key-1-Q control-label">加工商名称：</label>
													<div style="float: left;">
														<input style="width: 150px;" type="text"
															class="form-control parsley-validated">
													</div>

													<label class="col-key-1-Q control-label">工单类型:</label>
													<div style="float: left;">
														<select style="width: 150px;"
															class="input-sm form-control input-s-sm inline">
															<option value="0">外协</option>
														</select>
													</div>
												</div>
												<div class="line line-dashed line-lg pull-in"></div>
											</div>
										</div>

										<div style="margin-top: 20px;">
											<!--主料测算  -->
											<section class="panel panel-default">
												<header class="panel-heading"> 主料测算 </header>
												<div class="table-responsive">
													<table class="table table-striped b-t b-light text-sm">
														<tr>
															<th>漂染面料名称</th>
															<th>坯布价格/M</th>
															<th>漂染色系</th>
															<th>印染费/M</th>
															<th>加工单耗</th>
															<th>成品面料单价</th>
															<th>操作</th>
														</tr>
														<tr>
															<td>100%C/平纹/40*40/110*85/224CM/漂白抗菌
																<div style="width: 30px;"></div>
															</td>
															<td>20.3</td>
															<td>中色</td>
															<td>3.5</td>
															<td>1.07</td>
															<td>23.07</td>
															<td><div style＝"float:left;" class="btn-group">
																	<a href="#inUpdate" data-toggle="modal"><i
																		class="fa fa-plus"></i> </a>
																</div> <a><i class="fa fa-minus"></i></a>
																<div style＝"float:right;" class="btn-group">
																	<a href="#inUpdate" data-toggle="modal"><i
																		class="fa fa-pencil"></i></a>
																</div></td>
														</tr>
													</table>
												</div>
											</section>
											<!--预估坯布需求数量  -->
											<section class="panel panel-default">
												<header class="panel-heading">预估坯布需求数量 </header>
												<div class="table-responsive">
													<table class="table table-striped b-t b-light text-sm">
														<tr>
															<th>面料名称</th>
															<th>版型</th>
															<th>面料幅宽</th>
															<th>制品需求数</th>
															<th>制品加工单耗</th>
															<th>面料需求数(M)</th>
															<th>面料加工单耗</th>
															<th>坯布需求数量(M)</th>
															<th>操作</th>
														</tr>
														<tr>
															<td>100%C/平纹/40*40/110*85/224CM/漂白抗菌</td>
															<td>A</td>
															<td>288</td>
															<td>100</td>
															<td>2</td>
															<td>200.00</td>
															<td>1.07</td>
															<td>186.20</td>
															<td><div style＝"float:left;" class="btn-group">
																	<a href="#yugupibu" data-toggle="modal"><i
																		class="fa fa-plus"></i> </a>
																</div> <a><i class="fa fa-minus"></i></a>
																<div style＝"float:right;" class="btn-group">
																	<a href="#yugupibu" data-toggle="modal"><i
																		class="fa fa-pencil"></i></a>
																</div></td>
														</tr>
													</table>
												</div>
											</section>
										</div>
									</div>
								</section>
							</form>
						</div>
					</div>


					<!--缝制  -->
					<div class="tab-pane " id="produce2">
						<div>
							<form class="form-horizontal" data-validate="parsley">
								<section class="panel panel-default">
									<div class="panel-body">

										<div class="panel-body">
											<div style="width: 100%; float: left; min-width: 700px;">
												<div class="form-group">
													<label class="col-key-1-Q control-label">工序:</label>
													<div style="float: left;">
														<select style="width: 150px;"
															class="input-sm form-control input-s-sm inline">
															<option value="1">缝制-缝制</option>
														</select>
													</div>
													<label style="margin-left: 20px;"
														class="col-key-1-Q control-label">加工商名称：</label>
													<div style="float: left;">
														<input style="width: 150px;" type="text"
															class="form-control parsley-validated">
													</div>

													<label class="col-key-1-Q control-label">工单类型:</label>
													<div style="float: left;">
														<select style="width: 150px;"
															class="input-sm form-control input-s-sm inline">
															<option value="0">外协</option>
														</select>
													</div>
												</div>
												<div class="line line-dashed line-lg pull-in"></div>
											</div>
										</div>

										<div>
											<table
												style="width: 500px; text-align: center; border-collapse: collapse; table-layout: fixed;"
												class="table table-striped b-t b-light text-sm">
												<thead>
													<tr>
														<th>加工物料名称</th>
														<th>7D多针被230gsm</th>
														<th>物料描述（GSM）</th>
														<th></th>
													</tr>
													<tr>
														<th>加工物料规格</th>
														<th>主料单价</th>
														<th>辅料单价</th>
														<th>物料单价</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>SB</td>
														<td>87.60</td>
														<td>1.10</td>
														<td>88.70</td>
													</tr>
													<tr>
														<td>DB</td>
														<td>109.39</td>
														<td>1.20</td>
														<td>110.59</td>
													</tr>
													<tr>
														<td>QB</td>
														<td>129.90</td>
														<td>1.40</td>
														<td>131.30</td>
													</tr>
													<tr>
														<td>KB</td>
														<td>142.08</td>
														<td>1.50</td>
														<td>143.58</td>
													</tr>
												</tbody>
											</table>
										</div>

										<div style="margin-top: 20px;">
											<section class="panel panel-default">
												<header class="panel-heading"> 主料测算 </header>
												<div class="table-responsive">
													<table class="table table-striped b-t b-light text-sm">
														<tr>
															<th>规格</th>
															<th>组件名称/面料用途</th>
															<th>加工物料名称</th>
															<th>原料名称</th>
															<th>原料单价</th>
															<th>加工单耗</th>
															<th>单位加工费</th>
															<th>单位物料成本</th>
															<th width="80px;">操作</th>
														</tr>
														<tr>
															<td></td>
															<td>包边布</td>
															<td>72gsm磨毛布</td>
															<td></td>
															<td>4.00</td>
															<td>0.10</td>
															<td>7.05</td>
															<td>7.47</td>
															<td></td>
														</tr>
														<tr>
															<td></td>
															<td>绗缝半成品</td>
															<td>绗缝面料</td>
															<td></td>
															<td>79.95</td>
															<td>1.00</td>
															<td></td>
															<td>79.95</td>
															<td></td>
														</tr>
														<tr>
															<td></td>
															<td>纽襻</td>
															<td>72gsm磨毛布</td>
															<td></td>
															<td>0.20</td>
															<td>0.92</td>
															<td></td>
															<td>0.18</td>
															<td></td>
														</tr>
														<tr>
															<td>SB</td>
															<td>7D多针被230gsm</td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
															<td>87.60</td>
															<td>
																<div style＝"float:left;" class="btn-group">
																	<a data-toggle="modal"><i class="fa fa-plus"></i> </a>
																</div> <a><i class="fa fa-minus"></i></a>
																<div style＝"float:right;" class="btn-group">
																	<a data-toggle="modal"><i class="fa fa-pencil"></i></a>
																</div>
															</td>
														</tr>
													</table>
												</div>
											</section>


											<section class="panel panel-default">
												<header class="panel-heading"> 辅料测算 </header>
												<div class="table-responsive">
													<table class="table table-striped b-t b-light text-sm">
														<tr>
															<th>成品规格</th>
															<th>辅料1：印花PE袋：</th>
															<th>辅料2:</th>
															<th>辅料3：</th>
															<th>成本合计</th>
															<th>报价成本</th>
															<th width="80px;">操作</th>
														</tr>
														<tr>
															<td>SB</td>
															<td>1.10</td>
															<td></td>
															<td></td>
															<td>1.10</td>
															<td>1.10</td>
															<td>
																<div style＝"float:left;" class="btn-group">
																	<a href="#updateAccessories" data-toggle="modal"><i
																		class="fa fa-plus"></i> </a>
																</div> <a><i class="fa fa-minus"></i></a>
																<div style＝"float:right;" class="btn-group">
																	<a href="#updateAccessories" data-toggle="modal"><i
																		class="fa fa-pencil"></i></a>
																</div>
															</td>
														</tr>

													</table>
												</div>
											</section>
										</div>
									</div>
								</section>
							</form>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>

	<!--主料测算 临时通用  -->
	<div class="modal fade" id="zhuliaoAccessories">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<table style="text-align: right;"
							class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
									<td><label>成品规格：</label></td>
									<td><select class="input-sm form-control inline">
											<option value="0">D/B</option>
											<option value="1">S/B</option>
											<option value="2">Q/B</option>
											<option value="3">K/B</option>
									</select></td>
									<td><label>辅料1：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>辅料2：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>辅料3：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>成本合计：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>报价成本：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>


							</tbody>
						</table>

						<div>
							<a
								style="width: 80px; height: 30px; float: right; margin-right: 35px"
								href="javascript:closeDialog();" class="btn btn-default btn-sm">确定</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--主料测算中的编辑弹窗  -->
	<div class="modal fade" id="inUpdate">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<table style="text-align: right;"
							class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
									<td><label>面料名称：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>版型：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>坯布描述：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>坯布单价/M：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>漂染色系：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>网型：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>花型名称：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>起订量M：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>伸缩率(%)：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>一等品率(%)：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>加工单耗：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>网费/M：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>打样费：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>测试费：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>小单费：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>印染费/M：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>成品面料单价：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
							</tbody>
						</table>

						<div>
							<a
								style="width: 80px; height: 30px; float: right; margin-right: 35px"
								href="javascript:" data-dismiss="modal"
								class="btn btn-default btn-sm">确定</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--预估坯布  -->
	<div class="modal fade" id="yugupibu">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<table style="text-align: right;"
							class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
									<td><label>面料名称：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>版型：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>面料幅宽：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>制品需求数：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>制品加工单耗：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>面料需求数（M）：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>面料加工单耗：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>起订量M：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
								<tr>
									<td><label>坯布需求数量（M）：</label></td>
									<td><input type="text" class="form-control"></td>
									<td><label>一等品率(%)：</label></td>
									<td><input type="text" class="form-control"></td>
								</tr>
							</tbody>
						</table>

						<div>
							<a
								style="width: 80px; height: 30px; float: right; margin-right: 35px"
								href="javascript:" data-dismiss="modal"
								class="btn btn-default btn-sm">确定</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
