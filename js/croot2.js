// import { get } from "https://jscroot.github.io/api/croot.js";
// import { tablelist } from "./controller/list.js";
// import { apidir } from "./config/url.js";

// export function getFolder(path){
//     get(apidir+path, tablelist ) 
// }



async function getRepositoryContents() {
    const apiUrl = "https://api.github.com/repos/repoulbi/d4if/contents/";
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  }
  
  // Contoh penggunaan
  getRepositoryContents()
    .then(data => {
      console.log("Data:", data);
      // Lakukan tindakan dengan data yang diperoleh
      // Misalnya, tampilkan konten, proses file, dll.
    })
    .catch(error => {
      console.log("Error:", error);
    });
  