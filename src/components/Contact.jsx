import React from 'react'

const Contact = () => {
  return (
    <section className='bg-zinc-950 text-white px-8 py-20'>
        <h2 className='text-4xl font-bold mb-6'>Contact Me</h2>
        <p className='text-gray-400 max-w-2xl mb-8'>
            I am always open to learning, collaboration, and project opportunities. Feel free to contact me.
        </p>

        <div className='space-y-4'>
            <p>
                <span className='text-red-500 font'>Email:</span>
                {" "}nicodevilfruit@gmail.com
            </p>

            <p>
                <span className='text-red-500 font'>GitHub:</span>
                {" "}github.com/nicochan
            </p>

            
            <p >
                <span className='text-red-500 font-semibold'>LinkedIn:</span>
                {" "}linkedin.com/in/nicochan
            </p>
        </div>
    </section>
  )
}

export default Contact