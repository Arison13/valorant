import React from 'react'
import '../../styles/HomeStyles/Article.css';

function Article({article}) {
  return (
    <a className='article-wrapper' href={article.external_link} target='_blank' rel="noreferrer"> 
        <div className='article-box'>
            <img className='article-img' src={article.banner_url} alt={article.title}/>
            
            <div className='article-info'> 
                <h4 className='article-title'> {article.title} </h4>
                {/* Need to handle article date to correct format */}
                <a href={article.external_link} target='_blank' rel="noreferrer">See More</a>
                <p className='article-date'>Posted: {article.date}</p>
            </div>
        </div>
    </a>
  )
}

export default Article