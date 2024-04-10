import {Node} from "./Node"

export class Cola{

    #inicio=undefined
    #fin=undefined
    #size=0

    constructor() {
        
    }
    
    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
          this.front = newNode;
        } else {
          this.#fin.next = newNode;
        }
        this.#fin = newNode;
        this.#size++;
      }
    
    dequeue() {
        if (this.isEmpty()) {
          return "Cola vacia";
        }
        const dequeuedItem = this.front;
        this.front = this.front.next;
        if (!this.front) {
          this.rear = null;
        }
        this.size--;
        return dequeuedItem.data;
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