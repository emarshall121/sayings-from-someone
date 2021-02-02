var kanyeLikeBtn = document.getElementById('like-btn');
var taylorLikeBtn = document.getElementById('taylor-like-btn');

var kanyeDislikeBtn = document.getElementById('dislike-btn')
var taylorDislikeBtn = document.getElementById('taylor-dislike-btn')

var kanyeFavoriteBtn = document.getElementById('kanye-favorite-btn')
var taylorFavoriteBtn = document.getElementById('taylor-favorite-btn')

var kanyeFavClass = document.getElementById('kanye-favorite')
var taylorFavClass = document.getElementById('taylor-favorite')

var kanyeLikeCount = document.getElementById('kanye-like-cnt')
var taylorLikeCount = document.getElementById('taylor-like-cnt')

var kanyeDisLikeCount = document.getElementById('kanye-dislike-cnt')
var taylorDisLikeCount = document.getElementById('taylor-dislike-cnt')

var headerQuote = document.getElementById('header-quote')
var favoriteList = document.getElementById('favorite-list')

var deleteFavEl = document.getElementById('kanyeQuote')

var favoritesModalEl = document.getElementById('fav-trigger-btn')
var favoriteModalCloseBtn = document.getElementById('fav-close-btn')


// Variable to hold images of Kanye West
var kanyeImg = [
  "https://theartsdesk.com/sites/default/files/styles/mast_image_landscape/public/mastimages/Kanye-West-ft-T.I.-Ye-Vs.-The-People-768x768.png?itok=ijW2BquS", 
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108b3722-09ff-4187-8a71-aab33b0eb774/dbav96i-b288ee93-4c23-428f-be77-8020c8325fb9.png/v1/fill/w_992,h_557,strp/kanye_west_png_by_chrisneville85_dbav96i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NTciLCJwYXRoIjoiXC9mXC8xMDhiMzcyMi0wOWZmLTQxODctOGE3MS1hYWIzM2IwZWI3NzRcL2RiYXY5NmktYjI4OGVlOTMtNGMyMy00MjhmLWJlNzctODAyMGM4MzI1ZmI5LnBuZyIsIndpZHRoIjoiPD05OTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EZdARzha_co__hqDoKCorZPkhkNW9xqKFFHc6Pdr4vc",
  "https://pyxis.nymag.com/v1/imgs/a67/4ee/c45b0be299ca2542f666db398d607fc557-25-kanyewest-silo.rvertical.w330.png", 
  "https://officialpsds.com/imageview/rl/k2/rlk21j_large.png?1521316515", 
  "https://www.peanutsclothes.com/wp-content/uploads/2020/01/Kanye-West.png",
  "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Kanye-West-PNG-Transparent-Image-1-500x703.png",
  "https://freepngimg.com/thumb/kanye_west/9-2-kanye-west-png-file.png",
  "https://www.nicepng.com/png/full/69-694587_bad-pics-of-kanye-west.png",
  "https://moscatolife.files.wordpress.com/2018/05/kanye_west.png?w=660"
];

// Current date set as: day, month name/day, year (i.e. Monday, February 1, 2021)
var now = dayjs().format('dddd, MMMM D, YYYY');
function displayDate() {
  document.getElementById("date").innerHTML=now
}

// Modal initialization and method
// document.addEventListener('DOMContentLoaded', function() {
//   var elems= document.querySelector('.modal'); 
//   var instance = M.Modal.init(elems); 
//   onclick="instance.open()"
// });

// Kanye Stuff
  // function to pull random picture from kanyeImages array
  function kanyeRandom() {
    var randomNum = Math.floor(Math.random()*kanyeImg.length);
    document.getElementById("kanyeImages").src=kanyeImg[randomNum];
    }

  // API call to get random Kanye Quote
  var kanyeEl = function() {

    // Display Kanye card
    document.getElementById("kanye").classList.remove("hide");

    // Hide Taylor card when Kanye is selected
    document.getElementById("taylor").classList.add("hide");

    fetch("https://api.kanye.rest/")
   .then(function(response){
        return response.json();
    })
    .then(function(response){
        var kanyeQuote = response.quote
        quotesObj.quote.push(kanyeQuote)
        favoriteQuotesObj.quote.push('"'+ kanyeQuote +'"' + "  " + "-Kanye West")
        document.getElementById("kanyeQuote").innerHTML = `"${kanyeQuote}"`
        kanyeRandom();
        document.getElementById("kanyeName").innerHTML = "Kanye West"

        kanyeLoadSocialStatus()
    })
    }
  
  // Taylor Stuff
  var taylorEl = function() {
  
    // Display Taylor card
    document.getElementById("taylor").classList.remove('hide');

    // Hide Kanye when Taylor is selected
    document.getElementById("kanye").classList.add('hide');

    // API call to get random Taylor quote
    fetch("https://api.taylor.rest")
      .then(function(response){
        return response.json();
    })
    .then(function(response){
        var taylorQuote = response.quote
        taylorQuotesObj.quote.push(taylorQuote)
        favoriteQuotesObj.quote.push('"' + taylorQuote + '"' + "  "+ "-Taylor Swift")
        document.getElementById("taylorQuote").innerHTML = `"${taylorQuote}"`
        document.getElementById("taylorName").innerHTML = "Taylor Swift"
        taylorLoadSocialStatus()
    })

    // API call to get random Taylor image
    fetch("https://api.taylor.rest/image")
        .then(function(response){
          return response.json();
      })
      .then(function(response){
          document.getElementById("taylorImg").setAttribute("src", response.url)
      })      
      console.log("taylor function ran");
    }


   

    // -----temp storage of current quote obj------//
    var quotesObj = {
      quote: [],
      likes: [],
      dislikes: []
    };

    taylorQuotesObj = {
      quote: [],
      likes: [],
      dislikes: []
    }

 

  // ---------Clear and start Fetch for Kanye and Taylor------//
  var kanyeStartQuotes = function (){    
     quotesObj = {
      quote: [],
      likes: [],
      dislikes:[]
    };
    favoriteQuotesObj = {
      quote: []
    };
    kanyeLikeCount.innerHTML = ""
    kanyeDisLikeCount.innerHTML = ""
    kanyeFavoriteBtn.setAttribute('value', "kanye-not-favorite")
    kanyeFavClass.classList.remove('fav-btn')
    kanyeEl();       
  };

  var taylorStartQuotes = function (){
     taylorQuotesObj = {
      quote: [],
      likes: [],
      dislikes: []
    };
 
    favoriteQuotesObj = {
      quote: []
    };
    taylorLikeCount.innerHTML = ""
    taylorDisLikeCount.innerHTML = ""
    taylorFavoriteBtn.setAttribute('value', "taylor-not-favorite")
    taylorFavClass.classList.remove('fav-btn')
    
    taylorEl();   
  };
// -----------------------------------------------//
// --------Save Like count into local storage-----//

var kanyeSaveLikesToStorage = function() {

  var getLocalStorage = JSON.parse(localStorage.getItem(quotesObj.quote))
  
  if (getLocalStorage === null) {
    quotesObj.likes++
    localStorage.setItem(quotesObj.quote,JSON.stringify(quotesObj));
    kanyeUpdateSocialStatus()    
  } 
  else {
      //var currentLikes = JSON.parse(localStorage.getItem(quotesObj.quote))
      quotesObj.likes++;
      localStorage.setItem(quotesObj.quote,JSON.stringify(quotesObj));
      kanyeUpdateSocialStatus()        
  }  
};
// -----------------------------------------------//

//Taylor like to storage//
var taylorSaveLikesToStorage = function() {

  var getLocalStorage = JSON.parse(localStorage.getItem(taylorQuotesObj.quote))
  
  if (getLocalStorage === null) {
    taylorQuotesObj.likes++
    localStorage.setItem(taylorQuotesObj.quote,JSON.stringify(taylorQuotesObj));
    taylorUpdateSocialStatus()    
  } 
  else {
      var currentLikes = JSON.parse(localStorage.getItem(taylorQuotesObj.quote))
      taylorQuotesObj.likes++;
      localStorage.setItem(taylorQuotesObj.quote,JSON.stringify(taylorQuotesObj));
      taylorUpdateSocialStatus()        
  }  
};
// -----------------------------------------------//

// ----------Save Dislike count to local storage-----//

var kanyeSaveDislikesToStorage = function() {

  var getLocalStorage = JSON.parse(localStorage.getItem(quotesObj.quote))
  
  if (getLocalStorage === null) {
    quotesObj.dislikes++
    localStorage.setItem(quotesObj.quote,JSON.stringify(quotesObj));
    kanyeUpdateSocialStatus()
  } 
  else {

    //var currentSocial = JSON.parse(localStorage.getItem(quotesObj.quote))    
     
      quotesObj.dislikes++;        
      localStorage.setItem(quotesObj.quote,JSON.stringify(quotesObj));
      kanyeUpdateSocialStatus()
  }  
}
// -----------------------------------------------//

//Taylor dislike to storage//
var taylorSaveDislikesToStorage = function() {

  var getLocalStorage = JSON.parse(localStorage.getItem(taylorQuotesObj.quote))
  
  if (getLocalStorage === null) {
    taylorQuotesObj.dislikes++
    localStorage.setItem(taylorQuotesObj.quote,JSON.stringify(taylorQuotesObj));
    taylorUpdateSocialStatus()
  } 
  else {

    //var currentSocial = JSON.parse(localStorage.getItem(quotesObj.quote))    
     
      taylorQuotesObj.dislikes++;        
      localStorage.setItem(taylorQuotesObj.quote,JSON.stringify(taylorQuotesObj));
      taylorUpdateSocialStatus()
  }  
}
// -----------------------------------------------//

// --------------Kanye and Taylor Load Social Status--------------//

//Kanye Load Social Status//

var kanyeLoadSocialStatus = function () {
 
  var getLocalStorage = JSON.parse(localStorage.getItem(quotesObj.quote))
    
  
  if(getLocalStorage !== null){
    
      if(getLocalStorage.likes.length !== 0 && getLocalStorage.dislikes.length !== 0) {
        
        quotesObj.likes.push(getLocalStorage.likes)
        quotesObj.dislikes.push(getLocalStorage.dislikes)
        kanyeLikeCount.innerHTML = quotesObj.likes
        kanyeDisLikeCount.innerHTML = quotesObj.dislikes
      } 
      else if (getLocalStorage.likes.length !== 0 && getLocalStorage.dislikes.length === 0){
        quotesObj.likes.push(getLocalStorage.likes)  
        kanyeLikeCount.innerHTML = quotesObj.likes
        kanyeDisLikeCount.innerHTML = quotesObj.dislikes  
      } 
      else if (getLocalStorage.likes.length === 0 && getLocalStorage.dislikes.length !== 0){
       quotesObj.dislikes.push(getLocalStorage.dislikes)
       kanyeLikeCount.innerHTML = quotesObj.likes
       kanyeDisLikeCount.innerHTML = quotesObj.dislikes
      }
  }   
}
// ------------------------------------------------------------------------------------//
// Taylor Load Social Status//
var taylorLoadSocialStatus = function () {
 
  var getLocalStorage = JSON.parse(localStorage.getItem(taylorQuotesObj.quote))
    
  
  if(getLocalStorage !== null){
    
      if(getLocalStorage.likes.length !== 0 && getLocalStorage.dislikes.length !== 0) {
        
        taylorQuotesObj.likes.push(getLocalStorage.likes)
        taylorQuotesObj.dislikes.push(getLocalStorage.dislikes)
        taylorLikeCount.innerHTML = taylorQuotesObj.likes
        taylorDisLikeCount.innerHTML = taylorQuotesObj.dislikes
      } 
      else if (getLocalStorage.likes.length !== 0 && getLocalStorage.dislikes.length === 0){
        taylorQuotesObj.likes.push(getLocalStorage.likes)  
        taylorLikeCount.innerHTML = taylorQuotesObj.likes
        taylorDisLikeCount.innerHTML = taylorQuotesObj.dislikes  
      } 
      else if (getLocalStorage.likes.length === 0 && getLocalStorage.dislikes.length !== 0){
       taylorQuotesObj.dislikes.push(getLocalStorage.dislikes)
       taylorLikeCount.innerHTML = taylorQuotesObj.likes
       taylorDisLikeCount.innerHTML = taylorQuotesObj.dislikes
      }
  }   
}
// -----------------------------------------------//

// ---------------Update Social status for Kanye and Taylor------------//

// Kanye Update Social Status//
var kanyeUpdateSocialStatus = function() {

  var getLocalStorage = JSON.parse(localStorage.getItem(quotesObj.quote[0]))
  console.log(getLocalStorage);
    kanyeLikeCount.innerHTML = getLocalStorage.likes
    kanyeDisLikeCount.innerHTML = getLocalStorage.dislikes

}
// -------------------------------------------------//

//Taylor Update to Social Status
var taylorUpdateSocialStatus = function() {

  var getLocalStorage = JSON.parse(localStorage.getItem(taylorQuotesObj.quote[0]))
    taylorLikeCount.innerHTML = getLocalStorage.likes
    taylorDisLikeCount.innerHTML = getLocalStorage.dislikes  
}
//-------------------------------------------------//

// -------Favorite Button handlers----//

// Kanye Favorite Btn Handler
var kanyeFavBtnHandler = function(event){
  var kanyeFavBtn = kanyeFavoriteBtn.getAttribute('value')
  console.log(kanyeFavBtn);
  
  if(kanyeFavBtn === "kanye-not-favorite") {  
      kanyeFavoriteBtn.setAttribute('value','kanye-is-favorite')
      kanyeFavClass.classList.add('fav-btn')
      favoriteQuote()
      return
      
      }
      else if (kanyeFavBtn === 'kanye-is-favorite'){
      kanyeFavoriteBtn.setAttribute('value', "kanye-not-favorite")
      kanyeFavClass.classList.remove('fav-btn')
      deleteFavorite() 
         
      }
  }
  // -----------------------------------------------//

var taylorFavBtnHandler = function(event){
  var taylorFavBtn = taylorFavoriteBtn.getAttribute('value')
  console.log(taylorFavBtn);
  
  if(taylorFavBtn === "taylor-not-favorite") {  
      taylorFavoriteBtn.setAttribute('value','taylor-is-favorite')
      taylorFavClass.classList.add('fav-btn')
      favoriteQuote()
      return
      
      }
      else if (taylorFavBtn === 'taylor-is-favorite'){
      taylorFavoriteBtn.setAttribute('value', "taylor-not-favorite")
      taylorFavClass.classList.remove('fav-btn')

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
    console.log("this is the favorite", favorite);   

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
  console.log(favoriteQuotesObj);  
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
      console.log("stored Favorite", storedFavorite);
      favoriteQuotesObj.quote.push(storedFavorite)            
    }

    localStorage.removeItem('favoriteQuotes')
 
    var favDeleteQuote = quotesObj.quote[0]
    console.log('favorite delete',favDeleteQuote);


    favoriteQuotesObj.quote.splice(favoriteQuotesObj.quote[0],1) 
    
    if(favoriteQuotesObj.quote.length === 0) {
      return
    } else{
      localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotesObj))
    }         
    localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotesObj))
    }
  // ------------------------------------------------------------------------//
    
 
   // ---------build favorite list------------------------------------//

   var buildFavorite = function(){
    
    var favorite = JSON.parse(localStorage.getItem('favoriteQuotes'))
    if(favorite !== null) {   

      favoriteList.innerHTML="" 
       
      for(var i =0; i< favorite.quote.length; i++){
        var favListItem = document.createElement('li');
        favListItem.setAttribute('class', 'collection-item');

        var favRowDiv = document.createElement('div');
        favRowDiv.setAttribute('class', "row");

        var favColDiv = document.createElement('div');
        favColDiv.setAttribute('class', 'col s12 m12');

        var favColorDiv = document.createElement('div')
        favColorDiv.setAttribute('class', 'card blue-grey lighten-5')

        var favCardDiv =document.createElement('div');
        favCardDiv.setAttribute('class', 'card-content black-text');

        var favCardSpan = document.createElement('span');
        favCardSpan.setAttribute('class', 'card-title');

        var favSpanParagraph = document.createElement('p');
        favSpanParagraph.setAttribute('class', 'quote')
        favSpanParagraph.innerHTML = favorite.quote[i]

        var favCardAction = document.createElement('div')
        favCardAction.setAttribute('class', 'card-action')
       
        
        favoriteList.appendChild(favListItem)
        favListItem.appendChild(favRowDiv)
        favRowDiv.appendChild(favColDiv)
        favColDiv.appendChild(favColorDiv)
        favColorDiv.appendChild(favCardDiv)
        favCardDiv.appendChild(favCardSpan)
        favCardSpan.appendChild(favSpanParagraph)
        favCardDiv.appendChild(favCardAction)
      }

    } 
  }
  // ----Refresh the favorites modal on close------------//
  function removeAllFavorites(){
    favoriteList.innerHTML=""
  }
  // ------------------------------------------------------------------//

      // ---favorites Modal AND Modal initialization and method------//
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, 'opacity');
      });


        
      // ------event listeners-------------------//
document.getElementById("selectKanye").addEventListener("click", kanyeStartQuotes);
document.getElementById("selectTaylor").addEventListener("click", taylorStartQuotes);

kanyeLikeBtn.addEventListener('click', kanyeSaveLikesToStorage);
taylorLikeBtn.addEventListener('click', taylorSaveLikesToStorage);
kanyeDislikeBtn.addEventListener('click', kanyeSaveDislikesToStorage);
taylorDislikeBtn.addEventListener('click', taylorSaveDislikesToStorage);
kanyeFavoriteBtn.addEventListener('click', kanyeFavBtnHandler);
taylorFavoriteBtn.addEventListener('click', taylorFavBtnHandler);
favoritesModalEl.addEventListener('click', buildFavorite);
favoriteModalCloseBtn.addEventListener('click', removeAllFavorites);  

 //----ON LOAD FUNCTIONS---//
displayDate();