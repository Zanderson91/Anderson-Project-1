let search = $("#search");
let searchBtn = $("#search-btn");
let mGenre = $("#genre");
let cardTitle = $("#card-title");
let cardImage = $("#card-image");
let cardType = $("#card-type");
let cardYear = $("#card-year");
let cardDescr = $("#card-descr");

//Event Listener for Unique Suggestions
document.getElementById("search-btn-1").addEventListener("click", function () {
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
  console.log(url);

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

//Event Listener for Show Results
document.getElementById("search-btn-2").addEventListener("click", function () {
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
  console.log(url);
  //IDs for Cards and randomizer for
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
