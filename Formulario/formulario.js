
let registros = []

let op = null
let indice=null


function registrar() {
   


    if (op===true){
        registros[indice].nombre=document.getElementById("nombre").value
        registros[indice].apellido=document.getElementById("apellido").value
        registros[indice].tipo_documento=document.getElementById("t_documento").value
        registros[indice].numero_documento=document.getElementById("n_documento").value

        let masculino = document.getElementById("masculino")
    let femenino = document.getElementById("femenino")

    if (masculino.checked) {
        registros[indice]. genero= "masculino"
    }
    else if (femenino.checked) {
        registros[indice]. genero= "femenino"
    }
     

        registros[indice].telefono=document.getElementById("telefono").value
        registros[indice].email=document.getElementById("email").value
        registros[indice].fecha_nacimiento=document.getElementById("fecha").value

      }
      else{
        


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

      }

    console.log(registros)


    localStorage.setItem('array_registros', JSON.stringify(registros));







    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("t_documento").value="";
    document.getElementById("n_documento").value="";
    document.getElementById("telefono").value="";
    document.getElementById("email").value="";
    document.getElementById("fecha").value="";




    document.getElementById("alert9").textContent = "Registro realizado con exito"
    setTimeout(() => {
        document.getElementById("alert9").textContent = ""
    }, 4000);


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

    document.getElementById("table").innerHTML = "";


pintar()
    
op=false;
}}



function pintar(){
    let frag= document.createDocumentFragment()

    registros.forEach((item, index) => {
      let tr = document.createElement("tr")
      let td1 = document.createElement("td")
      let td2 = document.createElement("td")
      let td3 = document.createElement("td")
      let td4 = document.createElement("td")
      let td5 = document.createElement("td")
      let td6 = document.createElement("td")
      let td7 = document.createElement("td")
      let td8 = document.createElement("td")
      let td9 = document.createElement("td")
      let editar = document.createElement("button")
      let eliminar = document.createElement("button")

      editar.textContent = "📝"
      editar.addEventListener("click",()=>{
        edita(item, index)
      })


      eliminar.textContent="❌"
      eliminar.addEventListener("click",()=>{
       borrar(index)
      })

      td1.textContent=item.nombre
      td2.textContent=item.apellido
      td4.textContent=item.genero
      td3.textContent=item.email
      td5.textContent=item.tipo_documento
      td6.textContent=item.numero_documento
      td7.textContent=item.fecha_nacimiento
      td8.textContent=item.telefono
      td9.appendChild(editar)
      td8.appendChild(eliminar)
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      tr.appendChild(td5)
      tr.appendChild(td6)
      tr.appendChild(td7)
      tr.appendChild(td8)
      tr.appendChild(td9)
      frag.appendChild(tr)
      document.getElementById("table").appendChild(frag)
    })
  }


  function edita(r, i){
    op =  true
    indice=i
    console.log(r);
    document.getElementById("nombre").value=r.nombre
       document.getElementById("apellido").value=r.apellido
      document.getElementById("email").value=r.email

if(r.genero==="masculino"){
    document.getElementById("masculino").checked=true
}else{
    document.getElementById("femenino").checked=true
}

      document.getElementById("telefono").value=r.telefono
      document.getElementById("t_documento").value=r.tipo_documento
      document.getElementById("n_documento").value=r.numero_documento
      document.getElementById("fecha").value=r.fecha_nacimiento

  }



  function borrar(i) {
    index=i
    registros.splice(index, 1);
    document.getElementById("tab le").innerHTML = "";
    pintar();
  }



let cadena_json = localStorage.getItem('array_registros');

registros = cadena_json ? JSON.parse(cadena_json) : [];

console.log("ARRAY GUARDADO")
console.log(registros)