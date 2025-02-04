import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";



export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global/'
})

export const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
       const { data } = await goitApi.post('users/signup', credentials);
       setAuthHeader(data.token);
       return data; 
    } catch (error) {
      console.log("Ошибка регистрации:", error);
      if(error.response && error.response.data && error.response.data.code === 11000) {
        toast.error('User already exists!');
        return thunkApi.rejectWithValue('User already exists!');
      }
      return thunkApi.rejectWithValue(error.message);
        
    }
} )

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
  try {
     const { data } = await goitApi.post('users/login', credentials);
     setAuthHeader(data.token);
     return data; 
  } catch (error) {
    toast.error('Login failed. Check your email or password.');
    console.log("Ошибка регистрации:", error.response.data);
    return thunkApi.rejectWithValue(error.message)  
  }
} )

export const logoutThunk = createAsyncThunk('auth/logout', async (__, thunkApi) => {
  try {
    const {data} = await goitApi.post('users/logout');
    return data;
  } catch (error) {
    console.log('Ошибка при загрузке контактов:', error.response?.data);
    return thunkApi.rejectWithValue(error.message)
  }
})

export const refreshThunk = createAsyncThunk('contacts/refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (!savedToken) {
    return thunkApi.rejectWithValue('No token found');
  }

  setAuthHeader(savedToken);
  try {
    const { data } = await goitApi.get('users/current');
    return data;
  } catch (error) {
    console.error('Ошибка при загрузке контактов:', error.response?.data || error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});
