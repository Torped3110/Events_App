import Home from './pages/Main.js'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Private from './components/PrivateRoute.js';
import Login from '../src/components/Login.js'
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
