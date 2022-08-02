import React,{useContext} from "react"
import Image from "../components/Image"
import {getClass} from "../utils"
import { CartContext } from "../context"
function Photos() {
    const {allPhotos}=useContext(CartContext)
     //.map receive img plus index in callback
    const imageElements=allPhotos.map((img,i)=>(
        <Image key={img.id} img={img} className={getClass(i)}/>
    ))
    console.log(allPhotos)
    return (
        <main className="photos">
            {imageElements}
        </main>
    ) 
}

export default Photos