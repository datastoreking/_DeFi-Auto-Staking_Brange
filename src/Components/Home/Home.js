import React from 'react'
import { marketplaceData, nofIncinatorData, nofPriceData, nofIncinatorData_buysell } from './HomeData'
import Countdown from 'react-countdown'
import LineGraph from './LineGraph'

const Home = () => {
  const renderer = ({ minutes, seconds, completed })=>{
    return(
      <p className='value'><span>{minutes}<small></small></span> : <span>{seconds}<small></small></span></p>
    )
  }
  return (
    <div className='home'>
        <div className="marketplace_desc">
            {marketplaceData.map((val, ind)=>{
              return(
                <div className="marketplace_desc_poperty" style={{background : `${val.bgColor}`}} key={ind}>
                  <p className='heading'>{val.first}</p>
                  <p className='value'>{val.value1}</p>
                </div>
              )
            })}
            <div className="marketplace_desc_poperty">
                  <p className='heading'>Next Rebase</p>
                  <Countdown
                    date={Date.now() + 1800000}
                    renderer = {renderer}
                  />
                </div>
        </div>
        <div className="nof_price">
          {nofPriceData.map((val, ind)=>{
            return(
              <div className="nof_price_box"  key={ind}>
                <p className="nof_price_title">{val.title}</p>
                <p className="nof_price_value">{val.value}</p>
              </div>
            )
          })}
        </div>
        <div className="linegraph">
          <LineGraph />
        </div>
        <div className="viewchart-btn">
          <button><a href="https://dexscreener.com/polygon/0xf305242c46cfa2a07965efbd68b167c99173b496" target="_blank">View Chart</a></button>
        </div>
        <div className="nof_incinator">
          {nofIncinatorData_buysell.map((val, ind)=>{
            return(
              <div className="nof_incinator_box_buysell" key={ind}>
                <p className="nof_incinator_title">{val.title}</p>
                <p className="nof_incinator_value">{val.value}</p>
              </div>
            )
          })}
        </div>
        <div className="nof_incinator">
          {nofIncinatorData.map((val, ind)=>{
            return(
              <div className="nof_incinator_box" key={ind}>
                <p className="nof_incinator_title">{val.title}</p>
                <p className="nof_incinator_value">{val.value}</p>
              </div>
            )
          })}
        </div>
        <div className="nof_price_burn">
          <div className="nof_price_box_burn">
            <p className="nof_price_title">🔥 TOTAL BURNED TO DATE 🔥</p>
            <p className="nof_price_value">$712,082.23</p>
          </div>
        </div>
    </div>
  )
}

export default Home