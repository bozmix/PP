/*
Write a function to hide email address.
'myemailaddress@bgit.rs' -> 'mye...@bgit.rs'
*/

function hideAddress (string){
    var c = '';
    var j = 0;
    for (var i = 0; i < string.length; i++){
        if (string[i]!=="@"&&i<=2){
            c+=string[i];
        } else if (i===3){
            c+='...';
        } else if (string[i]==='@'){
            c+=string[i];
            j = i+1;
        }
    }
    for (j; j < string.length; j++){
        c+=string[j];
    }
    return c;
}
var result = hideAddress('mijailovic.bozidar@gmail.com');
console.log(result);