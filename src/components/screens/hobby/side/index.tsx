import skillsData from "../../../../data/skillsData";

type Props = {
    focusedIndex: number;
};

export default function HobbySide({ focusedIndex }: Props) {
    return (
        <>
            <h1 className="mb-2 ml-2 mt-2 text-xl underline">
                {skillsData[focusedIndex].name}
            </h1>
            <div className="flex flex-col flex-1 overflow-auto p-2">
                {skillsData[focusedIndex].skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-x-2 mb-2"
                    >
                        <img src={skill.icon} className="h-6 w-6" />
                        <p className="font-extralight">{skill.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
