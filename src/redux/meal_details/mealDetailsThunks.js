import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { apiKey } from "../../api/api";

export const fetchMealDetails = createAsyncThunk(
    "mealDetails/fetchMealDetails",
    async (mealId, { rejectWithValue }) => {
        const requestStr = "/" + mealId + 
                           "/information?apiKey=" + apiKey + 
                           "&includeNutrition=true";

        try {
            const response = await api.get(requestStr);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);