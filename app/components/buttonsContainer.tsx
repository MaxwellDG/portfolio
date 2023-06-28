import Link from "next/link";

export default function ButtonsContainer(){

    return(
        <ul className='container-buttons'>
            <Link href="/about"><li><button>About Me</button></li></Link>
            <Link href="/enterprise"><li><button>Enterprise Projects</button></li></Link>
            <Link href="/hobby"><li><button>Hobby Projects</button></li></Link>
            <li id="home-cv-button">
                <div className="cv-top-div">
                        <p>CV</p>
                    </div>
                <div className="cv-bot-div">
                    <a href={ process.env.PUBLIC_URL + 'images/Maxwell2023.pdf' } download><button id="download" /></a>
                    <a href={ process.env.PUBLIC_URL + 'images/Maxwell2023.pdf' } target='_blank' rel="noopener noreferrer"><button id="fullscreen" /></a>
                </div>
            </li>
        </ul> 
    )
}
