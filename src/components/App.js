// import logo from './logo.svg';
// import './index.scss';

import './App.scss';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// import ItemListContainer from "./ItemListContainer";
import HooksPractica from "./HooksPractica"

function App() {
  return (
    <>
      <div className='contenedorGeneral'>
        <Header />
        <Main />
        {/* <ItemListContainer greeting={"Hola"}/> */}
        <HooksPractica />
        <Footer />
      </div>
    </>
  ) 
}

export default App;
