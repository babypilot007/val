import React from 'react'
import { useNavigate} from 'react-router-dom';



const Home = () => {

const navigate = useNavigate()


  return (
    <div>

                <header className="App-header">
                        <h1>Hey Baby...
                        <br></br>Will you be my
                        </h1>
                        <h2 className='span'> Valentine??</h2>
                        <div>
                        <button onClick={()=>{navigate('noAnswer')}}><h1>No...</h1></button>
                        <button onClick={()=>{navigate('yesAnswer')}}><h1>Yes...</h1></button>
                       
                        </div>
                
                </header> 
        </div>
  )
}

export default Home