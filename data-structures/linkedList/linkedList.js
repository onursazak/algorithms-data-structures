import { log } from "../../util/util.js";

/*
   
        1) Dynamic size
        2) Ease of insertion/deletion

    Drawbacks:

    - Random access is not allowed. We have to access elements sequentially starting from the first node (head node). So we cannot do binary search with linked lists efficiently with its default implementation.

    - Extra memory space for a pointer is required with each element of the list.
    - Not cache friendly.Since array elements are contiguous locations, there is locality of reference which is not there in case of linkedlists.
*/

/*
    A linked list is represented by a pointer to the first node of the linked list.
    The first node is called the head.
    If the linked list is empty, then the value of the head points to NULL.
    Each node in a list consist of at least two parts.
    1) data (integer,string, or any type of data)
    2) Pointer (or reference) to the next node. (connects one node to another.
*/

// head of the list

export class Node {
  // Constructor to create a new node
  // next is by default initialized as a null.

  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

let head = null;

head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let forth = new Node(4);

head.next = second;
second.next = third;
third.next = forth;

log({ head });

let next = head.next;
console.log("head data: ", head.data);

while (next) {
  let currentNode = next;
  console.log("currentNode.data:  ", currentNode.data);
  next = currentNode.next;
}
