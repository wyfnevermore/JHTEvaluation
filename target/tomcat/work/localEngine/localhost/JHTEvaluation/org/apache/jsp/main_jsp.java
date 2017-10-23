package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class main_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html>\r\n");
String path=request.getContextPath(); 
      out.write("\r\n");
      out.write("<html lang=\"en\" class=\"app\">\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"utf-8\" />\r\n");
      out.write("<title>Notebook | Web Application</title>\r\n");
      out.write("<link rel=\"stylesheet\" href=\"css/app.v2.css\" type=\"text/css\" />\r\n");
      out.write("<script src=\"Script/app.v2.js\"></script>\r\n");
      out.write("<script src=\"Script/charts/easypiechart/jquery.easy-pie-chart.js\" cache=\"false\"></script> \r\n");
      out.write("<script src=\"Script/charts/sparkline/jquery.sparkline.min.js\" cache=\"false\"></script> \r\n");
      out.write("<script src=\"Script/charts/flot/jquery.flot.min.js\" cache=\"false\"></script> \r\n");
      out.write("<script src=\"Script/charts/flot/jquery.flot.tooltip.min.js\" cache=\"false\"></script> \r\n");
      out.write("<script src=\"Script/charts/flot/jquery.flot.resize.js\" cache=\"false\"></script> \r\n");
      out.write("<script src=\"Script/charts/flot/jquery.flot.grow.js\" cache=\"false\"></script> \r\n");
      out.write("<script src=\"Script/charts/flot/demo.js\" cache=\"false\"></script> \r\n");
      out.write("<script src=\"Script/calendar/bootstrap_calendar.js\" cache=\"false\"></script> \r\n");
      out.write("<script src=\"Script/calendar/demo.js\" cache=\"false\"></script> \r\n");
      out.write("<script src=\"Script/sortable/jquery.sortable.js\" cache=\"false\"></script>\r\n");
      out.write("\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<section class=\"vbox\">\r\n");
      out.write("  <section>\r\n");
      out.write("    <section class=\"hbox stretch\"> <!-- .aside -->\r\n");
      out.write("      <!-- /.aside -->\r\n");
      out.write("      <section id=\"content\">\r\n");
      out.write("        <section class=\"vbox\">\r\n");
      out.write("          <section class=\"scrollable padder\">\r\n");
      out.write("\r\n");
      out.write(" <div class=\"m-b-md\">\r\n");
      out.write("            <section style=\"margin-top:20px;\" class=\"panel panel-default\">\r\n");
      out.write("              <div class=\"row m-l-none m-r-none bg-light lter\">\r\n");
      out.write("                <div class=\"col-sm-6 col-md-3 padder-v b-r b-light\"> \r\n");
      out.write("                 <span class=\"fa-stack fa-2x pull-left m-r-sm\"> \r\n");
      out.write("                  <i class=\"fa fa-circle fa-stack-2x text-info\"></i> \r\n");
      out.write("                  <i class=\"fa fa-table fa-stack-1x text-white\"></i> \r\n");
      out.write("                  </span> \r\n");
      out.write("                 <a class=\"clear\" > <span class=\"h3 block m-t-xs\"><strong>52,000</strong></span> <small class=\"text-muted text-uc\">累计测算/单</small> </a> \r\n");
      out.write("                </div>\r\n");
      out.write("\r\n");
      out.write("                <div class=\"col-sm-6 col-md-3 padder-v b-r b-light lt\"> <span class=\"fa-stack fa-2x pull-left m-r-sm\"> <i class=\"fa fa-circle fa-stack-2x text-warning\"></i> <i class=\"fa fa-usd fa-stack-1x text-white\"></i> <span class=\"easypiechart pos-abt\" data-percent=\"100\" data-line-width=\"4\" data-track-Color=\"#fff\" data-scale-Color=\"false\" data-size=\"50\" data-line-cap='butt' data-animate=\"2000\" data-target=\"#bugs\" data-update=\"3000\"></span> </span> <a class=\"clear\"> <span class=\"h3 block m-t-xs\"><strong id=\"bugs\">468</strong></span> <small class=\"text-muted text-uc\">累计报价</small> </a> </div>\r\n");
      out.write("\r\n");
      out.write("                <div class=\"col-sm-6 col-md-3 padder-v b-r b-light\"> \r\n");
      out.write("                <span class=\"fa-stack fa-2x pull-left m-r-sm\"> \r\n");
      out.write("                <i class=\"fa fa-circle fa-stack-2x text-danger\"></i> \r\n");
      out.write("                <i class=\"fa fa-files-o fa-stack-1x text-white\"></i> \r\n");
      out.write("                <span class=\"easypiechart pos-abt\" data-percent=\"100\" data-line-width=\"4\" data-track-Color=\"#f5f5f5\" data-scale-Color=\"false\" data-size=\"50\" data-line-cap='butt' data-animate=\"3000\" data-target=\"#firers\" data-update=\"5000\"></span> </span> \r\n");
      out.write("                <a class=\"clear\" > <span class=\"h3 block m-t-xs\"><strong id=\"firers\">359</strong></span> <small class=\"text-muted text-uc\">累计销售订单</small> </a> </div>\r\n");
      out.write("\r\n");
      out.write("                <div class=\"col-sm-6 col-md-3 padder-v b-r b-light lt\"> <span class=\"fa-stack fa-2x pull-left m-r-sm\"> <i class=\"fa fa-circle fa-stack-2x text-success\"></i> <i class=\"fa fa-smile-o fa-stack-1x text-white\"></i> </span> <a class=\"clear\"> <span class=\"h3 block m-t-xs\"><strong>98.8%</strong></span> <small class=\"text-muted text-uc\">成功率/%</small> </a> </div>\r\n");
      out.write("\r\n");
      out.write("              </div>\r\n");
      out.write("            </section>\r\n");
      out.write("            <div class=\"row\">\r\n");
      out.write("              <div class=\"col-md-8\">\r\n");
      out.write("                <section class=\"panel panel-default\">\r\n");
      out.write("                  <header class=\"panel-heading font-bold\">测算数量年度汇总(单)</header>\r\n");
      out.write("                  <div class=\"panel-body\">\r\n");
      out.write("                    <div id=\"flot-1ine\" style=\"height:210px\"></div>\r\n");
      out.write("                  </div>\r\n");
      out.write("                  <footer class=\"panel-footer bg-white no-padder\">\r\n");
      out.write("                    <div class=\"row text-center no-gutter\">\r\n");
      out.write("                      <div class=\"col-xs-3 b-r b-light\"> <span class=\"h4 font-bold m-t block\">5,860</span> <small class=\"text-muted m-b block\">平均值</small> </div>\r\n");
      out.write("                      <div class=\"col-xs-3 b-r b-light\"> <span class=\"h4 font-bold m-t block\">10,450</span> <small class=\"text-muted m-b block\">最小值</small> </div>\r\n");
      out.write("                      <div class=\"col-xs-3 b-r b-light\"> <span class=\"h4 font-bold m-t block\">21,230</span> <small class=\"text-muted m-b block\">最大值</small> </div>\r\n");
      out.write("                      <div class=\"col-xs-3\"> <span class=\"h4 font-bold m-t block\">80%</span> <small class=\"text-muted m-b block\">占比</small> </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                  </footer>\r\n");
      out.write("                </section>\r\n");
      out.write("              </div>\r\n");
      out.write("              <div class=\"col-md-4\">\r\n");
      out.write("                <section class=\"panel panel-default\">\r\n");
      out.write("                  <header class=\"panel-heading font-bold\">客户销售排行</header>\r\n");
      out.write("                  <div class=\"bg-light dk wrapper\"> <span class=\"pull-right\"></span> \r\n");
      out.write("                  <!--<span class=\"h4\">$540<br>\r\n");
      out.write("                    <small class=\"text-muted\">+1.05(2.15%)</small> </span>-->\r\n");
      out.write("                    <div class=\"text-center m-b-n m-t-sm\">\r\n");
      out.write("                           <div id=\"flot-mainbar\" style=\"height:135px\"></div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                  </div>\r\n");
      out.write("                  <div class=\"panel-body\">\r\n");
      out.write("                    <div> <span class=\"text-muted\">客户订单总数量</span> <span class=\"h3 block\">2500</span> </div>\r\n");
      out.write("                    <div class=\"line pull-in\"></div>\r\n");
      out.write("                    <div class=\"row m-t-sm\">\r\n");
      out.write("                      <div class=\"col-xs-4\"> <small class=\"text-muted block\">最大销售量占比客户</small> <span>客户A</span> </div>\r\n");
      out.write("                      <div class=\"col-xs-4\"> <small class=\"text-muted block\">最大报价单占比客户</small> <span>客户B</span> </div>\r\n");
      out.write("                      <div class=\"col-xs-4\"> <small class=\"text-muted block\">当月销售订单最大占比</small> <span>客户C</span> </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                  </div>\r\n");
      out.write("                </section>\r\n");
      out.write("              </div>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"row\">\r\n");
      out.write("              <div class=\"col-md-8\">\r\n");
      out.write("                <h4 class=\"m-t-none\">通知</h4>\r\n");
      out.write("                <ul class=\"list-group gutter list-group-lg list-group-sp sortable\">\r\n");
      out.write("                  <li class=\"list-group-item box-shadow\"> <a href=\"#\" class=\"pull-right\" data-dismiss=\"alert\"> <i class=\"fa fa-times icon-muted\"></i> </a> <span class=\"pull-left media-xs\"> <i class=\"fa fa-sort icon-muted fa m-r-sm\"></i> <a href=\"#todo-1\" data-toggle=\"class:text-lt text-success\" > <i class=\"fa fa-square-o fa-fw text\"></i> <i class=\"fa fa-check-square-o fa-fw text-active text-success\"></i> </a> </span>\r\n");
      out.write("                    <div class=\"clear \" id=\"todo-1\"><a href=\"");
      out.print(path);
      out.write("/jsp/evaluation/calcHistory.jsp\" target=\"main\" > <i class=\"fa fa-angle-right\"></i><span> S20170701CC-ST001-V002测算单已提交成功！</span> </a>  </div>\r\n");
      out.write("                  </li>\r\n");
      out.write("                  <li class=\"list-group-item box-shadow\"> <a href=\"#\" class=\"pull-right\" data-dismiss=\"alert\"> <i class=\"fa fa-times icon-muted\"></i> </a> <span class=\"pull-left media-xs\"> <i class=\"fa fa-sort icon-muted fa m-r-sm\"></i> <a href=\"#todo-2\" data-toggle=\"class:text-lt text-danger\"> <i class=\"fa fa-square-o fa-fw text\"></i>    <i class=\"fa fa-check-square-o fa-fw text-active text-danger\"></i> </a> </span>\r\n");
      out.write("                    <div class=\"clear\" id=\"todo-2\"><a href=\"");
      out.print(path);
      out.write("/jsp/evaluation/calcHistory.jsp\" target=\"main\" > <i class=\"fa fa-angle-right\"></i><span> S20170701CC-ST001-V001测算单已提交成功！</span> </a> </div>\r\n");
      out.write("                  </li>\r\n");
      out.write("                  <li class=\"list-group-item box-shadow\"> <a href=\"#\" class=\"pull-right\" data-dismiss=\"alert\"> <i class=\"fa fa-times icon-muted\"></i> </a> <span class=\"pull-left media-xs\"> <i class=\"fa fa-sort icon-muted fa m-r-sm\"></i> <a href=\"#todo-3\" data-toggle=\"class:text-lt\"> <i class=\"fa fa-square-o fa-fw text\"></i> <i class=\"fa fa-check-square-o fa-fw text-active text-success\"></i> </a> </span>\r\n");
      out.write("                    <div class=\"clear\" id=\"todo-3\"> S20170630312未完成的测算单！ </div>\r\n");
      out.write("                  </li>\r\n");
      out.write("\r\n");
      out.write("                  <li class=\"list-group-item box-shadow\"> <a href=\"#\" class=\"pull-right\" data-dismiss=\"alert\"> <i class=\"fa fa-times icon-muted\"></i> </a> <span class=\"pull-left media-xs\"> <i class=\"fa fa-sort icon-muted fa m-r-sm\"></i> <a href=\"#todo-5\" data-toggle=\"class:text-lt\"> <i class=\"fa fa-square-o fa-fw text\"></i> <i class=\"fa fa-check-square-o fa-fw text-active text-success\"></i> </a> </span>\r\n");
      out.write("                    <div class=\"clear\" id=\"todo-5\"><a href=\"calcHistory.jsp\" target=\"main\" > <i class=\"fa fa-angle-right\"></i><span> S20170630312测算单已通过审核！ </span> </a></div>\r\n");
      out.write("                  </li>\r\n");
      out.write("                  <li class=\"list-group-item box-shadow\"> <a href=\"#\" class=\"pull-right\" data-dismiss=\"alert\"> <i class=\"fa fa-times icon-muted\"></i> </a> <span class=\"pull-left media-xs\"> <i class=\"fa fa-sort icon-muted fa m-r-sm\"></i> <a href=\"#todo-6\" data-toggle=\"class:text-lt\"> <i class=\"fa fa-square-o fa-fw text\"></i> <i class=\"fa fa-check-square-o fa-fw text-active text-success\"></i> </a> </span>\r\n");
      out.write("                    <div class=\"clear\" id=\"todo-6\"> S20170630312测算单未通过审核！ </div>\r\n");
      out.write("                  </li>\r\n");
      out.write("                </ul>\r\n");
      out.write("              </div>\r\n");
      out.write("              <div class=\"col-md-4\">\r\n");
      out.write("                <section class=\"panel panel-default\">\r\n");
      out.write("                  <header class=\"panel-heading font-bold\">产品销售排行</header>\r\n");
      out.write("                  <div class=\"bg-light dk wrapper\"> \r\n");
      out.write("                    <div class=\"text-center m-b-n m-t-sm\">\r\n");
      out.write("                      <div id=\"flot-mainbar2\" style=\"height:135px\"></div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                  </div>\r\n");
      out.write("                  <div class=\"panel-body\">\r\n");
      out.write("                    <div> <span class=\"text-muted\">产品销售总量</span> <span class=\"h3 block\">3000</span> </div>\r\n");
      out.write("                    <div class=\"line pull-in\"></div>\r\n");
      out.write("                    <div class=\"row m-t-sm\">\r\n");
      out.write("                      <div class=\"col-xs-4\"> <small class=\"text-muted block\">最大销售量占比产品</small> <span>乳胶枕</span> </div>\r\n");
      out.write("                      <div class=\"col-xs-4\"> <small class=\"text-muted block\">最大报价占比产品</small> <span>欧式床上五件套</span> </div>\r\n");
      out.write("                      <div class=\"col-xs-4\"> <small class=\"text-muted block\">最大当月销量占比</small> <span>乳胶枕</span> </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                  </div>\r\n");
      out.write("                </section>\r\n");
      out.write("              </div>\r\n");
      out.write("            </div>\r\n");
      out.write("            \r\n");
      out.write("          </section>\r\n");
      out.write("        </section>\r\n");
      out.write("        <a href=\"#\" class=\"hide nav-off-screen-block\" data-toggle=\"class:nav-off-screen\" data-target=\"#nav\"></a> </section>\r\n");
      out.write("      <aside class=\"bg-light lter b-l aside-md hide\" id=\"notes\">\r\n");
      out.write("        <div class=\"wrapper\">通知</div>\r\n");
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
