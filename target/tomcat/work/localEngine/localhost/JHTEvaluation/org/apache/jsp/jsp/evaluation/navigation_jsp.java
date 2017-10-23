package org.apache.jsp.jsp.evaluation;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class navigation_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"utf-8\" />\r\n");
      out.write("<title></title>\r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(path);
      out.write("/css/app.v2.css\" type=\"text/css\" />\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/app.v2.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/jquery.min.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/bootstrap.min.js\"></script>\r\n");
      out.write("\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<section class=\"scrollable padder\">\r\n");
      out.write("\t\t<div class=\"m-b-md\">\r\n");
      out.write("\t\t\t<h3 class=\"m-b-none\">业务导航</h3>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div>\r\n");
      out.write("\t\t\t<div id=\"calForm\" class=\"m-b-sm\">\r\n");
      out.write("\t\t\t\t<div style=\"margin:auto;margin-top:60px;background-color: #F7F7F7; width: 1030px; height: 410px;\" >\r\n");
      out.write("\t\t\t\t\t<div style=\"padding: 5px;\" class=\"modal-body\">\r\n");
      out.write("\t\t\t\t\t\t<div style=\"position:relative;height: 550px; background: url(");
      out.print(path);
      out.write("/images/navigation.png) no-repeat;\">\r\n");
      out.write("\t\t\t\t\t\t\t<a href=\"#selectType1\" data-toggle=\"modal\" style=\"position:absolute;top: 17px; left: 30px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t\t<a href=\"#selectType2\" data-toggle=\"modal\" style=\"position:absolute;top: 17px; left: 348px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t\t<a onclick=\"enterSwitch('distribution')\" style=\"position:absolute;top: 17px; left: 670px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t\t<a onclick=\"enterSwitch('agent')\" style=\"position:absolute;top: 208px; left: 30px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t\t<a onclick=\"enterSwitch('onlineBusiness')\" style=\"position:absolute;top: 208px; left: 348px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t\t<a onclick=\"enterSwitch('importTrade')\" style=\"position:absolute;top: 208px; left: 670px; height: 120px; width: 245px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</section>\r\n");
      out.write("\t\r\n");
      out.write("\t<div class=\"modal fade\" id=\"selectType1\">\r\n");
      out.write("\t\t<div class=\"modal-dialog\" style=\"width: 300px\">\r\n");
      out.write("\t\t\t<div class=\"modal-content\">\r\n");
      out.write("\t\t\t\t<div class=\"modal-body\">\r\n");
      out.write("\t\t\t\t\t<div style=\"margin:auto;padding:2px;background-color: #F7F7F7; height: 60px;\" >\r\n");
      out.write("\t\t\t\t\t\t\t<div style=\"position:relative;height: 60px; background: url(");
      out.print(path);
      out.write("/images/trad.png) no-repeat;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<a onclick=\"enterSwitch('processing')\" style=\"position:absolute;top: 0px; left: 0px; height: 45px; width: 95px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t\t\t<a onclick=\"enterSwitch('processing')\" style=\"position:absolute;top: 0px; left: 140px; height: 45px; width: 95px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t\r\n");
      out.write("\t<div class=\"modal fade\" id=\"selectType2\">\r\n");
      out.write("\t\t<div class=\"modal-dialog\" style=\"width: 300px\">\r\n");
      out.write("\t\t\t<div class=\"modal-content\">\r\n");
      out.write("\t\t\t\t<div class=\"modal-body\">\r\n");
      out.write("\t\t\t\t\t<div style=\"margin:auto;padding:2px;background-color: #F7F7F7; height: 80px;\" >\r\n");
      out.write("\t\t\t\t\t\t\t<div style=\"position:relative;height: 80px; background: url(");
      out.print(path);
      out.write("/images/trad.png) no-repeat;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<a onclick=\"enterSwitch('dealing')\" style=\"position:absolute;top: 0px; left: 0px; height: 45px; width: 95px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t\t\t<a onclick=\"enterSwitch('dealing')\" style=\"position:absolute;top: 0px; left: 140px; height: 45px; width: 95px; background: none; border: none; text-indent: -999; cursor: pointer;\"></a>\r\n");
      out.write("\t\t\t\t\t\t\t\t<a style=\"position:absolute;top: 60px; left: 20px; height: 45px; width: 200px;\"><input id=\"isDesc\" type=\"checkbox\" class=\"parsley-validated\"><span style=\"font-size:15px;\">进行组件分析</span></a>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("</body>\r\n");
      out.write("<script>\r\n");
      out.write("function enterSwitch(busyType){\r\n");
      out.write("\tif(busyType==\"onlineBusiness\"||busyType==\"importTrade\"){\r\n");
      out.write("\t\treturn;\r\n");
      out.write("\t}\r\n");
      out.write("\tvar isDesc = $(\"#isDesc\").is(':checked');\r\n");
      out.write("\tif(busyType==\"dealing\" && !isDesc){\r\n");
      out.write("\t\tbusyType = \"dealingSimple\"\r\n");
      out.write("\t\tlocation.href = \"");
      out.print(path);
      out.write("\"+\"/jsp/evaluation/calculationSimple.jsp?busyType=\"+busyType;\r\n");
      out.write("\t}else if(busyType==\"distribution\"){\r\n");
      out.write("\t\tlocation.href = \"");
      out.print(path);
      out.write("\"+\"/jsp/evaluation/calculationSimple.jsp?busyType=\"+busyType;\r\n");
      out.write("\t}else if(busyType==\"agent\"){\r\n");
      out.write("\t\tlocation.href = \"");
      out.print(path);
      out.write("\"+\"/jsp/evaluation/calculationSimple.jsp?busyType=\"+busyType;\r\n");
      out.write("\t}else{\r\n");
      out.write("\t\tlocation.href = \"");
      out.print(path);
      out.write("\"+\"/jsp/evaluation/calculation.jsp?busyType=\"+busyType;\r\n");
      out.write("\t}\r\n");
      out.write("}\r\n");
      out.write("</script>\r\n");
      out.write("</html>\r\n");
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
