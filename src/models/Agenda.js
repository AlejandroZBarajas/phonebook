import { Cola } from "./Cola.js"

export class Agenda {
    #agenda = Cola

  constructor() {
    this.#agenda = new Cola()
  }

  agregarContacto(contacto){
    this.#agenda.enqueue(contacto)
  }

  mostrarContactos() {
    let current = this.contactos.inicio;
    while (current) {
      const contacto = current.data;
      console.log(contacto.getName())
      current = current.next;
    }
  }
}

