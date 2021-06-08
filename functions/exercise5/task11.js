/*
Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true
*/

function isPalindrome (a){
    var str = '';
    var result;
    for (var i = 0; i < a.length; i++){
        if (a[i] !== ' '){
            str += a[i];
        }
    }
    for (var i = 0; i < (str.length - i); i++){
        if (str[i] === str[str.length - 1 - i]){
            result = true;
            continue;
        } else {
            result = false;
            break;
        }
    }
    return console.log(result);
}

isPalindrome('eye');
isPalindrome('Geek');
isPalindrome('a nut for a jar of tuna');