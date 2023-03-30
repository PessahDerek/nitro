import { useMemo } from "react"
import { api_ } from "../Apis/api"


const useWonBids = () => {
    const wonBids = useMemo(fetchWonBids, [])

    function fetchWonBids(){
        return new Promise((res, rej)=>{
            try {
                let { data } = api_.get('/getmywonbids')
                res(data)
            } catch ({message, response:{data}}) {
                alert(message || data.message)
                res([])
            }
        })
    }
    
    return { wonBids }
}

export default useWonBids
