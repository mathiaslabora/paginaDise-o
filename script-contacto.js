//apunta a los id de los html son los input de el formulario
let nombreForm = document.getElementById('name');
let emailForm = document.getElementById('email');
let textAreaForm = document.getElementById('textArea');
let dialogMsg = document.getElementById('showDialog');

//funcion que limpia campos del formulario y tira un alert
const clean = () => {
    nombreForm.value = "";
    emailForm.value = "";
    textAreaForm.value = "";

    dialogMsg.innerHTML = `
    <div class="alert alert-primary" role="alert">
    Mensaje enviado correctamente!!!
    </div>`

    setTimeout(() => {
        dialogMsg.innerHTML = ''
    }, 4000);

}