import React, { useEffect } from "react";
import "./StickyNotes.css";
import Note from "../Note/Note";
import { useSelector, useDispatch } from "react-redux";
import { getNotesAsync } from "../../redux/notes/notesSlice";
import AddNoteForm from "../AddNoteForm/AddNoteForm";

function StickyNotes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.items);
  const filter = useSelector((state) => state.notes.filter);

  const filteredNotes = notes.filter((item) => {
    return item.title.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);

  return (
    <div className="sticky-notes-wrapper">
      <AddNoteForm />
      {filteredNotes.map((items) => {
        return <Note key={items.id} items={items} />;
      })}
    </div>
  );
}

export default StickyNotes;
