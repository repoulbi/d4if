import { addInner, onClick } from "https://jscroot.github.io/element/croot.js";
import { templatetable } from "../template/html.js";
import { getFolder } from "./onchange.js";


export function tablelist(result){
    isitabel(result);
}


export function isitabel(jsonParse){
    let list = '';
    console.log(jsonParse)
    jsonParse.forEach(element => {
      list = templatetable.replace("#name#", element.name);
      if (element.type === "file"){
        if (element.download_url !== null) {
          list = list.replace("#download#", `onclick="window.open('${element.download_url}')`);
        } else {
          list = list.replace("#download#", '');
          getFolder(element.path); }
      } else {
        // jika bukan file, tampilkan subfolder
        list = list.replace("#download#", '');
        getFolder(element.path);}
  
      addInner("userlist" ,list);
    });
  }
  