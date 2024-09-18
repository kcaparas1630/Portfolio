import SkillSetTypes from '../Types/SkillSetTypes';
import reactBlack from '../Assets/react/react-black.png';
import reactWhite from '../Assets/react/react-white.png';
import typeScriptBlack from '../Assets/typeScript/typescript-black.png';
import typeScriptWhite from '../Assets/typeScript/typeScript-white.png';
import CBlack from '../Assets/C/c-black.png';
import CWhite from '../Assets/C/c-white.png';
import UnityBlack from '../Assets/Unity/unity-black.png';
import UnityWhite from '../Assets/Unity/unity-white.png';
import AWSBlack from '../Assets/AWS/aws-black.png';
import AWSWhite from '../Assets/AWS/aws-white.png';
import DockerBlack from '../Assets/Docker/docker-black.png';
import DockerWhite from '../Assets/Docker/docker-white.png';
import SwiftBlack from '../Assets/Swift/swift-black.png';
import SwiftWhite from '../Assets/Swift/swift-white.png';
import SQLBlack from '../Assets/SQL/sql-black.png';
import SQLWhite from '../Assets/SQL/sql-white.png';
import PythonBlack from '../Assets/Python/python-black.png';
import PythonWhite from '../Assets/Python/python-white.png';

const SkillSetArray = (isDarkMode: boolean): SkillSetTypes[] => [
  {
    id: 0,
    skillImage: isDarkMode ? reactWhite : reactBlack,
    skillText: 'React',
    skillAltImg: 'React-logo',
    skillDesc:
      'React is what I`ve learnt in my college days at Camosun College. I wouldn`t say I could perfectly code with it even with my eyes closed, and talk to you about the process of the component getting mounted and unmounted throughout my code. But I know the fundamentals and the basics of React, and I`ll be happy to talk to you in detail regarding that. I would be happy talking about React, and ask question more in detail so I could gain more understanding and knowledge.',
  },
  {
    id: 1,
    skillImage: isDarkMode ? typeScriptWhite : typeScriptBlack,
    skillText: 'TypeScript',
    skillAltImg: 'TypeScript-logo',
    skillDesc:
      'I`ve only learnt TypeScript when I started my Capstone Project in the BC Government. Our project then was Better Berries, which is a replica of a workflow of the original NMP Calculator of the BC Government`s Sustainment Team. It took me a while to get used to adding types to variables, returns, and even props that I`m passing from parent component. It made the code tight, understandable for other developers. Which is a great innovation after JavaScript. I`ve been using JavaScript since my college days, but I`m glad that I was introduced to TypeScript. I`ve known the fundamentals and basics of TypeScript, but I would love to know more about the configurations of tsconfig, since I do get some errors once in a while with jsx compilers. However, contact me if you want to chat with me. My social medias are available in the homepage!',
  },
  {
    id: 2,
    skillImage: isDarkMode ? CWhite : CBlack,
    skillText: 'C / C++ / C#',
    skillAltImg: 'C-logo',
    skillDesc:
      'C language are fun times, I have good and bad memories with it. I learnt C++ and C# back in my home country around year 2017. I`ve created multiple systems before with the help of my professors, such as library management system, login and register using C#, and many more. Although, since I`ve migrated here from Canada, my work back in Philippines is lost, but the knowledge gained is still here. Although, I was able to refreshed my knowledge my C++ and C# understanding in my college days in Camosun. C++ was the bad memories in my second year. Data Structures? That was a pain. But it was worth it. I was able to create a tetromino as part of my laboratory activities, and game development for C#!.',
  },
  {
    id: 3,
    skillImage: isDarkMode ? UnityWhite : UnityBlack,
    skillText: 'Unity',
    skillAltImg: 'Unity-logo',
    skillDesc:
      'My boy, my pride, and my other option besides being a full-stack web developer. I learnt Unity as part of my course in my Information and Computer Systems program in Camosun College. Here, I was able to learn about Coroutines, Lightings, Assets Management, creating my own assets through Blender, Laying out the storyline, Combat, Character movements, and Physics which wasn`t fun honestly, but it`s part of it. In the end of my semester in my game development course, I`ve created a game called <strong>Escape from the Abyss</strong>, which is a heavily-extensive storytelling game, where you have to collect 6 keys to escape the dungeon. There is traps, and lastly, a boss fight in the end. The only thing I wanted to learn in the end was state management, where I can save and load my progress, or use it as a checkpoint to respawn if I die in the game. Feel free to contact me if you want to make a game with me!',
  },
  {
    id: 4,
    skillImage: isDarkMode ? AWSWhite : AWSBlack,
    skillText: 'AWS',
    skillAltImg: 'AWS-logo',
    skillDesc: 'I`ve learnt AWS during my first semester of my second year in camosun college. We we`re using React, and AWS` tools such as EC2, Lambda for functions to fetch data from API Gateway. As part of our last laboratory activities, we were tasked to create a wordle, which lets you guess words and figure out the hidden word. I`ve used, Cognito for Authorization/Authentication, Lambda for functions, API Gateway for get and post methods, and S3 for static hosting. However, the AWS that we have is a sandbox prepared by our professor, so any tools used in the process were already terminated. However, I would be able to build it again, if I wouldn`t incur any costs. I`m broke atm.',
  },
  {
    id: 5,
    skillImage: isDarkMode ? DockerWhite : DockerBlack,
    skillText: 'Docker',
    skillAltImg: 'Docker-logo',
    skillDesc: 'Docker is something I`ve learnt in my Capstone Project, we implemented it in Better Berries, so that we can orchestrate a communication between, frontend, backend, and our Postgres database, locally. With the help of a DevOps Engineer, we we`re able to create a docker-compose.yml, Dockerfiles, and deploy it into OpenShift Kubernetes. However, those work weren`t all ours as we we`re helped by someone. But I would like to gain more experience with Docker, so I`m planning to dig deeper on that on my future projects.',
  },
  {
    id: 6,
    skillImage: isDarkMode ? SwiftWhite : SwiftBlack,
    skillText: 'Swift',
    skillAltImg: 'Swift-logo',
    skillDesc: 'I`ve learnt Swift as part of my second year in Camosun College, we tackled Augmented Reality, and the basics of Swift. As part of the course, we we`re tasked to create a Treasure Hunting Game using the knowledge that we`ve gained in the course.',
  },
  {
    id: 7,
    skillImage: isDarkMode ? SQLWhite : SQLBlack,
    skillText: 'SQL',
    skillAltImg: 'SQL-logo',
    skillDesc: 'SQL is a part of the course in my Information and Computer Systems program in Camosun College. In my first year, we we`re dealing it on a Developer`s perspective, the basics, normalizations, and even creating chart data using the data from the database. On our second year, we are thinking in a database administrator`s perspective. I`ve gained experience in user management, maintaining, securing, and operating databases to ensure that data is properly stored and retrieved.',
  },
  {
    id: 8,
    skillImage: isDarkMode ? PythonWhite : PythonBlack,
    skillText: 'Python',
    skillAltImg: 'Python-logo',
    skillDesc: 'Python is part of our second year course in Camosun College. I was able to create Treasure hunting board game in Python, and also used Python Django for Web Development.',
  },
];

export default SkillSetArray;
