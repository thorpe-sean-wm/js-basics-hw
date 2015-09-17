typeof( 15 );
   //number, This is the answer because when you use a numbers with commas its considered a string.



typeof( "hello" );
  //string, this is a string because when it has comma, text, comma in the parentheses.


typeof( [ "dog", "cat", "horse" ] );
 //object, this is an object because anything in parentheses are considered objects.


typeof( NaN );
 //number, this is considered a number because even though it is used with letters it is meant for when a number doesn't exist.


"hamburger" + "s";
  //hamburgers, hamburger and s are can be added since there is not command to add them.


"hamburgers" - "s";
   //NaN, hamburger and s are both strings... cant be subtracted.


"johnny" + 5;
  //NaN, this is not a number since you can't add a string and a number.


99 * "luftbaloons";


var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
   //[ 3, 2, 4, 6, 10 ] this is the answer since pop gets rid of the last one (8), push add 10 to the end, and unshift puts 3 in the front.

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );


// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
