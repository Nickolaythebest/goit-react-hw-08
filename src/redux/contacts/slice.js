import { createSlice } from  '@reduxjs/toolkit'
import { addContact, deleteContact, editContactThunk, fetchContacts, toggleContactThunk, toggleFavoriteThunk, logoutThunk } from '../contacts/operations';


const initialState = {
		contacts: [],
        isLoading: false,
        isError: false,
};
const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.contacts = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.contacts = state.contacts.filter(item => item.id !== action.payload.id);
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.contacts.push(action.payload);
        })
        .addCase(editContactThunk.fulfilled, (state, action) => {
            const item = state.contacts.find(item => item.id === action.payload.id);
            if(item){
                item.name = action.payload.name;
                item.number = action.payload.number;
            }
            
        })
        .addCase(toggleContactThunk.fulfilled, (state, action) => {
            const item = state.contacts.find(item => item.id === action.payload.id);
            if(item){
                item.isCompleted = action.payload.isCompleted;
            }
        })
        .addCase(toggleFavoriteThunk.fulfilled, (state, action) => {
            const item = state.contacts.find(item => item.id === action.payload.id);
            if(item){
                item.isFavorite = action.payload.isFavorite;
            }
            
        })
        .addCase(logoutThunk.fulfilled, () => {
            return initialState;
            
        })
    },
})

export const contactsReducer = slice.reducer;
