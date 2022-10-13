// //map
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // membuat array baru dari array angka untuk memeriksa apakah setiap elemennya bernilai habis dibagi 2 atau tidak
// const mapedArray = angka.map(item => item * 2);
// console.log(mapedArray); 

// // forEach
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const mapedArray = angka.forEach(item => console.log(item));

// console.log(mapedArray); 

let Credit = [];

let Terms;

function payment(Price, Month){
    for(i=0; i < Month; i++){
        Terms = {};
        let Payment = Price / Month;
        Terms['Month'] = i+1;
        Terms['Credit'] = Payment;
        // console.log(Terms);
        Credit.push(Terms);
    }
// console.log(Terms);
let[ , , ...e] = Credit
console.log(e)
}
payment(10000, 5)