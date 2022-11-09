import React from 'react'
import Article from './Article'
import '../../styles/HomeStyles/News.css'
function News({news}) {
  return (
  <div className='articles-section'>
    {   
        news.map((article, idx) => {
            return ( <Article key={idx} article={article} />)
        })
    }
   </div>
   )
}

export default News