import { createSlice  } from "@reduxjs/toolkit"
import { IAdmin } from "../../types"


export interface AuthState {

    userAdmin:  IAdmin[], 
    loading : boolean

}

const initialState : AuthState = {
    userAdmin: [],
    loading: false
   
}   

const authSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
  
        addAdmin: ( state , action) => {
            state.userAdmin = action.payload
        },
        updateAdmin :(state, action) => {
            let index = state.userAdmin?.findIndex((ad) => {
                return ad.name === action.payload.name
            });
            state.userAdmin[index].password = action.payload.password
        },
        loadAdminSuccess: (state , action) =>{
            state.loading = action.payload
        }
    }
})

export const { addAdmin , updateAdmin, loadAdminSuccess} = authSlice.actions
export default  authSlice.reducer

