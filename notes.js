const chalk = require("chalk");
const utils = require("./utils.js");

const addNote = (title, body) => {
  const notes = utils.get();
  const duplicateNote = notes.find((note) => note.title === title);
  if (title && body && !duplicateNote) {
    notes.push({ title, body });
    utils.save(notes);
    console.log(chalk.green.inverse("Success!, Notes has been added"));
  } else {
    console.log(
      chalk.red.inverse(
        "Error!, Title and body is empty or this note has already been added"
      )
    );
  }
};

const removeNote = (title) => {
  const notes = utils.get();
  const filteredNote = notes.filter((note) => note.title !== title);
  if (filteredNote.length < notes.length) {
    utils.save(filteredNote);
    console.log(chalk.green.inverse("Success!, Notes has been removed"));
  } else {
    console.log(chalk.red.inverse("Error!, Note cannot be found"));
  }
};

const notesList = () => {
  console.log(chalk.inverse("Your Notes \n"));
  const notes = utils.get();
  notes.map((note, index) => {
    console.log(`${index + 1}. ${note.title}`);
  });
};

const readNote = (title) => {
  const notes = utils.get();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse("Your Note: \n"));
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log(
      chalk.red.inverse("Error!, This note is not added in the list")
    );
  }
};

module.exports = {
  addNote,
  removeNote,
  notesList,
  readNote,
};
