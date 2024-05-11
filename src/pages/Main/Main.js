import React from 'react'
import {Companies, Hero, Residencies, GetStarted, Value, Contact} from '../../components'

import './Main.css'

function Main(){
    return(
        <div className='Main'>
        <div>
        <div className="white-gradient" />
        <Hero />
      </div>
            <Companies/>
            <Residencies/>
            <Value/>
            <Contact/>
            <GetStarted/>
        </div>
    )
}
export default Main