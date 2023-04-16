//your code here
// script.js
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'The Who'];

// Function to remove articles from band names
function removeArticles(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
  return filteredWords.join(' ');
}

// Sort the band names in lexicographic order excluding articles
const sortedBandNames = bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Display the sorted band names in a list
const bandList = document.getElementById('band');
sortedBandNames.forEach(name => {
  const li = document.createElement('li');
  const text = document.createTextNode(name);
  li.appendChild(text);
  bandList.appendChild(li);
});


