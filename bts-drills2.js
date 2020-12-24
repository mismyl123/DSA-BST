class Node {
    constructor(key, value, parent, right, left) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.right = right;
      this.left = left;
    }
  }
  
  class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.right = null;
      this.left = null;
    }
  
    insert(key, value) {
      if (this.key == null) {
        this.key = key;
        this.value = value;
      } else if (key < this.key) {
        if (this.left == null) {
          this.left = new BinarySearchTree(key, value, this);
        } else {
          this.left.insert(key, value);
        }
      } else {
        if (this.right == null) {
          this.right = new BinarySearchTree(key, value, this);
        } else {
          this.right.insert(key, value);
        }
      }
    }
  
    remove(key) {
      if (this.key === key) {
        if (this.left && this.right) {
          const successor = this.right._findMin();
          this.key = successor.key;
          this.value = successor.value;
          successor.remove(successor.key);
        } else if (this.left) {
          this._replaceWith(this.left);
        } else if (this.right) {
          this._replaceWith(this.right);
        } else {
          this._replaceWith(null);
        }
      } else if (key < this.key && this.left) {
        this.left.remove(key);
      } else if (key > this.key && this.right) {
        this.right.remove(key);
      } else {
        throw new Error("key error");
      }
    }
  
    find(key) {
      if (this.key === key) {
        return this.value;
      } else if (this.left && key < this.key) {
        return this.left.find(key);
      } else if (key > this.key && this.right) {
        return this.right.find(key);
      } else {
        throw new Error("key error");
      }
    }
  
    _replaceWith(node) {
      if (this.parent) {
        if (this == this.parent.left) {
          this.parent.left = node;
        } else if (this == this.parent.right) {
          this.parent.right = node;
        }
  
        if (node) {
          node.parent = this.parent;
        }
      } else {
        if (node) {
          this.key = node.key;
          this.value = node.value;
          this.left = node.left;
          this.right = node.right;
        } else {
          this.key = null;
          this.value = null;
          this.left = null;
          this.right = null;
        }
      }
    }
  
    _findMin() {
      if (!this.left) {
        return this;
      }
      return this.left._findMin();
    }
  }
  
  const BST = new BinarySearchTree();
  
  //3,1,4,6,9,2,5,7
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  console.log(BST);
  
  //E A S Y Q U E S T I O N
  BST.insert("E");
  BST.insert("A");
  BST.insert("S");
  BST.insert("Y");
  BST.insert("Q");
  BST.insert("U");
  BST.insert("E");
  BST.insert("S");
  BST.insert("T");
  BST.insert("I");
  BST.insert("O");
  BST.insert("N");
  console.log(BST);