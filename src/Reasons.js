import React from 'react'
import sunrise from './images/sunrise.png'
import pizza from './images/pizza.png'
import coffee from'./images/coffee.jpg'
import disco from './images/disco.jpg'
import planes from './images/planes.jpg'
import burger from './images/burger.jpg'
import random from './images/random.jpg'
import { useNavigate} from 'react-router-dom';






function Reasons() {

const navigate = useNavigate()


  return (
    <div>



                <header className="App-header">

            <div>
             <div className='div'>
             <h1>Remember our 1st date?</h1>
             <img src={sunrise} alt="sunrise" />
         </div>

         <div className='div'>
             <h1>or our favourite Pizza joint</h1>
             <img src={pizza} alt="Pizza" />
         </div>

         <div className='div'>
             <h1>or our favourite Coffee joint</h1>
             <img src={coffee} alt="Coffee" />
         </div>

         <div className='div'>
             <h1>or when we were sweating together ;))</h1>
             <img src={disco} alt="Disco"/>
         </div>

         <div className='div'>
             <h1>or when we were crashing into each other at Mach 2</h1>
             <img src={planes} alt="Planes"/>
         </div>

         <div className='div'>
             <h1>or when you made the best burgers for me</h1>
             <img src={burger} alt="Burger"/>
         </div>

         <div className='div'>
             <h1>or just the random shit that we do</h1>
             <img src={random} alt="random"/>
         </div>

         <div className='div_last'>
             <h1>These are just a few of the many reasons why you should be my Valentine...
                 not just this year, but for every year from here on ...
             </h1>

             <h2>So, I ask you again..</h2>

             <h1>Will you be my <span>Valentine</span> ??? </h1>

          <button onClick={()=>{navigate('/yes')}} ><h2>Yes</h2></button>


          <div id="heart"></div>
             
         </div>
         </div>
                   
                       
                
                </header> 
        </div>
  )
}

export default Reasons