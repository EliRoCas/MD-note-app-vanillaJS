class NoteRepository {
  get() {
    return JSON.parse(localStorage.getItem("notes")) ?? [];
  }

  getByCategory(category) {
    return this.get().filter((n) => n.category === category);
  }

  getById(id) {
    return this.get().find((note) => note.id === id);
  }

  save(note) {
    let notes = this.get();
    note.id = this.getMaxId() + 1;
    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));
  }

  getMaxId() {
    let notes = this.get();
    return notes.length > 0 ? Math.max(...notes.map((n) => n.id ?? 0)) : 0;
  }

}

const noteRepository = new NoteRepository();

// This is the same functionality, but without using class.
// const noteRepository = {
//   save: (note) => {
//     // var notes = [note];

//     let notes = JSON.parse(localStorage.getItem("notes"));
//     notes.push(note);

//     localStorage.setItem("notes", JSON.stringify(notes));
//   },
//   get: () => {
//     return JSON.parse(localStorage.getItem("notes"));
//   },
//   getByCategory: (category) => {
//     let notes = JSON.parse(localStorage.getItem("notes"));
//     return notes.filter((n) => n.category === category);
//   },
// };
