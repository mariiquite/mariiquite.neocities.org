/* This is for when I was loading file html dynamicall, all onto one page. 
Didn't like it. going to load layout dynamically again and keep different pages. */

document.addEventListener("DOMContentLoaded", function () {
   loadContent(document.getElementById("home.html"), "home.html")
});

const loadContent = (self, page) => {
    fetch(`${page}`)
        .then(res =>{
            if(res.ok){
            return res.text();
        }
    })
    .then (html => {
        document.getElementById("file").innerHTML = html;
    });

    [...document.querySelectorAll("button")].forEach((button) => {
        if(button == self){
            button.classList.add("active");
        } else if (button.classList.contains("active")){
            button.classList.remove("active");
        }
    })
};