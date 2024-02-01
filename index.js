// 1. write a code to display the multiplication table of a given integer
let num_1 = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${num_1} x ${i} = ${num_1 * i}`);
}

// 2. write a code to check whether a string is a palindrome or not
let string_1 = "via";
let string_1_reversed = "";
isPalindrome = false;

for (let i = string_1.length - 1; i >= 0; i--) {
    string_1_reversed += string_1[i];
}

if (string_1 === string_1_reversed) {
    isPalindrome = true;
} 

if (isPalindrome) {
    console.log(`${string_1} is a palindrome.`);
} else {
    console.log(`${string_1} is not a palindrome.`);  
}

// 3. write a code to convert centimeter to kilometer
// example: 100000 -> 1 km
let number = 1000;

console.log(`${number} in kilometer is ${number/100000} km`);

// 4. write a code to format number as currency
// example: 1000 -> "Rp. 1.000,00"
let num_2 = 3234567;
let num_2_string = num_2.toString();
let currency = `Rp. `;

for (let i = 0; i < num_2_string.length; i++) {
    currency += num_2_string[i];
    if ((num_2_string.length - i - 1) % 3 === 0 && num_2_string.length - 1 !== i) {
        currency += '.';
    }
}

let res = `${currency},00`;
console.log(res)

// 4. write a code to remove the first occurrence of a given "search string" from a string
// example: string = "Hello world", search string = "ell" --> "Ho world"

let string_2 = "Hello world";
let search_string = "ell";
let string_2_array = string_2.split('');
let isFound = false;
let index;

for (i = 0; i < string_2.length; i++) {
    if (string_2[i] === search_string[0]) {
        if (search_string.length === 1) {
            isFound = true;
            index = i;
        } else {
            for (j = 1; j < search_string.length; j++) {
                if (string_2[i + j] == search_string[j]) {
                    isFound = true;
                    index = i;
                } else {
                    isFound = false;
                    index = string_2.length;
                    break;
                }
            }
        }
        if (isFound) {
            break;
        }
    }
}

if (isFound) {
    string_2_array.splice(index, search_string.length);
    string_2 = string_2_array.join('');
    console.log(`The result is ${string_2}`);
} else {
    console.log(`${search_string} is not found in ${string_2}.`)
}

// 5. write a code to capitalize the first letter of each word in a string
// example: "hello world" --> "Hello World"

let string_3 = "hello world";
let res_2 = "";

for (let i = 0; i < string_3.length; i++) {
    if (string_3[i-1] == ' ') {
        res_2 += string_3[i].toUpperCase();
    } else if (string_3[i-1] == undefined) {
        res_2 += string_3[i].toUpperCase();
    } else {
        res_2 += string_3[i].toLowerCase();
    }
}

console.log(`The result is ${res_2}`);

// 6. write a code to reverse a string
// example: "hello" --> "olleh"
let string_4 = "via nabila";
let string_4_reversed = "";

for (let i = string_4.length - 1; i >= 0; i--) {
    string_4_reversed += string_4[i];
}

console.log(`The reverse of ${string_4} is ${string_4_reversed}.`);

// 7. write a code to swap the case of each character from string
// example: 'HelLO WoRLd' --> 'hELlo wOrlD'

let string_5 = "HelLO WoRLd";
let res_3 = "";

for (let i = 0; i < string_5.length; i++) {
    if (string_5[i] === string_5[i].toLowerCase()) {
        res_3 += string_5[i].toUpperCase();
    } else {
        res_3 += string_5[i].toLowerCase();
    }
}

console.log(`The result is ${res_3}`);

// 8. write a code to find the largest of two given integers
// example: num1 = 42, num2 = 27 --> 42

let num1 = 42;
let num2 = 27;
let largest_num;

if (num1 > num2) {
    largest_num = num1;
} else {
    largest_num = num2;
}

console.log(`The largest is ${largest_num}.`);

// 9. write a conditional statement to sort three numbers
// example: num1 = 42, num2 = 27, num3 = 18 --> 18, 27, 42

let num1_2 = 42;
let num2_2 = 27;
let num3_2 = 18;

if (num1_2 <= num2_2 && num1_2 <= num3_2) {
    if (num2_2 <= num3_2) {
        console.log(`${num1_2}, ${num2_2}, ${num3_2}`);
    } else {
        console.log(`${num1_2}, ${num3_2}, ${num2_2}`);
    }
} else if (num2_2 <= num1_2 && num2_2 <= num3_2) {
    if (num1_2 <= num3_2) {
        console.log(`${num2_2}, ${num1_2}, ${num3_2}`);
    } else {
        console.log(`${num2_2}, ${num3_2}, ${num1_2}`);
    }
} else {
    if (num1_2 <= num2_2) {
        console.log(`${num3_2}, ${num1_2}, ${num2_2}`);
    } else {
        console.log(`${num3_2}, ${num2_2}, ${num1_2}`);
    }
}

// 10. write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
// example: "hello" --> 1

let input = "hello";

if (typeof input == "string") {
    console.log(1);
} else if (typeof input == "number") {
    console.log(2);
} else {
    console.log(3);
}

// 11. write a code to change every letter a into * from a string of input
// example: 'an apple a day keeps the doctor away' --> '*n *pple * d*y keeps the doctor *w*y'


let string_6 = "An apple a day keeps the doctor away";
let res_4 = "";

for (let i = 0; i < string_6.length; i++) {
    if (string_6[i].toLowerCase() == "a") {
        res_4 += "*";
    } else {
        res_4 += string_6[i];
    }
}
console.log(res_4);