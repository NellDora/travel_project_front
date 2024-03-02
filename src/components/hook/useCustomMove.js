import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum = (param, defaultValue) => {
    if(!param){
        return defaultValue
    }
    return parseInt(param)
}


const useCustomMove = () => {
    const navigate = useNavigate()

    const [refresh, setRefresh] = useState(false)

    const[queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'),10)

    const queryDefault = createSearchParams({page,size}).toString()

    const moveToInfoList = () =>{
        navigate({
            pathname:'../travel'
        })
    }

    const moveToInfoRead = () => {
        navigate({
            pathname:'../travel/read'
        })
    }

    const moveToBoardList = (pageParam) => {
        let queryStr =""
        if(pageParam){
            const pageNum = getNum(pageParam.page,1)
            const sizeNum = getNum(pageParam.size,10)

            queryStr = createSearchParams({page:pageNum, size:sizeNum}).toString()
        }else{
            queryStr = queryDefault
        }
        
        setRefresh(!refresh)

        navigate({
            pathname:'../',search:queryStr
        })
    }

    const moveToBoardRead = (bno) => {
        navigate({
            pathname:`../community/read/${bno}`
        })
    }

    const moveToBoardWrite = () => {
        navigate({
            pathname:'../community/write'
        })
    }

    return {
        moveToInfoList, moveToInfoRead, moveToBoardRead, moveToBoardWrite, moveToBoardList, page, size, refresh
    }
}

export default useCustomMove