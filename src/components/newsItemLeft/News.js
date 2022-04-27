import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'

const News = (props)=>{
    const [results, setResults] = useState([])
    
    const updateNews = async ()=> {
        const url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=Iyk6nS3LlJc9Jg960gFjI7JmjPyi7aAe&limit=9&offset=2";
        let data = await fetch(url);
        let parsedData = await data.json()
        setResults(parsedData.results)
    }
    useEffect(() => {
        updateNews(); 
    }, [])
        return (
            <>
                <div className="container">
                         
                         <div className="row">
                             {results.map((element) => {
                                 return <div className="col-md-4" key={element.url}>
                                     <NewsItem title={element.title}/>
                                 </div>
                             })}
                         </div>
                         </div>
            </>
        )
    
}


export default News
