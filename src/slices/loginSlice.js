import { createSlice } from "@reduxjs/toolkit";

const initState={
    id:''
}

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
    }
})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer