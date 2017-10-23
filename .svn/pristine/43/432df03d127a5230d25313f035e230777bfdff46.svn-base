<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%String path=request.getContextPath(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title></title>
<link rel="stylesheet" href="<%=path%>/css/app.v2.css" type="text/css" />
<script type="text/javascript" src="<%=path%>/Script/app.v2.js"></script>
<script type="text/javascript" src="<%=path%>/Script/jquery.min.js"></script>
<script type="text/javascript" src="<%=path%>/Script/bootstrap.min.js"></script>

</head>
<body>
	<section class="scrollable padder">
		<div class="m-b-md">
			<h3 class="m-b-none">业务导航</h3>
		</div>
		<div>
			<div id="calForm" class="m-b-sm">
				<div style="margin:auto;margin-top:60px;background-color: #F7F7F7; width: 1030px; height: 410px;" >
					<div style="padding: 5px;" class="modal-body">
						<div style="position:relative;height: 550px; background: url(<%=path%>/images/navigation.png) no-repeat;">
							<a href="#selectType1" data-toggle="modal" style="position:absolute;top: 17px; left: 30px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
							<a href="#selectType2" data-toggle="modal" style="position:absolute;top: 17px; left: 348px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
							<a onclick="enterSwitch('distribution')" style="position:absolute;top: 17px; left: 670px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
							<a onclick="enterSwitch('agent')" style="position:absolute;top: 208px; left: 30px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
							<a onclick="enterSwitch('onlineBusiness')" style="position:absolute;top: 208px; left: 348px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
							<a onclick="enterSwitch('importTrade')" style="position:absolute;top: 208px; left: 670px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<div class="modal fade" id="selectType1">
		<div class="modal-dialog" style="width: 300px">
			<div class="modal-content">
				<div class="modal-body">
					<div style="margin:auto;padding:2px;background-color: #F7F7F7; height: 60px;" >
							<div style="position:relative;height: 60px; background: url(<%=path%>/images/trad.png) no-repeat;">
								<a onclick="enterSwitch('processing')" style="position:absolute;top: 0px; left: 0px; height: 45px; width: 95px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
								<a onclick="enterSwitch('processing')" style="position:absolute;top: 0px; left: 140px; height: 45px; width: 95px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="modal fade" id="selectType2">
		<div class="modal-dialog" style="width: 300px">
			<div class="modal-content">
				<div class="modal-body">
					<div style="margin:auto;padding:2px;background-color: #F7F7F7; height: 80px;" >
							<div style="position:relative;height: 80px; background: url(<%=path%>/images/trad.png) no-repeat;">
								<a onclick="enterSwitch('dealing')" style="position:absolute;top: 0px; left: 0px; height: 45px; width: 95px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
								<a onclick="enterSwitch('dealing')" style="position:absolute;top: 0px; left: 140px; height: 45px; width: 95px; background: none; border: none; text-indent: -999; cursor: pointer;"></a>
								<a style="position:absolute;top: 60px; left: 20px; height: 45px; width: 200px;"><input id="isDesc" type="checkbox" class="parsley-validated"><span style="font-size:15px;">进行组件分析</span></a>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	


</body>
<script>
function enterSwitch(busyType){
	if(busyType=="onlineBusiness"||busyType=="importTrade"){
		return;
	}
	var isDesc = $("#isDesc").is(':checked');
	if(busyType=="dealing" && !isDesc){
		busyType = "dealingSimple"
		location.href = "<%=path%>"+"/jsp/evaluation/calculationSimple.jsp?busyType="+busyType;
	}else if(busyType=="distribution"){
		location.href = "<%=path%>"+"/jsp/evaluation/calculationSimple.jsp?busyType="+busyType;
	}else if(busyType=="agent"){
		location.href = "<%=path%>"+"/jsp/evaluation/calculationSimple.jsp?busyType="+busyType;
	}else{
		location.href = "<%=path%>"+"/jsp/evaluation/calculation.jsp?busyType="+busyType;
	}
}
</script>
</html>
