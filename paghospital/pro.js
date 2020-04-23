function sesion() {
	document.getElementById("vent").style.display="block";
	
}

function cerrar() {
	document.getElementById("vent").style.display="none";
}

function iniciar(){
	var nombr = document.getElementById("nombre").value;
	var contr = document.getElementById("contra").value;
		
	

	if (contr==="" && nombr==""){
		window.alert("Rellena todos los campos");
	}

	

	if (nombr=="Alejandro" && contr=="1234" ) {
	document.getElementById("vent").style.display="none";
	document.getElementById("sesi").innerHTML ="Alejandro";


	}
	else{
		window.alert("Usuario o contraseña no son validos");
	}
}

function enviar(){


			var info=[], g=0;	
	 info[0]= document.getElementById("nom").value;
	 info[1]= document.getElementById("asunto").value;
	 info[2]= document.getElementById("email").value;
	 info[3]= document.getElementById("telefono").value;
	 info[4]= document.getElementById("hospital").value;
	 info[5]= document.getElementById("mensaje").value;

			
			
			for(var i=0;i < 6;i++){
			
				if(info[i]==""){g++}
			
			}
			
			for(var i=0;i < 4;i++){
			
			console.log(info[i]);
			
			}
		}

		function enviar(){


			var info=[], g=0;	
	 info[0]= document.getElementById("name").value;
	 info[1]= document.getElementById("gmail").value;
	 info[2]= document.getElementById("ciudad").value;
	 info[3]= document.getElementById("edad").value;
	 info[4]= document.getElementById("sexo").value;
	 
			
			
			for(var i=0;i < 5;i++){
			
				if(info[i]==""){g++}
			
			}
			
			for(var i=0;i < 4;i++){
			
			console.log(info[i]);
			
			}
		}

		function aparece(){
		
			document.getElementById("activo").style.display="initial";
		
		}
		
		function desaparece(){
		
			document.getElementById("activo").style.display="none";
		
		}
		
		
		
		function hola(){
		
			var info=[], g=0;
			
			info[0]=document.getElementById("nombre").value;
			info[1]=document.getElementById("email").value;
			info[2]=document.getElementById("tel").value;
			info[3]=document.getElementById("asu").value;
			info[4]=document.getElementById("hos").value;
			info[5]=document.getElementById("area").value;
			
			for(var i=0;i < 6;i++){
			
				if(info[i]==""){g++}
			
			}
			
			for(var i=0;i < 6;i++){
			
			console.log(info[i]);
			
			}
			if(g==0){
			document.getElementById("nono").style.display="none";
			document.getElementById("terminado").style.display="initial";
			}
		}