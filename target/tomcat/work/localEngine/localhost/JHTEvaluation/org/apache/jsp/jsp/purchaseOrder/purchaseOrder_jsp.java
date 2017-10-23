package org.apache.jsp.jsp.purchaseOrder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class purchaseOrder_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write('\r');
      out.write('\n');
String path=request.getContextPath(); 

      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html lang=\"en\">\r\n");
      out.write("<head>\r\n");
      out.write("\t<title>Insert title here</title>\r\n");
      out.write("\t<meta charset=\"utf-8\" />\r\n");
      out.write("\t<title>JHT测算平台 | Web Application</title>\r\n");
      out.write("\t<link rel=\"stylesheet\" type=\"text/css\" href=\"");
      out.print(path);
      out.write("/css/slideshow.css\">\r\n");
      out.write("\t<link rel=\"stylesheet\" href=\"");
      out.print(path);
      out.write("/css/app.v2.css\" type=\"text/css\" />\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/Script/jquery.min.js\"></script>\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/Script/app.v2.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/bootstrap.min.js\"></script>\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/js/likeSearchInput.js\"></script>\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/js/purchaseOrder/purchaseOrder.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/parsley/parsley.min.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\">\r\n");
      out.write("\t\tvar path = \"");
      out.print(path);
      out.write("\";\r\n");
      out.write("\t</script>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<div>\r\n");
      out.write("\t\t<section class=\"scrollable padder\">\r\n");
      out.write("\t\t\t<div class=\"m-b-md\">\r\n");
      out.write("\t\t\t\t<h3 class=\"m-b-none\">创建采购订单</h3>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"calForm\" class=\"m-b-sm\">\r\n");
      out.write("\t\t\t\t<section style=\"width: 100%;\" class=\"panel panel-default\">\r\n");
      out.write("\t\t\t\t\t<header class=\"panel-heading\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"panel-body\">\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"nav nav-tabs nav-justified\" id=\"tabUl\">\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</header>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t<div style=\"\" class=\"panel-body\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"tab-content\" id=\"tabDivs\">\r\n");
      out.write("\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t<div style=\" margin-right: 20px; float: right\">\r\n");
      out.write("\t\t\t\t\t\t    \r\n");
      out.write("\t\t\t\t\t\t\t<a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px;display:inline\" href=\"javaScript:void(0);\" onclick=\"saveOrder();\">保存订单</a>\r\n");
      out.write("\t\t\t\t\t\t\t&nbsp;&nbsp;<a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px;display:inline\" href=\"javaScript:void(0);\" onclick=\"uploadOrder();\">上传订单</a>\r\n");
      out.write("\t\t\t\t\t\t\t&nbsp;&nbsp;<a id=\"outOrderBtn\" class=\"btn btn-s-md btn-primary-W\" style=\"width:60px;display:none\" href=\"javaScript:void(0);\" onclick=\"uploadOutOrder();\">上传外协订单</a>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</section>\r\n");
      out.write("\t\t\t</div> \r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t<!--添加修改销售订单行信息  -->\r\n");
      out.write("\t\t\t<div class=\"modal fade\" id=\"addPurchase\">\r\n");
      out.write("\t\t\t\t<div class=\"modal-dialog\" style=\"width: 800px\">\r\n");
      out.write("\t\t\t\t\t<div class=\"modal-content\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"modal-body\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<form id=\"purchaseForm\" class=\"form-horizontal\"  data-validate=\"parsley\" method=\"post\" onsubmit=\"return false\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<table style=\"text-align: right;\"\r\n");
      out.write("\t\t\t\t\t\t\t\t\tclass=\"table table-striped b-t b-light text-sm\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<tbody id=\"atbody\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<tr>\t\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><label>物料编码：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"itemNumber\" id=\"materielNum\" class=\"form-control\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><label>单位：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"unitOfMeasure\" id=\"department\" class=\"form-control\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><label>数量：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"quantity\" id=\"materielNumer\"  value=\"\" class=\"form-control\" data-type=\"number\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><label>单价：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"unitPrice\" id=\"unitPrice\" class=\"form-control\" data-type=\"number\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><label>行类型：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"lineType\" id=\"rowType\" class=\"form-control\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><label>发运行号：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"shipmentNum\" id=\"shipmentNum\" class=\"form-control\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t    <td><label >税率：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"lineAttribute1\" id=\"ratio\" value=\"\" class=\"form-control\" data-type=\"number\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><label>含税价格：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"lineAttribute3\" id=\"ratioPrice\" value=\"\" class=\"form-control\" data-type=\"number\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t    <td><label>项目：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"lineAttribute4\" id=\"project\" value=\"\" class=\"form-control\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t        <td><label>辅料说明：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"accessExplain\" id=\"accessExplain\" value=\"\" class=\"form-control\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t        \r\n");
      out.write("\t\t\t\t\t\t\t\t\t    </tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t    <tr hidden=\"hidden\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t        <td><label>加工合同号：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"contractNo\" id=\"contractNo\" value=\"\" class=\"form-control\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t    <td><label>EBS工单号：</label></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"wipEntityName\" id=\"wipEntityName\" value=\"\" class=\"form-control\" data-required=\"true\"></td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t        \r\n");
      out.write("\t\t\t\t\t\t\t\t\t    </tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</tbody>\r\n");
      out.write("\t\t\t\t\t\t\t\t</table>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t<div>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<a style=\"width: 80px; height: 30px; float: right; margin-right: 35px\" href=\"javascript:void(0);\" onClick=\"updatePurchase();\"  class=\"btn btn-default btn-sm\">确定</a>\r\n");
      out.write("\t\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t</form>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</body>\r\n");
      out.write("\t</html>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
