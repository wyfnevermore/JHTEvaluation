<%@page language="java" contentType="text/html; charset=UTF-8" import="net.sf.json.JSONObject" pageEncoding="UTF-8"%>
<%String path=request.getContextPath();
String multiComp = (String)request.getParameter("multiComp"); 
String evalDetailID = (String)request.getParameter("evalDetailID");
String customerID =(String)request.getParameter("customerID");
String opraType =(String)request.getParameter("opraType");
String evalHeadData = (String) request.getParameter("evalHeadData");
if(evalHeadData!=null){
	evalHeadData = new String(evalHeadData.getBytes("ISO-8859-1"),"UTF-8");
}
%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title></title>
<link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
<script src="<%=path%>/Script/app.v2.js"></script>
<script src="<%=path%>/Script/charts/easypiechart/jquery.easy-pie-chart.js"></script>
<script type="text/javascript" src="<%=path%>/Script/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=path%>/Script/jquery.min.js"></script>
<script type="text/javascript" src="<%=path%>/js/tupianqiehuan.js"></script>
<script type="text/javascript" src="<%=path%>/js/evaluation/dealing/maching.js"></script>
<script type="text/javascript" src="<%=path%>/js/echarts.common.min.js"></script>


<link rel="stylesheet" type="text/css" href="<%=path%>/css/tupianqiehuan.css">
<script type="text/javascript">
//*********************每个jsp成本计算结果的全局变量*********************
//报价成品描述的结果
var evalDetailID = "<%=evalDetailID%>";
var evalHeadData = "<%=evalHeadData%>";
if(evalHeadData=="null"){
	evalHeadData = {};
}else{
	evalHeadData = eval('('+evalHeadData+')');
}
var opraType = "<%=opraType%>";
//材料成本测算的结果
var $material_result;
//纸箱成本测算的结果
var $carton_result;
//运杂费测段的结果
var $transport_result;
//其他费用测算的结果
var $otherCost_result;
//佣金测算的结果
var $hireCost_result;


//**********************************************************


var unitVolume;//纸箱成本测算中de－单位体积（立方）
var specSel;//成品规格长宽高  {"S/B":{"Length":"1","Width":"2","Height":"3"},"D/B":{"Length":"4","Width":"5","Height":"6"}};//
var dyeCost;//染色费用，加权平均后的值
var colorOtherCheckChecked;//



var echart_option = {
    title : {
        text: '组件成本比例',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['床单','床笠','帎壳']
    },
    series : [
        {
            name: '成本金额',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:38.19, name:'床单'},
                {value:25.83, name:'床笠'},
                {value:10.5, name:'帎壳'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

$(document).ready(function(){

	var myChart = echarts.init(document.getElementById('ePieChart'));
	myChart.setOption(echart_option);
});


</script>


</head>
<body>
	<section class="vbox">
		<!--home下面所有内容  -->
		<section class="scrollable padder">
			<ul class="breadcrumb no-border no-radius b-b b-light pull-in">
				<li><i class="fa fa-home"></i> Home</li>
				<li>测算 - 经销</li>
			</ul>
			<a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen" data-target="#nav"></a>
			<!--加工测算单  -->
			<div class="m-b-sm">
				<section style="width: 100%;" class="panel panel-default">
					<header class="panel-heading">
						<div class="panel-body">
							<ul class="nav nav-tabs nav-justified" id="tabUl">
								<li id="#productDes1" class="active"><a href="#productDesc" data-toggle="tab">报价成品描述</a></li>
								 <!-- <li><a href="#converter" data-toggle="tab">加工商</a></li>-->
								<li id="materialCost1"><a href="#materialCost" data-toggle="tab">材料成本测算 </a></li> 
								<li id="carton1"><a href="#carton" data-toggle="tab">纸箱成本测算</a></li>  
								<li id="expenses1"><a href="#expenses" data-toggle="tab">运杂费测算</a></li>
								<li id="otherCost1"><a href="#otherCost" data-toggle="tab">其他费用测算</a></li>
								<li id="commission1"><a href="#commission" data-toggle="tab">佣金测算</a></li>
								<li id="grossProfit1"><a href="#grossProfit" data-toggle="tab">毛利测算</a></li>
								<li id="quotation1"><a href="#quotation" data-toggle="tab">测算单预览</a></li>
							</ul>
						</div>
					</header>

					<div style="min-height: 1000px;" class="panel-body">
						<div class="tab-content" id="iframes">
							<!--报价成品描述  -->
							<div style="width: 100%; height: 1000px; min-height: 800px;" class="tab-pane active" id="productDesc">
								<iframe id="productDescFrame" frameborder="0" style="width: 100%; height: 100%;"></iframe>
							</div>
							<!--加工商  -->
						<%-- 	<div style="width: 100%; height: 1000px; min-height: 800px;" class="tab-pane active" id="converter">
								<iframe frameborder="0" style="width: 100%; height: 100%;" src="<%=path%>/jsp/evaluation/converter.jsp"></iframe>
							</div>  --%>
							<!--物料成本  -->
							<div style="width: 100%; height: 1000px; min-height: 800px;" class="tab-pane" id="materialCost">
								<iframe id="materialCostFrame" frameborder="0" style="width: 100%; height: 100%;" src="<%=path%>/jsp/evaluation/dealing/materialCost.jsp"></iframe>
							</div>
							<!--纸箱成本 -->
							<div style="width: 100%; height: 1000px; min-height: 800px;" class="tab-pane" id="carton">
								<iframe id="cartonCostFrame" frameborder="0" style="width: 100%; height: 100%;" src="<%=path%>/jsp/evaluation/dealing/cartonCost.jsp"></iframe>
							</div>
							<!--运杂费  -->
							<div style="width: 100%; height: 1000px; min-height: 800px;" class="tab-pane" id="expenses">
								<iframe frameborder="0" style="width: 100%; height: 100%;" src="<%=path%>/jsp/evaluation/dealing/transportCost.jsp"></iframe>
							</div>
							<!--佣金  -->
							<div style="width: 100%; height: 1000px; min-height: 800px;" class="tab-pane" id="commission">
								<iframe frameborder="0" style="width: 100%; height: 100%;" src="<%=path%>/jsp/evaluation/dealing/hireCost.jsp"></iframe>
							</div>
							<!--毛利测算 -->
							<div style="width: 100%; height: 1000px; min-height: 800px;" class="tab-pane" id="grossProfit">
								<iframe id="grossProfitFrame" frameborder="0" style="width: 100%; height: 100%;" src="<%=path%>/jsp/evaluation/dealing/grossProfit.jsp"></iframe>
							</div>
							<!--其他费用-->
							<div style="width: 100%; height: 1000px; min-height: 800px;" class="tab-pane" id="otherCost">
								<iframe frameborder="0" style="width: 100%; height: 100%;" src="<%=path%>/jsp/evaluation/dealing/otherCost.jsp"></iframe>
							</div>
							<!--测算单预览 -->
							<div class="tab-pane" id="quotation">
								<!--测算单预览中的测算导航信息 -->
								<div class="row">
									<div style="width: 100%; float: left;">
										<table style="width: 100%">
											<tr height="30px">
												<td width="8%"><label style="float: right">客户：</label></td>
												<td width="22%"><label id="customerWholeName" style="float: left"></label></td>
												<td width="8%"><label style="float: right">贸易形式：</label></td>
												<td width="16%"><label id="tradeForm" style="float: left"></label></td>
												<td width="8%"><label  style="float: right">报价汇率：</label></td>
												<td width="10%"><label id="quotationRate" style="float: left"></label></td>
												<td width="8%"><label style="float: right">报价货币：</label></td>
												<td width="8%"><label id="quoteCurrency" style="float: left"></label></td>
											</tr>
											<tr>
												<td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td>
											</tr>
											<tr height="30px">
												<td><label style="float: right">产品名称：</label></td>
												<td><label id="productName" style="float: left"></label></td>
												<td><label  style="float: right">产品类型：</label></td>
												<td><label  id="productType" style="float: left"></label></td>
												<td><label  style="float: right">HS索引：</label></td>
												<td><label id="hSNumber" style="float: left"></label></td>
												<td><label style="float: right">退税税率(%)：</label></td>
												<td><label id="drawBackRate" style="float: left"></label></td>
											</tr>
											<tr>
												<td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td>
											</tr>
											<tr height="30px">
												<td><label style="float: right">目的地：</label></td>
												<td><label id="country" style="float: left"></label></td>
												<td><label style="float: right"></label></td>
												<td><label style="float: left"></label></td>
												<td><label style="float: right"></label></td>
												<td><label style="float: left"></label></td>
												<td><label style="float: right"></label></td>
												<td><label style="float: left"></label></td>
											</tr>
											<tr>
												<td colspan="8"><div class="line line-dashed line-lg pull-in"></div></td>
											</tr>
										</table>
									</div>

								</div>
								<section style="height: 600px;" class="panel panel-default">
									<header class="panel-heading">
										<strong>测算单预览</strong>
									</header>
									<div style="float: left; width: 65%;">

										<!--excel中的两张表合成到页面  -->
										<div style="margin:10px 10px 0 10px;float: left; width: 100%;">
											<table id="machingTable" class="table table-striped b-t b-light text-sm" style="width: 100%; height: 100%">
												<thead>
													<tr>
														<th>规格</th>
														<th>测算报价(RMB)</th>
														<th>客户预算毛利率(%)</th>
														<th>执行金额(RMB)</th>
														<th>执行毛利率(%)</th>
														<th>执行价格降幅(%)</th>
													</tr>
												</thead>
												<tbody id="evalResultBody">
												</tbody>
											</table>
										</div>
									</div>

									<!-- 右边的那个图 -->
									<div style="float: right; width: 34%; height: 400px;">
										<section class="panel panel-default" style="margin-top: 10px;">
											<header class="panel-heading"> 成本比例 </header>
											<div class="panel-body text-center">
												<div id="ePieChart" style="width:420px; height:300px;"></div>
												<!--
												<small class="text-muted block">成本：--</small> <small class="text-muted block">毛利：--</small>
												<div class="inline">
													<div class="easypiechart easyPieChart" data-percent="60" data-line-width="30" data-track-color="#eee" data-bar-color="#afcf6f" data-scale-color="#fff"
														data-size="188" data-line-cap="butt" style="width: 188px; height: 188px; line-height: 188px;">
														<span class="h2 step">60</span>%
														<div class="easypie-text">利润率(%)</div>
														<canvas width="188" height="188"></canvas>
													</div>
												</div>
												-->
											</div>
										</section>
										<div class="line line-dashed line-lg pull-in"></div>
										<div style="float: right;">
											<a id="download" href="javascript:void(0);" class="btn btn-s-md btn-primary" plain="true">测算单预览</a>
											<a href="javaScript:saveEvalList();" class="btn btn-s-md btn-primary" >保存测算</a>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	</section>
</body>
<script type="text/javascript">
	var multiComp = <%=multiComp%>;
	if(multiComp){
		$("#productDescFrame").attr("src","<%=path%>/jsp/evaluation/dealing/productDescription.jsp");
	}else{
		$("#productDescFrame").attr("src","<%=path%>/jsp/evaluation/dealing/productDesNoComp.jsp");
	}
</script>
</html>
