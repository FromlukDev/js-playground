const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025', 'blue', 'tomato', 'purple'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  //get random number between 0 - 5 in the array(colors).
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber]; 
    //this line is the span element
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}