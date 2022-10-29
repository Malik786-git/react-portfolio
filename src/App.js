import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from "./components/navbar/Navbar";
import Sidebar from './components/sidebar/Sidebar';
import Work from './components/Work';
import { AppProvider } from './context/context';


function App() {

  return (
    <>
    <AppProvider>
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>
        <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/work' element={<Work/>} />
             <Route path='/about' element={<About/>} />
             <Route path='/contact' element={<Contact/>} />
        </Routes>

      </BrowserRouter>
    </AppProvider>
     
    </>
  );
}


export default App;