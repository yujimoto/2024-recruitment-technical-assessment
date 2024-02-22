import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import HomepageSearchComp from '../components/HomepageSearchComp'
import HomePageCard from '../components/HomePageCard'
const HomePage = () => {
    const [colorIndex, setColorIndex] = useState(0)
    const colorSet = ['blue','red','yellow']
    function changeColor() {
        if (colorIndex === 2) {
            setColorIndex(0)
        } else {
            setColorIndex(prev => prev + 1)
        }
        
    }
  return (
    <div className='homepage-wrapper'>
        <Sidebar/>
        <div className='homepage-main-sec-wrapper'>
            <div className="homepage-title-sec">
                <h3 >Devsoc presents</h3>
                <h1 onClick={changeColor} className={`title-${colorSet[colorIndex]}`}>unilectives</h1>
                <h4>Your one-stop shop for UNSW course and elective reviews.</h4>
            </div>
        <div>
            <HomepageSearchComp/>
        </div>
        <div>
            <HomePageCard/>
        </div>
        </div>
        </div>
  )
}

export default HomePage