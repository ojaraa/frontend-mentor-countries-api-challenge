import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route ,useParams} from 'react-router-dom' 
// import './App.css';
import Home from './pages/Home';
import Loader from './components/loader/Loader';
import DesignDetail from './pages/DesignDetail';
import ErrorPage from './pages/ErrorPage';


function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route exact path="/:name"  element={<DesignDetail/>}/>
          <Route  path="/load" element={ <Loader/>}/>
          <Route  path="/error" element={ <ErrorPage/>}/>
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
