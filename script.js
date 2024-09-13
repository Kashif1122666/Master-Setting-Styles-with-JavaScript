var text = document.getElementById('text');

// set initial style that the function can start working on first click 
text.style.color="black";
text.style.fontSize="20px";
text.style.border="1px solid black";

function changeColor() {
    text.style.color = text.style.color === 'black' ? 'red':'black';   
}
function changeFontSize() {
    text.style.fontSize === '20px' ? text.style.fontSize='30px': text.style.fontSize='20px';
}
function toggleBorder() {
    text.style.border = text.style.border === '1px solid black' ? '3px dotted blue':'1px solid black';
}