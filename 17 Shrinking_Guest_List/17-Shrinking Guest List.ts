let guest_list :string[] = ['moiz','huzaifa','bilal','alyan','amir','hamza rafi','ali','ayan','muzammil'];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr.'+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n')  
// }

let absent_Guest : string = 'ayan';
let new_guest :  string = 'adullah shah';

guest_list[7] = new_guest ;
// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr.'+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n')
    
// }

console.log(`mr.${absent_Guest} is not comming to the party\n\n`);
console.log('Good News! we find a big table so we are inviting 3 more guests.')

//here i add three more guests. 
guest_list.unshift('aqeel rizvi') ;
guest_list.splice(2,0,'mahad ansari')
guest_list.push('subhan khan');

//here i have print 9 guest array.
for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr.'+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n')
    
}

//sorry message to guest for not inviting.
console.log('\nsorry we can not arrange big table, only two peoples will be invited.');

while(guest_list.length > 2){
    let removed_guest=guest_list.pop();
    console.log(`sorry Mr. ${removed_guest}, you are not invited for dinner.`);
}

//i have removes guests here.
    for(let i=0; i<guest_list.length; i++){

        console.log('Dear Mr.'+ guest_list[i] + ',\n\nyou are still invited to invite you in our party.\n\nTHANK YOU :)\n\n')

    }   

//i have removed all guests from array.
guest_list.splice(0,2);

console.log(guest_list); 