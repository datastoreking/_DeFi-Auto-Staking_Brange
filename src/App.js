import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import Sidebar from '../src/Components/Sidebar/Sidebar.js'
import Home from '../src/Components/Home/Home.js'
import Navbar from './Components/Navbar/Navbar';
import Accounts from './Components/Accounts/Accounts';
import Calculator from './Components/Calculator/Calculator.js';
import ConnectWallet from './Components/ConnectWallet/ConnectWallet';



function App() {
  const [showModal, setShowModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [walletProvider, setWalletProvider] = useState();

  return (
    <>
    <div className='body'>
      <div className="sidebar_body">
        <Sidebar sidebar={sidebar} set={setSidebar}/>
      </div>
      <div className="home_body">
        <Navbar sidebar={sidebar} set={setSidebar}  setShowModal={setShowModal} walletProvider={walletProvider}/>
        <Routes>
          <Route exact element={<Home   />} path='/' />
          <Route exact element={<Accounts/>} path='/account' />
          <Route exact element={<Calculator/>} path='/calculator' />
        </Routes>
     </div>
      <ConnectWallet showModal={showModal} setShowModal={setShowModal} walletProvider={walletProvider} setWalletProvider={setWalletProvider} />
    </div>
    </>
  );
}

export default App;
