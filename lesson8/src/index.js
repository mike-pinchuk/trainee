import './styles/style.css';

const input = document.getElementById('search');
const button = document.getElementById('search_button');
const view = document.querySelector('.view');

const API = 'http://api.tvmaze.com/search/shows/?q='
const noImg = 'https://semantic-ui.com/images/wireframe/white-image.png'

button.addEventListener('click', (e) => {
   cleanView();
   const movie = input.value;
   viewResult(API, movie)
})

const viewResult = (api, film) => {

   fetch(`${api}${film}`).then(response => {
      return response.json()
   }).then(data => { 

      for (let i = 0; i < data.length; i++) {
         const box = document.createElement('div');
         box.setAttribute('class', 'card')
         view.appendChild(box);
         box.innerHTML = `<h2>${data[i].show.name}</h2> <img src="${data[i].show.image === null ? noImg : data[i].show.image.medium}"> <p>Premier: ${data[i].show.premiered === null ? 'Information does not exist' : data[i].show.premiered}</p> <p>Genre: ${data[i].show.genres}</p>`
      }
   })
}

const cleanView = () => {
   view.textContent = null;
}

console.log('hh')