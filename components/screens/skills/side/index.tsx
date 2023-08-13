import skillsData from '../../../../data/skillsData';
import iconsHashmap from '../../../../data/iconsHashmap';

type Props = {
    focusedIndex: number;
};

export default function SkillsSide({ focusedIndex }: Props) {
    return (
        <>
            <h1 className="mb-2 ml-2 mt-2 text-xl underline">
                {skillsData[focusedIndex].name}
            </h1>
            <div className="flex flex-col flex-1 overflow-auto p-2">
                {skillsData[focusedIndex].skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-x-2 mb-2">
                        <img
                            alt={'skill_' + skill}
                            src={`/images/${
                                iconsHashmap[skill.replaceAll(' ', '')]
                            }`}
                            className="h-6 w-6"
                        />
                        <p className="font-extralight">{skill}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
