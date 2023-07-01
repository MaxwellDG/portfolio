interface Props {
    alt: string,
    src: string,
    index: number
}

export default function IconSkill({ alt, src, index }: Props){

    return <li key={ index } className="iconSkill"><img alt={ alt } src={ src }/></li>
}