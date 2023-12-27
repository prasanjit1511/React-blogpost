
import './App.css';


import { BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './Home';
 import About from './About';
 
 import Profile from './Profile';
 import Blog from './Blog';
 import Contact from './Contact';
 import Error from './Error';




function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={ <Error/> }></Route>
      
       </Routes>
    </BrowserRouter>

      
      
    </div>
  );
}

export default App;
 