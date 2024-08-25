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
  },
  {
    id: 1,
    skillImage: isDarkMode ? typeScriptWhite : typeScriptBlack,
    skillText: 'TypeScript',
    skillAltImg: 'TypeScript-logo',
  },
  {
    id: 2,
    skillImage: isDarkMode ? CWhite : CBlack,
    skillText: 'C / C++ / C#',
    skillAltImg: 'C-logo',
  },
  {
    id: 3,
    skillImage: isDarkMode ? UnityWhite : UnityBlack,
    skillText: 'Unity',
    skillAltImg: 'Unity-logo',
  },
  {
    id: 4,
    skillImage: isDarkMode ? AWSWhite : AWSBlack,
    skillText: 'AWS',
    skillAltImg: 'AWS-logo',
  },
  {
    id: 5,
    skillImage: isDarkMode ? DockerWhite : DockerBlack,
    skillText: 'Docker',
    skillAltImg: 'Docker-logo',
  },
  {
    id: 6,
    skillImage: isDarkMode ? SwiftWhite : SwiftBlack,
    skillText: 'Swift',
    skillAltImg: 'Swift-logo',
  },
  {
    id: 7,
    skillImage: isDarkMode ? SQLWhite : SQLBlack,
    skillText: 'SQL',
    skillAltImg: 'SQL-logo',
  },
  {
    id: 8,
    skillImage: isDarkMode ? PythonWhite : PythonBlack,
    skillText: 'Python',
    skillAltImg: 'Python-logo',
  },
];

export default SkillSetArray;
