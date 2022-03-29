

import './App.css';
import {useEffect} from 'react'
import {motion ,Variants} from 'framer-motion'
import {useRoutes,useLocation} from 'react-router'
import {routes} from './tools/routes'



function App() {
     let location = useLocation()
      let theRoutes = useRoutes(routes)
      useEffect(()=>{
        document.querySelector('.App')?.scrollTo(0,0)

        },[location])
  return (
    <div className="App" >
       {theRoutes}
    </div>
  );
}

export default App;
