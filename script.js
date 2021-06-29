let search = $("#search");
let searchBtn = $("#search-btn");
let mGenre = $("#genre");

let url =
  "https://api.watchmode.com/v1/list-titles/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs&source_ids=203,57&genres=1";
fetch(url, { method: "Get" })
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });

let url2 =
  "https://api.watchmode.com/v1/genres/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs";
fetch(url2, { method: "Get" })
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });

    $(mGenre).html(id.name);
    console.log(mGenre);

  /*
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8e4cfd66", {})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

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