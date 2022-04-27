import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import "./news.css"

const News = (props)=>{
    const [results, setResults] = useState([])
    
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://api.nytimes.com/svc/topstories/v2/${props.category}.json?api-key=Iyk6nS3LlJc9Jg960gFjI7JmjPyi7aAe`;
        props.setProgress(20);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        props.setProgress(70);
        setResults(parsedData.results)
        props.setProgress(100);
    }
    
    useEffect(() => {
        updateNews(); 
        // eslint-disable-next-line
    }, [])
        return (
            <>
                <div className="container">
                         <div className="grid-container">
                             {results.map((element) => {
                                 return <div className="col-md-4" key={element.url}>
                                     <a className='articleLink' href={element.url}><img className='imgGrid' src={element.multimedia[0].url} alt="" />
                                     <NewsItem title={element.title}/></a>
                                 </div>
                             })}
                         </div>
                         <div className="navbar"></div>
                         </div>
            </>
        )
    
}
export default News
