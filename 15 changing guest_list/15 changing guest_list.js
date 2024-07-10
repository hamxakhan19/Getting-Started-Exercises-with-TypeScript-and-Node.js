"use strict";
let guest_list = ['moiz', 'huzaifa', 'bilal', 'alyan', 'amir', 'hamza rafi', 'ali', 'ayan', 'muzammil'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n');
}
let absent_Guest = 'ayan';
let new_guest = 'adullah shah';
guest_list[7] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n');
}
console.log(`mr.${absent_Guest}+ is not comming to the party`);
