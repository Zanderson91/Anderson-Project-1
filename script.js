let search = $("#search");
let searchBtn = $("#search-btn");
let mGenre = $("#genre");
let cardTitle = $("#card-title");
let cardImage = $("#card-image");
let cardType = $("#card-type");
let cardYear = $("#card-year");
let cardDescr = $("#card-descr");

/*
fetch(url, { method: "Get" })
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });

let url2 =
  "https://api.watchmode.com/v1/genres/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs";
/*fetch(url2, { method: "Get" })
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });
*/
let url =
  "https://api.watchmode.com/v1/list-titles/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs&source_ids=203,57&genres=1";
  $.ajax({
    method: "GET",
    url: url,
}).then(function (titles) {
$("#card-type").text(titles.titles[0].tmdb_type);
$("#card-year").text(titles.titles[0].year);
$("#card-title").text(titles.titles[0].title);
console.log(titles)
})

let url2 =
  "https://api.watchmode.com/v1/genres/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs";
  $.ajax({
    method: "GET",
    url: url2,
}).then(function (genre) {
$("#genre").text(genre[0].name);

    console.log(genre);
})

let url3 = 
  "http://www.omdbapi.com/?i=tt3896198&apikey=8e4cfd66";
  $.ajax({
    method: "GET",
    url: url3,
  }).then(function (descr) {
    $("#descr").text(genre[0].name);

    console.log(genre);
  });


$.when($.ajax(url), $.ajax(url2), $.ajax(url3)).done(function (titles, genre, descr) {
  console.log(titles, genre, descr);
});

  //Need randomizer...

/*
genre = array
genre.length
let randomNumber = Math.floor(Math.random() * genre.length)
const chosenMovies = []
chosenMovies.push(randomNumber)
while(chosenMovies.includes(randomNumber)) {
randomNumber = Math.floor …
}
*/


fetch(
  "https://api.giphy.com/v1/gifs/search?api_key=tBkIHZ6GFiU67GbmkzNnGvHO0aiWvJJg&q=golf",
  {}
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

let url =
  "https://api.watchmode.com/v1/genres/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs";

fetch(url, { method: "Get" })
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });

document.getElementById("search-btn").addEventListener("click", function () {
  const ratings = [];
  $("input.rating[type=checkbox]").each(function () {
    if ($(this).is(":checked")) {
      ratings.push($(this).val());
    }
  });
  console.log(ratings);
});
//need return ratings...

document.getElementById("search-btn").addEventListener("click", function () {
  const genre = [];
  $("input.genre[type=checkbox]").each(function () {
    if ($(this).is(":checked")) {
      genre.push($(this).val());
    }
  });
  console.log(genre);
});

document.getElementById("search-btn").addEventListener("click", function () {
  const release = [];
  $("input.release[type=checkbox]").each(function () {
    if ($(this).is(":checked")) {
      release.push($(this).val());
    }
  });
  console.log(release);
});

document.getElementById("search-btn").addEventListener("click", function () {
  const actor = "";
  $("input.actor").each(function () {
    actor.push($(this).value());
  });
  console.log(actor);
});

//Create separate function for Genre and Release Year
//getRatings, getGenre, getRelease, getActor
*/