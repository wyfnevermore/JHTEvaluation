<!DOCTYPE html>
<%String path=request.getContextPath(); %>
<html lang="en" class="app">
<head>
<meta charset="utf-8" />
<title>Notebook | Web Application</title>
<link rel="stylesheet" href="css/app.v2.css" type="text/css" />
<script src="Script/app.v2.js"></script>
<script src="Script/charts/easypiechart/jquery.easy-pie-chart.js" cache="false"></script> 
<script src="Script/charts/sparkline/jquery.sparkline.min.js" cache="false"></script> 
<script src="Script/charts/flot/jquery.flot.min.js" cache="false"></script> 
<script src="Script/charts/flot/jquery.flot.tooltip.min.js" cache="false"></script> 
<script src="Script/charts/flot/jquery.flot.resize.js" cache="false"></script> 
<script src="Script/charts/flot/jquery.flot.grow.js" cache="false"></script> 
<script src="Script/charts/flot/demo.js" cache="false"></script> 
<script src="Script/calendar/bootstrap_calendar.js" cache="false"></script> 
<script src="Script/calendar/demo.js" cache="false"></script> 
<script src="Script/sortable/jquery.sortable.js" cache="false"></script>

</head>
<body>
<section class="vbox">
  <section>
    <section class="hbox stretch"> <!-- .aside -->
      <!-- /.aside -->
      <section id="content">
        <section class="vbox">
          <section class="scrollable padder">

 <div class="m-b-md">
            <section style="margin-top:20px;" class="panel panel-default">
              <div class="row m-l-none m-r-none bg-light lter">
                <div class="col-sm-6 col-md-3 padder-v b-r b-light"> 
                 <span class="fa-stack fa-2x pull-left m-r-sm"> 
                  <i class="fa fa-circle fa-stack-2x text-info"></i> 
                  <i class="fa fa-table fa-stack-1x text-white"></i> 
                  </span> 
                 <a class="clear" > <span class="h3 block m-t-xs"><strong>52,000</strong></span> <small class="text-muted text-uc">累计测算/单</small> </a> 
                </div>

                <div class="col-sm-6 col-md-3 padder-v b-r b-light lt"> <span class="fa-stack fa-2x pull-left m-r-sm"> <i class="fa fa-circle fa-stack-2x text-warning"></i> <i class="fa fa-usd fa-stack-1x text-white"></i> <span class="easypiechart pos-abt" data-percent="100" data-line-width="4" data-track-Color="#fff" data-scale-Color="false" data-size="50" data-line-cap='butt' data-animate="2000" data-target="#bugs" data-update="3000"></span> </span> <a class="clear"> <span class="h3 block m-t-xs"><strong id="bugs">468</strong></span> <small class="text-muted text-uc">累计报价</small> </a> </div>

                <div class="col-sm-6 col-md-3 padder-v b-r b-light"> 
                <span class="fa-stack fa-2x pull-left m-r-sm"> 
                <i class="fa fa-circle fa-stack-2x text-danger"></i> 
                <i class="fa fa-files-o fa-stack-1x text-white"></i> 
                <span class="easypiechart pos-abt" data-percent="100" data-line-width="4" data-track-Color="#f5f5f5" data-scale-Color="false" data-size="50" data-line-cap='butt' data-animate="3000" data-target="#firers" data-update="5000"></span> </span> 
                <a class="clear" > <span class="h3 block m-t-xs"><strong id="firers">359</strong></span> <small class="text-muted text-uc">累计销售订单</small> </a> </div>

                <div class="col-sm-6 col-md-3 padder-v b-r b-light lt"> <span class="fa-stack fa-2x pull-left m-r-sm"> <i class="fa fa-circle fa-stack-2x text-success"></i> <i class="fa fa-smile-o fa-stack-1x text-white"></i> </span> <a class="clear"> <span class="h3 block m-t-xs"><strong>98.8%</strong></span> <small class="text-muted text-uc">成功率/%</small> </a> </div>

              </div>
            </section>
            <div class="row">
              <div class="col-md-8">
                <section class="panel panel-default">
                  <header class="panel-heading font-bold">测算数量年度汇总(单)</header>
                  <div class="panel-body">
                    <div id="flot-1ine" style="height:210px"></div>
                  </div>
                  <footer class="panel-footer bg-white no-padder">
                    <div class="row text-center no-gutter">
                      <div class="col-xs-3 b-r b-light"> <span class="h4 font-bold m-t block">5,860</span> <small class="text-muted m-b block">平均值</small> </div>
                      <div class="col-xs-3 b-r b-light"> <span class="h4 font-bold m-t block">10,450</span> <small class="text-muted m-b block">最小值</small> </div>
                      <div class="col-xs-3 b-r b-light"> <span class="h4 font-bold m-t block">21,230</span> <small class="text-muted m-b block">最大值</small> </div>
                      <div class="col-xs-3"> <span class="h4 font-bold m-t block">80%</span> <small class="text-muted m-b block">占比</small> </div>
                    </div>
                  </footer>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel panel-default">
                  <header class="panel-heading font-bold">客户销售排行</header>
                  <div class="bg-light dk wrapper"> <span class="pull-right"></span> 
                  <!--<span class="h4">$540<br>
                    <small class="text-muted">+1.05(2.15%)</small> </span>-->
                    <div class="text-center m-b-n m-t-sm">
                           <div id="flot-mainbar" style="height:135px"></div>
                    </div>
                  </div>
                  <div class="panel-body">
                    <div> <span class="text-muted">客户订单总数量</span> <span class="h3 block">2500</span> </div>
                    <div class="line pull-in"></div>
                    <div class="row m-t-sm">
                      <div class="col-xs-4"> <small class="text-muted block">最大销售量占比客户</small> <span>客户A</span> </div>
                      <div class="col-xs-4"> <small class="text-muted block">最大报价单占比客户</small> <span>客户B</span> </div>
                      <div class="col-xs-4"> <small class="text-muted block">当月销售订单最大占比</small> <span>客户C</span> </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <h4 class="m-t-none">通知</h4>
                <ul class="list-group gutter list-group-lg list-group-sp sortable">
                  <li class="list-group-item box-shadow"> <a href="#" class="pull-right" data-dismiss="alert"> <i class="fa fa-times icon-muted"></i> </a> <span class="pull-left media-xs"> <i class="fa fa-sort icon-muted fa m-r-sm"></i> <a href="#todo-1" data-toggle="class:text-lt text-success" > <i class="fa fa-square-o fa-fw text"></i> <i class="fa fa-check-square-o fa-fw text-active text-success"></i> </a> </span>
                    <div class="clear " id="todo-1"><a href="<%=path%>/jsp/evaluation/calcHistory.jsp" target="main" > <i class="fa fa-angle-right"></i><span> S20170701CC-ST001-V002测算单已提交成功！</span> </a>  </div>
                  </li>
                  <li class="list-group-item box-shadow"> <a href="#" class="pull-right" data-dismiss="alert"> <i class="fa fa-times icon-muted"></i> </a> <span class="pull-left media-xs"> <i class="fa fa-sort icon-muted fa m-r-sm"></i> <a href="#todo-2" data-toggle="class:text-lt text-danger"> <i class="fa fa-square-o fa-fw text"></i>    <i class="fa fa-check-square-o fa-fw text-active text-danger"></i> </a> </span>
                    <div class="clear" id="todo-2"><a href="<%=path%>/jsp/evaluation/calcHistory.jsp" target="main" > <i class="fa fa-angle-right"></i><span> S20170701CC-ST001-V001测算单已提交成功！</span> </a> </div>
                  </li>
                  <li class="list-group-item box-shadow"> <a href="#" class="pull-right" data-dismiss="alert"> <i class="fa fa-times icon-muted"></i> </a> <span class="pull-left media-xs"> <i class="fa fa-sort icon-muted fa m-r-sm"></i> <a href="#todo-3" data-toggle="class:text-lt"> <i class="fa fa-square-o fa-fw text"></i> <i class="fa fa-check-square-o fa-fw text-active text-success"></i> </a> </span>
                    <div class="clear" id="todo-3"> S20170630312未完成的测算单！ </div>
                  </li>

                  <li class="list-group-item box-shadow"> <a href="#" class="pull-right" data-dismiss="alert"> <i class="fa fa-times icon-muted"></i> </a> <span class="pull-left media-xs"> <i class="fa fa-sort icon-muted fa m-r-sm"></i> <a href="#todo-5" data-toggle="class:text-lt"> <i class="fa fa-square-o fa-fw text"></i> <i class="fa fa-check-square-o fa-fw text-active text-success"></i> </a> </span>
                    <div class="clear" id="todo-5"><a href="calcHistory.jsp" target="main" > <i class="fa fa-angle-right"></i><span> S20170630312测算单已通过审核！ </span> </a></div>
                  </li>
                  <li class="list-group-item box-shadow"> <a href="#" class="pull-right" data-dismiss="alert"> <i class="fa fa-times icon-muted"></i> </a> <span class="pull-left media-xs"> <i class="fa fa-sort icon-muted fa m-r-sm"></i> <a href="#todo-6" data-toggle="class:text-lt"> <i class="fa fa-square-o fa-fw text"></i> <i class="fa fa-check-square-o fa-fw text-active text-success"></i> </a> </span>
                    <div class="clear" id="todo-6"> S20170630312测算单未通过审核！ </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <section class="panel panel-default">
                  <header class="panel-heading font-bold">产品销售排行</header>
                  <div class="bg-light dk wrapper"> 
                    <div class="text-center m-b-n m-t-sm">
                      <div id="flot-mainbar2" style="height:135px"></div>
                    </div>
                  </div>
                  <div class="panel-body">
                    <div> <span class="text-muted">产品销售总量</span> <span class="h3 block">3000</span> </div>
                    <div class="line pull-in"></div>
                    <div class="row m-t-sm">
                      <div class="col-xs-4"> <small class="text-muted block">最大销售量占比产品</small> <span>乳胶枕</span> </div>
                      <div class="col-xs-4"> <small class="text-muted block">最大报价占比产品</small> <span>欧式床上五件套</span> </div>
                      <div class="col-xs-4"> <small class="text-muted block">最大当月销量占比</small> <span>乳胶枕</span> </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            
          </section>
        </section>
        <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen" data-target="#nav"></a> </section>
      <aside class="bg-light lter b-l aside-md hide" id="notes">
        <div class="wrapper">通知</div>
      </aside>
    </section>
  </section>
</section>
</body>
</html>