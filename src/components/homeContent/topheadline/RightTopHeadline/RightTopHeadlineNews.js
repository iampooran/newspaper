import React, {useEffect, useState} from 'react'
import NewsItem from './RightTopHeadline'


const RightTopHeadlineNews = (props)=>{
    const [results, setResults] = useState([])
    
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = "https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=Iyk6nS3LlJc9Jg960gFjI7JmjPyi7aAe&limit=20&offset=20";
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
export default RightTopHeadlineNews
