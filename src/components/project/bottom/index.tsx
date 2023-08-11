import { Project } from '../../../data/projectData';

interface Props {
    project: Project;
}

export default function ProjectBottom({ project }: Props) {
    const { name, github, links, linkTexts, languages, tech } = project;

    return (
        <div className="flex flex-1 flex-col relative">
            <div className="flex flex-col flex-1 overflow-auto p-2">
                {links.length ? (
                    <div className="flex flex-col mb-2">
                        {links.map((link: string, i: number) => (
                            <div
                                className={`shaded-button shaded-hover px-2 self-start ${
                                    i !== links.length - 1 ? 'mb-2' : ''
                                } text-white rounded-sm border-black border`}
                            >
                                <a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <p className="font-extralight">
                                        {linkTexts[i]}
                                    </p>
                                </a>
                            </div>
                        ))}
                    </div>
                ) : null}
                <h2>Language:</h2>
                <div className="flex mb-2">
                    {languages.map((lang: string, i: number) => (
                        <p key={i} className="font-extralight">
                            {lang}
                            {i !== languages.length - 1 ? ', ' : ''}
                        </p>
                    ))}
                </div>
                <h2>Tech stack:</h2>
                <div className="flex mb-2">
                    {tech.map((t: string, i: number) => (
                        <p key={i} className="font-extralight">
                            {t}
                            {i !== tech.length - 1 ? ', ' : ''}
                        </p>
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
