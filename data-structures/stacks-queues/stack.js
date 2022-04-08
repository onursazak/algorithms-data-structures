// run with node

// last in first out (LIFO)

class Stack {
  constructor() {
    this.items = [1, 2, 3, 4, 5];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) {
      return "Underflow!";
    }
    return this.items.pop();
  }

  // returns the top most element in the stack, but doesn't delete it.
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.items || this.items.length < 1;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str = `${str} ${this.items[i]}`;
    }
    console.log(str);
  }
}

const stack1 = new Stack();
stack1.push(6);
stack1.printStack();
stack1.pop();
stack1.printStack();
console.log(stack1.isEmpty());
