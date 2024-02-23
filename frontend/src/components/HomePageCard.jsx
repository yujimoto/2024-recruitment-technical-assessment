import React, { useState } from 'react'
import courseArray from '../../courses.json'
const HomePageCard = () => {
   
    function termComp(terms) {
        return (terms.map((term) => (<div className='term-container'>
            {term}
        </div>)))
    }
    function renderStars(averageStars) {
        // Round the averageStars to the nearest whole number
        const roundedStars = Math.round(averageStars);
        let stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span
              key={i}
              className={i <= roundedStars ? 'star-filled' : 'star'}
            >
              ★
            </span>
          );
        }
        return <>{stars}</>;
      }
    
  return (
    <div className='course-card-wrapper'>
        {courseArray.map(course => (<>
        <div className='course-card-ind-wrapper'style={{display:'flex',flexDirection:'col'}}>
            <div>
                <div>
                    <div className='title-review-sec'>
                        <h2>{course.course_prefix + course.course_code}</h2>
                        <div className='review-sec'>
                            <div className='review-sec-stars'>
                                {renderStars(course.average_stars)}
                            </div>
                            <p> {course.total_reviews} reviews</p>
                        </div>
                    </div>
                    <p>{course.course_title}</p>
                </div>
                <div className='terms-wrapper'>
                    {termComp(course.offered_terms)}
                </div>
            </div>
        </div>
        </>))}
    </div>
  )
}

export default HomePageCard