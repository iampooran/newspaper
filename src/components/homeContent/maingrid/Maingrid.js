import React from 'react'
import NewsLeft from '../newsItemLeft/News'
import NewsRight from '../newsItemRight/News'
import NewsCenter from '../newsItemCenter/News'
import "./maingrid.css"

export default function Maingrid() {
  return (
      <>
        <div className='container maingrid'>
            <div className="leftNews">
                <NewsLeft/>
            </div>
            <div className="centerNews">
                <span className='mainHeading'><NewsCenter/></span>
                
            </div>
            <div className="rightNews">
            <NewsRight/>
            </div>
        </div>
      </>
    
  )
}
