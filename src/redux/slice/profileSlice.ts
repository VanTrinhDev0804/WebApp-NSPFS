import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IProfile } from "../../types"

export interface ProfileState {
    data: IProfile[]
}

const initialState: ProfileState = {
    data: []
}

const profileState = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addProFile: (state, action) => {
            state.data = action.payload
        },
        updateProfileSlice: (state, action) => {
            let index = state.data?.findIndex((it) => {
                return it.id === action.payload.id
            });
            state.data[index] = action.payload

        }
    }
})

export const { addProFile, updateProfileSlice } = profileState.actions
export default profileState.reducer