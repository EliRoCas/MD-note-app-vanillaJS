/* function loadNotes() {
  const notes = noteRepository.get();
  notesList.innerHTML = "";

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${note.title}</strong> - ${note.body} 
        <button onclick="edit(${note.id})">Editar</button>
        <button onclick="remove(${note.id})">Borrar</button>
      `;
    notesList.appendChild(li);
  });
}
function remove(note) {
  noteRepository.delete(note);
  loadNotes();
}

function edit(item) {
  navigateTo("editNote", { id: item });
}

loadNotes();
*/
/*
    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(note => {
            const noteItem = document.createElement('li');
            noteItem.textContent = note.title + ": " + note.content;
            notesList.appendChild(noteItem);
        });
    }

    loadNotes(); */

function loadNotes() {
  const notes = noteRepository.get();
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4"; // para cada nota se crea una columna

    const card = document.createElement("div");
    card.className = "card"; // para cada columna se crea una tarjeta

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = note.title;

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = note.body;


    cardBody.appendChild(cardTitle);// contenedor principal
    cardBody.appendChild(cardText);

    card.appendChild(cardBody);
    col.appendChild(card);
    notesList.appendChild(col);
  });
}


loadNotes();

