import React from 'react' 
import Link from "next/link";
import ReturnButton from './returnButton';
import NavButtons from './navButtons';
import CVButton from './cvButton';

interface Props {
    url: string[],
    text: string[],
    sectionName: string
}

export const TopSection = ({ url, text, sectionName }: Props) => {


    return(
        <div className="top-section">
            <ul className="flex justify-between p-0">
                <ReturnButton />
                <div className="flex flex-col">
                    <NavButtons text={text} url={url} />
                    <CVButton />
                </div>
            </ul>
            <h1>{ sectionName }</h1>
        </div>
    )
}