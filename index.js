// // Case 1
// let data = [1, 'data', '3', 'result'];
// type StringOrNumber = (number | string)[];
// function combination(input: StringOrNumber):string{
//     let result;
//     if (typeof input === 'string' || 'number') {
//         result = input.join(" ");
//     }
//     return result;
// }
// let combinationInput = combination(data);
// console.log(combinationInput);
// // Case 2
// let data2 = ['Bejo', 'has', '4', 'sport', 'car'];
// type Conversion = string[];
// function combinee(input: Conversion):string{
//     let result;
//     if (typeof input === 'string') {
//         result = input
//     } else{
//         result = input.join(" ");
//     }
//     return result;
// }
// let combineInput = combinee(data2);
// console.log(combineInput);
// Type String 
var data = [1, 'data', '3', 'result'];
var data2 = ['Bejo', 'has', '4', 'sport', 'car'];
function combination(input) {
    var commbine = input.join(" ");
    return commbine;
}
var combinationInput = combination(data);
console.log(combinationInput);
var combinationData = combination(data2);
console.log(combinationData);
// Type Any
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
