
let presupuesto = document.getElementById('alert').style.display = 'block';

let registros = []

let op = null
let indice=null

function registrar() {

    let gasto = {
        nombre: document.getElementById("gasto").value,
        cantidad: document.getElementById("cantidad").value,
    }

    registros.push(gasto)



console.log(registros)
localStorage.setItem('array_gastos', JSON.stringify(registros));
}


let cadena_json = localStorage.getItem('array_gastos');

registros = cadena_json ? JSON.parse(cadena_json) : [];

console.log("ARRAY GUARDADO")
console.log(registros)








// alerta






function showAlert() {
    document.getElementById('alert').style.display = 'block';
}

function closeAlert() {
    document.getElementById('alert').style.display = 'none';
}


function closeAlertpres() {
    if(document.getElementById('presopuesto').value =="") {
        document.getElementById('press').textContent ="ingrese un monto"
    }
    else{
    document.getElementById('alertpres').style.display = 'none';
    let presupuestox = document.getElementById('presupuesto').value
    document.getElementById('texpres').textContent=parseInt(document.getElementById("presopuesto").value);
}}
