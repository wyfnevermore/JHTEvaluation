package org.apache.jsp.jsp.productContract;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class createContract_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("  <link rel=\"stylesheet\" href=\"");
      out.print(path);
      out.write("/Script/datatables/datatables.css\" type=\"text/css\" >\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/Script/jquery.min.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/Script/app.v2.js\"></script>\n");
      out.write("  <script src=\"");
      out.print(path);
      out.write("/Script/bootstrap-table.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/js/productContract/createContract.js\"></script>\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("\tfunction jump2temp(){\n");
      out.write("\t\tlocation.href = \"/JHTEvaluation/jsp/productContract/contractOrder.jsp\";\n");
      out.write("\t}\n");
      out.write("</script>\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("  <div>\n");
      out.write("    <section class=\"scrollable padder\">\n");
      out.write("    <div class=\"m-b-md\">\n");
      out.write("      <h3 class=\"m-b-none\">导入工单</h3>\n");
      out.write("    </div>\n");
      out.write("    <div id=\"calForm\" class=\"m-b-sm\">\n");
      out.write("    <section style=\"width: 100%;\" class=\"panel panel-default\">\n");
      out.write("\t<header class=\"panel-heading\">\n");
      out.write("\t\n");
      out.write("\t</header>\n");
      out.write("\t\t\t\n");
      out.write("\t<div style=\"\" class=\"panel-body\">\n");
      out.write("\t\t<section style=\"width: 60%;\" class=\"panel panel-default\">\n");
      out.write("\t\t<header>工单信息</header>\n");
      out.write("\t\t<div style=\"\" class=\"panel-body\">\n");
      out.write("\t\t<div class=\"tab-content\" id=\"tabDivs\">\n");
      out.write("\t\t\t<div class=\"tab-pane active\" style=\"\" id=\"specItem0\">\n");
      out.write("\t\t\t   <table class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("               <thead>\n");
      out.write("                 <tr>\n");
      out.write("                   <th style=\"width:100px\">成品名称</th>\n");
      out.write("                   <th style=\"width:100px\">规格</th>\n");
      out.write("                   <th style=\"width:100px\">报价</th>\n");
      out.write("                   <th style=\"width:80px;\">操作</th>\n");
      out.write("                 </tr>\n");
      out.write("               </thead>\n");
      out.write("               <tbody id=\"sptbody\">\n");
      out.write("                 <tr>\n");
      out.write("                   <td></td>\n");
      out.write("                   <td></td>\n");
      out.write("                   <td></td>\n");
      out.write("                   <td><a onClick=\"addJobOrder();\" href=\"javaScript:void(0);\"><i class=\"fa fa-plus\"></i></a>&nbsp;\n");
      out.write("             \t\t\t<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a>\n");
      out.write("             \t\t\t&nbsp;<a onClick=\"editJobOrder()\" href=\"javaScript:;\"><i class=\"fa fa-pencil\"></i></a>\n");
      out.write("             \t\t\t</td>\n");
      out.write("                 </tr>\n");
      out.write("               </tbody>\n");
      out.write("             </table>\n");
      out.write("             </div>\n");
      out.write("             </div>\n");
      out.write("             </div>\n");
      out.write("             </section>\n");
      out.write("          \n");
      out.write("           <div style=\" margin-right: 20px; float: right\">\n");
      out.write("           <a class=\"btn btn-s-md btn-primary\" style=\"width:180px\" href=\"javaScript:void(0);\" onclick=\"jump2temp();\">手动生成加工合同</a>\n");
      out.write("   \t       <a class=\"btn btn-s-md btn-primary\" style=\"width:180px\" href=\"javaScript:void(0);\" onclick=\"createContract();\">生成加工合同</a>\n");
      out.write("         </div>\n");
      out.write("         </div>\n");
      out.write("           </section>\n");
      out.write("         \n");
      out.write(" <!--<div class=\"modal fade\" id=\"addWorkOrder\">\n");
      out.write("    <div class=\"modal-dialog\" style=\"width:850px; height: 650px;\">\n");
      out.write("      <div style=\"background-color: #ffffff; width: 100%; height: 640px;overflow:auto;\" class=\"modal-content\" >\n");
      out.write("        <div style=\"padding: 5px;\" class=\"modal-body\">\n");
      out.write("        \t<table style=\"text-align: right;\" class=\"table b-t b-light text-sm\">\n");
      out.write("              <tbody id=\"addma1\">\n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"80px;\"><label>成品：</label></td>\n");
      out.write("                  <td><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"80px;\"><label>报价：</label></td>\n");
      out.write("                  <td><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"80px;\"><label>规格：</label></td>\n");
      out.write("                  <td><select style=\"width:160px;\" class=\"form-control\">\n");
      out.write("\t                    <option value=\"0\">S/B</option>\n");
      out.write("\t                    <option value=\"1\">D/B</option>\n");
      out.write("\t                    <option value=\"2\">Q/B</option>\n");
      out.write("\t                  </select></td>\n");
      out.write("\t                <td><a href=\"#\" style=\"width:60px;height:40px;\"class=\"btn btn-s-md btn-default\">筛选</a></td> \n");
      out.write("                </tr> \n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("\t\t\t<section class=\"panel panel-default\">\n");
      out.write("\t          <div class=\"table-responsive\">\n");
      out.write("                <table id=\"contractTable\" style=\"width: 100%;border-collapse: collapse;table-layout: fixed;\" class=\"table table-striped b-t b-light text-sm\">\n");
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
      out.write("  </div> -->\n");
      out.write("  \n");
      out.write("  <div class=\"modal fade\" id=\"editWorkOrder\">\n");
      out.write("    <div class=\"modal-dialog\" style=\"width:850px; height: 650px;\">\n");
      out.write("      <div style=\"background-color: #ffffff; width: 100%; height: 640px;overflow:auto;\" class=\"modal-content\" >\n");
      out.write("        <div style=\"padding: 5px;\" class=\"modal-body\">\n");
      out.write("        \t<table style=\"text-align: right; margin-top:5px;margin-bottom:5px\" class=\"table b-t b-light text-sm\">\n");
      out.write("              <tbody id=\"editHead\">\n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"90px;\"><label>成品名称：</label></td>\n");
      out.write("                  <td><input name=\"materialName\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"90px;\"><label>成品SKU：</label></td>\n");
      out.write("                  <td><input name=\"materialSku\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"90px;\"><label>序号：</label></td>\n");
      out.write("                  <td><input name=\"seq\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                </tr> \n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"90px;\"><label>部门：</label></td>\n");
      out.write("                  <td><input name=\"department\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"90px;\"><label>生成时间：</label></td>\n");
      out.write("                  <td><input id=\"createTime\" name=\"createTime\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td hidden=\"hidden\"><input name=\"status\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                </tr> \n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("\t\t\t<section class=\"panel panel-default\">\n");
      out.write("\t          <div class=\"table-responsive\">\n");
      out.write("                <table id=\"editLine\" style=\"width: 100%;border-collapse: collapse;table-layout: fixed;\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("                \n");
      out.write("                </table>\n");
      out.write("              </div>\n");
      out.write("           \n");
      out.write("              </section>\t\n");
      out.write("              <div style=\"position:fixed; right:20px; bottom:0px; z-index:9999; float: right\">\n");
      out.write("                <a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px\" href=\"javaScript:void(0);\" onclick=\"updateJob();\">保存</a>\n");
      out.write("                <a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px\" href=\"javaScript:void(0);\" onclick=\"updateJob();\">发送</a>\n");
      out.write("            \t<a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px\" href=\"javaScript:void(0);\" onclick=\"updateJob();\">确认添加</a>\n");
      out.write("               </div> \n");
      out.write("        </div>\n");
      out.write("      \n");
      out.write("      </div>\n");
      out.write("    </div>\n");
      out.write("  </div> \n");
      out.write("  \n");
      out.write("  <div class=\"modal fade\" id=\"addJoLine\">\n");
      out.write("    <div class=\"modal-dialog\" style=\"width: 700px\">\n");
      out.write("      <div class=\"modal-content\">\n");
      out.write("        <div class=\"modal-body\">\n");
      out.write("          <div class=\"row\">\n");
      out.write("          <form class=\"form-horizontal\" data-validate=\"parsley\" method=\"post\" onsubmit=\"return false\">\n");
      out.write("            <table style=\"text-align: right;\"\n");
      out.write("              class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("              <tbody id=\"editLineDetail\">\n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"100px;\"><label>物料名称：</label></td>\n");
      out.write("                  <td><input name=\"materialName\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"100px;\"><label>物料SKU：</label></td>\n");
      out.write("                  <td><input name=\"materialSku\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                </tr> \n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"100px;\"><label>数量：</label></td>\n");
      out.write("                  <td><input name=\"quantity\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"100px;\"><label>产出率：</label></td>\n");
      out.write("                  <td><input name=\"productivity\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                </tr> \n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("            <div>\n");
      out.write("              <a style=\"width: 80px; height: 30px; float: right; margin-right: 35px\" href=\"javascript:updateJobLineDetail();\"class=\"btn btn-default btn-sm\">确定</a>\n");
      out.write("            </div>\n");
      out.write("              </form>\n");
      out.write("          </div>\n");
      out.write("        </div>\n");
      out.write("      </div>\n");
      out.write("    </div>\n");
      out.write("  </div>\n");
      out.write("  \n");
      out.write("  <!--生成工单  -->\n");
      out.write("\t<div class=\"modal fade\" id=\"createJobOrder\">\n");
      out.write("\t\t<div class=\"modal-dialog\" style=\"width: 800px\">\n");
      out.write("\t\t\t<div class=\"modal-content\">\n");
      out.write("\t\t\t\t<div class=\"modal-body\">\n");
      out.write("\t\t\t\t\t<div class=\"row\">\n");
      out.write("\t\t\t\t\t<div style=\"width:50%;height:400px;float:left\">\n");
      out.write("\t\t\t\t\t<div class=\"row text-sm wrapper\">\n");
      out.write("               <table style=\"text-align: right;\" class=\"table b-t b-light text-sm\">\n");
      out.write("              <tbody id=\"addma1\">\n");
      out.write("                <tr>\n");
      out.write("                 <td width=\"80px;\"><label>采购单号：</label></td>\n");
      out.write("                  <td ><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                   <td width=\"80px;\"><label>销售订单号：</label></td>\n");
      out.write("                  <td ><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                </tr>\n");
      out.write("                <tr>\n");
      out.write("                <td width=\"80px;\"><label>物料SKU：</label></td>\n");
      out.write("                 <td><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                 <td colspan=\"2\"><a href=\"#\" style=\"width:105px;height:35px;\"class=\"btn btn-default btn-sm\"><span style=\"font-size:20px\">筛选</span></a></td>\n");
      out.write("                </tr>\n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("              </div>\n");
      out.write("\t\t\t\t\t<section class=\"panel panel-default\"  >\n");
      out.write("\t\t\t\t\t <table id=\"jobOrderTable\" style=\"text-align: center;\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t    </table>\n");
      out.write("\t\t\t\t    </section>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"width:49%;height:400px;float:right\">\n");
      out.write("\t\t\t\t\t<section style=\"width: 100%;\" class=\"panel panel-default\" id= \"sections\">\n");
      out.write("\t\t\t\t\t <header class=\"panel-heading\">工单预览 </header>\n");
      out.write("\t\t\t\t\t \n");
      out.write("\t\t\t\t\t<div class=\"panel-body\">\n");
      out.write("\t\t\t\t\t<ul class=\"nav nav-tabs nav-justified\" id=\"addTabs\">\n");
      out.write("\t\t\t\t      <!-- <li class=\"active\"><a href=\"#jobOrder1\" data-toggle=\"tab\">空调被</a></li> -->\n");
      out.write("\t\t\t\t\t</ul>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t\t<div style=\"height:300px\" class=\"tab-content\" id=\"tabContent\">\n");
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
      out.write("\t\t\t\t    \n");
      out.write("\t\t\t\t\t<div style=\" margin-right: 20px; float: right\">\n");
      out.write("\t\t\t\t\t <a class=\"btn btn-s-md btn-primary-W\" style=\"width:80px\" href=\"javaScript:void(0);\" onclick=\"updateJobOrder();\">保存工单</a>\n");
      out.write("   \t      \t\t\t <a class=\"btn btn-s-md btn-primary-W\" style=\"width:80px\" href=\"javaScript:void(0);\" onclick=\"updateJobOrder();\">确定</a>\n");
      out.write("         \t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("  \n");
      out.write("      </div>\n");
      out.write("      </section>\n");
      out.write("      </div> \n");
      out.write(" \n");
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
