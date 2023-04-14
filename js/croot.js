import { get } from "https://jscroot.github.io/api/croot.js";
import { tablelist } from "./controller/list.js";
import { apidir } from "./config/url.js";

// function getJSONListDir(path){
//     var request = new XMLHttpRequest();
//     let url=apidir+path
//     request.open("GET", url, false);
//     request.send(null)
//     return JSON.parse(request.responseText);
// }

get(apidir, tablelist )