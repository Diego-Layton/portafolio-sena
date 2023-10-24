<script>
      let datos = []
      let op = null
      let indice=null
      function guardarDatos() {
          // Obtener los valores de los campos del formulario
          var nombre = document.getElementById("nombres");
          var apellido = document.getElementById("apellidos");
          var correo = document.getElementById("correo");
          var genero =document.getElementById("gener");
          var TipDocumento=document.getElementById("tipDocument");
          var documento=document.getElementById("documento");
          var fecha=document.getElementById("date");

          if (op===true){
            datos[indice].nombre=document.getElementById("nombres").value
            datos[indice].apellido=document.getElementById("apellidos").value
          }else{
            datos.push(
            {
              nombre:nombre.value,
              apellido:apellido.value,
              correo:correo.value,
              genero:genero.value,
              TipDocumento:TipDocumento.value,
              documento:documento.value,
              fecha:fecha.value,
            }
          )
          }

            console.log(datos);
            document.getElementById("tabla").innerHTML=""
            pintar()
            op=false
      }

      function pintar(){
        let frag= document.createDocumentFragment()

        datos.forEach((item, index) => {
          let tr = document.createElement("tr")
          let td1 = document.createElement("td")
          let td2 = document.createElement("td")
          let td3 = document.createElement("td")
          let td4 = document.createElement("td")
          let td5 = document.createElement("td")
          let td6 = document.createElement("td")
          let td7 = document.createElement("td")
          let td8 = document.createElement("td")
          let editar = document.createElement("button")
          let eliminar = document.createElement("button")
          editar.textContent = "📝"
          editar.addEventListener("click",()=>{
            edita(item, index)
          })
          eliminar.textContent="❌"
          td1.textContent=item.nombre
          td2.textContent=item.apellido
          td4.textContent=item.genero
          td3.textContent=item.correo
          td5.textContent=item.TipDocumento
          td6.textContent=item.documento
          td7.textContent=item.fecha
          td8.appendChild(editar)
          td8.appendChild(eliminar)
          tr.appendChild(td1)
          tr.appendChild(td2)
          tr.appendChild(td3)
          tr.appendChild(td4)
          tr.appendChild(td5)
          tr.appendChild(td6)
          tr.appendChild(td7)
          tr.appendChild(td8)
          frag.appendChild(tr)
          document.getElementById("tabla").appendChild(frag)
        })
      }

      function edita(r, i){
        op =  true
        indice=i
        console.log(r);
        document.getElementById("nombres").value=r.nombre
           document.getElementById("apellidos").value=r.apellido
          document.getElementById("correo").value=r.correo
          document.getElementById("gener").value=r.genero
          document.getElementById("tipDocument").value=r.TipDocumento
          document.getElementById("documento").value=r.documento
          document.getElementById("date").value=r.fecha
      }

</script>