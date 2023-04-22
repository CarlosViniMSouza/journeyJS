loadDocs("url-01", functionCallback01);
loadDocs("url-02", functionCallback02);

function loadDocs(url, functionCallback) {
    const request = new XMLHttpRequest();

    request.onload = function() {
        functionCallback(this);
    }

    request.open('GET', url);
    request.send();
}

function functionCallback01(request) {
    // Source code
}

function functionCallback02(request) {
    // Source code
}
