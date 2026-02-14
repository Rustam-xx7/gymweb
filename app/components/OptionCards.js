import React from 'react'

const OptionCards = ({ text, num }) => {
  const numStyle = {
    color: 'transparent',
    WebkitTextStroke: '1px rgb(255, 255, 255 , 0.5)',
  }

  return (
    <div className='h-50 min-w-80 p-6 bg-white/10 text-white flex flex-col justify-around items-start rounded-xl'>
        <span className='text-2xl font-semibold w-[50%] h-fit'>{text}</span>
        <span className='text-5xl font-bold w-[50%] h-fit' style={numStyle}>{num}</span>
      
    </div>
  )
}

export default OptionCards
