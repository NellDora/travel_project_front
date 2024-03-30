import axios from "axios"
import { API_SERVER_HOST } from "./boardApi"



const host = `${API_SERVER_HOST}/vacationlands`

export const getInfoList = async(pageParam) =>{
    const {page,size,searchTitle, theme, location} = pageParam
    const res = await axios.get(`${host}/`, {params:{page,size,searchTitle, theme, location}})
    console.log("getInfoList 호출")
    return res.data
}

export const getSearchInfoList = async(pageParam) =>{
    const {searchTitle, theme, location} = pageParam
    const page = 1;
    const size = 10;
    const res = await axios.get(`${host}/`, {params:{page,size,searchTitle, theme, location}})
    console.log("getInfoList 호출")
    return res.data
}

export const postInfo = async (infoObj) =>{

    const header = {headers: {"Content-Type":"multipart/form-data"}}

    const res = await axios.post(`${host}/`, infoObj, header )

    return res.data
}

export const getInfo = async(vno) =>{
    const res = await axios.get(`${host}/${vno}`)
    console.log("getInfo 호출")
    return res.data
}
