const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultContainer = document.getElementById("result-container");

searchButton.addEventListener("click", function() {
  const searchTerm = searchInput.value;
  if (!searchTerm) return;

  const apiKey = "d805be75";
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
  // console.log(apiUrl)

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "False") {
        throw new Error("Movie not found");
      }

      const { Poster, Title, Year, imdbRating, Actors, Director } = data;
      // console.log(Poster);

      resultContainer.innerHTML = `
        <img src="${Poster}" alt="${Title} poster">
        <h2>${Title} (${Year})</h2>
        <p>IMDB Rating: ${imdbRating}</p>
        <p>Cast: ${Actors}</p>
        <p>Director: ${Director}</p>
      `;
    })
   
});