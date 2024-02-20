import React from 'react'
import serachicon from '../assets/magnify.svg'
import Dropdown from 'react-bootstrap/Dropdown';
const HomepageSearchComp = () => {
  return (
 
        <div className='searchandsort-wrapper'>
          <div className='searhbar-wrapper' >
            <img src={serachicon} alt="" />
            <input placeholder="Search for a course e.g. COMP1511" type="text" />
          </div> 
          <div className='dropdown-container'>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Sort by   
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Alphabetical (A-Z)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Alphabetical (Z-A)</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Overall Rating</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Enjoyability</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Usefullness</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
    </div>
        </div>
   
  )
}

export default HomepageSearchComp