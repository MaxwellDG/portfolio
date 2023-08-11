import skillsData from '../../../../data/skillsData';

type Props = {
    focusedIndex: number;
};

export default function SkillsBottom({ focusedIndex }: Props) {
    return (
        <div className="flex flex-1">
            <div className="flex flex-wrap justify-between flex-1 overflow-y-auto p-2">
                {skillsData[focusedIndex].skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-x-2 my-1 mr-4"
                    >
                        <img src={skill.icon} className="h-6 w-6" />
                        <p className="font-extralight">{skill.name}</p>
                    </div>
                ))}
                {skillsData[focusedIndex].skills.length % 2 !== 0 && (
                    <div className="flex items-center gap-x-2 my-1 mr-4 h-6 w-6" />
                )}
            </div>
        </div>
    );
}
