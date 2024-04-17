import articles from './articles.json';
const section = document.querySelector('#articles');

let ul = document.createElement('ul');
section.appendChild(ul);

fetch('./articles.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(article => {
      let li = document.createElement('li');
      ul.appendChild(li);

      let img = document.createElement('img');
      img.setAttribute('src', article.image);
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      li.appendChild(img);
      li.appendChild(h3);
      li.appendChild(p);

      h3.textContent = article.name;
      p.textContent = article.price;
    });
  });