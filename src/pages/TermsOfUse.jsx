import React from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import Paragraphs from '../components/TermsOfUse/Paragraphs'

import { useSelector, useDispatch } from 'react-redux'
import { isAccept, getParagraphs, getPath } from '../slices/termsOfUseSlice'

function TermsOfUse() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const paragraphs = useSelector(getParagraphs)
    console.log(paragraphs)
    const pathRedirect = useSelector(getPath)
    console.log(pathRedirect)
    console.log(pathRedirect.payload)
    
    
    React.useEffect(() => {
        if (!paragraphs){
            paragraphs = useSelector(getParagraphs)
        }
    }, [dispatch]);
    
    const acceptHandle = (path) => {
        dispatch(isAccept(true))
        navigate(path)
    };

    return (
        <div>
        <Paragraphs value={paragraphs}/>
        <Button onClick={() => acceptHandle(pathRedirect.payload)}>{`Accept`}</Button>
        </div>
    )
}

export default TermsOfUse