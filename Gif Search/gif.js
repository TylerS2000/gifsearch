async function gif(){
let search = document.getElementById("search");
let input= search.value;
let url = `https://api.giphy.com/v1/gifs/search?api_key=QQqEybWLlZj5qJeRL3evR1z68L78pLP2&q=${input}&limit=25&offset=0&rating=g&lang=en`
let gifapi= await fetch(url);
let results = await gifapi.json();
for(let i = 0; i< results.data.length; i++){let img= document.createElement("img"); 
img.setAttribute("src",results.data[i].images.fixed_height.url);
let p = document.getElementById("p");
p.appendChild(img);
}

}




