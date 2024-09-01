const noteForm = document.getElementById("noteForm");

function save(event) {
  event.preventDefault();

  const formData = new FormData(noteForm);
  const formValues = Object.fromEntries(formData.entries());

  noteRepository.save(formValues);
}


// This is a first aproach, with the event listener direct on js  
// const noteForm = document.getElementById("noteForm");

// noteForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const formData = new FormData(noteForm);
//   const formValues = Object.fromEntries(formData.entries());

//   alert(JSON.stringify(formValues));
//   //   localStorage.setItem("note", JSON.stringify(note));
//   //   debugger;
// });

//   alert(JSON.stringify(formValues));
//   localStorage.setItem("note", JSON.stringify(formValues));
//   debugger;

//   noteRepository.save(formValues);
// }
