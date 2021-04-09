/*
Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -&gt; 1st
11 -&gt; 11th
*/
function orderNums(a){
    var b = a + '';
    var c = '';
    var d = 0;
    if (a>0&&a<14){
    switch (a){
        case 1:
            c = '1st';
            break;
        
        case 2:
            c = '2nd';
            break;

        case 3:
            c = '3rd';
            break;

        case 11:
            c = '11th';
            break;

        case 12:
            c = '12th';
            break;

        case 13:
            c = '13th';
            break;

        default:
            c = b + 'th';
        }
    } else if (a >= 14) {

        d = b[b.length-1];
        switch(d){

            case '1':
            c = b + 'st';
            break;

            case '2':
                c = b + 'nd';
                break;

            case '3':
                c = b + 'rd';
                break;
            
            default:
                c = b + 'th';
        }
    }
            
    return c;  
}
var result = orderNums(10234);
console.log(result);