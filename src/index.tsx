import React ,{Suspense}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store/store'
import {CircularProgress} from '@mui/material'
import './i18n'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <Router>
        <Suspense fallback={<CircularProgress  sx={{position:'absolute',top:'50%',left:'50%'}}
                                  size={40} />}>

          <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

