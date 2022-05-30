import {motion} from 'framer-motion';
import { useState } from 'react';
import './App.css';

function App() {
 const [open,setOpen] = useState(false);
 const clickHandler = () =>{
   setOpen(!open);
 }
  // console.log(open);
  return (
    <div className="App">
      <motion.div layout transition={{layout:{
        duration : 1,type:'spring'
      }}} style={{borderRadius:"1rem",boxShadow:"0px 10px 30px rgba(0.0.0.0.5)"}} onClick={clickHandler} className='card'>
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {open &&
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='expand'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
            s standard dummy text ever 
            since the 1500s. </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </motion.div>
        }
      </motion.div>
    </div>
  );
}

export default App;
