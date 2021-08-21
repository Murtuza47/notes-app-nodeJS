const fs = require("fs");

const get = () => {
  try {
    const bufferNotes = fs.readFileSync("notes.json");
    const notes = bufferNotes.toString();
    return JSON.parse(notes);
  } catch (error) {
    return [];
  }
};

const save = (note) => {
  const noteJson = JSON.stringify(note);
  fs.writeFileSync("notes.json", noteJson);
};

module.exports = {
  get,
  save,
};
