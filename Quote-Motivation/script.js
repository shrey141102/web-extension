fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    const jokeElement = document.getElementById('jokeElement');
    jokeElement.innerHTML = data[Math.floor(Math.random() * data.length)].text;
  });