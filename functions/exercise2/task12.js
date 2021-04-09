/*
Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.
*/
function retirement (gender, birth){
    var c;
    if (gender==='f'){
        if (2021-birth<60){
            c = birth + 60 - 2021;
        } else {
            c = 'You\'re already retired';
        }
    } else {
        if (2021-birth<65){
            c = birth + 65 - 2021;
        } else {
            c = 'You\'re already retired';
        }
    }
    return c;
}
console.log(retirement('f', 1968));