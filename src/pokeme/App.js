import './App.css';

import { Outlet } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Background from './components/background/Background';

const App = () =>
  <>
    <Background/>
    <Header/>
    <main className='container'>
      <Outlet></Outlet>
    </main>
    <Footer/>
  </>

export default App;
