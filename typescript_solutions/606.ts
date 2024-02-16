/**
 * @author Mathias Brosens
 * @date 2023-12-08
 */

/**
 * 606. Construct String from Binary Tree
 * https://leetcode.com/problems/construct-string-from-binary-tree/description/
 * Given the root node of a binary tree, your task is to create a string representation of the tree following a specific set of formatting rules. The representation should be based on a preorder traversal of the binary tree and must adhere to the following guidelines:

Node Representation: Each node in the tree should be represented by its integer value.

Parentheses for Children: If a node has at least one child (either left or right), its children should be represented inside parentheses. Specifically:

If a node has a left child, the value of the left child should be enclosed in parentheses immediately following the node's value.
If a node has a right child, the value of the right child should also be enclosed in parentheses. The parentheses for the right child should follow those of the left child.
Omitting Empty Parentheses: Any empty parentheses pairs (i.e., ()) should be omitted from the final string representation of the tree, with one specific exception: when a node has a right child but no left child. In such cases, you must include an empty pair of parentheses to indicate the absence of the left child. This ensures that the one-to-one mapping between the string representation and the original binary tree structure is maintained.

In summary, empty parentheses pairs should be omitted when a node has only a left child or no children. However, when a node has a right child but no left child, an empty pair of parentheses must precede the representation of the right child to reflect the tree's structure accurately.
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
