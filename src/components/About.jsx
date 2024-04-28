import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I'm a passionate software developer with 2+ years of experience in a variety of technologies and frameworks. My journey in the world of software development begans from March 2022 with Javascript fun. Since then, I've been involved in numerous projects where I've honed my skills in React, Node.js, MongoDB, SQL.
            <br />
            I thrive in dynamic environments where I can apply my problem-solving skills to create innovative solutions. Whether it's developing robust web applications or optimizing database performance, I enjoy the challenges that come with being a developer.
            <br />
            When I'm not coding, mostly I explore articles on Medium, and documentation reading related to new technologies. Sometimes watching lectures on Udemy for new feature implementation.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
