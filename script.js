let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
const wordyTitle = document.getElementById('main-title');
wordyTitle.innerText = "Welcome to DOM's World!";

  // Part 2
  const newBody = document.body.style.backgroundColor = 'goldenrod';

  // Part 3 -- tough
const listChanges = this.getElementById('favorite-things')
if (listChanges.hasChildNodes()) {
  listChanges.removeChild(listChanges.lastElementChild);
}

  // Part 4 -- not working
// const specialTitle = document.getElementsByClassName('special-title');
// specialTitle.forEach (specialTitleSize) {
//   specialTitle.style.fontSize = '2rem';
// };

  // Part 5
  const raceChanges = this.getElementById('past-races');
  if (raceChanges.hasChildNodes()) {
    raceChanges.removeChild(raceChanges.children[3]);
  }
  // Part 6
const newRace = document.createElement('li');
raceChanges.appendChild(newRace);
newRace.innerText = 'Barcelona'


  // Part 7 -- Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.
const newBlogPost = document.createElement('div')
newBlogPost.classList.add('blog-post')


  // Part 8


  // Part 9

});