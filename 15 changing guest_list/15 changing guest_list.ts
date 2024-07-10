let guest_list :string[] = ['moiz','huzaifa','bilal','alyan','amir','hamza rafi','ali','ayan','muzammil'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr.'+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n')
    
}

let absent_Guest : string = 'ayan';

let new_guest :  string = 'adullah shah';

guest_list[7] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr.'+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU :)\n\n')
    
}
console.log(`mr.${absent_Guest} is not comming to the party`);

