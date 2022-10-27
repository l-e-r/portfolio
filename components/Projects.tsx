import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[]
}

export const Projects = ({ projects }: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F70AA8]/40">
          {projects?.map((project, idx) => (
            <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                className="rounded-lg w-[400px] h-[200px] object-center bg-white p-5"
                src={urlFor(project?.projectImage).url()}
                alt=""
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  {project?.title}
                </h4>
                <div className="flex space-x-2 my-2 justify-center">
                  {project?.technologies?.map(technology => (
                      <img
                          key={technology._id}
                          className="h-10 w-10 rounded-full"
                          src={urlFor(technology.skillImage).url()}
                      />
                  ))}
                </div>
                <p className="text-lg text-center md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F70AA8]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}