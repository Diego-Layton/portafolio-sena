
let registros = []

function registrar() {

    let usuario = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        tipo_documento: document.getElementById("t_documento").value,
        numero_documento: document.getElementById("n_documento").value,
        genero: "",
        telefono: document.getElementById("telefono").value,
        email: document.getElementById("email").value,
        fecha_nacimiento: document.getElementById("fecha").value,
    }

    let masculino = document.getElementById("masculino")
    let femenino = document.getElementById("femenino")

    if (masculino.checked) {
        usuario.genero = "masculino"
    }
    else if (femenino.checked) {
        usuario.genero = "femenino"
    }


    registros.push(usuario)



    console.log(registros)


    localStorage.setItem('array_registros', JSON.stringify(registros));

}




function validar() {

    let arraycontrol=registros.length

    let verificadorc = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (document.getElementById("nombre").value == "") {
        document.getElementById("alert1").textContent = "Nombre no puede estar vacio"
        setTimeout(() => {
            document.getElementById("alert1").textContent = ""
        }, 15000);
    } else if (document.getElementById("apellido").value == "") {
        document.getElementById("alert2").textContent = "Apellido no puede estar vacio"
        setTimeout(() => {
            document.getElementById("alert2").textContent = ""
        }, 15000);
    } else if(document.getElementById("t_documento").value == "Seleccione una opcion"){
        document.getElementById("alert3").textContent = "Debe seleccionar un tipo de documento"
        setTimeout(() => {
            document.getElementById("alert3").textContent = ""
        }, 10000);
    }
    else if(document.getElementById("n_documento").value.length<7){
        document.getElementById("alert4").textContent = "Ingrese un numero de id valido"
        setTimeout(() => {
            document.getElementById("alert4").textContent = ""
        }, 4000);
    }
else if(!document.querySelector('input[name="genero"]:checked')){
    document.getElementById("alert5").textContent = "Seleccione una opcion"
    setTimeout(() => {
        document.getElementById("alert5").textContent = ""
    }, 4000);

}
else if(document.getElementById("telefono").value.length<10){
    document.getElementById("alert6").textContent = "Ingrese un numero de telefono valido"
    setTimeout(() => {
        document.getElementById("alert6").textContent = ""
    }, 4000);
}
 else if (!verificadorc.test(document.getElementById("email").value)) {
    document.getElementById("alert7").textContent = "Ingrese un correo valido"
    setTimeout(() => {
        document.getElementById("alert7").textContent = ""
    }, 4000);

}
else if (document.getElementById("fecha").value == ""){
    document.getElementById("alert8").textContent = "ingrese un fecha de nacimiento para continuar"
    setTimeout(() => {
        document.getElementById("alert8").textContent = ""
    }, 5000);

}

else if ((new Date().getFullYear() - new Date(document.getElementById("fecha").value).getFullYear()) < 18)  {
    document.getElementById("alert8").textContent = "Debe ser mayor de edad para continuar con el registro"
    setTimeout(() => {
        document.getElementById("alert8").textContent = ""
    }, 5000);

}

else {
    registrar()
}

if(arraycontrol<registros.length){
    document.getElementById("alert9").textContent = "Registro realizado con exito"
    setTimeout(() => {
        document.getElementById("alert9").textContent = ""
    }, 4000);
}

else{
    document.getElementById("alert9").textContent = "No se ha realizado el resgistro, verifique que no haya campos vacios"
    setTimeout(() => {
        document.getElementById("alert9").textContent = ""
    }, 5000);
}
}





let cadena_json = localStorage.getItem('array_registros');

registros = cadena_json ? JSON.parse(cadena_json) : [];

console.log("ARRAY GUARDADO")
console.log(registros)