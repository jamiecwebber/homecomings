import React from 'react'
import { Link } from 'react-router-dom'
import  styled  from 'styled-components'

const StyledTextBox = styled.div`
    font-family: "Comic Sans MS", cursive, sans-serif;
    color: red;
    margin: 5px auto;
`

function WelcomePage () {
    return (
        <div>
            <h1>Welcome to Homecomings</h1>
            <h2>An art thing by harp+</h2>
            <StyledTextBox>This website uses all sorts of classic, super-outdated web design stuff, and well, in this day and age you can't
                just arbitrarily open a random number of popups whenever you would like to.
            </StyledTextBox>
            <StyledTextBox>Please click below and your browser will prompt you for a permissions for popups, cookies, etc., and then after that you can "enjoy" our site
            </StyledTextBox>
            <Link to="/main">Main</Link>
        </div>
    )
}

export default WelcomePage