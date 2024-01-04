var cont = document.querySelector(".container")
var userData = ""
var productsData = []

function fetchData() {

    fetch("https://fakestoreapi.com/products")
        .then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            productsData = [...data]
            createCard(data)
        })
}

fetchData()

function createCard(data){
 
    emptyContainer()
    
    data?.forEach((prod) =>{
        var div= document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
      
        <img src=${prod.image} class="card-img-top" alt="..." height="150" width="100">
        <div class="card-body">
          <h5 class="card-title">${prod.title}</h5>
          <p style="max-height:100px; overflow-Y:scroll" class="card-text">${prod.description}.</p>
          <a href="#" class="btn btn-primary">${prod.price}</a>
        </div>
   
        `
        cont.appendChild(div)
    })
   
}

createCard()

function emptyContainer(){
    while(cont.hasChildNodes()){
        cont.removeChild(cont.firstChild)
    }
}

function uData(e){
    userData = e.value
}

function filterData(){
   const filterArray =  productsData.filter((val)=>{
        return val.title.toUpperCase().includes(userData.toUpperCase())
    })

    createCard(filterArray)
}