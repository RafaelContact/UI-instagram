var pwd = window.document.getElementById('pwd')
var value = pwd.value
var show = window.document.getElementById('show')
var submit = window.document.getElementById('submit')
var email = window.document.getElementById('email')

document.getElementById("show").addEventListener("click", function(e){
    e.preventDefault()
})



function change(){
    if(pwd.type == 'password'){
        show.innerHTML = "Ocultar"
        pwd.type = 'text'   
    }else{
        pwd.type = 'password'
        show.innerHTML = "Mostrar"
    }
}
// tente armazenar dentro de um array



pwd.addEventListener('input', keep)

function keep(e){ // Está funcionando, mas não funciona no carregamento da página, só funciona quando o número fica zerado após apagar tudo
    var x = e.target.value
    if(x.length == 0 ){
        show.innerHTML = ''
    }else{
        show.innerHTML = "Mostrar"
    }
    if(x.length < 5){ // como fazer funcionar só carregando algum valor no email ?
        submit.style.background = '#b2dffc'
        //inserir também um prevent defalt
    }else{
        submit.style.background = '#0095F6'
    }
}
function loading(){
    show.innerHTML = ''
}