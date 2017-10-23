package com.chinaias.webservice.erp;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import javax.xml.bind.JAXBElement;
import javax.xml.namespace.QName;

import org.apache.cxf.endpoint.Client;
import org.apache.cxf.frontend.ClientProxy;
import org.apache.cxf.transport.http.HTTPConduit;
import org.apache.cxf.transports.http.configuration.HTTPClientPolicy;
import org.apache.cxf.ws.security.wss4j.WSS4JOutInterceptor;
import org.apache.wss4j.dom.WSConstants;
import org.apache.wss4j.dom.handler.WSHandlerConstants;

public class RequestERP {
	private static final QName SERVICE_NAME = new QName(
			"http://xmlns.oracle.com/apps/cux/soaprovider/plsql/cux_ws_server_factory_pkg/",
			"CUX_WS_SERVER_FACTORY_PKG_Service");

	public static OutputParameters Request(String Business , P_REQUEST_DATA p_REQUEST_DATA) {
		// ��ʼ������
		URL wsdlURL = CUXWSSERVERFACTORYPKGService.WSDL_LOCATION;
		CUXWSSERVERFACTORYPKGService ss = new CUXWSSERVERFACTORYPKGService(wsdlURL, SERVICE_NAME);
		CUXWSSERVERFACTORYPKGPortType port = ss.getCUXWSSERVERFACTORYPKGPort();

		// ע�����
		SOAHeader header = new SOAHeader();
		InputParameters input = new InputParameters();
		ObjectFactory of = new ObjectFactory();
		header.setNLSLanguage("SIMPLIFIED CHINESE");
		header.setResponsibility("CUX_SUPER_USER");
		header.setRespApplication("CUX");
		header.setSecurityGroup("STANDARD");
		header.setOrgId("");
		JAXBElement<String> IFACECODE = of.createInputParametersPIFACECODE(Business); //CUSTOMER_IMPORT
		JAXBElement<String> BATCHNUMBER = of.createInputParametersPBATCHNUMBER("1");
		
		input.setPIFACECODE(IFACECODE);
		input.setPBATCHNUMBER(BATCHNUMBER);
		input.setPREQUESTDATA(p_REQUEST_DATA);

		// ע����֤
		Client client = ClientProxy.getClient(port);
		   
		
		Map<String, Object> outProps = new HashMap<String, Object>();
		outProps.put(WSHandlerConstants.ACTION, WSHandlerConstants.USERNAME_TOKEN);
		outProps.put(WSHandlerConstants.USER, "HAND_DC");
		outProps.put(WSHandlerConstants.PASSWORD_TYPE, WSConstants.PW_TEXT);
		outProps.put(WSHandlerConstants.PW_CALLBACK_CLASS, ClientPwdCallback.class.getName());
		client.getOutInterceptors().add(new WSS4JOutInterceptor(outProps));

		
		  
		// ִ��
		System.out.println("Invoking invokefmsws...");
		OutputParameters _invokefmsws__return = port.invokefmsws(header, input);
		System.out.println("invokefmsws.result=" + _invokefmsws__return.getXRESPONSEDATA().getValue());
		return _invokefmsws__return;
	}
}
