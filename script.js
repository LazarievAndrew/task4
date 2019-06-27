var yourAge = prompt ('Введите Ваш возраст (полное количество лет)');

while (isNaN(+yourAge) || yourAge < 1 || yourAge >= 120){
   yourAge = prompt ('Введите Ваш возрас корректно (он должен состоять из цифр, количество лет от 1 до 120)');
}

var smoker = confirm ('Вы курите?');

if (yourAge < 18 && !smoker) {
    alert ('Так держать!');
} else if (yourAge < 18 && smoker) {
    alert ('Маме расскажу');
} else if (yourAge >= 18 && !smoker) {
    alert ('Молодец, и не надо');
} else {
    alert ('Ну и зря');
}
