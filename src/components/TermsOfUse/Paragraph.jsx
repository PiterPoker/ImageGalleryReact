import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Paragraph(props) {
    const paragraph = props.value
    const title = `${paragraph.index}. ${paragraph.title}`
    const content = paragraph.content

    
    return (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
    )
}

export default Paragraph