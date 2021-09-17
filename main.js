var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d")
window.addEventListener("keydown",my_keydown)
function my_keydown(e) {
    keypress=e.keyCode;
    console.log(keypress);
    if ((keypress>=97 && keypress<=122)|| (keypress>=65 && 90)) {
        alphabetkey()
        document.getElementById("p1").innerHTML="You pressed on an alphabet key"
        console.log("alphabetkey");
    } 
}
function alphabetkey() {
    image_AK="https://thumbs.dreamstime.com/z/background-alphabet-letters-top-view-abstraction-copy-space-back-to-school-concept-colorful-wooden-flat-lay-155205523.jpg"
}
window.addEventListener("keydown",keydown1)
function keydown1(e) {
    keypress1=e.keyCode;
    console.log(keypress1);
    if (keypress1=47-56) {
        numberkey()
        document.getElementById("p1").innerHTML="You pressed on a number key"
        console.log("numberkey");
    } 
}
function numberkey() {
    image_NK="https://media.istockphoto.com/photos/colorful-numbers-background-picture-id884140874"
}
window.addEventListener("keydown",keydown2)
function keydown2(e) {
    keypress2=e.keyCode;
    console.log(keypress2);
    if (keypress2=36-41) {
        arrowkey()
        document.getElementById("p1").innerHTML="You pressed on a arrow key"
        console.log("arrowkey");
    } 
}
function arrowkey() {
    image_ARK="https://image.shutterstock.com/image-vector/abstract-blue-neon-light-arrow-260nw-1792115594.jpg"
}
window.addEventListener("keydown",keydown3)
function keydown3(e) {
    keypress3=e.keyCode;
    console.log(keypress3);
    if (keypress3==17,18,27) {
        specialkey()
        document.getElementById("p1").innerHTML="You pressed on a ctrl,alt,esc keys"
        console.log("specialkey");
    } 
}
function specialkey() {
    image_SK="https://i.pinimg.com/originals/78/34/40/7834404a2aaa4a9661a8d218744ffc87.jpg"
}
