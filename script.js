

let correoUsuario = document.getElementById('correoUsuario');
correoUsuario.innerHTML = ``;
console.log('aca')
if(localStorage.getItem('email') == null){
    window.location.href = "./login.html"
}else{
    correoUsuario.innerHTML = `Bienvenido: ${ localStorage.getItem('email')}`
}




function logueo(){
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
   
    if(email == ""){
       return alert("Reingrese correo")
    }
     if(pass == ""){
       return alert("Ingrese una contraseña")
    }
    localStorage.setItem('email', email);

    window.location.href = "./index.html"
}


function cerrarSesion(){
    localStorage.removeItem('email')
    window.location.href = "./login.html"
}