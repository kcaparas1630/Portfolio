import ProjectTypes from '../Types/ProjectsTypes';
import BetterBerriesPage from '../Assets/BetterBerries-LandingPage.png';
import CamosunSymposiumPage from '../Assets/camosun-symposium-website.png';
import Colliseum from '../Assets/Colliseum.png';
import EscapeIntoAbyss from '../Assets/EscapeIntoAbyss.png';
import TaskCLI from '../Assets/CLI-SAMPLE.png';
import PawCity from '../Assets/PawCity.png';

const ProjectArray = (): ProjectTypes[] => [
  {
    id: 0,
    projectImage: BetterBerriesPage,
    projectImageAlt: 'Better Berries Landing Page',
    projectName: 'Better Berries',
    projectDescription:
      'A replacement prototype for the Nutrient Management Calculator App that helps farmers calculate their nutrients efficiently. Thus avoiding wastage of nutrients.',
    projectLink: 'https://better-berries.web.app/',
    projectGithubLink: 'https://github.com/kcaparas1630/Better-Berries-2024',
  },
  {
    id: 1,
    projectImage: CamosunSymposiumPage,
    projectImageAlt: 'Camosun Symposium',
    projectName: 'Camosun Symposium Website',
    projectDescription:
      'Website for our Symposium Event at Camosun College, where we showcased our skills in our career. All of the teams, and the projects are included in here. The repository is private, so I cannot share it here.',
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
    projectLink: 'https://play.unity.com/en/games/017683cc-cc43-40a8-aa17-83f27021b99c/escape-into-the-abyss',
    projectGithubLink: 'https://github.com/kcaparas1630/FinalProject',
  },
  {
    id: 4,
    projectImage: TaskCLI,
    projectImageAlt: 'Task CLI',
    projectName: 'Task CLI',
    projectDescription: 'Side project that I worked on using typescript and NODE.JS. Typescript is not compatible with NODE.JS so I have to install typescript globally and transform my ts files into js using the command `tsc fileName`',
    projectGithubLink: 'https://github.com/kcaparas1630/task-cli',
  },
  {
    id: 5,
    projectImage: PawCity,
    projectImageAlt: 'PawCity Homepage',
    projectName: 'PawCity',
    projectDescription: 'PawCity is a website that I created for a beginner hackathon. It is currently under development, and I will update it as time goes on. It is a website that allows your dog to find their furry soulmate, it works like tinder, but for dogs.',
    projectLink: 'https://pawcity.web.app/',
    projectGithubLink: 'https://github.com/kcaparas1630/pawcity',
  },
];

export default ProjectArray;
