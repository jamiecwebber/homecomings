import React from 'react'
import NewWindow from 'react-new-window'
import { Link } from 'react-router-dom'

function MainPage () {
    return (
        <div>
            <h1>MAIN PAGE</h1>
            {/* <NewWindow name='blah1' features={{'width':200,'height':200}} >
                <h1>HOMECOMINGS</h1>
            </NewWindow>
            <NewWindow name='blah2' features={{'width':230,'height':230}} >
                <h1>HOMECOMINGS</h1>
            </NewWindow> */}
            <Link to='/about'>ABOUT</Link><br/>
            <Link to='/'>back to welcome page</Link>
        </div>
    )
}

export default MainPage