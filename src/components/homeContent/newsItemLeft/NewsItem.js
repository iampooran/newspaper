import React from 'react'

const NewsItem = (props)=> {
        let { title} = props;
        return (
             <div>
               <h5 className="card-title">{title}</h5>
            </div>
        )
     
}

export default NewsItem
