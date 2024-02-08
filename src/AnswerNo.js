import React from 'react'
import { useNavigate} from 'react-router-dom';
import sad from './images/sad.jpg'


function AnswerNo() {
const navigate = useNavigate()

  return (

        <div className='App-header'>
        <img className='happy' src={sad} alt='sad'></img>

          <h2>I knew you were going to say No..</h2>
            <h3>Let me change your mind by giving you a few reasons to say Yes...</h3>
            
            <button onClick={()=>{navigate('/reasons')}}><h2>Click me</h2></button>

    </div>
  )
}


export default AnswerNo
