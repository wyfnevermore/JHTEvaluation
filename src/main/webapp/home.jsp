<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" class="app">
<head>
<meta charset="utf-8" />
<title>JHT测算平台 | Web Application</title>
<meta name="description"
	content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1" />
<link rel="stylesheet" href="css/app.v2.css" type="text/css" />
<link rel="stylesheet" href="Script/calendar/bootstrap_calendar.css"
	type="text/css" cache="false" />
<script src="Script/app.v2.js"></script>
<script src="Script/charts/easypiechart/jquery.easy-pie-chart.js"
	cache="false"></script>
<script src="Script/charts/sparkline/jquery.sparkline.min.js"
	cache="false"></script>
<script src="Script/charts/flot/jquery.flot.min.js" cache="false"></script>
<script src="Script/charts/flot/jquery.flot.tooltip.min.js"
	cache="false"></script>
<script src="Script/charts/flot/jquery.flot.resize.js" cache="false"></script>
<script src="Script/charts/flot/jquery.flot.grow.js" cache="false"></script>
<script src="Script/charts/flot/demo.js" cache="false"></script>
<script src="Script/calendar/bootstrap_calendar.js" cache="false"></script>
<script src="Script/calendar/demo.js" cache="false"></script>
<script src="Script/sortable/jquery.sortable.js" cache="false"></script>
</head>
<body>
	<section class="vbox"> <!-- 头部  --> <header
		class="bg-dark dk header navbar navbar-fixed-top-xs">
	<div align="right" style="width: 120px;" class="navbar-header">
		<a class="navbar-brand"><img
			style="width: 84px; height: 35px; margin-top: 5px;"
			src="images/homelogoh.png" class="m-r-hl"></a>
	</div>
	<ul class="nav navbar-nav hidden-xs">
		<li><a class="navbar-brand">万斯集团业务报价系统</a></li>
	</ul>
	<ul class="nav navbar-nav navbar-right hidden-xs nav-user">
		<li class="hidden-xs"><a href="#" class="dropdown-toggle dk"
			data-toggle="dropdown"> <i class="fa fa-bell"></i> <span
				class="badge badge-sm up bg-danger m-l-n-sm count">2</span>
		</a> <section class="dropdown-menu aside-xl"> <section
				class="panel bg-white"> <header
				class="panel-heading b-light bg-light"> <strong>你有
				<span class="count">2</span> 个通知
			</strong> </header>
			<div class="list-group list-group-alt animated fadeInRight">
				<a href="#" class="media list-group-item"> <span
					class="pull-left thumb-sm text-center"> <i
						class="fa fa-envelope-o fa-2x text-success"></i>
				</span> <span class="media-body block m-b-none">你有一封新邮件<br> <small
						class="text-muted">1 分钟之前</small>
				</span>
				</a> <a href="#" class="media list-group-item"> <span
					class="pull-left thumb-sm"> <img
						src="images/avatar_default.jpg" alt="John said" class="img-circle">
				</span> <span class="media-body block m-b-none">
						S20170629123报价单已生成，请查看<br> <small class="text-muted">10
							分钟之前</small>
				</span>
				</a> <a href="#" class="media list-group-item"> <span
					class="media-body block m-b-none"> 报价单月初汇总已出<br> <small
						class="text-muted">1 小时之前</small>
				</span>
				</a>

			</div>
			<footer class="panel-footer text-sm"> <a href="#notes"
				data-toggle="class:show animated fadeInRight">查看所有通知</a> </footer> </section> </section></li>
		</a>
		<section class="dropdown-menu aside-xl animated fadeInUp"> <section
			class="panel bg-white"> </section> </section>
		</li>
		<li class="dropdown"><a href="#" class="dropdown-toggle"
			data-toggle="dropdown"> <span class="thumb-sm avatar pull-left">
					<img src="images/avatar_default.jpg">
			</span> 黄泽宇 <b class="caret"></b>
		</a>
			<ul class="dropdown-menu animated fadeInRight">
				<span class="arrow top"></span>
				<li><a href="#">设置</a></li>
				<li><a href="#"> <span class="badge bg-danger pull-right">3</span>
						通知
				</a></li>
				<li class="divider"></li>
				<li><a href="modal.lockme.html" data-toggle="ajaxModal">登出</a>
				</li>
			</ul></li>
	</ul>
	</header> <!--导航  --> <section class="hbox stretch"> <!-- .aside --> <aside
		class="bg-dark lter aside-md hidden-print" id="nav"> <section
		class="vbox"> <section class="w-f scrollable">
	<div class="slim-scroll" data-height="auto"
		data-disable-fade-out="true" data-distance="0" data-size="5px"
		data-color="#333333">
		<!-- nav -->
		<header style="height:1px;min-height:1px;"
			class="header bg-primary lter text-center clearfix"></header>
		<nav class="nav-primary hidden-xs">
		<ul id="navId" class="nav">
			<li class="active"><a href="main.jsp" class="active"
				target="main"> <i class="fa fa-dashboard icon"> <b
						class="bg-danger"></b>
				</i> <span>首页</span>
			</a></li>
			<li><a href="#layout"> <i class="fa fa-columns icon">
						<b class="bg-warning"></b>
				</i> <span class="pull-right"> <i class="fa fa-angle-down text"></i>
						<i class="fa fa-angle-up text-active"></i>
				</span> <span>测算</span>
			</a>
				<ul class="nav lt">
					<li id="histest"><a href="jsp/evaluation/navigation.jsp"
						target="main"> <i class="fa fa-angle-right"></i><span>新建测算</span>
					</a></li>
					<li><a href="jsp/evaluation/history/calcHistory.jsp"
						target="main"> <i class="fa fa-angle-right"></i> <span>历史测算</span>
					</a></li>
				</ul></li>
			<li><a href="#layout"> <i class="fa fa-columns icon">
						<b class="bg-warning"></b>
				</i> <span class="pull-right"> <i class="fa fa-angle-down text"></i>
						<i class="fa fa-angle-up text-active"></i>
				</span> <span>报价</span>
			</a>
				<ul class="nav lt">
					<li><a href="jsp/sharePrice/newSharePrice.jsp" target="main">
							<i class="fa fa-angle-right"></i><span>新建报价</span>
					</a></li>
					<li><a href="jsp/sharePrice/priceHistory.jsp" target="main">
							<i class="fa fa-angle-right"></i> <span>历史报价</span>
					</a></li>
					<li><a href="jsp/sharePrice/priceCheckOut.jsp" target="main">
							<i class="fa fa-angle-right"></i> <span>报价单审批</span>
					</a></li>
				</ul></li>

			<li><a href="#layout"> <i class="fa fa-flask icon"> <b
						class="bg-success"></b>
				</i> <span class="pull-right"> <i class="fa fa-angle-down text"></i>
						<i class="fa fa-angle-up text-active"></i>
				</span> <span>销售订单</span>
			</a>
				<ul class="nav lt">
					<li><a href="jsp/salesOrder/importSales.jsp" target="main">
							<i class="fa fa-angle-right"></i><span>创建销售订单</span>
					</a></li>
					<li><a href="jsp/salesOrder/salesHistory.jsp" target="main">
							<i class="fa fa-angle-right"></i><span>历史销售订单</span>
					</a></li>
					<li><a href="jsp/salesOrder/salesDetail.jsp" target="main">
							<i class="fa fa-angle-right"></i><span>明细汇总</span>
					</a></li>
					<li><a target="main">
							<i class="fa fa-angle-right"></i><span>订单审批</span>
					</a></li>
				</ul></li>
 <li > <a href="#" >  <i class="fa fa-envelope-o icon"> <b class="bg-primary dker"></b> </i><span class="pull-right"> <i class="fa fa-angle-down text"></i> <i class="fa fa-angle-up text-active"></i> </span><span>工单管理</span> </a>
                  <ul class="nav lt">
                   <li > <a href="jsp/jobOrder/businessDepartmentHisotry.jsp" target="main" > <i class="fa fa-angle-right"></i><span>工单汇总</span> </a> 
                  </li>
                </ul>
                 </li>
<!-- 2017.10.07 By lee  start -->


      <li><a href="#layout"> <i class="fa fa-flask icon"> <b
            class="bg-success"></b>
        </i> <span class="pull-right"> <i class="fa fa-angle-down text"></i>
            <i class="fa fa-angle-up text-active"></i>
        </span> <span>常规物料</span>
      </a>
        <ul class="nav lt">
          
          <li><a href="jsp/conventionalMaterail/conventionalHisotry.jsp" target="main">
              <i class="fa fa-angle-right"></i><span>常规物料汇总</span>
          </a></li>
        </ul></li>

<!-- 2017.10.07 By lee  end -->

			<li><a href="#pages"> <i class="fa fa-file-text icon">
						<b class="bg-primary"></b>
				</i> <span class="pull-right"> <i class="fa fa-angle-down text"></i>
						<i class="fa fa-angle-up text-active"></i>

				</span> <span>采购订单</span>
			</a>
				<ul class="nav lt">
					<li><a href="jsp/purchaseOrder/importPurchase.jsp"
						target="main"> <i class="fa fa-angle-down"></i><span>创建采购订单</span>
					</a>
						</li>
					<li><a href="jsp/purchaseOrder/purchaseHistory.jsp"
						target="main"> <i class="fa fa-angle-down"></i><span>历史采购订单</span>
					</a></li>
				</ul></li>
			<li><a href="#"> <i class="fa fa-envelope-o icon"> <b
						class="bg-primary dker"></b>
				</i><span class="pull-right"> <i class="fa fa-angle-down text"></i>
						<i class="fa fa-angle-up text-active"></i>
				</span><span>加工合同</span>
			</a>
				<ul class="nav lt">
					<li><a href="jsp/productContract/createContract.jsp"
						target="main"> <i class="fa fa-angle-right"></i><span>创建生产加工合同</span>
					</a></li>
					<li><a href="jsp/productContract/contractHistory.jsp"
						target="main"> <i class="fa fa-angle-right"></i><span>历史生产加工合同</span>
					</a></li>
					<li><a href="jsp/productContract/contractDetail.jsp"
						target="main"> <i class="fa fa-angle-right"></i><span>明细汇总</span>
					</a></li>
					<li><a href="jsp/productContract/contractHistory.jsp"
						target="main"> <i class="fa fa-angle-right"></i><span>审批</span>
					</a></li>
				</ul></li>
			<li><a href="#"> <i class="fa fa-pencil icon"> <b
						class="bg-info"></b>
				</i> <span>系统管理</span>
			</a>
<ul class="nav lt">
          <li><a href="jsp/productContract/createContract.jsp"
            target="main"> <i class="fa fa-angle-right"></i><span>角色管理</span>
          </a></li>
          <li><a href="jsp/productContract/contractHistory.jsp"
            target="main"> <i class="fa fa-angle-right"></i><span>部门管理</span>
          </a></li>
          <li><a href="jsp/productContract/contractDetail.jsp"
            target="main"> <i class="fa fa-angle-right"></i><span>用户管理</span>
          </a></li>
        </ul>
    </li>
		</ul>
		</nav>
	</div>
	</section> </section> </aside> <!--数据显示区内容  -->
	<div style="width: 100%; height: 100%;">
		<iframe frameborder="0" style="width: 100%; height: 100%;"
			src="main.jsp" name="main"></iframe>
	</div>

	</section> </section>
</body>
</html>
