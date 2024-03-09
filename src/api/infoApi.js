import axios from "axios"


export const API_SERVER_HOST='http://localhost:8080'

const prefix = `${API_SERVER_HOST}/vacationlands`

export const getInfoList = async(pageParam) =>{
    const {page,size} = pageParam
    const res = await axios.get(`${prefix}/`, {params:{page,size}})
    console.log("getInfoList 호출")
    return res.data
}

export const postInfo = async(infoObj) =>{
    const res = await axios.post(`${prefix}/` ,infoObj )
    console.log("postInfo")
    return res.data
}