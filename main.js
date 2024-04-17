import articles from './articles.json';
const section = document.querySelector('#articles');

fetch('./articles.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(article => {
      let articleElement = document.createElement('article');
      section.appendChild(articleElement);
      let img = document.createElement('img');
      img.setAttribute('src', article.image);
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      articleElement.appendChild(img);
      articleElement.appendChild(h3);
      articleElement.appendChild(p);

      h3.textContent = article.name;
      p.textContent = article.price;
    })
  });