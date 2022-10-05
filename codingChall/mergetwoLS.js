function mergeLists(head1, head2) {
    if (head1 === null)
        return head2;
    else if (head2 === null)
        return head1;
    let currHead1 = head1;
    let prevHead1 = null;
    while (true)
    {
        if (head1 === null)
        {
            prevHead1.next = head2;
            return (currHead1)
        }
        else if (head2 && head2.data < head1.data)
        {
            let newNode = {data: head2.data, next: null}
            newNode.next = head1.next;
            head1.next = newNode;
            let swichData = head1.data;
            head1.data = newNode.data;
            newNode.data = swichData;
            // head1 = newNode;
            head2 = head2.next
        }
        else if (head2 === null)
            return currHead1;
        prevHead1 = head1
        head1 = head1.next
    }

    
}
let t3 = {data: 4, next: null}
let t2 = {data: 3, next:t3}
let t1 = {data: 2, next:t2}

let t6 = {data: 6, next: null}
let t5 = {data: 2, next:t6}
let t4 = {data: 1, next:t5}
let test = t4;

let val = mergeLists(t1, t4)

// while (t4)
// {
//     if (t4.data == 2)
//     {
//         let newNode = {data: 1, next:null}
//         newNode.next = t4.next;
//         t4.next = newNode;
//         let sw = t4.data;
//         t4.data = newNode.data;
//         newNode.data = sw;
//         t4 = newNode
//         // continue;
//     }
//     t4 = t4.next;
// }

while (val)
{
    console.log(val.data)
    val = val.next;
}

