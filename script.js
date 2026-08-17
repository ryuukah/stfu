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


/* =========================
   SEARCH BAR
========================= */

const searchInput =
  document.getElementById(
    "searchInput"
  );

const searchButton =
  document.getElementById(
    "searchButton"
  );


/*
  SEARCH ANSWERS

  Add or change answers here.
*/

const answers = {

  "personal":
    "This is the personal page ♡",

  "cortis":
    "CORTIS ♡",

  "reality":
    "This is the reality page ♡",

  "hello":
    "hello ♡",

  "hi":
    "hi! ♡",

  "about":
    "Welcome to my little corner of the internet ♡",

  "who are you":
    "This is my personal website ♡"

};


/* =========================
   SEARCH FUNCTION
========================= */

function search() {

  const question =
    searchInput.value
      .trim()
      .toLowerCase();


  /*
    Do nothing if the
    search is empty.
  */

  if (question === "") {

    searchInput.value = "";

    searchInput.placeholder =
      "search...";

    return;
  }


  /*
    Check for an exact match.
  */

  if (answers[question]) {

    searchInput.value =
      answers[question];

    return;
  }


  /*
    Check for partial matches.
  */

  for (
    const key in answers
  ) {

    if (
      question.includes(key)
    ) {

      searchInput.value =
        answers[key];

      return;
    }

  }


  /*
    Nothing was found.
  */

  searchInput.value =
    "I don't know that yet ♡";

}


/* =========================
   SEARCH BUTTON
========================= */

searchButton.addEventListener(
  "click",
  search
);


/* =========================
   ENTER KEY
========================= */

searchInput.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Enter"
    ) {

      search();

    }

  }
);
