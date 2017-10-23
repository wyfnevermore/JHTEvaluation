package org.apache.jsp.jsp.purchaseOrder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class importPurchase_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write('\n');
String path=request.getContextPath(); 
String sharePriceV = (String)request.getParameter("sharePriceV");

      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html lang=\"en\">\n");
      out.write("<head>\n");
      out.write("<title>Insert title here</title>\n");
      out.write("<meta charset=\"utf-8\" />\n");
      out.write("<title>JHT测算平台 | Web Application</title>\n");
      out.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"");
      out.print(path);
      out.write("/css/slideshow.css\">\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(path);
      out.write("/css/app.v2.css\" type=\"text/css\" />\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/Script/jquery.min.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/Script/app.v2.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/js/purchaseOrder/importPurchase.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/Script/bootstrap-table.js\"></script>\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("var sharePriceV = \"");
      out.print(sharePriceV);
      out.write("\";\n");
      out.write("</script>\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("  <div>\n");
      out.write("    <section class=\"scrollable padder\">\n");
      out.write("    <div class=\"m-b-md\">\n");
      out.write("      <h3 class=\"m-b-none\">导入采购成品</h3>\n");
      out.write("    </div>\n");
      out.write("    <div id=\"calForm\" class=\"m-b-sm\">\n");
      out.write("      <form class=\"form-horizontal\" data-validate=\"parsley\" method=\"post\" onsubmit=\"return false\">\n");
      out.write("        <section class=\"panel panel-default\">\n");
      out.write("\t\t<header class=\"panel-heading\"> </header>\n");
      out.write("        <div class=\"panel-body\">\n");
      out.write("          <div style=\"width: 67%; float: left; min-width: 700px;\">\n");
      out.write("            <div class=\"line line-dashed line-lg pull-in\"></div>\n");
      out.write("            \n");
      out.write("            <div class=\"line line-dashed line-lg pull-in\"></div>\n");
      out.write("            <div style=\"width: 100%; float: left; margin: 10px 0px 0px 10px\">\n");
      out.write("              采购订单类型：<input type=\"radio\" name=\"type\" id=\"radiojx\" checked=\"\" /><label for=\"radiojx\">经销</label>&nbsp;&nbsp;<input type=\"radio\" name=\"type\" id=\"radiocg\"/><label for=\"radiocg\">常规</label>&nbsp;&nbsp;<input type=\"radio\" name=\"type\" id=\"radiofcg\"/><label for=\"radiofcg\">非常规</label>&nbsp;&nbsp;\n");
      out.write("              <table  style=\"text-align: center;\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("                <thead>\n");
      out.write("                  <tr>\n");
      out.write("                    <th>项目号</th>\n");
      out.write("                    <th>销售订单号</th>\n");
      out.write("                    <th>成品描述</th>\n");
      out.write("                    <th>规格</th>\n");
      out.write("                    <th>成品SKU</th>\n");
      out.write("                    <th style=\"width:80px;\">操作</th>\n");
      out.write("                  </tr>\n");
      out.write("                </thead>\n");
      out.write("                <tbody id=\"sptbody\">\n");
      out.write("                  <tr>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td><a onClick=\"addPurchase();\" href=\"javaScript:void(0);\"><i class=\"fa fa-plus\"></i></a>&nbsp;\n");
      out.write("              \t\t\t<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a></td>\n");
      out.write("                  </tr>\n");
      out.write("                </tbody>\n");
      out.write("              </table>\n");
      out.write("            </div>\n");
      out.write("          </div>\n");
      out.write("          <div style=\"width: 40%; float: right\">\n");
      out.write("            <div class=\"mySlideWrap\">\n");
      out.write("              <div id='mysite-slideshow'></div>\n");
      out.write("            </div>\n");
      out.write("            <div style=\"margin-bottom: 400px; margin-right: 0px; float: right\">\n");
      out.write("              <a  href=\"javaScript:void(0);\" onclick=\"createPurchase();\" class=\"btn btn-s-md btn-primary\" >手动生成采购订单</a>\n");
      out.write("            </div>\n");
      out.write("          </div>\n");
      out.write("        </div>\n");
      out.write("        </section>\n");
      out.write("      </form>\n");
      out.write("    </div>\n");
      out.write("    </section>\n");
      out.write("  </div>\n");
      out.write("\n");
      out.write("  <div class=\"modal fade\" id=\"addPurchase\">\n");
      out.write("    <div class=\"modal-dialog\" style=\"width:850px; height: 650px;\">\n");
      out.write("      <div style=\"background-color: #ffffff; width: 100%; height: 640px;overflow:auto;\" class=\"modal-content\" >\n");
      out.write("        <div style=\"padding: 5px;\" class=\"modal-body\">\n");
      out.write("        \t<table style=\"text-align: right;\" class=\"table b-t b-light text-sm\">\n");
      out.write("              <tbody id=\"addma1\">\n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"80px;\"><label>项目号：</label></td>\n");
      out.write("                  <td><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"80px;\"><label>销售订单号：</label></td>\n");
      out.write("                  <td><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"80px;\"><label>成品SKU：</label></td>\n");
      out.write("                  <td><input type=\"text\" class=\"form-control\"></td> \n");
      out.write("                  <td><a href=\"#\" style=\"width:60px;height:40px;\"class=\"btn btn-s-md btn-default\">筛选</a></td>\n");
      out.write("                </tr> \n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("\t\t\t<section class=\"panel panel-default\">\n");
      out.write("\t          <div class=\"table-responsive\">\n");
      out.write("                <table id=\"purchaseTable\" style=\"width: 100%;border-collapse: collapse;table-layout: fixed;\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("                \n");
      out.write("                </table>\n");
      out.write("              </div>\n");
      out.write("           \n");
      out.write("              </section>\t\n");
      out.write("              <div style=\" margin-right: 20px; float: right\">\n");
      out.write("            \t<a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px\" href=\"javaScript:void(0);\" onclick=\"updateSales();\">确认添加</a>\n");
      out.write("               </div> \n");
      out.write("        </div>\n");
      out.write("      \n");
      out.write("      </div>\n");
      out.write("    </div>\n");
      out.write("  </div>\n");
      out.write("  \n");
      out.write("   \n");
      out.write("</body>\n");
      out.write("</html>");
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
