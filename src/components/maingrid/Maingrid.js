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
                <span className='mainDescription'>
                New audio recordings reveal Kevin McCarthy worried that comments by his far-right colleagues could incite violence. He said he would try to rein in the lawmakers, but has instead defended them.
                </span>
            </div>
            <div className="rightNews">
            <NewsRight/>
            </div>
        </div>
      </>
    
  )
}
