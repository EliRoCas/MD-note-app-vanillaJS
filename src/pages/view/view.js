function loadNotes() {
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
