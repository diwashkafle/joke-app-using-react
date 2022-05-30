import React from 'react';

const Randomjokes = (props) => {
  return (
    <div className=' flex flex-col bg-[rgb(245,206,0)] h-[250px] w-[450px] rounded-lg my-5'>
        <div className='h-[200px]'>
            <h1 className=' text-black m-3 text-center text-xl'>{props.joke}</h1>
</div>
       
      
    </div>
  )
}

export default Randomjokes