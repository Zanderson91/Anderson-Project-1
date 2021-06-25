fetch('http://www.omdbapi.com/?i=tt3896198&apikey=8e4cfd66', {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

fetch("https://api.giphy.com/v1/gifs/search?api_key=tBkIHZ6GFiU67GbmkzNnGvHO0aiWvJJg", {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });