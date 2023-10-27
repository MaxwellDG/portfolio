import iconsHashmap from '../../../data/iconsHashmap';
import { Project } from '../../../data/projectData';
import Twitter from '../../../public/icons/twitter.svg';
import Link from '../../../public/icons/link.svg';

interface Props {
    project: Project;
}

export default function ProjectSide({ project }: Props) {
    const { name, github, links, linkTexts, languages, tech } = project;

    return (
        <div className="flex flex-col flex-1 relative overflow-y-auto">
            <h1 className="mx-2 mt-2 text-xl underline">{name}</h1>
            <div className="flex flex-col flex-1 p-2">
                {links.length ? (
                    <div className="flex flex-col mb-2">
                        {links.map((link: string, i: number) => (
                            <div
                                className={`shaded-button shaded-hover px-1 ${
                                    i !== links.length - 1 ? 'mb-2' : ''
                                } text-white rounded-sm border-black border ${
                                    link === 'https://piecework-btc.com'
                                        ? 'mt-5'
                                        : ''
                                }`}
                            >
                                <a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center flex-start"
                                >
                                    {link.toLowerCase().includes('twitter') ? (
                                        <Twitter height={20} width={20} />
                                    ) : (
                                        <Link height={20} width={20} />
                                    )}
                                    <div className="flex flex-1 justify-center">
                                        <p className="font-extralight text-center mx-2 ">
                                            {linkTexts[i]}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                ) : null}
                <h2>Language:</h2>
                <div className="flex flex-col p-2">
                    {languages.map((lang) => (
                        <div
                            key={lang}
                            className="flex items-center gap-x-2 mb-2"
                        >
                            <img
                                src={`/images/${
                                    iconsHashmap[lang.replaceAll(' ', '')]
                                }`}
                                className="h-6 w-6"
                            />
                            <p className="font-extralight">{lang}</p>
                        </div>
                    ))}
                </div>
                <h2>Tech stack:</h2>
                <div className="flex flex-col p-2">
                    {tech.map((tech) => (
                        <div
                            key={tech}
                            className="flex items-center gap-x-2 mb-2 whitespace-nowrap"
                        >
                            <img
                                src={`/images/${
                                    iconsHashmap[tech.replaceAll(' ', '')]
                                }`}
                                className="h-6 w-6"
                            />
                            <p className="font-extralight whitespace-nowrap">
                                {tech}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {github ? (
                <div className="absolute top-2 right-2 z-20">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sourceCode"
                    >
                        <img
                            alt="github_link"
                            src="images/github_icon_white.png"
                            width="50px"
                            height="50px"
                        />
                    </a>
                </div>
            ) : null}
        </div>
    );
}
