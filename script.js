let Credit = [];

let Terms;

function payment(Price, Month, Bunga){
    for(i=0; i < Month; i++){
        Terms = {};
        let Payment = Price / Month;
        let bunga = Price * Bunga/100
        Terms['Month'] = i+1;
        Terms['Credit'] = Payment + bunga;
        // console.log(Terms);
        Credit.push(Terms);
    }
// console.log(Terms);

console.log(Credit)
}
payment(10000, 5, 2)