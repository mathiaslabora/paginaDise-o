
//hace referencia a div html con el id correspondiente
let correoUsuario = document.getElementById('correoUsuario');
correoUsuario.innerHTML = ``;
console.log('aca')
//verifica si esta logueado, si no lo esta, redirecciona a la pagina de logueo.
if(localStorage.getItem('email') == null){
    window.location.href = "./login.html"
}else{
    correoUsuario.innerHTML = `Bienvenido: ${ localStorage.getItem('email')}`
}



/* toma los datos del formulario y los guarda en el localStorage */
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

//para cerrar sesion vacia el local storage y redirige a el login.
function cerrarSesion(){
    localStorage.removeItem('email')
    window.location.href = "./login.html"
}