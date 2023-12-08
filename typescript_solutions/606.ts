/**
 * @author Mathias Brosens
 * @date 2023-12-08
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function tree2str(root: TreeNode | null): string {
  let result: string = "";
  result += root?.val;

  if (root?.left) {
    result += "(" + tree2str(root.left) + ")";
  } else if (root?.right) {
    result += "()";
  }
  if (root?.right) {
    result += "(" + tree2str(root.right) + ")";
  }
  return result;
}

/**
 * This class was given.
 */
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
