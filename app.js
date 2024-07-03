const accessKey = "tdqgnFJpg6QJAlTx5d0jjdPZoJGHkxB5kf0JVS32VaM";

const search = document.querySelector(".search");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const searchResult = document.querySelector(".search-result");
const showMore  = document.querySelector(".show-more");
const container = document.querySelector(".container");

let keyword = "";
let page = 1;

async function searchImage(){
    container.classList.add("glass");

    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchResult.innerHTML = "";
    }
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"; //to open link in new tab

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMore.style.display="block";
    // console.log(data);
}

searchBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})

showMore.addEventListener("click",()=>{
    page++;
    searchImage();
})