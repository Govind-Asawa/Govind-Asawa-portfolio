import { EXPERIENCES } from '../constants';

export default function Experience() {
  return (
    <section
      className='section-padding bg-black text-white border-b border-neutral-900'
      id='experience'
    >
      <div className='px-2 md:px-10'>
        <h2 className='capitalize text-2xl text-center mb-20'>Experience</h2>
        <div>
          {EXPERIENCES.map((exp, idx) => {
            return (
              <div key={idx} className='mb-8 flex flex-wrap md:justify-center'>
                <div className='w-full md:w-1/4'>
                  <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
                </div>
                <div className='w-full max-w-xl md:w-3/4'>
                  <h6 className='capitalize mb-2 font-semibold'>
                    {exp.role} -
                    <span className='ml-1 text-sm text-purple-200'>
                      {exp.company}
                    </span>
                    <span className='ml-1 text-sm text-gray-600'>
                      | {exp.location}
                    </span>
                  </h6>
                  <p className='mb-4 text-gray-400'>{exp.description}</p>
                  <div className='flex flex-wrap gap-1'>
                    {exp.technologies.map((tech, i) => {
                      return (
                        <span
                          key={i}
                          className='capitalize rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
