import React, { useState } from 'react'
import serachicon from '../assets/magnify.svg'
import Dropdown from 'react-bootstrap/Dropdown';
const HomepageSearchComp = () => {
  const [searching, setSearching] = useState(false)
  function handleSearchClick() {
    setSearching(prev => !prev)

  }
  return (
 
        <div className='searchandsort-wrapper'>
          <div className='searchbar-wrapper' >
            <img src={serachicon} alt="" />
            <input className='searchbar-input' onClick={handleSearchClick} placeholder="Search for a course e.g. COMP1511" type="text" />
          </div> 
          {searching && (<><div className='search-overlay'>
            <div className='search-result-div'>
              <button onClick={handleSearchClick} > Close</button>
              </div>
            </div></>)}
          <div className='dropdown-container'>
            <Dropdown >
              <Dropdown.Toggle className='dropdown-sort' variant="secondary" id="dropdown-basic">
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