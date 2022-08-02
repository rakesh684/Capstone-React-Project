import React,{ useState,useEffect} from "react";
const CartContext=React.createContext()
function CartContextProvider({children}){

    const [allPhotos,setAllPhotos]=useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleIsFavourite(id){
        const updatedArray=allPhotos.map(photo=>{
            if(photo.id===id){
                return {...photo,isFavourite:!photo.isFavourite}
            }
            return photo
        })
        setAllPhotos(updatedArray)
    } 
   
    
    return(
       <CartContext.Provider value={{allPhotos,toggleIsFavourite}}>
           {children}
       </CartContext.Provider>
    )
}
export {CartContextProvider,CartContext}