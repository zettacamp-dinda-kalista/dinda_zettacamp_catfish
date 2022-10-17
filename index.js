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
