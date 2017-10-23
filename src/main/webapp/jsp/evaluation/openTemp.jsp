<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String path=application.getRealPath("calculation.xlsx");
try{  
    Runtime.getRuntime().exec("cmd  /c  start  "+path);  
}catch(Exception  e){}  

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title></title>
<meta charset="utf-8" />
<script language="javascript">
	window.opener=null;
	window.open('','_self');
	window.close();
</script>

</head>
<body>

</body>
</html>