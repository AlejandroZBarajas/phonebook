export class Contacto{
    #nombreCont
    #numeroTelefonico

    setName(name){
        this.#nombreCont=name
    }
    getNameCont(){
        return this.#nombreCont
    }
    setPhoneNumber(number){
        this.#numeroTelefonico=number
    }
    getPhoneNumber(){
        return this.#numeroTelefonico
    }
}