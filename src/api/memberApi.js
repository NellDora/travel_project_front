import axios from "axios";
import { API_SERVER_HOST } from "./boardApi";


const host =`${API_SERVER_HOST}/api/member`

export const loginPost = async(loginParam) =>{
    
    const header = {headers : {"Content-Type" : "x-www.form-urlencoded"}}

    const form = new FormData()
    form.append("username", loginParam.id)
    form.append("password", loginParam.pw)

    const res = await axios.post(`${host}/login`,form,header)
    console.log(res.data);
    return res.data

}
