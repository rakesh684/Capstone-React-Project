import React, { useContext,useState } from "react";
import { CartContext } from "../context";
import CartItem from "../components/CartItem";
function Cart(){
    const [buttonText,setButtonText]=useState("Place Order")
    const {cartItems,emptyCart}=useContext(CartContext)
    const totalCost=5.99 * cartItems.length
    const totalCostDisplay=totalCost.toLocaleString("en-US", 
    {style: "currency", currency: "USD"})

    const cartItemsElements=cartItems.map(item=>(
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(()=>{
            setButtonText("Place Order")
            emptyCart()
        },3000)
    }
    return(
        <main className="cart-page">
            <h1>Check out</h1>
             {cartItemsElements}
             <p className="total-cost">Total:{totalCostDisplay} </p>
             {
                cartItems.length>0 ?
                <div>
                <button className="order-button"
                onClick={placeOrder}
                >{buttonText}</button>
             </div>:
             <p>You have no cart Items</p>
             }
             
        </main>
    )
}

export default Cart