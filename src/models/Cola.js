import {Node} from "./Node.js"

export class Cola{

    #inicio=undefined
    #fin=undefined
    #size=0

    constructor() {
        
    }
    
    enqueue(data) {
        const newNode = new Node(data)
        if (this.isEmpty()) {
          this.#inicio = newNode
        } else {
          this.#fin.next = newNode
        }
        this.#fin = newNode
        this.#size++
      }
    
    dequeue() {
        console.log("entra")
        if (this.isEmpty()) {
          return "Cola vacia"
        }
        const dequeuedItem = this.#inicio
        this.#inicio = this.#inicio.next
        if (!this.#inicio) {
          this.#fin = null
        }
        this.#size--
        return dequeuedItem.getData()
    }

    peek(){
        return this.#inicio.getData()
    }
    isEmpty(){
        if(this.#size==0)
        return true
    }
    getSize(){
        return this.#size

    }
}