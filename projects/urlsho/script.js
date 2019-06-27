var endpoint = "https://www.jsonstore.io/db56ae4ad24728d773d780fdef4b68846b67407f56c9884aa92f18480580c686";

function geturl(){
    var url = document.getElementById("urlinput").value;
  if(!url) process.exit();
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!protocol_ok){
        let newurl = "http://"+url;
        return newurl;
        }else{
            return url;
        }
}

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6/* change this value for the amount of characters after the domain */; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function genhash(){
      let thing = window.location.hash = getrandom();
                document.getElementById('output').innerHTML = "https://urlsho.glitch.me/#" + thing
    }


function send_request(url) {
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}

function shorturl(){
    var longurl = geturl();
  genhash()
    send_request(longurl);
}

var hashh = window.location.hash.substr(1)
if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + hashh, function (data) {
        data = data["result"];
        if (data != null) {
            window.location.href = data;
        }

    });
  
}
