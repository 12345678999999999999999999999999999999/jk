const accesKey = "rhpZToyXTImU_2l60GUD6xlIgj8LZJ_X56QZFdrscSs"

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const searchMoreBtn = document.getElementById("show-more-btn")

let keyword = ""
let page = 1

async function searchImages(){
    keyword=searchBox.value
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accesKey}`

const response = await fetch(url)
const data = await response.json()

// console.log(data)
const results = data.results

results.map((result)=> {
    const image = document.createElement("img")
    image.src = result.urls.small
    const imageLink = document.createElement("a")
    imageLink.href=result.links.html
    imageLink.target="_blank"

    imageLink.append(image)
    searchResult.append(imageLink)
})
}

searchForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    page=1
    searchImages()
})