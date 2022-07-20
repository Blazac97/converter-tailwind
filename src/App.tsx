import { Header } from './components/header';
import { Footer } from './components/footer';
import {BrowserRouter, Routes  ,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className=' static font-mono text-slate-100'>
    <Header/>
    <div className=''> 
Привет
    </div>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
