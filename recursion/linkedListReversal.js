// linkedlist
export class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const headNode = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

headNode.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

/*
1 -> 2 -> 3 -> 4 -> 5 -> 6
1 < -2  <-3 <- 4 <- 5 <- 6         
*/

function reverseList(head) {
  if (head === null || head.next === null) return head;
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}

const reversedList = reverseList(headNode);

let reversedNext = reversedList.next;

while (reversedNext) {
  let currentNode = reversedNext;
  reversedNext = currentNode.next;
}
