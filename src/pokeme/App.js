import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () =>
  <>
    <Header/>
    <main>
      <Outlet></Outlet>
    </main>
    <Footer/>
  </>

export default App;
