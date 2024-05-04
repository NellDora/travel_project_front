import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { setCookie } from "../util/cookieUtil";

const initState={
    id:''
}

export const loginPostAsync= createAsyncThunk('loginPostasync', (param) =>loginPost(param));

const loginSlice = createSlice({
    name:'loginSlice',
    initialState: initState,
    reducers: {
        login:(state, action) => {
            //state : 기존 상태
            //action : 처리하고 싶은 파라미터
            console.log("login......", action)
            console.log(action.payload)
            console.log("------------------")
            return{ id:action.payload.id}
        },
        logout: () =>{
            console.log("logout......")

            return {...initState}
        }
    },
    extraReducers:(builder) => {
        builder.addCase(loginPostAsync.fulfilled,(state,action) =>{
            console.log("fullfilled")

            const payload = action.payload
            console.log("extraReducer return 값 : "+ payload)

            if(!payload.error){
                setCookie('member', JSON.stringify(payload))
            }

            return payload
        })
            .addCase(loginPostAsync.pending,(state,action) =>{
                console.log("pending")
            })
            .addCase(loginPostAsync.rejected,(state,action) =>{
                console.log("rejected")
            })
    }
})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer