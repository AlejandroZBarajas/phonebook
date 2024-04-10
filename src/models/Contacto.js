export class Contacto{
    #Nombre
    #Apellidos
    #NumeroTelefonico

    setName(name){
        this.#Nombre=name
    }
    getName(){
        return this.#Nombre
    }
    setLastName(apellidos){
        this.#Apellidos=apellidos
    }
    getLastName(){
        return this.#Apellidos
    }
    setPhoneNumber(number){
        this.#NumeroTelefonico=number
    }
    getPhoneNumber(){
        return this.#NumeroTelefonico
    }

}