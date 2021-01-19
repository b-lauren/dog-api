const select = document.querySelector('#breeds');
const card = document.querySelector('.card');


//Fetch functions

//Reusable fetch function
function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
}

fetchData('https://dog.ceo/api/breeds/image/random')
  .then(data => showImage(data.message))

fetchData('https://dog.ceo/api/breeds/list')
  .then(data => showOptions(data.message))


//Helper functions

function showImage(data) {
  const html = `
    <img src='${data}' alt>
    <span>Click to view more ${select.value}s</span>
  `;
  card.innerHTML = html;
}

function showOptions(data) {
  const options = data.map(item => `
    <option value='${item}'>${item.toUpperCase()}</option>
    `).join('');
  select.innerHTML = options;
}


function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector('img');
  const span = card.querySelector('span');

  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(data => {
      img.src = data.message;
      img.alt = breed;
      span.textContent = `Click to view more ${breed}s`;
    })
}

//Event listeners
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);
