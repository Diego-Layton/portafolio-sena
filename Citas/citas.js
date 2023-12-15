let citas = [];
let cerradas = [];
let anuladas = [];

let indice=""
let array_editable=""
let op= false

let mascotas = [
  {nombre:"electrico",  img:"pikachu.gif"},
  {nombre:"fuego",  img:"fuego.gif"},
  {nombre:"agua",  img:"agua.gif"},
  {nombre:"planta",  img:"planta.gif"},
  {nombre:"acero",  img:"acero.gif"},
  {nombre:"psiquico",  img:"psiquico.gif"},
  {nombre:"normal",  img:"normal.gif"},
  {nombre:"volador",  img:"volador.gif"},
  {nombre:"indefinido",  img:"indefinido.gif"},

]

function fotos(x) {

  document.getElementById("fotos0").innerHTML = "";


  let opcion=document.getElementById("tipo").value

  let img = document.createElement("img");
  img.classList.add("fotos1");
  let mascota= mascotas.find((m) => m.nombre === opcion || m.nombre === x );
  img.src = mascota ? mascota.img :"";

  document.getElementById("fotos0").appendChild(img);


}


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

  if (op===true){

    switch (array_editable) {
      case "citas":
    citas[indice].nombre=document.getElementById("nombre").value
    citas[indice].tipo=document.getElementById("tipo").value
    citas[indice].propietario=document.getElementById("propietario").value
    citas[indice].telefono=document.getElementById("telefono").value
    citas[indice].fecha=document.getElementById("fecha").value
    citas[indice].hora=document.getElementById("hora").value
    citas[indice].sintomas=document.getElementById("sintomas").value
        break;
      case "cerradas":
        cerradas[indice].nombre=document.getElementById("nombre").value
        cerradas[indice].tipo=document.getElementById("tipo").value
        cerradas[indice].propietario=document.getElementById("propietario").value
        cerradas[indice].telefono=document.getElementById("telefono").value
        cerradas[indice].fecha=document.getElementById("fecha").value
        cerradas[indice].hora=document.getElementById("hora").value
        cerradas[indice].sintomas=document.getElementById("sintomas").value
        break;
      case "anuladas":
        anuladas[indice].nombre=document.getElementById("nombre").value
        anuladas[indice].tipo=document.getElementById("tipo").value
        anuladas[indice].propietario=document.getElementById("propietario").value
        anuladas[indice].telefono=document.getElementById("telefono").value
        anuladas[indice].fecha=document.getElementById("fecha").value
        anuladas[indice].hora=document.getElementById("hora").value
        anuladas[indice].sintomas=document.getElementById("sintomas").value
        break;
    }
   
pintar(array_editable)
  }
  else{


  let cita = {
    nombre: document.getElementById("nombre").value,
    tipo: document.getElementById("tipo").value,
    propietario: document.getElementById("propietario").value,
    telefono: document.getElementById("telefono").value,
    fecha: document.getElementById("fecha").value,
    hora: document.getElementById("hora").value,
    sintomas: document.getElementById("sintomas").value,
  };

  citas.push(cita);
 

  console.log(citas);
  document.getElementById("abierta").checked = true;

  pintar("citas");
}
vaciar()
op=false
}

function vaciar(){

  document.getElementById("nombre").value=""
  document.getElementById("tipo").value=""
  document.getElementById("propietario").value=""
  document.getElementById("telefono").value=""
  document.getElementById("fecha").value=""
  document.getElementById("hora").value=""
  document.getElementById("sintomas").value=""
  document.getElementById("fotos0").innerHTML = "";
}

function pintar(filtro) {
  document.getElementById("contenedor_citas").innerHTML = "";

  let citasArray = [];

  switch (filtro) {
    case "citas":
      citasArray = citas;
      break;
    case "cerradas":
      citasArray = cerradas;
      break;
    case "anuladas":
      citasArray = anuladas;
      break;
  }

  let fragment = document.createDocumentFragment();
  citasArray.forEach((item, index) => {
    // let fragment = document.createDocumentFragment();
    // citas.forEach((item, index) => {

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
    img.classList.add("fotos");
    let mascota= mascotas.find((m) => m.nombre === item.tipo);
    img.src = mascota ? mascota.img :"";


    let name_div = document.createElement("div");
    name_div.classList.add("name");
    let name = document.createElement("h5");
    name.textContent = "Nombre:";
    let nombre = document.createElement(`p`);
    nombre.textContent = item.nombre;

    let type_div = document.createElement("div");
    type_div.classList.add("type");
    let type = document.createElement("h5");
    type.textContent = "Tipo:";
    let tipo = document.createElement("p");
    tipo.textContent = item.tipo;

    let one = document.createElement("div");
    one.classList.add("int");
    let owner_div = document.createElement("div");
    let owner = document.createElement("h5");
    owner.textContent = "Propietario:";
    let propietario = document.createElement("p");
    propietario.textContent = item.propietario;

    let phone_div = document.createElement("div");
    let phone = document.createElement("h5");
    phone.textContent = "Telefono";
    let telefono = document.createElement("p");
    telefono.textContent = item.telefono;

    let two = document.createElement("div");
    two.classList.add("int");
    let date_div = document.createElement("div");
    let date = document.createElement("h5");
    date.textContent = "Fecha:";
    let fecha = document.createElement("p");
    fecha.textContent = item.fecha;

    let time_div = document.createElement("div");
    let time = document.createElement("h5");
    time.textContent = "Hora:";
    let hora = document.createElement("p");
    hora.textContent = item.hora;

    let info_div = document.createElement("div");
    info_div.classList.add("info");
    let info = document.createElement("h5");
    info.textContent = "Sintomas:";
    let sintomas = document.createElement("h6");
    sintomas.classList.add("sintomas");
    sintomas.textContent = item.sintomas;

    let pie = document.createElement("div");
    pie.classList.add("pie");

    let button = document.createElement("button");
    button.classList.add("botonc");
    button.textContent = "Editar";
    button.addEventListener("click", () => {
      editar(index, item, filtro);
    });

    let estado = document.createElement("select");
    estado.id = "estado";
    estado.classList.add("botonc");
    let opciones = ["Abierta", "Cerrada", "Anulada"];
    opciones.forEach((opcion, index) => {
      let option = document.createElement("option");
      option.value = index;
      option.textContent = opcion;
      estado.appendChild(option);
      
      switch (filtro) {
        case "citas":
          estado.value="0"
          break;
          case "cerradas":
          estado.value="1"
          break;
          case "anuladas":
            estado.value="2"
            break;
      }


    });

    estado.addEventListener("change", () => {
      let selectedValue = estado.value;

      switch (selectedValue) {
        case "0":
          citas.push(citasArray[index]);
           
          break;
        case "1":
          cerradas.push(citasArray[index]);
  
          break;
        case "2":
          anuladas.push(citasArray[index]);
          
          break;
      }
      borrar(index, filtro);
      console.log(filtro);
      console.log(index);
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
    card_top.appendChild(card_left);
    card_top.appendChild(card_right);
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

function borrar(i, filtro) {
  index = i;

  switch (filtro) {
    case "citas":
      citas.splice(index, 1);
      break;
    case "cerradas":
      cerradas.splice(index, 1);
      break;
    case "anuladas":
      anuladas.splice(index, 1);
      break;
  }

  document.getElementById("contenedor_citas").innerHTML = "";
  pintar(filtro);
  op=false
}

function editar(index, item, filtro){
  array_editable=filtro
  op =  true
  indice= index
  document.getElementById("nombre").value = item.nombre
  document.getElementById("tipo").value = item.tipo
  document.getElementById("propietario").value =item.propietario
  document.getElementById("telefono").value = item.telefono
  document.getElementById("fecha").value = item.fecha
  document.getElementById("hora").value = item.hora
  document.getElementById("sintomas").value = item.sintomas

  fotos(item.tipo)
  show_crear_cita()
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
    !(
      (hora_ingresada >= inicio_mañana && hora_ingresada <= fin_mañana) ||
      (hora_ingresada >= inicio_tarde && hora_ingresada <= fin_tarde)
    )
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
    crear_cita();
  }
}
