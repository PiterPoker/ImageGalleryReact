import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import constants from '../Route/constatnts';

function Home() {
    const navigate = useNavigate();

    const goGalleryHandle = () => {
        navigate(`${constants.routes.Gallery}`)
    }

    return (
        <Button variant="contained" onClick={() => goGalleryHandle()}>
            {`GO TO IMAGE Gallery ->`}
        </Button>
    )
}

export default Home