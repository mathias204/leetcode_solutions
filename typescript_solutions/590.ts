//590. N-ary Tree Postorder Traversal

// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
//
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

//Both functions doesn't perform great
function postorder(root: _Node | null): number[] {
  let result: number[] = [];
  if (root?.children === undefined) {
    return result;
  }

  for (const node of root.children) {
    result = result.concat(postorder(node));
  }
  return result.concat(root.val);
}

function postorder2(root: _Node | null): number[] {
  if (root?.children === undefined) {
    return [];
  }

  return root.children.flatMap((node) => postorder2(node)).concat(root.val);
}

class _Node {
  val: number;
  children: _Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}
