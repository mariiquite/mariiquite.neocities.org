document.addEventListener("DOMContentLoaded", function () {
    //document.body.insertAdjacentHTML("afterbegin", adlHTML);
    loadContent(document.querySelector("header"), "header.html");
    loadContent(document.querySelector("footer"), "footer.html");
    loadContent(document.querySelector("#leftbar"), "left-bar.html");
    loadContent(document.querySelector("#rightbar"), "right-bar.html");
});

window.onload = function () {
    initActiveLinks();
}

const loadContent = (self, page) => {
    fetch(`${page}`)
        .then(res =>{
            if(res.ok){
            return res.text();
        }
    })
    .then (html => {
        self.innerHTML = html;
    });

    [...document.querySelectorAll("button")].forEach((button) => {
        if(button == self){
            console.log("button is self");
            button.classList.add("active");
        } else if (button.classList.contains("active")){
            button.classList.remove("active");
        }
    })
};

function initActiveLinks() {
  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    let elHref = el.getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    //console.log("elHref: ", elHref);
    //console.log("pathname:", pathname);

    if (pathname === "/") { // homepage
      if (elHref === "/" || elHref == "/index.html") {
        el.classList.add("active");
        //console.log("active.");
      }
    } else {// other pages
      //console.log("window:", window.location.href);
      if (window.location.href.includes(elHref)) {
        el.classList.add("active");
        //console.log("active.");
      }
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

const nesting = getNestingString();

const adlHTML = `
    
`

const dismiss = self => {
  let em = self.closest(".overlay");
  
  if (em) {
    em.classList.add("hidden");
  }
}