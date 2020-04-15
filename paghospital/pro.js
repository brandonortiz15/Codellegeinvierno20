function sesion() {
	document.getElementById("vent").style.display="block";
	
}

function cerrar() {
	document.getElementById("vent").style.display="none";
}

function iniciar(){
	var nombr = document.getElementById("nombre").value;
	var contr = document.getElementById("contra").value;
	var usua =  document.getElementById("usuario").value;
	
	

	if (contr==="" && nombr=="") {
		window.alert("Rellena todos los campos");
	}

	

	if (nombr=="Alejandro" && contr=="123" ) {
	document.getElementById("vent").style.display="none";
	document.getElementById("sesion").innerHTML = " Alejandro Lopez";


	}else{
		window.alert("Usuario o contraseña no son validos");
	}
}