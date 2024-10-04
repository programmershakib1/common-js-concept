function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'halim mama';
// const name = 45;
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}
greeting(greetingHandler, 'Tom hanks');
greeting(greetingHandler, 'Tom brady');
greeting(greetingHandler, 'Tom cruise');
greeting(greetEvening, 'Tom solaiman');
greeting(greetEvening, 'Tom salman');
greeting(greetNight, 'halim');


function submitHandler(){
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', )