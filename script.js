//your code here
const bands = ['The Rolling Stones', 'The Beatles', 'Aerosmith', 'Led Zeppelin', 'The Who', 'Pink Floyd'];

function strip(article) {
return article.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const bandList = document.querySelector('#bands');

bandList.innerHTML = sortedBands.map(band => <li>${band}</li>).join('');


