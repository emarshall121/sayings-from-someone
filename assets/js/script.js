var likeBtn = document.getElementById('like-btn');
var dislikeBtn = document.getElementById('dislike-btn')
var favoriteBtn = document.getElementById('favorite-btn')
var favClass = document.getElementById('favorite')
var likeCount = document.getElementById('like-cnt')
var disLikeCount = document.getElementById('dislike-cnt')
var HeaderQuote = document.getElementById('header-quote')



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
        //--- push to temp objects for local storage--//
        quotesObj.quote.push(kanyeQuote)
        favoriteQuotesObj.quote.push(kanyeQuote)

        document.getElementById("kanyeQuote").innerHTML = kanyeQuote
        kanyeRandom(); 
        document.getElementById("kanyeName").innerHTML = "Kanye West"

        //---check if current fetch is in storage--//
        socialStatus();
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
         //--- push to temp objects for local storage--//
        quotesObj.quote.push(kanyeQuote)
        favoriteQuotesObj.quote.push(kanyeQuote)

        document.getElementById("taylorQuote").innerHTML = taylorQuote
        document.getElementById("taylorName").innerHTML = "Taylor Swift"

        //---check if current fetch is in storage--//
        socialStatus();
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

  // -----temp storage of current quote obj------//

var quotesObj = {
  quote: [],
  likes: [],
  dislikes: []
};

// --------Save Like count into local storage-----//

var saveLikesToStorage = function() {
  var getLocalStorage = JSON.parse(localStorage.getItem(quotesObj.quote))
  
  if (getLocalStorage === null) {
    quotesObj.likes++
    localStorage.setItem(quotesObj.quote,JSON.stringify(quotesObj));
    updateSocialStatus()    
  } 
  else {
      var currentLikes = JSON.parse(localStorage.getItem(quotesObj.quote))
      quotesObj.likes++;
      localStorage.setItem(quotesObj.quote,JSON.stringify(quotesObj));
      updateSocialStatus()        
  }  
}
// -----------------------------------------------//


// ----------Save Dislike count to local storage-----//

var saveDislikesToStorage = function() {
  var getLocalStorage = JSON.parse(localStorage.getItem(quotesObj.quote))
  
  if (getLocalStorage === null) {
    quotesObj.dislikes++
    localStorage.setItem(quotesObj.quote,JSON.stringify(quotesObj));
    updateSocialStatus()
  } 
  else {
    var currentSocial = JSON.parse(localStorage.getItem(quotesObj.quote))      
      quotesObj.dislikes++;        
      localStorage.setItem(quotesObj.quote,JSON.stringify(quotesObj));
      updateSocialStatus()
  }  
}
// -----------------------------------------------//

// --------------Load Social Status--------------//

var socialStatus = function () { 
  var getLocalStorage = JSON.parse(localStorage.getItem(quotesObj.quote))  
  if(getLocalStorage !== null){

      if(getLocalStorage.likes.length !== 0 && getLocalStorage.dislikes.length !== 0) {
        quotesObj.likes.push(getLocalStorage.likes)
        quotesObj.dislikes.push(getLocalStorage.dislikes)
        likeCount.innerHTML = quotesObj.likes
        disLikeCount.innerHTML = quotesObj.dislikes
      } 
      else if (getLocalStorage.likes.length !== 0 && getLocalStorage.dislikes.length === 0){
        quotesObj.likes.push(getLocalStorage.likes)  
        likeCount.innerHTML = quotesObj.likes
        disLikeCount.innerHTML = quotesObj.dislikes  
      } 
      else if (getLocalStorage.likes.length === 0 && getLocalStorage.dislikes.length !== 0){
       quotesObj.dislikes.push(getLocalStorage.dislikes)
       likeCount.innerHTML = quotesObj.likes
       disLikeCount.innerHTML = quotesObj.dislikes
      }
  }   
}
// -----------------------------------------------//

// ---------------Update Social status------------//

var updateSocialStatus = function() {

  var getLocalStorage = JSON.parse(localStorage.getItem(quotesObj.quote[0]))
    likeCount.innerHTML = getLocalStorage.likes
    disLikeCount.innerHTML = getLocalStorage.dislikes  
}
//-------------------------------------------------//

// -------Favorite Button save to local storage----//

var favBtnHandler = function(event){
  var favBtn = favoriteBtn.value
  
  if(favBtn === "not-favorite") {  
      favoriteBtn.value = "is-favorite"
      favClass.classList.add('fav-btn')
      favoriteQuote()
      
      }
      else if (favBtn === 'is-favorite'){
      favoriteBtn.value="not-favorite"
      favClass.classList.remove('fav-btn')
      deleteFavorite() 
         
      }
  }
  // -----------------------------------------------//

  // ----------Favorite Quotes temp object---------//
var favoriteQuotesObj = {
  quote: []
}
// -----------------------------------------------//

// ----------Set selected quote to local storage---//

var favoriteQuote = function() {
  var getLocalStorage = JSON.parse(localStorage.getItem('favoriteQuotes'))

  if (getLocalStorage === null) {    
    localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotesObj))     
  } 
  else {
    var favorite = JSON.parse(localStorage.getItem('favoriteQuotes'))    

    for(var i = 0; i < favorite.quote.length; i++){
      var storedFavorite = favorite.quote[i]
      favoriteQuotesObj.quote.push(storedFavorite)
      localStorage.removeItem('favoriteQuotes')         

      if( favoriteQuotesObj.quote.length > 5) {
        favoriteQuotesObj.quote.splice(4,1)
        localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotesObj))        
      } else {

        localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotesObj))
      }      
    }         
  }  
}
// -----------------------------------------------//

// ---------Delete "un" favorite quote-----------//
 
var deleteFavorite = function(){
  favoriteQuotesObj ={
    quote: []
  }
  var favorite = JSON.parse(localStorage.getItem('favoriteQuotes'))

    for(var i = 0; i < favorite.quote.length; i++){

      var storedFavorite = favorite.quote[i]
      favoriteQuotesObj.quote.push(storedFavorite)            
    }

    localStorage.removeItem('favoriteQuotes')
 
    var favDeleteQuote = quotesObj.quote[0]
    console.log('favorite delete',favDeleteQuote);
    favoriteQuotesObj.quote.splice(favoriteQuotesObj.quote.indexOf(favDeleteQuote),1) 
    
    if(favoriteQuotesObj.quote.length === 0) {
      return
    } else{
      localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotesObj))
    }         
    localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotesObj))
    }
    // ----------------------------------------------------------------------//

    // -------------event listeners-------------------//
likeBtn.addEventListener('click', saveLikesToStorage)
dislikeBtn.addEventListener('click', saveDislikesToStorage)
favoriteBtn.addEventListener('click',favBtnHandler)


  