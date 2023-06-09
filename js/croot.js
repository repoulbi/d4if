import { get } from "https://jscroot.github.io/api/croot.js";
import { tablelist } from "./controller/list.js";
import { apidir } from "./config/url.js";

export function getFolder(path){
    get(apidir+path, tablelist ) 
}

getFolder("");

