import React, {useEffect, useState} from 'react'
import NewsItem from './CenterTopHeadline'

const CenterTopHeadlineNews = (props)=>{
    const [results, setResults] = useState([])

    const updateNews = async ()=> {
        const url = "https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=Iyk6nS3LlJc9Jg960gFjI7JmjPyi7aAe&limit=20&offset=15";
        let data = await fetch(url);
        let parsedData = await data.json()
        setResults(parsedData.results)
    }
    useEffect(() => {
        document.title = "Newspaper";
        updateNews(); 
    }, [])
        return (
            <>
                <div className="container">
                         
                         <div className="row">
                             {results.map((element) => {
                                 return <div className="col-md-4" key={element.url}>
                                     <a className='articleLink' href={element.url}><NewsItem title={element.title}/></a>
                                     
                                 </div>
                             })}
                         </div>
                         </div>
            </>
        )
    
}
export default CenterTopHeadlineNews
