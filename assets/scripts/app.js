
const addMovie = document.getElementById('add-modal'); // Get the add modal
const addMovieBtn = document.getElementById('addBtn'); // Get the add button
const backdrop = document.getElementById('backdrop'); // Get the backdrop
const cancelAddMovieBtn = document.getElementById('cancelAddBtn'); // Get the cancel button


addMovieBtn.addEventListener('click', () => { // When the add button is clicked
    addMovie.classList.toggle('visible'); // Toggle the visibility of the modal
    backdrop.classList.toggle('visible'); // Toggle the visibility of the backdrop
})

cancelAddMovieBtn.addEventListener('click', () => { // When the cancel button is clicked
    addMovie.classList.remove('visible'); // Remove the visibility of the modal
    backdrop.classList.remove('visible'); // Remove the visibility of the backdrop
})



// alternative way to add event listener

// backdrop.addEventListener('click', () => { // When the backdrop is clicked
//     addMovie.classList.remove('visible'); // Remove the visibility of the modal
//     backdrop.classList.remove('visible'); // Remove the visibility of the backdrop
// })