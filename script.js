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

  // Part 4
const specialTitle = document.querySelectorAll('.special-title');
specialTitle.forEach(special => {
  special.style.fontSize = '2rem';
});

  // Part 5
  const raceChanges = document.getElementById('past-races');
  const races = raceChanges.querySelectorAll('li');
  for (let i = 0; i < races.length; i++) {
  if (races[i].textContent === "Chicago") {
    raceChanges.removeChild(races[i]);
  }};

  // Part 6
const newRace = document.createElement('li');
newRace.innerText = 'Barcelona'
raceChanges.appendChild(newRace)
// console.log(raceChanges)

  // Part 7 -- Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.

  // Need to append the new elements to the correction sections
const newBlogPost = document.createElement('div')
document.body.appendChild(newBlogPost);
newBlogPost.classList.add('blog-post')
newBlogPost.classList.add('purple')
const barcelona = document.createElement('h1')
barcelona.innerText = "Barcelona"
newBlogPost.appendChild(barcelona)

const barcelonaPara = document.createElement('p');
barcelonaPara.innerText = "This was a special race and I beat everyone!"
barcelonaPara.innerText.toUpperCase();
newBlogPost.appendChild(barcelonaPara)
console.log(newBlogPost)

  // Part 8


  // Part 9

});