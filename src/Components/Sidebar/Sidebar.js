import React from 'react'
import logo from '../Images/Logo.png'
import {NavLink, Link} from 'react-router-dom'
import SidebarData from './SidebarData'
import Swap from '../Images/Menu/Swap.png'
import Doc from '../Images/Menu/Docs.png'


//Social Images
import s1 from '../Images/Social/S1.png'
import s2 from '../Images/Social/S2.png'
import s3 from '../Images/Social/S3.png'
import s4 from '../Images/Social/S5.png'


const Sidebar = ({sidebar, set}) => {
  return (
    <div className={sidebar ? "sidebar open" : "sidebar" }>
      <img className='logo' src={logo} alt="logo" style={{width: '85%'}}/>
      <div className="menu">
        {SidebarData.map((val, ind)=>{
          return(
            <div key={ind}> <NavLink activeclassName="active" to={val.path} onClick={()=>set(!sidebar)}><img alt='' src={val.menuIcon}/><span>{val.name}</span></NavLink></div>
          )
        })}
        <div><a href="https://widgets.rubic.exchange/?iframe=vertical&amount=1&fee=0.075&feeTarget=0x72B055F8358dd8e3E368325060E8460b4dc266F3&from=MATIC&fromChain=POLYGON&hideSelectionFrom=false&hideSelectionTo=true&polygon_tokens=%5B%220x8D546026012bF75073d8A586f24A5d5ff75b9716%22%5D&promoCode=HHsLtww8&slippageCcr=30&slippageIt=30&theme=dark&to=SPHERE&toChain=POLYGON" target="_blank"><img alt='swap' src={Swap}/> <span>Swap</span></a></div>
        <div><a href="https://docs.sphere.finance/" target="_blank"><img alt='swap' src={Doc}/> <span>Doc</span></a></div>
      </div>

      <div className="social">
        <Link to="#"><img src={s1} alt=""/></Link>
        <Link to="#"><img src={s2} alt=""/></Link>
        <Link to="#"><img src={s3} alt=""/></Link>
        <Link to="#"><img src={s4} alt=""/></Link>
      </div>
    </div>
  )
}

export default Sidebar