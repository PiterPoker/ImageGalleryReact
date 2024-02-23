import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import galleryApi from "../../api/galleryApi";
import './Image.css'


function Image(props) {
    const [imageUrlFull, setImageUrlFull] = React.useState('')
    const [imageUrl, setImageUrl] = React.useState('')
    const host = galleryApi.getHost()

    React.useEffect(() => {
        const url = props.imageUrl
        setImageUrlFull(`${host}${url}`)
        setImageUrl(url)

    }, []);

    
    const downloadHandle = async (urlImage) => {

        const blob = await galleryApi.getImageByUrl(urlImage);

        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement("a")
        link.href = url
        const filename = `image.${blob.type.split('/').at(1)}`
        link.download = filename
        document.body.appendChild(link)

        link.click()

        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
    };

    return (
        <Card className="Image-Block" sx={{ maxWidth: 600 }}>
            <CardMedia className="Image-Card"
                sx={{ height: 350 }}
                image={imageUrlFull}
                component='img'
            />
            <CardActions>
                <Button onClick={() => { downloadHandle(imageUrl) }} >Download</Button>
            </CardActions>
        </Card>
    )
}

export default Image