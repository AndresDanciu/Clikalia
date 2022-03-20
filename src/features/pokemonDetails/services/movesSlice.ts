import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'utilities/store';
import { Move } from '../models';

export const moveAdapter = createEntityAdapter<Move>({
  selectId: ({ move }) => move.name,
});

const moveSlice = createSlice({
  name: 'moves',
  initialState: moveAdapter.getInitialState(),
  reducers: {
    setAllMoves(state, action) {
      moveAdapter.setAll(state, action);
    },
    removeMoveByName(state, { payload: name }) {
      moveAdapter.removeOne(state, name);
    },
  },
});

export const { setAllMoves, removeMoveByName } = moveSlice.actions;
export const { selectAll } = moveAdapter.getSelectors((state: RootState) => state.moves);

export default moveSlice.reducer;
