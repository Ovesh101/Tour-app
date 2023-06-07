import React, { useState } from 'react';

const Tour = ({key , tour , removeTour}) => {
  const [readMore , setReadmore] = useState(false)
  return (
   
    <article className="single-tour">
      <img src={tour.image}  />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className='tour-price'> {tour.price}</h4>
        </div>
        <p>{readMore ? tour.info : `${tour.info.substring(0 , 200)}`}
        <button onClick={() => setReadmore(!readMore)}>
            {readMore ? 'show less' : 'Read More'}
        </button>
        </p>
       
        <button className='delete-btn' onClick={()=> removeTour(tour.id)}>
          Not intrested

        </button>
        
      </footer>
    </article>
  );
};

export default Tour;
