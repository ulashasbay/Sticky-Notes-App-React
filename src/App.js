import "./App.css";
import StickyNotes from "./components/StickyNotes/StickyNotes";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { searchFilter } from "./redux/notes/notesSlice";

function App() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(searchFilter(search));
  }, [dispatch, search]);

  return (
    <div className="App">
      <h3>Sticky Notes</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-btn"
          placeholder="Search Note..."
          value={search}
          onChange={handleChangeSearch}
        />
      </form>
      <div className="wrapper">
        <StickyNotes />
      </div>
    </div>
  );
}

export default App;
