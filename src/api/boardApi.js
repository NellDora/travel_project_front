import axios from "axios"

export const API_SERVER_HOST=''

const prefix = `${API_SERVER_HOST}/boards`

export const getBoard = async(bno) =>{
    const res = await axios.get(`${prefix}/${bno}`)
    return res.data
}

export const getBoardList = async(pageParam) =>{
    const {page,size} = pageParam
    const res = await axios.get(`${prefix}/list`, {params:{page,size}})
    return res.data
}

export const postBoard = async(boardObj) =>{
    const res= await axios.post(`${prefix}`, boardObj)
    return res.data
}

export const deleteBoard = async(bno) =>{
    const res = await axios.delete(`${prefix}/${bno}`)
    return res.data
}

export const putBoard = async(board) => {
    const res = await axios.put(`${prefix}/${board.bno}`, board)
    return res.data
}