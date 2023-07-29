import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetch', async () => {
  const rockets = await axios.get('https://api.spacexdata.com/v4/rockets');
  const selectData = rockets.data.map((item) => ({
    id: item.id,
    rocket_name: item.name,
    description: item.description,
    flickr_images: item.flickr_images[0],
    reserved: false,
  }));
  return selectData;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    loading: false,
    allRockets: [],
    error: null,
  },
  reducers: {
    setReserve: (state, action) => {
      const { id, reserved } = action.payload;
      const rocket = state.allRockets.find((rocket) => rocket.id === id);
      if (rocket) {
        rocket.reserved = reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.allRockets = action.payload;
      })

      .addCase(fetchRockets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
