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
<script type="text/javascript" src="<%=path%>/Script/bootstrap.min.js"></script>
<script src="<%=path%>/js/likeSearchInput.js"></script>
<script type="text/javascript" src="<%=path%>/js/evaluation/processing/materialCost.js"></script>
<script type="text/javascript" src="<%=path%>/Script/parsley/parsley.min.js"></script>
<script type="text/javascript">
	var path = "<%=path%>";
	var evalDetailID = window.parent.evalDetailID;
	var opraType = window.parent.opraType;
</script>
</head>
<body>
<section style="height:auto;min-height:500px;" class="panel panel-default">
<div class="tab-pane" style="">
	   <table id="materialTable" class="table table-striped b-t b-light text-sm">
          <thead>
            <tr>
              <th width=70>物料序号</th>
              <th>物料描述</th>
              <th>物料名称</th>
              <th width=100>类型</th>
              <th width=90>物料价格(￥)</th>
              <th>备注</th>
              <th hidden="hidden">是否手动</th>
              <th hidden="hidden">计算表达式</th>
              <th hidden="hidden">计算公式值</th>
              <th hidden="hidden">原材料JSON</th>
              <th hidden="hidden">加工JSON</th>
              <th hidden="hidden">其他JSON</th>
              <th hidden="hidden">SKU</th>
              <th width=80>操作</th>
            </tr>
          </thead>
          <tbody id="materialHead">
            <tr>
              <td>物料1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td hidden="hidden"></td>
              <td hidden="hidden"><input type="hidden" name="计算表达式"></td>
              <td hidden="hidden"><input type="hidden" name="计算公式值"></td>
              <td hidden="hidden"><input type="hidden" name="原材料JSON"></td>
              <td hidden="hidden"><input type="hidden" name="加工JSON"></td>
              <td hidden="hidden"><input type="hidden" name="其他JSON"></td>
              <td hidden="hidden"></td>
              <td><div style＝"float:left;" class="btn-group"><a onClick="addMaterial()" href="javascript:void(0);"><i class="fa fa-plus"></i> </a></div>
              <a><i class="fa fa-minus"></i></a>
              <div style＝"float:right;" class="btn-group"><a onClick="updateMaterialWindow(this,true)" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-pencil"></i></a></div></td>
            </tr>
          </tbody>
        </table>

	</div>
	
	<section style="width: 100%;" class="panel panel-default">
	<header class="panel-heading">
	<div class="panel-body">
	<ul class="nav nav-tabs nav-justified" id="addTabs">
      <li class="dropdown">  
	       <select name="dropdown" id="dropdown" style="width: 80px;height:40px" onchange="addTabs()" 
									class="input-sm form-control input-s-sm inline">
									<option value="4" selected="true" >复制</option>
									<option value="0">S/B</option>
									<option value="1">D/B</option>
									<option value="2">Q/B</option>
									<option value="3">K/B</option>
								</select>
      </li>
      <li class="active"><a onclick="getTbodyId('specItem0')" href="#specItem0" data-toggle="tab">D/B</a></li>  
	</ul>
	</div>
	</header>
	
	<div style="" class="panel-body">
		<div class="tab-content" id="tabDivs">
			<div class="tab-pane active" style="" id="specItem0">
			   <table class="table table-striped b-t b-light text-sm">
			         <thead>
			           <tr>
			             <th width=100>成品规格</th>
			             <th>组件名称</th>
			             <th>物料描述</th>
			             <th width=75>裁片长(M)</th>
			             <th width=75>裁片宽(M)</th>
			             <th width=75>裁片高(M)</th>
			             <th width=125>裁片其他尺寸(M)</th>
			             <th width=70>裁耗</th>
			             <th width=70>绗缩</th>
			             <th width=70>梳理损耗</th>
			             <th width=100>原材料单耗</th>
			             <th width=70>成本(￥)</th>
			             <th>备注</th>
			             <th width=70>操作</th>
			           </tr>
			         </thead>
			         <tbody>
			           <tr>
			             <td>D/B</td>
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
			             <td></td>
			             <td></td>
			             <td hidden="hidden"><input type="hidden" name="参考工厂" value=""></td>
						 <td hidden="hidden"><input type="hidden" name="规格其他" value=""></td>
						 <td hidden="hidden"><input type="hidden" name="裁片其他" value=""></td>
						 <td hidden="hidden"><input type="hidden" name="选择物料json" value="{}"></td>
						 <td hidden="hidden"><input type="hidden" name="计算表达式" value=""></td>
						 <td hidden="hidden"><input type="hidden" name="计算公式值" value=""></td>
			             <td><div style＝"float:left;" class="btn-group"><a onClick="addHalfProduct()"><i class="fa fa-plus"></i> </a></div>
			             <a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>
			             <div style＝"float:right;" class="btn-group"> <a onClick="updateHalfProductdWin(this)" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-pencil"></i></a></div></td>
			             <td hidden="hidden"><input type="hidden" name="类型" value="主料耗料"></td>
			           </tr>
			         </tbody>
			         <tbody id="hpCostToalBody">
			          	<tr>
			             <td>材料成本合计</td>
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
			             <td>0.00</td>
			             <td></td>
			             <td></td>
			           </tr>
			         </tbody>
			       </table>
			</div>
			
		</div>
	</div>
	</section>
	</section>
	<div style="float: right">
      <a href="javascript:saveEvalDetail();" class="btn btn-s-md btn-primary" >进入纸箱成本测算</a>
    </div>
    
	<div class="modal fade" id="jingxiao">
    <div class="modal-dialog" style="width: 800px">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
          <form class="form-horizontal" id="jingxiaoForm" data-validate="parsley" method="post" onsubmit="return false">
            <table style="text-align: right;"
              class="table table-striped b-t b-light text-sm">
              <tbody id="addma1">
                <tr>
                  <td><label>物料名称：</label></td>
                  <td><input type="text" id="materialName1" class="form-control" mCode="" data-required="true"></td>
                  <td style="text-align:left"><input id="jingXiaoIsManual" type="checkbox" name="jingXiaoIsManual" class="parsley-validated" onchange="jxMaterialManual()">手动</td>
                  <td><label>成本(￥)：</label></td>
                  <td><input id="materialPrice1" type="text" class="form-control" data-required="true" data-type="number"></td>
                  <td></td>
                </tr>
                <tr>
                  <td><label>物料描述：</label></td>
                  <td colspan="5"><input type="text" id="materialClassify1" class="form-control"></td>
                </tr>
                <tr>
                  <td><label>备注：</label></td>
                  <td colspan="5"><input id="remark1" type="text" class="form-control"></td>
                </tr>
              </tbody>
            </table>
            <div>
              <a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:updateMaterial();"class="btn btn-default btn-sm">确定</a>
            </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
	
	<div class="modal fade" id="hunhe">
	  <div class="modal-dialog" style="width: 950px">
		<div class="modal-content">
		  <div class="modal-body">
		    <div class="row">
		    <form class="form-horizontal" id="hunheForm" data-validate="parsley" method="post" onsubmit="return false">
		    	<table style="text-align: right;" class="table table-striped b-t b-light text-sm">
					<tbody>
						<tr>
	              			<td><label>物料名称：</label></td>
         					<td><input type="text" id="materialName" mCode="" class="form-control"  data-required="true"></td>
         					<td style="text-align:left"><input id="isManual" type="checkbox" name="isManual" class="parsley-validated" onchange="hhMaterialManual()">手动</td>
							<td><label>物料描述：</label></td>
	              			<td><input type="text" id="materialClassify" class="form-control"></td>
	              			<td></td>
              			</tr>
			            <tr>
			              	<td><label>备注：</label></td>
			              	<td colspan="4"><input type="text" id="remark" class="form-control"></td>
			            </tr>
					</tbody>
				</table>
				<table  style="text-align: right;" class="table table-striped b-t b-light text-sm">
		    		<tbody id="materialBody">
		    			<tr>
              			  <td width="440px;"><input name="productName" type="text" placeholder="原材料名称" class="form-control"></td>
         				  <td width="43px;" style="text-align:left"><input type="checkbox" class="parsley-validated" name="materialNameC" onchange="pdMaterialManual()">手动
         				  	<a onclick="openMaterialCalSelModal(this,'fromProcess')" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></td>
         				  <td><input type="text" name="productCost"  placeholder="原材料单价(￥)" class="form-control" data-type="number"></td>
         				  <td style="text-align:left;"><a onclick="materialPrice4Process(this)" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
         				  <td><input style="float:left;width:35%" type="text" name="productLossUp"  placeholder="单耗" class="form-control" data-type="number">
         				  <a onclick="materialPrice4Process(this)" href="javascript:void(0)"><i style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>
         				  <input style="float:right;width:55%" type="text" placeholder="参考工厂" class="form-control" ></td>
         				  <td><div style="float:left;"><div  class="btn-group"><a href="javaScript:materialBodyAdd();"><i class="fa fa-plus"></i></a></div>
			            			<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>
		            			</div></td>
		            	  <td hidden="hidden"></td>		
			            </tr>
		    		</tbody>
		    		<tbody id="processBody">
		    			<tr>
              			  <td ><select style="width:28%;float:left;" placeholder="加工类型" name="MachType" style="width:50px;" class="input-sm inline" onchange="changeProcessClassify(this)">
              			  </select>
              			  <input style="width:72%;float:right;" type="text" name="processNameInput" placeholder="加工名称" class="form-control">
              			  </td>
         				  <td  colspan="2">
         				 <input type="text" style="float:left;width:45%" name="expansionRateInput" placeholder="损耗1" class="form-control">
         				 <a onClick="selFormulaEle4ProcessBodyS(this,'formulaInput1','formulaInput2')" href="javascript:void(0)"><i style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>
         				<input style="float:right;width:45%" type="text" name="firstRate" placeholder="损耗2" class="form-control">
         				 </td>
         				  <td style="text-align:left;"><a onClick="selFormulaEle4ProcessBodyY(this,'formulaInput1','formulaInput2')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
		            	  <td>
		            	  <input  style="float:left;width:35%" type="text" name="processValueInput" placeholder="单价(￥)" class="form-control" data-type="number">
		            	  <a onClick="materialPrice4ProcessBody(this)" href="javascript:void(0)"><i  style="margin-top:10px;margin-right:10px" class="fa fa-building-o"></i></a>
		            	  <input style="float:right;width:55%" type="text" name="factoryInput" placeholder="参考工厂" class="form-control" >
		            	  </td>
		            	  <td style="width:30px;"><div style="float:right;"><div class="btn-group"><a href="javaScript:processBodyAdd();"><i class="fa fa-plus"></i></a></div>
			            	<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>
		            			</div></td>
			            </tr>
		    		</tbody>
		    		<tbody id="otherBody">
		    			<tr>
              			  <td><input type="text" placeholder="其他" class="form-control" ></td>
         				  <td></td>
         				  <td><input type="text" placeholder="单价(￥)" class="form-control" data-type="number" data-required="false"></td>
         				  <td style="text-align:left;"><a onClick="materialPrice4Process(this)" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
		            	  <td><div style="float:left;"><div  class="btn-group"><a href="javaScript:otherBodyAdd();"><i class="fa fa-plus"></i></a></div>
			            			<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>
		            			</div></td>
			            </tr>
		    		</tbody>
		    	</table>
				
			    
		        
		        <table class="table table-striped b-t b-light text-sm">
					<tbody>
						<tr>
							<td style="text-align: right;width:100px;"><label >运算符号：</label></td>
							<td colspan="2"><a style="margin-right:30px;" onClick="formulaCalAdd('formulaInput1','formulaInput2')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-plus"></i></a>
								<a style="margin-right:30px;" onClick="formulaCalReduce('formulaInput1','formulaInput2')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-minus"></i></a>
								<a style="margin-right:30px;" onClick="formulaCalMultiply('formulaInput1','formulaInput2')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-times"></i></a>
								<a style="margin-right:30px;" onClick="formulaCalDivide('formulaInput1','formulaInput2')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-italic"></i></a>
								<a style="margin-right:30px;" onClick="formulaCalrBacketL('formulaInput1','formulaInput2')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-chevron-left"></i></a>
								<a style="margin-right:30px;" onClick="formulaCalrBacketR('formulaInput1','formulaInput2')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-chevron-right"></i></a>
							</td>
						</tr>
						<tr>
							<td style="text-align: right;width:100px;"><label >计算表达式：</label></td>
							<td><input id="formulaInput1" type="text" class="form-control"></td>
							<td style="text-align:left"><a onClick="clearFormulaInput('formulaInput1','formulaInput2')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-wrench"></i></a></td>
						</tr>
						<tr>
							<td style="text-align: right;width:100px;"><label >计算公式值：</label></td>
							<td><input id="formulaInput2" type="text" class="form-control"></td>
							<td></td>
						</tr>
						<tr>
			              	<td style="text-align: right;width:100px;">成本(￥)</td>
			              	<td><input type="text" id="materialPrice" class="form-control" data-required="true" data-type="number"></td>
			              	<td style="text-align:left;"><a onClick="calFormulaResult('formulaInput2','materialPrice')" href="javascript:void(0)"><i class="fa fa-refresh"></i></a></td>
			            </tr>
					</tbody>
				</table>
		        
				<div style="width:100%">
					<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:updateMaterial();" class="btn btn-default btn-sm">确定</a>
				</div>
				</form>
			  </div>
			</div>
		</div>
	  </div>
	</div>

	<div class="modal fade" id="banchengpin">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
					<form class="form-horizontal" id="banchengpinForm" data-validate="parsley" method="post" onsubmit="return false">
						<table style="text-align: right;" class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
									<td style="width:120px;"><label>组件名称：</label></td>
									<td style="float:left"><select id="halfProductClassify" style="width:140px;" class="input-sm inline">
										</select></td>
									<td></td>
									<td><label>参考工厂：</label></td>
									<td><input id="referenceFactoryHalfProduct" type="text" class="form-control"></td>
									<td></td>
								</tr>
								<tr>
									<td><label>物料描述：</label></td>
									<td><input id="materailDescribe" type="text" class="form-control"></td>
									<td></td>
									<td><label>绗缩：</label></td>
									<td><input id="shrinkageRate" type="text" class="form-control" data-type="number"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
								</tr>
								<tr>
									<td><label>裁耗：</label></td>
									<td><input id="materialLoss" type="text" class="form-control"  data-required="true" data-type="number"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
									<td><label>梳理损耗：</label></td>
									<td><input id="cardingLoss" type="text" class="form-control" data-type="number"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
								</tr>
								<tr>
									<td><label>原材料单耗：</label></td>
									<td><input id="productLossDown" type="text" class="form-control" data-type="number"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
									<td><label>备注：</label></td>
									<td><input id="remarkHalfProduct" type="text" class="form-control"></td>
								</tr>
							</tbody>
						</table>
						<table style="text-align: right;" class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
									<td style="text-align: right;width:120px;"><label>规格 长-宽-高-其他：</label></td>
									<td hidden="hidden"><label>规格长：</label></td>
									<td><input id="specLength" type="text" class="form-control"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
									<td hidden="hidden"><label>规格宽：</label></td>
									<td><input id="specWidth" type="text" class="form-control"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
									<td hidden="hidden"><label>规格高：</label></td>
									<td><input id="specHeight" type="text" class="form-control"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
									<td hidden="hidden"><label>规格其他：</label></td>
									<td><input id="specOther" type="text" class="form-control"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
								</tr>
								<tr>
									<td style="text-align: right;width:120px;"><label>裁片 长-宽-高-其他：</label></td>
									<td hidden="hidden"><label>裁片长：</label></td>
									<td><input id="cutLength" type="text" class="form-control"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
									<td hidden="hidden"><label>裁片宽：</label></td>
									<td><input id="cutWidth" type="text" class="form-control"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
									<td hidden="hidden"><label>裁片高：</label></td>
									<td><input id="cutHeight" type="text" class="form-control"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
									<td hidden="hidden"><label>裁片其他：</label></td>
									<td><input id="cutOther" type="text" class="form-control"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
								</tr>
								<tbody id="selMaterialBody">
									<tr>
										<td style="text-align: right;width:120px;"><label>选择物料：</label></td>
										<td colspan="3"><input id="" type="text" class="form-control"  data-required="true"></td>
										<td style="text-align:left"><a onclick="openMaterialCalSelModal(this,'fromHP')" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></td>
										<td hidden="hidden"><label>选择物料：</label></td>
										<td><input id="" type="text" class="form-control"  data-required="true" data-type="number"></td>
										<td style="text-align:left"><a onClick="selFormulaEle(this,'formulaBanExp','formulaBanVal')" href="javascript:void(0)"><i class="fa fa-building-o"></i></a></td>
										<td colspan="2" style="text-align:left"><a onclick="addMoreFromHP(this);" href="javaScript:void();"><i class="fa fa-plus"></i></a>
											<a onclick="delBodyRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>
										</td>
										<td hidden="hidden"></td>
									</tr>
								</tbody>
								<tr>
									<td style="text-align: right;width:120px;"><label >运算符号：</label></td>
									<td style="text-align: center;"colspan="8"><a style="margin-right:30px;" onClick="formulaCalAdd('formulaBanExp','formulaBanVal')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-plus"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalReduce('formulaBanExp','formulaBanVal')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-minus"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalMultiply('formulaBanExp','formulaBanVal')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-times"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalDivide('formulaBanExp','formulaBanVal')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-italic"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalrBacketL('formulaBanExp','formulaBanVal')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-chevron-left"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalrBacketR('formulaBanExp','formulaBanVal')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-chevron-right"></i></a>
									</td>
								</tr>
								<tr>
									<td style="text-align: right;width:120px;"><label >计算表达式：</label></td>
									<td colspan="7"><input id="formulaBanExp" type="text" class="form-control"></td>
									<td style="text-align:left"><a onClick="clearFormulaInput('formulaBanExp','formulaBanVal')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-wrench"></i></a></td>
								</tr>
								<tr>
									<td style="text-align: right;width:120px;"><label >计算公式值：</label></td>
									<td colspan="7"><input id="formulaBanVal" type="text" class="form-control"></td>
									<td></td>
								</tr>
								<tr>
					              	<td style="text-align: right;width:120px;">成本(￥)</td>
					              	<td colspan="7"><input type="text" id="materialPrice4HP" class="form-control"  data-required="true" data-type="number"></td>
					              	<td style="text-align:left;"><a onClick="calFormulaResult('formulaBanVal','materialPrice4HP')" href="javascript:void(0)"><i class="fa fa-refresh"></i></a></td>
					            </tr>
							</tbody>
						</table>
						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:updateHalfProduct();" class="btn btn-default btn-sm">确定</a>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="modal fade" id="jiagongfei">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
					<form class="form-horizontal" id="jiagongfeiForm" data-validate="parsley" method="post" onsubmit="return false">
						<table style="text-align: right;" class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
									<td style="width:80px;"><label>组件名称：</label></td>
									<td style="float:left"><select id="hpcompjiagong" style="width:160px;" class="input-sm inline">
										</select></td>
									<td><label>备注：</label></td>
									<td><input id="processRemark" type="text" class="form-control" ></td>
									<td></td>
								</tr>
							</tbody>
						</table>
						<table style="text-align: right;" class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
								  <td width="16%"><select id="classifyType" style="width:100%" class="input-sm inline" onchange="changeFengzhiClassify(this)">
								  				  </select></td>
		              			  <td width="30%"><input type="text" id="processName" placeholder="加工名称" class="form-control" data-required="true"></td>
		         				  <td width="10%"><input type="text" id="processCost" placeholder="单价(￥)" onBlur="calProcessCost();"class="form-control" data-required="true" data-type="number"></td>
		         				  <td width="20%"><input type="text" id="processDesc" placeholder="说明" class="form-control"></td>
				            	  <td width="25%"><input type="text" id="processFactory" placeholder="参考工厂" class="form-control" ></td>
					            </tr>
							</tbody>
							<tbody id="processOtherEle">
				    			<tr>
		              			  <td colspan="2"><input type="text" placeholder="其他" class="form-control" ></td>
		         				  <td><input type="text" placeholder="单价(￥)" onBlur="calProcessCost();" class="form-control" data-type="number" data-required="false"></td>
				            	  <td colspan="2" style="text-align:left"><a onclick="addMoreFromProcess(this);" href="javaScript:void();"><i class="fa fa-plus"></i></a>
										<a onclick="delRow(this)" href="javascript:;"><i class="fa fa-minus"></i></a>
									</td>
					            </tr>
				    		</tbody>
				    		<tbody>
				    			<tr>
		              			  <td></td>
		              			  <td>合计(￥)：</td>
		         				  <td><input type="text" id="processingCost" class="form-control" data-required="true" data-type="number"></td>
		         				  <td></td>
		         				  <td></td>
					            </tr>
				    		</tbody>
						</table>
						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:updateHalfProduct();" class="btn btn-default btn-sm">确定</a>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
		<div class="modal fade" id="fuliao">
		<div class="modal-dialog" style="width: 800px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
					<form class="form-horizontal" id="fuliaoForm" data-validate="parsley" method="post" onsubmit="return false">
						<table style="text-align: right;" class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
									<td style="width:100px;"><label >组件名称：</label ></td>
									<td style="float:left"><select id="hpcompfuliao" style="width:190px;" class="input-sm inline">
										</select></td>
									<td></td>
									<td ><label >备注：</label ></td>
									<td><input type="text" id="mRemark4m" class="form-control"></td>
									<td></td>
								</tr>
								<tr>
									<td style="width:100px;"><label >选择物料：</label ></td>
									<td><input type="text" id="material4m" class="form-control"  data-required="true"></td>
									<td style="text-align:left"><a onclick="openMaterialCalSelModal(this,'fromMaterial')" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></td>
									<td ><label >物料单价(￥)：</label ></td>
									<td><input type="text" id="materialPrice4m" class="form-control"  data-required="true" data-type="number"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'calculExpression4m','calculFormula4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-building-o"></i></a></td>
									<td hidden="hidden"></td>
								</tr>
								<tr>
									<td><label>耗料：</label></td>
									<td ><input type="text" id="materialConsum4m" class="form-control" name="cartonLength" data-required="true" data-type="number"></td>
									<td style="text-align:left"><a onClick="selFormulaEle(this,'calculExpression4m','calculFormula4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-building-o"></i></a></td>
									<td colspan="3"></td>
								</tr>
							</tbody>
						</table>
						<table style="text-align: right;" class="table table-striped b-t b-light text-sm">
							<tbody>
								<tr>
									<td style="width:100px;"><label >运算符号：</label></td>
									<td style="text-align:center;"><a style="margin-right:30px;" onClick="formulaCalAdd('calculExpression4m','calculFormula4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-plus"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalReduce('calculExpression4m','calculFormula4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-minus"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalMultiply('calculExpression4m','calculFormula4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-times"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalDivide('calculExpression4m','calculFormula4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-italic"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalrBacketL('calculExpression4m','calculFormula4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-chevron-left"></i></a>
										<a style="margin-right:30px;" onClick="formulaCalrBacketR('calculExpression4m','calculFormula4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-chevron-right"></i></a>
									</td>
									<td></td>
								</tr>
								<tr>
									<td><label>计算表达式：</label></td>
									<td><input id="calculExpression4m" name="calculExpression" type="text" class="form-control"></td>
									<td style="text-align:left;"><a onClick="clearFormulaInput('calculExpression4m','calculFormula4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-wrench"></i></a></td>
								</tr>
								<tr>
									<td><label>计算公式：</label></td>
									<td><input id="calculFormula4m" name="calculFormula" type="text" class="form-control"></td>
									<td></td>
								</tr>
								<tr>
								<td><label >成本(￥)：</label></td>
									<td><input type="text" class="form-control" name="mCost4m" id="mCost4m" data-type="number" data-required="true"></td>
									<td style="text-align:left;"><a onClick="calFormulaResult('calculFormula4m','mCost4m')" href="javascript:void(0)" data-toggle="modal"><i class="fa fa-refresh"></i></a></td>
								</tr>
							</tbody>
						</table>
						<div>
							<a style="width: 80px; height: 30px; float: right; margin-right: 35px" href="javascript:updateHalfProduct();" class="btn btn-default btn-sm">确定</a>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	
	<div class="modal fade" id="handleType">
		<div class="modal-dialog" style="width: 250px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<label>加工方式：</label>
						<select id="modalType" style="width:130px;" class="input-sm inline">
						        <option value="jingxiao">采购</option>
						        <option value="hunhe">加工</option>
						</select>
						<div>
							<a data-toggle="modal" style="width: 80px; height: 30px; float: right; margin:15px 35px 0 0" onclick="showModal();" data-dismiss="modal" class="btn btn-default btn-sm">确定</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="modal fade" id="costType">
		<div class="modal-dialog" style="width: 250px">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<label>分类：</label>
						<select id="costTypeSel" style="width:130px;" class="input-sm inline">
								<option value="banchengpin">主料耗料</option>
								<option value="jiagongfei">加工费</option>
						        <option value="fuliao">辅料耗料</option>
						</select>
						<div>
							<a data-toggle="modal" style="width: 80px; height: 30px; float: right; margin:15px 35px 0 0" onclick="showCostType();" data-dismiss="modal" class="btn btn-default btn-sm">确定</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="modal fade" id="materialCalSel">
		<div class="modal-dialog" style="width: 750px">
			<div class="modal-content">
				<div class="modal-body">
				   <div class="row">
					<table class="table table-striped b-t b-light text-sm">
			          <thead>
			            <tr>
			              <th style="width:40px;">选择</th>
			              <th style="width:70px;">物料序号</th>
			              <th>物料描述</th>
			              <th>物料名称</th>
			              <th>加工方式</th>
			              <th>物料价格(￥)</th>
			            </tr>
			          </thead>
			          <tbody id="materialGetFromTop">
			          </tbody>
			        </table>
			        <div>
						<a style="width:80px;height:30px;float:right;margin-right:35px;" onclick="fillSelMaterial()" href="javascript:void(0);" class="btn btn-default btn-sm">确定</a>
					</div>
				  </div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
