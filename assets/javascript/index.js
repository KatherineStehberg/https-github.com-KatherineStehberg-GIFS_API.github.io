const apiKey = 'TMujM2xnvnTUYOBkDzKS5D3iLqLOG05T'; // Tu API Key de Giphy

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const gifContainer = document.getElementById('gifContainer');

// Agrega el evento "click" al botón de búsqueda
searchBtn.addEventListener('click', () => {
  searchGifs();
});

// Agrega el evento "keypress" al campo de entrada para detectar "Enter"
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchGifs();
  }
});

async function searchGifs() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== '') {
    const gifs = await getGifs(searchTerm);
    displayGifs(gifs);
  }
}

async function getGifs(searchTerm) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=12`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    return [];
  }
}

function displayGifs(gifs) {
  gifContainer.innerHTML = '';
  gifs.forEach(gif => {
    const gifItem = document.createElement('div');
    gifItem.classList.add('gif-item');

    const img = document.createElement('img');
    img.src = gif.images.original.url; // Usamos la URL del GIF original
    img.alt = gif.title;

    gifItem.appendChild(img);
    gifContainer.appendChild(gifItem);
  });
}
