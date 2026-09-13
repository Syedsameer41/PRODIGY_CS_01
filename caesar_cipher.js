function caesarCipher(message,shift,choice){
let result = "";
for (let i = 0; i < message.length; i++){
let oldLetter = message[i];
let oldIndex =oldLetter.charCodeAt(0);
if ( oldIndex >= 65 && oldIndex <= 90 && choice === "encrypt"){
let minus = oldIndex - 65;
let newIndex = (shift + minus) % 26;
let newLetter = String.fromCharCode(newIndex + 65);
result += newLetter;
} else if (oldIndex >= 97 && oldIndex <= 122 && choice === "encrypt"){
let minus = oldIndex - 97;
let newIndex = (shift + minus) % 26;
let newLetter = String.fromCharCode(newIndex + 97);
result += newLetter;
} else if (oldIndex >= 65 && oldIndex <= 90 && choice === "decrypt"){
let minus = oldIndex - 65;
let newIndex = (minus - shift + 26)%26;
let newLetter =String.fromCharCode(newIndex + 65);
result += newLetter;
} else if (oldIndex >= 97 && oldIndex <= 122 && choice === "decrypt"){
let minus = oldIndex - 97;
let newIndex = (minus - shift + 26)%26;
let newLetter =String.fromCharCode(newIndex + 97);
result += newLetter;
} else {
result += oldLetter;
}
}
return result;
};
let choice = prompt("Enter encrypt or decrypt:");
let message = prompt("Enter message:");
let shift = Number(prompt("Enter shift:"));

let output = caesarCipher(message, shift, choice);

console.log(output);
