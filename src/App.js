// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
