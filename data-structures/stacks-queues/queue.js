// First in first out

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }

    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "There is no element in Queue";
    }
    return this.element[0];
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += `${this.items[i]} `;
    }
    console.log(str);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.printQueue();
