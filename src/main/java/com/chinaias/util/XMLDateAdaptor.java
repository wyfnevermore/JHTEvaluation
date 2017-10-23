package com.chinaias.util;

import java.text.SimpleDateFormat;

import javax.xml.bind.annotation.adapters.XmlAdapter;

@SuppressWarnings("rawtypes")
public class XMLDateAdaptor extends XmlAdapter{  
	private SimpleDateFormat yyyyMMddHHmm = new SimpleDateFormat("yyyy/MM/dd");  
  
    @Override  
    public Object unmarshal(Object v) throws Exception {  
        if ("".equals(v)) {  
            return null;  
        }  
        return yyyyMMddHHmm.parse((String) v);  
    }  
  
    @Override  
    public Object marshal(Object v) throws Exception {  
        return yyyyMMddHHmm.format(v);  
    } 
}  
