class NoteRepository {
  get() {
    return JSON.parse(localStorage.getItem("notes")) ?? [];
  }

  getByCategory(category) {
    return this.get().filter((n) => n.category === category);
  }

  save(note) {
    let notes = this.get();
    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));
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