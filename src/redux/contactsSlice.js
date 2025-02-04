import { createSelector, createSlice } from  '@reduxjs/toolkit'
import { addContact, deleteContact, editContactThunk, fetchContacts, toggleContactThunk, toggleFavoriteThunk } from './contactsOps';
import { selectFilter } from './filtersSlice';

const initialState = {
		contacts: [],
        isLoading: false,
        isError: false,
};
const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{
        /*deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },*/
        /*addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        editContact: (state, action) => {
            const contact = state.contacts.find(item => item.id === action.payload.id);
            if(contact) {
                contact.name = action.payload.name;
                contact.number = action.payload.number || contact.number;
            }
        
            
        },
        toggleContact: (state, action) => {
            const item = state.contacts.find(item => item.id === action.payload);
            item.isCompleted = !item.isCompleted;
        },
        toggleFavorite: (state, action) => {
            const item = state.contacts.find(item => item.id === action.payload);
            item.isFavorite = !item.isFavorite;
        },*/
        /*setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.isLoading = action.payload;
        },*/
        /*fetchDataSuccess: (state, action) => {
            state.contacts = action.payload;
        },*/
       
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
    },
})

export const contactsReducer = slice.reducer;
/*export const {setLoading, setError} = slice.actions;*/
export const selectContact = (state) => state.contacts.contacts;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
export const selectFilteredContacts = createSelector([selectContact, selectFilter], (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
);

})