<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%String path=request.getContextPath(); %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Insert title here</title>
<meta charset="utf-8" />
  <title>JHT测算平台 | Web Application</title>
  <meta name="description" content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
  <link rel='stylesheet' href="<%=path%>/css/bootstrap-datetimepicker.min.css" type='text/css'>
  <link rel="stylesheet" href="<%=path%>/css/font.css" type="text/css" />
  <link rel="stylesheet" href="<%=path%>/Script/datatables/datatables.css" type="text/css" >
  <script src="<%=path%>/Script/app.v2.js"></script>
  <script src="<%=path%>/Script/charts/sparkline/jquery.sparkline.min.js" ></script>
  <script src="<%=path%>/Script/bootstrap-table.js"></script>
  <script src="<%=path%>/js/convention/conventionHistory.js"></script>
  <script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
  <script type="text/javascript" src="<%=path%>/Script/bootstrap.min.js"></script>
  <script type="text/javascript" src="<%=path%>/Script/datepicker/bootstrap-datetimepicker.js" charset="UTF-8">

  </script>

</head>
<body>
<section class="vbox">
  <section>
    <section class="hbox stretch"> 
      <section id="content">
        <section class="vbox">
          <section class="scrollable padder">
            <section class="panel panel-default">
              <header class="panel-heading" style="font-size:20px;">常规物料汇总</header>
              <div class="row text-sm wrapper">
               <table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody id="addma1">
                <tr>
                  <td width="100px;"><label>销售订单号：</label></td>
                  <td width="200px;"><input type="text" class="form-control"></td>
                  <td width="80px;"><label>项目号：</label></td>
                  <td width="200px;"><input type="text" class="form-control"></td>
                  <td width="100px;"><label>物料SKU：</label></td>
                  <td width="200px;"><input type="text" class="form-control"></td>
                  <td width="80px;"><label>创建时间：</label></td>
                  <td width="400px;"><input type="text" class="form-control" id="evalStartTime" value="2017-01-01 00:00" style="float:left;width:47%" class="form-control"><label style="margin-top:6px;margin-right:3px;">－</label> 
                  <input type="text" class="form-control" id="evalEndTime" value="2017-01-01 23:59" style="float:right;width:47%" class="form-control"></td>
                  <td><a href="#" style="width:60px;height:40px;"class="btn btn-s-md btn-default">筛选</a></td>
                </tr> 
              </tbody>
            </table>
              </div>
              <div class="table-responsive">
                <table id="contractHistory" style="width: 100%;border-collapse: collapse;table-layout: fixed;" class="table table-striped b-t b-light text-sm">
                </table>
              </div>
            </section>
          </section>
        </section>
    </section>
  </section>
</section>
</section>

<!--生成合同  -->
	<div class="modal fade" id="createJobOrder">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
					<div style="width:50%;height:400px;float:left">
					<div class="row text-sm wrapper">
               <table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody id="addma1">
                <tr>
                 <td width="80px;"><label>采购单号：</label></td>
                  <td ><input type="text" class="form-control"></td>
                   <td width="80px;"><label>销售订单号：</label></td>
                  <td ><input type="text" class="form-control"></td>
                </tr>
                <tr>
                <td width="80px;"><label>物料SKU：</label></td>
                 <td><input type="text" class="form-control"></td>
                 <td colspan="2"><a href="#" style="width:105px;height:35px;"class="btn btn-default btn-sm"><span style="font-size:20px">筛选</span></a></td>
                </tr>
              </tbody>
            </table>
              </div>
              
					<section class="panel panel-default"  >
					 <table style="text-align: center;" class="table table-striped b-t b-light text-sm">
					 <thead>
	                    <tr>
	                      <th>成品名称</th>
	                      <th>规格</th>
	                      <th>报价</th>
	                      <th>操作</th>
	                    </tr>
					<tbody>
					 <tr>
                     <td>羽绒被</td>
                     <td>S/B</td>
                     <td>$20</td>
                     <td><a title="工单预览" href="" class="active"><i class="fa fa-file-o"></i></a>
                     <a onclick="addProduct();" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>  
                     </td>	
                    </tr>
					</tbody>
				    </table>
				    </section>
					</div>
					
					
					<div style="width:49%;height:400px;float:right">
					<section style="width: 100%;" class="panel panel-default">
					 <header class="panel-heading">工单预览 </header>
					<div class="panel-body">
					<ul class="nav nav-tabs nav-justified" id="addTabs">
				      <li class="active"><a href="javaScript:void(0);" data-toggle="tab">空调被</a></li>
				      <li><a href="javaScript:void(0);" data-toggle="tab">填充棉</a></li>  
					</ul>
					</div>
					
					<div style="height:300px" class="panel-body">
					<div class="tab-content" id="tabDivs" style="margin-bottom:20px">
					<a style="width:100px;height:30px;float:right;margin-right:35px;margin-bottom:20px"  href="javascript:void(0);" class="btn btn-default btn-sm">加入生产合同</a>
			     	</div>
					</div>
					
					</section>
				    </div>
					<div style=" margin-right: 20px; float: right">
   	      			 <a class="btn btn-s-md btn-primary-W" style="width:80px" href="javaScript:void(0);" onclick="updateJobOrder();">确定</a>
         		</div>
					</div>
					</div>
				</div>
			</div>
		</div>
  
      </div>
      </section>
      </div> 
 
</body>
</html>