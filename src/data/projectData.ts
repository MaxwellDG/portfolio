export interface Project {
    name: string,
    links: string[],
    linkTexts: string[],
    desc: string,
    tech: string[],
    languages: string[],
    video?: string
    image?: string,
    github?: string,
}

export const hobbyProjectData: Project[] = [
    {
        name: "Duel Arena",
        github: "https://github.com/MaxwellDG/duel_arena",
        links: [],
        linkTexts: [],
        desc:
            "A crypto gambling website. Instead of users having to take bad odds due to casinos taking a cut, they can bet directly against each other with 50/50 -> 2x odds.",
        image: "images/duelarena.png",
        languages: ["Typescript", "Solidity", "Vue"],
        tech: ["Truffle", "Chainlink"],
    },
    {
        name: "PyGame",
        github: "https://github.com/MaxwellDG/python-pygame",
        links: [],
        linkTexts: [],
        desc:
            "A videogame made in similar style to the classic 'The Legend of Zelda'. Defeat monsters, collect upgrades, and defeat the evil Mecha-Boss C++9000",
        video: "videos/Python_Vid.mp4",
        image: "images/pygame.png",
        languages: ["Python"],
        tech: ["PyGame", "Photoshop"],
    },
    {
        name: "WithWtvr",
        github: "https://github.com/MaxwellDG/WithWtvr",
        links: [],
        linkTexts: [],
        desc:
        '"Hey where do you want to go tonight?" "I\'m fine with whatever." An app designed to aid groups in decision-making. Utilizes Google Maps and Google Places APIs for extra suggestions.',
        video: "videos/video_ww_right_final.mp4",
        languages: ["Java", "Android SDK"],
        tech: ["Bluetooth", "Google Maps", "SQL"],
    },
];

export const enterpriseProjectData: Project[] = [
    {
        name: "Stache",
        links: ["https://app.stache.io/bazaar", "https://www.stache.io", "https://www.xnft.gg/app/DNUrvMF9ytAYNS66pbfcM9FrHHmJqghVeQKgbo9WU1KM"],
        linkTexts: ["Stache App", "Stache Intro", "Stache as xNFT"],
        desc:
            "A Solana blockchain infrastructure and application project. First we brought 'Smart Wallet' technology to Solana. Then we created the 'Stache' application to build on that. The current main attraction is the ability for users to make their own shops, thus decentralizing the currently centralized marketplace model.",
        image: "images/StacheApp.png",
        languages: ["Typescript", "React Native Web", "Node.js"],
        tech: ["Solana", "Nest", "Postgres", "Recoil"],
    },
    {
        name: "SMART Studio",
        links: [],
        linkTexts: [],
        desc:
            "Designed for medical companies to generate informative videos for their workers and patients. Utilizes Deepfake technology in order to quickly mass-produce video content of doctors speaking to patients in any language. AI support bots currently in development in order to generate deepfake videos in response to textual input.",
        video: "videos/smart-studio-ready.mp4",
        languages: ["Javascript", "React Native"],
        tech: ["GraphQL", "AWS", "Expo"],
    },
    {
        name: "The Bard's Quill",
        links: ["https://thebardsquill.com"],
        linkTexts: ["TheBardsQuill.com"],
        desc:
        "A virtual tabletop and campaign-management system for the 'Storytelling Role-Playing Game' genre. The Bard's Quill works as an aide for popular titles such as: 'Dungeons & Dragons' and 'Pathfinder'.",
        video: "videos/thebardsquill_cropped.mp4",
        image: "images/bardsquill.png",
        languages: ["Javascript", "Vue"],
        tech: ["WebRTC", "Konva.js", "IndexedDB"],
    },
    {
        name: "Luye",
        links: [],
        linkTexts: [],
        desc:
        "An offline-first Progressive Web App used by pharmaceutical sales reps during their meetings with health-care professionals. Utilizes ServiceWorkers and IndexedDB in order to persist data in offline-mode and sync it with the server when an internet connection is later established.",
        image: "images/Luye.png",
        languages: ["Typescript", "React Native Web"],
        tech: ["PWA", "IndexedDB"],
    },
    {
        name: "The Diabetes App",
        links: ["https://apps.apple.com/us/app/the-diabetes-app/id1522262547"],
        linkTexts: ["The Diabetes App on The App Store"],
        desc:
        "A social media app focused around people with diabetes. Users can make profiles, message each other, scroll the homefeed, there's app-wide video streaming events, and much more.",
        image: "images/tda.jpeg",
        languages: ["Javascript", "React Native"],
        tech: ["OAuth2", "Pusher", "Kevel"],
    },
    {
        name: "Lucky13 Tattoos",
        links: [],
        linkTexts: [],
        desc:
        "Website for the Toronto tattoo parlour. Static plus an e-commerce section.",
        video: "videos/lucky13.mp4",
        image: "images/lucky13.png",
        languages: ["Javascript", "React", "Node.js"],
        tech: ["Stripe", "MailGun", "AWS"],
    },
    {
        name: "CSA-Scraper",
        links: [],
        linkTexts: [],
        desc:
        "A scraper for a client who wanted to track the status of Canadian securities administrators. 'Scrapes' the Canadian Securities Administrators Registry and produces a .csv after comparisons are made.",
        video: "videos/CSA_Video.mp4",
        image: "images/csa_scraper.png",
        languages: ["Python"],
        tech: ["Selenium", "MS Excel"],
    },
];
