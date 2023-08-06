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
            { name: "React", icon: "/images/react.png"},
            { name: "React Native", icon: "/images/react.png"},
            { name: "Expo", icon: "/images/expo.png"},
            { name: "Vue", icon: "/images/vue.png"},
            { name: "HTML5", icon: "/images/HTML5.png"},
            { name: "CSS3", icon: "/images/CSS3.png"},
            { name: "Tailwind", icon: "/images/tailwind.png"},
            { name: "Redux", icon: "/images/redux.png"},
            { name: "Recoil", icon: "/images/recoil.png"},
            { name: "Webpack", icon: "/images/webpack.png"},
        ]
    },
    {
        name: "Backend",
        skills: [
            { name: "Node", icon: "/images/nodejs.png"},
            { name: "Nest", icon: "/images/nestjs.png"},
            { name: "Next", icon: "images/nextjs.png"},
            { name: "Postgres", icon: "/images/postgres.png"},
            { name: "SQL", icon: "/images/sql.png"},
            { name: "GraphQL", icon: "/images/graphql.png"},
            { name: "Heroku", icon: "/images/heroku.png"},
        ]
    },
    {
        name: "Web3",
        skills: [
            { name: "Ethereum", icon: "/images/ethereum.png"},
            { name: "Solana", icon: "/images/solana.png"},
            { name: "Solidity", icon: "/images/solidity.png"},
            { name: "Web3.js", icon: "/images/web3js.png"},
            { name: "Truffle", icon: "/images/truffle.png"},
            { name: "Remix", icon: "/images/remix.png"},
        ]
    },
    {
        name: "Project Management",
        skills: [
            { name: "Agile", icon: "/images/agile.png"},
            { name: "Scrum", icon: "/images/scrum.png"},
            { name: "Asana", icon: "/images/asana.png"},
            { name: "Git", icon: "/images/git.png"},
            { name: "GitLabs", icon: "/images/gitlabs.png"},
        ]
    },
    {
        name: "Design",
        skills: [
            { name: "Figma", icon: "/images/figma.png"},
            { name: "Photoshop", icon: "/images/photoshop.png"},
            { name: "Premiere Pro", icon: "/images/premiere.png"},
            { name: "XD", icon: "/images/xd.png"},
            { name: "Leonardo AI", icon: "/images/leonardo.png"},
        ]
    },
]
