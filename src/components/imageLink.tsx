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
                <img className="h-12 w-12 md:h-20 md:w-20" id={ id } alt={ altText } src={ image }/>
            </a>
        </li> 
    )
}

export default ImageLink;

