import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
import { API_SERVER_HOST } from "../api/boardApi";

const jwtAxios = axios.create()

const refreshJWT =  async (accessToken, refreshToken) => {

    const host = API_SERVER_HOST

    const header = {headers:{'Authorization': `Bearer ${accessToken}`}}

    const res = await axios.get(`${host}/api/member/refresh?refreshToken=${refreshToken}`,header)

    console.log(res.data)

    return res.data
}

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

    const data =res.data

    if(data && data.error ==='ERROR_ACCESS_TOKEN'){

        console.log("---------------------1111")

        const memberCookieValue = getCookie('member')

        const result = await refreshJWT(memberCookieValue.accessToken, memberCookieValue.refreshToken)

        //새로운 accessToken, refreshToken

        memberCookieValue.accessToken = result.accessToken
        memberCookieValue.refreshToken = result.refreshToken

        setCookie('member', JSON.stringify(memberCookieValue), 1)

        const originalRequest = res.config

        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`

        return await axios(originalRequest) // 원래 하던 작업에 다시 날려버리기
    }

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

