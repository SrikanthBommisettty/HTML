fetchquote = ()=>{
    fetch("https://type.fit/api/quotes").then((data) =>{
        return data.json();
    }).then((data) => {
        console.log(data);
        let random = Math.floor(Math.random() * data.length);
        document.getElementById('quote').innerHTML=data[random].text;
        document.getElementById('author').innerHTML="-"+data[random].author;
    })
}
fetchquote();