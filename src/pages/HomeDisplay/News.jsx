import React from 'react'

function News({news}) {
  return (<div>
    {   
        news.map((n, idx) => {
            return (
            <div className='news-section' key={idx}>
                <img src={n.banner_url} alt={n.title}/>
                <h4> {n.title} </h4>
                <p>Category {n.category}</p>
                <a href={n.url}> See More</a>
            </div>
                )
        })
    }
   </div>)
}

export default News