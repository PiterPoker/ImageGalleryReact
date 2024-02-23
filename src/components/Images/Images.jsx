import React from "react"
import Image from './Image'
import './Images.css'

function Images(props) {
    const images = props.urlImages
   

    return (
        <div className="Images-Block">
        {images.map((item, index)=>(   
            <Image key={index} imageUrl={item.image_url}/>     
        ))}
        </div>
    )
}

export default Images