var findConstructSingleArgName = function(db, grove_name)
{
	for (var i = 0; i < db.length; i++) {
		if(db[i].GroveName == grove_name)
		{
			construct_arg_str = db[i].ConstructArgList[0];
			return construct_arg_str.split(" ")[1];
		}
	}
	return "";
};

var findConstructArgNameRegExp = function(db,grove_name,regexp)
{
	for (var i = 0; i < db.length; i++) {
		if(db[i].GroveName == grove_name)
		{
			for (var j=0;j<2;j++) {
				construct_arg_str = db[i].ConstructArgList[j];
				construct_arg_str = construct_arg_str.replace(/^\s+|\s+$/g, '');
				console.log(construct_arg_str); 
				var pat = new RegExp(regexp);
				if(pat.test(construct_arg_str))
					return construct_arg_str.split(" ")[1];
			}
			
		}
	}
	return "";

}

//document.addEventListener( "plusready",  function()
//{
//	// 声明的JS“扩展插件别名”
//  var _BARCODE = 'MyPlugin';
//  var B = window.plus.bridge;
//  var myplugin = 
//	{
//	// 声明异步返回方法
//      PluginTestFunction : function (Argus1, Argus2, Argus3, Argus4, successCallback, errorCallback ) 
//      {
//          var success = typeof successCallback !== 'function' ? null : function(args) 
//          {
//              successCallback(args);
//          },
//          fail = typeof errorCallback !== 'function' ? null : function(code) 
//          {
//              errorCallback(code);
//          };
//          callbackID = B.callbackId(success, fail);
//			// 通知Native层plugintest扩展插件运行”PluginTestFunction”方法
//          return B.exec(_BARCODE, "PluginTestFunction", [callbackID, Argus1, Argus2, Argus3, Argus4]);
//      },
//      PluginTestFunctionArrayArgu : function (Argus, successCallback, errorCallback ) 
//      {
//          var success = typeof successCallback !== 'function' ? null : function(args) 
//          {
//              successCallback(args);
//          },
//          fail = typeof errorCallback !== 'function' ? null : function(code) 
//          {
//              errorCallback(code);
//          };
//          callbackID = B.callbackId(success, fail);
//          return B.exec(_BARCODE, "PluginTestFunctionArrayArgu", [callbackID, Argus]);
//      },      
//      // 声明同步返回方法
//      PluginTestFunctionSync : function (Argus1, Argus2, Argus3, Argus4) 
//      {            
//          // 通知Native层plugintest扩展插件运行“PluginTestFunctionSync”方法并同步返回结果                       
//          return B.execSync(_BARCODE, "PluginTestFunctionSync", [Argus1, Argus2, Argus3, Argus4]);
//      },
//      PluginTestFunctionSyncArrayArgu : function (Argus) 
//      {                                   
//          return B.execSync(_BARCODE, "PluginTestFunctionSyncArrayArgu", [Argus]);
//      }
//      
//      UdpSend: function(addr, msg)
//      {
//      		return B.execSync(_BARCODE, "UdpSend", [addr, msg]); 
//      }
//  };
//  window.plus.myplugin = myplugin;
//}, true );
