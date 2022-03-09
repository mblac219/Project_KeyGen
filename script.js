// Assignment Code
var generateBtn = document.querySelector( '#generate');

// Let's set our length and character options to use for generating password 
var characterCount = 8;
var special = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '>', '<', ';', ':', '\', '|'', '=', '+', '~', '`', '-', '_', ',', '/' ]
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J,', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
var password = [ ];

// setting variables for prompt
var allowSpecials;
var allowLowerCase;
var allowUpperCase;
var allowNumbers;

// Ask user about the ype of characters that will be selcted when generating passwords


function askUser( ){
  characterCount = prompt( 'How many character will password have?' );
  if ( characterCount < 8 || characterCount > 87 ) {
    alert(' Passwords have to be 8 to 87 characters long.' ); 
  } else {
      alert( "Let's get started");
    }
    getUserChoices( )
 }
 

 function getUserChoices( ) {
  characterCount = prompt( 'First, lets select the characters that will go into your password' );
 
 confirmUpperCase( )
}
 function confirmUpperCase( ){
  allowUpperCase = prompt( 'Uppercase characters will be allowed?' );
    if ( allowUpperCase) {
      password = password.concat(upperCase);
    }
confirmLowerCase( )
}

function confirmLowerCase( ){
  allowLowerCase = prompt( 'Lowercase characters will be allowed?' );
  if ( allowLowerCase) {
    password = password.concat( lowerCase);
  }
confirmNumbers( )
}

function confirmNumbers( ){
  allowNumbers = prompt( 'Numbers will be allowed?' );
  if ( allowNumbers ) {
    password = password.concat( numbers );
  }
confirmSpecials( )
}

function confirmSpecials( ) {
  allowSpecials = prompt( 'Special characters will be allowed?' );
  if ( allowSpecials) {
    password = password.concat( special );
  }
password( )
}


// var password = [ ];

for (var i = 0; i < characterCount.length; i++) {
   var i = lowerCase.upperCase.special.numbers[Math.floor(Math.random() * characterCount.length)];
     password.push[ i ];
  }
function writePassword( ){


// Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener( "click", password ) ;