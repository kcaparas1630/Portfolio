import SkillSetTypes from '../Types/SkillSetTypes';
import reactBlack from '../Assets/react/react-black.png';
import typeScriptBlack from '../Assets/typeScript/typescript-black.png';
import CBlack from '../Assets/C/c-black.png';
import UnityBlack from '../Assets/Unity/unity-black.png';
import AWSBlack from '../Assets/AWS/aws-black.png';
import DockerBlack from '../Assets/Docker/docker-black.png';
import SwiftBlack from '../Assets/Swift/swift-black.png';
import SQLBlack from '../Assets/SQL/sql-black.png';
import PythonBlack from '../Assets/Python/python-black.png';

const SkillSetArray = (): SkillSetTypes[] => [
  {
    id: 0,
    skillImage: reactBlack,
    skillText: 'React',
    skillAltImg: 'React-logo',
  },
  {
    id: 1,
    skillImage: typeScriptBlack,
    skillText: 'TypeScript',
    skillAltImg: 'TypeScript-logo',
  },
  {
    id: 2,
    skillImage: CBlack,
    skillText: 'C / C++ / C#',
    skillAltImg: 'C-logo',
  },
  {
    id: 3,
    skillImage: UnityBlack,
    skillText: 'Unity',
    skillAltImg: 'Unity-logo',
  },
  {
    id: 4,
    skillImage: AWSBlack,
    skillText: 'AWS',
    skillAltImg: 'AWS-logo',
  },
  {
    id: 5,
    skillImage: DockerBlack,
    skillText: 'Docker',
    skillAltImg: 'Docker-logo',
  },
  {
    id: 6,
    skillImage: SwiftBlack,
    skillText: 'Swift',
    skillAltImg: 'Swift-logo',
  },
  {
    id: 7,
    skillImage: SQLBlack,
    skillText: 'SQL',
    skillAltImg: 'SQL-logo',
  },
  {
    id: 8,
    skillImage: PythonBlack,
    skillText: 'Python',
    skillAltImg: 'Python-logo',
  },
];

export default SkillSetArray;
