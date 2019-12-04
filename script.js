let flag_dot = 0;

function disp(number){
    let pom = document.querySelector('.display').value;


    if(number == '.' && flag_dot == 0){
        document.querySelector('.display').value = pom + number;
        flag_dot++;
    }
    else{
        document.querySelector('.display').value = pom + number;
    }

}
