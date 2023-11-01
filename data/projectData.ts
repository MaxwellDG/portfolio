export interface Project {
    name: string;
    links: string[];
    linkTexts: string[];
    desc: string;
    tech: string[];
    languages: string[];
    thumb: string;
    video?: string;
    image?: string;
    mobileImage?: string;
    github?: string;
}

export const hobbyProjectData: Project[] = [
    {
        name: 'Piecework-BTC',
        github: 'https://github.com/MaxwellDG/piecework-btc',
        links: ['https://piecework-btc.com'],
        linkTexts: ['Piecework-BTC'],
        desc: 'Piecework-BTC is a tool to help connect employers with freelancers in the world of software development. What makes it different is it has less overhead, and less fluff. It takes no fees, and only gathers minimal information. All that matters is connecting one entity with another to complete a certain task.',
        image: 'images/piecework-btc.png',
        mobileImage: 'images/piecework-btc-mobile.png',
        thumb: 'images/piecework-btc.png',
        languages: ['Typescript', 'Node.js'],
        tech: ['Next', 'React', 'Google Cloud', 'Tailwind'],
    },
    // {
    //     name: "Duel Arena",
    //     github: "https://github.com/MaxwellDG/duel_arena",
    //     links: [],
    //     linkTexts: [],
    //     desc:
    //         "A crypto gambling website. Instead of users having to take bad odds due to casinos taking a cut, they can bet directly against each other with 50/50 -> 2x odds.",
    //     image: "images/duelarena.png",
    //     thumb: "images/duelarena_thumb.png",
    //     languages: ["Typescript", "Solidity", "Vue"],
    //     tech: ["Truffle", "Chainlink"],
    // },
    {
        name: 'PyGame',
        github: 'https://github.com/MaxwellDG/python-pygame',
        links: [],
        linkTexts: [],
        desc: "A videogame made in similar style to the classic 'The Legend of Zelda'. Defeat monsters, collect upgrades, and defeat the evil Mecha-Boss C++9000",
        video: 'videos/Python_Vid.mp4',
        thumb: 'images/Python_Vid_thumb.png',
        languages: ['Python'],
        tech: ['PyGame', 'Photoshop'],
    },
    {
        name: 'WithWtvr',
        github: 'https://github.com/MaxwellDG/WithWtvr',
        links: [],
        linkTexts: [],
        desc: '"Hey where do you want to go tonight?" "I\'m fine with whatever." An app designed to aid groups in decision-making. Utilizes Google Maps and Google Places APIs for extra suggestions.',
        video: 'videos/video_ww_right_final.mp4',
        thumb: 'images/video_ww_right_final_thumb.png',
        languages: ['Java', 'Android SDK'],
        tech: ['Bluetooth', 'Google Maps', 'SQL'],
    },
];

export const enterpriseProjectData: Project[] = [
    {
        name: 'Stache',
        links: [
            'https://www.stache.io',
            'https://app.stache.io/bazaar',
            'https://www.xnft.gg/app/DNUrvMF9ytAYNS66pbfcM9FrHHmJqghVeQKgbo9WU1KM',
            'https://twitter.com/SmartStache'
        ],
        linkTexts: ['Stache Intro', 'Stache App',  'Stache as xNFT', '@SmartStache'],
        desc: "A Solana blockchain infrastructure and application project. First we brought 'Smart Wallet' technology to Solana. Then we created the 'Stache' application to build on that. The current main attraction is the ability for users to make their own shops, thus decentralizing the currently centralized marketplace model.",
        video: 'videos/stache.mp4',
        thumb: 'images/Stache_Logo_Color_Medium.png',
        languages: ['Typescript', 'Node.js'],
        tech: ['React Native', 'Solana', 'Nest', 'Postgres', 'Recoil', 'Tailwind'],
    },
    {
        name: 'Domination',
        links: ['https://domination.gg', 'https://twitter.com/DominationGG_'],
        linkTexts: ['Domination.gg', '@DominationGG_'],
        desc: 'A Solana blockchain video-game in the browser. Players choose to join 1 of 3 factions and compete in bi-weekly matches. Users can purchase NFTs to participate in campaigns, and are rewarded for their efforts. In proper Blockchain fashion, all game activity is done decentralized and all players interact on the same gameboard.',
        video: 'videos/domination.mp4',
        thumb: 'images/domination_thumb.gif',
        languages: ['Typescript', 'Node.js'],
        tech: ['Solana', 'Postgres', 'Recoil', 'Web3.js', 'Tailwind']
    },
    {
        name: "The Bard's Quill",
        links: ['https://thebardsquill.com'],
        linkTexts: ['TheBardsQuill.com'],
        desc: "A virtual tabletop and campaign-management system for the 'Storytelling Role-Playing Game' genre. The Bard's Quill works as an aide for popular titles such as: 'Dungeons & Dragons' and 'Pathfinder'.",
        video: 'videos/thebardsquill_cropped.mp4',
        languages: ['Javascript', 'Vue'],
        thumb: 'images/thebardsquill_cropped_thumb.png',
        tech: ['WebRTC', 'Konva.js', 'IndexedDB'],
    },
    {
        name: 'SMART Studio',
        links: [],
        linkTexts: [],
        desc: 'Designed for medical companies to generate informative videos for their workers and patients. Utilizes Deepfake technology in order to quickly mass-produce video content of doctors speaking to patients in any language. AI support bots currently in development in order to generate deepfake videos in response to textual input.',
        video: 'videos/smart-studio-ready.mp4',
        languages: ['Javascript', 'React Native'],
        thumb: 'images/smart-studio-ready_thumb.png',
        tech: ['GraphQL', 'AWS', 'Expo'],
    },
    {
        name: 'Luye',
        links: [],
        linkTexts: [],
        desc: 'An offline-first Progressive Web App used by pharmaceutical sales reps during their meetings with health-care professionals. Utilizes ServiceWorkers and IndexedDB in order to persist data in offline-mode and sync it with the server when an internet connection is later established.',
        image: 'images/Luye.png',
        thumb: 'images/Luye_thumb.png',
        languages: ['Typescript', 'React Native'],
        tech: ['PWA', 'IndexedDB'],
    },
    {
        name: 'The Diabetes App',
        links: ['https://corporate.thediabetesapp.com'],
        linkTexts: ['The Diabetes App'],
        desc: "A social media app focused around people with diabetes. Users can make profiles, message each other, scroll the homefeed, there's app-wide video streaming events, and much more.",
        image: 'images/tda.jpeg',
        thumb: 'images/tda_thumb.jpeg',
        languages: ['Javascript', 'React Native'],
        tech: ['OAuth2', 'Pusher', 'Kevel'],
    },
    
    // {
    //     name: 'Lucky13 Tattoos',
    //     links: [],
    //     linkTexts: [],
    //     desc: 'Website for the Toronto tattoo parlour. Static plus an e-commerce section.',
    //     video: 'videos/lucky13.mp4',
    //     thumb: 'images/lucky13_thumb.png',
    //     languages: ['Javascript', 'React', 'Node.js'],
    //     tech: ['Stripe', 'MailGun', 'AWS'],
    // },
    {
        name: 'CSA-Scraper',
        links: [],
        linkTexts: [],
        desc: "A scraper for a client who wanted to track the status of Canadian securities administrators. 'Scrapes' the Canadian Securities Administrators Registry and produces a .csv after comparisons are made.",
        video: 'videos/CSA_Video.mp4',
        thumb: 'images/CDA_Video_thumb.png',
        image: 'images/csa_scraper.png',
        languages: ['Python'],
        tech: ['Selenium', 'MS Excel'],
    },
];
