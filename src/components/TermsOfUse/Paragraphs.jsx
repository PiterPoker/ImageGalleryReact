import Paragraph from './Paragraph'

function Paragraphs(props) {
    const paragraphs = props.value

    return (
        paragraphs.map((paragraph) =>(
            <Paragraph key={paragraph.index} value={paragraph} />

        ))
    )
}

export default Paragraphs