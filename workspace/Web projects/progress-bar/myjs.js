let widthValue = 0 ;
// let progBar = document.getElementById("progress-bar-animation");
let text ="";
// window.onload= function() {
    
// }

window.setInterval(displayWidthPercent,500);

function displayWidthPercent() {
    if (widthValue<100) {
        widthValue += 10;
    } else {
        widthValue = 0;
    }
    text = "CodeBySami" + widthValue + "%" ;
    document.getElementById("progress-bar-animation").style.width= text;
    document.getElementById("content").innerHTML=text;
}
