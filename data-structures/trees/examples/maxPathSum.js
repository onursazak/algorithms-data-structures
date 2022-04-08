import { rootNodeNumber } from "../ExampleBinaryTree.js";

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;

  const maxChildPathSum = Math.max(
    maxPathSum(root.left),
    maxPathSum(root.right)
  );
  return root.val + maxChildPathSum;
};

console.log(maxPathSum(rootNodeNumber));
