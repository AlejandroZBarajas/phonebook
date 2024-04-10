export class Node {
    #data
    #previous


    constructor(data){
        this.#data = data
        this.#previous = undefined
    }
    getData () {
        return this.#data
    }
    
    getPrevious(){
        return this.#previous
    }

    setPrevious(previous){
        this.#previous = previous
    }
} 