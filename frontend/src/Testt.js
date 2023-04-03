
import { useEffect , useState } from "react";
import axios from 'axios'


const Testt = () =>   {

  const [ brr , setBrr ] = useState('')

  const friData = (data) => {
    console.log(data.data)
    setBrr(data)
  }  

  useEffect(()=>{
    const url = [ 'https://bapzendexpress.vercel.app/' , "http://localhost:4000/api/bapz/id" ]
    axios
        .post(url[1],{id:740})
        .then((res) =>(friData(res.data)))
        .then()
        .catch((err) => console.log(err));
}, [])

  if (brr?.src?.length>0) {
    return (
      <div>DATA : {brr.data.productname}</div>
    )
  }
  else {
    return (
      <div>WALO</div>
    )
  }
}       




export default Testt ;