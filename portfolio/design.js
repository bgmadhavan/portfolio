// var i = 0;
// var txt = 'Gokula Madhavan'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("typer").innerText += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

var infocats=document.getElementsByClassName("info-cat");
var infoconts=document.getElementsByClassName("info-cont");

function display(infoname)
{
    for(infocat in infocats)
    {
        infocat.classList.remove('active-info');
    }
    for(infocont in infoconts)
    {
        infocont.classList.remove('act-cont');
    }
    event.currentTarget.classList.add('active-info');
    document.getElementById(infoname).classList.add('act-cont');
}
