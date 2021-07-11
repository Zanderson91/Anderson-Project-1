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
      let details = getDetails(movies.titles[randomNumber].id).then(details=>$("#descr-" + i).text(details));
      $("#card-type-" + i).text(movies.titles[randomNumber].tmdb_type);
      $("#card-year-" + i).text(movies.titles[randomNumber].year);
      $("#card-title-" + i).text(movies.titles[randomNumber].title);
    }
  });
});

function getDetails(resultID) {
  let details = ""
  const url0 =
    "https://api.watchmode.com/v1/title/" +
    resultID +
    "/details/?apiKey=yhpNItDXAOmWWzncuiKhQUljt22PagqsZ3ryDlLs";
  return fetch(url0, { method: "Get" })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.plot_overview);
      details = json.plot_overview
      return details
    });
}


//Event Listener for Show Results
document.getElementById("search-btn-2").addEventListener("click", function () {
  $("#response-container").show();
  const genres = getGenres();
  const types = getTypes();
  //const details = getDetails();
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
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * movies.titles.length);
      let details = getDetails(movies.titles[randomNumber].id).then(details=>$("#descr-" + i).text(details));
      console.log(details)
      //$("#descr-" + i).text(details);
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
