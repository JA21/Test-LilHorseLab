import { useState, useEffect } from "react"
import ApiCrud from "../../services/ApiCrud";
const SelleRHook=()=>{
    const [data, setData] = useState();
    useEffect(() => {
        ApiCrud({ type: 'get', param: '', data: {} }).then(dataApi => {
          if (dataApi) setData(dataApi?.data)
          console.log(dataApi)
        })
    
      }, [setData])

      return{data}
}

export default SelleRHook