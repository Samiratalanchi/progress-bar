let widthValue = 0 ;
let text ="";

window.setInterval(displayWidthPercent,500);

function displayWidthPercent() {
    if (widthValue<100) {
        widthValue += 10;
    } else {
        widthValue = 0;
    }
    text = widthValue + "%" ;
    document.getElementById("progress-bar-animation").style.width= text;
    document.getElementById("content").innerHTML=text;
}
