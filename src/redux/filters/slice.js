import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: '', // Убедитесь, что ключ соответствует использованию
};

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload; // Обновляем `filter`, а не `filters`
        },
    },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectFilter = (state) => state.filter.filter; // Селектор для получения `filter`
