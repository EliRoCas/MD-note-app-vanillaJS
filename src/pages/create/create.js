function save(event) {
  event.preventDefault();

  const noteForm = document.getElementById("noteForm");
  const formData = new FormData(noteForm);
  const formValues = Object.fromEntries(formData.entries());

  if (formValues.id) {
    noteRepository.update(formValues);
  } else {
    noteRepository.save(formValues);
  }

  navigateTo("viewNotes");
}

function fillForm(data) {
  const form = document.getElementById("noteForm");
  for (const key in data) {
    if (data.hasOwnProperty(key) && form.elements[key]) {
      form.elements[key].value = data[key];
    }
  }
}

(function () {
  const dateInput = document.getElementById("date");
  const currentDate = new Date();
  const today = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();
  dateInput.value = `${today} ${time}`;

  if (params && params.id) {
    let note = noteRepository.getById(params.id);
    fillForm(note);
  }
})();
