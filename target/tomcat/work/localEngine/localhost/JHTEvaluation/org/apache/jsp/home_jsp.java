package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class home_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\r\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\r\n");
      out.write("<html lang=\"en\" class=\"app\">\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"utf-8\" />\r\n");
      out.write("<title>JHT测算平台 | Web Application</title>\r\n");
      out.write("<meta name=\"description\"\r\n");
      out.write("\tcontent=\"app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav\" />\r\n");
      out.write("<meta name=\"viewport\"\r\n");
      out.write("\tcontent=\"width=device-width, initial-scale=1, maximum-scale=1\" />\r\n");
      out.write("<link rel=\"stylesheet\" href=\"css/app.v2.css\" type=\"text/css\" />\r\n");
      out.write("<link rel=\"stylesheet\" href=\"Script/calendar/bootstrap_calendar.css\"\r\n");
      out.write("\ttype=\"text/css\" cache=\"false\" />\r\n");
      out.write("<script src=\"Script/app.v2.js\"></script>\r\n");
      out.write("<script src=\"Script/charts/easypiechart/jquery.easy-pie-chart.js\"\r\n");
      out.write("\tcache=\"false\"></script>\r\n");
      out.write("<script src=\"Script/charts/sparkline/jquery.sparkline.min.js\"\r\n");
      out.write("\tcache=\"false\"></script>\r\n");
      out.write("<script src=\"Script/charts/flot/jquery.flot.min.js\" cache=\"false\"></script>\r\n");
      out.write("<script src=\"Script/charts/flot/jquery.flot.tooltip.min.js\"\r\n");
      out.write("\tcache=\"false\"></script>\r\n");
      out.write("<script src=\"Script/charts/flot/jquery.flot.resize.js\" cache=\"false\"></script>\r\n");
      out.write("<script src=\"Script/charts/flot/jquery.flot.grow.js\" cache=\"false\"></script>\r\n");
      out.write("<script src=\"Script/charts/flot/demo.js\" cache=\"false\"></script>\r\n");
      out.write("<script src=\"Script/calendar/bootstrap_calendar.js\" cache=\"false\"></script>\r\n");
      out.write("<script src=\"Script/calendar/demo.js\" cache=\"false\"></script>\r\n");
      out.write("<script src=\"Script/sortable/jquery.sortable.js\" cache=\"false\"></script>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<section class=\"vbox\"> <!-- 头部  --> <header\r\n");
      out.write("\t\tclass=\"bg-dark dk header navbar navbar-fixed-top-xs\">\r\n");
      out.write("\t<div align=\"right\" style=\"width: 120px;\" class=\"navbar-header\">\r\n");
      out.write("\t\t<a class=\"navbar-brand\"><img\r\n");
      out.write("\t\t\tstyle=\"width: 84px; height: 35px; margin-top: 5px;\"\r\n");
      out.write("\t\t\tsrc=\"images/homelogoh.png\" class=\"m-r-hl\"></a>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<ul class=\"nav navbar-nav hidden-xs\">\r\n");
      out.write("\t\t<li><a class=\"navbar-brand\">万斯集团业务报价系统</a></li>\r\n");
      out.write("\t</ul>\r\n");
      out.write("\t<ul class=\"nav navbar-nav navbar-right hidden-xs nav-user\">\r\n");
      out.write("\t\t<li class=\"hidden-xs\"><a href=\"#\" class=\"dropdown-toggle dk\"\r\n");
      out.write("\t\t\tdata-toggle=\"dropdown\"> <i class=\"fa fa-bell\"></i> <span\r\n");
      out.write("\t\t\t\tclass=\"badge badge-sm up bg-danger m-l-n-sm count\">2</span>\r\n");
      out.write("\t\t</a> <section class=\"dropdown-menu aside-xl\"> <section\r\n");
      out.write("\t\t\t\tclass=\"panel bg-white\"> <header\r\n");
      out.write("\t\t\t\tclass=\"panel-heading b-light bg-light\"> <strong>你有\r\n");
      out.write("\t\t\t\t<span class=\"count\">2</span> 个通知\r\n");
      out.write("\t\t\t</strong> </header>\r\n");
      out.write("\t\t\t<div class=\"list-group list-group-alt animated fadeInRight\">\r\n");
      out.write("\t\t\t\t<a href=\"#\" class=\"media list-group-item\"> <span\r\n");
      out.write("\t\t\t\t\tclass=\"pull-left thumb-sm text-center\"> <i\r\n");
      out.write("\t\t\t\t\t\tclass=\"fa fa-envelope-o fa-2x text-success\"></i>\r\n");
      out.write("\t\t\t\t</span> <span class=\"media-body block m-b-none\">你有一封新邮件<br> <small\r\n");
      out.write("\t\t\t\t\t\tclass=\"text-muted\">1 分钟之前</small>\r\n");
      out.write("\t\t\t\t</span>\r\n");
      out.write("\t\t\t\t</a> <a href=\"#\" class=\"media list-group-item\"> <span\r\n");
      out.write("\t\t\t\t\tclass=\"pull-left thumb-sm\"> <img\r\n");
      out.write("\t\t\t\t\t\tsrc=\"images/avatar_default.jpg\" alt=\"John said\" class=\"img-circle\">\r\n");
      out.write("\t\t\t\t</span> <span class=\"media-body block m-b-none\">\r\n");
      out.write("\t\t\t\t\t\tS20170629123报价单已生成，请查看<br> <small class=\"text-muted\">10\r\n");
      out.write("\t\t\t\t\t\t\t分钟之前</small>\r\n");
      out.write("\t\t\t\t</span>\r\n");
      out.write("\t\t\t\t</a> <a href=\"#\" class=\"media list-group-item\"> <span\r\n");
      out.write("\t\t\t\t\tclass=\"media-body block m-b-none\"> 报价单月初汇总已出<br> <small\r\n");
      out.write("\t\t\t\t\t\tclass=\"text-muted\">1 小时之前</small>\r\n");
      out.write("\t\t\t\t</span>\r\n");
      out.write("\t\t\t\t</a>\r\n");
      out.write("\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<footer class=\"panel-footer text-sm\"> <a href=\"#notes\"\r\n");
      out.write("\t\t\t\tdata-toggle=\"class:show animated fadeInRight\">查看所有通知</a> </footer> </section> </section></li>\r\n");
      out.write("\t\t</a>\r\n");
      out.write("\t\t<section class=\"dropdown-menu aside-xl animated fadeInUp\"> <section\r\n");
      out.write("\t\t\tclass=\"panel bg-white\"> </section> </section>\r\n");
      out.write("\t\t</li>\r\n");
      out.write("\t\t<li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\"\r\n");
      out.write("\t\t\tdata-toggle=\"dropdown\"> <span class=\"thumb-sm avatar pull-left\">\r\n");
      out.write("\t\t\t\t\t<img src=\"images/avatar_default.jpg\">\r\n");
      out.write("\t\t\t</span> 黄泽宇 <b class=\"caret\"></b>\r\n");
      out.write("\t\t</a>\r\n");
      out.write("\t\t\t<ul class=\"dropdown-menu animated fadeInRight\">\r\n");
      out.write("\t\t\t\t<span class=\"arrow top\"></span>\r\n");
      out.write("\t\t\t\t<li><a href=\"#\">设置</a></li>\r\n");
      out.write("\t\t\t\t<li><a href=\"#\"> <span class=\"badge bg-danger pull-right\">3</span>\r\n");
      out.write("\t\t\t\t\t\t通知\r\n");
      out.write("\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t<li class=\"divider\"></li>\r\n");
      out.write("\t\t\t\t<li><a href=\"modal.lockme.html\" data-toggle=\"ajaxModal\">登出</a>\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t</ul></li>\r\n");
      out.write("\t</ul>\r\n");
      out.write("\t</header> <!--导航  --> <section class=\"hbox stretch\"> <!-- .aside --> <aside\r\n");
      out.write("\t\tclass=\"bg-dark lter aside-md hidden-print\" id=\"nav\"> <section\r\n");
      out.write("\t\tclass=\"vbox\"> <section class=\"w-f scrollable\">\r\n");
      out.write("\t<div class=\"slim-scroll\" data-height=\"auto\"\r\n");
      out.write("\t\tdata-disable-fade-out=\"true\" data-distance=\"0\" data-size=\"5px\"\r\n");
      out.write("\t\tdata-color=\"#333333\">\r\n");
      out.write("\t\t<!-- nav -->\r\n");
      out.write("\t\t<header style=\"height:1px;min-height:1px;\"\r\n");
      out.write("\t\t\tclass=\"header bg-primary lter text-center clearfix\"></header>\r\n");
      out.write("\t\t<nav class=\"nav-primary hidden-xs\">\r\n");
      out.write("\t\t<ul id=\"navId\" class=\"nav\">\r\n");
      out.write("\t\t\t<li class=\"active\"><a href=\"main.jsp\" class=\"active\"\r\n");
      out.write("\t\t\t\ttarget=\"main\"> <i class=\"fa fa-dashboard icon\"> <b\r\n");
      out.write("\t\t\t\t\t\tclass=\"bg-danger\"></b>\r\n");
      out.write("\t\t\t\t</i> <span>首页</span>\r\n");
      out.write("\t\t\t</a></li>\r\n");
      out.write("\t\t\t<li><a href=\"#layout\"> <i class=\"fa fa-columns icon\">\r\n");
      out.write("\t\t\t\t\t\t<b class=\"bg-warning\"></b>\r\n");
      out.write("\t\t\t\t</i> <span class=\"pull-right\"> <i class=\"fa fa-angle-down text\"></i>\r\n");
      out.write("\t\t\t\t\t\t<i class=\"fa fa-angle-up text-active\"></i>\r\n");
      out.write("\t\t\t\t</span> <span>测算</span>\r\n");
      out.write("\t\t\t</a>\r\n");
      out.write("\t\t\t\t<ul class=\"nav lt\">\r\n");
      out.write("\t\t\t\t\t<li id=\"histest\"><a href=\"jsp/evaluation/navigation.jsp\"\r\n");
      out.write("\t\t\t\t\t\ttarget=\"main\"> <i class=\"fa fa-angle-right\"></i><span>新建测算</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/evaluation/history/calcHistory.jsp\"\r\n");
      out.write("\t\t\t\t\t\ttarget=\"main\"> <i class=\"fa fa-angle-right\"></i> <span>历史测算</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t</ul></li>\r\n");
      out.write("\t\t\t<li><a href=\"#layout\"> <i class=\"fa fa-columns icon\">\r\n");
      out.write("\t\t\t\t\t\t<b class=\"bg-warning\"></b>\r\n");
      out.write("\t\t\t\t</i> <span class=\"pull-right\"> <i class=\"fa fa-angle-down text\"></i>\r\n");
      out.write("\t\t\t\t\t\t<i class=\"fa fa-angle-up text-active\"></i>\r\n");
      out.write("\t\t\t\t</span> <span>报价</span>\r\n");
      out.write("\t\t\t</a>\r\n");
      out.write("\t\t\t\t<ul class=\"nav lt\">\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/sharePrice/newSharePrice.jsp\" target=\"main\">\r\n");
      out.write("\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i><span>新建报价</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/sharePrice/priceHistory.jsp\" target=\"main\">\r\n");
      out.write("\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i> <span>历史报价</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/sharePrice/priceCheckOut.jsp\" target=\"main\">\r\n");
      out.write("\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i> <span>报价单审批</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t</ul></li>\r\n");
      out.write("\r\n");
      out.write("\t\t\t<li><a href=\"#layout\"> <i class=\"fa fa-flask icon\"> <b\r\n");
      out.write("\t\t\t\t\t\tclass=\"bg-success\"></b>\r\n");
      out.write("\t\t\t\t</i> <span class=\"pull-right\"> <i class=\"fa fa-angle-down text\"></i>\r\n");
      out.write("\t\t\t\t\t\t<i class=\"fa fa-angle-up text-active\"></i>\r\n");
      out.write("\t\t\t\t</span> <span>销售订单</span>\r\n");
      out.write("\t\t\t</a>\r\n");
      out.write("\t\t\t\t<ul class=\"nav lt\">\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/salesOrder/importSales.jsp\" target=\"main\">\r\n");
      out.write("\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i><span>创建销售订单</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/salesOrder/salesHistory.jsp\" target=\"main\">\r\n");
      out.write("\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i><span>历史销售订单</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/salesOrder/salesDetail.jsp\" target=\"main\">\r\n");
      out.write("\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i><span>明细汇总</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a target=\"main\">\r\n");
      out.write("\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i><span>订单审批</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t</ul></li>\r\n");
      out.write(" <li > <a href=\"#\" >  <i class=\"fa fa-envelope-o icon\"> <b class=\"bg-primary dker\"></b> </i><span class=\"pull-right\"> <i class=\"fa fa-angle-down text\"></i> <i class=\"fa fa-angle-up text-active\"></i> </span><span>工单管理</span> </a>\r\n");
      out.write("                  <ul class=\"nav lt\">\r\n");
      out.write("                   <li > <a href=\"jsp/jobOrder/businessDepartmentHisotry.jsp\" target=\"main\" > <i class=\"fa fa-angle-right\"></i><span>工单汇总</span> </a> \r\n");
      out.write("                  </li>\r\n");
      out.write("                </ul>\r\n");
      out.write("                 </li>\r\n");
      out.write("<!-- 2017.10.07 By lee  start -->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("      <li><a href=\"#layout\"> <i class=\"fa fa-flask icon\"> <b\r\n");
      out.write("            class=\"bg-success\"></b>\r\n");
      out.write("        </i> <span class=\"pull-right\"> <i class=\"fa fa-angle-down text\"></i>\r\n");
      out.write("            <i class=\"fa fa-angle-up text-active\"></i>\r\n");
      out.write("        </span> <span>常规物料</span>\r\n");
      out.write("      </a>\r\n");
      out.write("        <ul class=\"nav lt\">\r\n");
      out.write("          \r\n");
      out.write("          <li><a href=\"jsp/conventionalMaterail/conventionalHisotry.jsp\" target=\"main\">\r\n");
      out.write("              <i class=\"fa fa-angle-right\"></i><span>常规物料汇总</span>\r\n");
      out.write("          </a></li>\r\n");
      out.write("        </ul></li>\r\n");
      out.write("\r\n");
      out.write("<!-- 2017.10.07 By lee  end -->\r\n");
      out.write("\r\n");
      out.write("\t\t\t<li><a href=\"#pages\"> <i class=\"fa fa-file-text icon\">\r\n");
      out.write("\t\t\t\t\t\t<b class=\"bg-primary\"></b>\r\n");
      out.write("\t\t\t\t</i> <span class=\"pull-right\"> <i class=\"fa fa-angle-down text\"></i>\r\n");
      out.write("\t\t\t\t\t\t<i class=\"fa fa-angle-up text-active\"></i>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t</span> <span>采购订单</span>\r\n");
      out.write("\t\t\t</a>\r\n");
      out.write("\t\t\t\t<ul class=\"nav lt\">\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/purchaseOrder/importPurchase.jsp\"\r\n");
      out.write("\t\t\t\t\t\ttarget=\"main\"> <i class=\"fa fa-angle-down\"></i><span>创建采购订单</span>\r\n");
      out.write("\t\t\t\t\t</a>\r\n");
      out.write("\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/purchaseOrder/purchaseHistory.jsp\"\r\n");
      out.write("\t\t\t\t\t\ttarget=\"main\"> <i class=\"fa fa-angle-down\"></i><span>历史采购订单</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t</ul></li>\r\n");
      out.write("\t\t\t<li><a href=\"#\"> <i class=\"fa fa-envelope-o icon\"> <b\r\n");
      out.write("\t\t\t\t\t\tclass=\"bg-primary dker\"></b>\r\n");
      out.write("\t\t\t\t</i><span class=\"pull-right\"> <i class=\"fa fa-angle-down text\"></i>\r\n");
      out.write("\t\t\t\t\t\t<i class=\"fa fa-angle-up text-active\"></i>\r\n");
      out.write("\t\t\t\t</span><span>加工合同</span>\r\n");
      out.write("\t\t\t</a>\r\n");
      out.write("\t\t\t\t<ul class=\"nav lt\">\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/productContract/createContract.jsp\"\r\n");
      out.write("\t\t\t\t\t\ttarget=\"main\"> <i class=\"fa fa-angle-right\"></i><span>创建生产加工合同</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/productContract/contractHistory.jsp\"\r\n");
      out.write("\t\t\t\t\t\ttarget=\"main\"> <i class=\"fa fa-angle-right\"></i><span>历史生产加工合同</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/productContract/contractDetail.jsp\"\r\n");
      out.write("\t\t\t\t\t\ttarget=\"main\"> <i class=\"fa fa-angle-right\"></i><span>明细汇总</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"jsp/productContract/contractHistory.jsp\"\r\n");
      out.write("\t\t\t\t\t\ttarget=\"main\"> <i class=\"fa fa-angle-right\"></i><span>审批</span>\r\n");
      out.write("\t\t\t\t\t</a></li>\r\n");
      out.write("\t\t\t\t</ul></li>\r\n");
      out.write("\t\t\t<li><a href=\"#\"> <i class=\"fa fa-pencil icon\"> <b\r\n");
      out.write("\t\t\t\t\t\tclass=\"bg-info\"></b>\r\n");
      out.write("\t\t\t\t</i> <span>系统管理</span>\r\n");
      out.write("\t\t\t</a>\r\n");
      out.write("<ul class=\"nav lt\">\r\n");
      out.write("          <li><a href=\"jsp/productContract/createContract.jsp\"\r\n");
      out.write("            target=\"main\"> <i class=\"fa fa-angle-right\"></i><span>角色管理</span>\r\n");
      out.write("          </a></li>\r\n");
      out.write("          <li><a href=\"jsp/productContract/contractHistory.jsp\"\r\n");
      out.write("            target=\"main\"> <i class=\"fa fa-angle-right\"></i><span>部门管理</span>\r\n");
      out.write("          </a></li>\r\n");
      out.write("          <li><a href=\"jsp/productContract/contractDetail.jsp\"\r\n");
      out.write("            target=\"main\"> <i class=\"fa fa-angle-right\"></i><span>用户管理</span>\r\n");
      out.write("          </a></li>\r\n");
      out.write("        </ul>\r\n");
      out.write("    </li>\r\n");
      out.write("\t\t</ul>\r\n");
      out.write("\t\t</nav>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t</section> </section> </aside> <!--数据显示区内容  -->\r\n");
      out.write("\t<div style=\"width: 100%; height: 100%;\">\r\n");
      out.write("\t\t<iframe frameborder=\"0\" style=\"width: 100%; height: 100%;\"\r\n");
      out.write("\t\t\tsrc=\"main.jsp\" name=\"main\"></iframe>\r\n");
      out.write("\t</div>\r\n");
      out.write("\r\n");
      out.write("\t</section> </section>\r\n");
      out.write("</body>\r\n");
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
