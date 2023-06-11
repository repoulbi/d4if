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
  
  function renderRepositoryContents(contents) {
    const userlist = document.getElementById("userlist");
    userlist.innerHTML = "";
  
    const excludedFolders = [".gitignore", "vendors", "file-manager.html", "src", ".vscode", "assets", "css", "js", "metis-assets"];
    const excludedFiles = ["LICENSE", "README.md", "src", "vendors", "file-manager.html", ".gitignore", "index.html", "all_prodi_repo.html", "shuffle-for-tailwind.png", "robots.txt"];
  
    for (const item of contents) {
      if (item.type === "dir" && !excludedFolders.includes(item.name)) {
        const row = document.createElement("tr");
        const fileNameCell = document.createElement("td");
        const lastModifiedCell = document.createElement("td");
        const actionCell = document.createElement("td");
  
        fileNameCell.classList.add("px-4", "py-3", "font-medium");
        lastModifiedCell.classList.add("px-4", "py-3", "font-medium", "hidden", "md:table-cell");
        actionCell.classList.add("px-4", "py-3", "font-medium", "text-center");
  
        const folderIconSpan = document.createElement("span");
        const folderIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const folderIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  
        folderIconSpan.classList.add("mr-1", "text-indigo-500");
        folderIconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        folderIconSvg.setAttribute("width", "16");
        folderIconSvg.setAttribute("height", "16");
        folderIconSvg.setAttribute("fill", "currentColor");
        folderIconSvg.classList.add("inline-block", "bi", "bi-folder-fill");
        folderIconSvg.setAttribute("viewBox", "0 0 16 16");
        folderIconPath.setAttribute("d", "M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139");
  
        folderIconSvg.appendChild(folderIconPath);
        folderIconSpan.appendChild(folderIconSvg);
        fileNameCell.appendChild(folderIconSpan);
        fileNameCell.appendChild(document.createTextNode(item.name));
        lastModifiedCell.textContent = formatDate(item.last_modified);
  
        const button = document.createElement("a");
        button.classList.add("py-2", "px-4", "mb-3", "block", "lg:inline-block", "text-center", "rounded", "leading-5", "text-gray-100", "bg-indigo-500", "border", "border-indigo-500", "hover:text-white", "hover:bg-indigo-600", "hover:ring-0", "hover:border-indigo-600", "focus:bg-indigo-600", "focus:border-indigo-600", "focus:outline-none", "focus:ring-0");
        button.href = "#";
  
        const buttonText = document.createElement("span");
        buttonText.textContent = "Kunjungi";
  
        const buttonIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        buttonIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        buttonIcon.setAttribute("width", "12");
        buttonIcon.setAttribute("height", "12");
        buttonIcon.setAttribute("fill", "currentColor");
        buttonIcon.classList.add("inline-block", "ltr:ml-1", "rtl:mr-1", "bi", "bi-plus-lg");
        buttonIcon.setAttribute("viewBox", "0 0 16 16");
  
        
        button.appendChild(buttonText);
  
        button.addEventListener("click", function() {
          showDirectoryContent(item.name);
        });
  
        actionCell.appendChild(button);
  
        row.appendChild(fileNameCell);
        row.appendChild(lastModifiedCell);
        row.appendChild(actionCell);
  
        userlist.appendChild(row);
      }
    }
  }
  
  function showDirectoryContent(folderName) {
    const targetUrl = `https://repo.ulbi.ac.id/d4if/${folderName}`;
    window.location.href = targetUrl;
  }
  
  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }
  
  getRepositoryContents()
    .then(data => {
      console.log("Data:", data);
      renderRepositoryContents(data);
    })
    .catch(error => {
      console.log("Error:", error);
    });
  