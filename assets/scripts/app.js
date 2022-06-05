const addMovieModal = document.getElementById("add-modal");
//alternative aways to add event listener
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector("header button"); //get add movie button
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop"); // get backdrop
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName('input');

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
}; //toggle backdrop

const toggleMovieModal = () => {
  //toggle movie modal
  // function() {}
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  //cancel add movie
  toggleMovieModal();
};

const addMovieHandler = () => {
  //add movie
  const titleValue = userInputs[0].value; //get title value
  const imageUrlValue = userInputs[1].value; //get image url value
  const ratingValue = userInputs[2].value; //get rating value

  if (
    //check if all inputs are filled
    titleValue.trim() === "" || //trim white space
    imageUrlValue.trim() === "" || //trim white space
    ratingValue.trim() === "" || //trim white space
    +ratingValue < 1 || //check if rating is a number
    +ratingValue > 5 //check if rating is a number
  ) {
    alert("Please enter valid values (rating between 1 and 5)."); //alert user
    return; //return if not valid
  }
}; //add event listeners

const backdropClickHandler = () => {
  //backdrop click
  toggleMovieModal(); //toggle movie modal
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
