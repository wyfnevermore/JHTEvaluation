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
  <link rel="stylesheet" href="<%=path%>/Script/datatables/datatables.css" type="text/css" >
<script src="<%=path%>/Script/jquery.min.js"></script>
<script src="<%=path%>/Script/app.v2.js"></script>
  <script src="<%=path%>/Script/bootstrap-table.js"></script>
<script src="<%=path%>/js/productContract/createContract.js"></script>
<script type="text/javascript">
	function jump2temp(){
		location.href = "/JHTEvaluation/jsp/productContract/contractOrder.jsp";
	}
</script>
</head>
<body>
  <div>
    <section class="scrollable padder">
    <div class="m-b-md">
      <h3 class="m-b-none">导入工单</h3>
    </div>
    <div id="calForm" class="m-b-sm">
    <section style="width: 100%;" class="panel panel-default">
	<header class="panel-heading">
	
	</header>
			
	<div style="" class="panel-body">
		<section style="width: 60%;" class="panel panel-default">
		<header>工单信息</header>
		<div style="" class="panel-body">
		<div class="tab-content" id="tabDivs">
			<div class="tab-pane active" style="" id="specItem0">
			   <table class="table table-striped b-t b-light text-sm">
               <thead>
                 <tr>
                   <th style="width:100px">成品名称</th>
                   <th style="width:100px">规格</th>
                   <th style="width:100px">报价</th>
                   <th style="width:80px;">操作</th>
                 </tr>
               </thead>
               <tbody id="sptbody">
                 <tr>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td><a onClick="addJobOrder();" href="javaScript:void(0);"><i class="fa fa-plus"></i></a>&nbsp;
             			<a onClick="delRow(this)" href="javaScript:;"><i class="fa fa-minus"></i></a>
             			&nbsp;<a onClick="editJobOrder()" href="javaScript:;"><i class="fa fa-pencil"></i></a>
             			</td>
                 </tr>
               </tbody>
             </table>
             </div>
             </div>
             </div>
             </section>
          
           <div style=" margin-right: 20px; float: right">
           <a class="btn btn-s-md btn-primary" style="width:180px" href="javaScript:void(0);" onclick="jump2temp();">手动生成加工合同</a>
   	       <a class="btn btn-s-md btn-primary" style="width:180px" href="javaScript:void(0);" onclick="createContract();">生成加工合同</a>
         </div>
         </div>
           </section>
         
 <!--<div class="modal fade" id="addWorkOrder">
    <div class="modal-dialog" style="width:850px; height: 650px;">
      <div style="background-color: #ffffff; width: 100%; height: 640px;overflow:auto;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
        	<table style="text-align: right;" class="table b-t b-light text-sm">
              <tbody id="addma1">
                <tr>
                  <td width="80px;"><label>成品：</label></td>
                  <td><input type="text" class="form-control"></td>
                  <td width="80px;"><label>报价：</label></td>
                  <td><input type="text" class="form-control"></td>
                  <td width="80px;"><label>规格：</label></td>
                  <td><select style="width:160px;" class="form-control">
	                    <option value="0">S/B</option>
	                    <option value="1">D/B</option>
	                    <option value="2">Q/B</option>
	                  </select></td>
	                <td><a href="#" style="width:60px;height:40px;"class="btn btn-s-md btn-default">筛选</a></td> 
                </tr> 
              </tbody>
            </table>
			<section class="panel panel-default">
	          <div class="table-responsive">
                <table id="contractTable" style="width: 100%;border-collapse: collapse;table-layout: fixed;" class="table table-striped b-t b-light text-sm">
                
                </table>
              </div>
           
              </section>	
              <div style=" margin-right: 20px; float: right">
            	<a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="updateSales();">确认添加</a>
               </div> 
        </div>
      
      </div>
    </div>
  </div> -->
  
  <div class="modal fade" id="editWorkOrder">
    <div class="modal-dialog" style="width:850px; height: 650px;">
      <div style="background-color: #ffffff; width: 100%; height: 640px;overflow:auto;" class="modal-content" >
        <div style="padding: 5px;" class="modal-body">
        	<table style="text-align: right; margin-top:5px;margin-bottom:5px" class="table b-t b-light text-sm">
              <tbody id="editHead">
                <tr>
                  <td width="90px;"><label>成品名称：</label></td>
                  <td><input name="materialName" type="text" class="form-control"></td>
                  <td width="90px;"><label>成品SKU：</label></td>
                  <td><input name="materialSku" type="text" class="form-control"></td>
                  <td width="90px;"><label>序号：</label></td>
                  <td><input name="seq" type="text" class="form-control"></td>
                </tr> 
                <tr>
                  <td width="90px;"><label>部门：</label></td>
                  <td><input name="department" type="text" class="form-control"></td>
                  <td width="90px;"><label>生成时间：</label></td>
                  <td><input id="createTime" name="createTime" type="text" class="form-control"></td>
                  <td hidden="hidden"><input name="status" type="text" class="form-control"></td>
                </tr> 
              </tbody>
            </table>
			<section class="panel panel-default">
	          <div class="table-responsive">
                <table id="editLine" style="width: 100%;border-collapse: collapse;table-layout: fixed;" class="table table-striped b-t b-light text-sm">
                
                </table>
              </div>
           
              </section>	
              <div style="position:fixed; right:20px; bottom:0px; z-index:9999; float: right">
                <a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="updateJob();">保存</a>
                <a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="updateJob();">发送</a>
            	<a class="btn btn-s-md btn-primary-W" style="width:60px" href="javaScript:void(0);" onclick="updateJob();">确认添加</a>
               </div> 
        </div>
      
      </div>
    </div>
  </div> 
  
  <div class="modal fade" id="addJoLine">
    <div class="modal-dialog" style="width: 700px">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
          <form class="form-horizontal" data-validate="parsley" method="post" onsubmit="return false">
            <table style="text-align: right;"
              class="table table-striped b-t b-light text-sm">
              <tbody id="editLineDetail">
                <tr>
                  <td width="100px;"><label>物料名称：</label></td>
                  <td><input name="materialName" type="text" class="form-control"></td>
                  <td width="100px;"><label>物料SKU：</label></td>
                  <td><input name="materialSku" type="text" class="form-control"></td>
                </tr> 
                <tr>
                  <td width="100px;"><label>数量：</label></td>
                  <td><input name="quantity" type="text" class="form-control"></td>
                  <td width="100px;"><label>产出率：</label></td>
                  <td><input name="productivity" type="text" class="form-control"></td>
                </tr> 
              </tbody>
            </table>
            <div>
              <a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:updateJobLineDetail();"class="btn btn-default btn-sm">确定</a>
            </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!--生成工单  -->
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
					 <table id="jobOrderTable" style="text-align: center;" class="table table-striped b-t b-light text-sm">
					
				    </table>
				    </section>
					</div>
					
					<div style="width:49%;height:400px;float:right">
					<section style="width: 100%;" class="panel panel-default" id= "sections">
					 <header class="panel-heading">工单预览 </header>
					 
					<div class="panel-body">
					<ul class="nav nav-tabs nav-justified" id="addTabs">
				      <!-- <li class="active"><a href="#jobOrder1" data-toggle="tab">空调被</a></li> -->
					</ul>
					</div>
					
					<div style="height:300px" class="tab-content" id="tabContent">
					
					<!-- <div class="tab-pane"  style="margin-bottom:20px" id="jobOrder1">
					<label style="height: 40px;width:150px;float:right;" class="btn btn-sm btn-default">
                      <input type="checkbox" name="options">  加入生产加工合同 </label>
			     	</div> -->
			     	
					</div>
					
					</section>
				    </div>
				    
					<div style=" margin-right: 20px; float: right">
					 <a class="btn btn-s-md btn-primary-W" style="width:80px" href="javaScript:void(0);" onclick="updateJobOrder();">保存工单</a>
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