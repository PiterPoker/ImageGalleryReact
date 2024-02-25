import React from "react"
import Images from '../components/Images/Images'
import { useSelector } from 'react-redux'
import { selectAllImages } from '../slices/gallerySlice'


function Gallery() {
    const data = useSelector(selectAllImages)
    
    return (
        <Images Images={data} />
    )
}

export default Gallery