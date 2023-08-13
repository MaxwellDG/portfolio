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
                <img className="h-4 w-4 xxs:h-6 xxs:w-6 object-contain" alt={ altText } src={ image }/>
            </a>
        </li> 
    )
}

export default ImageLink;

