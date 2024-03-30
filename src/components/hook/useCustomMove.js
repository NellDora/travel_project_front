import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum = (param, defaultValue) => {
    if(!param){
        return defaultValue
    }
    return parseInt(param)
}

const getTitle =(param, defaultValue) => {
    if(!param){
        return defaultValue
    }
    return param
}

const getTheme =(param, defaultValue) => {
    if(!param){
        return defaultValue
    }
    return param
}

const getLocation =(param, defaultValue) => {
    if(!param){
        return defaultValue
    }
    return param
}

const useCustomMove = () => {
    const navigate = useNavigate()

    const [refresh, setRefresh] = useState(false)

    const[queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'),10)
    const title = getTitle(queryParams.get('searchTitle'), null)
    const theme = getTheme(queryParams.get('theme',null))
    const location = getLocation(queryParams.get('location',null))


    const queryDefault = createSearchParams({page,size}).toString()

    const moveToInfoList = (pageParam) =>{

        let queryStr =""
        if(pageParam){
            const pageNum = getNum(pageParam.page,1)
            const sizeNum = getNum(pageParam.size,10)
            const titleString = getTitle(pageParam.getTitle,null)
            const themeString = getTheme(pageParam.getTheme,null)
            const locationString = getLocation(pageParam.getLocation,null)

            queryStr = createSearchParams({page:pageNum, size:sizeNum, title:titleString, theme:themeString, location:locationString}).toString()
        }else{
            queryStr = queryDefault
        }
        
        setRefresh(!refresh)

        navigate({
            pathname:'../travel', search:queryStr
        })
    }

    const moveToInfoRead = (vno) => {
        navigate({
            pathname:`../travel/read/${vno}`
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
            pathname:'../community',search:queryStr
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
        moveToInfoList, moveToInfoRead, moveToBoardRead, moveToBoardWrite, moveToBoardList, page, size, refresh, title, location, theme
    }
}

export default useCustomMove