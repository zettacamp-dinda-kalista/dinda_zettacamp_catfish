var number1 = 9;
var number2 = 19;
var printResult = true;
var resultPhrase = "Learning Typescript is different than Javascript";
function add(n1, n2, showResult, phrase) {
    var filter = phrase.slice(n1, n2);
    if (showResult) {
        return filter;
    }
    else {
        return "Input Salah";
    }
}
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
// const number1 = 9;
// const number2 = 19;
// const printResult = true;
// const resultPhrase = "Learning Typescript is different than Javascript";
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//     const filter = phrase.slice(n1, n2);
//     if (showResult) {
//         console.log(filter);
//     } else {
//         return filter;
//     }
// }
// add(number1, number2, printResult, resultPhrase);
