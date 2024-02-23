import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Paragraph(props) {
    const paragraph = props.value

    
    return (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {`${paragraph.index}. ${paragraph.title}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {paragraph.content}
          </Typography>
        </CardContent>
    )
}

export default Paragraph