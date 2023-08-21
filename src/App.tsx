import React from 'react';
import { BrowserRouter , Route,Routes  } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';
import Loading from './Component/Loading';


const LoadableHome = Loadable({
  loader: () => import('./Pages/Home'),
  loading: Loading,
});

const LoadableAbout = Loadable({
  loader: () => import('./Pages/Login'),
  loading: Loading,
});
const LoadableSignUp = Loadable({
  loader: () => import('./Pages/Signup'),
  loading: Loading,
});



function App() {
  
  return (
     <BrowserRouter>
     {/* <Navbar /> */}
      <Routes >
        <Route  path="/Home" Component={LoadableHome}/>
        <Route path="/" Component={LoadableAbout} />
        <Route path="/Signup" Component={LoadableSignUp} />

      </Routes >
    </BrowserRouter>
    
  );
}

export default App;
