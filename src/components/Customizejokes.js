import React from 'react';
import {GrNext} from 'react-icons/gr';

const Customizejokes = (props) => {
  return (
    <div className=' flex flex-col bg-[rgb(245,206,0)] h-[250px] w-[450px] rounded-lg my-5'>
        <div className='h-[200px]'>
            <h1 className=' text-black m-3 text-center text-xl'>{props.joke}</h1>
</div>
       
       <button className='place-self-end relative m-2' onClick={()=>props.btnHandler()}><GrNext size={30} color="black"/></button>
    </div>
  )
}

export default Customizejokes