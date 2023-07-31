export interface Skill {
    name: string,
    icon: string
}

export interface SkillSet {
    name: string,
    skills: Skill[]
}

export default [
    {
        name: "Frontend",
        skills: [
            { name: "React", icon: "/images/nestjs.png"},
            { name: "React Native", icon: "react.png"},
            { name: "Expo", icon: ""},
            { name: "Vue", icon: "vue.png"},
            { name: "Tailwind", icon: ""},
            { name: "ThreeJS", icon: ""},
        ]
    },
    {
        name: "Backend",
        skills: [
            { name: "Node", icon: ""},
            { name: "Nest", icon: "nestjs.png"},
            { name: "Next", icon: "nextjs.png"},
            { name: "Postgres", icon: ""},
            { name: "SQL", icon: "sqp_icon.png"},
            { name: "GraphQL", icon: ""},
        ]
    },
    {
        name: "Web3",
        skills: [
            { name: "Solidity", icon: ""},
            { name: "Rust (novice)", icon: ""},
            { name: "Web3.JS", icon: ""},
            { name: "Truffle", icon: ""},
        ]
    },
    {
        name: "Languages",
        skills: [
            { name: "Typescript", icon: ""},
            { name: "Java", icon: "java_icon.png"},
            { name: "Python", icon: ""},
        ]
    },
    {
        name: "Project Management",
        skills: [
            { name: "Agile", icon: ""},
            { name: "Scrum", icon: ""},
            { name: "Asana", icon: ""},
            { name: "Git", icon: ""},
            { name: "GitLabs", icon: ""},
        ]
    },
    {
        name: "Design",
        skills: [
            { name: "Figma", icon: ""},
            { name: "Photoshop", icon: ""},
            { name: "Premiere Pro", icon: ""},
            { name: "XD", icon: ""},
        ]
    },
]
