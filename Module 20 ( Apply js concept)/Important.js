const string = "this is a sentence. AND THIS is AnotHEr!";
let letterCount = 0, vowelCount = 0;
const smallLetters = {}, capitalLetters = {};
"abcdefghijklmnopqrstuvwxyz".split("").forEach(letter => smallLetters[letter] = 0);
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => capitalLetters[letter] = 0);
const vowels = "aeiou".split("");
for(let i = 0; i < string.length; i++){
const letter = string[i];
if(letter in smallLetters){
smallLetters[letter]++;
letterCount++;
}
if(letter in capitalLetters){
capitalLetters[letter]++;
letterCount++;
}
if(vowels.indexOf(letter) > -1) vowelCount++;
}
const consonantCount = letterCount - vowelCount;
console.log(smallLetters, capitalLetters, letterCount, vowelCount, consonantCount)