class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  
  insert(data,left,right){
    let Node = {data,left,right};
    let currentNode;
    if(!this.root){
        this.root = Node;
    }else{
        currentNode = this.root;
        while(currentNode){
          if(data < currentNode.data){
              if(!currentNode.left){
                currentNode.left = Node;
                break;
              }else{ 
                currentNode = currentNode.left;
              }
          }else if(data > currentNode.data){
              if(!currentNode.right){
                currentNode.right = Node;
                break;
              }else{ 
                currentNode = currentNode.right;
              }
          }else{
             console.log('try different value');
          }
        }//end of while
      }//end of main if
   }//end of insert
   
   /*traversal methods
    preOrder - root,left,right
    inOrder - left,root,right
    postOrder - left,right,root
 */
 
 
 //inOrder
 inOrder(root){
  if(root !== null) 
    { 
        this.inOrder(root.left); 
        this.inOrder(root.right); 
        this.inOrderRes.push(root.data);
    } 
 }
 
  //preOrder
 preOrder(root){
  if(root !== null) 
    { 
    		this.preOrderRes.push(root.data);
        this.preOrder(root.left); 
        this.preOrder(root.right); 
    } 
 }


  //postOrder
 postOrder(root){
  if(root !== null) 
    { 
        this.postOrder(root.left); 
        this.postOrder(root.right); 
        this.postOrderRes.push(root.data);
    } 
 }
 
 //node removal from BST - remove()
 remove(data){
 	this.root = removeNode(this.root,data);
 }
 
 removeNode(node,data){
 		if(node === null){
    		return null;
    }else if(data < node.data){
    	node = removeNode(node.left,data);
      return node;
    }else if(data > node.data){
      node = removeNode(node.right,data);
    }else{
    	if(node.left === null && node.right === null){
      	node = null;
        return node;
      }
      if(node.left === null){
      	node =node.right;
      }
      if(node.right === null){
      	node =node.left;
      }
      // Deleting node with two children 
        // minumum node of the rigt subtree 
        // is stored in aux 
        var aux = this.findMinNode(node.right); 
        node.data = aux.data; 
  
        node.right = this.removeNode(node.right, aux.data); 
        return node; 
    }
 }
   
}//end of class


var b1 = new BinarySearchTree();
b1.insert(2);
b1.insert(5);
