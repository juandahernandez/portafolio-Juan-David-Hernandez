const nav = document.getElementById("nav")

window.onscroll = function() {
    const y = window.scrollY;
    if( y > "350"){
        nav.style.background="rgba(40 ,97 ,150, 0.8)"
    }else{
        nav.style.backgroundColor="rgba(0, 0, 0, 0.1)"
    }
}

//const btn = document.getElementById("btn-menu")

const menu = document.getElementById("menu")
const body = document.getElementById("body")
// const btnA = document.getElementsByTagNameNS("a")

    function btnA(){
        menu.style.marginLeft = "-100%"
        body.style.overflowY = "scroll"
    }

function toogleMenu() {
    // menu.style.marginLeft = "0"
   
   if( menu.style.marginLeft === "-100%" ){
    menu.style.marginLeft = "0"
    body.style.overflowY = "hidden"
    
   }else{
    menu.style.marginLeft = "-100%"
    body.style.overflowY = "scroll"
   }
}


