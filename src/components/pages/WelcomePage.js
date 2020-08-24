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
            <StyledTextBox>This website uses all sorts of classic, super-outdated and ill-advised web design, and well, in this day and age you can't
                just go around arbitrarily opening a random number of popups whenever you would like to.
            </StyledTextBox>
            <StyledTextBox>If you're willing to go along with this for some reason, please click below and your browser will prompt you for a permissions for popups, cookies, etc., and then after that we can harass you with whatever horrific web design decisions we may desire.
            </StyledTextBox>
            <StyledTextBox>Hey at least you can't claim we weren't above-board with this
            </StyledTextBox>
            <Link to="/main">Main</Link>
        </div>
    )
}

export default WelcomePage