import { useNavigate } from "react-router-dom"

const useCustomMove = () => {
    const navigate = useNavigate()
    const moveToInfoList = () =>{

    }

    const moveToInfoRead = () => {
        navigate({
            pathname:'../informations/read'
        })
    }

    return {
        moveToInfoList, moveToInfoRead
    }
}

export default useCustomMove