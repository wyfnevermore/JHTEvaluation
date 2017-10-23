package org.apache.jsp.jsp.evaluation.history;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class calcHistory_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<title>Insert title here</title>\r\n");
      out.write("<meta charset=\"utf-8\" />\r\n");
      out.write("\t<title>JHT测算平台 | Web Application</title>\r\n");
      out.write("\t<link rel=\"stylesheet\" href=\"");
      out.print(path);
      out.write("/css/app.v2.css\" type=\"text/css\" />\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/Script/jquery.min.js\"></script>\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/Script/jquery-3.2.1.min.js\"></script>\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/Script/app.v2.js\"></script>\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/Script/bootstrap.min.js\"></script>\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/Script/bootstrap-table.js\"></script>\r\n");
      out.write("\t<script src=\"");
      out.print(path);
      out.write("/js/evaluation/history/calHistory.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\">\r\n");
      out.write("\t\tvar path = \"");
      out.print(path);
      out.write("\";\r\n");
      out.write("\t</script>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<section class=\"vbox\">\r\n");
      out.write("  <section>\r\n");
      out.write("    <section class=\"hbox stretch\"> <!-- .aside -->\r\n");
      out.write("      <section id=\"content\">\r\n");
      out.write("        <section class=\"vbox\">\r\n");
      out.write("          <section class=\"scrollable padder\">\r\n");
      out.write("            <section class=\"panel panel-default\">\r\n");
      out.write("              <header class=\"panel-heading\"> 条件筛选 </header>\r\n");
      out.write("              <div class=\"row text-sm wrapper\">\r\n");
      out.write("              \t<table style=\"width:100%;\">\r\n");
      out.write("              \t\t<tr>\r\n");
      out.write("\t              \t\t<td width=\"7%\"><label>测算单号：</label></td>\r\n");
      out.write("\t              \t\t<td width=\"10%\"><input type=\"text\" style=\"\" class=\"form-control \" ></td>\r\n");
      out.write("\t              \t\t<td width=\"7%\"><label>测算人：</label></td>\r\n");
      out.write("\t              \t\t<td width=\"10%\"><input type=\"text\" style=\"\" class=\"form-control \" ></td>\r\n");
      out.write("\t              \t\t<td width=\"7%\"><label>客户：</label></td>\r\n");
      out.write("\t              \t\t<td width=\"10%\"><input type=\"text\" style=\"\" class=\"form-control \" ></td>\r\n");
      out.write("\t              \t\t<td width=\"7%\"><label>产品类型：</label></td>\r\n");
      out.write("\t              \t\t<td width=\"10%\"><select style=\"\" class=\"input-sm form-control input-s-sm inline\"><option value=\"0\">化纤制连衣裙</option>\r\n");
      out.write("\t\t\t\t            <option value=\"1\">全棉漂白布或半漂布</option>\r\n");
      out.write("\t\t\t\t            <option value=\"2\">全棉斜纹布</option>\r\n");
      out.write("\t\t\t\t            </select></td>\r\n");
      out.write("\t              \t\t<td width=\"7%\"><label>产品名称：</label></td>\r\n");
      out.write("\t              \t\t<td width=\"10%\"><input type=\"text\" style=\"\" class=\"form-control \" ></td>\r\n");
      out.write("\t\t\t\t        <td width=\"7%\"></td>\r\n");
      out.write("\t\t\t\t        <td width=\"5%\"><a onClick=\"initTable()\" class=\"btn btn-primary\" >查找</a></td>\r\n");
      out.write("              \t\t</tr>\r\n");
      out.write("              \t</table>\r\n");
      out.write("              </div>\r\n");
      out.write("              <section class=\"panel panel-default\">\r\n");
      out.write("\t          <div class=\"table-responsive\">\r\n");
      out.write("                <table id=\"calHistoryTable\" style=\"width: 100%;border-collapse: collapse;table-layout: fixed;\" class=\"table table-striped b-t b-light text-sm\">\r\n");
      out.write("                </table>\r\n");
      out.write("              </div>\r\n");
      out.write("              </section>\r\n");
      out.write("            </section>\r\n");
      out.write("          </section>\r\n");
      out.write("        </section>\r\n");
      out.write("        <a href=\"#\" class=\"hide nav-off-screen-block\" data-toggle=\"class:nav-off-screen\" data-target=\"#nav\"></a> </section>\r\n");
      out.write("      <aside class=\"bg-light lter b-l aside-md hide\" id=\"notes\">\r\n");
      out.write("        <div class=\"wrapper\">Notification</div>\r\n");
      out.write("      </aside>\r\n");
      out.write("    </section>\r\n");
      out.write("  </section>\r\n");
      out.write("</section>\r\n");
      out.write("</body>\r\n");
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
