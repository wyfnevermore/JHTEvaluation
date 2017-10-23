package org.apache.jsp.jsp.salesOrder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class salesHistory_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("<title>Insert title here</title>\n");
      out.write("<meta charset=\"utf-8\" />\n");
      out.write("  <title>JHT测算平台 | Web Application</title>\n");
      out.write("  <meta name=\"description\" content=\"app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav\" />\n");
      out.write("  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" />\n");
      out.write("  <link rel=\"stylesheet\" href=\"");
      out.print(path);
      out.write("/css/app.v2.css\" type=\"text/css\" />\n");
      out.write("  <link rel='stylesheet' href=\"");
      out.print(path);
      out.write("/css/bootstrap-datetimepicker.min.css\" type='text/css'>\n");
      out.write("  <link rel=\"stylesheet\" href=\"");
      out.print(path);
      out.write("/css/font.css\" type=\"text/css\" />\n");
      out.write("  <link rel=\"stylesheet\" href=\"");
      out.print(path);
      out.write("/Script/datatables/datatables.css\" type=\"text/css\" >\n");
      out.write("  <script src=\"");
      out.print(path);
      out.write("/Script/app.v2.js\"></script>\n");
      out.write("  <script src=\"");
      out.print(path);
      out.write("/Script/charts/sparkline/jquery.sparkline.min.js\" ></script>\n");
      out.write("  <script src=\"");
      out.print(path);
      out.write("/Script/bootstrap-table.js\"></script>\n");
      out.write("  <script src=\"");
      out.print(path);
      out.write("/js/salesOrder/salesHistory.js\"></script>\n");
      out.write("  <script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/parsley/parsley.min.js\"></script>\n");
      out.write("  <script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/bootstrap.min.js\"></script>\n");
      out.write("  <script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/datepicker/bootstrap-datetimepicker.js\" charset=\"UTF-8\">\n");
      out.write("\n");
      out.write("  </script>\n");
      out.write("\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("<section class=\"vbox\">\n");
      out.write("  <section>\n");
      out.write("    <section class=\"hbox stretch\"> \n");
      out.write("      <section id=\"content\">\n");
      out.write("        <section class=\"vbox\">\n");
      out.write("          <section class=\"scrollable padder\">\n");
      out.write("            <section class=\"panel panel-default\">\n");
      out.write("              <header class=\"panel-heading\">  <h3 class=\"m-b-none\">历史销售订单</h3> </header>\n");
      out.write("              <div class=\"row text-sm wrapper\">\n");
      out.write("               <table style=\"text-align: right;\" class=\"table b-t b-light text-sm\">\n");
      out.write("              <tbody id=\"addma1\">\n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"80px;\"><label>订单单号：</label></td>\n");
      out.write("                  <td width=\"200px;\"><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"80px;\"><label>客户：</label></td>\n");
      out.write("                  <td width=\"200px;\"><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"80px;\"><label>测算时间：</label></td>\n");
      out.write("                  <td width=\"400px;\"><input type=\"text\" class=\"form-control\" id=\"evalStartTime\" value=\"2017-01-01 00:00\" style=\"float:left;width:47%\" class=\"form-control\"><label style=\"margin-top:6px;margin-right:3px;\">－</label> \n");
      out.write("                  <input type=\"text\" class=\"form-control\" id=\"evalEndTime\" value=\"2017-01-01 23:59\" style=\"float:right;width:47%\" class=\"form-control\"></td>\n");
      out.write("                  <td><label>创建人：</label></td>\n");
      out.write("                  <td><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td><a href=\"#\" style=\"width:60px;height:40px;\"class=\"btn btn-s-md btn-default\">筛选</a></td>\n");
      out.write("                </tr> \n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("              </div>\n");
      out.write("              <div class=\"table-responsive\">\n");
      out.write("                <table id=\"salesHistory\" style=\"width: 100%;border-collapse: collapse;table-layout: fixed;\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("                </table>\n");
      out.write("              </div>\n");
      out.write("            </section>\n");
      out.write("          </section>\n");
      out.write("        </section>\n");
      out.write("    </section>\n");
      out.write("  </section>\n");
      out.write("</section>\n");
      out.write("</section>\n");
      out.write("\n");
      out.write("\n");
      out.write("<!--生成工单合同  -->\n");
      out.write("\t<div class=\"modal fade\" id=\"jobOrder\">\n");
      out.write("\t\t<div class=\"modal-dialog\" style=\"width: 800px\">\n");
      out.write("\t\t\t<div class=\"modal-content\">\n");
      out.write("\t\t\t\t<div class=\"modal-body\">\n");
      out.write("\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"width:50%;height:400px;float:left\">\n");
      out.write("\t\t\t\t\t<section class=\"panel panel-default\" >\n");
      out.write("             \t     <header class=\"panel-heading\"> 历史销售订单</header>\n");
      out.write("\t\t\t\t\t <table id=\"hisOrderTable\" style=\"text-align: center;\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t    </table>\n");
      out.write("\t\t\t\t    </section>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"width:49%;height:400px;float:right\">\n");
      out.write("\t\t\t\t\t<section style=\"width: 100%;\" class=\"panel panel-default\" id= \"sections\">\n");
      out.write("\t\t\t\t\t <header class=\"panel-heading\">工单预览 </header>\n");
      out.write("\t\t\t\t\t 批量替换测试单版本：<select>\n");
      out.write("\t\t\t\t\t \t<option value=\"1\">V001</option>\n");
      out.write("\t\t\t\t\t \t<option value=\"2\">V002</option>\n");
      out.write("\t\t\t\t\t \t<option value=\"3\">V003</option>\n");
      out.write("\t\t\t\t\t </select><input type=\"button\" value=\"替换\" />\n");
      out.write("\t\t\t\t\t<div class=\"panel-body\">\n");
      out.write("\t\t\t\t\t<ul class=\"nav nav-tabs nav-justified\" id=\"addTabs\">\n");
      out.write("\t\t\t\t\t</ul>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"height:300px\" class=\"tab-content\" id=\"tabContent\">\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</section>\n");
      out.write("\t\t\t\t    </div>\n");
      out.write("\t\t\t\t    \n");
      out.write("\t\t\t\t\t<div style=\" margin-right: 20px; float: right\">\n");
      out.write("   \t      \t\t\t <a class=\"btn btn-s-md btn-primary-W\" style=\"width:80px\" href=\"javaScript:void(0);\" onclick=\"updateJobOrder();\">确定</a>\n");
      out.write("         \t\t    </div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\n");
      out.write("\n");
      out.write("<!--生成生产加工合同  -->\n");
      out.write("\t<div class=\"modal fade\" id=\"buildMOrder\">\n");
      out.write("\t\t<div class=\"modal-dialog\" style=\"width: 800px\">\n");
      out.write("\t\t\t<div class=\"modal-content\">\n");
      out.write("\t\t\t\t<div class=\"modal-body\">\n");
      out.write("\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"width:50%;height:400px;float:left\">\n");
      out.write("\t\t\t\t\t<section class=\"panel panel-default\"  >\n");
      out.write("\t\t\t\t\t<header><h5>销售订单行</h5></header>\n");
      out.write("\t\t\t\t\t <section class=\"panel panel-default\"  >\n");
      out.write("\t\t\t\t\t <table id=\"jobOrderTable\" style=\"text-align: center;\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t    </table>\n");
      out.write("\t\t\t\t    </section>\n");
      out.write("\t\t\t\t    </section>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"width:49%;height:400px;float:right\">\n");
      out.write("\t\t\t\t\t<section style=\"width: 100%;\" class=\"panel panel-default\" id= \"sections1\">\n");
      out.write("\t\t\t\t\t <header class=\"panel-heading\">工单预览 </header>\n");
      out.write("\t\t\t\t\t \n");
      out.write("\t\t\t\t\t<div class=\"panel-body\">\n");
      out.write("\t\t\t\t\t<ul class=\"nav nav-tabs nav-justified\" id=\"addTabs1\">\n");
      out.write("\t\t\t\t      <!-- <li class=\"active\"><a href=\"#jobOrder1\" data-toggle=\"tab\">空调被</a></li> -->\n");
      out.write("\t\t\t\t\t</ul>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"height:300px\" class=\"tab-content\" id=\"tabContent1\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<!-- <div class=\"tab-pane\"  style=\"margin-bottom:20px\" id=\"jobOrder1\">\n");
      out.write("\t\t\t\t\t<label style=\"height: 40px;width:150px;float:right;\" class=\"btn btn-sm btn-default\">\n");
      out.write("                      <input type=\"checkbox\" name=\"options\">  加入生产加工合同 </label>\n");
      out.write("\t\t\t     \t</div> -->\n");
      out.write("\t\t\t     \t\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t</section>\n");
      out.write("\t\t\t\t    </div>\n");
      out.write("\t\t\t\t\t<div style=\" margin-right: 20px; float: right\">\n");
      out.write("\t\t\t\t\t <a class=\"btn btn-s-md btn-primary-W\" style=\"width:80px\" href=\"javaScript:void(0);\" onclick=\"saveContract();\">保存用料单</a>\n");
      out.write("   \t      \t\t\t <a class=\"btn btn-s-md btn-primary-W\" style=\"width:80px\" href=\"javaScript:void(0);\" onclick=\"updateMetar();\">确定</a>\n");
      out.write("         \t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\n");
      out.write("\t\t</div>\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!--生成生产加工合同  -->\n");
      out.write("\t<div class=\"modal fade\" id=\"buildJobOrder\">\n");
      out.write("\t\t<div class=\"modal-dialog\" style=\"width: 800px\">\n");
      out.write("\t\t\t<div class=\"modal-content\">\n");
      out.write("\t\t\t\t<div class=\"modal-body\">\n");
      out.write("\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"width:50%;height:400px;float:left\">\n");
      out.write("\t\t\t\t\t<section class=\"panel panel-default\"  >\n");
      out.write("\t\t\t\t\t<header><h5>销售订单行</h5></header>\n");
      out.write("\t\t\t\t\t <section class=\"panel panel-default\"  >\n");
      out.write("\t\t\t\t\t <table id=\"jobOrderTable\" style=\"text-align: center;\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t    </table>\n");
      out.write("\t\t\t\t    </section>\n");
      out.write("\t\t\t\t    </section>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"width:49%;height:400px;float:right\">\n");
      out.write("\t\t\t\t\t<section style=\"width: 100%;\" class=\"panel panel-default\" id= \"sections1\">\n");
      out.write("\t\t\t\t\t <header class=\"panel-heading\">工单预览 </header>\n");
      out.write("\t\t\t\t\t \n");
      out.write("\t\t\t\t\t<div class=\"panel-body\">\n");
      out.write("\t\t\t\t\t<ul class=\"nav nav-tabs nav-justified\" id=\"addTabs1\">\n");
      out.write("\t\t\t\t      <!-- <li class=\"active\"><a href=\"#jobOrder1\" data-toggle=\"tab\">空调被</a></li> -->\n");
      out.write("\t\t\t\t\t</ul>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"height:300px\" class=\"tab-content\" id=\"tabContent1\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<!-- <div class=\"tab-pane\"  style=\"margin-bottom:20px\" id=\"jobOrder1\">\n");
      out.write("\t\t\t\t\t<label style=\"height: 40px;width:150px;float:right;\" class=\"btn btn-sm btn-default\">\n");
      out.write("                      <input type=\"checkbox\" name=\"options\">  加入生产加工合同 </label>\n");
      out.write("\t\t\t     \t</div> -->\n");
      out.write("\t\t\t     \t\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t</section>\n");
      out.write("\t\t\t\t    </div>\n");
      out.write("\t\t\t\t\t<div style=\" margin-right: 20px; float: right\">\n");
      out.write("\t\t\t\t\t <a class=\"btn btn-s-md btn-primary-W\" style=\"width:80px\" href=\"javaScript:void(0);\" onclick=\"saveContract();\">保存加工合同</a>\n");
      out.write("   \t      \t\t\t <a class=\"btn btn-s-md btn-primary-W\" style=\"width:80px\" href=\"javaScript:void(0);\" onclick=\"updateContract();\">确定</a>\n");
      out.write("         \t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\n");
      out.write("\t\t</div>\n");
      out.write("\t\t\n");
      out.write("\t\n");
      out.write("\t\t\n");
      out.write("\t\t<!--回签 -->\n");
      out.write("\t<div class=\"modal fade\" id=\"signBack\">\n");
      out.write("\t\t<div class=\"modal-dialog\" style=\"width: 600px\">\n");
      out.write("\t\t\t<div class=\"modal-content\">\t\n");
      out.write("\t\t\t\t<div class=\"modal-body\">\n");
      out.write("\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t<div style=\"width:60%;height:50px;\">\n");
      out.write("\t\t\t\t\t<label style=\"font-size:20px; margin-left:40px;\">客户回签文件：</label>\n");
      out.write("\t\t\t\t\t<a style=\"width:100px;height:30px;float:right;\"  href=\"javascript:void(0);\" class=\"btn btn-default btn-sm\"><span style=\"font-size:15px;\">上传合同</span></a>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div style = \"margin-left:40px;margin-right:40px;\">\n");
      out.write("\t\t\t\t\t<section class=\"panel panel-default\" >\n");
      out.write("\t\t\t\t\t<header class=\"panel-heading\">备注：</header>\n");
      out.write("           \t\t\t<div>\n");
      out.write("           \t\t\t<textarea name=\"a\" style=\"width:485px;height:80px;\"></textarea>\n");
      out.write("           \t\t\t</div>\n");
      out.write("           \t\t\t<div style=\" margin-top: 20px; float: right\">\n");
      out.write("            \t<a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px\" href=\"javaScript:void(0);\" onclick=\"updateSignBack();\">提交</a>\n");
      out.write("               </div>\n");
      out.write("              \t\t</section>\t\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t\n");
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
