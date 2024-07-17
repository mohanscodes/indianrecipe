import React from 'react';
import './footer.css'

const footer = () => {
  return (
    <div className='footer_row'>

    <div className='footer_row_one'>
      <div>
        <img alt='img' src='https://www.yummyoyummy.com/wp-content/uploads/2014/07/YummyOYummy_logo.png'/>
        <p>A gourmet dictionary of over 1,400 simple recipes ranging 
          from breakfast, kids recipes, vegan, non-vegetarian to Kerala
           dishes to make cooking fun.</p>

        <button className='BackToTop'> Read more </button>
        
      </div>

      <div>
       <h1>RECENT POSTS</h1>
       <p>Rajma</p>
       <p>Easy Chocolate Nut Clusters</p>
       <p>Bombay Mixture / Mutta Mixture</p>
       <p>Chicken Shawarma Bowl</p>
       <p>Hotel Style Kadala Curry Inspired by</p>
      </div>

      <div>
       <h1>RECENT COMMENTS</h1>
       <p>Maya Akhil on Hyderabadi Mutton Dum Biriyani – Kacchi Style</p>
       <p>Nita Dev on Malabar Style Chicken Dum Biriyani / Kacchi Biriyani With Video</p>
       <p>Nita Dev on Hyderabadi Mutton Dum Biriyani – Kacchi Style</p>
       <p>Maya Akhil on Palappam</p>
      </div>
    </div>

    <div className='footer_row_two'>
      <p>COPYRIGHT © 2023–2024 YUMMY HO YUMMY</p>
    </div>

    </div>
  )
}

export default footer
