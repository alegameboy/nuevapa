



// Registro y login


const menu = document.getElementById('menu')
const menuposOriginal = menu.offsetTop;

addEventListener('scroll', ()=>{
    if(pageYOffset>menuposOriginal){
        menu.classList.add('menu-fixed')
    }else{
        menu.classList.remove('menu-fixed')
    }
})

function abrirLogin(){
    document.getElementById("loginpop").style.display="block";
}


function cerrar(){
    document.getElementById("loginpop").style.display="none";
}

function cerrar2(){
    document.getElementById("loginpop").style.display="none";
    document.getElementById("divL").style.display="block";
    document.getElementById("divR").style.display="none";
}


function cambiodeLaR(){
    document.getElementById("divL").style.display="none";
    document.getElementById("divR").style.display="block";
}


//valdidacion
