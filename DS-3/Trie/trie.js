class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node  = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node  = node.children[char]
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

    startsWith(prefix){
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
        const stack = []
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
            const [parent, char] = stack.pop();
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


let trie = new Trie()
trie.insert("apple");
trie.insert("banana");
trie.insert("band");
trie.insert("bandana");
trie.insert("can");
trie.insert("cat");
trie.insert("cap");

console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false

console.log("after removal");
trie.remove("apple");
console.log(trie.search("apple"));   // false
console.log(trie.startsWith("app"));
console.log("Search for prefix");
console.log(trie.startsWith("cap")); // true
