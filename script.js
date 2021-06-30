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

/*
let url =
  "https://api.watchmode.com/v1/list-titles/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs&source_ids=203,57&genres=";
$.ajax({
  method: "GET",
  url: url,
}).then(function (titles) {
  $("#card-type").text(titles.titles[0].tmdb_type);
  $("#card-year").text(titles.titles[0].year);
  $("#card-title").text(titles.titles[0].title);
  console.log(titles);
});

let url2 =
  "https://api.watchmode.com/v1/genres/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs";
$.ajax({
  method: "GET",
  url: url2,
}).then(function (genre) {
  $("#genre").text(genre[0].name);

  console.log(genre);
});

let url3 =
  "https://api.watchmode.com/v1/title/345534/details/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs";
$.ajax({
  method: "GET",
  url: url3,
}).then(function (descr) {
  $("#descr").text(descr.plot_overview);

  console.log(descr);
});
*/

document.getElementById("search-btn").addEventListener("click", function () {
  $("#response-container").show();
  const genres = getGenres();
  const types = getTypes();
  genreValues = [];
  for (let i = 0; i < genres.length; i++) {
    genreValues.push(genres[i].value);
  }
  const url =
    "https://api.watchmode.com/v1/list-titles/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs&genres=" +
    genreValues +
    "&types=" +
    types;
    console.log(url)

  $.get(url).done(function (movies) {
    console.log(movies);
    for (let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random() * movies.titles.length);
      $("#descr-" + i).text(movies.titles[randomNumber].plot_overview);
      $("#card-type-" + i).text(movies.titles[randomNumber].tmdb_type);
      $("#card-year-" + i).text(movies.titles[randomNumber].year);
      $("#card-title-" + i).text(movies.titles[randomNumber].title);
    }
  });
});

function getGenres() {
  const genre = [];
  $("input.genre[type=checkbox]").each(function () {
    if ($(this).is(":checked")) {
      let genreToAdd = {
        value: $(this).val(),
        name: $(this).attr("name"),
      };
      genre.push(genreToAdd);
    }
  });
  console.log(genre);
  return genre;
}

function getTypes() {
  const type = [];
  $("input.type[type=checkbox]").each(function () {
    if ($(this).is(":checked")) {
      type.push($(this).val());
    }
  });
  console.log(type);
  return type;
}


/*

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




//getRatings, getGenre, getRelease, getActor
*/
