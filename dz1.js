
let name = prompt('Введите свое имя');
let num1 = +prompt('Введите нынешний год');
let num2 = +prompt('Введите год рождения');

function year (num1, num2){
    let year = num1 - num2;
    return year;
}

console.log(name + ', Ваш возраст ' + (num1 - num2));
alert(name + ', Ваш возраст ' + (num1 - num2));