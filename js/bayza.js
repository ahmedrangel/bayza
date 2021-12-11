var currentUrl = location.href;

if(currentUrl.substr(-1) == '/') {
    currentUrl = currentUrl.substr(0, currentUrl.length - 1);
}