import axios from "axios";
import { getCookie } from "./cookieUtil";


const jwtAxios = axios.create()


jwtAxios.interceptors.request.use() // request를 보내기전에 해야할 것
jwtAxios.interceptors.response.use()

const beforeReq = (config) => {

    console.log("before request.......")
    const memberInfo = getCookie('member')

    if(!memberInfo){
        console.log("Member NOT FOUND")
        return Promise.reject(
            {response:
                {
                    data:
                    {error:"REQUIRED_LOGIN"}
                }
            }
        )
    }

    const {accessToken} = memberInfo

    console.log("------------------------------------")
    console.log("accessToken 값 확인 : "+ accessToken)

    
    config.headers.Authorization =`Bearer ${accessToken}`

    return config

}

const beforeRes = async(res) => {
    console.log("before return response........")

    



    return res
}

const requestFail = (err) => {
    console.log("request error.........")

    return Promise.reject(err)
}

const responseFail = (err) => {
    console.log("response fail error...............")
    return Promise.reject(err)
}

jwtAxios.interceptors.request.use(beforeReq, requestFail)
jwtAxios.interceptors.response.use(beforeRes, responseFail)

export default jwtAxios