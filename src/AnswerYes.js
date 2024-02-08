import React from 'react'
import { useNavigate} from 'react-router-dom';


function AnswerYes() {
const navigate = useNavigate()

  return (
    <div className='App-header'>
     <h2>Even though you said Yes</h2>
            <h3>Let me give you a few reasons why you are my valentines this year...</h3>

            <button onClick={()=>{navigate('/reasons')}}><h2>Click me</h2></button>
    </div>
  )
}

export default AnswerYes