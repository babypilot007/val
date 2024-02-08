import React from 'react'
import { useNavigate} from 'react-router-dom';



const Home = () => {

const navigate = useNavigate()


  return (
    <div>

                <header className="App-header">
                        <h2>Hey Baby...</h2>
                        <h1>Will you be my Valentine??</h1>
                        <div>
                        <button onClick={()=>{navigate('noAnswer')}}><h2>No...</h2></button>
                        <button onClick={()=>{navigate('yesAnswer')}}><h2>Yes...</h2></button>
                       
                        </div>
                
                </header> 
        </div>
  )
}

export default Home