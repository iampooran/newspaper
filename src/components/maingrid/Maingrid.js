import React from 'react'
import NewsLeft from '../newsItemLeft/News'
import NewsRight from '../newsItemRight/News'
import "./maingrid.css"

export default function Maingrid() {
  return (
      <>
        <div className='container maingrid'>
            <div className="leftNews">
                <NewsLeft/>
            </div>
            <div className="centerNews">
                <span className='mainHeading'>Heading</span>
                <img className='maingridImg' src="https://static01.nyt.com/images/2022/04/26/multimedia/26ukraine-blog-front-top-photos1/26ukraine-blog-front-top-photos1-superJumbo.jpg?quality=75&auto=webp" alt="" />
                <span className='mainDescription'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut, alias sunt at eum tenetur quasi ea impedit quisquam, quo, aliquam commodi voluptatem illo dolores eaque omnis placeat fugit aspernatur?
                </span>
            </div>
            <div className="rightNews">
            <NewsRight/>
            </div>
        </div>
      </>
    
  )
}
