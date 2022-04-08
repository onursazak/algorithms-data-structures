import { rootNode } from "../ExampleBinaryTree.js";

// Check if the element exist in the tree.
function checkIfElementExistWithBreadthFirst(root, target) {
  if (root === null) return [];

  // Queue data structure is used to make breadth first traversal.
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val === target) {
      return true;
    }

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return false;
}

console.log(checkIfElementExistWithBreadthFirst(rootNode, "e"));
console.log(checkIfElementExistWithBreadthFirst(rootNode, "j"));
