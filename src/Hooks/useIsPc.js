import { useEffect, useState } from "react"


const useIsPc = () => {
    const [isPc, setIsPc] = useState(false)

    window.addEventListener('resize', ()=>{
        setIsPc(window.innerWidth > 599)
    })

    useEffect(()=>{
        setIsPc(window.innerWidth > 599)
    }, [isPc])
    
    return isPc
}

export default useIsPc