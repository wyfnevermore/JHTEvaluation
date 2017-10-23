package com.chinaias.util;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import net.sf.json.JsonConfig;
import net.sf.json.processors.JsonValueProcessor;

public class DateJsonValueProcessor implements JsonValueProcessor {  
    public static final String Default_DATE_PATTERN ="yyyy-MM-dd";  
    private DateFormat dateFormat ;  
    public DateJsonValueProcessor(String datePattern){  
        try{  
            dateFormat  = new SimpleDateFormat(datePattern);  
              
        }catch(Exception e ){  
            dateFormat = new SimpleDateFormat(Default_DATE_PATTERN);  
              
        }  
          
    }  
    public Object processArrayValue(Object value, JsonConfig jsonConfig) {  
        return process(value);  
    }  
  
    public Object processObjectValue(String key, Object value,  
            JsonConfig jsonConfig) {
    	DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	if(value==null)
    		return "";
    	if (value instanceof Timestamp) {
    		String str =sdf.format(value);
    				//new SimpleDateFormat(dateFormat).format((Timestamp) value);

               return str;

         }
    	return value.toString();
        //return process(value);  
    }  
    private Object process(Object value){  
        return dateFormat.format((Date)value);  
          
    }

}  
