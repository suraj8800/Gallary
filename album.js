(function(){
    let saveAlbum = document.querySelector("#saveAlbum");
    let addAlbum = document.querySelector("#addAlbum");
    let deleteAlbum = document.querySelector("#deleteAlbum");
    let importAlbum = document.querySelector("#importAlbum");
    let exportAlbum = document.querySelector("#exportAlbum");
    let playAlbum = document.querySelector("#playAlbum");
    let selectAlbum = document.querySelector("#selectAlbum");
    let allTemplates = document.querySelector("#allTemplates")
    let overlay = document.querySelector("#overlay");
    let contentDetailsOverlay = document.querySelector("#content-details-overlay");
    let newSlide = document.querySelector("#new-slide");
    let createSlide = document.querySelector("#create-slide");
    let showSlide = document.querySelector("#show-slide");
    let slideList = document.querySelector("#slide-list");


    let albums = [{
        name: 'test',
        slides: []
    }];

    addAlbum.addEventListener("click", handleAddAlbum);
    selectAlbum.addEventListener("change", handleSelectAlbum);
    newSlide.addEventListener("click", handleNewSlideClick);

    function handleAddAlbum(){
        let albumName = prompt("Enter a name fro the new albums");
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
            alert(albumName + " already exist please enter a unique name");
            return;
        }

        let album = {
            name: albumName,
            slides: []
        }; 
        albums.push(album);

        let optionTemplates = allTemplates.content.querySelector("[purpose=new-album");
        let newAlbumOPtion = document.importNode(optionTemplates, true);
        newAlbumOPtion.setAttribute("value", albumName);
        newAlbumOPtion.innerHTML = albumName;
        selectAlbum.appendChild(newAlbumOPtion);

        selectAlbum.value = albumName;
        selectAlbum.dispatchEvent(new Event("change"));
    }

    function handleSelectAlbum(){
        if(this.value == "-1"){
            overlay.style.display  = "block";
            contentDetailsOverlay.style.display  = "none";
            createSlide.style.display = "none";
            
        }else{
            overlay.style.display  = "none";
            contentDetailsOverlay.style.display = "block";
            createSlide.style.display = "none";
        }
    }

    function handleNewSlideClick(){
        overlay.style.display  = "none";
        contentDetailsOverlay.style.display = "none";
        createSlide.style.display = "block";
    }
})();