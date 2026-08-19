/* =========================
   NAVIGATION
========================= */

const nav =
  document.querySelector(".top-nav");

const slider =
  document.querySelector(".pink-slider");

const links =
  document.querySelectorAll(".nav-link");


/*
  Move the pink gradient
  underneath a specific tab.
*/

function moveSlider(link) {

  const navRect =
    nav.getBoundingClientRect();

  const linkRect =
    link.getBoundingClientRect();


  /*
    Move slightly to the LEFT
    so the gradient extends
    beyond the tab.
  */

  const left =
    linkRect.left -
    navRect.left -
    15;


  slider.style.left =
    `${left}px`;


  slider.style.width =
    `${linkRect.width + 30}px`;
}


/* =========================
   START ON CORTIS
========================= */

/*
  CORTIS is the second link,
  so its index is 1.
*/

const cortisLink =
  links[1];

moveSlider(cortisLink);


/* =========================
   HOVER EFFECT
========================= */

links.forEach((link) => {

  link.addEventListener(
    "mouseenter",
    () => {

      moveSlider(link);

    }
  );

});


/*
  When the mouse leaves
  the navigation, return
  the gradient to CORTIS.
*/

nav.addEventListener(
  "mouseleave",
  () => {

    moveSlider(cortisLink);

  }
);


/* =========================
   WINDOW RESIZE
========================= */

window.addEventListener(
  "resize",
  () => {

    /*
      Keep CORTIS as the
      starting/active position.
    */

    const hovered =
      document.querySelector(
        ".nav-link:hover"
      );


    if (hovered) {

      moveSlider(hovered);

    } else {

      moveSlider(cortisLink);

    }

  }
);


// =========================
// SEARCH BAR
// =========================

const searchInput =
  document.getElementById("searchInput");

const searchButton =
  document.getElementById("searchButton");


// These are the answers your search bar knows
const answers = {

  "are kim taehyung and ryu soomin dating?":
    "That would be highly inappropiate. They are only a situationship.",

  "who is ryu soomin's bestfriend":
    "hard to say, he has many but the ones closest to him are Wonhee and Martin.",

  "jellyous":
    "ryu soomin is a very jellyous person with his teacher, Kim Taehyung.",

  "kim taehyung":
    "♡ Kim Taehyung is 30 years old and teaches history in Perfect 10 Academy, while doing private tutoring lessons of english.",

  "perfect 10 academy":
    "Perfect 10 Academy is a high school funded in 1944 in Argentina, one of the bests high schools in the country.",

  "bts":
    "BTS was a 6-member South Korean boy band that disbanded in 2018. It was highly popular for it's 'secret 7th member'.",

   "crotis sexuality":
    "All of CROTIS, except Soomin, are bisexual.",

   "wonhee sexuality":
    "Wonhee is bisexual.",

   "yunah sexuality":
    "Yunah is a lesbian.",

};


// Search function
function search() {

  const question =
    searchInput.value
      .trim()
      .toLowerCase();


  if (question === "") {

    searchInput.value = "";

    searchInput.placeholder = "search...";

    return;
  }


  // Exact answer
  if (answers[question]) {

    searchInput.value =
      answers[question];

    return;
  }


  // Partial matches
  for (const key in answers) {

    if (question.includes(key)) {

      searchInput.value =
        answers[key];

      return;
    }

  }


  // Nothing found
  searchInput.value =
    "Nothing found.";

}


// Search button
searchButton.addEventListener(
  "click",
  search
);


// Press Enter
searchInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {

      search();

    }

  }
);
