/**
 * @author Mathias Brosens
 * @date 2023-12-09
 */

/**
 * 94. Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */

function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  if (root?.left === undefined && root?.val !== undefined) {
    result.push(root.val as number);
  } else if (root?.val !== undefined) {
    result = inorderTraversal(root.left);
    result.push(root.val);
  }
  if (root?.right) {
    result = result.concat(inorderTraversal(root.right));
  }
  return result;
}

/*
 * I tried to implement an iterative function, but I failed, I will come back to this.
 */
// function inorderTraversalIterative(root: TreeNode | null): number[] {
//   let result: number[] = [];
//   let tussenResult: number[] = [];
//   if (root === null) {
//     return [];
//   }
//   let right_node = root.right;
//   let current_node = root as TreeNode;
//   while (current_node !== null) {
//     tussenResult.push(current_node.val);
//     while (right_node !== null) {
//       if (right_node.left?.val !== undefined) {
//         tussenResult.push(right_node.left.val);
//         tussenResult.push(right_node.val);
//       } else {
//         tussenResult.push(right_node.val);
//       }
//       right_node = right_node.right;
//     }
//     result = tussenResult.concat(result);
//     tussenResult = [];
//     current_node = current_node.left;
//     if (current_node.right !== undefined) {
//       right_node = current_node.right;
//     }
//   }
//   return result;
// }

//  Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
