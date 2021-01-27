// Kanye Stuff
var kanyeEl = function() {
  fetch("https://api.kanye.rest/")
    .then(function(response){
      return response.json();
  })
  .then(function(response){
      console.log(response.quote)
      var kanyeQuote = response.quote
      document.getElementById("kanyeQuote").innerHTML = kanyeQuote
  })
  }
  
  // Taylor Stuff
  var taylorEl = function() {
    fetch("https://api.taylor.rest")
      .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response.quote)
        var taylorQuote = response.quote
        document.getElementById("taylorQuote").innerHTML = taylorQuote
    })
    }

    var taylorImage = function() {
      fetch("https://api.taylor.rest/image")
        .then(function(response){
          return response.json();
      })
      .then(function(response){
          console.log(response.url)
          document.getElementById("taylorImg").setAttribute("src", response.url)
      })
      }
  
  kanyeEl();
  taylorEl();
  taylorImage();
  