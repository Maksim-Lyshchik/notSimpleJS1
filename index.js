//task 1
function sortIncrementArr (arr) {
    let sortedArr = arr.sort(function(a,b){return a - b})
    console.log("Массив отсортированный по-возрaстанию: " + sortedArr);
}
function sortDiscraseArr (arr) {
    let sortedArr = arr.sort(function(a,b){return b - a})
    console.log("Массив отсортированный по-убыванию: " + sortedArr);
}
//task 2
function findMaxArrElement (arr) {
    let maxEl = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(maxEl < arr[i]){
            maxEl = arr[i];
        }
    }
    console.log("Максимальный элемент массива: " + maxEl);
}
function findMinArrElement (arr) {
    let minEl = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(minEl > arr[i]){
            minEl = arr[i];
        }
    }
    console.log("Минимальный элемент массива: " + minEl);
}
//task 3
function getPolindrom (str) {
    str = str.toLowerCase();
    let reversStr = str.split('').reverse().join('');
    if (str === reversStr) {
        console.log(`Строка "${usedStr}" является полиндромом`)
    } else {
        console.log(`Строка "${usedStr}" не является полиндромом`)
    }
}
//task 4
function getMultipleThreeFive (maxNumber) {
    for (let i = 1; i <= maxNumber; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz ")
        } else if(i % 3 === 0){
            console.log("fizz")
        } else if(i % 5 === 0) {
            console.log("buzz")
        } else{
            console.log(i)
        }
    }
}
//task 5
function checkAnagram (str1, str2) {
    function objElementsStr (str) {
        let elObj = {};
        for (let el of str.replace(/[^\w]/g).toLowerCase()){
            elObj[el] = elObj[el] + 1 || 1;
        }
        return elObj;
    }
    let elObjA = objElementsStr(str1);
    let elObjB = objElementsStr(str2);
    if (Object.keys(elObjA).length !== Object.keys(elObjB).length) {
        return false;
    }
    for(let el in elObjA){
        if(elObjA[el] !== elObjB[el]){
            return false
        }
    }
    return true;
}
//task 6
function searchVowels (str) {
    let counter = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    strLowerCase = str.toLowerCase();
    for (let symbol of strLowerCase){
        if(vowels.includes(symbol)){
            counter++;
        }
    }
    console.log(`Количество гласных: ${counter}`);
}
//task 7 
function reverseArr (arr) {
    let expandArr = [];
    let length = arr.length;
    for (let i = 0; i < length; i++){
        expandArr.push(arr.pop());
    }
    console.log(`Развернутый массив: ${expandArr};`);
}
//task 8
function arithmeticMean (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let average = sum / arr.length;
    console.log(`Среднее арифметическое: ${average};`)
}
//task 9
function inArray (text, arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === text){
            return true
        }
    }
    return false
}
//task 10
function reallocateElStr (str) {
    str = str.split('');
    for(let i = 0; i < str.length; i += 2){
        str.splice(i, 0, str.splice(i+1, 1)[0])
    }
    console.log(`Полученная строка: ${str};`)
}
//task 11
function getDecadeMonth (day) {
    if(day > 0 && day < 10){
        console.log("Первая декада")
    } else if(day >= 10 && day < 20){
        console.log("Вторая декада")
    } else if(day >= 20 && day <= 31){
        console.log("Третья декада")
    } else {
        console.log("Нет такого числа в месяце")
    }
}
//task 12
function getMonth (month) {
    if(month > 0 && month <= 2 || month === 12){
        console.log("Зима")
    } else if(month >= 3 && month <= 5){
        console.log("Весна")
    } else if(month >= 6 && month <= 8){
        console.log("Лето")
    } else if(month >= 9 && month <= 11){
        console.log("Осень")
    } else {
        console.log("Нет такого месяца")
    }
}
    

let usedArr = [5, 4, 8, 9, 1, 5, 7, 6, 2, 1, 20, -1,];
let usedStr = "abcde edcba"
//task 1
sortIncrementArr(usedArr);
sortDiscraseArr(usedArr);
//task 2
findMaxArrElement(usedArr);
findMinArrElement(usedArr);
//task 3
getPolindrom(usedStr);
//task 4
getMultipleThreeFive(31);
//task 5
console.log('Строки являются анограммой:'+ checkAnagram('qWer./', '!,werq'))
//task 6
searchVowels("zxcvbnm,./';lkjhgfdsaqwertyuiop[]");
//task 7
reverseArr([1, 2, 3, 4, 5, 6, 7, 8,]);
//task 8
arithmeticMean([2, 4, 6,]);
//task 9
console.log(inArray('hi', ['hello', 'hi', 'good evening', 'good morning',]));
//task 10
reallocateElStr('123456');
//task 11
getDecadeMonth(27);
//task 12
getMonth(7);