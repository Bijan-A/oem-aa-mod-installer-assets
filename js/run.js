(function (document, window, framework, log) {
framework.sendEventToMmui("syssettings", "SelectDiagnostics")
setTimeout(function () {
    framework.sendEventToMmui("diag", "ActivateJCITest")
    setTimeout(function () {
        framework.sendEventToMmui("diag", "ReadDTC", {"payload": {"testId": 11}})
    }, 7000)
}, 7000)
})(document, window, window.framework, window.log);
