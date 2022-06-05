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
const entryText = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  //update UI
  if (movies.length === 0) {
    //if there are no movies
    entryText.style.display = "block"; //display text
  } else {
    //if there are movies
    entryText.style.display = "none"; //hide text
  }
};

const areYouSureDeleteMoviePromt = (movieId) => {
  //delete movie prompt
  const confirmDelete = confirm("Are you sure you want to delete this movie?");
  // add class

  if (confirmDelete) {
    //if user confirms
    deleteMovieHandler(movieId); //delete movie
  }
};

const deleteMovieHandler = (movieId) => {
  //delete movie
  console.log(movieId);
  const movieIndex = movies.findIndex((movie) => movie.id === movieId); //get movie index
  movies.splice(movieIndex, 1); //remove movie from movies array
  console.log(movies);
  
  const listRoot = document.getElementById("movie-list");
  listRoot.innerHTML = "";
  movies.forEach((movie) => {
    renderNewMovieElement(movie.id, movie.title, movie.image, movie.rating);
  });
  updateUI();
};

const renderNewMovieElement = (id, title, image, rating) => {
  //create new movie element
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${image}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
  newMovieElement.addEventListener("click", () => {
    areYouSureDeleteMoviePromt(id);
  });
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.appendChild(newMovieElement);
};

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

  const newMovie = {
    id: Math.random().toString(), //create random id
    title: titleValue, //get title value
    image: imageUrlValue, //get image url value
    rating: ratingValue, //get rating value
  };
  movies.push(newMovie); //add movie to movies array
  console.log(movies);
  toggleMovieModal(); //toggle movie modal
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI(); //update UI
}; //add event listeners

const backdropClickHandler = () => {
  //backdrop click
  toggleMovieModal(); //toggle movie modal
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
