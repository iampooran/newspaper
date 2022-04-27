import React from 'react'
import "./news.css"

const NewsItem = (props)=> {
        let {title} = props;
        return (
             <div>
               <div className="grid-container">
                        <span className="gridTitle">{title}</span>
                </div>
            </div>
        )     
}

export default NewsItem
