import React from 'react'
import "./topheadline.css"
import LeftTopHeadline from './leftTopHeadline/LeftTopHeadlineNews'
import RightTopHeadline from './RightTopHeadline/RightTopHeadlineNews'
import CenterTopHeadline from './CenterTopHeadline/CenterTopHeadlineNews'

export default function TopHeadline() {
  return (
      <>
        <div className='container maingrid'>
            <div className="leftTopHeadLine">
                <h2 className='topHealineH2'>Top Headlines</h2>
                <LeftTopHeadline/>
            </div>
            <div className="centerTopHeadLine">
                <h2 className='topHealineH2'>Popular</h2>
                <CenterTopHeadline/>
            </div>
            <div className="rightTopHeadLine">
                <h2 className='topHealineH2'>Trending</h2>
                <RightTopHeadline/>
            </div>
        </div>
      </>
    
  )
}
