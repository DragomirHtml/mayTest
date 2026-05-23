import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";



const Dummy2 = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (input === "DIANA_MOLODETS"){


        }
    }, [input])
   
  return (
  <input 
    type="text" 
    value={input} 
    onChange={(event) => setInput(event.target.value)} 
  />
);
}
export default Dummy2