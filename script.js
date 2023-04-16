//your code here
// script.js
const bands = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Define a function to strip out articles ('a', 'an', 'the') from band names
function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names in lexicographic order
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Select the ul element
const ul = document.querySelector('#bands');

// Loop through the sorted bands and add them to the ul as li elements
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});


