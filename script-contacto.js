
let nombreForm = document.getElementById('name');
let emailForm = document.getElementById('email');
let textAreaForm = document.getElementById('textArea');
let dialogMsg = document.getElementById('showDialog');


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