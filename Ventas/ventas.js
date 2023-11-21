let productos = [
    {id:1, nombre:"Recordatorios", precio:4000, img:"bautizo.jpeg"},
    {id:2, nombre:"Llaveros", precio:3500, img:"llaveros.jpg"},
    {id:3, nombre:"Manillas", precio:25000, img:"manillas.jpg"},
    {id:4, nombre:"Tarjetas de Invitacion", precio:7000, img:"invitacion.jpeg"},
    {id:5, nombre:"Retablos", precio:50000, img:"retablos.jpg"},
    {id:6, nombre:"pocillos Personalizados", precio:18000, img:"pocillos.jpg"},
    {id:7, nombre:"Tarjetas Personalizadas", precio:5000, img:"tarjetaspersonalizadas.jpg"},
    {id:8, nombre:"Boligrafos", precio:5000, img:"boligrafos.jpg"},
    {id:9, nombre:"Acrilicos", precio:25000, img:"acrilicos.jpg"},
    {id:10, nombre:"Cajas Personalizadas", precio:5000, img:"cajas.jpeg"},
    {id:11, nombre:"Vasos", precio:6000, img:"vasos.jpeg"},
    {id:12, nombre:"Camisas Estampadas", precio:30000, img:"camisas.png"},
] 

document.addEventListener("DOMContentLoaded",()=>{
    pintar()
})

function pintar(){

    let fragment = document.createDocumentFragment();
    productos.forEach((item,index)=>{
        let div = document.createElement("div");
        div.classList.add("tarjetas")
        let img = document.createElement("img");
        img.src= item.img
        img.classList.add("fotos")
        let h2 = document.createElement("h2");
        h2.textContent = item.nombre
        let p = document.createElement("p")
        let button = document.createElement("button")
        button.classList.add("botonc")
        button.textContent = "AGREGAR AL CARRITO"
        button.addEventListener("click",()=>{
            carrito(index,item);
            
        })
        p.textContent = item.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(button)
        fragment.appendChild(div)

    })

    document.getElementById("container").appendChild(fragment)
}

let carritoItems = [];

function carrito(index, item) {
    let frag2 = document.createDocumentFragment();


    let existingItem = carritoItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
        existingItem.cantidad++;
        existingItem.total = existingItem.cantidad * item.precio;
    } else {
        let newItem = {
            id: item.id,
            nombre: item.nombre,
            cantidad: 1,
            precio: item.precio,
            total: item.precio,
            img: item.img,
        };
        carritoItems.push(newItem);
    }

    actualizarTabla();
}

function borrar(index) {
    carritoItems.splice(index, 1);
    actualizarTabla();
}

function actualizarTabla() {
    document.getElementById("table").innerHTML = "";

    let frag2 = document.createDocumentFragment();

    carritoItems.forEach((item) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let eliminar = document.createElement("button");

        eliminar.textContent = "❌";
        eliminar.addEventListener("click", () => {
            borrar(carritoItems.indexOf(item));
        });

        let imgElement = document.createElement("img");
        imgElement.src = item.img;
        imgElement.classList.add("foto");

        td1.appendChild(imgElement);
        td2.textContent = item.nombre;
        td3.textContent = item.cantidad;
        td4.textContent = item.total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(eliminar);
        frag2.appendChild(tr);
    });

    document.getElementById("table").appendChild(frag2);
}

document.addEventListener("DOMContentLoaded", () => {

    const carritoImagen = document.getElementById("carritoImagen");
    const tabla = document.getElementById("tabla");

    carritoImagen.addEventListener("mouseover", mostrarTabla);
    tabla.addEventListener("mouseleave", ocultarTabla);
});

function mostrarTabla() {
    const tabla = document.getElementById("tabla");
    tabla.style.display = "block";
}

function ocultarTabla() {
    const tabla = document.getElementById("tabla");
    tabla.style.display = "none";
}
