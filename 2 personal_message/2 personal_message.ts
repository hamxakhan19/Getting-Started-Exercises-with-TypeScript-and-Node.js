let Name :string = '';

Name = prompt('what is your name?') || '';

if(Name !==null && Name !== ''){
    alert(`'Hellow MR.${Name}, would you like to learn some python today ? "`)
}
else{
alert('you have to fill your name here!')

};