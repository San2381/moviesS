let mainPoster = document.getElementById('main_poster')

let mainTitle = document.getElementById('main_title')
let mainInfo = document.getElementById('main_info')

let menu_icon= document.getElementById('menu_icon')
let menu = document.getElementById('menu')
menu.classList.add('ds');


let url = 'https://www.omdbapi.com/?apikey=41c79867&t=puss in boots'

async function fetchdataM() {
    const response = await fetch(url)
    data = await response.json()
    console.log(data);
    
    mainPoster.src = data.Poster
    mainTitle.innerHTML = data.Title
    mainInfo.innerHTML = data.Plot
    
    console.log(mainPoster)
    
}
fetchdataM()

let search_icon = document.getElementById('search_icon');

let search_input = document.getElementById('search_input');

let search;

search_icon.addEventListener('click',()=>{
  search = search_input.value;
  localStorage.setItem('Ysearch',search)
  window.location.href = 'movieS/movie.html'
})

//https://m.youtube.com/watch?v=uwmDH12MAA4;






let movieList = [
  document.getElementById('one'),
  document.getElementById('two'),
  document.getElementById('three'),
  document.getElementById('four'),
  document.getElementById('five'),
  document.getElementById('six'),
  document.getElementById('seven'),
  document.getElementById('eight'),
  document.getElementById('nine'),
  
  ]
  
  
  

async function hdata() {
    
   // const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8&genre=sci-fi')

    //const response = await fetch('https://yts.mx/api/v2/list_movies.json?sort=year')
    
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?sort=year&&genre=action')
    
    data = await response.json()
    console.log(data);
    console.log(data.data.movies);
    
    movieList[0].src = data.data.movies[0].medium_cover_image;
    movieList[1].src = data.data.movies[4].medium_cover_image;
    movieList[2].src = data.data.movies[7].medium_cover_image;
    movieList[3].src = data.data.movies[8].medium_cover_image;
    movieList[4].src = data.data.movies[9].medium_cover_image;
    movieList[5].src = data.data.movies[10].medium_cover_image;
    movieList[6].src = data.data.movies[11].medium_cover_image;
    movieList[7].src = data.data.movies[12].medium_cover_image;
    movieList[8].src = data.data.movies[13].medium_cover_image;
    
    //show the movie when click on movies on home

    document.getElementById('watchNowM').addEventListener('click', () => {
      search = 'puss in boots';
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
    

    document.getElementById('one').addEventListener('click', () => {
      search = data.data.movies[0].title;
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
    
    document.getElementById('two').addEventListener('click', () => {
      search = data.data.movies[4].title;
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
    
    document.getElementById('three').addEventListener('click', () => {
      search = data.data.movies[7].title;
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
    
    document.getElementById('four').addEventListener('click', () => {
      search = data.data.movies[8].title;
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
    
    document.getElementById('five').addEventListener('click', () => {
      search = data.data.movies[9].title;
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
    
    document.getElementById('six').addEventListener('click', () => {
      search = data.data.movies[10].title;
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
    
    document.getElementById('seven').addEventListener('click', () => {
      search = data.data.movies[11].title;
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
    
    document.getElementById('eight').addEventListener('click', () => {
      search = data.data.movies[12].title;
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
    
    document.getElementById('nine').addEventListener('click', () => {
      search = data.data.movies[13].title;
      localStorage.setItem('Ysearch', search)
      window.location.href = '/movie/movie.html'
    });
   
    
    

}
hdata();
/*
let search_icon = document.getElementById('search_icon');

let search_input = document.getElementById('search_input');

let search;

search_icon.addEventListener('click',()=>{
  search = search_input.value;
  localStorage.setItem('Ysearch',search)
  window.location.href = '/movie/movie.html'
})

//https://m.youtube.com/watch?v=uwmDH12MAA4;

*/
let menuClose = document.getElementById('menu_close');

menu_icon.addEventListener('click',()=>{
  menu.classList.remove('ds');
  search_input.style.marginLeft = '80px'

})

menuClose.addEventListener('click',()=>{
  menu.classList.add('ds');
  search_input.style.marginLeft = '5px'

})

