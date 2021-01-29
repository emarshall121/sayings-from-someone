// Variable to hold images of Kanye West
var kanyeImg = [
  "https://theartsdesk.com/sites/default/files/styles/mast_image_landscape/public/mastimages/Kanye-West-ft-T.I.-Ye-Vs.-The-People-768x768.png?itok=ijW2BquS", 
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108b3722-09ff-4187-8a71-aab33b0eb774/dbav96i-b288ee93-4c23-428f-be77-8020c8325fb9.png/v1/fill/w_992,h_557,strp/kanye_west_png_by_chrisneville85_dbav96i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NTciLCJwYXRoIjoiXC9mXC8xMDhiMzcyMi0wOWZmLTQxODctOGE3MS1hYWIzM2IwZWI3NzRcL2RiYXY5NmktYjI4OGVlOTMtNGMyMy00MjhmLWJlNzctODAyMGM4MzI1ZmI5LnBuZyIsIndpZHRoIjoiPD05OTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EZdARzha_co__hqDoKCorZPkhkNW9xqKFFHc6Pdr4vc",
  "https://pyxis.nymag.com/v1/imgs/a67/4ee/c45b0be299ca2542f666db398d607fc557-25-kanyewest-silo.rvertical.w330.png", 
  "https://officialpsds.com/imageview/rl/k2/rlk21j_large.png?1521316515", 
  "https://www.peanutsclothes.com/wp-content/uploads/2020/01/Kanye-West.png",
  "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Kanye-West-PNG-Transparent-Image-1-500x703.png",
  "https://lh3.googleusercontent.com/proxy/5uBtCYuhc2qEm7JLbSA7R1O0oRKKgDnIOmpF-gpcxzx0fv0oRE--V9ZrU3eT2wzu8xPufci8fgwc5pGgCoVcr5BaxUDcJHV0b67NVrSnVf3LtfzDdCctwyGskYT_k9Z_ZTTfdecxVKpL",
  "https://freepngimg.com/thumb/kanye_west/9-2-kanye-west-png-file.png",
  "https://www.nicepng.com/png/full/69-694587_bad-pics-of-kanye-west.png",
  "https://lh3.googleusercontent.com/proxy/rlZ7ZFooEx3j5qT0z7Al6HtuBcC44TW95l_2tucE3-VCxYpb9FXdWDYev7p6o2SgmAcqaDmkpAnSuyBoXPjVjBDBa7kQKOxIMtqwQoKzrFic6iZYpri5ltuDX2_vbA",
  "https://moscatolife.files.wordpress.com/2018/05/kanye_west.png?w=660"
];

// Current date set as: day, month name/day, year (i.e. Monday, February 1, 2021)
var now = dayjs().format('dddd, MMMM D, YYYY');

// Kanye Stuff

  // function to pull random picture from kanyeImages array
  function kanyeRandom() {
    var randomNum = Math.floor(Math.random()*kanyeImg.length);
    document.getElementById("kanyeImages").src=kanyeImg[randomNum];
    }

  // API call to get random Kanye Quote
  var kanyeEl = function() {

    fetch("https://api.kanye.rest/")
      .then(function(response){
        return response.json();
    })
    .then(function(response){
        var kanyeQuote = response.quote
        document.getElementById("kanyeQuote").innerHTML = kanyeQuote
        kanyeRandom();
    })
    }
  
  // Taylor Stuff
  var taylorEl = function() {

    // API call to get random Taylor quote
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
  