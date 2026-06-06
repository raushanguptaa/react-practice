import React from 'react'

const Projects = () => {
  return (
    <section className='bg-black text-white px-8 py-20'>
        <h2 className='text-4xl font-bold mb-10'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-zinc-900 rounded-lg p-6 mb-4'>
                <h3 className='text-2xl font-bold text-red-500 mb-3'>Expense Tracker</h3>
                <p className='text-gray-400 mb-3'>A full-stack expense tracking application built using Rect, Spring Boot, and MySQL.</p>

                <button className='bg-red-500 px-4 py-2 rounded-xl hover:bg-red-700 font-semibold'>View Project</button>
            </div>

             <div className='bg-zinc-900 rounded-lg p-6 mb-4'>
                <h3 className='text-2xl font-bold text-red-500 mb-3'>Image Text Detection</h3>
                <p className='text-gray-400 mb-3'>Detects text from images using Python, OPenCV, and EasyOCR.</p>

                <button className='bg-red-500 px-4 py-2 rounded-xl hover:bg-red-700 font-semibold'>View Project</button>
            </div>            
        </div>
    </section>
  )
}

export default Projects