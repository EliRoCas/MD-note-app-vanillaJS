const noteForm = document.getElementById("noteForm");
const dateInput = document.getElementById("date");

function save(event) {
  event.preventDefault();

  const formData = new FormData(noteForm);
  const formValues = Object.fromEntries(formData.entries());

  if (!formValues.id) {
    formValues.id = noteRepository.getMaxId() + 1;
  }

  noteRepository.save(formValues);
}

const currentDate = new Date();
const today = currentDate.toLocaleDateString();
const time = currentDate.toLocaleTimeString();
dateInput.value = `${today} ${time}`;

// This is the first approach for "save" function, where the event listener is added directly in JavaScript.
// In this approach, we attach the event listener to the form element and handle the form submission within the callback function.
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
