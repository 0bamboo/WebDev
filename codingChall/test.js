function mergeLists(head1, head2) {
    if (head1 === null)
        return head2;
    else if (head2 === null)
        return head1;
    let firstList = head1;
    let nextNode = null
    let prevList = firstList;
    while(true)
    {
        if (head2)
            nextNode = head2
        if (head2 && firstList && head2.data <= firstList.data)
        {
			console.log(`first list : ${firstList.data} second list: ${head2.data}`)
			nextNode.next = firstList;
			firstList = nextNode;
			head1 = nextNode;
			firstList = firstList.next;
            head2 = head2.next;
			console.log(`first list : ${firstList.data} second list: ${head2}`)
        }
        else if (!firstList)
        {
            prevList.next = head2;
            return head1;
        }
        prevList = firstList;
        firstList = firstList.next;
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

while (t4)
{
	console.log(val)
	val = val.next;
}

