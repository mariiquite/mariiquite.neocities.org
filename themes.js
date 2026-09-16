document.addEventListener("DOMContentLoaded", function() {
    let savedTheme = localStorage.getItem('site-theme') || 'light';
    if (savedTheme === 'light'){
        lightsUp();
    } else {
        goDark();
    }
});


  
  // Apply the theme to the <html> or <body> tag immediately
  document.documentElement.setAttribute('data-theme', savedTheme);

function goDark(){
    let theme = selectTheme();
    theme += '-dark';
    document.documentElement.setAttribute("data-theme", theme)
    document.querySelector("#light-mode-button").src = "assets/icons/light-select.png";
    document.querySelector("#dark-mode-button").src = "assets/icons/dark.png";
    localStorage.setItem('site-theme', 'dark');
}

function lightsUp(){
    const theme = selectTheme();
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelector("#light-mode-button").src = "assets/icons/light.png";
    document.querySelector("#dark-mode-button").src = "assets/icons/dark-select.png";
    localStorage.setItem('site-theme', 'light');
}

function selectTheme(){
    const today = new Date();
    const year = today.getFullYear();

    const springEquinox = new Date(year, 3, 20);
    const summerSolstice = new Date(year, 6, 21);
    const autumnalEquinox = new Date(year, 9, 20);
    const winterSolstice = new Date(year, 12, 21);

    let theme = '';

    if (today >= winterSolstice){
        theme = 'winter';
    } else if (today >= autumnalEquinox){
        theme = 'fall';
    } else if (today >= summerSolstice){
        theme = 'summer'; 
    } else if (today >= springEquinox){
        theme = 'spring';
    } else { 
        theme = 'winter';
    }

    return theme;
}