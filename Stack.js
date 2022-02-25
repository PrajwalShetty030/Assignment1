class Stack {
  last;
  arry;
  tol_size;

  constructor(tol_size) {
    this.last = -1;
    this.arry = [];
    this.tol_size = tol_size;
  }

  push(item) {
    if (this.last == this.tol_size - 1) {
      console.log("Stack is full-Stack Overflow");
    } else {
      this.last += 1;
      this.arry[this.last] = item;
      console.log(`Item is pushed : ${item}`);
      return this.last;
    }
  }

  peek() {
    if (this.last == -1) {
      console.log("Stack is empty ");
    } else {
      console.log(`The topmost element is ${this.arry[this.last]}`);
    }
  }
}
