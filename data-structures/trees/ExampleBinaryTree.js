export class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const rootNode = new Node("a");
const b = new Node("b");
const d = new Node("d");
const e = new Node("e");
const c = new Node("c");
const f = new Node("f");

rootNode.left = b;
rootNode.right = c;
b.right = e;
b.left = d;
c.right = f;

const rootNodeNumber = new Node(3);
const node2 = new Node(11);
const node3 = new Node(4);
const node4 = new Node(-2);
const node5 = new Node(4);
const node6 = new Node(1);

rootNodeNumber.left = node2;
rootNodeNumber.right = node3;
node2.right = node4;
node2.left = node5;
node3.right = node6;

export { rootNode, rootNodeNumber };
