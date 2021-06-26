fetch('http://www.omdbapi.com/?i=tt3896198&apikey=8e4cfd66', {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

fetch("https://api.giphy.com/v1/gifs/search?api_key=tBkIHZ6GFiU67GbmkzNnGvHO0aiWvJJg&q=golf", {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  document.getElementById("search-btn").addEventListener("click",function(){
    const ratings =[]
  $('input.rating[type=checkbox]').each(function(){
    if ($(this).is(":checked")){
      ratings.push($(this).val())
  }
  })
console.log(ratings)
  })
  //need return ratings...




  //Create separate function for Genre and Release Year
  //getRatings, getGenre, getRelease, getActor