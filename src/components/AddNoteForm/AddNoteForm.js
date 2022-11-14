import React, { useState } from "react";
import "./AddNoteForm.css";
import { useDispatch } from "react-redux";
import { addNotesAsync } from "../../redux/notes/notesSlice";

function AddNoteForm() {
  const dispatch = useDispatch();

  const date = new Date()
    .toLocaleString("en-GB", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    })
    .slice(0, 10);

  const [newNote, setNewNote] = useState({
    title: "",
    note: "",
    style: "note-yellow",
    date: date,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newNote.title !== "" && newNote.note !== "") {
      dispatch(addNotesAsync(newNote));
      setNewNote({ ...newNote, title: "", note: "", date: date });
    }
  };

  return (
    <div className="addNoteForm-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="title-input"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter Your Note Here..."
          className="note-text"
          value={newNote.note}
          onChange={(e) => setNewNote({ ...newNote, note: e.target.value })}
        ></textarea>
        <div className="color-btns">
          <button
            type="button"
            className={`yellow-btn ${
              newNote.style === "note-yellow" ? "selected" : ""
            }`}
            onClick={() => setNewNote({ ...newNote, style: "note-yellow" })}
          ></button>
          <button
            type="button"
            className={`blue-btn ${
              newNote.style === "note-blue" ? "selected" : ""
            }`}
            onClick={() => setNewNote({ ...newNote, style: "note-blue" })}
          ></button>
          <button
            type="button"
            className={`green-btn ${
              newNote.style === "note-green" ? "selected" : ""
            }`}
            onClick={() => setNewNote({ ...newNote, style: "note-green" })}
          ></button>
          <button
            type="button"
            className={`pink-btn ${
              newNote.style === "note-pink" ? "selected" : ""
            }`}
            onClick={() => setNewNote({ ...newNote, style: "note-pink" })}
          ></button>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNoteForm;
