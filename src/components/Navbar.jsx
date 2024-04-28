import { links } from '../data';
import resume from '../assets/Yogesh-FullStack.pdf'

const Navbar = () => {

  const handleDownload = () => {
    const url = resume;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Yogesh-resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <nav className='bg-emerald-100'>
      <div className='align-element py-4 flex flex-col justify-between sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        {/* <h2 className='text-3xl font-bold'>
          Web<span className='text-emerald-600'>Dev</span>
        </h2> */}
        <img src="/logo2.png" alt="" height={64} width={100} />
        <div className='flex gap-x-8'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
        <button className='bg-emerald-700 hover:bg-emerald-500 text-white rounded-full font-bold py-2 px-4 inline-flex items-center' onClick={handleDownload}>Download Resume</button>
      </div>
    </nav>
  );
};
export default Navbar;
