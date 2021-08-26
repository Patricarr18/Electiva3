document.addEventListener('DOMContentLoaded', function() {

//pinta un mensaje de error segun el argumento mensaje_error
function mensaje(mensaje_error){
	var html = `
    <div class='notification is-danger'>
    	<h4 class='title is-4'> ${mensaje_error}</h4> 
	</div>
	`
	document.getElementById("error").innerHTML += html;
}

//esta funcion valida el correo electronico
function validarEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//valida todos las entradas
function validar(){
 	// variable de email
	var email = document.getElementById("correo").value;
	// variable de password
	var password = document.getElementById("password").value;

	//Si email esta vacio.
	if (email === ''){
		mensaje("Escriba el email");
	} 
	//Si Password esta vacio.
	if (password === ''){
		mensaje("Escriba el password");
	} 

	//Si el Email esta mal escrito.
	if (validarEmail(email)==false){
		mensaje("Mail esta mal escrito")
	}

	//validar que el corro y el password sean correctos.
	if ( email == "patricia@gmail.com" && password == "11417592"){
		window.location.href = "./exito.html"
	}else{
		mensaje("Correo electronico o password invalido.");
	}
}

	//Evento on click para el boton de iniciar sesión
	document.getElementById("btnEnviar").addEventListener('click', function() {
		document.getElementById("error").innerHTML = "";
		validar();
	})
}, false);