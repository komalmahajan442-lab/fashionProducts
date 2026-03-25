import { createContext,useState ,useEffect} from "react";
import axios from 'axios';

export const MyContext=createContext();

 const ContextProvider=({children})=>{
   const [products,setProducts]=useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

     useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

   useEffect(() => {
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:8080/products");
    setProducts(res.data);
  };

  fetchProducts();
}, []);
   
   return(
    <MyContext.Provider value={{products,setProducts,login,logout,setIsLoggedIn,isLoggedIn}}>
        {children}
    </MyContext.Provider>
   )
}

export default ContextProvider;