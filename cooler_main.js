
//   ====================================================================
//   ====================================================================
//   Cool one
//   ====================================================================
//   ====================================================================



let quote = document.querySelector('.quote');
let text = document.querySelector('.text_quote');
let author = document.querySelector('.author_quote');
let button = document.querySelector('button');

function get_quote_from_the_internet() {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let index = Math.round(Math.random() * 1643);
        text.innerHTML = data[index].text;
        author.innerHTML = "- " + data[index].author;
      });
  
    setTimeout(() => {
      button.classList.add("active");
    }, 1000);
  }
  
  function next_quote(e) {
    if (!e.target.matches("button.active")) return;
    get_quote_from_the_internet();
    button.classList.remove("active");
  }
  
  window.addEventListener("load", get_quote_from_the_internet);
  quote.addEventListener("click", next_quote);