import {Node} from "./Node.js"

export class Cola{

    #inicio=undefined
    #fin=undefined
    #size=0

    constructor() {
        
    }
    
    enqueue(data) {
      console.log("entra a enqueue")
        const newNode = new Node(data)
        if (this.isEmpty()) {
          this.#inicio = newNode
          this.#size++
        } else {
          this.#fin = newNode

        }
        this.#fin.setPrevious(data) = newNode
        //console.log("fin de cola : "+this.#fin)
        this.#size++
        console.log("size: "+this.#size)
      }
    
    dequeue() {
        console.log("entra al dequeue")
        if (this.isEmpty()) {
          return "Cola vacia"
        }
        console.log(this.#inicio.getData())
        const dequeuedItem = this.#inicio
        console.log("dequeued item_: "+dequeuedItem)
        this.#inicio = this.#inicio.next
        if (!this.#inicio) {
          this.#fin = null
        }
        this.#size--
        console.log("sale de dequeue con: "+dequeuedItem.getData())
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