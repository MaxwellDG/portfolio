export interface SkillSet {
    name: string;
    skills: string[];
    icon: React.ReactNode
}

export default [
    {
        name: 'Frontend',
        skills: [
            'React',
            'React Native',
            'Vue',
            'Expo',
            'Android SDK',
            'XCode',
            'HTML5',
            'CSS3',
            'Tailwind',
            'Redux',
            'Recoil',
            'Storybook',
            'Webpack',
        ],
    },
    {
        name: 'Backend',
        skills: [
            'Node.js',
            'Nest',
            'Next',
            'Mongo',
            'Postgres',
            'SQL',
            'GraphQL',
            'Google Cloud',
            'AWS',
            'Heroku',
        ],
    },
    {
        name: 'Web3',
        skills: [
            'Ethereum',
            'Solana',
            'Solidity',
            'Chainlink',
            'Web3.js',
            'Truffle',
            'Remix',
        ],
    },
    {
        name: 'Project Management',
        skills: ['Agile', 'Scrum', 'Asana', 'Git', 'GitLabs', 'BitBucket'],
    },
    {
        name: 'Design',
        skills: ['Figma', 'Photoshop', 'Premiere Pro', 'XD', 'Leonardo AI'],
    },
];
