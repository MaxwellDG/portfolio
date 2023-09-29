import iconsHashmap from '../../../data/iconsHashmap';
import { Project } from '../../../data/projectData';

interface Props {
    project: Project;
}

export default function ProjectBottom({ project }: Props) {
    const { github, languages, tech } = project;

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
        </div>
    );
}
