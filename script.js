

// //scrivi un programma che stampi i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
    // console.log(i);

    //per i multipli di 3 && 5 stampi "FizzBuzz" 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        //per i multipli di 5 stampi "Buzz"
    } else if (i % 5 === 0) {
        console.log("Buzz");
        //per i multipli di 3 stampa "Fizz"
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}


// VARIANTE più bella che non è proprio tutta farina del mio sacco e mi riferisco alla riga 34.
/*
for (var i = 1; i <= 100; i++) {
    var cosaStampo = "";
    var multiplo3 = i % 3 === 0;
    var multiplo5 = i % 5 === 0;

    if (multiplo3) {
        cosaStampo = "Fizz";
    }

    if (multiplo5) {
        cosaStampo += "Buzz";
    }

    if (cosaStampo !== "") {
        console.log(cosaStampo);
    } else {
        console.log(i);
    }
}
*/
