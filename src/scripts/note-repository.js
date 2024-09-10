class NoteRepository {
  get() {
    return JSON.parse(localStorage.getItem("notes")) ?? [];
  }

  getByCategory(category) {
    return this.get().filter((n) => n.colection.toLowerCase() === category.toLowerCase());
  }

  getById(id) {
    return this.get().find((note) => note.id === id);
  }

  save(note) {
    let notes = [...this.get(), { ...note, id: this.getMaxId() + 1 }];
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  getMaxId() {
    let notes = this.get();
    return notes.length > 0 ? Math.max(...notes.map((n) => n.id ?? 0)) : 0;
  }

  update(note) {
    let notes = this.get().map((n) =>
      n.id.toString() === note.id.toString() ? note : n
    );
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  delete(id) {
    let notes = this.get().filter(
      (note) => note.id.toString() !== id.toString()
    );
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  deleteAll(){
    localStorage.removeItem("notes");
  }
}

const noteRepository = new NoteRepository();
