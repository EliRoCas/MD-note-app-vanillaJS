function loadNotes() {
  let category = document.getElementById("filter").value;

  const notes =
    category === "all"
      ? noteRepository.get()
      : noteRepository.getByCategory(category);

  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4"; // para cada nota se crea una columna

    const card = document.createElement("div");
    card.className = "card"; // para cada columna se crea una tarjeta

    const cardColection = document.createElement("small");
    cardColection.className = "text-muted d-block";
    cardColection.textContent = note.colection;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = note.title;

    const cardText = document.createElement("div");
    cardText.className = "card-text";
    cardText.innerHTML = note.content;

    const editButton = document.createElement("button");
    editButton.className = "btn btn-light border border-warning";
    editButton.textContent = "Editar";
    const editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-file-pen";
    editButton.onclick = () => edit(note.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-light border border-danger";
    deleteBtn.textContent = "eliminar";
    deleteBtn.onclick = () => remove(note.id);

    cardBody.appendChild(cardColection); // contenedor principal
    cardBody.appendChild(cardTitle); 
    cardBody.appendChild(cardText);
    cardBody.appendChild(editButton);
    cardBody.appendChild(deleteBtn);

    card.appendChild(cardBody);
    col.appendChild(card);
    notesList.appendChild(col);
  });
}

function edit(item) {
  navigateTo("editNote", { id: item });
}

function remove(note) {
  noteRepository.delete(note);
  loadNotes();
}

loadNotes();

// Manejador de eventos para el botón de eliminar
function deleteAllNotes() {
  const confirmation = confirm("¿Desea eliminar todas las notas?");
  if (confirmation) {
    noteRepository.deleteAll(); // Eliminar las notas
    alert("Todas las notas han sido eliminadas.");
    loadNotes(); // Recargar las notas}
  }
}

