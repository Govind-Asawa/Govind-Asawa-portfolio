import { IoCodeSlashOutline } from "react-icons/io5";
import { CiServer } from "react-icons/ci";
import { PiDatabaseThin } from "react-icons/pi";
import { CiGrid42 } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";

import eventique from '../assets/Eventique_project.png';
import car_accident from '../assets/us_car_accident.png';
import natours from '../assets/Natours.png';

const skillIconClass = 'w-6 h-6 md:w-8 md:h-8'

export const SKILLS = [
  {
    category: 'languages',
    icon: <IoCodeSlashOutline className={skillIconClass}/>,
    values: ['java', 'python', 'javascript']
  },
  {
    category: 'backend',
    icon: <CiServer className={skillIconClass}/>,
    values: ['spring boot', 'microservices', 'nodejs', 'expressjs', 'REST API', 'MVC']
  },
  {
    category: 'databases',
    icon: <PiDatabaseThin className={skillIconClass}/>,
    values: ['mySql', 'postgres', 'mongoDB', 'redis']
  },
  {
    category: 'frontend',
    icon: <CiGrid42 className={skillIconClass}/>,
    values: ['reactjs','tailwind CSS', 'jquery', 'CSS3', 'html']
  },
  {
    category: 'tools & methodologies',
    icon: <VscTools className={skillIconClass}/>,
    values: ['git', 'jira', 'agile', 'vscode', 'eclipse', 'postman']
  },
  
]

export const EXPERIENCES = [
  {
    year: 'Aug 2024 - Present',
    role: 'Software Engineer Intern',
    company: 'Copart Inc.',
    location: 'Dallas, TX',
    description: `Working on B2B seller integrations with majority of my work revolving around building 
    microservices, integrating forecasting models to reduce service level disagreements, optimizing redis storage, etc to mention a few`,
    technologies: [
      'Microservices',
      'Spring Boot',
      'Postgres/MariaDB',
      'Machine learning',
      'Python',
      'Java',
      'REST API'
    ]
  },
  {
    year: 'Oct 2022 - Aug 2023',
    role: 'Software Engineer',
    company: 'Opentext Technologies',
    location: 'India',
    description: `Enhanced Content Hub for Publishers - a distributed web application by fixing 200+ bugs & adding 15+ new features over 2 years, 
    contributing towards 133% revenue bump. Added ability to import assets from multiple vendors using Java, Javascript and third-party APIs, 
    improving customer satisfaction by 15% (based on issue's priority).`,
    technologies: [
      'Javascript',
      'Java',
      'Solr',
      'AWS',
      'HTML/CSS',
      'Shell scripting',
    ],
  },
  {
    year: 'Jan 2021 - Sept 2022',
    role: 'Associate Software engineer',
    company: 'Opentext Technologies',
    location: 'India',
    description: `Worked closely with security and testing teams to ensure successful product release & documentation.
    Resolved 30+ security vulnerabilities and led end-to-end implementation of password encryption feature using Bash and Java, 
    strengthening password security by 70%. `,
    technologies: ['Javascript', 'Java', 'HTML/CSS', 'Shell scripting'],
  },
  {
    year: 'Oct 2020 - Dec 2020',
    role: 'Software Engineer Intern',
    company: 'Opentext Technologies',
    location: 'India',
    description: `Built a Java solution to parse an XML files and store relevant data as CSV, automating ~80% of the process.`,
    technologies: ['Java'],
  },
];

export const PROJECTS = [
  {
    title: 'Eventique - AI enhanced event planning',
    image: eventique,
    gitlink: `https://github.com/Govind-Asawa/eventique`,
    description: `A full-stack web application that leverages Large Language model (LLM) service to generate plans for an event. Integrated calendar to visualize user's tasks for an event generated by LLM.`,
    technologies: [
      'React.js',
      'tailwindCSS',
      'Django',
      'Gemini-pro',
      'postgreSql',
      'GCP',
      'CI/CD',
    ],
  },
  {
    title: 'US car accidents',
    image: car_accident,
    gitlink: `https://github.com/Govind-Asawa/US_Car_Accidents`,
    description:
      'Churned 7.7 million records, achieving 87% accuracy in predicting the severity level of car accidents in the USA by analyzing various factors contributing to the accidents, such as weather conditions, road features (like road crossings, junctions, signals), time and location, etc.',
    technologies: ['python', 'Data Analysis', 'Machine Learning'],
  },
  {
    title: 'Natours - Book your tour',
    image: natours,
    gitlink: `https://github.com/Govind-Asawa/natours-app`,
    description:
      'A Web-app for users to browse through available tour packages, view and book tours using secure payment method.',
    technologies: [
      'Node.js',
      'express.js',
      'HTML',
      'CSS',
      'javascript',
      'pug',
      'MongoDB',
    ],
  },
];
