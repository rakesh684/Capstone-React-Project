import React,{ useState,useEffect} from "react";
const CartContext=React.createContext()
function CartContextProvider({children}){

    const [allPhotos,setAllPhotos]=useState([])
    const [cartItems,setCartItems]=useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
   
    useEffect(() => {
        
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    function toggleIsFavorite(id){
        const updatedArray=allPhotos.map(photo=>{
            if(photo.id===id){
                return {...photo,isFavorite:!photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArray)
    } 
   
    function addCartItems(newItem){
          setCartItems(prevItems=>[...prevItems,newItem])
    }
    function removeFromCart(id){
        setCartItems(prevItems=>prevItems.filter(item=>item.id !==id))
    }
    function emptyCart(){
        setCartItems([])
    }
    return(
       <CartContext.Provider value={{
        allPhotos,
        toggleIsFavorite,
        addCartItems,
        cartItems,
        removeFromCart,
        emptyCart}}>
           {children}
       </CartContext.Provider>
    )
}
export {CartContextProvider,CartContext}