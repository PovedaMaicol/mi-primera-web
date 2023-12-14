const colores  = ["bluesky", "green", "yellow", "pink"]
function randomColor(length){
    return Math.floor(Math.random() * length)
  
}

const btn = document.getElementById("btn")

btn.onclick =  function(){
    document.body.style.background = colores[Math.floor(Math.random)]
}