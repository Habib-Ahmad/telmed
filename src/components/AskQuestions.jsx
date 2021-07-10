import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove'
import blankIphone from '../assets/images/blank_iphone.png'

function Section1() {
    return (
        <div className="AskQuestions">
            <div className="AskQuestions__left">
            <img className="AskQuestions__img" src={blankIphone} alt=""/>
            </div>
            <div className="AskQuestions__right">
                <div className='AskQuestions__RightText1'>Access hundreds of answers from doctors</div>

                <div className='AskQuestions__RightText2'>
                    <div><RemoveIcon fontSize="small" style={{marginRight:'10px'}} /><div>Ask questions anonymously</div></div>
                    <div><RemoveIcon fontSize="small" style={{marginRight:'10px'}} /><div>Get answered by industry professionals within minutes</div></div>
                </div>
            </div>
        </div>
    )
}

export default Section1
