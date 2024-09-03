document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notes-list');

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(note => {
            const noteItem = document.createElement('li');
            noteItem.textContent = note.title + ": " + note.content;
            notesList.appendChild(noteItem);
        });
    }

    loadNotes();
});
