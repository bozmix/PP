

var s = 10;

var b = 5;

try {
    console.log(s);
  
    console.log(s+c);

    console.log("ovo se nikada nece izvrsiti");
} catch (err){
    console.log("desila se greska");
    console.log(err.name, err.message);

} finally {
    throw new Error ("something happened");

    console.log("Hello from finally");
}
console.log( s + b);

