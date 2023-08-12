import iconsHashmap from '../../../data/iconsHashmap';
import { Project } from '../../../data/projectData';

interface Props {
    project: Project;
}

export default function ProjectBottom({ project }: Props) {
    const { name, github, links, linkTexts, languages, tech } = project;

    return (
        <div className="flex flex-1 flex-col relative">
            <div className={`flex flex-wrap flex-1 overflow-auto p-2 ${github ? 'pr-12' : ''}`}>
                {[...languages, ...tech].map((item) => (
                    <div key={item} className="flex gap-x-1 mr-4 my-2">
                        <img
                            src={`/images/${
                                iconsHashmap[item.replaceAll(' ', '')]
                            }`}
                            className="h-6 w-6"
                        />
                        <p className="font-extralight">{item}</p>
                    </div>
                ))}
            </div>
            {github ? (
                <div className="absolute top-0 right-0 z-20">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sourceCode"
                    >
                        <img
                            alt="github_link"
                            src="images/github_icon_white.png"
                            width="40px"
                            height="40px"
                        />
                    </a>
                </div>
            ) : null}
        </div>
    );
}
