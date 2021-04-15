/*
Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2
*/

(
    function (s){
        var o = "";
        var counter = 0;
        for (var i = 0; i <s.length; i++){
            if (s[i]==="M" || s[i]==="m"){
                o+="*",
                counter+=1;
            } else {
                o+=s[i];
            }
        }
        console.log(o, counter);
    }
)("prograMming");