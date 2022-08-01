import React,{useContext} from "react"
import Image from "../components/Image"
import {getClass} from "../utils"
import { CartContext } from "../context"
function Photos() {
    const {allPhotos}=useContext(CartContext)
    const imageElements=allPhotos.map((img,i)=>(
        //.map receive img plus index in callback
        <Image key={img.id} img={img} className={getClass(i)}/>
    ))
    return (
        <main className="photos">
            {imageElements}
        </main>
    ) 
}

export default Photos