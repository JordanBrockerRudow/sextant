IPv4
API URL	Response Type	Sample Output (IPv4)
https://api.ipify.org,text,98.207.254.136
https://api.ipify.org?format=json,json,{"ip":"98.207.254.136"}
https://api.ipify.org?format=jsonp,jsonp,callback({"ip":"98.207.254.136"});
https://api.ipify.org?format=jsonp&callback=getip,jsonp,getip({"ip":"98.207.254.136"});




Universal: IPv4/IPv6
API URL	Response Type	Sample Output (IPv4/IPv6)
https://api64.ipify.org,text,98.207.254.136 or 2a00:1450:400f:80d::200e
https://api64.ipify.org?format=json,json,{"ip":"98.207.254.136"} or {"ip":"2a00:1450:400f:80d::200e"}
https://api64.ipify.org?format=jsonp,jsonp,callback({"ip":"98.207.254.136"}); or callback({"ip":"2a00:1450:400f:80d::200e"});
https://api64.ipify.org?format=jsonp&callback=getip,jsonp,getip({"ip":"98.207.254.136"}); or getip({"ip":"2a00:1450:400f:80d::200e"});



function outputObject(type, sample) {
    this.type = type;
    this.sample = sample;
}



function ipifyAPI() {
    this.url = apiURL;
    this.response = responseType;
    this.output = sampleOutput;
}