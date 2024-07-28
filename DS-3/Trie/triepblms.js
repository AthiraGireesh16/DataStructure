// 1: Insert in to a Trie and Search a word 
//2:  Search a prefix and result it exists or not in the trie
//3: Remove a word from the trie


class Node{
    constructor(){
        this.children ={}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord;
    }

    startWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
    
    remove(word){
        const stack =[]
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            stack.push([node,char])
            node = node.children[char]
        }
        if(!node.isEndOfWord){
            return false
        }
        node.isEndOfWord = false
        while(stack.length >0){
            const [parent , char] = stack.pop()
            if(!node.isEndOfWord && Object.keys(node.children).length === 0){
                delete parent.children[char]
            }else{
                break
            }
            node = parent
        }
        return true
    }
    
}


