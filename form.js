//creating variables
let body = document.getElementById("body");
let title = document.getElementById("title");
let input = document.getElementById("e-mail");
let input1 = document.getElementById("password");
let input2 = document.getElementById("repeat");
let btn = document.getElementById("btn");
let check = document.getElementsByClassName("check");
let sign = document.getElementById("Sign");
let signs = document.getElementsByClassName("Sign");


//styling part

//for the horizontal line
document.getElementsByTagName("hr").style.backgroundColor = "grey";

//for background color
body.style.backgroundColor = "black";
body.style.color = "white";
body.style.padding = "40px 40px 60px 40px";

//for button
btn.style.width ="100%";
btn.style.height = "30px";
btn.style.color = "yellow";
btn.style.fontSize = "15px"
btn.style.textAlign = "center"
btn.style.padding = "20px";
btn.style. borderRadius = "15px";
btn.style.backgroundColor = "grey";


//for the heading
title.style.fontFamily = "helvetica";
title.style.font = "40px";

//for the username  
input.style.backgroundColor = "black";
input.style.padding = "10px";
input.style.border = "none";

//for the password
input1.style.backgroundColor = "transparent";
input1.style.padding = "10px";
input1.style.border = "none";

//for the password repeat
input2.style.backgroundColor = "transparent";
input2.style.padding = "10px";
input2.style.border = "none";

// for the check button
check.style.display = "flex";
check.style.gap = "50px";
document.getElementById("days").style.backgroundColor = "grey";

 
//for the icons
document.getElementsByTagName("img").style.filter = invert(1);

//for the letters in yellow
sign.style.color = "yellow";
signs.style.color ="yellow";







