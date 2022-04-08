import { rootNodeNumber } from "../ExampleBinaryTree.js";

const treeMinValueDepthFirst = (root) => {
  let smallest = Infinity;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val < smallest) {
      smallest = current.val;
    }

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return smallest;
};

// console.log(treeMinValueDepthFirst(rootNodeNumber));

const treeMinValueBreadthFirst = (root) => {
  let smallest = Infinity;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val < smallest) {
      smallest = current.val;
    }

    if (current.right) {
      queue.push(current.right);
    }
    if (current.left) {
      queue.push(current.left);
    }
  }
  return smallest;
};

// console.log(treeMinValueBreadthFirst(rootNodeNumber));

// recursive
const treeMinValue = (root) => {
  if (root === null) return Infinity;

  const leftMin = treeMinValue(root.left);
  const rightMin = treeMinValue(root.right);

  return Math.min(root.val, leftMin, rightMin);
};

console.log(treeMinValue(rootNodeNumber));
