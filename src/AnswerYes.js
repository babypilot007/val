import React from 'react'
import { useNavigate} from 'react-router-dom';
import happy from './images/happy.jpg'


function AnswerYes() {
const navigate = useNavigate()

  return (
    <div className='App-header'>

        <img className='happy' src={happy} alt = 'happy'></img>
     <h2>Even though you said Yes</h2>
            <h3>Let me give you a few reasons why you are my</h3>
                <h1 className='span'>valentine</h1>

            <button onClick={()=>{navigate('/reasons')}}><h2>Click me</h2></button>
    </div>
  )
}

export default AnswerYes