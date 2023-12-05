

 
let citas = [];

function show_crear_cita() {
  document.getElementById("crear_cita").style.display = "block";
}
function close_crear_cita() {
  document.getElementById("crear_cita").style.display = "none";
}
function showAlert() {
  document.getElementById("alert").style.display = "block";
}

function closeAlert() {
  document.getElementById("alert").style.display = "none";
}


function crear_cita() {

    let cita = {
        nombre: document.getElementById("nombre").value,
        tipo:document.getElementById("tipo").value,
        propietario: document.getElementById("propietario").value,
        telefono: document.getElementById("telefono").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        sintomas: document.getElementById("sintomas").value,
    }

citas.push(cita);

console.log(citas);
  }



function pintar() {

// let abierta = document.getElementById("abierta")
// let cerrada = document.getElementById("cerrada")
// let anulada = document.getElementById("anulada")

// if (abierta.checked) {


// }
// else if (cerrada.checked) {


// }
// else if (anulada.checked) {


// }

  let fragment = document.createDocumentFragment();
  citas.forEach((item, index) => {

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    let card_top = document.createElement("div");

card_top.classList.add("top");
card_top.classList.add("card_top");

let card_left = document.createElement("div");
card_left.classList.add("card_left");

let card_right = document.createElement("div");
card_right.classList.add("card_right");

    let img = document.createElement("img");
    img.src = item.img;
    img.classList.add("fotos");
  
    let name_div = document.createElement("div");
    name_div.classList.add("name")
    let name = document.createElement("h5");
    name.textContent = "Nombre:"
    let nombre = document.createElement(`p`);
    nombre.textContent = item.nombre

    let type_div = document.createElement("div");
    type_div.classList.add("type");
    let type= document.createElement("h5");
    type.textContent = "Tipo:"
    let tipo = document.createElement("p");
    tipo.textContent = item.tipo

    let one=document.createElement("div")
    one.classList.add("int");
    let owner_div = document.createElement("div");
    let owner= document.createElement("h5");
    owner.textContent = "Propietario:"
    let propietario = document.createElement("p");
    propietario.textContent=item.propietario

    let phone_div=document.createElement("div")
    let phone=document.createElement("h5");
    phone.textContent = "Telefono";
    let telefono = document.createElement("p");
    telefono.textContent=item.telefono

    let two=document.createElement("div")
    two.classList.add("int");
    let date_div=document.createElement("div")
    let date=document.createElement("h5");
    date.textContent="Fecha:"
    let fecha = document.createElement("p");
    fecha.textContent=item.fecha

    let time_div=document.createElement("div")
    let time=document.createElement("h5");
    time.textContent="Hora:"
    let hora = document.createElement("p");
    hora.textContent=item.hora

    let info_div=document.createElement("div")
    info_div.classList.add("info");
    let info=document.createElement("h5");
    info.textContent="Sintomas:"
    let sintomas = document.createElement("h6");
    sintomas.classList.add("sintomas");
    sintomas.textContent=item.sintomas

let pie=document.createElement("div");
pie.classList.add("pie");

    let button = document.createElement("button");
    button.classList.add("botonc");
    button.textContent = "Editar";
    button.addEventListener("click", () => {
      editar(index, item);
    });

    let estado=document.createElement("select");
    estado.id = "estado";
    estado.classList.add("botonc"); 
    let opciones = ["Abierta", "Cerrada", "Anulada"];
    opciones.forEach((opcion, index) => {
      let option = document.createElement("option");
      option.value = index; 
      option.textContent = opcion;
      estado.appendChild(option);
    });


   
    card_top.appendChild(img);
    name_div.appendChild(name);
    name_div.appendChild(nombre);
    type_div.appendChild(type);
    type_div.appendChild(tipo);
    owner_div.appendChild(owner);
    owner_div.appendChild(propietario);
    phone_div.appendChild(phone);
    phone_div.appendChild(telefono);
    one.appendChild(owner_div);
    one.appendChild(phone_div);
    date_div.appendChild(date);
    date_div.appendChild(fecha);
    time_div.appendChild(time);
    time_div.appendChild(hora);
    two.appendChild(time_div);
    two.appendChild(date_div);
    card_left.appendChild(name_div);
    card_left.appendChild(type_div);
    card_right.appendChild(one);
    card_right.appendChild(two);
    card_top.appendChild(card_left)
    card_top.appendChild(card_right)
    tarjeta.appendChild(card_top);
    info_div.appendChild(info);
    info_div.appendChild(sintomas);
    tarjeta.appendChild(info_div);
    pie.appendChild(button);
    pie.appendChild(estado);
    tarjeta.appendChild(pie);

    fragment.appendChild(tarjeta);
  });

  document.getElementById("contenedor_citas").appendChild(fragment);
}

function validar() {
  const telefono = /^\d{10}$/;
  const fechaactual = new Date();
  const fechaingresada = new Date(
    `${document.getElementById("fecha").value} 23:00:00`
  );

  const hora_ingresada = new Date(
    `2023-01-01 ${document.getElementById("hora").value}`
  );
  const inicio_mañana = new Date(`2023-01-01 08:00`);
  const fin_mañana = new Date(`2023-01-01 11:30`);
  const inicio_tarde = new Date(`2023-01-01 14:00`);
  const fin_tarde = new Date(`2023-01-01 17:30`);

  if (document.getElementById("nombre").value == "") {
    document.getElementById("alert-content").textContent =
      " Debe ingresar un nombre para continuar";
    showAlert();
  } else if (document.getElementById("tipo").value == "Seleccione") {
    document.getElementById("alert-content").textContent =
      " Debe seleccionar un tipo para continuar";
    showAlert();
  } else if (document.getElementById("propietario").value == "") {
    document.getElementById("alert-content").textContent =
      " Debe ingresar nombre del propietario para continuar";
    showAlert();
  } else if (!telefono.test(document.getElementById("telefono").value)) {
    document.getElementById("alert-content").textContent =
      " Ingrese un numero de telefono valido";
    showAlert();
  } else if (fechaingresada < fechaactual) {
    document.getElementById("alert-content").textContent =
      " Debe ingresar una fecha valida";
    showAlert();
  } else if (
    !((hora_ingresada >= inicio_mañana &&
    hora_ingresada <= fin_mañana) ||
    (hora_ingresada >= inicio_tarde &&
    hora_ingresada <= fin_tarde))
  ) {
    document.getElementById("alert-content").textContent =
      "Debe ingresar una hora válida (entre 8:00am y 11:30am o entre 02:00pm y 05:30pm)";
    showAlert();
  } else if (document.getElementById("sintomas").value == "") {

    document.getElementById("alert-content").textContent =
      " Debe ingresar una descripcion de los sintomas para continuar";
    showAlert();
  } else {
    close_crear_cita();
    crear_cita()
    pintar()
  }
}
