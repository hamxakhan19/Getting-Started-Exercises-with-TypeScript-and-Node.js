"use strict";
let guest_list = ['moiz', 'huzaifa', 'bilal', 'alyan', 'amir', 'hamza rafi', 'ali', 'ayan', 'muzammil'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr.'+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n')
// }
let absent_Guest = 'ayan';
let new_guest = 'adullah shah';
guest_list[7] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n');
}
console.log(`mr.${absent_Guest} is not comming to the party\n\n`);
console.log('Good News! we find a big table so we are inviting 3 more guests.');
guest_list.unshift('aqeel rizvi');
guest_list.splice(2, 0, 'mahad ansari');
guest_list.push('subhan khan');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n');
}
