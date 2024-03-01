import { useNavigate } from "react-router-dom"

const useCustomMove = () => {
    const navigate = useNavigate()
    const moveToInfoList = () =>{

    }

    const moveToInfoRead = () => {
        navigate({
            pathname:'../travel/read'
        })
    }

    const moveToBoardRead = () => {
        navigate({
            pathname:'../community/read'
        })
    }

    const moveToBoardWrite = () => {
        navigate({
            pathname:'../community/write'
        })
    }

    return {
        moveToInfoList, moveToInfoRead, moveToBoardRead, moveToBoardWrite
    }
}

export default useCustomMove