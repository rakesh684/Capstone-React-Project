import React,{ useState,useEffect} from "react";
const CartContext=React.createContext()
function CartContextProvider({children}){

    const [allPhotos,setAllPhotos]=useState([])
    const url="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
     useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAllPhotos(data))
     },[])
    return(
       <CartContext.Provider value={{allPhotos}}>
           {children}
       </CartContext.Provider>
    )
}
export {CartContextProvider,CartContext}