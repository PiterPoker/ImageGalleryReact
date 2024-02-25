import React from "react"
import { Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {  } from "react-router-dom";

import Paragraphs from '../components/TermsOfUse/Paragraphs'

import { useSelector, useDispatch } from 'react-redux'
import { accept, getParagraphs, getPath, getIsAccept } from '../slices/termsOfUseSlice'

import constants from '../Route/constatnts';

function TermsOfUse() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const paragraphs = useSelector(getParagraphs)
    const pathRedirect = useSelector(getPath)
    const isAccept = useSelector(getIsAccept)



    React.useEffect(() => {
    }, [isAccept, dispatch]);

    const acceptHandle = (path) => {
        dispatch(accept(true))
        console.log(path)
        navigate(path)
    };

    return (
        !isAccept ?
            <div>
                <Paragraphs value={paragraphs} />
                <Button onClick={() => acceptHandle(pathRedirect)}>{`Accept`}</Button>
            </div>
            : <Navigate to={constants.routes.Gallery} />
    )
}

export default TermsOfUse