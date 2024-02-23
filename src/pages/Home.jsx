import Button from '@mui/material/Button';
import appConstants from '../common/constatnts';

function Home(props) {
    const isAccept = props.isAccept
    console.log(isAccept)
    

    return (
        <Button href={appConstants.routes.Gallery}>{`GO TO IMAGE Gallery ->`}</Button>
    )
}

export default Home