import { Cola } from "./Cola"


import { Contacto } from './contacto.js';

class Agenda {
  constructor() {
    this.contactos = new Cola()
  }

  // Método para agregar un contacto a la agenda
  agregarContacto(nombre, apellidos, numero) {
    const nuevoContacto = new Contacto();
    nuevoContacto.setName(nombre);
    nuevoContacto.setLastName(apellidos);
    nuevoContacto.setPhoneNumber(numero);
    this.contactos.enqueue(nuevoContacto);
  }

  // Método para mostrar todos los contactos en la agenda
  mostrarContactos() {
    let current = this.contactos.front;
    while (current) {
      const contacto = current.data;
      console.log(`${contacto.getName()} ${contacto.getLastName()} - ${contacto.getPhoneNumber()}`);
      current = current.next;
    }
  }
}

// Exportar la clase Agenda para que esté disponible en otros archivos
export { Agenda };