import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove'

function VirtualCalls() {
    return (
        <div className="VirtualCalls">
            <div className="VirtualCalls__right">
                <div className='VirtualCalls__RightText1'>Consult with doctors from the comfort of your home</div>
                <div className='AskQuestions__RightText2'>
                    <div><RemoveIcon fontSize="small" style={{marginRight:'10px'}} /><div>Ask questions anonymously</div></div>
                    <div><RemoveIcon fontSize="small" style={{marginRight:'10px'}} /><div>Get answered by industry professionals within minutes</div></div>
                </div>
            </div>
            <div className="VirtualCalls__left">
                <img className="VirtualCalls__img" src="Blank_Iphone.png" alt=""/>
            </div>
        </div>
    )
}

export default VirtualCalls
