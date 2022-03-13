(function(){
    let saveAlbum = document.querySelector("#saveAlbum");
    let addAlbum = document.querySelector("#addAlbum");
    let deleteAlbum = document.querySelector("#deleteAlbum");
    let importAlbum = document.querySelector("#importAlbum");
    let exportAlbum = document.querySelector("#exportAlbum");
    let playAlbum = document.querySelector("#playAlbum");
    let selectAlbum = document.querySelector("#selectAlbum");
    let allTemplates = document.querySelector("#allTemplates");
    let overlay = document.querySelector("#overlay");

    let albums = [{
        name: "test",
        images: []
    }];

    addAlbum.addEventListener("click", handleAddAlbum);
    selectAlbum.addEventListener("change", handleSelectAlbum);

    function handleAddAlbum(){
        let albumName = prompt("Enter a name for the new album");
        if(albumName == null){
            return;
        }

        albumName = albumName.trim();
        if(!albumName){
            alert("Empty name not allowed");
            return;
        }

        let exists = albums.some(a => a.name == albumName);
        if(exists){
            alert(albumName + " already exists. Please use a unique new name");
            return;
        }

        let album = {
            name: albumName,
            images: []
        };
        albums.push(album);

        let optionTemplate = allTemplates.content.querySelector("[purpose=new-album]");
        let newAlbumOption = document.importNode(optionTemplate, true);

        newAlbumOption.setAttribute("value", albumName);
        newAlbumOption.innerHTML = albumName;
        selectAlbum.appendChild(newAlbumOption);

        selectAlbum.value = albumName;
        selectAlbum.dispatchEvent(new Event("change"));
    }

    function handleSelectAlbum(){
        if(this.value == "-1"){
            overlay.style.display = "block";
        } else {
            overlay.style.display = "none";
        }
    }
})();