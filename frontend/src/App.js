import Home from './pages/Main.js'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Login from '../src/components/Login.js'
import Register from './components/Register.js';
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
