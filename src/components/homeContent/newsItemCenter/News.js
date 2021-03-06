import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import "./news.css"

const News = (props)=>{
    const [results, setResults] = useState([])
    
    const updateNews = async ()=> {
        // const url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=Iyk6nS3LlJc9Jg960gFjI7JmjPyi7aAe&limit=1&offset=8";
        const url = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=Iyk6nS3LlJc9Jg960gFjI7JmjPyi7aAe`;
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
                             {results.slice(0, 1).map((element) => {
                                 return <div className="col-md-4" key={element.url}>

                            <a className='articleLink' href={element.url}>
                            <NewsItem title={element.title}/>
                            </a>

                            <a className='articleLink' href={element.url}>
                                <img className='maingridImg' src={element.multimedia[0].url} alt="" />
                            </a>

                            <span className='topDescription'>
                                <a className='articleLink' href={element.url}>{element.abstract}</a>
                            </span>
                                     
                                     {/* <img src={results[0].multimedia[0].url} className='maingridImg' alt="" />
                                     <a className='articleLink' href="https://www.nytimes.com/2022/04/26/us/politics/mccarthy-republican-lawmakers.html"><NewsItem title="McCarthy Feared G.O.P. Lawmakers Put ‘People in Jeopardy’ After Jan. 6"/></a>
                                     <a className='articleLink' href="https://www.nytimes.com/2022/04/26/us/politics/mccarthy-republican-lawmakers.html"><img className='maingridImg' src='https://static01.nyt.com/images/2022/04/26/us/politics/26pol-jan6gop-mccarthy/merlin_197278008_974c85e2-e796-41d3-9e5c-177d3f7f5edb-jumbo.jpg?quality=75&auto=webp' alt="" /></a> */}
                                 </div>
                             })}
                         </div>
                         </div>
            </>
        )
    
}


export default News
