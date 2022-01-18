// set up text to print, each item in array is new line
var aText = new Array(
" ",
"<b>ACHIEVEMENTS :  </b>",
"● GLOBAL NOMINEE OF NASA SPACE APPS CHALLENGE(2021) : Awarded as one of the Global Nominee team from among the 2000+ teams participated universally. ",
"● TOP 15 UNDER ZONAL LEVEL OF NASA SPACE APPS CHALLENGE(2020)",
"● PUBLISHED AUTHOR : Published a book worldwide under the title 'The Neglected One'",
"● FEATURED BY A NATIONAL NEWSPAPER : Got featured by a national newspaper for winning multiple team events at Gravitas19 held by VIT, Vellore",
" ",
"<b>EXTRA-CURRICULAR :  </b>",
"● Anchored for a global technical conference",
"● Active Writer on Quora with an overall of 24k+ views",
"● Participated in more than five national and international hackathons",
"● Obtained Silver Badge in Sololearn platform",
"● Worked as team lead for various global and national hackathons.",
"● Produced over eighteen code solutions and developed over three codebits in Sololearn",
"● Participated in field visits and came up with a solution for a social innovation project",
"● Core Team member of Sahyadri Open Source Community",
"● Member of IEEE Sahyadri Chapter and Women Who Code(Bangalore Chapter)"
);
var iSpeed = 35; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
