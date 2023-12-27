var cont = document.querySelector(".container")

function fetchData() {

    fetch("https://fakestoreapi.com/products")
        .then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            createCard(data)
        })
}

fetchData()

function createCard(data){
 
  
    data.forEach((prod) =>{
        var div= document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
      
        <img src=${prod.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${prod.title}</h5>
          <p class="card-text">${prod.description}.</p>
          <a href="#" class="btn btn-primary">${prod.price}</a>
        </div>
   
        `
        cont.appendChild(div)
    })
   
}

createCard()