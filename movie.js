let youserSearch = localStorage.getItem('Ysearch');

let poster = document.getElementById('poster');
let title = document.getElementById('title');
let info = document.getElementById('info');

let url = 'https://www.omdbapi.com/?apikey=41c79867&t='+youserSearch;



async function fetchdata() {
    
  const response = await fetch(url)
  data = await response.json()
  console.log(data)
  
  poster.src = data.Poster
  title.innerHTML = data.Title
  info.innerHTML = data.Plot
  
  document.getElementById('country').innerHTML = 'Country: '+data.Country
  
  document.getElementById('year').innerHTML = 'Year: '+data.Year
  
  document.getElementById('genre').innerHTML = 'Genre: '+data.Genre
  
  document.getElementById('relese_date').innerHTML = 'Released Date :'+data.Released
  
  document.getElementById('ratings').innerHTML = 'Imdb Rating: '+data.imdbRating;
 

  document.getElementById('movi').src = 'https://multiembed.mov/?video_id='+ data.imdbID;


}
fetchdata()

let back_icon = document.getElementById('back');

back_icon.addEventListener('click',()=>{
  window.location.href = 'index.html';
})

