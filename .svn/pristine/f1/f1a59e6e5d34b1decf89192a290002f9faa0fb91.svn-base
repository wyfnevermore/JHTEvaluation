package com.chinaias.webservice.erp;

import java.io.IOException;  
import java.util.HashMap;  
import java.util.Map;  
  
import javax.security.auth.callback.Callback;  
import javax.security.auth.callback.CallbackHandler;  
import javax.security.auth.callback.UnsupportedCallbackException;  
  
import org.apache.wss4j.common.ext.WSPasswordCallback;  
  
public class ClientPwdCallback implements CallbackHandler   
{  
    private Map<String,String> manager = new HashMap<String,String>();  
  
    public ClientPwdCallback()  
    {  
        manager.put("HAND_DC", "123456");  
    }  
      
    public void handle(Callback[] callbacks) throws IOException,  
            UnsupportedCallbackException   
    {  
        for(int i=0;i<callbacks.length;i++)  
        {  
            WSPasswordCallback pc = (WSPasswordCallback)callbacks[i];  
            String identifier = pc.getIdentifier();  
            int usage = pc.getUsage();  
            if (usage == WSPasswordCallback.USERNAME_TOKEN)   
            {  
                if(!manager.containsKey(identifier))  
                    throw new SecurityException("Username not exist");  
                pc.setPassword(manager.get(identifier));                  
            }              
        }         
    }  
}