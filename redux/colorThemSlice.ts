import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	them: 'light',
};

export const colorThemSlice = createSlice({
	name: 'colorThem',
	initialState,
	reducers: {
		setThem: (state, action) => {
			state.them = action.payload;
		},
	},
});

export const { setThem } = colorThemSlice.actions;
export default colorThemSlice.reducer;
