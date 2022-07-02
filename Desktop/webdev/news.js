const apikey = "716f0370335b45028b4ae489f1549fc8";
const source ='the-hindu'
const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=716f0370335b45028b4ae489f1549fc8`;
const container=document.getElementsByClassName('container1');
const breakingNewsUrl='https://newsapi.org/v2/top-headlines?country=in&apiKey=716f0370335b45028b4ae489f1549fc8'

fetch(breakingNewsUrl)
  .then(function (response) {
    const data = response.json();
    return data;
  }).then(function (news) {
    getnews(news);
  }).catch(function (err) {
    console.log(err);
  });

let newshtml=''
function getnews (newsdata){
    //console.log(newsdata)
    console.log(newsdata.status);
   let newsArr=newsdata.articles;
   
  newsArr.forEach(element => {
    let newfeed = `<div class="card-body bg-secondary my-3" style="--bs-bg-opacity :.3">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.description}</p>
    <a href=${element.url} class="card-link">Read More</a>
    </div>`
    newshtml+=newfeed
   }); 
  container[0].innerHTML=newshtml;
}




