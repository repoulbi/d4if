import { addInner } from "https://jscroot.github.io/element/croot.js";
import { templatetable } from "../template/html.js";
import { showDirectoryContent } from "./croot.js";
import { getFolder } from "./onchange.js";

export function tablelist(result) {
  isitabel(result);
}

export function isitabel(jsonParse) {
  let list = '';
  console.log(jsonParse);
  jsonParse.forEach(element => {
    list = templatetable.replace("#name#", element.name);
    if (element.type === "dir") {
      list += `<a href="#" onclick="showDirectoryContent('${element.html_url}')">Lihat Konten</a>`;
    }
    addInner("userlist", list);
  });
}
export function showDirectoryContent(url) {
    console.log(url);

}
getFolder("path/ke/folder");

  
// export function isitabel(jsonParse){
//     let list = '';
//     console.log(jsonParse)
//     jsonParse.forEach(element => {
//         list = templatetable.replace("#name#", element.name);
//         if (element.type === "dir") {
//             list += `<a href="#" onclick="showDirectoryContent('${element.url}')">Lihat Konten</a>`;
//           }
          
//        addInner("userlist" ,list);
//     });
// }