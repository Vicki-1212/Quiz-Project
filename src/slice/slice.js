import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: ''
}

export const slice = createSlice({
    name: "username",
    initialState,
    reducers: {
        addUserName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const {addUserName} = slice.actions

export default slice.reducer