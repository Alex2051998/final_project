import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {orderService} from "../../services";

let initialState = {
    orders: [],
    errors: null,
    prev: null,
    next: null,
    flag: true,
}

const getAll = createAsyncThunk(
    'orderSlice/getAll',
    async ({page, order,name,surname, email, phone,age, course, course_format,course_type,status,group,created_at, start_date, end_date}, {rejectWithValue}) => {
        try {
            const {data} = await orderService.getAll(page, order, name, surname, email, phone, age, course, course_format,course_type,status,group,created_at, start_date, end_date);
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        examination: (state, action) => {
            state.flag = action.payload
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.orders = action.payload.results;
                state.errors = null;
                state.next = action.payload.next;
                state.prev = action.payload.previous;
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null;
                }

            })
});

const {reducer: orderReducer, actions:{filterForParams, examination, }} = orderSlice;

const orderActions = {
    getAll,
    filterForParams,
    examination,

}

export {
    orderReducer,
    orderActions
}