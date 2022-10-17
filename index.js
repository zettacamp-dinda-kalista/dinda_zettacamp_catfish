// Case 1
var data = [1, 'data', '3', 'result'];
function combination(input) {
    var commbine = input.join(" ");
    return commbine;
}
var combinationInput = combination(data);
console.log(combinationInput);
// Case 2
var data2 = ['Bejo', 'has', '4', 'sport', 'car'];
function combinee(input) {
    var result;
    if (typeof input === 'string') {
        result = input;
    }
    else {
        result = input.join(" ");
    }
    return result;
}
var combineInput = combinee(data2);
console.log(combineInput);
// function combination(input: number):string{
//     let result2;
//     let result;
//     // if (typeof input === 'string' || 'number') {
//     //     result = input.join(" ");
//     // }
//     result2 = input;
//     return result2;
// }
// let combinationInput = combination(2);
// console.log(combinationInput);
// console.log(typeof combinationInput);
// const number1 = 9;
// const number2 = 19;
// const printResult = true;
// const resultPhrase = "Learning Typescript is different than Javascript";
// function add(n1: number, n2: number, showResult: boolean, phrase: string):string {
//     const filter = phrase.slice(n1, n2);
//     if (showResult) {
//         return filter;
//     } else {
//         return "Input Salah";
//     }
// }
// let result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
