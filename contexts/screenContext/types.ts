import { enterpriseProjectData, hobbyProjectData, opensourceData } from "../../data/projectData";
import skillsData from "../../data/skillsData";

export enum SCREEN_TYPE {
    SKILLS = 'Skills',
    HOBBY = 'Hobby Projects',
    ENTERPRISE = 'Enterprise Projects',
    OPENSOURCE = "Open-source"
}

export const PROJECT_DATASETS = {
    [SCREEN_TYPE.SKILLS]: skillsData,
    [SCREEN_TYPE.HOBBY]: hobbyProjectData,
    [SCREEN_TYPE.ENTERPRISE]: enterpriseProjectData,
    [SCREEN_TYPE.OPENSOURCE]: opensourceData,
};