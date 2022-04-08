// n : number of nodes
// Time complexity: O(n)
// Space complexity: O(n)

/*
        a
     /    \
    b      c
   / \      \
  d   e      f

    breadth-first-values: a,b,c,d,e,f
    depth-first-values: a,b,d,e,c,f
*/

export class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// root
const a = new Node("a");

const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

function breadthFirstValues(root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
}

console.log(breadthFirstValues(a));
