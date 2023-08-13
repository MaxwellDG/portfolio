import iconsHashmap from '../../../../data/iconsHashmap';
import skillsData from '../../../../data/skillsData';

type Props = {
    focusedIndex: number;
};

export default function SkillsBottom({ focusedIndex }: Props) {
    return (
        <div className="flex flex-1">
            <div className="flex flex-wrap flex-1 overflow-y-auto p-2">
                {skillsData[focusedIndex].skills.map((skill) => (
                    <div
                        key={skill}
                        className="flex items-center gap-x-2 my-1 mr-4"
                    >
                        <img src={`/images/${iconsHashmap[skill.replace(" ", "")]}`} className="h-6 w-6" />
                        <p className="font-extralight">{skill}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
