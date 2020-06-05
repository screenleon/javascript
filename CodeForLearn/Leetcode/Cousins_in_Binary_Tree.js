// Cousins in Binary Tree

/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
Return true if and only if the nodes corresponding to the values x and y are cousins.

Input: root = [1,2,3,4], x = 4, y = 3
Output: false

Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true

Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousinsArray = function (root, x, y) {
    const xPosition = root.indexOf(x) + 1;
    const yPosition = root.indexOf(y) + 1;
    let xLayer = 1, yLayer = 1;

    for (let index = 1; Math.pow(2, index) - 1 < xPosition || Math.pow(2, index) - 1 < yPosition; index++) {
        if (xPosition > Math.pow(2, index) - 1) xLayer++;
        if (yPosition > Math.pow(2, index) - 1) yLayer++;
    }

    return xLayer === yLayer ? true : false;
};

var isCousins = function (root, x, y) {
    const xPosition = root.indexOf(x) + 1;
    const yPosition = root.indexOf(y) + 1;
    let xLayer = 1, yLayer = 1;

    for (let index = 1; Math.pow(2, index) - 1 < xPosition || Math.pow(2, index) - 1 < yPosition; index++) {
        if (xPosition > Math.pow(2, index) - 1) xLayer++;
        if (yPosition > Math.pow(2, index) - 1) yLayer++;
    }

    return xLayer && yLayer;
};

var isCousinsReference = function(root, x, y) {
    if (x <= 1 && y <= 1) return false;
    const bfs = function(node, head=root, parent=root, depth=0) {
        if (!head) return false;
        if (head.val === node) {
            return [parent, depth];
        }
        depth++;
        return bfs(node, head.left, head, depth) || bfs(node, head.right, head, depth);
    }
    let [xp, xd] = bfs(x);
    let [yp, yd] = bfs(y);
    
    return (xp !== yp && xd === yd);
};

var isCousins = function (root, x, y) {
    let nodeX = { val: x };
    let nodeY = { val: y };
    foundLayer(root, nodeX, undefined, 1);
    foundLayer(root, nodeY, undefined, 1);
    console.log(nodeX, nodeY);
    return nodeX.parent !== nodeY.parent && nodeX.depth === nodeY.depth;
};

function foundLayer(node, value, parent, depth) {
    if (!node) return;
    if (node.val === value.val) {
        value.depth = depth;
        value.parent = parent;
    };
    foundLayer(node.left, value, node.val, depth + 1);
    foundLayer(node.right, value, node.val, depth + 1);
}

const test = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: null
    },
    right: { val: 3, left: null, right: null }
}

console.log(isCousins(test, 4, 3))
/*
TreeNode {
  val: 1,
  left: TreeNode {
    val: 2,
    left: TreeNode { val: 4, left: null, right: null },
    right: null
  },
  right: TreeNode { val: 3, left: null, right: null }
}
*/