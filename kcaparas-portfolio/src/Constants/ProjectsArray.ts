import ProjectTypes from '../Types/ProjectsTypes';
import BetterBerriesPage from '../Assets/BetterBerries-LandingPage.png';

const ProjectArray = (): ProjectTypes[] => [
  {
    id: 0,
    projectImage: BetterBerriesPage,
    projectImageAlt: 'Better Berries Landing Page',
    projectName: 'Better Berries',
    projectDescription:
      'A replacement prototype for the Nutrient Management Calculator App that helps farmers calculate their nutrients efficiently. Thus avoiding wastage of nutrients.',
  },
];

export default ProjectArray;
