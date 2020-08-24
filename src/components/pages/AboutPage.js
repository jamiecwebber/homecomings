import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage () {
    return (
        <div>
            <div>
                <h1>About this project</h1>
                <div>canada council logo</div>
                <div>
                    bunch of pictures of us
                </div>
            </div>
            <Link to='/main'>BACK TO MAIN PAGE</Link>
        </div>
    )
}

export default AboutPage