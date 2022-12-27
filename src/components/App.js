// import logo from './logo.svg';
// import './index.scss';

import './App.scss';
// import Card from "./Card";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <>
      <div className='contenedorGeneral'>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  ) 
}

export default App;
