class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class SLL{
    constructor(head=null){
        this.head = head;
    }
    push(data){
        if(this.head==null){
            this.head = new Node(data);
            return
        }
        else{
            let pointer = this.head;
            while(pointer.next != null){
                pointer = pointer.next
            }
            pointer.next = new Node(data);
            return
        }
    }
    pop(){
        if(this.head == null){
            return null;
        }
        else if(this.head.next == null){
            let temp = this.head.data;
            this.head = null;
            return temp
        }
        else{
            let pointer = this.head;
            while(pointer.next.next != null){
                pointer = pointer.next
            }
            let temp = pointer.next.data;
            pointer.next = null;
            return temp
        }
    }
    push_to_front(data){
        if(this.head==null){
            this.head = new Node(data);
            return;
        }
        else{
            let next = this.head
            this.head = new Node(data);
            this.head.next = next
            return;
        }
    }

    pop_from_front(){
        if(this.head==null){
            return null;
        }
        else{
            let temp = this.head.data
            this.head = this.head.next
            return temp
        }
    }
    log(){
        if(this.head == null){
            console.log(null);
            return
        }
        else{
            console.log("*** start of list ***")
            let pointer = this.head;
            while(pointer != null){
                console.log(pointer.data);
                pointer = pointer.next;
            }
            console.log("*** end of list ***")
        }
    }
    contains(value){
        if (this.head==null){
            return false;
        }else{
            let pointer = this.head
            while(pointer != null){
                if(pointer.data == value){
                    return true;
                }
            }
        }
        return false;
    }
    length(){
        if(this.head == null){
            return 0;
        }else{
            let counter = 0;
            let pointer = this.head
            while(pointer != null){
                counter++;
                pointer = pointer.next;
            }
        }
        return counter;
    }
    getMin(){
        if(this.head == null){
            return null;
        }else{
            let min = this.head.data;
            let pointer = this.head.next;
            while(pointer!=null){
                if(pointer.data < min){
                    min = pointer.data;
                }
                pointer = pointer.next;
            }
            return min;
        }
    }
    reverse(){
        if(this.head==null){
            return;
        }else if(this.head.next==null){
            return;
        }
        let last = this.head
        let pointer = this.head.next;
        while(pointer!=null){
            this.push_to_front(pointer.data);
            pointer = pointer.next;
        }
        last.next = null;
    }
}

var sll = new SLL()
sll.push(10)
sll.push(14545)
sll.push(145)
sll.push(1654)
sll.push(18796)
sll.push(1776)
sll.push(1111)
sll.push(122)
sll.push(10)
sll.push(199)
sll.push(145)
sll.push(1465)
sll.push(17)
sll.push(15)
sll.push(99)
sll.log()
sll.reverse()
sll.log()
// sll.push(15)
// sll.push(18)
// sll.log()
// sll.push(7869)
// sll.push(100)
// sll.log()
// sll.pop()
// sll.log()
// sll.push_to_front(13)
// sll.push_to_front(17)
// sll.log()
// sll.pop_from_front()
// sll.log()
// console.log(sll.getMin())