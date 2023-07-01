let btn = document.querySelector(".btn");
let txt = document.querySelector("#txt");
let email = document.querySelector("#email");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e);
function clickme() {
  txt.innerHTML = email.value;
  btn.innerHTML = "Saved";
}
/* innerHTML, innerText, textContent */
// });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post) => {
      renderData(post);
    });
  })
  .catch((err) => console.log(err));

function renderData(post) {
  let articleSection = document.querySelector(".articles");
  let article = document.createElement("article");
  article.classList = "article";
  let title = document.createElement("h1");
  let line = document.createElement("hr");
  let body = document.createElement("p");

  title.textContent = post.title;
  body.textContent = post.body;

  article.appendChild(title);
  article.appendChild(line);
  article.appendChild(body);

  articleSection.appendChild(article);
}

let str = "my name"

str.indexOf("my")