 document.addEventListener("DOMContentLoaded", function() {
    importCards();
 });

 cards = [
    {
        title: "bracelet lore",
        description: "bracelet image, each bead is clickable and leads to lore",
        status: "idea"
    },
    {
        title: "site kanban board",
        description: "this page!",
        status: "in progress"
    },
    {
        title: "handwriting font",
        description: "the font on my site is my own handwriting!",
        status: "complete"
    },
    {
        title: "music player",
        description: "",
        status: "in progress"
    },
    {
        title: "git",
        description: "",
        status: "idea"
    },
    {
        title: "11ty",
        description: "",
        status: "idea"
    },
    {
        title: "shrine: wolves",
        description: "",
        status: "in progress"
    },
    {
        title: "shrine: therianthropy",
        description: "",
        status: "in progress"
    },
    {
        title: "shrine: sonas/ocs",
        description: "",
        status: "ideas"
    },
    {
        title: "neko",
        description: "",
        status: "complete"
    },
    {
        title: "shrine: anthocyanins",
        description: "",
        status: "idea"
    },
    {
        title: "themes",
        description: "seasonal themes with light and dark mode!",
        status: "complete"
    },
    {
        title: "works: fiber arts",
        description: "I want to add a collection of my fiber art work!",
        status: "idea"
    },
    {
        title: "gallery: update",
        description: "I just need to add more pictures to this and maybe sort it",
        status: "idea"
    },
    {
        title: "favorites: udpate",
        description: "I want to update and add more lists!",
        status: "idea"
    },
    {
        title: "shrine: nature",
        description: "",
        status: "idea"
    },
    {
        title: "shrine: music",
        description: "",
        status: "idea"
    },
    {
        title: "right bar",
        description: "inspiration, , friends, and webrings!",
        status: "complete"
    },
    {
        title: "left bar",
        description: "profile picture, music player, and site button!",
        status: "complete"
    },
    {
        title: "external links",
        description: "so my music, writing, other contact info, etc",
        status: "in progress"
    },
    {
        title: "bear blog",
        description: "",
        status: "in progress"
    },
    {
        title: "widgets",
        description: "not sure what, but I want to see about adding widgets to my site :3",
        status: "idea"
    },
    {
        title: "accessibility",
        description: "My site should be accessible eventually! Important",
        status: "idea"
    },
    {
        title: "change log",
        description: "just a list of updates, more concise than this page",
        status: "in progress"
    },
    {
        title: "site button",
        description: "so my site can be accessible from the great beyond!",
        status: "complete"
    },
    {
        title: "file tabs",
        description: "wanted my site navs to be like flipping through a file cabinet...",
        status: "complete"
    },
    {
        title: "hit counter",
        description: "so I can see when u take a peek >w<",
        status: "in progress"
    },
    {
        title: "catbox folders",
        description: "I want to see about organizing my catbox files... new to catbox lol",
        status: "idea"
    },
    {
        title: "newsletters",
        description: "I want to turn them into a blog situation!",
        status: "in progress"
    }
 ];

 function importCards(){
    cards.forEach((card) => {
        if (card.status == "idea"){
            document.getElementById("todo").insertAdjacentHTML("beforeend", buildCard(card));
        } else if (card.status == "in progress"){
            document.getElementById("inprogress").insertAdjacentHTML("beforeend", buildCard(card));
        } else if (card.status == "complete"){
            document.getElementById("complete").insertAdjacentHTML("beforeend", buildCard(card));
        } else {
            console.log("card status invalid");
        }
    });
}

 function buildCard(card){
    html = `
        <div class="kanban-card">
            <h4 style="text-decoration:underline;">${card.title}</h4>
            <p>${card.description}</p>
        </div>
    `;
    return html;
 };