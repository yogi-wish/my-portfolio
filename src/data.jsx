import { nanoid } from 'nanoid';
import { FaDatabase, FaDocker, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React & Next',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'NodeJs',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Node.js,familiarity with asynchronous programming, RESTful APIs, and database integration using libraries like Mongoose or Sequelize.Worked on server-side rendering and serverless architecture with Node.js.',
  },
  {
    id: nanoid(),
    title: 'MongoDB and SQL',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: "Experienced in designing and implementing database schemas, querying data, and optimizing database performance. Familiarity with MongoDB's document-based model and SQL's relational database concepts. Worked on complex data models, data migration, and database administration tasks and ORM's.",
  },
  {
    id: nanoid(),
    title: 'Docker',
    icon: <FaDocker className='h-16 w-16 text-emerald-500' />,
    text: "Familiar with Docker containerization, experienced in creating Docker images, managing containers, and using Docker Compose for multi-container applications. Orchestration with Kubernates cluster.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://split-app.netlify.app/',
    github:'',
    title: 'Split Bill',
    text: 'App build with React, This app used to split bills between friend. You can also add more friend into your list and also remove from list.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://omeletto.netlify.app',
    github: '',
    title: 'Omletto App',
    text: 'A application exposed using a RESTful API made with Node.js and frontend design using ReactJS and the state management with Redux-toolkit.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://cinephile-app.netlify.app/',
    github: '',
    title: 'Cinephile App',
    text: 'A full stack app for movie-buff people to list out movies on a simple search. You can add movies into your watch list as cache and also rate the movie.',
  },
];
