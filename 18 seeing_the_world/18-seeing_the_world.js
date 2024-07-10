"use strict";
//store the locations in a array. Array is not in alphabetical order.
let places = ['egypt', 'denmark', 'canada', 'belgium', 'America',];
// print array in its orignal order.
console.log('orignal ' + places);
// print array in alphabetic order without modifiying the actual list.
console.log('copy ' + [...places].sort());
//showing that array is still its orignal order.
console.log('orignal ' + places);
//print array in reverse alphabetical order without changing the order of orignal list.
console.log('copy ' + [...places].sort().reverse());
//showing that array is still in its orignal.
console.log('orignal ' + places);
// reversing the order of list and printing the array to show that its orignal order has changed.
console.log('orignal ' + places.reverse());
//again reversing the order of list and printing the list to show its back to its orignal order.
console.log('orignal ' + places.reverse());
//sort array so it is stored in alphabetical order and printing the array to show that its order has been changed.
console.log('orignal ' + places.sort());
//sort to change array so it is stored in reversed alphabetical order and printing the list to show that its order has changed.
console.log('orignal ' + places.sort().reverse());
