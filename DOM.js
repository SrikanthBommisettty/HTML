function feedback(){
    // console.log("Thank You...!")
    let btn = document.getElementById('btn');
    let text = document.getElementById('text');
    let title = document.getElementById('title');
    title.innerText = 'thank you' + " "+ text.value;
    btn.style.display='none';
}