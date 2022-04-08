import { rootNode } from "./ExampleBinaryTree";

// https://www.youtube.com/watch?v=fAAZixBzIAI
// n = number of nodes
// Time complexity : O(n)
// Space complexity : O(n)

/*
        a
     /    \
    b      c
   / \      \
  d   e      f

  depth first search: a,b,d,e,c,f

*/

// Iterative solution
// stack data structure is used
const depthFirstValues = (root) => {
  if (root === null) return [];

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
};

// console.log(depthFirstValues(a));

// recursion solution
const depthFirstValuesWithRecursion = (root) => {
  if (root === null) {
    return [];
  }

  const leftValues = depthFirstValuesWithRecursion(root.left); // [b, d, e]
  const rightValues = depthFirstValuesWithRecursion(root.right); // [c, f]

  return [root.val, ...leftValues, ...rightValues];
};

console.log(depthFirstValuesWithRecursion(rootNode));
