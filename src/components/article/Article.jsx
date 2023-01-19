import React from 'react';

import './article.css'
const Article = ({imgUrl, date, text}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img  src={imgUrl} alt="Blog"/>
      </div>
      <div className='gpt3__blog-container_article-content'>
          <div>
            <p> {date}</p>
            <h4> {text}</h4>
          </div>
          <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article