// Kanye Stuff
var kanyeEl = function() {

  // API call to get random Kanye Quotes
  fetch("https://api.kanye.rest/")
    .then(function(response){
      return response.json();
  })
  .then(function(response){
      var kanyeQuote = response.quote
      document.getElementById("kanyeQuote").innerHTML = kanyeQuote
  })
  }
  
  // Taylor Stuff
  var taylorEl = function() {

    // API call to get random Taylor quotes
    fetch("https://api.taylor.rest")
      .then(function(response){
        return response.json();
    })
    .then(function(response){
        var taylorQuote = response.quote
        document.getElementById("taylorQuote").innerHTML = taylorQuote
    })

    // API call to get random Taylor image
    fetch("https://api.taylor.rest/image")
        .then(function(response){
          return response.json();
      })
      .then(function(response){
          document.getElementById("taylorImg").setAttribute("src", response.url)
      })
    }
  
  kanyeEl();
  taylorEl();
  