import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { apiKey } from "../../api/api";

export const fetchMeals = createAsyncThunk(
    "search/fetchMeals",
    async ({ query, mealType, diet, offset = 0 }, { getState, rejectWithValue }) => {
        const number = getState().search.pageSize;

        const requestStr = "/searchComplex?apiKey=" + apiKey +
                            (query ? "&query=" + query : "") +
                            (mealType ? "&type=" + mealType : "") +
                            (diet ? "&diet=" + diet : "") +
                            "&number=" + number +
                            "&offset=" + offset;
                    
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