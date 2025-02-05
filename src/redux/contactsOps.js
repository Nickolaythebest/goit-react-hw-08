
import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi, setAuthHeader } from "./auth/operations";




/*export const fetchData = () => async dispatch => {
    try {
        dispatch(setError(false));
        dispatch(setLoading(true));
        const {data} = await axios.get('/contacts');
        dispatch(fetchDataSuccess(data));
        dispatch(setLoading(false));
    } catch (error) {
        console.log(error)
        dispatch(setError(true))
    }
    
}*/
export const fetchContacts = createAsyncThunk('contacts/fetchAllContacts', async (_, thunkAPI) => {
    try {
        const {data} = await goitApi.get('contacts');
        
        return data;
    } catch (error) {
        console.log('Ошибка при загрузке контактов:', error.response.data);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const {data} = await goitApi.delete(`/contacts/${id}`);
        return data;
    } catch (error) {
        console.log('Ошибка при загрузке контактов:', error.response?.data);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const {data} = await goitApi.post('contacts', body);
        return data;
    } catch (error) {
        console.log('Ошибка при загрузке контактов:', error.response?.data);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const editContactThunk = createAsyncThunk(
    'contacts/editContact',
    async ({ id, name, number, isFavorite }, thunkAPI) => {
      try {
        const updateData = { name, number }; // Только разрешённые поля
        if (typeof isFavorite !== 'undefined') updateData.isFavorite = isFavorite;
  
        const { data } = await goitApi.patch(`/contacts/${id}`, updateData);
        return data;
      } catch (error) {
        console.log('Ошибка обновления контакта:', error.response?.data);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  

export const toggleContactThunk = createAsyncThunk('contacts/toggleContact', async ({id, isCompleted}, thunkAPI) => {
    try {
        const {data} = await goitApi.patch(`/contacts/${id}`, {isCompleted});
        return data;
    } catch (error) {
        console.log('Ошибка при загрузке контактов:', error.response?.data);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const toggleFavoriteThunk = createAsyncThunk(
    'contacts/toggleFavorite',
    async ({ id, isFavorite }, thunkAPI) => {
      try {
        const { data } = await goitApi.patch(`/contacts/${id}`, { isFavorite });
        return data;
      } catch (error) {
        console.log('Ошибка обновления избранного:', error.response?.data);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );