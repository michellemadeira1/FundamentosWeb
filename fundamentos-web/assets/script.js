let nome = window.document.getElementById("nome")
let email = window.document.getElementById("email")
let assunto = window.document.getElementById("assunto")
let nomeOk  = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome =document.querySelector("#txtNome")
    if(nome.value.length<3){
       alert('nome invalido')
       txtNome.innerHTML = "Nome Inválido"
       txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome valido "
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
      let txtEmail = document.getElementById("txEmail")

      if (email.value.indexof("@") == -1 || email.value.indexof(".")){
          txtEmail.innerHTML = "E-mail Inválido "
          txtEmail.style.color = "red"
      }else{
        txtNome.innerHTML = "E-mail valido "
        txtNome.style.color = "green"
         emailOk = true
      }
}

function validaAssunto(){
    let txtAssunto = document.getElementById("txtAssunto")
    if(assunto.value.length >= 1000){
       txtAssunto.innerHTML = " Texto e muito grande , digite no máximo 100 carácter"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
         alert("Formulario enviado com sucesso!")
    }else{
        alert("Preencha o formulario corretamente antes de enviar..")
    }
}

function mapaZoom(){
 mapa.style.width = "800px"
 mapa.style.height = "600px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "150px"
}