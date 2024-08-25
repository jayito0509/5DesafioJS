const invitados = [  

];

  const listaDeInvitados = document.querySelector("tbody");
  const invitadoInput = document.querySelector("#nuevoInvitado");
  const btnAgregar = document.querySelector("#agregarInvitado");
  let tareasRealizadas = document.querySelector('#tareasRealizadas');
 
  adicionTarea();  
  real(invitados);

  btnAgregar.addEventListener("click", () => {
    /* Agregamos el invitado al arreglo */
    const nombreInvitado = { id: Date.now(), nombre: invitadoInput.value, realizado: false };
    invitados.push(nombreInvitado);
    invitadoInput.value = "";
    /* Actualizamos la información en el HTML */
    let html = "";
    for (let invitado of invitados) {      
        
      html += `       
        <tr>
          <td> ${invitado.id} </td>
          <td> ${invitado.nombre}  </td>
          <th> <input type="checkbox" ${invitado.realizado == true ? 'checked' : ''} id="hecho" data-index="${invitado.id}"  class="hecho"> </th>
          <th> <button onclick = "borrar( ${invitado.id} )"> Borrar </button> </th>
        </tr>      
      `     
      
      }
    listaDeInvitados.innerHTML = html;       
    adicionTarea();    
    real(invitados);    
  });

function real(tareasReal) {   
  const realizados = tareasReal.filter(invitado => invitado.realizado === true);
  const real = realizados.length;
  tareasRealizadas.textContent = real  
 
}



function adicionTarea(){
    totalTareas = document.querySelector('#totalTareas');
    //tareasRealizadas = document.querySelector('#tareasRealizadas');
    var conteo = invitados.length;
    totalTareas.textContent = conteo;
  }

function borrar(id) {
    const index = invitados.findIndex((ele) => ele.id == id);
    invitados.splice(index, 1);
    /* Actualizamos la información en el HTML */
    adicionTarea();
    renderInvitados();
  }

  function renderInvitados() {
    let html = "";
    for (let invitado of invitados) {
      html += ` <tr>
          <td> ${invitado.id} </td>
          <td> ${invitado.nombre}  </td>
          <th> <input type="checkbox" ${invitado.realizado == true ? 'checked' : ''} id="hecho" class="hecho"> </th>
          <th> <button onclick = "borrar( ${invitado.id} )"> Borrar </button> </th>
        </tr>   `;
    }
    listaDeInvitados.innerHTML = html;
    adicionTarea();   
    real(invitados); 
  }

  