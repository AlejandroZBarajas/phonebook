import {Agenda} from "../models/Agenda.js"
import { Contacto } from "../models/Contacto.js"


const nombreInput = document.getElementById("contName").value
const apellidosInput = document.querySelector("contApell").value
const numeroInput = document.querySelector("contNum").value
const guardarBtn = document.getElementById('getFields')
const displayContactDiv = document.getElementById('displayContact');


const colaContactos = new Agenda();

// Función para manejar el clic en el botón "Guardar contacto"
function guardarContacto() {
  const nombre = nombreInput.value;
  const apellidos = apellidosInput.value;
  const numero = numeroInput.value;

  // Crear una instancia de Contacto con los datos ingresados
  const nuevoContacto = new Contacto();
  nuevoContacto.setName(nombre);
  nuevoContacto.setLastName(apellidos);
  nuevoContacto.setPhoneNumber(numero);

  // Agregar el contacto a la cola
  colaContactos.enqueue(nuevoContacto);

  // Limpiar los campos de entrada
  nombreInput.value = '';
  apellidosInput.value = '';
  numeroInput.value = '';

  // Mostrar los contactos en el div de visualización
  mostrarContactos();
}

// Función para mostrar los contactos en el div de visualización
function mostrarContactos() {
  displayContactDiv.innerHTML = ''; // Limpiar el contenido del div
  let current = colaContactos.front;
  while (current) {
    const contacto = current.data;
    const contactoDiv = document.createElement('div');
    contactoDiv.textContent = `${contacto.getName()} ${contacto.getLastName()} - ${contacto.getPhoneNumber()}`;
    displayContactDiv.appendChild(contactoDiv);
    current = current.next;
  }
}


guardarBtn.addEventListener('click', guardarContacto);