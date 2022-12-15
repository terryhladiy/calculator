const action = prompt('what do you want','add, sub, div or mult');
const numberOne = +prompt('First number', '0');
const numberTwo = +prompt('Second number', '0');

switch(action){
    case 'add':
        alert(numberOne + numberTwo);
        break;
    case 'sub':
        alert(numberOne - numberTwo);
        break;
    case 'mult':
        alert(numberOne * numberTwo);
        break;
    case 'div':
        alert(numberOne / numberTwo);
        break;
    default:
        alert('Щось пішло не так')
}


