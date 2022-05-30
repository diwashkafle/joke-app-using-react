import react,{useState,useEffect} from 'react';
import {MdDashboardCustomize} from 'react-icons/md';
import {FaRandom} from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Randomjokes from './components/Randomjokes';



function App() {
  const [bool, setBool] = useState(true);
  const [apijoke,setApiJoke] = useState("");
  const [displayingjoke,setDisplayingjoke] = useState("just click on random jokes");
  const [justforRandom,setJustforRandom] = useState(0);

  const RandombtnHandler = ()=>{
    setBool("random");
    setDisplayingjoke(apijoke);
    setJustforRandom(prev=>prev+1);
  };

  useEffect(()=>{
    const fetchJokes = async ()=>{
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
      const jokes = await response.json();
      const {joke} = jokes;
      console.log(jokes)
      setApiJoke(joke);
    }
    fetchJokes();
  },[justforRandom]);

  return (
    <div>
     <header>
       <div className='my-10'>
     <svg width="300" height="40" viewBox="0 0 424 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.464 73.152C16.408 73.152 12.408 72.416 9.464 70.944C6.584 69.408 3.736 67.04 0.92 63.84L8.888 55.68C10.808 58.24 12.632 60.032 14.36 61.056C16.152 62.08 18.392 62.592 21.08 62.592C25.176 62.592 28.248 61.696 30.296 59.904C32.408 58.048 33.464 55.36 33.464 51.84V4.8H47V51.84C47 58.88 44.824 64.192 40.472 67.776C36.184 71.36 29.848 73.152 21.464 73.152ZM77.7748 73.152C71.1188 73.152 65.9988 71.616 62.4148 68.544C58.8308 65.472 57.0388 61.088 57.0388 55.392V43.488C57.0388 37.792 58.8308 33.408 62.4148 30.336C65.9988 27.264 71.1188 25.728 77.7748 25.728C84.4308 25.728 89.5508 27.264 93.1348 30.336C96.7188 33.408 98.5108 37.792 98.5108 43.488V55.392C98.5108 61.088 96.7188 65.472 93.1348 68.544C89.5508 71.616 84.4308 73.152 77.7748 73.152ZM77.7748 63.552C80.3988 63.552 82.4148 62.848 83.8228 61.44C85.2948 60.032 86.0308 58.016 86.0308 55.392V43.488C86.0308 40.864 85.2948 38.848 83.8228 37.44C82.4148 36.032 80.3988 35.328 77.7748 35.328C75.1508 35.328 73.1028 36.032 71.6308 37.44C70.2228 38.848 69.5188 40.864 69.5188 43.488V55.392C69.5188 58.016 70.2228 60.032 71.6308 61.44C73.1028 62.848 75.1508 63.552 77.7748 63.552ZM152.146 72H139.378L135.154 56.832C134.642 55.04 133.874 53.728 132.85 52.896C131.826 52 130.098 51.424 127.666 51.168L121.426 57.504V72H108.946V15.072C108.946 13.344 108.594 11.936 107.89 10.848C107.25 9.76 106.066 8.576 104.338 7.296L112.69 -5.72205e-06C115.954 1.664 118.226 3.584 119.506 5.75999C120.786 7.872 121.426 10.848 121.426 14.688V42.336L136.402 26.88H151.57L136.306 42.336C139.378 43.104 141.746 44.608 143.41 46.848C145.138 49.088 146.642 52.416 147.922 56.832L152.146 72ZM178.277 63.744C180.645 63.744 182.565 63.456 184.037 62.88C185.509 62.24 187.109 61.152 188.837 59.616L196.229 66.336C192.517 70.88 186.533 73.152 178.277 73.152C170.917 73.152 165.605 71.776 162.341 69.024C159.077 66.208 157.445 61.664 157.445 55.392V41.664C157.445 36.736 159.205 32.864 162.725 30.048C166.309 27.168 171.173 25.728 177.317 25.728C183.653 25.728 188.613 27.264 192.197 30.336C195.781 33.344 197.573 37.76 197.573 43.584C197.573 46.4 197.317 48.576 196.805 50.112C196.357 51.648 195.429 52.8 194.021 53.568C192.613 54.272 190.565 54.624 187.877 54.624H169.829V55.488C169.829 60.992 172.645 63.744 178.277 63.744ZM177.317 35.136C174.949 35.136 173.093 35.84 171.749 37.248C170.469 38.592 169.829 40.384 169.829 42.624V46.08H180.773C182.437 46.08 183.589 45.824 184.229 45.312C184.869 44.8 185.189 43.904 185.189 42.624C185.189 40.192 184.517 38.336 183.173 37.056C181.829 35.776 179.877 35.136 177.317 35.136Z" fill="#F5CE00"/>
<path d="M235.535 4.8H249.071V33.024H275.183V4.8H288.719V72H275.183V43.584H249.071V72H235.535V4.8ZM329.196 73.248C320.428 73.248 313.804 71.392 309.324 67.68C304.844 63.904 302.604 58.688 302.604 52.032V4.8H316.14V52.032C316.14 59.136 320.492 62.688 329.196 62.688C337.9 62.688 342.252 59.136 342.252 52.032V4.8H355.788V52.032C355.788 58.688 353.548 63.904 349.068 67.68C344.588 71.392 337.964 73.248 329.196 73.248ZM369.691 4.8H399.259C406.299 4.8 411.675 6.336 415.387 9.408C419.163 12.48 421.051 16.928 421.051 22.752C421.051 25.952 420.091 28.832 418.171 31.392C416.251 33.952 413.467 35.712 409.819 36.672C413.787 37.44 416.987 39.296 419.419 42.24C421.851 45.12 423.067 48.896 423.067 53.568C423.067 59.264 421.051 63.776 417.019 67.104C413.051 70.368 407.611 72 400.699 72H369.691V4.8ZM398.971 31.872C401.531 31.872 403.579 31.136 405.115 29.664C406.715 28.128 407.515 26.112 407.515 23.616C407.515 21.12 406.715 19.136 405.115 17.664C403.579 16.128 401.531 15.36 398.971 15.36H383.227V31.872H398.971ZM397.819 61.44C401.787 61.44 404.731 60.672 406.651 59.136C408.571 57.536 409.531 55.136 409.531 51.936C409.531 48.736 408.571 46.368 406.651 44.832C404.731 43.232 401.787 42.432 397.819 42.432H383.227V61.44H397.819Z" fill="white"/>
</svg></div>
     </header>
     <div className='text-white text-center'>
 <h2> Hey you! how you doing ? Never mind I really don't care.</h2>
 <h1>Hahaha !!! ok I know, wasn't that funny.</h1>
 <h1>Good jokes available down there;</h1>
     </div>
     <div className='flex flex-col items-center my-5'>
     <h2 className='text-[#F5CE00] text-5xl font-bold '>Jokes</h2>
    <div className='h-1 w-[120px] my-3 relative left-[25px] bg-[white] '></div>
    <div className='flex flex-col justify-center space-y-5'>
     <div className='flex justify-center -mt-10 space-x-20'>
      <div>
      <FaRandom color='white' onClick={RandombtnHandler} className="h-[200px] w-[50px]  cursor-pointer"/>
      <p className='-mt-16 -ml-5 text-[#F5CE00] text-[12px]'>Random Jokes</p>
      </div>
      </div>
  
        <Randomjokes
        joke={displayingjoke}
        btnHandler={RandombtnHandler}
        key={uuidv4()}/>
      
    </div>
    
     </div>
    </div>
  );
}

export default App;