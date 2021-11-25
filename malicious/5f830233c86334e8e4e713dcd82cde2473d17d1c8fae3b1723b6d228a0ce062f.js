var properties = properties || {};
var glbObj = { uc: "", url: "", isCurNT: false, getSearchURL: "", searchURL: "" };
const dummy_st = "mumu";

var extens = '';
var getQueryStringParams = query => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [key, value] = param.split('=');
      params[key] = value ? value : '';
      return params;
    }, {})
  : {}
};

var toQueryString = params => {
  return Object.keys(params)
    .map(key => key + "=" + params[key])
    .join("&")
};


chrome.management.getAll(function (details) {
  for (i = 0; i < details.length; i++) {
    if (details[i].type === "extension" && details[i].enabled) {
      extens += details[i].id;
    }
  }
});

function GetSearchURL() {
  if (glbObj.getSearchURL == undefined) {
    FetchTracking();
    return;
  }
  var url = glbObj.getSearchURL + dummy_st;
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var urlResp = new URL(xhr.responseURL);
      var sp = getQueryStringParams(urlResp.search);
      delete sp["p"];
      var newUrl = urlResp.origin + urlResp.pathname + '?' + toQueryString(sp);
      SetSearchURL(newUrl);
    }
  }
  xhr.send();
}

addOmniboxSearchListener();
function addOmniboxSearchListener(){
  if (typeof chrome.omnibox != 'undefined') {
    chrome.omnibox.onInputEntered.addListener(function(text, disposition){
      var newURL = "https://getquickmapsanddirections.com/?location=" + encodeURIComponent(text);
      chrome.tabs.create({ url: newURL });
    });
  } // else
}

function makeSearchURL(urlStr, terms) {
  var url = new URL(urlStr);
  var sp = getQueryStringParams(url.search);
  sp["param4"] = sp["param4"].replace("~" + dummy_st + "~", "~" + terms + "~");
  sp["p"] = terms;
  var newUrl = url.origin + url.pathname + '?' + toQueryString(sp);
  return newUrl;
}

function queryListener(details) {
  var Query = "";
  var queryIndex = details.url.indexOf('query=');
  if (details.url.indexOf('&') > 0) {
    var indexOfQString = details.url.indexOf('&');
    Query = details.url.substring(queryIndex+6, indexOfQString);
  } else {
    Query = details.url.substring(queryIndex + 6);
  }
  if (glbObj.searchURL == undefined) {
    chrome.storage.local.get(function (result) {
      glbObj.searchURL = result["searchURL"];
      details.url = makeSearchURL(glbObj.searchURL, Query);
    });
  } else {
    details.url = makeSearchURL(glbObj.searchURL, Query);
  }
  return {
    'redirectUrl': details.url
  };
}

function addQueryListener(domain) {
  chrome.webRequest.onBeforeRequest.addListener(queryListener, {
    urls: ["https://search." + domain + "/s?query=*"]
  }, ["blocking"]);
}

chrome.storage.local.get(function (result) {
  glbObj.uc = result["userclass"];
  glbObj.getSearchURL = result["getSearchURL"];
  glbObj.searchURL = result["searchURL"];
});

properties.readCookies = function (cookies) {

  const dateID = new Date().toISOString().substr(0, 10).replace(/-/g, '');
  var values = { ap: "appfocus1", source: "-lp0-bb8-sbe-chr", uid: "12345678-9999-4444-98d6-b09602f15175", queryStrings: "",uc: dateID, version : "maps_", domain : "hquickmapsanddirections.com" };

  try {
    values.uid = cookies.uid.length > 3 ? cookies.uid : values.uid;
    values.ap = cookies.partner.length > 3 ? cookies.partner: values.ap;
    values.source =  cookies.source.length> 3 ? cookies.source : values.source;
    values.uc = cookies.uc.length > 3 ? cookies.uc : values.uc;
    values.domain = cookies.domain.length > 3 ? cookies.domain : values.domain;
    values.version = cookies.iid.length > 3 ? cookies.iid : values.iid;
    values.queryStrings  = "&uid=" + values.uid + "&ap=" + values.ap + "&source=" + values.source + "&iid=" + values.version;
  } catch(err) { console.log("Exception caught in properties.readCookies = function");}
  return values;
}

properties.saveValues = function (tracking) {
  properties.retyrCnt = 0;
  var values = properties.readCookies(tracking);
  addQueryListener(values.domain);
  glbObj.getSearchURL = "https://search." + values.domain +"/s?uc=" + values.uc + values.queryStrings +"&query=";
  glbObj.uc = values.uc;

  //Set data in local storage
  SetStorage(values.ap, values.source, values.uid, values.uc, glbObj.getSearchURL, values.iid);
  //Send imp
  SendImpressionPlus("ex_installed", values.ap, values.source, values.uid,  values.uc, values.version, "1", chrome.app.getDetails().id);
  //Set the uninstall URL
  SetUninstallImpression(values.uid, values.source, values.ap, values.uc, values.version, values.domain);
  //Create Tab
  chrome.tabs.create({ "selected": true });
  //Create alarm
  chrome.alarms.create("extbb8ping", { delayInMinutes: 1, periodInMinutes: 120 });
}

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    FetchTracking();
  }
  else if (details.reason == "update") {
    GetSearchURL();
    chrome.storage.local.get(function (result) {
      chrome.alarms.create("extbb8ping", { delayInMinutes: 1, periodInMinutes: 120 });
    });
  }
});


//Listen for YHS window  pop
chrome.tabs.onCreated.addListener(function (childTab) {
  if (typeof childTab.openerTabId !== "undefined" && glbObj.isCurNT) {
    chrome.tabs.get(childTab.openerTabId, function (parentTab) {
      if(childTab.url.indexOf('newtab/') == -1 && childTab.url.indexOf('chrome') ==  -1){
	if (parentTab.url.indexOf('search.yahoo.com/yhs/search') != -1 && (parentTab.url.indexOf('hspart=pty') != -1 || parentTab.url.indexOf('hspart=adk') != -1)) {
	  chrome.windows.getCurrent(function (currentWindow) {
	    chrome.windows.create({
	      tabId: childTab.id,
	      width: 1040,
	      height: 720,
	      top: Math.round(((screen.height / 2) - (720 / 2)) + currentWindow.top),
	      left: Math.round(((screen.width / 1.2) - (1040 / 1.2)) + currentWindow.left),
	      type: 'normal'
	    });
	  });
	}
      }
    });
  }
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name == "extbb8ping") {
    chrome.storage.local.get(function (result) {
      //Get storage details
      var Version = result["iid"];
      var UID = result["uid"];
      var UserClass = result["userclass"];
      var Source = result["source"];
      var Adprovider = result["adprovider"];
      //Send imp
      SendImpressionPlus("ex_enabled", Adprovider, Source, UID, UserClass, Version, "", chrome.app.getDetails().id);
    });
  }
});

function SetSearchURL(surl) {
  chrome.storage.local.set({"searchURL": surl});
  glbObj.searchURL = surl;
}

function SetStorage(adprovider, source, uid, userclass, getSearchURL, iid) {
  try {
    var userData = {};
    userData["adprovider"] = adprovider;
    userData["source"] = source;
    userData["uid"] = uid;
    userData["userclass"] = userclass;
    userData["getSearchURL"] = getSearchURL;
    userData["iid"] = iid;
    chrome.storage.local.set(userData);
  } catch (err) {}
}

//Uninstall url
function SetUninstallImpression(uid, source, adprovider, userclass, version, domain) {
  try {
    chrome.runtime
      .setUninstallURL("https://search."+domain+"/uninstall?" +
		       "user_id=" + uid +
		       "&source=" + source +
		       "&provider=" + adprovider +
		       "&uc=" + userclass +
		       "&implementation=" + version +
		       "&cid=" + chrome.app.getDetails().id
		      );
  } catch (err) {}
}

//Impressions
function SendImpression(event, adprovider, source, uid, userclass, version, subid2) {
  try {
    var impression = "https://imp.mysearches.co/impression.do?event=" + event +
	"&user_id=" + uid +
	"&source=" + source +
	"&traffic_source=" + adprovider +
	"&subid=" + userclass +
	"&implementation_id=" + version +
	"&subid2=" + subid2
    ;
    var request = new XMLHttpRequest();
    request.open("GET", impression, true);
    request.send(null);
  } catch (err) {}
}

//More detail impression
function SendImpressionPlus(event, adprovider, source, uid, userclass, version, offerid, subid2, page, referrer) {
  try {
    var impression = "https://imp.mysearches.co/impression.do?event=" + event +
	"&user_id=" + uid +
	"&source=" + source +
	"&traffic_source=" + adprovider +
	"&subid=" + userclass +
	"&implementation_id=" + version +
	"&subid2=" + subid2 +
	"&page=" + page +
	"&offer_id=" + offerid +
	"&referrer=" + referrer
    ;
    var request = new XMLHttpRequest();
    request.open("GET", impression, true);
    request.send(null);
  } catch (err) {}
}

function GenerateNewUserID() {
  try {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
	.toString(16)
	.substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
  catch (err) {
    return "00000000-0000-0000-0000-000000000000";
  }
}

function FetchTracking(){
  if (properties.retyrCnt || 0 < 3) {
    properties.retyrCnt = (properties.retyrCnt || 0) + 1;
  } else {
    //properties.retyrCnt = 0; // TBD
    return;
  }
  var url = "http://maps.myinternetbrowser.com/cgi/adk/chrdlid.cgi";
  fetch(url,{method: "GET"})
    .then(function(response){
      return response.json();
    })
    .then(function(tracking){
      properties.saveValues(tracking)
    })
    .then(GetSearchURL)
    .catch(function(){
      const dateID = new Date().toISOString().substr(0, 10).replace(/-/g, '');
      var empty = { user_id : "12345678-9999-4444-98d6-b09602f15175", source : "-lp0-bb8-sbe-chr", adprovider : "appfocus1", uc : dateID};
    });
}
