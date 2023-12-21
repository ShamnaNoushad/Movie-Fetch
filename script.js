
function searchBtn() {
    var movieName = document.getElementById("fname").value
    console.log(movieName);

    if (movieName == "") {
        alert("Please search a movie")
    } else {
        fetch(`https://www.omdbapi.com/?apikey=df82801&t=${movieName}`)
            .then(data => data.json())
            .then(movieDet => displayBtn(movieDet))
    }
}

function displayBtn(movieDet) {
    htmlData = `<div class="card mb-3" style="max-width: 1200px;">
                    <div class="row g-0">
                      <div class="col-md-3">
                        <img src=${movieDet.Poster} class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-9">
                        <div class="card-body">
                          <h2 class="card-title text-center">${movieDet.Title}(${movieDet.Year})</h2>
                          <p class="card-text">${movieDet.Plot}</p>
                          <p class="card-text">Director: ${movieDet.Director}</p>
                          <p class="card-text">Actors: ${movieDet.Actors}</p>
                          <p class="card-text">Language: ${movieDet.Language}</p>
                          <p class="card-text">Writer: ${movieDet.Writer}</p>
                          <p class="card-text">Genre: ${movieDet.Genre}</p>
                          <p class="card-text"><small class="text-muted">Rated:
                          ${movieDet.Rated}
                          </small></p>
                          <p class="card-text"><small class="text-muted">Ratings: 
                          ${movieDet.Ratings[0].Source}:${movieDet.Ratings[0].Value}
                          </small></p>
                        </div>
                      </div>
                    </div>
                  </div>`
    result.innerHTML = htmlData
}