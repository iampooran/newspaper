import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import "./topheadline.css"
import LeftTopHeadline from './leftTopHeadline/LeftTopHeadlineNews'
import RightTopHeadline from './RightTopHeadline/RightTopHeadlineNews'
import CenterTopHeadline from './CenterTopHeadline/CenterTopHeadlineNews'

export default function TopHeadline() {
    const [progress, setProgress] = useState(0)
  return (
      <>
      <LoadingBar
        height={2}
        color='black'
        progress={progress} 
      />
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
                <h2 className='topHealineH2'>Business</h2>
                <RightTopHeadline setProgress={setProgress}/>
            </div>
        </div>
      </>
    
  )
}
