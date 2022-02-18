
import './App.css';

import {motion ,Variants} from 'framer-motion'
import {useRoutes} from 'react-router'
import {routes} from './tools/routes'



function App() {
     
        let theRoutes = useRoutes(routes)
  return (
    <div className="App" >
       {theRoutes}
    </div>
  );
}

export default App;
