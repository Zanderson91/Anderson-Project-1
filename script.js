fetch('https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup')
  .then(response => response.json())
  .then(data => console.log(data));