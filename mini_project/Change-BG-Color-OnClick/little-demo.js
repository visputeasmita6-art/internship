// Events Little Demo practice

console.log("hello");

const mainButton = document.querySelector(".container button");
// console.log(mainButton);
const body = document.body;
const currentColor = document.querySelector(".currentColor");

console.log(Math.random()*10);
function randomColorGenerator()
{
    
console.log(Math.floor(Math.random()*10));
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);

    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}
mainButton.addEventListener("click",(e)=>{
    //listens an click event on mainButton and then executes the callback function when the event occurs.
       console.log("you clicked Me!!!");
       const randomColor = randomColorGenerator();
       console.log(randomColor);
       body.style.backgroundColor = randomColor;
       currentColor.textContent = randomColor;
})