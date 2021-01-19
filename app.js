const select = document.querySelector('#breeds');
const card = document.querySelector('.card');


//Fetch functions
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => showImage(data.message))

fetch('https://dog.ceo/api/breeds/list')
  .then(response => response.json())
  .then(data => showOptions(data.message))

//Helper functions

function showImage(data) {
  const html = `
    <img src='${data}' alt>
    <span>Click to view more images of ${select.value}</span>
  `;
  card.innerHTML = html;
}

function showOptions(data) {
  const options = data.map(item => `
    <option value='${item}'>${item}</option>
    `);
  select.innerHTML = options;
}

//Event listeners


