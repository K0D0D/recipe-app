import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { apiKey } from "../../api/api";

export const fetchMeals = createAsyncThunk(
    "search/fetchMeals",
    async (query, { rejectWithValue }) => {
        const requestStr = "/searchComplex?apiKey=" + apiKey +
                            (query ? "&query=" + query : "") +
                            "&number=25";
                    
        try {
            const response = await api.get(requestStr);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const fetchRandomMeals = createAsyncThunk(
    "search/fetchRandomMeals",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/random?apiKey=${apiKey}&number=25`);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);