package com.chinaias.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.springframework.beans.factory.InitializingBean;

public class InitTasks implements InitializingBean {  
      
    public void afterPropertiesSet() {
    	Connection conn = null;  
    	String driver = "oracle.jdbc.driver.OracleDriver";  
        String url = "jdbc:oracle:thin:@chinaias.f3322.net:1521:ORCL";  
        Statement stmt = null;  
        ResultSet res = null;  
        try {  
        	Class.forName(driver);  
        	conn = DriverManager.getConnection(url, "jhteval", "123456");  
        	stmt = conn.createStatement();  
        	String sql = "select listID from ev_evalhistory where listID = (select max(listID) from ev_evalhistory  WHERE listID like 'C%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.cNumber = Tools.getLastNum(res.getString("listID")==""?"0":res.getString("listID"));
            }
            System.out.println("cNumber=========================================="+Tools.cNumber+"===========================================");
            
            sql = "select qoutationNumber from qo_header where qoutationNumber = (select max(qoutationNumber) from qo_header  WHERE qoutationNumber like 'Q%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.qNumber = Tools.getLastNum(res.getString("qoutationNumber")==""?"0":res.getString("qoutationNumber"));
            }
            System.out.println("qNumber=========================================="+Tools.qNumber+"===========================================");
            
            sql = "select processContractNum from pc_job_info where processContractNum = (select max(processContractNum) from pc_job_info  WHERE processContractNum like 'M%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.mNumber = Tools.getLastNum(res.getString("processContractNum")==""?"0":res.getString("processContractNum"));
            }
            System.out.println("mNumber=========================================="+Tools.mNumber+"===========================================");
            
            sql = "select orderNumber from so_header where orderNumber = (select max(orderNumber) from so_header  WHERE orderNumber like 'WGS%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.wgsNumber = Tools.getLastNum(res.getString("orderNumber")==""?"0":res.getString("orderNumber"));
            }
            System.out.println("wgsNumber=========================================="+Tools.wgsNumber+"===========================================");
              
            sql = "select orderNumber from so_header where orderNumber = (select max(orderNumber) from so_header  WHERE orderNumber like 'WTS%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.wtsNumber = Tools.getLastNum(res.getString("orderNumber")==""?"0":res.getString("orderNumber"));
            }
            System.out.println("wtsNumber=========================================="+Tools.wtsNumber+"===========================================");
            
            sql = "select orderNumber from so_header where orderNumber = (select max(orderNumber) from so_header  WHERE orderNumber like 'T2S%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.t2sNumber = Tools.getLastNum(res.getString("orderNumber")==""?"0":res.getString("orderNumber"));
            }
            System.out.println("t2sNumber=========================================="+Tools.t2sNumber+"===========================================");
            
            sql = "select orderNumber from so_header where orderNumber = (select max(orderNumber) from so_header  WHERE orderNumber like 'DJS%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.djsNumber = Tools.getLastNum(res.getString("orderNumber")==""?"0":res.getString("orderNumber"));
            }
            System.out.println("djsNumber=========================================="+Tools.djsNumber+"===========================================");
            
            sql = "select documentNum from po_header where documentNum = (select max(documentNum) from po_header  WHERE documentNum like 'WGP%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.wgpNumber = Tools.getLastNum(res.getString("documentNum")==""?"0":res.getString("documentNum"));
            }
            System.out.println("wgpNumber=========================================="+Tools.wgpNumber+"===========================================");
            
            sql = "select documentNum from po_header where documentNum = (select max(documentNum) from po_header  WHERE documentNum like 'WTP%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.wtpNumber = Tools.getLastNum(res.getString("documentNum")==""?"0":res.getString("documentNum"));
            }
            System.out.println("wtpNumber=========================================="+Tools.wtpNumber+"===========================================");
            
            sql = "select documentNum from po_header where documentNum = (select max(documentNum) from po_header  WHERE documentNum like 'T2P%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.t2pNumber = Tools.getLastNum(res.getString("documentNum")==""?"0":res.getString("documentNum"));
            }
            System.out.println("t2pNumber=========================================="+Tools.t2pNumber+"===========================================");
            
            sql = "select documentNum from po_header where documentNum = (select max(documentNum) from po_header  WHERE documentNum like 'DJP%')";  
            res = stmt.executeQuery(sql);  
            while(res.next()) {  
                Tools.djpNumber = Tools.getLastNum(res.getString("documentNum")==""?"0":res.getString("documentNum"));
            }
            System.out.println("djpNumber=========================================="+Tools.djpNumber+"===========================================");
        } catch (Exception e) {  
            e.printStackTrace();  
        }

    } 

}  
