import React from "react"
import Images from '../components/Images/Images'
import { useSelector, useDispatch } from 'react-redux'
import { getAllImagesStatus, getAllImages, selectAllImages, getAllImagesError } from '../slices/gallerySlice'
import { pathRedirect, paragraphs, getIsAccept } from '../slices/termsOfUseSlice'
import appConstants from '../common/constatnts'
import { useNavigate } from "react-router-dom";


function Gallery(props) {
    const dispatch = useDispatch()
    const isAccept = props.isAccept
    const getImagesStatus = useSelector(getAllImagesStatus)
    const data = useSelector(selectAllImages);
    const error = useSelector(getAllImagesError);
    const navigate = useNavigate();


    React.useEffect(() => {
        if (getImagesStatus === 'idle') {
            const result = dispatch(getAllImages());
            console.log(result)
        } else if (getImagesStatus === 'succeeded') {
            if (!isAccept) {
                dispatch(pathRedirect(appConstants.routes.Gallery))
                dispatch(paragraphs(data.terms_of_use.paragraphs))
                navigate(appConstants.routes.TremsOfUse);
            }

        }

    }, [isAccept, getImagesStatus, dispatch]);

    let contentToDisplay = '';
    if (getImagesStatus === 'loading') {
        contentToDisplay = <h2>Loading...</h2>;
    } else if (getImagesStatus === 'succeeded') {
        contentToDisplay = <Images urlImages={data.images} />
    } else if (getImagesStatus === 'failed') {
        contentToDisplay = <h2>{error}</h2>;
    }
    return (
        <div>
            {contentToDisplay}
        </div>
    )
}

export default Gallery