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
  
    const excludedFolders = [".gitignore", ".vscode", "assets", "css", "js", "metis-assets"];
    const excludedFiles = ["LICENSE", "README.md", ".gitignore","index.html","all_prodi_repo.html", "shuffle-for-tailwind.png", "robots.txt"];
  
    contents.forEach(content => {
      if (content.type === "dir" && excludedFolders.includes(content.name)) {
        return; // Skip rendering excluded folders
      }
  
      if (content.type === "file" && excludedFiles.includes(content.name)) {
        return; // Skip rendering excluded files
      }
  
      const listItem = document.createElement("li");
      listItem.classList.add("flex", "py-4");
  
      const image = document.createElement("img");
      image.classList.add("h-10", "w-10", "rounded-full");
      image.src =
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
      image.alt = "";
  
      const contentWrapper = document.createElement("div");
      contentWrapper.classList.add("ml-3");
  
      const title = document.createElement("p");
      title.classList.add("text-sm", "font-medium", "text-gray-900");
      title.textContent = content.name;
  
      const description = document.createElement("p");
      description.classList.add("text-sm", "text-gray-500");
  
      if (content.type === "dir") {
        const button = document.createElement("button");
        button.textContent = "Silahkan Tekan";
        button.addEventListener("click", () => {
          showDirectoryContent(content.html_url);
        });
  
        description.appendChild(button);
      }
  
      contentWrapper.appendChild(title);
      contentWrapper.appendChild(description);
  
      listItem.appendChild(image);
      listItem.appendChild(contentWrapper);
  
      userlist.appendChild(listItem);
    });
  }
  
  
  function showDirectoryContent(htmlUrl) {
    const folderName = htmlUrl.split("/").pop();
    const targetUrl = `https://repo.ulbi.ac.id/d4if/${folderName}/`;
    window.location.href = targetUrl;
  }
  
  
  getRepositoryContents()
    .then(data => {
      console.log("Data:", data);
      renderRepositoryContents(data);
    })
    .catch(error => {
      console.log("Error:", error);
    });
  