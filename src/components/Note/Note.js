import React from "react";
import "./Note.css";
import { useDispatch } from "react-redux";
import { removeNotesAsync } from "../../redux/notes/notesSlice";

function Note({ items }) {
  const dispatch = useDispatch();

  const removeNote = async (id) => {
    dispatch(removeNotesAsync(id));
  };
  return (
    <div className={`note-wrap ${items.style}`}>
      <h4>{items.title}</h4>
      <button className="delete-btn" onClick={() => removeNote(items.id)}>
        x
      </button>
      <p>{items.note}</p>
      <p className="note-date">{items.date}</p>
    </div>
  );
}

export default Note;
