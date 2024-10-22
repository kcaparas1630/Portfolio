import ProjectTypes from '../Types/ProjectsTypes';
import BetterBerriesPage from '../Assets/BetterBerries-LandingPage.png';
import CamosunSymposiumPage from '../Assets/camosun-symposium-website.png';
import Colliseum from '../Assets/Colliseum.png';
import EscapeIntoAbyss from '../Assets/EscapeIntoAbyss.png';
import TaskCLI from '../Assets/CLI-SAMPLE.png';

const ProjectArray = (): ProjectTypes[] => [
  {
    id: 0,
    projectImage: BetterBerriesPage,
    projectImageAlt: 'Better Berries Landing Page',
    projectName: 'Better Berries',
    projectDescription:
      'A replacement prototype for the Nutrient Management Calculator App that helps farmers calculate their nutrients efficiently. Thus avoiding wastage of nutrients.',
  },
  {
    id: 1,
    projectImage: CamosunSymposiumPage,
    projectImageAlt: 'Camosun Symposium',
    projectName: 'Camosun Symposium Website',
    projectDescription:
      'Website for our Symposium Event at Camosun College, where we showcased our skills in our career. All of the teams, and the projects are included in here.',
  },
  {
    id: 2,
    projectImage: Colliseum,
    projectImageAlt: 'Colliseum Blender',
    projectName: 'Colliseum Blender',
    projectDescription:
      'It`s a side-project that I`ve worked on while learning Unreal Engine. I`ve followed a youtube guide to create this, and managed to create it with what I know in Blender.',
  },
  {
    id: 3,
    projectImage: EscapeIntoAbyss,
    projectImageAlt: 'Escape into the Abyss Game',
    projectName: 'Escape into the Abyss',
    projectDescription:
      'Our project in Camosun College`s Game Development Course. It is a heavy story-line based game, where you collect 6 keys, finish the puzzle, avoid traps, and fight the last boss.',
  },
  {
    id: 4,
    projectImage: TaskCLI,
    projectImageAlt: 'Task CLI',
    projectName: 'Task CLI',
    projectDescription: 'Side project that I worked on using typescript and NODE.JS. Typescript is not compatible with NODE.JS so I have to install typescript globally and transform my ts files into js using the command `tsc fileName`',
  },
];

export default ProjectArray;
