// Link https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * @description Remove Nth Node From End of List
 */
var removeNthFromEnd = function (head, n) {

  let calculateSize = (() => {
    let count = 0;
    let node = head;
    while (node) {
      count++;
      node = node.next
    }
    return count;
  });

  const size = calculateSize();

  let index = size - n;
  let it = 0;
  let curr = head;
  let prev = curr;

  if (n === size) {
    head = curr.next;
  } else {
    while (it < index) {
      it++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
  }

  return head;
};