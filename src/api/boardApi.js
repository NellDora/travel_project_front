import axios from "axios"

export const API_SERVER_HOST='http://localhost:8080'

const prefix = `${API_SERVER_HOST}/boards`

export const getBoard = async(bno) =>{
    console.log(bno)
    const res = await axios.get(`${prefix}/${bno}`)
    console.log("getBoard 호출")
    return res.data
}

export const getBoardList = async(pageParam) =>{
    const {page,size} = pageParam
    const res = await axios.get(`${prefix}/`, {params:{page,size}})
    return res.data
}

export const postBoard = async(boardObj) =>{
    const res= await axios.post(`${prefix}/`, boardObj)
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

export const getBoardReply = async(bno) =>{
    const res = await axios.get(`${prefix}/${bno}/replys`)
    return res.data
}

export const postBoardReply = async(boardReplyObj) =>{
    const res = await axios.post(`${prefix}/${boardReplyObj.bno}/replys`, boardReplyObj)
}