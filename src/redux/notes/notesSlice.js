import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_MOCKAPI_KEY;
export const getNotesAsync = createAsyncThunk(
  "notes/getNotesAsync",
  async () => {
    const res = await axios(`${url}/notes`);
    return res.data;
  }
);

export const addNotesAsync = createAsyncThunk(
  "notes/addNotesAsync",
  async (data) => {
    const res = await axios.post(`${url}/notes`, data);
    return res.data;
  }
);

export const removeNotesAsync = createAsyncThunk(
  "notes/removeNotesAsync",
  async (itemId) => {
    await axios.delete(`${url}/notes/${itemId}`, { params: { id: itemId } });
    return itemId;
  }
);

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: "",
  },
  reducers: {
    searchFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    // get Note
    [getNotesAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getNotesAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getNotesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    // add note
    [addNotesAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    // remove Note
    [removeNotesAsync.fulfilled]: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { searchFilter } = notesSlice.actions;
export default notesSlice.reducer;
