import React, { Suspense, lazy } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { pathRedirect, paragraphs, getIsAccept } from '../slices/termsOfUseSlice'
import { setImagesUrl } from '../slices/gallerySlice'
import { useGetImagesQuery, ImagesAPIData, ImagesAPIStatus, ImagesAPIError } from '../slices/galleryAPISlice'

import constants from './constatnts';

import Loading from './Loading'


const PrivateGalleryWrapper = () => {
  const { currentData, isLoading, isFetching, isSuccess, isError, error } = useGetImagesQuery();
  const dispatch = useDispatch()
  const isAccept = useSelector(getIsAccept)
  console.log(isAccept)

  React.useEffect(() => {

    if (isSuccess)
    {
      acceptTermsOfUse(currentData.terms_of_use)
      setImages(currentData.images)
    }

  }, [isSuccess, isError, dispatch]);

  const acceptTermsOfUse = (termsOfUse) => {
      dispatch(paragraphs(termsOfUse.paragraphs))
      dispatch(pathRedirect(`${constants.routes.Gallery}/${constants.routes.Images}`))
  }

  const setImages = (images) =>{
    dispatch(setImagesUrl(images))
  }

  let contentToDisplay = isError ? <h2>{error}</h2> : ''

  return (<div>
    <Outlet />
    {isError ? contentToDisplay : isAccept ? <Navigate to={constants.routes.Images} /> : <Navigate to={constants.routes.TremsOfUse} />}
  </div>)
}

export default PrivateGalleryWrapper