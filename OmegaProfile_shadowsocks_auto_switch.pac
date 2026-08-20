var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+shadowsocks auto switch", {
    "+shadowsocks auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)google\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)bp\.blogspot\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)fastpic\.org$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)lostpic\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)radikal\.ru$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)youpic\.su$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)ua$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)rutor\.info$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)meduza\.io$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)intel\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)t\.co$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)linkedin\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)instagram\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)cdninstagram\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)pornolab\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)freefeed\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)licdn\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)rutor\.org$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)nnmclub\./.test(host)) return "+shadowsocks";
        if (/(?:^|\.)telegram\.org$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)rutracker\.org$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)rutracker\.me$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)kinozal\.tv$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)tfile\.ru$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)unionpeer\.org$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)uniondht\.org$/.test(host)) return "+shadowsocks";
        if (/porn/.test(host)) return "+shadowsocks";
        if (/xvideos/.test(host)) return "+shadowsocks";
        if (/xhamster/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)onion$/.test(host)) return "+tor";
        return "+__ruleListOf_shadowsocks auto switch";
    },
    "+__ruleListOf_shadowsocks auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)google\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bp\.blogspot\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)fastpic\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)lostpic\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)radikal\.ru$/.test(host)) return "DIRECT";
        if (/(?:^|\.)youpic\.su$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ua$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rutor\.info$/.test(host)) return "DIRECT";
        if (/(?:^|\.)meduza\.io$/.test(host)) return "DIRECT";
        if (/(?:^|\.)intel\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)t\.co$/.test(host)) return "DIRECT";
        if (/(?:^|\.)linkedin\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)instagram\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)cdninstagram\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)pornolab\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)freefeed\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)licdn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rutor\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)nnmclub\./.test(host)) return "DIRECT";
        if (/(?:^|\.)telegram\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rutracker\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rutracker\.me$/.test(host)) return "DIRECT";
        if (/(?:^|\.)kinozal\.tv$/.test(host)) return "DIRECT";
        if (/(?:^|\.)tfile\.ru$/.test(host)) return "DIRECT";
        if (/(?:^|\.)unionpeer\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)uniondht\.org$/.test(host)) return "DIRECT";
        if (/porn/.test(host)) return "DIRECT";
        if (/xvideos/.test(host)) return "DIRECT";
        if (/xhamster/.test(host)) return "DIRECT";
        if (/(?:^|\.)onion$/.test(host)) return "DIRECT";
        return "DIRECT";
    },
    "+shadowsocks": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 localhost:1080; SOCKS localhost:1080";
    },
    "+tor": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 localhost:9150; SOCKS localhost:9150";
    }
});