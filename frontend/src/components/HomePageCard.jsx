import React, { useState } from 'react'
import courseArray from '../../courses.json'
const HomePageCard = () => {
   
    function termComp(terms) {
        return (terms.map((term) => (<div className='term-container'>
            {term}
        </div>)))
    }
  return (
    <div className='coruse-card-wrapper'>
        {courseArray.map(course => (<>
        <div className='course-card-ind-wrapper'>
            <div>
                <h2>{course.course_prefix + course.course_code}</h2>
                <p>{course.course_title}</p>
            </div>
            <div className='terms-wrapper'>
                {termComp(course.offered_terms)}
            </div>
            <div>
                
                <p> {course.total_reviews} reviews</p>
            
            </div>
            </div></>))}
    </div>
  )
}

export default HomePageCard