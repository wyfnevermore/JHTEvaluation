package org.apache.jsp.jsp.salesOrder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class importSales_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">  \n");
      out.write("<title>JHT测算平台 | Web Application</title>\n");
      out.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"");
      out.print(path);
      out.write("/css/slideshow.css\">\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(path);
      out.write("/css/app.v2.css\" type=\"text/css\" />\n");
      out.write("<link rel='stylesheet' href=\"");
      out.print(path);
      out.write("/css/bootstrap-datetimepicker.min.css\" type='text/css'>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/Script/jquery.min.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/js/pictureHandle.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/Script/app.v2.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/js/slideshow-jq.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/js/salesOrder/importSales.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/bootstrap.min.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/Script/bootstrap-table.js\"></script>\n");
      out.write("<script src=\"");
      out.print(path);
      out.write("/js/likeSearchInput.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(path);
      out.write("/Script/datepicker/bootstrap-datetimepicker.js\" charset=\"UTF-8\"></script>\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("var sharePriceV = \"");
      out.print(sharePriceV);
      out.write("\";\n");
      out.write("\n");
      out.write("function onclickUpFile(){\n");
      out.write("\t  $(\"#upFile\").click();\n");
      out.write("\t}\n");
      out.write("\n");
      out.write("\tvar photosOriginal = [];\n");
      out.write("\tvar photos = [];\n");
      out.write("\n");
      out.write("\tfunction updateImg(img,imgId){\n");
      out.write("\t  photos.push({\"url\":img , \"width\":332 ,\"height\":250 ,\"caption\":\"<a href='javascript:deleteImg(\"+imgId+\")'>删除</a>&nbsp;&nbsp;<a href='javascript:onclickUpFile()'>添加</a>\",\"id\":imgId});\n");
      out.write("\t  wSlideshow.updatePhotos(\"mysite\", photos)\n");
      out.write("\t}\n");
      out.write("\tfunction deleteImg(id){\n");
      out.write("\t  var index = 0;\n");
      out.write("\t  var len = photos.length;\n");
      out.write("\t  jQuery.each(photos , function(i , photo){\n");
      out.write("\t    if(photo.id == id){\n");
      out.write("\t      index = i;\n");
      out.write("\t      return false;\n");
      out.write("\t    }\n");
      out.write("\t  });\n");
      out.write("\t  if(index != 0 && index != ( photos.length - 1)){\n");
      out.write("\t    var temp = photos.slice(0,index);\n");
      out.write("\t    photos = temp.concat(photos.slice(index+1,photos.length));\n");
      out.write("\t    temp = photosOriginal.slice(0,index);\n");
      out.write("\t    photosOriginal = temp.concat(photosOriginal.slice(index,photosOriginal.length));\n");
      out.write("\t  }else if(index == 0){\n");
      out.write("\t    photos.shift();\n");
      out.write("\t    photosOriginal.shift();\n");
      out.write("\t  }else{\n");
      out.write("\t    photos.pop();\n");
      out.write("\t    photosOriginal.pop();\n");
      out.write("\t  }\n");
      out.write("\t  wSlideshow.updatePhotos(\"mysite\", (len != 1) ? photos:[{\"url\":\"");
      out.print(path);
      out.write("/images/image.png\",\"width\":\"332\",\"height\":\"250\",\"caption\":\"<a href='javascript:onclickUpFile()'>上传图片</a>\"}]);\n");
      out.write("\t}\n");
      out.write("\t(function($){\n");
      out.write("\t  function init(){\n");
      out.write("\t    jQuery(\".mySlideWrap\").css({\"width\":jQuery(\".mySlideWrap\").parent().width()});\n");
      out.write("\t    wSlideshow.render({\n");
      out.write("\t        elementID:\"mysite\",//Dom 渲染的容器\n");
      out.write("\t        nav:\"double_thumbnails\",//看你是否需要有导航功能如果参数配置参数:[none,double_thumbnails] 则会显示图片导航条\n");
      out.write("\t        navLocation:\"left\", //自定标题的位置参数:[top,bottomm,left,right]\n");
      out.write("\t        captionLocation:\"bottom\",//自定标题的位置参数:[top,bottom]\n");
      out.write("\t        transition:\"fade\",//自定效果参数:[top,bottom]slide fade] \n");
      out.write("\t        autoplay:\"1\",//自定义auto play 的次数\n");
      out.write("\t        speed:\"5\",\n");
      out.write("\t        aspectRatio:\"auto\",\n");
      out.write("\t        showControls:\"true\",\n");
      out.write("\t        randomStart:\"false\",\n");
      out.write("\t        images:[\n");
      out.write("\t        {\"url\":\"");
      out.print(path);
      out.write("/images/image.png\",\"width\":\"332\",\"height\":\"250\",\"caption\":\"<a href='javascript:onclickUpFile()'>上传图片</a>\"}\n");
      out.write("\t        ]//定义图片url caption widh height \n");
      out.write("\t      })\n");
      out.write("\t  }\n");
      out.write("\t  $ ? $(init) : document.observe('dom:loaded', init)\n");
      out.write("\t})(window._W && _W.$)\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("</script>\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("  <div>\n");
      out.write("    <section class=\"scrollable padder\">\n");
      out.write("    <div class=\"m-b-md\">\n");
      out.write("      <h3 class=\"m-b-none\">导入销售成品</h3>\n");
      out.write("    </div>\n");
      out.write("    <div id=\"calForm\" class=\"m-b-sm\">\n");
      out.write("      <form class=\"form-horizontal\" data-validate=\"parsley\" method=\"post\" onsubmit=\"return false\" id=\"sharePriceForm\">\n");
      out.write("        <section class=\"panel panel-default\">\n");
      out.write("\t\t<header class=\"panel-heading\"> </header>\n");
      out.write("        <div class=\"panel-body\">\n");
      out.write("          <div style=\"width: 73%; float: left; min-width: 700px;\">\n");
      out.write("            <div class=\"line line-dashed line-lg pull-in\"></div>\n");
      out.write("            <div style=\"width: 100%; float: left; margin: 10px 0px 0px 10px\">\n");
      out.write("            \n");
      out.write("             <div class=\"form-group\">\n");
      out.write("              <table style=\"text-align: right;\" class=\"table b-t b-light text-sm\">\n");
      out.write("              <tbody >\n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"80px;\"><label>客户：</label></td>\n");
      out.write("                  <td><input id=\"customerID\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"80px;\"><label>币种：</label></td>\n");
      out.write("                  <td><select id=\"currency\"  class=\"form-control\">\n");
      out.write("\t                  </select></td> \n");
      out.write("\t              <td width=\"80px;\"><label>贸易形式：</label></td>\n");
      out.write("                  <td><select id=\"tradeForm\" class=\"form-control\">\n");
      out.write("\t                  </select></td>\n");
      out.write("                  <td width=\"80px;\"><label>总金额：</label></td>\n");
      out.write("                  <td ><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                </tr> \n");
      out.write("                <tr>\n");
      out.write("                 <td width=\"80px;\"><label>起始国家：</label></td>\n");
      out.write("                  <td><label style=\"float:left;\">中国</label></td>\n");
      out.write("                  <td width=\"80px;\"><label>发运方式：</label></td>\n");
      out.write("                  <td><select id=\"deliveryMethod\"  class=\"form-control\">\n");
      out.write("\t                    <option value=\"国际海运\">国际海运</option>\n");
      out.write("\t                    <option value=\"国内公路\">国内公路</option>\n");
      out.write("\t                    <option value=\"国际空运\">国际空运</option>\n");
      out.write("\t                    <option value=\"国际铁路\">国际铁路</option>\n");
      out.write("\t                  </select></td>\n");
      out.write("\t              <td width=\"80px;\"><label>始发地：</label></td>\n");
      out.write("                  <td><input id=\"provenance\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"80px;\"><label>目的地：</label></td>\n");
      out.write("                  <td><input id=\"destination\" type=\"text\" class=\"form-control\"></td> \n");
      out.write("                </tr>\n");
      out.write("                 <tr>\n");
      out.write("                  <td width=\"80px;\"><label>包装描述：</label></td>\n");
      out.write("                  <td><input id=\"packageDes\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                 <td width=\"80px;\"><label></label></td>\n");
      out.write("                  <td></td>\n");
      out.write("\t              <td></td>\n");
      out.write("\t              <td></td>\n");
      out.write("\t              <td></td>\n");
      out.write("\t              <td></td>\n");
      out.write("                </tr>\n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("             </div>\n");
      out.write("             \n");
      out.write("             \n");
      out.write("              <table  style=\"text-align: center;\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("                <thead>\n");
      out.write("                  <tr>\n");
      out.write("                    <th style=\"display:none;\"></th>\n");
      out.write("                    <th>报价单号</th>\n");
      out.write("                    <th>报价版本</th>\n");
      out.write("                    <th>成品名称</th>\n");
      out.write("                    <th></th>\n");
      out.write("                    <th>物料描述</th>\n");
      out.write("                    <th>规格</th>\n");
      out.write("                    <th>数量</th>\n");
      out.write("                    <th>单位</th>\n");
      out.write("                    <th>单价</th>\n");
      out.write("                    <th>金额</th>\n");
      out.write("                    <th>交货日期</th>\n");
      out.write("                    <th>备注</th>\n");
      out.write("                    <th style=\"width:80px;\">操作</th>\n");
      out.write("                  </tr>\n");
      out.write("                </thead>\n");
      out.write("                <tbody id=\"sptbody\">\n");
      out.write("                  <tr>\n");
      out.write("                    <td style=\"display:none;\"></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td><a title=\"替换料\"><i class=\"fa fa-mail-reply-all\"></i></a></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td></td>\n");
      out.write("                    <td><a href=\"javaScript:addSales();\"><i class=\"fa fa-plus\"></i></a>\n");
      out.write("              \t\t\t<a onClick=\"delRow(this)\" href=\"javaScript:;\"><i class=\"fa fa-minus\"></i></a>\n");
      out.write("              \t\t\t<a title=\"替换料\" ><i class=\"fa fa-mail-reply-all\"></i></a>\n");
      out.write("              \t\t\t<a title=\"复制\" ><i class=\"fa fa-copy\"></i></a></td>\n");
      out.write("                  </tr>\n");
      out.write("                </tbody>\t\n");
      out.write("              </table>\n");
      out.write("            </div>\n");
      out.write("          </div>\n");
      out.write("          <div style=\"width: 25%; float: right\">\n");
      out.write("            <div class=\"mySlideWrap\">\n");
      out.write("              <div id='mysite-slideshow'></div>\n");
      out.write("            </div>\n");
      out.write("            <div style=\"margin-bottom: 400px; margin-right: 0px; float: right\">\n");
      out.write("            <a href=\"javascript:onclickUpFile()\" style=\"display:none;\">上传图片<input type=\"file\" id=\"upFile\" /></a> \n");
      out.write("              <a  href=\"javaScript:void(0);\" onclick=\"initSalesOrder();\" style=\"display:inline;\" class=\"btn btn-s-md btn-primary\" >生成空销售订单</a>\n");
      out.write("              <a  href=\"javaScript:void(0);\" style=\"display:inline;\" onclick=\"createSalesOrder();\" class=\"btn btn-s-md btn-primary\" >下一步</a>\n");
      out.write("            </div>\n");
      out.write("          </div>\n");
      out.write("        </div>\n");
      out.write("        </section>\n");
      out.write("      </form>\n");
      out.write("    </div>\n");
      out.write("    </section>\n");
      out.write("  </div>\n");
      out.write("\n");
      out.write("  <div class=\"modal fade\" id=\"addSales\">\n");
      out.write("    <div class=\"modal-dialog\" style=\"width:850px; height: 650px;\">\n");
      out.write("      <div style=\"background-color: #ffffff; width: 100%; height: 640px;overflow:auto;\" class=\"modal-content\" >\n");
      out.write("        <div style=\"padding: 5px;\" class=\"modal-body\">\n");
      out.write("          <table style=\"text-align: right;\" class=\"table b-t b-light text-sm\">\n");
      out.write("              <tbody >\n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"80px;\"><label>测算单号：</label></td>\n");
      out.write("                  <td><input id=\"customerID\" type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td width=\"80px;\"><label>成品名称：</label></td>\n");
      out.write("                  <td><input type=\"text\" class=\"form-control\"></td> \n");
      out.write("                <td width=\"80px;\"><label>规格：</label></td>\n");
      out.write("                  <td ><select class=\"form-control\">\n");
      out.write("                     <option value=\"0\">S/B</option>\n");
      out.write("                     <option value=\"1\">Q/B</option>\n");
      out.write("                    </select></td>\n");
      out.write("                </tr> \n");
      out.write("               \n");
      out.write("                 <tr>\n");
      out.write("                  <td></td>\n");
      out.write("                  <td></td>\n");
      out.write("                  <td></td>\n");
      out.write("                  <td></td>\n");
      out.write("                  <td></td>\n");
      out.write("                <td><a href=\"#\" style=\"width:60px;height:40px;\"class=\"btn btn-s-md btn-default\">筛选</a></td>\n");
      out.write("                </tr>\n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("        \t<table style=\"text-align: right;\" class=\"table b-t b-light text-sm\">\n");
      out.write("            </table>\n");
      out.write("\t\t\t<section class=\"panel panel-default\">\n");
      out.write("\t          <div class=\"table-responsive\">\n");
      out.write("                <table id=\"salesOrderTable\" style=\"width: 100%;border-collapse: collapse;table-layout: fixed;\" class=\"table table-striped b-t b-light text-sm\">\n");
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
      out.write("  <!--替换料  -->\n");
      out.write("  <div class=\"modal fade\" id=\"replaceMateriel\">\n");
      out.write("    <div class=\"modal-dialog\" style=\"width:850px; height: 450px;\">\n");
      out.write("      <div style=\"background-color: #ffffff; width: 100%; height: 440px;overflow:auto;\" class=\"modal-content\" >\n");
      out.write("        <div style=\"padding: 5px;\" class=\"modal-body\">\n");
      out.write("       \n");
      out.write("        <section class=\"panel panel-default\">\n");
      out.write("\t\t<header><h4>物料清单</h4></header>\n");
      out.write("\t\t<div style=\"height:300px\" class=\"panel-body\">\n");
      out.write("\t\t<div class=\"tab-content\" id=\"tabDivs\">\n");
      out.write("\t\t\t<div class=\"tab-pane active\" style=\"\" id=\"specItem0\">\n");
      out.write("\t\t\t   <table id=\"MaterielTable\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("             <tbody id = \"materBody\">\n");
      out.write("             </tbody>\n");
      out.write("             </table>\n");
      out.write("             </div>\n");
      out.write("             </div>\n");
      out.write("             </div>\n");
      out.write("             </section>\n");
      out.write("            \n");
      out.write("            <div style=\" margin-right: 20px; float: right\">\n");
      out.write("            \t<a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px\" href=\"javaScript:void(0);\" onclick=\"replaceBing();\">确定</a>\n");
      out.write("               </div> \n");
      out.write("         </div>\n");
      out.write("      </div>\n");
      out.write("    </div>\n");
      out.write("  </div>\n");
      out.write("  \n");
      out.write("  <!--替换  -->\n");
      out.write("  <div class=\"modal fade\" id=\"replaceMater\">\n");
      out.write("    <div class=\"modal-dialog\" style=\"width:850px; height: 450px;\">\n");
      out.write("      <div style=\"background-color: #ffffff; width: 100%; height: 440px;OVERFLOW-Y: scroll; OVERFLOW-X:hidden;\" class=\"modal-content\" >\n");
      out.write("        <div style=\"padding: 5px;\" class=\"modal-body\">\n");
      out.write("       \n");
      out.write("        <section class=\"panel panel-default\">\n");
      out.write("        <header><h4>可替换的物料</h4></header>\n");
      out.write("\t\t<div style=\"height:300px\" class=\"panel-body\">\n");
      out.write("\t\t<div class=\"row text-sm wrapper\">\n");
      out.write("              <table style=\"text-align: right;\" class=\"table b-t b-light text-sm\">\n");
      out.write("              <tbody id=\"addma1\">\n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"100px;\"><label>物料SKU：</label></td>\n");
      out.write("                  <td width=\"200px;\"><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td><a href=\"#\" style=\"width:50px;height:35px;\"class=\"btn btn-s-md btn-default\"><span style=\"font-size:20px\">筛选</span></a></td>\n");
      out.write("                </tr> \n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("        </div>\n");
      out.write("\t\t<div class=\"tab-content\" id=\"tabDivs\">\n");
      out.write("\t\t\t<div class=\"tab-pane active\" style=\"\" id=\"specItem0\">\n");
      out.write("\t\t\t   <table id=\"MaterTable\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("             </table>\n");
      out.write("               \n");
      out.write("             </div>\n");
      out.write("        </div>\n");
      out.write("        </div>\n");
      out.write("        <div style=\" margin-right: 20px; margin-top: 10px;float: right\">\n");
      out.write("            \t<a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px;float: right\" href=\"javaScript:void(0);\" onclick=\"closeReplace();\">替换</a>\n");
      out.write("         </div> \n");
      out.write("        </section>\n");
      out.write("         </div>\n");
      out.write("      </div>\n");
      out.write("    </div>\n");
      out.write("  </div>\n");
      out.write("  \n");
      out.write("   <!--替换  物料清单2层-->\n");
      out.write("  <div class=\"modal fade\" id=\"replaceMater1\">\n");
      out.write("    <div class=\"modal-dialog\" style=\"width:850px; height: 450px;\">\n");
      out.write("      <div style=\"background-color: #ffffff; width: 100%; height: 440px;OVERFLOW-Y: scroll; OVERFLOW-X:hidden;\" class=\"modal-content\" >\n");
      out.write("        <div style=\"padding: 5px;\" class=\"modal-body\">\n");
      out.write("       \n");
      out.write("        <section class=\"panel panel-default\">\n");
      out.write("        <header><h4>物料清单</h4></header>\n");
      out.write("\t\t<div style=\"height:300px\" class=\"panel-body\">\n");
      out.write("\t\t<div class=\"tab-content\" id=\"tabDivs\">\n");
      out.write("\t\t\t<div class=\"tab-pane active\" style=\"\" id=\"specItem0\">\n");
      out.write("\t\t\t   <table id=\"MaterTable\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("               <thead>\n");
      out.write("               <tr>\n");
      out.write("                <th>物料SKU</th>\n");
      out.write("                <th>物料描述</th>\n");
      out.write("                <th>物料名称</th>\n");
      out.write("                <th></th>\n");
      out.write("                </tr>\n");
      out.write("               </thead>\n");
      out.write("               <tbody>\n");
      out.write("               <tr>\n");
      out.write("               <td>10221</td>\n");
      out.write("               <td>棉被</td>\n");
      out.write("               <td>填充棉</td>\n");
      out.write("               <td><a title=\"替换\" href=\"javaScript:showReplace2();\"><i class=\"fa fa-mail-reply-all\"></i></a> </td>\n");
      out.write("               </tr>\n");
      out.write("               \n");
      out.write("               </tbody>\n");
      out.write("             </table>\n");
      out.write("           \n");
      out.write("                    \n");
      out.write("             </div>\n");
      out.write("        </div>\n");
      out.write("        </div>\n");
      out.write("        <div style=\" margin-right: 20px; margin-top: 10px;float: right\">\n");
      out.write("            \t<a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px;float: right\" href=\"javaScript:void(0);\" onclick=\"closeReplace();\">替换</a>\n");
      out.write("         </div> \n");
      out.write("        </section>\n");
      out.write("         </div>\n");
      out.write("      </div>\n");
      out.write("    </div>\n");
      out.write("  </div>\n");
      out.write("  \n");
      out.write("   <!--替换  3层-->\n");
      out.write("  <div class=\"modal fade\" id=\"replaceMater2\">\n");
      out.write("    <div class=\"modal-dialog\" style=\"width:850px; height: 450px;\">\n");
      out.write("      <div style=\"background-color: #ffffff; width: 100%; height: 440px;OVERFLOW-Y: scroll; OVERFLOW-X:hidden;\" class=\"modal-content\" >\n");
      out.write("        <div style=\"padding: 5px;\" class=\"modal-body\">\n");
      out.write("       \n");
      out.write("        <section class=\"panel panel-default\">\n");
      out.write("        <header><h4>可替换的物料</h4></header>\n");
      out.write("\t\t<div style=\"height:300px\" class=\"panel-body\">\n");
      out.write("\t\t<div class=\"row text-sm wrapper\">\n");
      out.write("              <table style=\"text-align: right;\" class=\"table b-t b-light text-sm\">\n");
      out.write("              <tbody id=\"addma1\">\n");
      out.write("                <tr>\n");
      out.write("                  <td width=\"100px;\"><label>物料SKU：</label></td>\n");
      out.write("                  <td width=\"200px;\"><input type=\"text\" class=\"form-control\"></td>\n");
      out.write("                  <td><a href=\"#\" style=\"width:50px;height:35px;\"class=\"btn btn-s-md btn-default\"><span style=\"font-size:20px\">筛选</span></a></td>\n");
      out.write("                </tr> \n");
      out.write("              </tbody>\n");
      out.write("            </table>\n");
      out.write("        </div>\n");
      out.write("\t\t<div class=\"tab-content\" id=\"tabDivs\">\n");
      out.write("\t\t\t<div class=\"tab-pane active\" style=\"\" id=\"specItem0\">\n");
      out.write("\t\t\t   <table id=\"MaterTable\" class=\"table table-striped b-t b-light text-sm\">\n");
      out.write("            <thead>\n");
      out.write("               <tr>\n");
      out.write("                <th>物料SKU</th>\n");
      out.write("                <th>物料名称</th>\n");
      out.write("                </tr>\n");
      out.write("               </thead>\n");
      out.write("               <tbody>\n");
      out.write("               <tr>\n");
      out.write("               <td>10221</td>\n");
      out.write("               <td>填充棉</td>\n");
      out.write("               </tr>\n");
      out.write("               \n");
      out.write("               </tbody>\n");
      out.write("             </table>\n");
      out.write("               \n");
      out.write("             </div>\n");
      out.write("        </div>\n");
      out.write("        </div>\n");
      out.write("        <div style=\" margin-right: 20px; margin-top: 10px;float: right\">\n");
      out.write("            \t<a class=\"btn btn-s-md btn-primary-W\" style=\"width:60px;float: right\" href=\"javaScript:void(0);\" onclick=\"closeReplace();\">替换</a>\n");
      out.write("         </div> \n");
      out.write("        </section>\n");
      out.write("         </div>\n");
      out.write("      </div>\n");
      out.write("    </div>\n");
      out.write("  </div>\n");
      out.write("  \n");
      out.write("  \n");
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
