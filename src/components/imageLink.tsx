interface Props {
    altText: string
    image: string
    link: string
    id: string
}


export const ImageLink = ({ altText, image, link, id }: Props) => {


    return (
        <li>
            <a href={ link } target="_blank" rel="noopener noreferrer">
                <img id={ id } alt={ altText } src={ image }/>
            </a>
        </li> 
    )
}

export default ImageLink;

