import React from 'react'

const Skills = () => {
  return (
    <section className='bg-zinc-950 text-white px-8 py-20'>
        <h2 className='text-4xl font-bold mb-10'>My Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
           
            <div className='bg-black p-6 rounded-lg border border-zinc-800'>
                <h3 className='text-xl font-bold text-red-500 mb-3'>React</h3>
                <p className='text-gray-400'>Building clean frontend UI components.</p>
            </div>

            <div className='bg-black p-6 rounded-lg border border-zinc-800'>
                <h3 className='text-xl font-bold text-red-500 mb-3'>Java</h3>
                <p className='text-gray-400'>OOP, collections, and backend basics.</p>
            </div>

            <div className='bg-black p-6 rounded-lg border border-zinc-800'>
                <h3 className='text-xl font-bold text-red-500 mb-3'>Python</h3>
                <p className='text-gray-400'>Problem solving and AI/ML learning</p>
            </div>

            <div className='bg-black p-6 rounded-lg border border-zinc-800'>
                <h3 className='text-xl font-bold text-red-500 mb-3'>Machine Learning</h3>
                <p className='text-gray-400'>Learning NumPy, Pandas, and ML basics.</p>
            </div>
        </div>
    </section>
  )
}

export default Skills