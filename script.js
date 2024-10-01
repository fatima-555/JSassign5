       //STRING METHODS   chapter 21 to 25: 


//1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

//2
var phoneModel = prompt("Enter your favorite mobile phone model:");
var modelLength = phoneModel.length;
alert("The length of your input is: " + modelLength);

//3
var word = "Pakistani";
var indexN = word.indexOf('n');
alert("The index of 'n' in 'Pakistani' is: " + indexN);

//4
var phrase = "Hello World";
var lastIndexL = phrase.lastIndexOf('l');
alert("The last index of 'l' in 'Hello World' is: " + lastIndexL);

//5
var word = "Pakistani";
var charAtThird = word.charAt(3);
alert("The character at 3rd index in 'Pakistani' is: " + charAtThird);

//6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "!");

//7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
alert("After replacement: " + newCity);

//8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
alert("Updated message: " + newMessage);

//9
var str = "472";
var num = Number(str);
alert("String: " + str + " (type: " + typeof str + ")");
alert("Number: " + num + " (type: " + typeof num + ")");

//10
var userInput = prompt("Enter some text:");
var upperCaseInput = userInput.toUpperCase();
alert("Uppercase: " + upperCaseInput);

//11
var userInput = prompt("Enter some text:");
var titleCaseInput = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
alert("Title Case: " + titleCaseInput);

//12
var num = 35.36;
var strNum = num.toString().replace(".", "");
alert("Result: " + strNum);


//13
var username = prompt("Enter your username:");
if (/[@.,!]/.test(username)) {
    alert("Please enter a valid username without special characters like @, ., !.");
} else {
    alert("Username is valid.");
}



//14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter item to search:").toLowerCase();
var found = A.some(item => item.toLowerCase() === userInput);
if (found) {
    alert(userInput + " is available in the list.");
} else {
    alert(userInput + " is not available in the list.");
}



//15
var password = prompt("Enter your password:");
if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
} else if (!isNaN(password.charAt(0))) {
    alert("Password must not start with a number.");
} else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    alert("Password must contain both alphabets and numbers.");
} else {
    alert("Password is valid.");
}



//16
var university = "University of Karachi";
var universityArray = university.split(' ');
alert("Array elements: " + universityArray.join("\n"));



//17
var userInput = prompt("Enter some text:");
var lastChar = userInput.charAt(userInput.length - 1);
alert("Last character is: " + lastChar);



//18
var text = "The quick brown fox jumps over the lazy dog";
var countThe = (text.toLowerCase().match(/the/g) || []).length;
alert("Number of occurrences of 'the': " + countThe);


        //MATH METHODS  chapter 26 to 30:


//1
var number = parseFloat(prompt("Enter a positive integer:"));
var roundValue = Math.round(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

alert("Number: " + number + 
      "\nRound off value: " + roundValue + 
      "\nFloor value: " + floorValue + 
      "\nCeil value: " + ceilValue);

//2
var number = parseFloat(prompt("Enter a negative floating-point number:"));
var roundValue = Math.round(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

alert("Number: " + number + 
      "\nRound off value: " + roundValue + 
      "\nFloor value: " + floorValue + 
      "\nCeil value: " + ceilValue);

//3
var number = parseFloat(prompt("Enter a number:"));
var absoluteValue = Math.abs(number);

alert("The absolute value of " + number + " is: " + absoluteValue);

//4
var diceValue = Math.floor(Math.random() * 6) + 1;
alert("You rolled a dice and got: " + diceValue);

//5
var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
alert("You flipped a coin and got: " + coinToss);

//6
var randomNumber = Math.floor(Math.random() * 100) + 1;
alert("Random number between 1 and 100: " + randomNumber);

//7
var weightInput = prompt("Enter your weight:");
var weight = parseFloat(weightInput);
alert("Your weight is: " + weight + " kilograms");

//8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));

if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the secret number " + secretNumber);
} else {
    alert("Sorry, the secret number was " + secretNumber + ". Try again!");
}

