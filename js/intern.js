// set up text to print, each item in array is new line
var aText = new Array(
" ",
"<br>● Microsoft Learn Student Ambassador <i>(10/2021 - Present)</i><br><br><b>Company : Microsoft</b>",
"--- Recruited by Microsoft Student Ambassadors team to be a part of a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future ",
"<br>● Data Science and Business Analytics Intern <i>(09/2021 - 10/2021)</i><br><br><b>Company : The Sparx Foundation</b>",
"--- Cleaned and analysed the provided data sets and built a machine learning model by implementing supervised learning algorithms on them ",
"<br>● Campus Ambassador<i>(07/2021 - 08/2021)</i><br><br><b>Company : International Model United Nations</b>",
"--- Represented myself as a campus ambassador of the International MUN; a platform that focused on bringing youth together from around the world to learn about diplomacy, international relations, and the United Nations"
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
