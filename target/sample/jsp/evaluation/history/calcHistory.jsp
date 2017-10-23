<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%String path=request.getContextPath(); 
%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Insert title here</title>
<meta charset="utf-8" />
	<title>JHT测算平台 | Web Application</title>
	<link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
	<script src="<%=path%>/Script/jquery.min.js"></script>
	<script src="<%=path%>/Script/jquery-3.2.1.min.js"></script>
	<script src="<%=path%>/Script/app.v2.js"></script>
	<script src="<%=path%>/Script/bootstrap.min.js"></script>
	<script src="<%=path%>/Script/bootstrap-table.js"></script>
	<script src="<%=path%>/js/evaluation/history/calHistory.js"></script>
	<script type="text/javascript">
		var path = "<%=path%>";
	</script>
</head>
<body>
<section class="vbox">
  <section>
    <section class="hbox stretch"> <!-- .aside -->
      <section id="content">
        <section class="vbox">
          <section class="scrollable padder">
            <section class="panel panel-default">
              <header class="panel-heading"> 条件筛选 </header>
              <div class="row text-sm wrapper">
              	<table style="width:100%;">
              		<tr>
	              		<td width="7%"><label>测算单号：</label></td>
	              		<td width="10%"><input type="text" style="" class="form-control " ></td>
	              		<td width="7%"><label>测算人：</label></td>
	              		<td width="10%"><input type="text" style="" class="form-control " ></td>
	              		<td width="7%"><label>客户：</label></td>
	              		<td width="10%"><input type="text" style="" class="form-control " ></td>
	              		<td width="7%"><label>产品类型：</label></td>
	              		<td width="10%"><select style="" class="input-sm form-control input-s-sm inline"><option value="0">化纤制连衣裙</option>
				            <option value="1">全棉漂白布或半漂布</option>
				            <option value="2">全棉斜纹布</option>
				            </select></td>
	              		<td width="7%"><label>产品名称：</label></td>
	              		<td width="10%"><input type="text" style="" class="form-control " ></td>
				        <td width="7%"></td>
				        <td width="5%"><a onClick="initTable()" class="btn btn-primary" >查找</a></td>
              		</tr>
              	</table>
              </div>
              <section class="panel panel-default">
	          <div class="table-responsive">
                <table id="calHistoryTable" style="width: 100%;border-collapse: collapse;table-layout: fixed;" class="table table-striped b-t b-light text-sm">
                </table>
              </div>
              </section>
            </section>
          </section>
        </section>
        <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen" data-target="#nav"></a> </section>
      <aside class="bg-light lter b-l aside-md hide" id="notes">
        <div class="wrapper">Notification</div>
      </aside>
    </section>
  </section>
</section>
</body>
</html>