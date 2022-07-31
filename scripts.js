 const rec = document.querySelector("h1");
 rec.addEventListener('click',function(event){
    rec.innerText = "super click  bro !!";
    rec.style.color = "yellow";
    event.preventDefault();
 });