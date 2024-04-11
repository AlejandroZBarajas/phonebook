import { nuevoContacto , agenda} from "./dependencies.js"
import {Contacto} from "../models/Contacto.js"


const guardarBtn = document.getElementById("getFields")
const showBtn = document.getElementById("showbtn")
guardarBtn.addEventListener("click", guardarContacto)
showBtn.addEventListener("click", mostrarContactos)



function guardarContacto() {
   
    const nombreInput = document.getElementById("contName").value
    const numeroInput = document.getElementById("contNum").value
    const nombre = nombreInput
    const numero = numeroInput
    nuevoContacto.setName(nombre)
    nuevoContacto.setPhoneNumber(numero)
    agenda.enqueue(nuevoContacto)
    displayContactDiv.innerHTML = ""
    //console.log(agenda.peek())
 
    
}
const displayContactDiv=document.getElementById("displayContact")

function mostrarContactos() {
    while (agenda.getSize()!=0) {
        console.log("entra al while de impresion")
        let current = agenda.dequeue()
        console.log("regresa a la impresion despues del dequeue")

        const contacto = ("Nombre: "+current.getNameCont()+"_____ Numero Telefonico: "+current.getPhoneNumber())
        console.log(contacto)
        //let datosCont = contacto.
        const contactoDiv = document.createElement('div')
        contactoDiv.textContent = contacto
        displayContactDiv.appendChild(contactoDiv)
        current = current.next
  }
}

